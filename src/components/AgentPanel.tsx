import React, { useState, useEffect } from "react";
import { AgentNode, TimeMode } from "../types";
import { Plus, Trash2, Edit3, ShieldAlert, Cpu, Lock } from "lucide-react";

interface AgentPanelProps {
  agents: AgentNode[];
  selectedAgentId: string | null;
  onUpdateAgent: (updated: AgentNode) => void;
  onAddAgent: (newAgent: Omit<AgentNode, "state">) => void;
  onDeleteAgent: (id: string) => void;
  timeMode: TimeMode;
  isBusy?: boolean;
}

const PALETTE_COLORS = [
  { hex: "#60a5fa", label: "Sky Blue" },
  { hex: "#34d399", label: "Mint Green" },
  { hex: "#f472b6", label: "Coral Pink" },
  { hex: "#fbbf24", label: "Warm Amber" },
  { hex: "#a78bfa", label: "Soft Purple" },
  { hex: "#f87171", label: "Vibrant Coral" },
];

export default function AgentPanel({
  agents,
  selectedAgentId,
  onUpdateAgent,
  onAddAgent,
  onDeleteAgent,
  timeMode,
  isBusy = false,
}: AgentPanelProps) {
  const selectedAgent = agents.find((a) => a.id === selectedAgentId);

  // Local editor state
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [systemPrompt, setSystemPrompt] = useState("");
  const [avatarColor, setAvatarColor] = useState("#60a5fa");
  const [gender, setGender] = useState<"male" | "female">("male");

  // New Custom Agent state
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAgentName, setNewAgentName] = useState("");
  const [newAgentDesig, setNewAgentDesig] = useState("");
  const [newAgentPrompt, setNewAgentPrompt] = useState("");
  const [newAgentColor, setNewAgentColor] = useState("#60a5fa");
  const [newAgentGender, setNewAgentGender] = useState<"male" | "female">("male");

  useEffect(() => {
    if (selectedAgent) {
      setName(selectedAgent.name);
      setDesignation(selectedAgent.designation);
      setSystemPrompt(selectedAgent.systemPrompt);
      setAvatarColor(selectedAgent.avatarColor || "#60a5fa");
      setGender(selectedAgent.gender || "male");
    }
  }, [selectedAgent]);

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAgent) return;
    onUpdateAgent({
      ...selectedAgent,
      name,
      designation,
      systemPrompt,
      avatarColor,
      gender,
    });
  };

  const handleCreateAgent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAgentName || !newAgentDesig) return;

    // Place randomly on an open coordinate area of the visual grid
    const rx = Math.floor(Math.random() * 5) + 1;
    const rz = Math.floor(Math.random() * 5) + 1;

    onAddAgent({
      id: `agent-custom-${Date.now()}`,
      name: newAgentName,
      designation: newAgentDesig,
      systemPrompt: newAgentPrompt || "You are an AI specialist focused on high performance delivery.",
      gridPosition: { x: rx, z: rz },
      avatarColor: newAgentColor,
      gender: newAgentGender,
    });

    // Reset Form
    setNewAgentName("");
    setNewAgentDesig("");
    setNewAgentPrompt("");
    setNewAgentColor("#60a5fa");
    setNewAgentGender("male");
    setShowAddForm(false);
  };

  const isMatrix = timeMode === "matrix";
  const isNight = timeMode === "night";

  return (
    <div className={`p-5 rounded-xl border h-full flex flex-col justify-between transition-all duration-300 ${
      isMatrix
        ? "border-green-500/20 bg-slate-950/95 text-green-300 shadow-green-500/5 shadow-md"
        : isNight
        ? "border-slate-800 bg-[#0f1322] text-slate-100 shadow-indigo-500/5 shadow-md"
        : "border-slate-200 bg-white text-slate-800 shadow-sm"
    }`} id="agent-workspace-pod-builder">
      <div>
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-dashed border-slate-700/50">
          <div className="flex items-center gap-2">
            <Cpu className={`w-4 h-4 ${isMatrix ? "text-green-400 animate-pulse" : "text-indigo-400"}`} />
            <h2 className={`font-semibold tracking-wide text-xs uppercase ${isMatrix ? "font-mono" : ""}`}>
              Pod Construction Studio
            </h2>
          </div>
          <button
            onClick={() => !isBusy && setShowAddForm(!showAddForm)}
            disabled={isBusy}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium rounded-md border tracking-wider transition-colors uppercase ${
              isBusy
                ? "opacity-50 cursor-not-allowed border-slate-700/40 text-slate-500 bg-transparent"
                : isMatrix
                ? "border-green-500/30 text-green-400 hover:bg-green-500/10 font-mono"
                : isNight
                ? "border-indigo-600 bg-indigo-950/40 text-indigo-200 hover:bg-indigo-900/50"
                : "border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
            id="btn-add-agent-pod"
          >
            {isBusy ? <Lock className="w-3 h-3" /> : <Plus className="w-3.5 h-3.5" />}
            New Worker Node
          </button>
        </div>

        {/* Create Node Prompt Form */}
        {showAddForm && !isBusy ? (
          <form onSubmit={handleCreateAgent} className={`space-y-3 mb-4 p-3.5 rounded-lg border border-dashed ${
            isMatrix
              ? "bg-black border-green-500/30 text-green-400"
              : isNight
              ? "bg-slate-900/40 border-slate-700/50 text-slate-100"
              : "bg-slate-50 border-slate-200 text-slate-900"
          }`}>
            <h3 className={`text-xs font-bold uppercase tracking-wider ${
              isMatrix ? "text-green-400 font-mono" : isNight ? "text-indigo-400" : "text-indigo-900"
            }`}>Spawn Dynamic Agent</h3>
            <div>
              <label className={`block text-[10px] uppercase font-bold mb-1 ${
                isMatrix ? "text-green-500 font-mono" : isNight ? "text-slate-400" : "text-slate-800 font-extrabold"
              }`}>Worker Calling Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Liam (Lead Designer)"
                value={newAgentName}
                onChange={(e) => setNewAgentName(e.target.value)}
                className={`w-full px-2.5 py-1.5 text-xs rounded border focus:outline-none focus:border-indigo-500 ${
                  isMatrix ? "bg-black border-green-500/30 text-green-400 font-mono" : isNight ? "bg-slate-950/80 border-slate-700 text-white" : "bg-white border-slate-200 text-slate-900 font-medium"
                }`}
              />
            </div>
            <div>
              <label className={`block text-[10px] uppercase font-bold mb-1 ${
                isMatrix ? "text-green-500 font-mono" : isNight ? "text-slate-400" : "text-slate-800 font-extrabold"
              }`}>Corporate Designation</label>
              <input
                type="text"
                required
                placeholder="e.g. UX Architect"
                value={newAgentDesig}
                onChange={(e) => setNewAgentDesig(e.target.value)}
                className={`w-full px-2.5 py-1.5 text-xs rounded border focus:outline-none focus:border-indigo-500 ${
                  isMatrix ? "bg-black border-green-500/30 text-green-400 font-mono" : isNight ? "bg-slate-950/80 border-slate-700 text-white" : "bg-white border-slate-200 text-slate-900 font-medium"
                }`}
              />
            </div>

            <div>
              <label className={`block text-[10px] uppercase font-bold mb-1 ${
                isMatrix ? "text-green-500 font-mono" : isNight ? "text-slate-400" : "text-slate-800 font-extrabold"
              }`}>Avatar Color Theme</label>
              <div className="flex gap-2 py-1 items-center">
                {PALETTE_COLORS.map((c) => (
                  <button
                    key={c.hex}
                    type="button"
                    onClick={() => setNewAgentColor(c.hex)}
                    className={`w-6 h-6 rounded-full border transition-transform ${
                      newAgentColor === c.hex ? "scale-125 border-white ring-2 ring-indigo-500" : "border-transparent"
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.label}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className={`block text-[10px] uppercase font-bold mb-1 ${
                isMatrix ? "text-green-500 font-mono" : isNight ? "text-slate-400" : "text-slate-800 font-extrabold"
              }`}>Avatar Gender (Body Style)</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setNewAgentGender("male")}
                  className={`py-1.5 px-2.5 text-[10px] rounded border transition-all font-bold uppercase ${
                    newAgentGender === "male"
                      ? isMatrix
                        ? "bg-green-600 border-green-500 text-black font-mono"
                        : "bg-indigo-600 border-indigo-500 text-white shadow-sm"
                      : isMatrix
                      ? "bg-black text-green-500 border-green-500/30"
                      : isNight
                      ? "bg-slate-950 text-slate-400 border-slate-700 hover:text-white"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  ♂ Male
                </button>
                <button
                  type="button"
                  onClick={() => setNewAgentGender("female")}
                  className={`py-1.5 px-2.5 text-[10px] rounded border transition-all font-bold uppercase ${
                    newAgentGender === "female"
                      ? isMatrix
                        ? "bg-green-600 border-green-500 text-black font-mono"
                        : "bg-indigo-600 border-indigo-500 text-white shadow-sm"
                      : isMatrix
                      ? "bg-black text-green-500 border-green-500/30"
                      : isNight
                      ? "bg-slate-950 text-slate-400 border-slate-700 hover:text-white"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  ♀ Female
                </button>
              </div>
            </div>

            <div>
              <label className={`block text-[10px] uppercase font-bold mb-1 ${
                isMatrix ? "text-green-500 font-mono" : isNight ? "text-slate-400" : "text-slate-800 font-extrabold"
              }`}>Core System Directive</label>
              <textarea
                placeholder="List their operational rules..."
                rows={3}
                value={newAgentPrompt}
                onChange={(e) => setNewAgentPrompt(e.target.value)}
                className={`w-full px-2.5 py-1.5 text-xs rounded border focus:outline-none focus:border-indigo-500 font-mono ${
                  isMatrix ? "bg-black border-green-500/30 text-green-400" : isNight ? "bg-slate-950/80 border-slate-700 text-white" : "bg-white border-slate-200 text-slate-900 font-medium"
                }`}
              />
            </div>
            <div className="flex gap-2 justify-end pt-1">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className={`px-2 py-1 text-[10px] rounded hover:underline ${
                  isMatrix ? "text-green-400" : isNight ? "text-slate-400" : "text-slate-600 font-extrabold"
                }`}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-indigo-600 rounded hover:bg-indigo-500"
              >
                Instantiate Pod
              </button>
            </div>
          </form>
        ) : null}

        {/* Selected Node Details & Prompt Customizer */}
        {selectedAgent ? (
          <form onSubmit={handleSaveEdit} className="space-y-4">
            {isBusy ? (
              <div className={`p-3 rounded-lg flex items-start gap-2.5 border ${
                isMatrix
                  ? "bg-black border-red-500/25 text-red-500"
                  : isNight
                  ? "bg-red-950/30 border border-red-500/25 text-red-300"
                  : "bg-red-50 border border-red-300 text-slate-950 font-extrabold"
              }`}>
                <Lock className={`w-4 h-4 shrink-0 mt-0.5 ${isMatrix || isNight ? "text-red-400" : "text-black"}`} />
                <div className="text-[11px] leading-relaxed">
                  <span className={`font-black uppercase tracking-wider text-[10px] block mb-0.5 ${isMatrix || isNight ? "text-red-450" : "text-black"}`}>Neural Link Locked</span>
                  <span className={`${!isMatrix && !isNight ? "text-black font-extrabold" : ""}`}>
                    Cannot modify or remove employee directives while task is compiling or swarm is actively executing. Stop or wait for loop completion.
                  </span>
                </div>
              </div>
            ) : (
              <div className={`p-3.5 rounded-lg flex items-start gap-2.5 border ${
                isMatrix
                  ? "bg-green-950/10 border-green-500/20 text-green-400"
                  : isNight
                  ? "bg-indigo-500/5 border-indigo-500/10 text-slate-300"
                  : "bg-slate-100 border-slate-200 text-slate-955"
              }`}>
                <ShieldAlert className={`w-4 h-4 shrink-0 mt-0.5 ${isMatrix ? "text-green-500" : "text-emerald-600"}`} />
                <div className="text-[11px] leading-relaxed">
                  You are designing <span className={`font-bold ${isMatrix ? "text-green-400" : isNight ? "text-indigo-400" : "text-indigo-900 font-extrabold"}`}>{selectedAgent.name}</span>&apos;s active active pod.
                  Define directives securely below, or drag their terminal desk directly inside the grid view.
                </div>
              </div>
            )}

            <div className="space-y-3">
              <div>
                <label className={`block text-[10px] uppercase font-extrabold mb-1 ${
                  isMatrix ? "text-green-500" : isNight ? "text-slate-400" : "text-slate-900 text-black"
                } ${isBusy ? "opacity-60" : ""}`}>
                  Node Agent Name {isBusy && "🔒"}
                </label>
                <input
                  type="text"
                  required
                  disabled={isBusy}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-3 py-2 text-xs rounded border focus:outline-none focus:border-indigo-500 ${
                    isBusy ? "bg-slate-900/60 border-slate-800 text-slate-500 cursor-not-allowed" :
                    isMatrix ? "bg-black border-green-500/30 text-green-400 font-mono" : isNight ? "bg-slate-950/90 border-slate-700 text-white" : "bg-white border-slate-200 text-slate-950 font-bold"
                  }`}
                  id="inp-selected-agent-name"
                />
              </div>

              <div>
                <label className={`block text-[10px] uppercase font-extrabold mb-1 ${
                  isMatrix ? "text-green-500" : isNight ? "text-slate-400" : "text-slate-900 text-black"
                } ${isBusy ? "opacity-60" : ""}`}>
                  Official Role Designation {isBusy && "🔒"}
                </label>
                <input
                  type="text"
                  required
                  disabled={isBusy}
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  className={`w-full px-3 py-2 text-xs rounded border focus:outline-none focus:border-indigo-500 ${
                    isBusy ? "bg-slate-900/60 border-slate-800 text-slate-500 cursor-not-allowed" :
                    isMatrix ? "bg-black border-green-500/30 text-green-400 font-mono" : isNight ? "bg-slate-950/90 border-slate-700 text-white" : "bg-white border-slate-200 text-slate-950 font-bold"
                  }`}
                  id="inp-selected-agent-desig"
                />
              </div>

              <div>
                <label className={`block text-[10px] uppercase font-extrabold mb-1 ${
                  isMatrix ? "text-green-500" : isNight ? "text-slate-400" : "text-slate-900 text-black"
                } ${isBusy ? "opacity-60" : ""}`}>
                  Avatar Color {isBusy && "🔒"}
                </label>
                <div className="flex gap-2 py-1 items-center">
                  {PALETTE_COLORS.map((c) => (
                    <button
                      key={c.hex}
                      type="button"
                      disabled={isBusy}
                      onClick={() => setAvatarColor(c.hex)}
                      className={`w-6 h-6 rounded-full border transition-transform ${
                        isBusy ? "cursor-not-allowed opacity-50" : ""
                      } ${
                        avatarColor === c.hex ? "scale-125 border-slate-200 ring-2 ring-indigo-500" : "border-transparent"
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.label}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className={`block text-[10px] uppercase font-extrabold mb-1 ${
                  isMatrix ? "text-green-500" : isNight ? "text-slate-400" : "text-slate-900 text-black"
                } ${isBusy ? "opacity-60" : ""}`}>
                  Avatar Gender (Body Style) {isBusy && "🔒"}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    disabled={isBusy}
                    onClick={() => setGender("male")}
                    className={`py-1.5 px-3 text-xs rounded border transition-all font-semibold uppercase ${
                      isBusy ? "cursor-not-allowed opacity-50" : ""
                    } ${
                      gender === "male"
                        ? isMatrix
                          ? "bg-green-600 text-black border-green-500"
                          : "bg-indigo-600 text-white border-indigo-500 shadow"
                        : isMatrix
                        ? "bg-black text-green-500 border-green-500/30 hover:bg-green-500/10"
                        : isNight
                        ? "bg-slate-950 text-slate-400 border-slate-700 hover:text-white"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 text-slate-805"
                    }`}
                  >
                    ♂ Male
                  </button>
                  <button
                    type="button"
                    disabled={isBusy}
                    onClick={() => setGender("female")}
                    className={`py-1.5 px-3 text-xs rounded border transition-all font-semibold uppercase ${
                      isBusy ? "cursor-not-allowed opacity-50" : ""
                    } ${
                      gender === "female"
                        ? isMatrix
                          ? "bg-green-600 text-black border-green-500"
                          : "bg-indigo-600 text-white border-indigo-500 shadow"
                        : isMatrix
                        ? "bg-black text-green-500 border-green-500/30 hover:bg-green-500/10"
                        : isNight
                        ? "bg-slate-950 text-slate-400 border-slate-700 hover:text-white"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    ♀ Female
                  </button>
                </div>
              </div>

              <div>
                <label className={`block text-[10px] uppercase font-extrabold mb-1 ${
                  isMatrix ? "text-green-500" : isNight ? "text-slate-400" : "text-slate-900 text-black"
                } ${isBusy ? "opacity-60" : ""}`}>
                  Core System Directive / Prompts Instructions {isBusy && "🔒"}
                </label>
                <textarea
                  required
                  disabled={isBusy}
                  rows={6}
                  value={systemPrompt}
                  onChange={(e) => setSystemPrompt(e.target.value)}
                  className={`w-full p-2.5 text-xs rounded border focus:outline-none focus:border-indigo-500 font-mono leading-relaxed ${
                    isBusy ? "bg-slate-900/60 border-slate-800 text-slate-500 cursor-not-allowed" :
                    isMatrix ? "bg-black border-green-500/30 text-green-400" : isNight ? "bg-slate-950/90 border-slate-700 text-white" : "bg-white border-slate-200 text-slate-950 font-bold"
                  }`}
                  id="inp-selected-agent-prompt"
                />
              </div>
            </div>

            <div className="flex gap-2 items-center justify-between pt-1">
              <button
                type="button"
                disabled={agents.length <= 1 || isBusy}
                onClick={() => onDeleteAgent(selectedAgent.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md border text-[11px] font-bold uppercase transition-colors ${
                  isBusy || agents.length <= 1
                    ? "opacity-40 cursor-not-allowed border-slate-700 text-slate-550 bg-transparent"
                    : isMatrix
                    ? "border-red-500/30 text-red-400 hover:bg-red-500/10 font-mono"
                    : "border-red-600/30 text-red-400 hover:bg-red-600/10 bg-transparent"
                }`}
                id="btn-delete-agent-pod"
              >
                {isBusy ? <Lock className="w-3 h-3" /> : <Trash2 className="w-3.5 h-3.5" />}
                Deconstruct Pod
              </button>

              <button
                type="submit"
                disabled={isBusy}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-md font-bold text-[11px] uppercase transition-all ${
                  isBusy ? "opacity-50 cursor-not-allowed bg-slate-800 border-slate-755 text-slate-400" :
                  isMatrix
                    ? "bg-green-600 text-black hover:bg-green-400 font-mono"
                    : "bg-indigo-600 text-white hover:bg-indigo-500"
                }`}
                id="btn-save-agent-pod"
              >
                {isBusy ? <Lock className="w-3 h-3" /> : <Edit3 className="w-3.5 h-3.5" />}
                Update Directives
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-16 flex flex-col items-center justify-center">
            <Cpu className={`w-8 h-8 mb-2 animate-bounce ${isMatrix ? "text-green-500" : "text-indigo-500"}`} />
            <p className={`text-xs font-black ${isMatrix ? "text-green-400 font-mono" : isNight ? "text-slate-300" : "text-black"}`}>
              No worker node is selected.
            </p>
            <p className={`text-[11px] max-w-xs mt-1 leading-snug ${isMatrix ? "text-green-500 font-mono" : isNight ? "text-slate-400" : "text-slate-950 font-extrabold"}`}>
              Click any holographic terminal desk in the Canvas above to inspect and edit details.
            </p>
          </div>
        )}
      </div>

      <div className="text-[10px] text-slate-500 border-t border-dashed border-slate-800/60 pt-3 mt-4 text-center tracking-wide uppercase font-mono">
        Active Node Register: {agents.length} Pods Online
      </div>
    </div>
  );
}
