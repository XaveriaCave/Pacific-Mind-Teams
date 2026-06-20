# Product Requirements Document (PRD)

## Project: Agentic DocuSwarm — Collaborative AI Swarm Workspace & Document Editor
**Document Reference:** PRD-AGENT-DOC-001  
**Author:** Arsh Origins 
**Status:** Draft / Blueprint Ready  

---

## 1. Executive Summary & Vision

### 1.1 Vision Statement
**Agentic DocuSwarm**—a unified, collaborative platform where human project directors and active AI Agent Swarms work side-by-side. Instead of treating AI agents as static chat participants, they are modeled as interactive virtual office workers. They actively edit a central document, delegate sub-tasks, pass context, and visualise their workflows in a production-ready, WebGL-powered 3D office workspace.

### 1.2 The Problem
Traditional multi-agent systems are black boxes (text-only terminal outputs) or standard chat threads. Users cannot see the *physical architecture* of the communication, nor can they cleanly observe how a shared project document is incrementally built, audited, and finalized across multiple specialized roles.

### 1.3 The Solution
A clean, minimalist workspace featuring:
1. **The Shared Live Document Panel (Work product):** A real-time document editor (WYSIWYG/Markdown format) serving as the single source of truth for the project.
2. **The 3D/WebGL Swarm Simulation Canvas (Visualization):** A fully movable 3D WebGL isometric physics space rendered using **Three.js** or **React Three Fiber**. This view maps agent status, focus, and delegation paths (parabolic arcs) in real-time.
3. **The Agent Foundry Panel (Configuration):** A workspace where users construct customized agents, define system prompts, position desk nodes, and select downstream context-receivers.

---

## 2. Platform Core Architecture & Feature Scope

```
+---------------------------------------------------------------------------------+
|                                 AGENTIC DOCUSWARM                               |
+---------------------------------------------------------------------------------+
|                                                                                 |
|  +---------------------+  +--------------------------------------------------+  |
|  |    AGENT FOUNDRY    |  |               3D SIMULATION CANVAS               |  |
|  |                     |  |  (React Three Fiber / GLTF Office assets / Arcs) |  |
|  | - Define Prompts    |  |                                                  |  |
|  | - Set Roles (Draft) |  |   [Supervisor] =====(Delegation)=====> [Writer]  |  |
|  | - Position Desks    |  |        ||                                  ||    |  |
|  |                     |  |        ||                                  ||    |  |
|  | [ Save Agent ]      |  |   [Publisher] <================== [Auditor]      |  |
|  +---------------------+  +--------------------------------------------------+  |
|                                                                                 |
|  +------------------------------------------+  +-----------------------------+  |
|  |         LIVE SHARED DOCUMENT             |  |      SYSTEM TERMINAL        |  |
|  |  (Incremental collaborative building)    |  |                             |  |
|  |                                          |  | - active execution logs     |  |
|  | # Project Proposal Draft                 |  | - API stream pipelines      |  |
|  |                                          |  | - handoff protocols         |  |
|  | **Writer Agent (19:56)**: Written.       |  |                             |  |
|  | **Auditor Agent (19:57)**: Approved.     |  | [ Run Loop ] [ Step Turn ]  |  |
|  +------------------------------------------+  +-----------------------------+  |
+---------------------------------------------------------------------------------+
```

### 2.1 Shared Collaborative Document State
*   **The Shared Memory Ledger:** The central project document (JSON structure or Markdown value) represents the accumulated result of the swarm’s work.
*   **Segmented Assembly Mode:** Agents do not rewrite the entire project. They claim specific sections (e.g., *Abstract*, *Market Analysis*, *System Architecture*, *Security Policy*) based on their specialty prefix.
*   **Audit & Annotation Overlays:** Reviewer/Critic agents insert Markdown inline comments (`[AUDIT: Revise paragraph 2 for tone]`) or actively rewrite sections that fail validation scripts.

### 2.2 Agent Foundry & Coordination Engine
*   **Role Classification Matrix:**
    *   **Supervisor (The Delegator):** Interprets user prompts, creates step-by-step task trees in the PRD/Document, and schedules which specialist agent does what.
    *   **Specialist Writer:** Focuses on standard drafting of content using specific domain context.
    *   **Quality Auditor:** Re-reads the generated content against the initial user objective and marks sections "Approved" or "Rejected" with improvement loops.
    *   **Publisher / Finalizer:** Compiles, cleans up formatting markdown, handles table of contents building, and triggers the output download logic.
*   **Simulated Movement:** When an agent is called to action, their representative 3D avatar actually gets up from their personal swiveling workstation desk, walks over to the coffee area/whiteboard to represent task processing, or approaches another coworker node to initiate a collaboration handshake.

---

## 3. High-Fidelity 3D Simulation Engine Architecture

Transitioning from HTML5 Canvas to a high-fidelity WebGL system requires dedicated graphics frameworks. Below is the precise implementation guide for transitioning to **Three.js** and **React Three Fiber (R3F)**.

### 3.1 Recommended Graphic Library Stack
1.  **`three`**: Core WebGL engine.
2.  **`@types/three`**: Strict TypeScript declarations.
3.  **`@react-three/fiber`**: React renderer wrapper for Three.js. Maps declarative tags directly to Three.js class instances (e.g., `<mesh>` maps to `new THREE.Mesh()`).
4.  **`@react-three/drei`**: High-quality helper hooks and controls (e.g., `OrbitControls`, `Html`, `Text`, `useGLTF`).
5.  **`motion/react`** (formerly Framer Motion): Clean CSS animation layers and layout anchors around the Canvas container.

### 3.2 3D Scene Composition & Node Hierarchies
Each workspace asset is rendered as a clean 3D component inside the `<Canvas>` wrapper element:

```tsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Grid, Text, Sparkles } from "@react-three/drei";
import * as THREE from "three";

// 1. Dynamic Office Desk Component representing individual Agent Workstations
export function Workstation({ agent, isFocused }) {
  const deskRef = useRef<THREE.Group>(null);

  // Subtle breathing animation hook
  useFrame((state) => {
    if (deskRef.current) {
      deskRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 2.0) * 0.02;
    }
  });

  return (
    <group ref={deskRef} position={[agent.gridPosition.x - 6, 0, agent.gridPosition.z - 6]}>
      {/* Table Top Surface */}
      <mesh position={[0, 0.7, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 0.1, 1.0]} />
        <meshStandardMaterial color={isFocused ? "#6366f1" : "#e2e8f0"} roughness={0.2} />
      </mesh>

      {/* Table Legs */}
      <mesh position={[-0.6, 0.35, -0.4]}>
        <cylinderGeometry args={[0.04, 0.04, 0.7]} />
        <meshStandardMaterial color="#475569" metalness={0.7} />
      </mesh>
      <mesh position={[0.6, 0.35, -0.4]}>
        <cylinderGeometry args={[0.04, 0.04, 0.7]} />
        <meshStandardMaterial color="#475569" metalness={0.7} />
      </mesh>
      <mesh position={[-0.6, 0.35, 0.4]}>
        <cylinderGeometry args={[0.04, 0.04, 0.7]} />
        <meshStandardMaterial color="#475569" metalness={0.7} />
      </mesh>
      <mesh position={[0.6, 0.35, 0.4]}>
        <cylinderGeometry args={[0.04, 0.04, 0.7]} />
        <meshStandardMaterial color="#475569" metalness={0.7} />
      </mesh>

      {/* Cyber/Tech Hologram if active */}
      {isFocused && (
        <group position={[0, 1.2, 0]}>
          <Sparkles count={8} scale={1.2} size={2.5} speed={1.5} color="#4ade80" />
        </group>
      )}

      {/* Floating 3D Text Label */}
      <Text
        position={[0, 1.6, 0]}
        fontSize={0.2}
        color={isFocused ? "#4ade80" : "#0f172a"}
        anchorX="center"
        anchorY="middle"
      >
        {agent.name.split(" ")[0]}
      </Text>
    </group>
  );
}
```

---

### 3.3 Dynamic 3D Delegation Arcs using Quadratic Bezier Curves
When information is handed over from one agent to another, we create a beautiful, physical 3D emission wave pulsing dynamically through the office space.

```tsx
import { useMemo } from "react";

export function DelegationArc({ startPos, endPos, themeColor = "#cbd5e1" }) {
  // Derive parabolic Bezier control point dynamically in the 3D grid
  const curve = useMemo(() => {
    const start = new THREE.Vector3(startPos[0] - 6, 0.8, startPos[2] - 6);
    const end = new THREE.Vector3(endPos[0] - 6, 0.8, endPos[2] - 6);

    // Height apex scaled proportionally based on delegation distance
    const dist = start.distanceTo(end);
    const apexHeight = Math.max(1.8, dist * 0.45);
    
    // Control point directly above the center
    const control = new THREE.Vector3()
      .addVectors(start, end)
      .multiplyScalar(0.5);
    control.y += apexHeight;

    return new THREE.QuadraticBezierCurve3(start, control, end);
  }, [startPos, endPos]);

  // Create curved pipeline geometry segment nodes
  const points = curve.getPoints(30);
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <group>
      {/* Continuous faint structural pipeline trace */}
      <line geometry={lineGeometry}>
        <lineBasicMaterial color={themeColor} opacity={0.3} transparent linewidth={1.5} />
      </line>

      {/* Pulsing visual core packet traveling along the curve timeline */}
      <PulsePacket curve={curve} color={themeColor} />
    </group>
  );
}

function PulsePacket({ curve, color }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    // Periodically reset loop timer parameter between 0 and 1
    const t = (state.clock.getElapsedTime() * 0.5) % 1.0;
    const pos = curve.getPointAt(t);
    meshRef.current.position.copy(pos);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.12, 16, 16]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  );
}
```

---

### 3.4 Camera Interactivity & Movable Viewport setup
Using `<OrbitControls />` from Drei ensures robust drag-to-orbit, zoom, and panning boundaries natively, completely resolving coordinate-to-pixel projection math.

```tsx
export function ViewportScene({ agents, activeAgentId, decorItems }) {
  return (
    <Canvas
      camera={{ position: [10, 12, 16], fov: 42 }}
      shadows
      gl={{ antialias: true, preserveDrawingBuffer: true }}
    >
      {/* Studio Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[15, 25, 10]} 
        intensity={1.2} 
        castShadow 
        shadow-mapSize={[1024, 1024]} 
      />

      {/* Precise Ground Grid Helper */}
      <Grid
        args={[24, 24]}
        cellSize={1.0}
        cellThickness={0.9}
        cellColor="#64748b"
        sectionSize={4}
        sectionThickness={1.2}
        sectionColor="#3b82f6"
        fadeDistance={30}
        infiniteGrid
      />

      {/* Workstations Render Nodes */}
      {agents.map((ag) => (
        <Workstation 
          key={ag.id} 
          agent={ag} 
          isFocused={activeAgentId === ag.id} 
        />
      ))}

      {/* Camera Interactive Controls with configured boundaries */}
      <OrbitControls
        enableDamping
        dampingFactor={0.06}
        maxPolarAngle={Math.PI / 2 - 0.05} // prevent rotating below the horizon
        minDistance={5}                     // max zoom in boundary
        maxDistance={35}                    // max zoom out boundary
        makeDefault
      />
    </Canvas>
  );
}
```

---

## 4. Collaborative Content Pipeline & Delegation Loop

The full automation flow follows a state-machine that incrementally constructs documents in cooperation with the user.

```
       [USER INPUT]
 e.g. "Draft PRD of a health app"
            │
            ▼
┌───────────────────────┐
│     SUPERVISOR        │◄────── User clarifies if needed
│ (Deconstructs Tasks)  │
└───────────┬───────────┘
            │ Generates Task List (Objective Checklist)
            ▼
┌───────────────────────┐
│       WRITER          │  (Simulated walking animation triggers
│ (Drafts Section 1)    │   to coffee machine / reference whiteboard)
└───────────┬───────────┘
            │ Appends markdown block to shared document
            ▼
┌───────────────────────┐   FAIL (Fails verification check)
│       AUDITOR         ├───────────────────────┐
│ (Inspects Content)    │                       │
└───────────┬───────────┘                       ▼
            │                         ┌───────────────────┐
            │ PASS (Approved!)        │   REWRITE LOOP    │
            ▼                         └─────────┬─────────┘
┌───────────────────────┐                       │
│      PUBLISHER        │◄──────────────────────┘
│ (Compiles / Downloads)│
└───────────────────────┘
```

### 4.1 Step-by-Step Task Assembly Workflows
1.  **Objective Ingest:**
    *   The user inputs: *"Write a technical product requirement paper for a secure medical IoT gateway."*
    *   The **Supervisor** parses the requirement, generates a 6-part empty markdown skeleton, and updates the shared Document panel.
2.  **Autonomous Segment Allocation:**
    *   Supervisor uses local coordinate metrics to delegate task *01: Cryptographic Specifications* to **Cryptographer Node**.
    *   The cryptographer node gets a light bulb icon trigger in 3D, stands up, walks to the shared conference room table (coordinate node), and issues a Gemini drafting prompt.
3.  **Real-Time Collaborative Doc Assembly:**
    *   The draft is appended inside section 1.
    *   Supervisor receives the event signature, triggers a delegation arc trajectory pointing to the **Compliance Specialist Node** for review.
    *   If quality checks fail, compliance specialist walks to Cryptographer desk to "handshake" a corrective rewrite loop.

---

## 5. Technology Roadmap & Technical Milestones

| Milestone | Target Deliverable | Key Complexity Metrics / High Performance Standards |
| :--- | :--- | :--- |
| **Milestone 1** | Collaborative Shared Rich Text State integration | State-synchronization between dynamic client-side state hooks, LocalStorage, and a unified markdown editor workspace. |
| **Milestone 2** | LLM Streaming & Joint Handoff Pipeline | Integration with server-side SDK pipelines. Support for autonomous context propagation (`delegateId`, `reasonCode`) across chain-turns. |
| **Milestone 3** | R3F 3D Workspace Visualization | Converting existing Canvas coordinates mapping to true WebGL meshes, loading detailed GLTF vector office furnishings, rendering interactive lines and trajectory Bezier arcs. |
| **Milestone 4** | Action Walk Nodes Pathfinding | Implementing simple A* or grid cell vector pathfinding for customized human entities to navigate office nodes cleanly without passing through existing desk meshes. |

---
*Created by the Task Orchestration Grounded Control System.*
