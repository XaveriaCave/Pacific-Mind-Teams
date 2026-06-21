var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var apiKey = process.env.GEMINI_API_KEY;
var ai = null;
if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
  ai = new import_genai.GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build"
      }
    }
  });
}
async function startServer() {
  const app = (0, import_express.default)();
  app.use(import_express.default.json());
  app.post("/api/simulate-step", async (req, res) => {
    try {
      const { objective, currentAgentId, agents, history, customApiKey, customModel } = req.body;
      if (!objective || !currentAgentId || !agents || !Array.isArray(agents)) {
        return res.status(400).json({ error: "Missing required parameters (objective, currentAgentId, agents)" });
      }
      const currentAgent = agents.find((a) => a.id === currentAgentId);
      if (!currentAgent) {
        return res.status(404).json({ error: "Current agent not found in the agents list" });
      }
      const finalApiKey = customApiKey && customApiKey.trim() !== "" ? customApiKey.trim() : process.env.GEMINI_API_KEY;
      if (!finalApiKey) {
        return res.status(400).json({
          error: "GEMINI_API_KEY is not defined. Please supply your custom Gemini API key in the 'LLM Settings' top bar panel."
        });
      }
      const requestAi = new import_genai.GoogleGenAI({
        apiKey: finalApiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build"
          }
        }
      });
      const modelToUse = customModel && customModel.trim() !== "" ? customModel.trim() : "gemini-3.5-flash";
      const formattedHistory = history && Array.isArray(history) && history.length > 0 ? history.map((h) => `[${h.senderName} (${h.senderDesignation})]: ${h.text}`).join("\n\n") : "No previous messages. This is the first step of the simulation.";
      const systemInstruction = `You are simulated Autonomous AI Agent in a visual multi-agent workspace.
Your Identity:
- Name: ${currentAgent.name}
- Designation/Role: ${currentAgent.designation}
- Core Directives & System Prompt: ${currentAgent.systemPrompt}

Overall Team Objective:
"${objective}"

All Active Team Members Present in the Workspace Floor:
${agents.map((a) => `- Name: "${a.name}" | ID: "${a.id}" | Role: "${a.designation}"`).join("\n")}

Historical Conversation Progress:
---
${formattedHistory}
---

Create a highly detailed step execution report matching your role. You MUST output a structured JSON response keys and values as defined by the response schema.
Keys:
- "content": (string) Your complete analytical/execution text (plans, reasoning, code snippets, final output, reviews, or responses to previous messages). Be thorough, descriptive, and highly functional.
- "delegateId": (string) The ID of the single active team member to handle the next step (from the list of IDs above: ${agents.map((a) => `"${a.id}"`).join(", ")}). If you believe the entire team objective is successfully completed and no further actions are required, you MUST specify the literal string "done".
- "delegationTaskInstruction": (string) Specific, constructive directions or task details you are assigning to the delegated teammate, or a completion summary describing the total final output if delegateId is "done".`;
      const response = await requestAi.models.generateContent({
        model: modelToUse,
        contents: "Draft your logical execution and plan to fulfill the objective.",
        config: {
          systemInstruction,
          temperature: 0.7,
          responseMimeType: "application/json",
          responseSchema: {
            type: import_genai.Type.OBJECT,
            properties: {
              content: {
                type: import_genai.Type.STRING,
                description: "Thorough response content. Detailed reasoning, decisions, outputs, or code."
              },
              delegateId: {
                type: import_genai.Type.STRING,
                description: "Select an ID from the list. If everything is fully resolved, set to 'done'."
              },
              delegationTaskInstruction: {
                type: import_genai.Type.STRING,
                description: "Targeted directive assigned for the next teammate, or task completion summary."
              }
            },
            required: ["content", "delegateId", "delegationTaskInstruction"]
          }
        }
      });
      const responseText = response.text || "{}";
      let contentStr = "No output generated.";
      let targetAgentId = null;
      let delegationReason = "Delegated next turn";
      let isDone = false;
      try {
        const parsed = JSON.parse(responseText.trim());
        contentStr = parsed.content || "Empty content output.";
        const rawDelegate = (parsed.delegateId || "").trim();
        if (rawDelegate.toLowerCase() === "done") {
          isDone = true;
          delegationReason = parsed.delegationTaskInstruction || "Global task is fully satisfied.";
        } else {
          const isValidAgent = agents.some((a) => a.id === rawDelegate);
          if (isValidAgent) {
            targetAgentId = rawDelegate;
            delegationReason = parsed.delegationTaskInstruction || "Continuing execution stream.";
          } else {
            const currentIndex = agents.findIndex((a) => a.id === currentAgentId);
            const nextIndex = (currentIndex + 1) % agents.length;
            const nextAgent = agents[nextIndex];
            if (nextAgent && nextAgent.id !== currentAgentId) {
              targetAgentId = nextAgent.id;
              delegationReason = `Sequential fallback rotation (invalid agent id "${rawDelegate}" delegated)`;
            } else {
              isDone = true;
              delegationReason = "Simulation finished via sequential fallback constraints.";
            }
          }
        }
      } catch (jsonErr) {
        console.error("[Simulator Server] JSON parse failed, utilizing legacy regex parser fallback.", jsonErr);
        contentStr = responseText;
        const delegationMatch = responseText.match(/Delegation:\s*([^\n(]+)\s*\(([^)]+)\)\s*(?:-?\s*(.*))?/i);
        if (delegationMatch) {
          targetAgentId = delegationMatch[2].trim();
          delegationReason = delegationMatch[3]?.trim() || "Executing following step";
        } else if (responseText.toLowerCase().includes("delegation: done")) {
          isDone = true;
        } else {
          const currentIndex = agents.findIndex((a) => a.id === currentAgentId);
          const nextIndex = (currentIndex + 1) % agents.length;
          const nextAgent = agents[nextIndex];
          if (nextAgent && nextAgent.id !== currentAgentId) {
            targetAgentId = nextAgent.id;
            delegationReason = "Sequential fallback rotation";
          } else {
            isDone = true;
          }
        }
      }
      res.json({
        text: contentStr,
        senderId: currentAgent.id,
        senderName: currentAgent.name,
        senderDesignation: currentAgent.designation,
        delegateId: isDone ? null : targetAgentId,
        delegationReason: isDone ? "Global task accomplished" : delegationReason,
        isDone
      });
    } catch (error) {
      console.error("[Simulator Server] Step Simulation error status:", error);
      res.status(500).json({ error: error?.message || "Internal server error conducting simulation step." });
    }
  });
  app.use((err, req, res, next) => {
    console.error("[Simulator Server] Express Application Error:", err);
    res.status(err.status || 500).json({
      error: err.message || "An unexpected system error occurred on the custom team simulation server."
    });
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  const PORT = 3e3;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Simulator Server] Running on http://localhost:${PORT}`);
  });
}
process.on("unhandledRejection", (reason, promise) => {
  console.error("[Simulator Server] Critical Unhandled Rejection at:", promise, "reason:", reason);
});
process.on("uncaughtException", (error) => {
  console.error("[Simulator Server] Critical Uncaught Exception:", error);
});
startServer();
//# sourceMappingURL=server.cjs.map
