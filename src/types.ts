export type AgentState = "idle" | "thinking" | "sending" | "receiving" | "walking" | "returning";

export interface AgentNode {
  id: string;
  name: string;
  designation: string;
  systemPrompt: string;
  gridPosition: { x: number; z: number }; // Home base Desk coordinates
  // Runtime positions for dynamic walk-and-talk animation simulation
  currentPos?: { x: number; z: number };
  targetPos?: { x: number; z: number };
  walkProgress?: number; // 0 to 1
  avatarColor?: string; // Hex color for the cute body character
  gender?: "male" | "female"; // Avatar styling gender choice
  state: AgentState;
}

export interface Message {
  id: string;
  text: string;
  senderId: string;
  senderName: string;
  senderDesignation: string;
  delegateId: string | null;
  delegationReason: string;
  timestamp: string;
}

export type TimeMode = "day" | "night" | "matrix";

export interface DecorItem {
  id: string;
  type: "coffee" | "cooler" | "plant" | "couch";
  x: number;
  z: number;
}

export interface TeamConfig {
  id: string;
  name: string;
  description: string;
  objective: string;
  agents: AgentNode[];
  decorItems?: DecorItem[];
}

export interface WorkspaceState {
  version: "1.0.0";
  gridSize: number; // 10 to 30
  timeMode: TimeMode;
  teams: TeamConfig[];
  activeTeamId: string;
  history: Message[];
}
