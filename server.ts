import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Shared Gemini client setup on server with recommended options & User-Agent header for telemetry
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // API route to run a simulation step
  app.post("/api/simulate-step", async (req, res) => {
    try {
      const { objective, currentAgentId, agents, history, customApiKey, customModel } = req.body;

      if (!objective || !currentAgentId || !agents || !Array.isArray(agents)) {
        return res.status(400).json({ error: "Missing required parameters (objective, currentAgentId, agents)" });
      }

      // Find the active agent
      const currentAgent = agents.find((a: any) => a.id === currentAgentId);
      if (!currentAgent) {
        return res.status(404).json({ error: "Current agent not found in the agents list" });
      }

      // Safeguard Gemini initialization
      const finalApiKey = (customApiKey && customApiKey.trim() !== "") ? customApiKey.trim() : process.env.GEMINI_API_KEY;
      if (!finalApiKey) {
        return res.status(400).json({
          error: "GEMINI_API_KEY is not defined. Please supply your custom Gemini API key in the 'LLM Settings' top bar panel."
        });
      }

      // Initialize GoogleGenAI instance for this request
      const requestAi = new GoogleGenAI({
        apiKey: finalApiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const modelToUse = (customModel && customModel.trim() !== "") ? customModel.trim() : "gemini-3.5-flash";

      // Format previous history for the model context
      const formattedHistory = history && Array.isArray(history) && history.length > 0
        ? history.map((h: any) => `[${h.senderName} (${h.senderDesignation})]: ${h.text}`).join("\n\n")
        : "No previous messages. This is the first step of the simulation.";

      // Build powerful agent coaching prompt
      const systemInstruction = `You are simulated Autonomous AI Agent in a visual multi-agent workspace.
Your Identity:
- Name: ${currentAgent.name}
- Designation/Role: ${currentAgent.designation}
- Core Directives & System Prompt: ${currentAgent.systemPrompt}

Overall Team Objective:
"${objective}"

All Active Team Members Present in the Workspace Floor:
${agents.map((a: any) => `- Name: "${a.name}" | ID: "${a.id}" | Role: "${a.designation}"`).join("\n")}

Historical Conversation Progress:
---
${formattedHistory}
---

Your Instructions for this turn:
1. Review the overall objective and what former agents have shared.
2. Execute your specific subtask, reasoning, or feedback related to your role. Be highly detailed, constructive, and realistic.
3. At the very end of your response, you MUST delegate the next turn to exactly one of the active team members (including yourself if more work is needed on your end, or another agent), by appending a specific line in exactly this format:
   Delegation: [Agent Name] ([Agent ID]) - [Your direct task context/instruction for them]
   
   Example of delegation line:
   Delegation: Developer Agent (dev-uuid-123) - Please write the code outline for the API routes.

4. If you believe the global task has been successfully and fully completed (with all summaries, codes, or reviews finalized), and no further steps are needed, output:
   Delegation: Done - Object general task finished.

Remember, do not invent new agents to delegate to. Only use of the IDs list provided.`;

      const response = await requestAi.models.generateContent({
        model: modelToUse,
        contents: "Draft your logical execution and plan to fulfill the objective.",
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      const responseText = response.text || "No output generated.";

      // Simple regex parser to extract delegation targets
      let targetAgentId: string | null = null;
      let delegationReason = "Delegated next turn";
      let isDone = false;

      const delegationMatch = responseText.match(/Delegation:\s*([^\n(]+)\s*\(([^)]+)\)\s*(?:-?\s*(.*))?/i);
      if (delegationMatch) {
        targetAgentId = delegationMatch[2].trim();
        delegationReason = delegationMatch[3]?.trim() || "Executing following step";
      } else if (responseText.toLowerCase().includes("delegation: done")) {
        isDone = true;
      } else {
        // Fallback: choose the next agent round-robin or randomly to prevent system deadlock
        const currentIndex = agents.findIndex((a: any) => a.id === currentAgentId);
        const nextIndex = (currentIndex + 1) % agents.length;
        const nextAgent = agents[nextIndex];
        if (nextAgent && nextAgent.id !== currentAgentId) {
          targetAgentId = nextAgent.id;
          delegationReason = "Sequential fallback rotation";
        } else {
          isDone = true;
        }
      }

      res.json({
        text: responseText,
        senderId: currentAgent.id,
        senderName: currentAgent.name,
        senderDesignation: currentAgent.designation,
        delegateId: isDone ? null : targetAgentId,
        delegationReason: isDone ? "Global task accomplished" : delegationReason,
        isDone: isDone,
      });

    } catch (error: any) {
      console.error("[Simulator Server] Step Simulation error status:", error);
      res.status(500).json({ error: error?.message || "Internal server error conducting simulation step." });
    }
  });

  // Ensure any JSON syntax errors or downstream handler errors return JSON and not Express HTML pages
  app.use((err: any, req: any, res: any, next: any) => {
    console.error("[Simulator Server] Express Application Error:", err);
    res.status(err.status || 500).json({
      error: err.message || "An unexpected system error occurred on the custom team simulation server."
    });
  });

  // Serve static files in production & bundle Vite middleware in development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  const PORT = 3000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Simulator Server] Running on http://localhost:${PORT}`);
  });
}

// Global safety capture to prevent container/process crashes on unhandled rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("[Simulator Server] Critical Unhandled Rejection at:", promise, "reason:", reason);
});
process.on("uncaughtException", (error) => {
  console.error("[Simulator Server] Critical Uncaught Exception:", error);
});

startServer();
