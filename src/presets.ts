import { TeamConfig } from "./types";

export const PRESET_TEAMS: TeamConfig[] = [
  {
    id: "startup-launcher",
    name: "Startup & Product Launcher",
    description: "Launch products, analyze competitive markets, and outline architectures with operations and engineering experts.",
    objective: "Draft a product launch proposal and architecture outline for an eco-friendly mobile battery-swapping service.",
    agents: [
      {
        id: "ops-lead",
        name: "Sonia (Operations Chief)",
        designation: "Operations Lead",
        systemPrompt: "You formulate high-level business logic, operational timelines, supply chain considerations, and project milestones. Coordinate tasks logically.",
        gridPosition: { x: 2, z: 2 },
        avatarColor: "#60a5fa", // Pretty sky blue matching character image
        gender: "female",
        state: "idle"
      },
      {
        id: "market-analyst",
        name: "Marcus (Market Strategist)",
        designation: "Market Analyst",
        systemPrompt: "You specialize in researching competitor lists, pricing strategies, market differentiators, target user demographics, and marketing channels.",
        gridPosition: { x: 5, z: 2 },
        avatarColor: "#34d399", // Emerald mint
        gender: "male",
        state: "idle"
      },
      {
        id: "fin-planner",
        name: "Fiona (Finance Director)",
        designation: "Financial Planner",
        systemPrompt: "You draft expense structures, pricing schemas, lifetime value projections, cost savings calculations, and monetization models.",
        gridPosition: { x: 2, z: 6 },
        avatarColor: "#f472b6", // Pastel pink
        gender: "female",
        state: "idle"
      },
      {
        id: "dev-lead",
        name: "Devon (Systems Arch)",
        designation: "Full-Stack Developer",
        systemPrompt: "You draft detailed database models, API specs, deployment infrastructures (e.g., Docker, Kubernetes), and outline core code snippets.",
        gridPosition: { x: 5, z: 6 },
        avatarColor: "#fbbf24", // Warm amber
        gender: "male",
        state: "idle"
      },
      {
        id: "qa-tester",
        name: "Quinn (Quality Guardian)",
        designation: "Lead QA & Security Tester",
        systemPrompt: "You review developer architectures for potential leaks, edge-case failure modes, scale constraints, test coverage, and validation schemas.",
        gridPosition: { x: 8, z: 4 },
        avatarColor: "#a78bfa", // Soft purple
        gender: "female",
        state: "idle"
      }
    ]
  },
  {
    id: "academic-group",
    name: "Academic Research Syndicate",
    description: "Conduct scholarly literature reviews, analyze raw data trends, synthesize summaries, and outline LaTeX document citations.",
    objective: "Synthesize a structured literature paper on 'Advances and Solid-State Degradation in Automotive Battery Anodes' for publication.",
    agents: [
      {
        id: "lead-investigator",
        name: "Dr. Arthur (Principal PI)",
        designation: "Lead Investigator",
        systemPrompt: "You write formal thesis structures, set rigorous research questions, design academic experimental methods, and critically verify logical conclusions.",
        gridPosition: { x: 4, z: 2 },
        avatarColor: "#60a5fa",
        gender: "male",
        state: "idle"
      },
      {
        id: "data-aggregator",
        name: "Danica (Data Systems)",
        designation: "Data Aggregator",
        systemPrompt: "You summarize research methodologies, locate mock paper citations, list quantitative data points/material attributes, and list physical constraints.",
        gridPosition: { x: 2, z: 5 },
        avatarColor: "#34d399",
        gender: "female",
        state: "idle"
      },
      {
        id: "content-summarizer",
        name: "Sam (Editor-in-Chief)",
        designation: "Content Summarizer",
        systemPrompt: "You edit draft summaries, translate dense physical data into readable sections, formulate abstract sections, and refine narrative clarity.",
        gridPosition: { x: 7, z: 5 },
        avatarColor: "#fbbf24",
        gender: "male",
        state: "idle"
      },
      {
        id: "latex-formatter",
        name: "Laura (LaTeX Designer)",
        designation: "LaTeX Formatter",
        systemPrompt: "You specialize in translating reports into formal LaTeX document layout templates, organizing reference lists, and structural bibtex records.",
        gridPosition: { x: 4, z: 8 },
        avatarColor: "#a78bfa",
        gender: "female",
        state: "idle"
      }
    ]
  }
];
