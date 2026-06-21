import React, { useState, useEffect, useRef } from "react";
import { AgentNode, Message, TimeMode, TeamConfig, DecorItem } from "./types";
import { PRESET_TEAMS } from "./presets";
import Office2DCanvas from "./components/Office2DCanvas";
import Office3DCanvas from "./components/Office3DCanvas";
import AgentPanel from "./components/AgentPanel";
import MarkdownText from "./components/MarkdownText";
import {
  Play,
  Square,
  RotateCcw,
  Sparkles,
  Layers,
  Terminal,
  Moon,
  Sun,
  Clock,
  AlertTriangle,
  ChevronRight,
  Grid,
  Plus,
  Compass,
  Sliders,
  FolderPlus,
  Trash2,
  FileDown,
  FileUp,
  Maximize2,
  Minimize2,
  HelpCircle,
  Lock,
  Unlock,
  UserMinus,
  Edit3,
  Settings,
  Key
} from "lucide-react";

export default function App() {
  // 1. Core Config & Themes State
  const [timeMode, setTimeMode] = useState<TimeMode>("day");
  const [gridSize, setGridSize] = useState<number>(12);
  const [activeTab, setActiveTab] = useState<"2d" | "3d">("3d");
  const [is3DEnlarged, setIs3DEnlarged] = useState<boolean>(false);
  const [showHelpModal, setShowHelpModal] = useState<boolean>(false);
  const [showConfigModal, setShowConfigModal] = useState<boolean>(false);
  const [customApiKey, setCustomApiKey] = useState<string>(() => {
    return localStorage.getItem("custom_gemini_api_key") || "";
  });
  const [customModel, setCustomModel] = useState<string>(() => {
    const saved = localStorage.getItem("custom_gemini_model");
    if (saved === "gemini-3.5-flash" || saved === "gemini-3.1-pro-preview" || saved === "gemini-3.1-flash-lite") {
      return saved;
    }
    return "gemini-3.5-flash";
  });

  useEffect(() => {
    localStorage.setItem("custom_gemini_api_key", customApiKey);
  }, [customApiKey]);

  useEffect(() => {
    localStorage.setItem("custom_gemini_model", customModel);
  }, [customModel]);

  // Dynamic Teams and Agent state lists
  const [teams, setTeams] = useState<TeamConfig[]>([]);
  const [activeTeamId, setActiveTeamId] = useState<string>("startup-launcher");

  // Multi-Form inline Modal states for Spawning Custom Team Configs
  const [showAddTeamModal, setShowAddTeamModal] = useState(false);
  const [newTeamName, setNewTeamName] = useState("");
  const [newTeamObjective, setNewTeamObjective] = useState("");
  const [newTeamDesc, setNewTeamDesc] = useState("");

  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);

  // 2. Chat Log & Run Loop State
  const [messages, setMessages] = useState<Message[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentAgentId, setCurrentAgentId] = useState<string | null>(null);
  const [simulationStep, setSimulationStep] = useState(0);
  const [errorText, setErrorText] = useState<string | null>(null);

  // Refs for auto-scrolling
  const terminalBottomRef = useRef<HTMLDivElement>(null);
  const isInitialLoad = useRef(true);

  // 3. Initialize/Load persistent blueprint state (Hydrates from localStorage)
  useEffect(() => {
    const saved = localStorage.getItem("agent_workspace_teams_system");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.teams && Array.isArray(parsed.teams) && parsed.teams.length > 0) {
          setTeams(parsed.teams);
          setActiveTeamId(parsed.activeTeamId || "startup-launcher");
          setGridSize(parsed.gridSize || 12);
          setTimeMode(parsed.timeMode || "day");
          if (parsed.history) setMessages(parsed.history);
          return;
        }
      } catch (e) {
        console.error("Failed to restore teams from localStorage", e);
      }
    }

    setTeams(PRESET_TEAMS);
    setActiveTeamId(PRESET_TEAMS[0].id);
  }, []);

  // Sync teams state and relevant workspace settings to storage helper
  const syncToStorage = (
    updatedTeams: TeamConfig[],
    activeId: string,
    historyMsgs: Message[],
    gSize: number,
    tMode: TimeMode
  ) => {
    const backup = {
      teams: updatedTeams,
      activeTeamId: activeId,
      history: historyMsgs,
      gridSize: gSize,
      timeMode: tMode
    };
    localStorage.setItem("agent_workspace_teams_system", JSON.stringify(backup));
  };

  const activeTeam = teams.find((t) => t.id === activeTeamId) || teams[0] || PRESET_TEAMS[0];
  const agents = activeTeam?.agents || [];
  const decorItems = activeTeam?.decorItems || [];
  const objective = activeTeam?.objective || "";
  const isBusy = isRunning || agents.some((a) => a.state !== "idle");

  // Auto select first agent when active team switches
  useEffect(() => {
    if (agents.length > 0) {
      setSelectedAgentId(agents[0].id);
      setCurrentAgentId(agents[0].id);
    } else {
      setSelectedAgentId(null);
      setCurrentAgentId(null);
    }
  }, [activeTeamId]);

  const handleSelectTeam = (id: string) => {
    setTeams((p) =>
      p.map((t) => ({
        ...t,
        agents: t.agents.map((a) => ({ ...a, state: "idle" as const }))
      }))
    );
    setActiveTeamId(id);
    setIsRunning(false);
    setErrorText(null);
    syncToStorage(teams, id, messages, gridSize, timeMode);
  };

  const handleCreateTeam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTeamName.trim() || !newTeamObjective.trim()) return;

    if (teams.length >= 10) {
      alert("Operational Cap Reached: Max 10 custom agencies allowed.");
      return;
    }

    const newId = `team-custom-${Date.now()}`;
    const newTeamRecord: TeamConfig = {
      id: newId,
      name: newTeamName,
      description: newTeamDesc || "Custom configured multi-agent syndicate.",
      objective: newTeamObjective,
      decorItems: [],
      agents: [
        {
          id: `ag-boss-${Date.now()}`,
          name: "Supervisor Alpha",
          designation: "Project Coordinator",
          systemPrompt: "You are the manager coordinator. Delegate tasks and summarize active deliverables cleanly.",
          gridPosition: { x: Math.floor(gridSize / 2), z: Math.floor(gridSize / 2) },
          avatarColor: "#60a5fa",
          state: "idle"
        }
      ]
    };

    const updated = [...teams, newTeamRecord];
    setTeams(updated);
    setActiveTeamId(newId);
    setShowAddTeamModal(false);

    setNewTeamName("");
    setNewTeamObjective("");
    setNewTeamDesc("");

    syncToStorage(updated, newId, messages, gridSize, timeMode);
  };

  const handleDeleteTeam = (id: string) => {
    if (teams.length <= 1) {
      alert("Failed operational cleanup: You must preserve at least 1 active team.");
      return;
    }

    const updated = teams.filter((t) => t.id !== id);
    setTeams(updated);
    const fallbackId = updated[0].id;
    setActiveTeamId(fallbackId);
    setIsRunning(false);

    syncToStorage(updated, fallbackId, messages, gridSize, timeMode);
  };

  const handleGridSizeChange = (val: number) => {
    const clamped = Math.max(10, Math.min(30, val));
    setGridSize(clamped);

    const updatedTeams = teams.map((t) => {
      const fixedAgents = t.agents.map((a) => {
        const nx = Math.min(clamped - 1, a.gridPosition.x);
        const nz = Math.min(clamped - 1, a.gridPosition.z);
        return { ...a, gridPosition: { x: nx, z: nz } };
      });
      const fixedDecor = (t.decorItems || []).map((d) => {
        const nx = Math.min(clamped - 1, d.x);
        const nz = Math.min(clamped - 1, d.z);
        return { ...d, x: nx, z: nz };
      });
      return { ...t, agents: fixedAgents, decorItems: fixedDecor };
    });

    setTeams(updatedTeams);
    syncToStorage(updatedTeams, activeTeamId, messages, clamped, timeMode);
  };

  const handleUpdateAgentPosition = (agentId: string, x: number, z: number) => {
    const updatedTeams = teams.map((t) => {
      if (t.id === activeTeamId) {
        const updatedAgents = t.agents.map((a) => {
          if (a.id === agentId) {
            return { ...a, gridPosition: { x, z } };
          }
          return a;
        });
        return { ...t, agents: updatedAgents };
      }
      return t;
    });

    setTeams(updatedTeams);
    syncToStorage(updatedTeams, activeTeamId, messages, gridSize, timeMode);
  };

  const handleAddDecorItem = (item: DecorItem) => {
    const updatedTeams = teams.map((t) => {
      if (t.id === activeTeamId) {
        const activeDecor = t.decorItems || [];
        return { ...t, decorItems: [...activeDecor, item] };
      }
      return t;
    });

    setTeams(updatedTeams);
    syncToStorage(updatedTeams, activeTeamId, messages, gridSize, timeMode);
  };

  const handleRemoveDecorItem = (decorId: string) => {
    const updatedTeams = teams.map((t) => {
      if (t.id === activeTeamId) {
        const activeDecor = t.decorItems || [];
        return { ...t, decorItems: activeDecor.filter((d) => d.id !== decorId) };
      }
      return t;
    });

    setTeams(updatedTeams);
    syncToStorage(updatedTeams, activeTeamId, messages, gridSize, timeMode);
  };

  const handleUpdateAgentPrereqs = (updatedNode: AgentNode) => {
    if (isBusy) {
      alert("🔒 Security Lockdown: Cannot modify employee configuration or directives while task execution is active.");
      return;
    }
    const updatedTeams = teams.map((t) => {
      if (t.id === activeTeamId) {
        const updatedAgents = t.agents.map((a) => (a.id === updatedNode.id ? updatedNode : a));
        return { ...t, agents: updatedAgents };
      }
      return t;
    });

    setTeams(updatedTeams);
    syncToStorage(updatedTeams, activeTeamId, messages, gridSize, timeMode);
  };

  const handleAddNewAgent = (newAgent: Omit<AgentNode, "state">) => {
    if (isBusy) {
      alert("🔒 Security Lockdown: Cannot instantiate new worker nodes while task execution is active.");
      return;
    }
    if (agents.length >= 15) {
      alert("Operational Cap Reached: Max 15 agents allowed per team.");
      return;
    }

    const complete: AgentNode = { ...newAgent, state: "idle" as const };
    const updatedTeams = teams.map((t) => {
      if (t.id === activeTeamId) {
        return { ...t, agents: [...t.agents, complete] };
      }
      return t;
    });

    setTeams(updatedTeams);
    setSelectedAgentId(complete.id);
    syncToStorage(updatedTeams, activeTeamId, messages, gridSize, timeMode);
  };

  const handleDeleteAgent = (id: string) => {
    if (isBusy) {
      alert("🔒 Security Lockdown: Cannot deconstruct or remove employees while task execution is active.");
      return;
    }
    if (agents.length <= 1) {
      alert("Action Aborted: A team must have at least 1 agent.");
      return;
    }

    const updatedTeams = teams.map((t) => {
      if (t.id === activeTeamId) {
        const filtered = t.agents.filter((a) => a.id !== id);
        return { ...t, agents: filtered };
      }
      return t;
    });

    setTeams(updatedTeams);
    const teamRecord = updatedTeams.find((t) => t.id === activeTeamId);
    const remainingAgents = teamRecord?.agents || [];
    setSelectedAgentId(remainingAgents[0]?.id || null);

    if (currentAgentId === id) {
      setCurrentAgentId(remainingAgents[0]?.id || null);
    }

    syncToStorage(updatedTeams, activeTeamId, messages, gridSize, timeMode);
  };

  const handleUpdateTeamObjective = (newObjectiveText: string) => {
    const updatedTeams = teams.map((t) => {
      if (t.id === activeTeamId) {
        return { ...t, objective: newObjectiveText };
      }
      return t;
    });

    setTeams(updatedTeams);
    syncToStorage(updatedTeams, activeTeamId, messages, gridSize, timeMode);
  };

  useEffect(() => {
    // Prevent auto-scrolling to the bottom upon initial load or storage hydration
    if (isInitialLoad.current) {
      const timer = setTimeout(() => {
        isInitialLoad.current = false;
      }, 1000);
      return () => clearTimeout(timer);
    }

    terminalBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isRunning]);

  const executeSimulationStep = async () => {
    if (agents.length === 0) return;
    const speakerId = currentAgentId || agents[0].id;

    setErrorText(null);

    setTeams((prevTeams) =>
      prevTeams.map((t) => {
        if (t.id === activeTeamId) {
          const updatedAgents = t.agents.map((a) => ({
            ...a,
            state: a.id === speakerId ? ("thinking" as const) : ("idle" as const),
          }));
          return { ...t, agents: updatedAgents };
        }
        return t;
      })
    );

    try {
      const response = await fetch("/api/simulate-step", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          objective,
          currentAgentId: speakerId,
          agents,
          history: messages,
          customApiKey,
          customModel
        }),
      });

      const contentType = response.headers.get("content-type") || "";
      let stepData: any;

      if (!response.ok) {
        if (contentType.includes("application/json")) {
          const errorJson = await response.json();
          throw new Error(errorJson.error || `Server responded with status ${response.status}`);
        } else {
          const textError = await response.text();
          const match = textError.match(/<title>([\s\S]*?)<\/title>/i);
          const htmlTitle = match ? match[1].trim() : "";
          throw new Error(
            `Server Error (HTTP ${response.status})${htmlTitle ? `: "${htmlTitle}"` : ""}`
          );
        }
      }

      if (contentType.includes("application/json")) {
        stepData = await response.json();
      } else {
        const rawText = await response.text();
        throw new Error(`Expected JSON but got content-type "${contentType}": ${rawText.substring(0, 100)}`);
      }

      if (stepData.error) {
        throw new Error(stepData.error);
      }

      const formattedMsg: Message = {
        id: `msg-${Date.now()}`,
        text: stepData.text,
        senderId: stepData.senderId,
        senderName: stepData.senderName,
        senderDesignation: stepData.senderDesignation,
        delegateId: stepData.delegateId,
        delegationReason: stepData.delegationReason,
        timestamp: new Date().toLocaleTimeString(),
      };

      const updatedHistory = [...messages, formattedMsg];
      setMessages(updatedHistory);
      setSimulationStep((prev) => prev + 1);

      if (stepData.delegateId) {
        const targetExist = agents.some((a) => a.id === stepData.delegateId);
        if (targetExist) {
          setTeams((prevTeams) =>
            prevTeams.map((t) => {
              if (t.id === activeTeamId) {
                const updatedAgents = t.agents.map((a) => ({
                  ...a,
                  state: a.id === stepData.delegateId ? ("walking" as const) : ("idle" as const),
                }));
                return { ...t, agents: updatedAgents };
              }
              return t;
            })
          );
          setCurrentAgentId(stepData.delegateId);
        } else {
          const currentIndex = agents.findIndex((a) => a.id === speakerId);
          const nextIndex = (currentIndex + 1) % agents.length;
          setCurrentAgentId(agents[nextIndex].id);
        }
      } else {
        setTeams((prevTeams) =>
          prevTeams.map((t) => {
            if (t.id === activeTeamId) {
              const updatedAgents = t.agents.map((a) => ({ ...a, state: "idle" as const }));
              return { ...t, agents: updatedAgents };
            }
            return t;
          })
        );
        setIsRunning(false);
      }

      syncToStorage(teams, activeTeamId, updatedHistory, gridSize, timeMode);

    } catch (e: any) {
      console.error(e);
      setErrorText(e?.message || "Verify your API Key setting and workspace status.");
      setIsRunning(false);
      setTeams((prevTeams) =>
        prevTeams.map((t) => {
          if (t.id === activeTeamId) {
            const updatedAgents = t.agents.map((a) => ({ ...a, state: "idle" as const }));
            return { ...t, agents: updatedAgents };
          }
          return t;
        })
      );
    }
  };

  useEffect(() => {
    let loopTimeout: any = null;

    if (isRunning) {
      loopTimeout = setTimeout(() => {
        executeSimulationStep();
      }, 3500); 
    }

    return () => clearTimeout(loopTimeout);
  }, [isRunning, currentAgentId]);

  const handleExportBlueprint = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(
      JSON.stringify({
        version: "1.0.0",
        timeMode,
        gridSize,
        teams,
        activeTeamId,
        history: messages,
      }, null, 2)
    );
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `teams-blueprint-${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportBlueprint = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (parsed.teams && Array.isArray(parsed.teams)) {
            setTeams(parsed.teams);
            setActiveTeamId(parsed.activeTeamId || parsed.teams[0].id);
            setGridSize(parsed.gridSize || 12);
            setTimeMode(parsed.timeMode || "day");
            if (parsed.history) setMessages(parsed.history);
            alert("Workspace blueprint imported successfully!");
          }
        } catch (err) {
          alert("Invalid model layout blueprint file. Make sure file structure is valid.");
        }
      };
    }
  };

  const isMatrix = timeMode === "matrix";
  const isNight = timeMode === "night";

  return (
    <div className={`min-h-screen font-sans flex flex-col justify-between transition-colors duration-300 ${
      isMatrix
        ? "bg-[#040806] text-green-300 selection:bg-green-500/20"
        : isNight
        ? "bg-[#0b0d16] text-slate-200 selection:bg-indigo-500/20"
        : "bg-[#f8f9fa] text-slate-800 selection:bg-indigo-100"
    }`}>
      
      {/* Sleek Minimal Header */}
      <header className={`px-6 py-4 border-b flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
        isMatrix
          ? "border-green-500/15 bg-[#040806]/90"
          : isNight
          ? "border-slate-900 bg-[#0b0d16]/95"
          : "border-slate-200 bg-white"
      }`}>
        <div className="flex items-center gap-3">
          <div className={`p-1.5 rounded-lg ${
            isMatrix 
              ? "bg-green-950/40 text-green-400 border border-green-500/20" 
              : isNight 
              ? "bg-slate-900 border border-slate-800 text-indigo-400" 
              : "bg-slate-100 text-slate-700"
          }`}>
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight">
              Pacific Mind Teams
            </h1>
            <p className="text-[10px] text-slate-500 font-mono">
              3D ISOMETRIC MULTI-AGENT SWARM BLUEPRINT
            </p>
          </div>
        </div>

        {/* Global Control HUD */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Grid slider */}
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[11px] font-mono ${
            isMatrix ? "border-green-500/20 bg-black" : "border-slate-800 bg-[#121626]/45"
          }`}>
            <Sliders className="w-3.5 h-3.5 text-indigo-400" />
            <span>GRID: {gridSize}x{gridSize}</span>
            <input
              type="range"
              min={10}
              max={30}
              value={gridSize}
              onChange={(e) => handleGridSizeChange(Number(e.target.value))}
              className="w-16 accent-indigo-500 cursor-pointer h-1"
            />
          </div>

          {/* Day / Night Shift switch */}
          <div className="flex items-center p-1 rounded-lg border border-slate-800/40 bg-[#12162a]/40">
            <button
              onClick={() => setTimeMode("day")}
              className={`p-1 text-slate-400 hover:text-white rounded ${
                timeMode === "day" ? "bg-white text-yellow-600 shadow-sm" : "text-slate-400"
              }`}
              title="Day Mode Shift"
              id="time-day"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setTimeMode("night")}
              className={`p-1 text-slate-400 hover:text-white rounded ${
                timeMode === "night" ? "bg-slate-800 text-indigo-400" : "text-slate-400"
              }`}
              title="Night Mode Shift"
              id="time-night"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setTimeMode("matrix")}
              className={`px-1.5 py-0.5 text-[9px] font-bold rounded ${
                timeMode === "matrix" ? "bg-green-950/80 text-green-400" : "text-slate-500 font-mono"
              }`}
              title="Cyber matrix mode"
              id="time-matrix"
            >
              MTX
            </button>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowHelpModal(true)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all shadow-sm ${
                isMatrix
                  ? "bg-green-500/10 text-green-300 border-green-500/40 hover:bg-green-500/20"
                  : "bg-indigo-550/15 border-indigo-500/30 text-indigo-400 hover:bg-indigo-550/25"
              }`}
              title="Get Step-by-Step Info & Team Guide"
              id="btn-help-guide"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[10px] tracking-wide uppercase font-mono">Guide</span>
            </button>
            <button
              onClick={() => setShowConfigModal(true)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all shadow-sm ${
                isMatrix
                  ? "bg-green-500/10 text-green-300 border-green-500/40 hover:bg-green-500/20"
                  : "bg-indigo-550/15 border-indigo-500/30 text-indigo-400 hover:bg-indigo-550/25"
              }`}
              title="Configure API Keys & Select Gemini Model"
              id="btn-llm-settings"
            >
              <Settings className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[10px] tracking-wide uppercase font-mono">Models &amp; API Key</span>
            </button>
            <button
              onClick={handleExportBlueprint}
              className="p-1.5 rounded-lg border border-slate-800/80 bg-slate-900/40 hover:bg-slate-900 text-slate-400 hover:text-white transition-colors"
              title="Export blueprint configuration"
              id="btn-export-json"
            >
              <FileDown className="w-3.5 h-3.5" />
            </button>
            <label
              className="p-1.5 rounded-lg border border-slate-800/80 bg-slate-900/40 hover:bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Import local configuration"
              id="lbl-import-json"
            >
              <FileUp className="w-3.5 h-3.5" />
              <input
                type="file"
                accept=".json"
                onChange={handleImportBlueprint}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </header>

      {/* Modern, Minimal, Secondary Workspace Switcher */}
      <section className={`px-6 py-2.5 border-b flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 transition-colors ${
        isMatrix ? "bg-black/90 border-green-500/10" : isNight ? "bg-[#101323]/50 border-slate-900" : "bg-slate-100 border-slate-200"
      }`}>
        <div className="flex flex-wrap items-center gap-2">
          <span className={`text-[9px] font-extrabold tracking-widest uppercase font-mono mr-1 ${
            isMatrix ? "text-green-500" : isNight ? "text-slate-500" : "text-slate-800 font-extrabold"
          }`}>
            ACTIVE SYNDICATE:
          </span>
          <div className="flex flex-wrap gap-1">
            {teams.map((t) => (
              <button
                key={t.id}
                onClick={() => handleSelectTeam(t.id)}
                className={`px-3 py-1 text-[11px] rounded transition-all font-bold ${
                  activeTeamId === t.id
                    ? isMatrix
                      ? "bg-green-500/20 text-green-400 border border-green-500/40"
                      : "bg-[#1d233d] border border-indigo-500/30 text-white shadow"
                    : isMatrix
                    ? "text-green-500 hover:text-green-300 border border-transparent"
                    : isNight
                    ? "text-slate-400 hover:text-white border border-transparent"
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-200 border border-transparent"
                }`}
                id={`team-${t.id}`}
              >
                {t.name}
              </button>
            ))}

            {teams.length < 10 && (
              <button
                onClick={() => setShowAddTeamModal(true)}
                className={`px-2 py-1 text-[10px] rounded font-bold border border-dashed transition-all ${
                  isMatrix
                    ? "text-green-400 border-green-500/20 hover:text-green-300"
                    : isNight
                    ? "text-teal-400 border-teal-500/20 hover:text-teal-300"
                    : "text-teal-800 border-teal-300 bg-teal-50 hover:bg-teal-100 hover:text-teal-900"
                }`}
                id="btn-add-team"
              >
                + Create Team
              </button>
            )}
          </div>
        </div>

        {teams.length > 1 && (
          <button
            onClick={() => handleDeleteTeam(activeTeamId)}
            className="text-[9px] uppercase font-bold text-rose-500 hover:text-rose-400 tracking-wider flex items-center gap-1 select-none"
            id="btn-decon-team"
          >
            <Trash2 className="w-3 h-3" />
            Delete team
          </button>
        )}
      </section>

      {/* Spawn Agile Team Modal Config */}
      {showAddTeamModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <form
            onSubmit={handleCreateTeam}
            className={`w-full max-w-sm p-5 rounded-xl border ${
              isMatrix ? "border-green-500/30 bg-black text-green-300" : "border-slate-800 bg-[#0f111a] text-white"
            } shadow-2xl`}
          >
            <h3 className="text-xs font-extrabold uppercase tracking-widest mb-4 flex items-center gap-2">
              <FolderPlus className="w-4 h-4 text-indigo-400" />
              Configure Custom Agency Team
            </h3>

            <div className="space-y-3.5 text-xs">
              <div>
                <label className="block text-[9px] uppercase font-bold text-slate-500 mb-1">Agency Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. BioTech Diagnostics Group"
                  value={newTeamName}
                  onChange={(e) => setNewTeamName(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-[9px] uppercase font-bold text-slate-500 mb-1 font-mono">System Objective Goal</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Synthesize chemical breakdown matrices"
                  value={newTeamObjective}
                  onChange={(e) => setNewTeamObjective(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-[9px] uppercase font-bold text-slate-500 mb-1">Brief Description</label>
                <textarea
                  placeholder="What is this agency group mostly about?"
                  rows={2}
                  value={newTeamDesc}
                  onChange={(e) => setNewTeamDesc(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="flex gap-2 justify-end pt-4">
              <button
                type="button"
                onClick={() => setShowAddTeamModal(false)}
                className="px-3 py-1.5 text-[10px] font-bold text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white bg-indigo-600 rounded hover:bg-indigo-500"
              >
                Spawn Team
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Main Core Sandbox Frame Grid Layout */}
      <main className="flex-1 max-w-[1700px] w-full mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Simulation Display Scene and Objective Controls */}
        <section className="lg:col-span-8 flex flex-col gap-5">
          
          {/* Active Team Objective Statement */}
          <div className={`p-4 rounded-xl border ${
            isMatrix
              ? "border-green-500/10 bg-black/60"
              : isNight
              ? "border-slate-900 bg-[#0c0e18]"
              : "border-slate-200 bg-white"
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-extrabold tracking-widest text-[#6366f1] block uppercase font-mono">
                Active Collective Goal Objective
              </span>
              <span className="text-[9px] opacity-60 font-mono italic">{activeTeam.description}</span>
            </div>
            
            <input
              type="text"
              placeholder="State a collective goal for the multi-agent swarm..."
              value={objective}
              onChange={(e) => handleUpdateTeamObjective(e.target.value)}
              className={`w-full px-3 py-2 text-xs rounded border focus:outline-none focus:ring-1 focus:ring-indigo-500 ${
                isMatrix
                  ? "bg-black border-green-500/20 text-green-300 placeholder:text-green-920 font-mono"
                  : isNight
                  ? "bg-[#0b0c14] text-white border-slate-900"
                  : "bg-slate-50 border-slate-200 text-slate-800"
              }`}
              id="inp-collective-objective"
            />
          </div>

          {/* Render Area Frame with Blueprint Layout / 3D Swarm Selector Tabs */}
          <div className="flex-1 flex flex-col gap-3 min-h-[460px] relative">
            <div className="flex items-center justify-between">
              <div className={`flex items-center gap-1 p-1 rounded-lg border ${
                isMatrix
                  ? "bg-black border-green-500/20"
                  : isNight
                  ? "bg-[#0b0d16]/30 border-slate-800/40"
                  : "bg-slate-100 border-slate-200"
              }`}>
                <button
                  onClick={() => setActiveTab("2d")}
                  className={`px-3 py-1 text-[11px] font-bold rounded transition-all duration-150 flex items-center gap-1 ${
                    activeTab === "2d" 
                      ? "bg-indigo-600 text-white font-extrabold shadow" 
                      : isMatrix 
                      ? "text-green-500 hover:text-green-300" 
                      : isNight 
                      ? "text-slate-400 hover:text-white" 
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-200/55"
                  }`}
                  id="tab-2d"
                >
                  <Grid className="w-3 h-3" />
                  2D Placement Planner
                </button>
                <button
                  onClick={() => setActiveTab("3d")}
                  className={`px-3 py-1 text-[11px] font-bold rounded transition-all duration-150 flex items-center gap-1 ${
                    activeTab === "3d" 
                      ? "bg-indigo-600 text-white font-extrabold shadow" 
                      : isMatrix 
                      ? "text-green-500 hover:text-green-300" 
                      : isNight 
                      ? "text-slate-400 hover:text-white" 
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-200/55"
                  }`}
                  id="tab-3d"
                >
                  <Compass className="w-3 h-3" />
                  Interactive 3D Simulated Space
                </button>
              </div>

              <div className="flex items-center gap-3">
                {activeTab === "3d" && (
                  <button
                    onClick={() => setIs3DEnlarged(true)}
                    className={`flex items-center gap-1.5 px-3 py-1 text-[10px] rounded border transition-all font-bold uppercase tracking-wider ${
                      isMatrix
                        ? "bg-green-500/10 text-green-450 border-green-500/35 hover:bg-green-500/20"
                        : "bg-teal-500/15 border-teal-500/35 text-teal-400 hover:bg-teal-500/25 shadow-sm"
                    }`}
                    id="btn-enlarge-3d"
                  >
                    <Maximize2 className="w-3 h-3" />
                    Enlarge 3D View
                  </button>
                )}
                <div className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
                  <span>GRID SPACE SIZE: {gridSize}x{gridSize}</span>
                </div>
              </div>
            </div>

            {/* Rendering selected view */}
            <div className="flex-1 min-h-[415px]">
              {activeTab === "2d" ? (
                <Office2DCanvas
                  agents={agents}
                  decorItems={decorItems}
                  onUpdateAgentPosition={handleUpdateAgentPosition}
                  onAddDecorItem={handleAddDecorItem}
                  onRemoveDecorItem={handleRemoveDecorItem}
                  gridSize={gridSize}
                  timeMode={timeMode}
                />
              ) : (
                <Office3DCanvas
                  agents={agents}
                  decorItems={decorItems}
                  gridSize={gridSize}
                  timeMode={timeMode}
                  messages={messages}
                  currentAgentId={currentAgentId}
                />
              )}
            </div>
          </div>

          {/* Minimal Playback Controls Console */}
          <div className={`p-3 rounded-xl border flex flex-wrap items-center justify-between gap-4 ${
            isMatrix
              ? "border-green-500/10 bg-black/80"
              : isNight
              ? "border-slate-900 bg-[#0c0e18]"
              : "border-slate-200 bg-white"
          }`}>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const nextRunning = !isRunning;
                  setIsRunning(nextRunning);
                  setErrorText(null);
                  if (!nextRunning) {
                    setTeams((p) =>
                      p.map((t) => {
                        if (t.id === activeTeamId) {
                          return {
                            ...t,
                            agents: t.agents.map((a) => ({ ...a, state: "idle" as const }))
                          };
                        }
                        return t;
                      })
                    );
                  }
                }}
                disabled={agents.length === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer select-none ${
                  isRunning
                    ? "bg-rose-650 hover:bg-rose-700 text-white"
                    : isMatrix
                    ? "bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm"
                }`}
                id="btn-run-loop"
              >
                {isRunning ? (
                  <>
                    <Square className="w-3.5 h-3.5 fill-white" />
                    Pause Swarm
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-white" />
                    Run Autonomous Loop
                  </>
                )}
              </button>

              <button
                onClick={executeSimulationStep}
                disabled={isRunning || agents.length === 0}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-bold border transition-colors ${
                  isRunning
                    ? "opacity-30 cursor-not-allowed"
                    : isMatrix
                    ? "border-green-500/20 text-green-400"
                    : "border-slate-850 hover:bg-slate-900 text-slate-300"
                }`}
                title="Force single task handoff step"
                id="btn-step"
              >
                <ChevronRight className="w-3.5 h-3.5" />
                Step Turn
              </button>

              <button
                onClick={() => {
                  setMessages([]);
                  setSimulationStep(0);
                  setIsRunning(false);
                  setErrorText(null);
                  setTeams((p) =>
                    p.map((t) => ({
                      ...t,
                      agents: t.agents.map((a) => ({ ...a, state: "idle" as const }))
                    }))
                  );
                  syncToStorage(teams, activeTeamId, [], gridSize, timeMode);
                }}
                className="p-2 text-slate-500 hover:text-white rounded border border-slate-800/60 hover:bg-slate-900/40"
                title="Clear logs history"
                id="btn-reset-logs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Statistics Indicators */}
            <div className="flex items-center gap-4 text-[11px] font-mono">
              <div className="flex items-center gap-1.5 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                <span>TURNS EXECUTED: <strong className="text-teal-400">{simulationStep}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 border-l border-slate-800 pl-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="uppercase text-[9px] text-slate-500 tracking-wider">
                  Swarm State: {isRunning ? "Active Pipeline Processing" : "Holding at Desks"}
                </span>
              </div>
            </div>
          </div>

          {/* Active Swarm Employee Directory */}
          <div className={`p-5 rounded-xl border flex flex-col gap-4 ${
            isMatrix
              ? "border-green-500/15 bg-black text-green-400"
              : isNight
              ? "border-slate-800 bg-[#0c0e18]"
              : "border-slate-200 bg-white text-slate-800"
          }`} id="employee-roster-console">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-dashed border-slate-800/60">
              <div>
                <span className={`text-[9px] tracking-[0.2em] font-extrabold uppercase block font-mono ${
                  isMatrix ? "text-green-500" : "text-indigo-400"
                }`}>
                  Core Syndicate Personnel
                </span>
                <h3 className="text-sm font-bold tracking-tight">Active Employee directory</h3>
              </div>
              <div className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                isBusy 
                  ? "border-rose-500/35 bg-rose-500/10 text-rose-400" 
                  : "border-teal-500/35 bg-teal-500/10 text-teal-400"
              }`}>
                {isBusy ? "🔒 Neural Link Secured" : "🔓 Edit/Delete Online"}
              </div>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              Below is the list of active AI workers in the current syndicate. Click <strong className="text-indigo-400">Configure</strong> to select that agent and customize directives in the Construction pod on the right sidebar, or deconstruct their node from the office grid entirely.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 col-span-full">
              {agents.map((ag) => {
                const isSelected = selectedAgentId === ag.id;
                const statusDetails = (() => {
                  switch (ag.state) {
                    case "typing":
                      return { text: "Typing...", color: "bg-indigo-400" };
                    case "thinking":
                      return { text: "Thinking...", color: "bg-cyan-400 animate-pulse" };
                    case "walking":
                      return { text: "Moving...", color: "bg-amber-400 animate-sine" };
                    default:
                      return { text: "Ready", color: "bg-emerald-500" };
                  }
                })();

                return (
                  <div
                    key={ag.id}
                    className={`p-3 rounded-xl border flex flex-col justify-between transition-all relative ${
                      isSelected
                        ? isMatrix
                          ? "border-green-500 bg-green-500/5 shadow hover:scale-[1.01]"
                          : "border-indigo-500 bg-[#141829]/70 shadow hover:scale-[1.01]"
                        : isMatrix
                        ? "border-green-500/10 bg-slate-950/20 hover:border-green-500/30"
                        : isNight
                        ? "border-slate-800/60 bg-slate-900/10 hover:border-slate-700/60"
                        : "border-slate-200 bg-slate-50 hover:border-slate-300"
                    }`}
                  >
                    {/* Status badge and avatar details */}
                    <div className="flex items-start justify-between gap-1 mb-2.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        {/* Styled avatar circle */}
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-extrabold text-slate-950 relative uppercase shrink-0"
                          style={{ backgroundColor: ag.avatarColor || "#6366f1" }}
                        >
                          {ag.name.substring(0, 2)}
                          {/* Mini gender sign */}
                          <span className="absolute -bottom-0.5 -right-0.5 text-[8px] bg-slate-950 text-white rounded-full w-3 h-3 flex items-center justify-center border border-slate-900 leading-none">
                            {ag.gender === "female" ? "♀" : "♂"}
                          </span>
                        </div>

                        <div className="min-w-0">
                          <h4 className="font-bold text-xs truncate" title={ag.name}>
                            {ag.name}
                          </h4>
                          <p className="text-[9px] text-slate-500 truncate" title={ag.designation}>
                            {ag.designation}
                          </p>
                        </div>
                      </div>

                      {/* Mini status pill */}
                      <span className="flex items-center gap-1 text-[8px] font-mono whitespace-nowrap bg-slate-950/70 px-1.5 py-0.5 rounded-full border border-slate-900">
                        <span className={`w-1 h-1 rounded-full ${statusDetails.color}`} />
                        <span className="text-slate-400">{statusDetails.text}</span>
                      </span>
                    </div>

                    {/* Brief snippet of their core directive */}
                    <p className="text-[9px] text-slate-500 italic line-clamp-2 leading-relaxed mb-3 pr-1">
                      &ldquo;{ag.systemPrompt}&rdquo;
                    </p>

                    {/* Action controls for specific employee */}
                    <div className="grid grid-cols-2 gap-1.5 pt-2 mt-auto border-t border-dashed border-slate-900/60 font-sans">
                      <button
                        onClick={() => {
                          setSelectedAgentId(ag.id);
                          setCurrentAgentId(ag.id);
                          const element = document.getElementById("agent-workspace-pod-builder");
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className={`py-1 px-1.5 rounded text-[9px] font-extrabold uppercase transition-all tracking-wider flex items-center justify-center gap-1 cursor-pointer ${
                          isSelected
                            ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm"
                            : isMatrix
                            ? "border border-green-550/30 text-green-400 hover:bg-green-500/10"
                            : "border border-slate-800 bg-[#0f111e]/55 hover:bg-slate-900 text-slate-300"
                        }`}
                        title="Edit directives on right panel"
                        id={`btn-roster-edit-${ag.id}`}
                      >
                        <Edit3 className="w-2.5 h-2.5 text-indigo-400 shrink-0" />
                        Configure
                      </button>

                      <button
                        onClick={() => handleDeleteAgent(ag.id)}
                        disabled={isBusy || agents.length <= 1}
                        className={`py-1 px-1.5 rounded text-[9px] font-extrabold uppercase transition-all tracking-wider flex items-center justify-center gap-1 ${
                          isBusy || agents.length <= 1
                            ? "opacity-30 cursor-not-allowed text-slate-650 border border-slate-900 bg-transparent"
                            : "border border-rose-500/20 text-rose-450 hover:bg-rose-500/10 hover:border-rose-500/40 cursor-pointer"
                        }`}
                        title={isBusy ? "Lock active during execution" : "Remove from pod"}
                        id={`btn-roster-delete-${ag.id}`}
                      >
                        {isBusy ? <Lock className="w-2.5 h-2.5 text-rose-400 shrink-0" /> : <UserMinus className="w-2.5 h-2.5 text-rose-400 shrink-0" />}
                        Deconstruct
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

            {isBusy && (
              <div className="text-[10px] text-amber-500/80 font-mono flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                <span>Console lock engaged. Finish actively running turns to make staff additions, adjustments or deconstructions.</span>
              </div>
            )}

          </div>

          {/* Error alerts */}
          {errorText && (
            <div className="p-3.5 rounded-lg border border-red-500/10 bg-red-950/20 text-red-300 text-xs flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
              <div>
                <p className="font-bold text-red-400">Swarm Execution Exception</p>
                <p className="font-mono leading-relaxed mt-0.5">{errorText}</p>
                <p className="mt-1 text-slate-500 text-[10px]">
                  Requires active <strong>GEMINI_API_KEY</strong> secret inside your AI Studio Workspace Secrets panel.
                </p>
              </div>
            </div>
          )}

        </section>

        {/* Right Column: Active Agent Editor and Terminal Logs stream */}
        <section className="lg:col-span-4 flex flex-col gap-5">

          {/* Pod Construction and directive editor */}
          <div className="min-h-[380px]">
            <AgentPanel
              agents={agents}
              selectedAgentId={selectedAgentId}
              onUpdateAgent={handleUpdateAgentPrereqs}
              onAddAgent={handleAddNewAgent}
              onDeleteAgent={handleDeleteAgent}
              timeMode={timeMode}
              isBusy={isBusy}
            />
          </div>

          {/* Live System Operational Log */}
          <div className={`p-4 rounded-xl border flex flex-col h-[400px] justify-between ${
            isMatrix
              ? "border-green-500/15 bg-black"
              : isNight
              ? "border-slate-900 bg-[#0c0e18]"
              : "border-slate-200 bg-white"
          }`} id="global-transcript-console">
            
            <div className={`flex items-center justify-between pb-2 border-b border-dashed mb-2 ${
              isMatrix ? "border-green-500/15" : isNight ? "border-slate-800/60" : "border-slate-200"
            }`}>
              <div className="flex items-center gap-1.5">
                <Terminal className={`w-3.5 h-3.5 ${isMatrix ? "text-green-400" : isNight ? "text-indigo-400" : "text-indigo-900"}`} />
                <h2 className={`font-bold text-[10px] tracking-wider uppercase ${isMatrix || isNight ? "" : "text-slate-900"}`}>Operational logs</h2>
              </div>
              <span className={`text-[8px] font-mono opacity-50 block uppercase ${isMatrix || isNight ? "" : "text-slate-600 font-bold"}`}>UTX Pipeline Connected</span>
            </div>

            {/* Conversational Stream logs */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-[11px] font-sans">
              {messages.length === 0 ? (
                <div className="text-center py-20 opacity-40 flex flex-col items-center">
                  <Terminal className="w-7 h-7 mb-1.5 opacity-30 text-teal-400" />
                  <p className="font-bold text-[11px]">Collective Stream Dormant.</p>
                  <p className="text-[9px] text-slate-500 max-w-[200px] leading-tight mt-1">
                    Set a collective goal, select the active team, and run the pipeline turns loop!
                  </p>
                </div>
              ) : (
                messages.map((msg) => {
                  return (
                    <div
                      key={msg.id}
                      className={`p-3 rounded-lg border transition-all ${
                        isMatrix
                          ? "border-green-500/10 bg-black"
                          : isNight
                          ? "border-[#1c223c]/40 bg-[#101323]/40"
                          : "border-slate-200 bg-slate-50 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className={`font-extrabold text-[11.5px] ${isMatrix ? "text-green-450" : isNight ? "text-white" : "text-slate-950 font-black"}`}>{msg.senderName}</span>
                          <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded outline-none border-none ${
                            isMatrix ? "bg-green-950/40 text-green-400" : isNight ? "bg-indigo-950/45 text-indigo-305" : "bg-indigo-100 text-indigo-900 font-extrabold"
                          }`}>
                            {msg.senderDesignation}
                          </span>
                        </div>
                        <span className={`text-[9px] font-mono ${isMatrix || isNight ? "text-slate-500" : "text-slate-700"}`}>{msg.timestamp}</span>
                      </div>

                      <div className={`space-y-3 leading-normal font-mono text-[11px] overflow-x-auto whitespace-pre-wrap ${
                        isMatrix ? "text-green-300" : isNight ? "text-slate-300" : "text-slate-950 font-black"
                      }`}>
                        <MarkdownText text={msg.text} timeMode={timeMode} />
                      </div>

                      {msg.delegateId && (
                        <div className={`mt-2.5 pt-2 border-t border-dashed flex items-start gap-1 text-[9px] ${
                          isMatrix ? "border-green-500/10 text-green-500" : isNight ? "border-slate-800/60 text-slate-400" : "border-slate-200 text-slate-700"
                        }`}>
                          <ChevronRight className={`w-3 h-3 shrink-0 mt-0.5 ${isMatrix ? "text-green-500" : isNight ? "text-indigo-400" : "text-indigo-900"}`} />
                          <div className="italic">
                            Handed Turn Context to: <strong className={`font-mono italic ${isMatrix ? "text-green-450" : isNight ? "text-indigo-400" : "text-indigo-900 font-black"}`}>{msg.delegationReason}</strong>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}

              {/* Loop Worker Loader bubble */}
              {isRunning && (
                <div className="p-3 rounded-lg border border-dashed border-indigo-500/20 bg-indigo-950/5 animate-pulse">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                    <span className="text-[10px] text-amber-400 font-mono tracking-wider uppercase select-none">
                      AI agent thinking step ...
                    </span>
                  </div>
                  <div className="h-1.5 bg-slate-800/80 rounded w-5/6 mb-1" />
                  <div className="h-1.5 bg-slate-800/80 rounded w-1/3" />
                </div>
              )}

              <div ref={terminalBottomRef} />
            </div>

            {/* Inject Custom Hand-Written Command Overrides */}
            <div className="pt-2 mt-2 border-t border-dashed border-slate-800/40">
              <input
                type="text"
                placeholder="Over-write agent context manually..."
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.currentTarget.value) {
                    const textVal = e.currentTarget.value;
                    const humanMsg: Message = {
                      id: `msg-human-${Date.now()}`,
                      text: `### [Manual Override Directive] \n\n${textVal}`,
                      senderId: "commander",
                      senderName: "Director (You)",
                      senderDesignation: "Swarm Director",
                      delegateId: currentAgentId || (agents[0] ? agents[0].id : null),
                      delegationReason: "Manual override execution protocol active",
                      timestamp: new Date().toLocaleTimeString(),
                    };
                    const updated = [...messages, humanMsg];
                    setMessages(updated);
                    e.currentTarget.value = "";
                    syncToStorage(teams, activeTeamId, updated, gridSize, timeMode);
                  }
                }}
                className={`w-full px-2.5 py-1.5 text-[10px] rounded border focus:outline-none focus:border-indigo-400 ${
                  isMatrix
                    ? "bg-black border-green-500/20 text-green-300 font-mono placeholder:text-green-920"
                    : isNight
                    ? "bg-[#0c0d14] text-white border-slate-900 placeholder:text-slate-600 font-mono"
                    : "bg-slate-50 border-slate-200 text-slate-800"
                }`}
                id="inp-manual-inject"
              />
            </div>

          </div>

        </section>

      </main>

      {/* Corporate Dashboard visual workspace footer bar */}
      <footer className={`px-6 py-3 border-t text-center text-[9px] tracking-wider transition-colors uppercase ${
        isMatrix
          ? "border-green-500/10 bg-black text-green-650 font-mono"
          : isNight
          ? "border-slate-950 bg-slate-950/20 text-slate-650"
          : "border-slate-200 bg-white text-slate-400"
      }`}>
        TASK ORCHESTRATION GROUNDED CONTROL SYSTEM &bull; STYLIZED ISOMETRIC ENVIRONMENT &bull; {new Date().getFullYear()} UTC
      </footer>

      {/* 3D Enlarged Cinematic Viewer Modal */}
      {is3DEnlarged && (
        <div className={`fixed inset-0 z-50 flex flex-col p-4 md:p-6 backdrop-blur-md transition-all ${
          isMatrix 
            ? "bg-black/95 text-green-300" 
            : isNight 
            ? "bg-[#0b0d16]/95 text-slate-200" 
            : "bg-white/95 text-slate-800"
        }`}>
          <div className={`flex items-center justify-between mb-4 pb-3 border-b ${
            isMatrix ? "border-green-500/20" : isNight ? "border-slate-900" : "border-slate-200"
          }`}>
            <div>
              <span className={`text-[9px] tracking-[0.25em] font-extrabold uppercase font-mono block ${
                isMatrix ? "text-green-500" : "text-indigo-400"
              }`}>
                Swarm Environment Inspection
              </span>
              <h2 className="text-sm font-bold tracking-tight">
                Grounded 3D Office Workspace Overview
              </h2>
            </div>
            <button
              onClick={() => setIs3DEnlarged(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded border border-rose-500 bg-rose-650 text-white font-bold uppercase tracking-wider hover:bg-rose-700 transition-all shadow-sm"
              id="btn-close-enlarge"
            >
              <Minimize2 className="w-3.5 h-3.5" />
              Close Fullscreen
            </button>
          </div>
          <div className={`flex-1 relative rounded-xl overflow-hidden border ${
            isMatrix ? "border-green-500/30 bg-black" : isNight ? "border-slate-900 bg-[#0c0e18]" : "border-slate-300 bg-slate-50"
          }`}>
            <Office3DCanvas
              agents={agents}
              decorItems={decorItems}
              gridSize={gridSize}
              timeMode={timeMode}
              messages={messages}
              currentAgentId={currentAgentId}
            />
          </div>
        </div>
      )}

      {/* Model & API Key Configuration Settings Modal */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/80 backdrop-blur-md transition-all">
          <div className={`w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl border p-6 md:p-8 flex flex-col gap-6 shadow-2xl relative ${
            isMatrix 
              ? "bg-black text-green-300 border-green-500/30 font-mono" 
              : isNight 
              ? "bg-[#0c0e1a]/95 text-slate-100 border-indigo-500/20" 
              : "bg-white text-slate-800 border-slate-200"
          }`}>
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b pb-4 border-dashed border-slate-705/50">
              <div>
                <span className={`text-[9px] tracking-[0.25em] font-extrabold uppercase block font-mono ${
                  isMatrix ? "text-green-500" : "text-indigo-400"
                }`}>
                  Core Engine Customizer
                </span>
                <h2 className="text-base font-bold tracking-tight">
                  Gemini Model & API Key Settings
                </h2>
              </div>
              <button
                onClick={() => setShowConfigModal(false)}
                className="p-1 px-3 text-[10px] font-bold uppercase tracking-wider text-rose-500 hover:text-white hover:bg-rose-600 rounded border border-rose-500 transition-all cursor-pointer"
                id="btn-close-config"
              >
                Close
              </button>
            </div>

            {/* Quick Warning/Privacy Info */}
            <div className={`p-4 rounded-xl text-[11px] leading-relaxed border flex gap-2 items-start ${
              isMatrix ? "bg-green-950/10 border-green-500/20 text-green-400" : "bg-indigo-500/5 border-indigo-500/10 text-slate-400"
            }`}>
              <Lock className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <strong>Secure Local Storage:</strong> Your private API key is processed client-side, encrypted where needed, routed through server-side proxy requests, and never stored persistently anywhere on logs, keeping your credentials completely safe and private.
              </div>
            </div>

            {/* Form Inputs */}
            <div className="space-y-4 text-xs font-sans">
              {/* API Key Input */}
              <div>
                <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Your Gemini API Key</span>
                  <a
                    href="https://aistudio.google.com/app/apikey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    Get Key from Google AI Studio ↗
                  </a>
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={customApiKey}
                    onChange={(e) => setCustomApiKey(e.target.value)}
                    placeholder="Enter your private API key here..."
                    className={`w-full px-3.5 py-2 text-xs rounded-lg border focus:outline-none focus:border-indigo-500 ${
                      isMatrix 
                        ? "bg-black border-green-500/30 text-green-400 font-mono placeholder-green-800" 
                        : isNight 
                        ? "bg-slate-900 border-slate-800 text-white placeholder-slate-600" 
                        : "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400"
                    }`}
                    id="inp-custom-api-key"
                  />
                </div>
                <p className="text-[10px] text-slate-500 mt-1.5 leading-relaxed">
                  If left empty, the application will automatically fall back to use the system&apos;s pre-configured backend credentials (ideal for instant starts!).
                </p>
              </div>

              {/* Model Selector Dropdown */}
              <div>
                <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5">
                  Select Gemini Model Deployment
                </label>
                <select
                  value={customModel}
                  onChange={(e) => setCustomModel(e.target.value)}
                  className={`w-full px-3.5 py-2 text-xs rounded-lg border focus:outline-none focus:border-indigo-500 tracking-wide ${
                    isMatrix 
                      ? "bg-black border-green-500/30 text-green-400 font-mono" 
                      : isNight 
                      ? "bg-slate-900 border-slate-800 text-white" 
                      : "bg-slate-50 border-slate-200 text-slate-800"
                  }`}
                  id="sel-custom-model"
                >
                  <option value="gemini-3.5-flash">Gemini 3.5 Flash (Recommended Default)</option>
                  <option value="gemini-3.1-pro-preview">Gemini 3.1 Pro (Deep Reasoning & Multi-turn)</option>
                  <option value="gemini-3.1-flash-lite">Gemini 3.1 Flash Lite (Fast responses)</option>
                </select>
                <p className="text-[10px] text-slate-500 mt-1.5 leading-relaxed">
                  Select your target engine. Pro models provide richer, highly professional synthesis but require higher API resource token usage.
                </p>
              </div>

              {/* Current Settings Indicator */}
              <div className={`p-3 rounded-xl border flex flex-col gap-1 text-[11px] ${
                customApiKey ? "border-emerald-500/25 bg-emerald-950/10" : "border-slate-800 bg-slate-900/30"
              }`}>
                <div className="flex items-center gap-1.5 font-bold">
                  <div className={`w-1.5 h-1.5 rounded-full ${customApiKey ? "bg-emerald-500 animate-pulse" : "bg-indigo-400 animate-pulse"}`} />
                  <span className={customApiKey ? "text-emerald-400" : "text-indigo-400"}>
                    {customApiKey ? "Currently Armed: Custom Key" : "Currently Defaulted: Environment Configuration"}
                  </span>
                </div>
                <p className="text-slate-500 text-[10px] leading-relaxed">
                  {customApiKey 
                    ? `Instructing workers to query via model "${customModel}" using your personal client-supplied key.` 
                    : `Instructing workers to query via model "${customModel}" using pre-configured system default credentials.`
                  }
                </p>
              </div>

            </div>

            {/* Close/Action buttons */}
            <div className="flex gap-2 items-center justify-end font-sans border-t pt-4 border-dashed border-slate-705/15">
              <button
                type="button"
                onClick={() => {
                  setCustomApiKey("");
                  localStorage.removeItem("custom_gemini_api_key");
                }}
                disabled={!customApiKey}
                className={`px-4 py-2 rounded text-[11px] font-bold uppercase tracking-wider border transition-colors ${
                  !customApiKey 
                    ? "opacity-35 cursor-not-allowed border-slate-800 text-slate-500" 
                    : "border-rose-500/30 text-rose-450 hover:bg-rose-500/10 cursor-pointer"
                }`}
                title="Clear key to fall back to environment key"
                id="btn-reset-custom-config"
              >
                Clear Custom Key
              </button>
              <button
                type="button"
                onClick={() => setShowConfigModal(false)}
                className="px-5 py-2 rounded text-[11px] font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 shadow-md cursor-pointer transition-colors animate-pulse"
                id="btn-save-custom-config"
              >
                Save &amp; Activate
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Step by Step Guide & Workings Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/80 backdrop-blur-md transition-all">
          <div className={`w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border p-6 md:p-8 flex flex-col gap-6 shadow-2xl relative ${
            isMatrix 
              ? "bg-black text-green-300 border-green-500/30 font-mono" 
              : isNight 
              ? "bg-[#0c0e1a]/95 text-slate-100 border-indigo-500/20" 
              : "bg-white text-slate-800 border-slate-200"
          }`}>
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b pb-4 border-dashed border-slate-700/50">
              <div>
                <span className={`text-[9px] tracking-[0.25em] font-extrabold uppercase block font-mono ${
                  isMatrix ? "text-green-500" : "text-indigo-400"
                }`}>
                  Interactive User Manual
                </span>
                <h2 className="text-lg font-bold tracking-tight">
                  How to Operate the Swarm Agency
                </h2>
              </div>
              <button
                onClick={() => setShowHelpModal(false)}
                className="p-1 px-3 text-[10px] font-bold uppercase tracking-wider text-rose-500 hover:text-white hover:bg-rose-600 rounded border border-rose-500 transition-all cursor-pointer"
                id="btn-close-help"
              >
                Close
              </button>
            </div>

            {/* Quick Summary Block */}
            <div className={`p-4 rounded-xl text-xs leading-relaxed border ${
              isMatrix ? "bg-green-950/10 border-green-500/20 text-green-400" : "bg-indigo-500/5 border-indigo-500/10 text-slate-400"
            }`}>
              This interactive playground simulates a <strong>Multi-Agent Swarm Collaborative Team</strong> where autonomous AI professionals (e.g. CEO, Competitor Researcher, Financial Analyst, Database Architect) sit together, discuss real sub-tasks, delegate work to specialized team members, and physically collaborate in a styled 3D digital office workspace.
            </div>

            {/* Bento-style step-by-step instructions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              
              <div className={`p-4 rounded-xl border flex flex-col gap-2 ${
                isMatrix ? "bg-black border-green-500/10" : "bg-slate-900/40 border-slate-800/60"
              }`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold font-mono ${
                    isMatrix ? "bg-green-500/20 text-green-400" : "bg-indigo-500/20 text-indigo-400"
                  }`}>1</span>
                  <h3 className="font-bold uppercase tracking-wider text-[11px]">Define the Mission</h3>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Start by typing a custom overarching corporate goal in the <strong>Active Collective Goal Objective</strong> input box (e.g., <em>&quot;Design a premium high-volume organic tea brand&quot;</em>). Pressing the presets on top switches between ready-configured specialized agencies instantly.
                </p>
              </div>

              <div className={`p-4 rounded-xl border flex flex-col gap-2 ${
                isMatrix ? "bg-black border-green-500/10" : "bg-slate-900/40 border-slate-800/60"
              }`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold font-mono ${
                    isMatrix ? "bg-green-500/20 text-green-400" : "bg-indigo-500/20 text-indigo-400"
                  }`}>2</span>
                  <h3 className="font-bold uppercase tracking-wider text-[11px]">Instigate Swarm Execution</h3>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Hit the <strong>Delegate &amp; Prompt Swarm</strong> action key. Our sequence engine coordinates each agent&apos;s active neural network model. Each agent will formulate structured responses, critique existing steps, delegate tasks, and pass progress.
                </p>
              </div>

              <div className={`p-4 rounded-xl border flex flex-col gap-2 ${
                isMatrix ? "bg-black border-green-500/10" : "bg-slate-900/40 border-slate-800/60"
              }`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold font-mono ${
                    isMatrix ? "bg-green-500/20 text-green-400" : "bg-[#f43f5e]/20 text-[#f43f5e]"
                  }`}>3</span>
                  <h3 className="font-bold uppercase tracking-wider text-[11px]">Watch 3D Collaboration</h3>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  During computation, agents will stand up, walk across the customized office grid, sit at their task chairs on the cushion, and raise their curvy hands to type on modern <strong>Dual-Monitor Workstations</strong> featuring glowing desktop displays and laptops!
                </p>
              </div>

              <div className={`p-4 rounded-xl border flex flex-col gap-2 ${
                isMatrix ? "bg-black border-green-500/10" : "bg-slate-900/40 border-slate-800/60"
              }`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold font-mono ${
                    isMatrix ? "bg-green-500/20 text-green-400" : "bg-teal-500/20 text-teal-400"
                  }`}>4</span>
                  <h3 className="font-bold uppercase tracking-wider text-[11px]">Scale &amp; Shape Avatars</h3>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Select any agent&apos;s card to modify system personas. Custom body styles options let you toggle gender models: <strong>Male (Smooth curvy cylinder)</strong> or <strong>Female (Elegant inverted cone)</strong>. All feature smooth rounded shoulders and spherical key joints.
                </p>
              </div>

            </div>

            {/* Practical Operations Guide */}
            <div className={`p-4 rounded-xl border flex flex-col gap-2 ${
              isMatrix ? "border-green-500/15" : "border-slate-800/70"
            }`}>
              <h4 className="font-bold text-[11px] uppercase tracking-wider text-indigo-400 flex items-center gap-1.5 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                How to customize and make the office your own:
              </h4>
              <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-400 leading-relaxed">
                <li>Create brand-new customized agency structures by pressing the <strong>+ Create Team</strong> option button.</li>
                <li>Decorate empty grid slots with cozy office green potted foliage, work desks, and accent armchairs by painting objects on the map.</li>
                <li>Import custom files/layouts by loading custom JSON configurations back into the system using the top-bar <strong>File Up icon</strong>.</li>
              </ul>
            </div>

            {/* Close footer button */}
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowHelpModal(false)}
                className="px-6 py-2 rounded text-xs font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 shadow-md cursor-pointer transition-colors"
                id="btn-help-close-footer"
              >
                Let&apos;s Get Started!
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
