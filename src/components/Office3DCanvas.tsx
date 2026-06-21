import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { AgentNode, TimeMode, DecorItem, Message } from "../types";
import { 
  Sparkles, 
  RefreshCw, 
  Eye, 
  RotateCw, 
  Move, 
  ZoomIn, 
  ZoomOut, 
  Info,
  Layers,
  Moon,
  Sun,
  Terminal,
  HelpCircle
} from "lucide-react";

interface Office3DCanvasProps {
  agents: AgentNode[];
  decorItems: DecorItem[];
  gridSize: number;
  timeMode: TimeMode;
  messages?: Message[];
  currentAgentId?: string | null;
}

interface WalkingState {
  agentId: string;
  homeX: number;
  homeZ: number;
  targetX: number;
  targetZ: number;
  currentX: number;
  currentZ: number;
  progress: number; // 0 to 1
  phase: "to_target" | "dwelling" | "return";
  dwellTimeLeft: number;
  reasonCode: string;
}

export default function Office3DCanvas({
  agents,
  decorItems = [],
  gridSize,
  timeMode,
  messages = [],
  currentAgentId,
}: Office3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [dimensions, setDimensions] = useState({ width: 700, height: 500 });
  const [showHelpers, setShowHelpers] = useState(true);
  const [cinematicEffects, setCinematicEffects] = useState(false);
  const [allowRandomWalks, setAllowRandomWalks] = useState(true);
  const [activeMotiveLabel, setActiveMotiveLabel] = useState<string | null>(null);

  // Keep track of continuous simulation walking states for the agents
  const [walkingAgents, setWalkingAgents] = useState<{ [id: string]: WalkingState }>({});
  const walkingAgentsRef = useRef(walkingAgents);

  useEffect(() => {
    walkingAgentsRef.current = walkingAgents;
  }, [walkingAgents]);

  // Monitor canvas resized dimension changes fluidly
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({
          width: Math.max(width, 350),
          height: Math.max(height, 420),
        });
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const [breakTimeLeft, setBreakTimeLeft] = useState(120);

  // Helper function to trigger a randomized group of agents to seek setting nodes
  const triggerAutomaticBreakGroup = () => {
    if (agents.length === 0) return;

    setWalkingAgents((prev) => {
      const next = { ...prev };
      
      // Select idle agents (agents not currently active walkers)
      const idleAgents = agents.filter((ag) => !next[ag.id]);
      if (idleAgents.length === 0) return prev;

      // Choose a random number of agents to go on break (between 1 and 3, clamped to count of idle agents)
      const numAgentsToSelect = Math.min(idleAgents.length, Math.floor(Math.random() * 3) + 1);

      // Shuffle candidates list
      const shuffled = [...idleAgents].sort(() => 0.5 - Math.random());
      const chosenAgents = shuffled.slice(0, numAgentsToSelect);

      chosenAgents.forEach((ag) => {
        // Build settings pool dynamically
        const settings: Array<{ type: string; name: string; x: number; z: number }> = [];

        // Decor items (Water Dispenser, Coffee Station, Mini Store, Plant, Couch, etc)
        if (decorItems && decorItems.length > 0) {
          decorItems.forEach((decor) => {
            let label = "Office Object";
            if (decor.type === "coffee") label = "Coffee Station";
            if (decor.type === "cooler") label = "Water Dispenser";
            if (decor.type === "plant") label = "Ficus Plant";
            if (decor.type === "couch") label = "Lounge Couch";
            if (decor.type === "wall") label = "Structural Wall";
            if (decor.type === "store") label = "Convenience Store";
            if (decor.type === "conference") label = "Conference Desk";

            settings.push({
              type: decor.type,
              name: label,
              x: decor.x,
              z: decor.z,
            });
          });
        }

        let targetX = Math.floor(Math.random() * gridSize);
        let targetZ = Math.floor(Math.random() * gridSize);
        let motive = "Pacing around... 🚶";

        if (settings.length > 0) {
          const pickedSetting = settings[Math.floor(Math.random() * settings.length)];
          targetX = pickedSetting.x;
          targetZ = pickedSetting.z;

          if (pickedSetting.type === "coffee") {
            motive = "Getting espresso refueled... ☕";
          } else if (pickedSetting.type === "cooler") {
            motive = "Chilled cooler beverage break! 💧";
          } else if (pickedSetting.type === "plant") {
            motive = "Admiring office plant green... 🪴";
          } else if (pickedSetting.type === "couch") {
            motive = "Lounging for creative brainstorming... 🛋️";
          } else if (pickedSetting.type === "wall") {
            motive = "Inspecting wall building partition... 🧱";
          } else if (pickedSetting.type === "store") {
            motive = "Grabbing snack at Mini Store... 🏪";
          } else if (pickedSetting.type === "conference") {
            motive = "Attending executive meeting at Conference Table... 👥";
          }
        }

        // Clamp values to valid bounds of the grid
        targetX = Math.max(0, Math.min(gridSize - 1, targetX));
        targetZ = Math.max(0, Math.min(gridSize - 1, targetZ));

        next[ag.id] = {
          agentId: ag.id,
          homeX: ag.gridPosition.x,
          homeZ: ag.gridPosition.z,
          targetX: targetX,
          targetZ: targetZ,
          currentX: ag.gridPosition.x,
          currentZ: ag.gridPosition.z,
          progress: 0,
          phase: "to_target",
          dwellTimeLeft: 120, // frames
          reasonCode: motive,
        };
      });

      return next;
    });
  };

  // 1. One-second interval Countdown timer hook for automatic swarm break scheduling
  useEffect(() => {
    const timer = setInterval(() => {
      setBreakTimeLeft((prev) => {
        if (prev <= 1) {
          if (allowRandomWalks) {
            triggerAutomaticBreakGroup();
          }
          return 120; // reset to 2 minutes
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [allowRandomWalks, agents, decorItems, gridSize]);

  // 2. Continuous 100ms pathing updates to move agents in WebGL view
  useEffect(() => {
    const interval = setInterval(() => {
      if (agents.length === 0) return;

      setWalkingAgents((prev) => {
        const next = { ...prev };
        
        // Advance active walkers
        Object.keys(next).forEach((id) => {
          const w = next[id];
          if (w.phase === "to_target") {
            w.progress += 0.015; // walking pace
            if (w.progress >= 1.0) {
              w.progress = 1.0;
              w.currentX = w.targetX;
              w.currentZ = w.targetZ;
              w.phase = "dwelling";
            } else {
              w.currentX = w.homeX + (w.targetX - w.homeX) * w.progress;
              w.currentZ = w.homeZ + (w.targetZ - w.homeZ) * w.progress;
            }
          } else if (w.phase === "dwelling") {
            w.dwellTimeLeft--;
            if (w.dwellTimeLeft <= 0) {
              w.phase = "return";
              w.progress = 0;
            }
          } else if (w.phase === "return") {
            w.progress += 0.015;
            if (w.progress >= 1.0) {
              w.progress = 1.0;
              w.currentX = w.homeX;
              w.currentZ = w.homeZ;
              delete next[id]; // reached home base, clean up node
            } else {
              w.currentX = w.targetX + (w.homeX - w.targetX) * w.progress;
              w.currentZ = w.targetZ + (w.homeZ - w.targetZ) * w.progress;
            }
          }
        });

        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [agents, gridSize]);

  // Keep track of active helper reference to notify on walking changes
  useEffect(() => {
    const list = Object.values(walkingAgents) as WalkingState[];
    if (list.length > 0) {
      const activeWalker = list[0];
      const name = agents.find((a) => a.id === activeWalker.agentId)?.name || "Agent";
      setActiveMotiveLabel(`🚶 ${name.split(" ")[0]} is: ${activeWalker.reasonCode}`);
    } else {
      setActiveMotiveLabel(null);
    }
  }, [walkingAgents, agents]);

  // Helper: Generates beautiful distinct visual characteristics for stylish human models in Three.js
  const getHumanFeatures = (id: string, name: string) => {
    const charSum = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const skinTones = [0xffdbac, 0xf1c27d, 0xe0ac69, 0xc68642, 0x8d5524];
    const hairColors = [0x1a1510, 0x2c0600, 0xb84305, 0xe5c158, 0x5a504a];
    const clothesColors = [0x334155, 0x0f766e, 0xbe185d, 0x581c87, 0xc2410c, 0x0369a1, 0x14b8a6, 0x6366f1];
    const trouserColors = [0x1e293b, 0x334155, 0x475569, 0x111827];
    
    return {
      skin: skinTones[charSum % skinTones.length],
      hairColor: hairColors[(charSum + 2) % hairColors.length],
      clothesColor: clothesColors[(charSum + 4) % clothesColors.length],
      trouserColor: trouserColors[(charSum + 5) % trouserColors.length],
      hairStyle: charSum % 5 // 0: Spiky, 1: Ponytail, 2: Corporate, 3: Curly, 4: Bob
    };
  };

  // --- THREE.JS MAIN INTEGRATION HOOK ---
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef3d = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const workspaceGroupRef = useRef<THREE.Group | null>(null);
  const requestRef = useRef<number>(0);

  // Setup Three.js Context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create scene, camera, and shadow-capable renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      45,
      dimensions.width / dimensions.height,
      0.1,
      200
    );
    camera.position.set(12, 11, 16);
    cameraRef3d.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      preserveDrawingBuffer: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(dimensions.width, dimensions.height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.maxPolarAngle = Math.PI / 2 - 0.05; // Lock camera above floor
    controls.minDistance = 3;
    controls.maxDistance = 55;
    controls.target.set(0, 0, 0);
    controlsRef.current = controls;

    // Workspace node group mapping
    const workspaceGroup = new THREE.Group();
    scene.add(workspaceGroup);
    workspaceGroupRef.current = workspaceGroup;

    // Dynamic light rigging
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(15, 24, 12);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 60;
    const offset = 15;
    dirLight.shadow.camera.left = -offset;
    dirLight.shadow.camera.right = offset;
    dirLight.shadow.camera.top = offset;
    dirLight.shadow.camera.bottom = -offset;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);

    const floorGeometry = new THREE.PlaneGeometry(100, 100);
    const floorMaterial = new THREE.MeshStandardMaterial({
      roughness: 0.85,
      metalness: 0.1,
    });
    const floorPlane = new THREE.Mesh(floorGeometry, floorMaterial);
    floorPlane.rotation.x = -Math.PI / 2;
    floorPlane.receiveShadow = true;
    scene.add(floorPlane);

    // Keep animate tick running
    let clock = new THREE.Clock();

    const tick = () => {
      const elapsed = clock.getElapsedTime();

      // Update Controls
      if (controlsRef.current) {
        controlsRef.current.update();
      }

      // Continuous rotation of cinematic drift if enabled
      if (cinematicEffects && cameraRef3d.current && controlsRef.current) {
        const driftAngle = elapsed * 0.04;
        const currentRadius = new THREE.Vector2(
          cameraRef3d.current.position.x - controlsRef.current.target.x,
          cameraRef3d.current.position.z - controlsRef.current.target.z
        ).length();
        
        // Stabilize drift zoom heights
        const targetHeight = 11 + Math.sin(elapsed * 0.1) * 0.5;
        cameraRef3d.current.position.x = controlsRef.current.target.x + Math.cos(driftAngle) * currentRadius * 0.999;
        cameraRef3d.current.position.z = controlsRef.current.target.z + Math.sin(driftAngle) * currentRadius * 0.999;
        cameraRef3d.current.position.y += (targetHeight - cameraRef3d.current.position.y) * 0.05;
      }

      // Animate walking agents, active speaking ripples
      if (workspaceGroupRef.current) {
        workspaceGroupRef.current.children.forEach((mesh) => {
          // Dynamic text label billboarding (always face camera)
          if (mesh.name.startsWith("ag-label-")) {
            if (cameraRef3d.current) {
              mesh.quaternion.copy(cameraRef3d.current.quaternion);
            }
            // Update the label position to stay exactly above the corresponding agent!
            const targetAgentId = mesh.name.replace("ag-label-", "");
            const counterpartAgent = workspaceGroupRef.current?.getObjectByName(`agent-${targetAgentId}`);
            if (counterpartAgent) {
              mesh.position.set(counterpartAgent.position.x, 1.62, counterpartAgent.position.z);
            }
          }

          // Dynamic Agent walks & sitting posture states
          if (mesh.userData && mesh.userData.isAgent) {
            const agentId = mesh.userData.agentId;
            const ag = agents.find((a) => a.id === agentId);
            const spacingVal = 1.6;
            const centerVal = (gridSize - 1) / 2;

            let x = ag ? ag.gridPosition.x : 0;
            let z = ag ? ag.gridPosition.z : 0;

            // Read walking override state
            const walker = walkingAgentsRef.current[agentId];

            if (walker) {
              x = walker.currentX;
              z = walker.currentZ;
            }

            const currentCellX = Math.round(x);
            const currentCellZ = Math.round(z);
            const decorAtCell = decorItems.find(
              (d) => Math.round(d.x) === currentCellX && Math.round(d.z) === currentCellZ
            );

            // Determine if they are resting/dwelling at this tile location
            const isOccupyingCell = !walker || walker.phase === "dwelling";

            let offsetX = 0;
            let offsetZ = 0;
            let rotationOverride: number | null = null;
            let forceSitting = false;
            let forceStanding = false;

            const deskRotRad = ((ag?.deskRotation || 0) * Math.PI) / 180;

            if (isOccupyingCell) {
              if (decorAtCell) {
                // Find all active agent meshes currently dwelling at identical cell coords
                const occupiers = agents
                  .filter((otherAg) => {
                    const otherWalker = walkingAgentsRef.current[otherAg.id];
                    const ox = otherWalker ? otherWalker.currentX : otherAg.gridPosition.x;
                    const oz = otherWalker ? otherWalker.currentZ : otherAg.gridPosition.z;
                    const isOtherOccupying = !otherWalker || otherWalker.phase === "dwelling";
                    return isOtherOccupying && Math.round(ox) === currentCellX && Math.round(oz) === currentCellZ;
                  })
                  .map((otherAg) => otherAg.id)
                  .sort();

                const occupantIndex = Math.max(0, occupiers.indexOf(agentId));

                if (decorAtCell.type === "conference") {
                  forceSitting = true;
                  const chairPositions = [
                    { x: -0.6, z: 0, rotY: Math.PI / 2 },
                    { x: 0.6, z: 0, rotY: -Math.PI / 2 },
                    { x: 0, z: -0.4, rotY: 0 },
                    { x: 0, z: 0.4, rotY: Math.PI }
                  ];
                  const pos = chairPositions[occupantIndex % 4];
                  offsetX = pos.x;
                  offsetZ = pos.z;
                  rotationOverride = pos.rotY;
                } else if (decorAtCell.type === "couch") {
                  forceSitting = true;
                  const couchPositions = [
                    { x: -0.5, z: -0.06, rotY: 0 },
                    { x: 0, z: -0.06, rotY: 0 },
                    { x: 0.5, z: -0.06, rotY: 0 }
                  ];
                  const pos = couchPositions[occupantIndex % 3];
                  offsetX = pos.x;
                  offsetZ = pos.z;
                  rotationOverride = pos.rotY;
                } else {
                  // Standing items: coffee, cooler, plant, store, etc.
                  forceStanding = true;
                  const count = occupiers.length || 1;
                  const angle = (occupantIndex * (2 * Math.PI)) / count;
                  const radius = 0.35;
                  offsetX = Math.sin(angle) * radius;
                  offsetZ = Math.cos(angle) * radius;
                  rotationOverride = angle + Math.PI; // Face inward towards center
                }
              } else {
                // Personal home desk
                offsetX = Math.sin(deskRotRad) * 0.35;
                offsetZ = Math.cos(deskRotRad) * 0.35;
              }
            }

            // Decide whether they should be rendered sitting or standing
            let isSitting = !walker || walker.phase === "dwelling";
            if (forceSitting) isSitting = true;
            if (forceStanding) isSitting = false;

            const leftLeg = mesh.getObjectByName("left-leg");
            const rightLeg = mesh.getObjectByName("right-leg");
            const leftArm = mesh.getObjectByName("left-arm");
            const rightArm = mesh.getObjectByName("right-arm");
            const torso = mesh.getObjectByName("torso");

            if (isSitting) {
              // Sit-typing posture: Thighs extend forward, arms type on keyboard, torso breathes with small bounce
              const breathing = Math.sin(elapsed * 2.5) * 0.012;
              if (torso) {
                torso.position.set(0, 0.42 + breathing, 0); // lower slightly onto the desk chair cushion
                torso.rotation.set(0.06, 0, 0); // slight typing lean forward
              }

              // Thighs pointing forward: local +Z (since mesh will be rotated towards desk, front is +Z)
              if (leftLeg) {
                leftLeg.position.set(-0.065, 0.22, 0.12);
                leftLeg.rotation.set(Math.PI / 2, 0, 0); // Rotate 90deg to extend horizontally
              }
              if (rightLeg) {
                rightLeg.position.set(0.065, 0.22, 0.12);
                rightLeg.rotation.set(Math.PI / 2, 0, 0); // Rotate 90deg to extend horizontally
              }

              // Hands typing above the table top (table top is at 0.55/0.58)
              const typingSwivelL = Math.sin(elapsed * 20.0) * 0.02;
              const typingSwivelR = Math.cos(elapsed * 20.0 + 1.2) * 0.02;
              if (leftArm) {
                leftArm.position.set(-0.16, 0.60 + typingSwivelL, 0.08);
                leftArm.rotation.set(-1.4 + typingSwivelL, 0.15, 0.1);
              }
              if (rightArm) {
                rightArm.position.set(0.16, 0.60 + typingSwivelR, 0.08);
                rightArm.rotation.set(-1.4 + typingSwivelR, -0.15, -0.1);
              }
            } else {
              // Stand/walk state posture: legs waddle, arms coordinate-swing
              if (torso) {
                torso.position.set(0, 0.45, 0);
                torso.rotation.set(0, 0, 0);
              }

              const waddle = Math.sin(elapsed * 12.0) * 0.25;
              if (leftLeg) {
                leftLeg.position.set(-0.065, 0.14, 0);
                leftLeg.rotation.set(waddle, 0, 0);
              }
              if (rightLeg) {
                rightLeg.position.set(0.065, 0.14, 0);
                rightLeg.rotation.set(-waddle, 0, 0);
              }
              if (leftArm) {
                leftArm.position.set(-0.18, 0.48, 0);
                leftArm.rotation.set(-waddle * 1.5, 0, 0.1);
              }
              if (rightArm) {
                rightArm.position.set(0.18, 0.48, 0);
                rightArm.rotation.set(waddle * 1.5, 0, -0.1);
              }
            }

            const targetWorldX = (x - centerVal) * spacingVal + offsetX;
            const targetWorldZ = (z - centerVal) * spacingVal + offsetZ;

            // Interpolate position smoothly to remove snap stutters
            mesh.position.x += (targetWorldX - mesh.position.x) * 0.35;
            mesh.position.z += (targetWorldZ - mesh.position.z) * 0.35;

            // Point agent in direction of travel / typing
            if (walker && walker.phase !== "dwelling") {
              const dx = walker.targetX - walker.homeX;
              const dz = walker.targetZ - walker.homeZ;
              const angle = Math.atan2(dx, dz);
              // Rotate smoothly towards walking direction
              let diff = angle - mesh.rotation.y;
              while (diff < -Math.PI) diff += Math.PI * 2;
              while (diff > Math.PI) diff -= Math.PI * 2;
              mesh.rotation.y += diff * 0.2;
            } else {
              // Use designated tile-specific face rotation or fallback to standard wood desk orientation
              const rotTarget = rotationOverride !== null ? rotationOverride : (Math.PI + deskRotRad);
              let diff = rotTarget - mesh.rotation.y;
              while (diff < -Math.PI) diff += Math.PI * 2;
              while (diff > Math.PI) diff -= Math.PI * 2;
              mesh.rotation.y += diff * 0.12;
            }

            // Halo glow spinning representing focused speaker thinking
            const halo = mesh.getObjectByName("halo-ring");
            if (halo) {
              halo.rotation.z = elapsed * 3.0;
              halo.scale.setScalar(1.0 + Math.sin(elapsed * 5.0) * 0.1);
              const pointLight = halo.getObjectByName("halo-light") as THREE.PointLight;
              if (pointLight) {
                pointLight.intensity = 0.6 + Math.sin(elapsed * 6.0) * 0.3;
              }
            }
          }

          // Coffee Machine Steam Particle physics
          if (mesh.userData && mesh.userData.isCoffeeSteam) {
            mesh.position.y += 0.015;
            mesh.scale.multiplyScalar(0.975);
            if (mesh.position.y > 2.2) {
              mesh.position.y = 1.1;
              mesh.scale.setScalar(1);
            }
          }

          // Delegation payload pulses flowing on parabolic trajectories
          if (mesh.name === "delegation-pulsar" && mesh.userData && mesh.userData.curve) {
            const curve = mesh.userData.curve;
            const travelProgress = (elapsed * 0.45) % 1.0;
            const p = curve.getPointAt(travelProgress);
            mesh.position.copy(p);
          }
        });
      }

      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(tick);
    };

    tick();

    // Cleanup resources
    return () => {
      cancelAnimationFrame(requestRef.current);
      controls.dispose();
      renderer.dispose();
    };
  }, [agents, gridSize]);

  // Adjust renderer viewport aspect sizes dynamically on scale changes
  useEffect(() => {
    if (rendererRef.current && cameraRef3d.current) {
      cameraRef3d.current.aspect = dimensions.width / dimensions.height;
      cameraRef3d.current.updateProjectionMatrix();
      rendererRef.current.setSize(dimensions.width, dimensions.height);
    }
  }, [dimensions]);

  // --- SCENE MODEL RE-CONSTRUCTION & RE-THEMING ---
  useEffect(() => {
    const scene = sceneRef.current;
    const workspaceGroup = workspaceGroupRef.current;
    if (!scene || !workspaceGroup) return;

    // 1. Flush previous models, geometries and materials
    while (workspaceGroup.children.length > 0) {
      const obj = workspaceGroup.children[0];
      workspaceGroup.remove(obj);
      
      obj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((m) => m.dispose());
            } else {
              child.material.dispose();
            }
          }
        }
      });
    }

    // Remove any previous gridhelper
    const previousGrid = scene.getObjectByName("office-grid-helper");
    if (previousGrid) scene.remove(previousGrid);

    // 2. Set Theme palette styles
    let clearColor = 0xf1f5f9;
    let gridColor1 = 0x94a3b8;
    let gridColor2 = 0x3b82f6;
    let deskWoodColor = 0xa16207; // Golden brown wood desk
    let chairSteelColor = 0x64748b;
    let floorColor = 0xd1d5db;

    if (timeMode === "night") {
      clearColor = 0x070913;
      gridColor1 = 0x1e1b4b;
      gridColor2 = 0x6366f1;
      deskWoodColor = 0x78350f; // dark warm wood
      chairSteelColor = 0x1e293b;
      floorColor = 0x0c0e1a;
    } else if (timeMode === "matrix") {
      clearColor = 0x000000;
      gridColor1 = 0x052e16;
      gridColor2 = 0x22c55e;
      deskWoodColor = 0x000000;
      chairSteelColor = 0x14532d;
      floorColor = 0x022c22;
    }

    rendererRef.current?.setClearColor(clearColor);
    scene.fog = new THREE.FogExp2(clearColor, 0.035);

    // Re-surface Floor colors
    const floor = scene.children.find((c) => c instanceof THREE.Mesh && c.geometry instanceof THREE.PlaneGeometry) as THREE.Mesh;
    if (floor) {
      (floor.material as THREE.MeshStandardMaterial).color.setHex(floorColor);
    }

    // Build the structural math grid helper
    const spacing = 1.6;
    const center = (gridSize - 1) / 2;
    const totalSize = gridSize * spacing;

    const gridHelper = new THREE.GridHelper(totalSize, gridSize, gridColor2, gridColor1);
    gridHelper.name = "office-grid-helper";
    gridHelper.position.set(0, 0.01, 0);
    scene.add(gridHelper);

    // Dynamic Ambient Light adjusts
    const ambient = scene.children.find((c) => c instanceof THREE.AmbientLight) as THREE.AmbientLight;
    if (ambient) {
      ambient.color.setHex(timeMode === "matrix" ? 0x00ff00 : 0xffffff);
      ambient.intensity = timeMode === "day" ? 0.95 : timeMode === "night" ? 0.35 : 0.15;
    }

    // Dynamic Directional Light adjusts
    const sunLight = scene.children.find((c) => c instanceof THREE.DirectionalLight) as THREE.DirectionalLight;
    if (sunLight) {
      sunLight.intensity = timeMode === "day" ? 1.4 : timeMode === "night" ? 0.6 : 0.2;
    }

    // 3. Assemble Custom 3D Desks and Chairs at Agent work-hubs
    const deskMat = new THREE.MeshStandardMaterial({
      color: deskWoodColor,
      roughness: 0.15,
      metalness: 0.05,
    });
    const steelMat = new THREE.MeshStandardMaterial({
      color: chairSteelColor,
      metalness: 0.9,
      roughness: 0.1,
    });

    agents.forEach((ag) => {
      const ax = ag.gridPosition.x;
      const az = ag.gridPosition.z;

      const wx = (ax - center) * spacing;
      const wz = (az - center) * spacing;

      // Group layout containing one complete workstation
      const station = new THREE.Group();
      station.position.set(wx, 0, wz);
      const deskRotDeg = ag.deskRotation || 0;
      station.rotation.y = (deskRotDeg * Math.PI) / 180;
      workspaceGroup.add(station);

      // Desk Top
      const topGeo = new THREE.BoxGeometry(1.2, 0.05, 0.8);
      const topMesh = new THREE.Mesh(topGeo, deskMat);
      topMesh.position.set(0, 0.55, 0);
      topMesh.castShadow = true;
      topMesh.receiveShadow = true;
      station.add(topMesh);

      // Desk Legs (x4 slender cylinders)
      const legGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.55);
      const legOffsets = [
        [-0.55, -0.4],
        [0.55, -0.4],
        [-0.55, 0.4],
        [0.55, 0.4],
      ];
      legOffsets.forEach((o) => {
        const leg = new THREE.Mesh(legGeo, steelMat);
        leg.position.set(o[0], 0.275, o[1]);
        leg.castShadow = true;
        station.add(leg);
      });

      // Dual-Monitor Workstation Setup!
      
      // 1. Laptop (Slick slate aluminum box block + open monitor lid, shifted to the left)
      const lapGroup = new THREE.Group();
      lapGroup.position.set(-0.22, 0.58, -0.05);
      lapGroup.rotation.y = 0.3; // Angle slightly towards the coder sitting in the center
      station.add(lapGroup);

      const baseGeo = new THREE.BoxGeometry(0.24, 0.015, 0.16);
      const lapBase = new THREE.Mesh(baseGeo, steelMat);
      lapBase.castShadow = true;
      lapGroup.add(lapBase);

      const lidGeo = new THREE.BoxGeometry(0.24, 0.16, 0.01);
      const lapLid = new THREE.Mesh(lidGeo, steelMat);
      lapLid.position.set(0, 0.07, 0.08);
      lapLid.rotation.x = -0.3; // Tilt back screen
      lapLid.castShadow = true;
      lapGroup.add(lapLid);

      // Laptop neon glowing screen representation
      const screenGeo = new THREE.PlaneGeometry(0.21, 0.12);
      const screenMat = new THREE.MeshBasicMaterial({
        color: timeMode === "matrix" ? 0x22c55e : 0x38bdf8,
      });
      const screenPl = new THREE.Mesh(screenGeo, screenMat);
      screenPl.position.set(0, 0.08, 0.073);
      screenPl.rotation.x = -0.3;
      lapGroup.add(screenPl);

      // 2. High-End Desktop Widescreen Monitor (Sleek stand + large widescreen display)
      const monGroup = new THREE.Group();
      monGroup.position.set(0.18, 0.58, -0.15);
      monGroup.rotation.y = -0.25; // Angled inward
      station.add(monGroup);

      // Monitor Stand Base
      const monBaseGeo = new THREE.BoxGeometry(0.16, 0.01, 0.1);
      const monBase = new THREE.Mesh(monBaseGeo, steelMat);
      monBase.castShadow = true;
      monBase.receiveShadow = true;
      monGroup.add(monBase);

      // Monitor Column Stem
      const monStemGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.18, 8);
      const monStem = new THREE.Mesh(monStemGeo, steelMat);
      monStem.position.set(0, 0.09, -0.02);
      monStem.castShadow = true;
      monGroup.add(monStem);

      // Large Bezel
      const bezelMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.7 });
      const bezelGeo = new THREE.BoxGeometry(0.42, 0.25, 0.02);
      const bezel = new THREE.Mesh(bezelGeo, bezelMat);
      bezel.position.set(0, 0.22, -0.02);
      bezel.castShadow = true;
      monGroup.add(bezel);

      // Large Glowing Widescreen monitor panel (Coding IDE visualization)
      const displayGeo = new THREE.PlaneGeometry(0.39, 0.22);
      const codeScreenMat = new THREE.MeshBasicMaterial({
        color: timeMode === "matrix" ? 0x14532d : 0x1e1b4b, // Matrix green coding vs deep IDE navy
      });
      const displayPanel = new THREE.Mesh(displayGeo, codeScreenMat);
      displayPanel.position.set(0, 0.22, -0.009);
      monGroup.add(displayPanel);

      // Add a couple of mini color blocks on screen to simulate text code syntax
      const codeLinesCount = 5;
      const codeColorPalette = [0x22c55e, 0xec4899, 0x3b82f6, 0xeab308, 0x14b8a6];
      for (let c = 0; c < codeLinesCount; c++) {
        const lineGeo = new THREE.PlaneGeometry(0.12 + Math.random() * 0.15, 0.015);
        const lineMat = new THREE.MeshBasicMaterial({
          color: timeMode === "matrix" ? 0x22c55e : codeColorPalette[c % codeColorPalette.length],
        });
        const line = new THREE.Mesh(lineGeo, lineMat);
        line.position.set(-0.06 + Math.random() * 0.03, 0.29 - c * 0.04, -0.008);
        monGroup.add(line);
      }

      // Office Task Chair (Sitting behind desk at +Z offsets)
      const chairGroup = new THREE.Group();
      chairGroup.position.set(0, 0, 0.35);
      station.add(chairGroup);

      // Chrome central column leg stem
      const stemGeo = new THREE.CylinderGeometry(0.02, 0.04, 0.2);
      const stem = new THREE.Mesh(stemGeo, steelMat);
      stem.position.set(0, 0.1, 0);
      chairGroup.add(stem);

      // Five small spider-feet cylinder baselines
      const footGeo = new THREE.CylinderGeometry(0.01, 0.01, 0.22);
      for (let i = 0; i < 5; i++) {
        const foot = new THREE.Mesh(footGeo, steelMat);
        foot.rotation.x = Math.PI / 2;
        foot.rotation.y = (i * Math.PI * 2) / 5;
        foot.position.set(0, 0.01, 0);
        chairGroup.add(foot);
      }

      // Seat cushion block
      const cushionGeo = new THREE.BoxGeometry(0.42, 0.04, 0.4);
      const cushionMat = new THREE.MeshStandardMaterial({
        color: ag.avatarColor ? parseInt(ag.avatarColor.replace("#", "0x")) : 0x1e293b,
        roughness: 0.8,
      });
      const cushion = new THREE.Mesh(cushionGeo, cushionMat);
      cushion.position.set(0, 0.22, 0);
      cushion.castShadow = true;
      chairGroup.add(cushion);

      // Backrest panel
      const backGeo = new THREE.BoxGeometry(0.38, 0.35, 0.04);
      const back = new THREE.Mesh(backGeo, cushionMat);
      back.position.set(0, 0.44, 0.18);
      back.castShadow = true;
      chairGroup.add(back);
    });

    // 4. Populate Office Decor obstacles/comfort Items
    const plantPotMat = new THREE.MeshStandardMaterial({ color: 0xc2410c, roughness: 0.8 }); // terracotta
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.9, flatShading: true });
    
    decorItems.forEach((decor) => {
      const dx = (decor.x - center) * spacing;
      const dz = (decor.z - center) * spacing;

      const itemGroup = new THREE.Group();
      itemGroup.position.set(dx, 0, dz);
      workspaceGroup.add(itemGroup);

      if (decor.type === "plant") {
        // Red pot cylinder
        const potGeo = new THREE.CylinderGeometry(0.2, 0.13, 0.28, 12);
        const pot = new THREE.Mesh(potGeo, plantPotMat);
        pot.position.set(0, 0.14, 0);
        pot.castShadow = true;
        itemGroup.add(pot);

        // Green leaf spheres representing standard lush Ficus
        const leaf1Geo = new THREE.SphereGeometry(0.22, 8, 8);
        const leaf1 = new THREE.Mesh(leaf1Geo, foliageMat);
        leaf1.position.set(0, 0.42, 0);
        leaf1.scale.set(1.1, 1.4, 0.9);
        leaf1.castShadow = true;
        itemGroup.add(leaf1);

        const leaf2 = new THREE.Mesh(leaf1Geo, foliageMat);
        leaf2.position.set(-0.1, 0.60, 0.05);
        leaf2.scale.set(0.8, 1.2, 0.8);
        leaf2.castShadow = true;
        itemGroup.add(leaf2);

        const leaf3 = new THREE.Mesh(leaf1Geo, foliageMat);
        leaf3.position.set(0.08, 0.52, -0.08);
        leaf3.scale.set(0.8, 1.2, 0.8);
        leaf3.castShadow = true;
        itemGroup.add(leaf3);

      } else if (decor.type === "coffee") {
        // Cabinet Box Base
        const cabGeo = new THREE.BoxGeometry(0.7, 0.65, 0.6);
        const cabMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.1 });
        const cabinet = new THREE.Mesh(cabGeo, cabMat);
        cabinet.position.set(0, 0.325, 0);
        cabinet.castShadow = true;
        cabinet.receiveShadow = true;
        itemGroup.add(cabinet);

        // Red Italian Drip unit block
        const dripGeo = new THREE.BoxGeometry(0.42, 0.42, 0.38);
        const dripMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c, metalness: 0.5 });
        const drip = new THREE.Mesh(dripGeo, dripMat);
        drip.position.set(0, 0.86, 0);
        drip.castShadow = true;
        itemGroup.add(drip);

        // Stainless cup tray slot
        const trayGeo = new THREE.BoxGeometry(0.25, 0.04, 0.24);
        const tray = new THREE.Mesh(trayGeo, steelMat);
        tray.position.set(0, 0.68, 0.08);
        tray.castShadow = true;
        itemGroup.add(tray);

        // Mini cup
        const cupGeo = new THREE.CylinderGeometry(0.04, 0.03, 0.06);
        const cupMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const cup = new THREE.Mesh(cupGeo, cupMat);
        cup.position.set(0, 0.73, 0.08);
        cup.castShadow = true;
        itemGroup.add(cup);

        // Steam particle emitters drifting upwards!
        for (let s = 0; s < 3; s++) {
          const steamGeo = new THREE.SphereGeometry(0.03 + s * 0.01, 5, 5);
          const steamMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 });
          const steam = new THREE.Mesh(steamGeo, steamMat);
          steam.position.set(0, 0.82 + s * 0.15, 0.08);
          steam.userData = { isCoffeeSteam: true };
          itemGroup.add(steam);
        }

      } else if (decor.type === "cooler") {
        // Gray Dispenser Base column
        const dispGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.7, 12);
        const base = new THREE.Mesh(dispGeo, steelMat);
        base.position.set(0, 0.35, 0);
        base.castShadow = true;
        base.receiveShadow = true;
        itemGroup.add(base);

        // Translucent Blue dome reservoir
        const tankGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.46, 12);
        const tankMat = new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          transparent: true,
          opacity: 0.65,
          roughness: 0.0,
          metalness: 0.3
        });
        const reservoir = new THREE.Mesh(tankGeo, tankMat);
        reservoir.position.set(0, 0.93, 0);
        reservoir.castShadow = true;
        itemGroup.add(reservoir);

      } else if (decor.type === "couch") {
        // Warm modern scandinavian couch structures
        const frameGeo = new THREE.BoxGeometry(1.6, 0.12, 0.72);
        const frame = new THREE.Mesh(frameGeo, deskMat);
        frame.position.set(0, 0.08, 0);
        frame.castShadow = true;
        itemGroup.add(frame);

        // Legs (x4 stubby blocks)
        const stubGeo = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        const feetOffsets = [
          [-0.7, -0.3],
          [0.7, -0.3],
          [-0.7, 0.3],
          [0.7, 0.3],
        ];
        feetOffsets.forEach((fo) => {
          const foot = new THREE.Mesh(stubGeo, steelMat);
          foot.position.set(fo[0], 0.01, fo[1]);
          foot.castShadow = true;
          itemGroup.add(foot);
        });

        // Soft teal cushion sheets
        const sheetGeo = new THREE.BoxGeometry(1.5, 0.22, 0.65);
        const sheetMat = new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.9 });
        const pad = new THREE.Mesh(sheetGeo, sheetMat);
        pad.position.set(0, 0.22, 0.01);
        pad.castShadow = true;
        itemGroup.add(pad);

        // Couch back piece rest
        const backRestGeo = new THREE.BoxGeometry(1.5, 0.4, 0.12);
        const backRest = new THREE.Mesh(backRestGeo, sheetMat);
        backRest.position.set(0, 0.48, -0.27);
        backRest.castShadow = true;
        itemGroup.add(backRest);
      } else if (decor.type === "wall") {
        // Structural wall segment partition
        const wallColor = timeMode === "matrix" ? 0x052e16 : (timeMode === "night" ? 0x1e293b : 0xe2e8f0);
        const wallMat = new THREE.MeshStandardMaterial({
          color: wallColor,
          roughness: 0.6,
          metalness: 0.1
        });
        const wallGeo = new THREE.BoxGeometry(1.6, 1.4, 0.25);
        const wallSegment = new THREE.Mesh(wallGeo, wallMat);
        wallSegment.position.set(0, 0.7, 0);
        wallSegment.castShadow = true;
        wallSegment.receiveShadow = true;
        itemGroup.add(wallSegment);

        // Highlight/Trim top cap
        const capColor = timeMode === "matrix" ? 0x22c55e : (timeMode === "night" ? 0x6366f1 : 0x4f46e5);
        const capMat = new THREE.MeshStandardMaterial({ color: capColor, roughness: 0.4 });
        const capGeo = new THREE.BoxGeometry(1.64, 0.06, 0.29);
        const capSegment = new THREE.Mesh(capGeo, capMat);
        capSegment.position.set(0, 1.43, 0);
        capSegment.castShadow = true;
        itemGroup.add(capSegment);
      } else if (decor.type === "store") {
        // Cute interior convenience kiosk / micro-store with item slots
        const kioskBaseGeo = new THREE.BoxGeometry(1.4, 0.6, 1.0);
        const kioskBaseMat = new THREE.MeshStandardMaterial({ color: 0x312e81, roughness: 0.5 });
        const kioskBase = new THREE.Mesh(kioskBaseGeo, kioskBaseMat);
        kioskBase.position.set(0, 0.3, 0);
        kioskBase.castShadow = true;
        kioskBase.receiveShadow = true;
        itemGroup.add(kioskBase);

        // Shelves Back wall
        const backWallGeo = new THREE.BoxGeometry(1.4, 1.3, 0.12);
        const backWallMat = new THREE.MeshStandardMaterial({ color: 0x4f46e5, roughness: 0.7 });
        const backWall = new THREE.Mesh(backWallGeo, backWallMat);
        backWall.position.set(0, 0.95, -0.44);
        backWall.castShadow = true;
        itemGroup.add(backWall);

        // Shelves
        const shelfGeo = new THREE.BoxGeometry(1.2, 0.04, 0.22);
        const shelfMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.3 });
        
        const shelf1 = new THREE.Mesh(shelfGeo, shelfMat);
        shelf1.position.set(0, 0.65, -0.25);
        shelf1.castShadow = true;
        itemGroup.add(shelf1);

        const shelf2 = new THREE.Mesh(shelfGeo, shelfMat);
        shelf2.position.set(0, 1.05, -0.25);
        shelf2.castShadow = true;
        itemGroup.add(shelf2);

        // Miniature food packages / books
        const itemColors = [0xef4444, 0x10b981, 0x3b82f6, 0xf59e0b, 0xec4899];
        for (let i = 0; i < 4; i++) {
          const pColor = itemColors[i % itemColors.length];
          const prodGeo = new THREE.BoxGeometry(0.12, 0.16, 0.1);
          const prodMat = new THREE.MeshStandardMaterial({ color: pColor, roughness: 0.4 });
          const prod = new THREE.Mesh(prodGeo, prodMat);
          prod.position.set(-0.45 + i * 0.3, 0.75, -0.15);
          prod.castShadow = true;
          itemGroup.add(prod);
        }

        // Cash register on counter top
        const regBaseGeo = new THREE.BoxGeometry(0.16, 0.02, 0.16);
        const regBase = new THREE.Mesh(regBaseGeo, steelMat);
        regBase.position.set(-0.3, 0.61, 0.2);
        regBase.castShadow = true;
        itemGroup.add(regBase);

        const regScreenGeo = new THREE.BoxGeometry(0.14, 0.1, 0.015);
        const regScreenMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.1 });
        const regScreen = new THREE.Mesh(regScreenGeo, regScreenMat);
        regScreen.position.set(-0.3, 0.69, 0.2);
        regScreen.rotation.x = -0.4;
        regScreen.castShadow = true;
        itemGroup.add(regScreen);

        // Header store sign plate
        const signGeo = new THREE.BoxGeometry(1.2, 0.25, 0.08);
        const signMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8 });
        const signBoard = new THREE.Mesh(signGeo, signMat);
        signBoard.position.set(0, 1.7, -0.44);
        signBoard.castShadow = true;
        itemGroup.add(signBoard);

        // Neon branding sign line
        const neonGeo = new THREE.BoxGeometry(1.0, 0.05, 0.1);
        const neonMat = new THREE.MeshBasicMaterial({ color: 0xa855f7 });
        const neonBar = new THREE.Mesh(neonGeo, neonMat);
        neonBar.position.set(0, 1.7, -0.38);
        itemGroup.add(neonBar);
      } else if (decor.type === "conference") {
        // High-end oval/rectangular Executive Conference Table and Chairs
        const tableColor = 0x06748c; // Modern dark teal wood laminate
        const tableMat = new THREE.MeshStandardMaterial({ color: tableColor, roughness: 0.15, metalness: 0.1 });
        
        // Table top
        const topGeo = new THREE.BoxGeometry(1.5, 0.06, 0.9);
        const topMesh = new THREE.Mesh(topGeo, tableMat);
        topMesh.position.set(0, 0.65, 0);
        topMesh.castShadow = true;
        topMesh.receiveShadow = true;
        itemGroup.add(topMesh);

        // Center support legs
        const legGeo = new THREE.CylinderGeometry(0.06, 0.08, 0.62, 8);
        const leg1 = new THREE.Mesh(legGeo, steelMat);
        leg1.position.set(-0.45, 0.31, 0);
        leg1.castShadow = true;
        itemGroup.add(leg1);

        const leg2 = new THREE.Mesh(legGeo, steelMat);
        leg2.position.set(0.45, 0.31, 0);
        leg2.castShadow = true;
        itemGroup.add(leg2);

        // Surrounding conference chairs
        const chairSeatGeo = new THREE.BoxGeometry(0.28, 0.04, 0.28);
        const chairBackGeo = new THREE.BoxGeometry(0.28, 0.34, 0.04);
        const leatherColor = 0x1f2937; // Charcoal office leather seat
        const blackLeatherMat = new THREE.MeshStandardMaterial({ color: leatherColor, roughness: 0.75 });

        const chairPositions = [
          { x: -0.6, z: 0, rotY: Math.PI / 2 },
          { x: 0.6, z: 0, rotY: -Math.PI / 2 },
          { x: 0, z: -0.4, rotY: 0 },
          { x: 0, z: 0.4, rotY: Math.PI }
        ];

        chairPositions.forEach((pos) => {
          const chairGroup = new THREE.Group();
          chairGroup.position.set(pos.x, 0, pos.z);
          chairGroup.rotation.y = pos.rotY;

          // Central column
          const stemGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.35, 6);
          const stem = new THREE.Mesh(stemGeo, steelMat);
          stem.position.set(0, 0.175, 0);
          stem.castShadow = true;
          chairGroup.add(stem);

          // Star base
          const baseGeo = new THREE.CylinderGeometry(0.1, 0.12, 0.03, 8);
          const base = new THREE.Mesh(baseGeo, steelMat);
          base.position.set(0, 0.015, 0);
          chairGroup.add(base);

          // Cushion
          const seat = new THREE.Mesh(chairSeatGeo, blackLeatherMat);
          seat.position.set(0, 0.36, 0);
          seat.castShadow = true;
          chairGroup.add(seat);

          // Backrest
          const back = new THREE.Mesh(chairBackGeo, blackLeatherMat);
          back.position.set(0, 0.52, -0.12);
          back.castShadow = true;
          chairGroup.add(back);

          itemGroup.add(chairGroup);
        });
      }
    });

    // 5. Assemble and Style the Smart 3D Autonomous Agent Entities with detailed human bodies, clothes & hair
    agents.forEach((ag) => {
      const feat = getHumanFeatures(ag.id, ag.name);

      const agentGroup = new THREE.Group();
      agentGroup.name = `agent-${ag.id}`;
      // Attach metadata for the render loop updates
      agentGroup.userData = {
        isAgent: true,
        agentId: ag.id
      };

      const x = ag.gridPosition.x;
      const z = ag.gridPosition.z;
      agentGroup.position.set((x - center) * spacing, 0, (z - center) * spacing);
      workspaceGroup.add(agentGroup);

      // Create trouser legs (two box channels)
      const legMat = new THREE.MeshStandardMaterial({ color: feat.trouserColor, roughness: 0.8 });
      const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.28, 0.08), legMat);
      leftLeg.name = "left-leg";
      leftLeg.position.set(-0.065, 0.14, 0);
      leftLeg.castShadow = true;
      agentGroup.add(leftLeg);

      const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.28, 0.08), legMat);
      rightLeg.name = "right-leg";
      rightLeg.position.set(0.065, 0.14, 0);
      rightLeg.castShadow = true;
      agentGroup.add(rightLeg);

      // Smooth skin material for neck, hands, and head
      const skinMat = new THREE.MeshStandardMaterial({ color: feat.skin, roughness: 0.65 });

      // Torso Group with custom clothes color matching & gender-specific curvy styles
      const clothesMat = new THREE.MeshStandardMaterial({ color: feat.clothesColor, roughness: 0.5 });
      const torso = new THREE.Group();
      torso.name = "torso";
      torso.position.set(0, 0.45, 0);
      agentGroup.add(torso);

      let mainTorsoMesh;
      const isFemale = ag.gender === "female";

      if (isFemale) {
        // Female body style: Elegant inverted-cone torso, beautifully smoothed on top and bottom caps
        // radiusTop = 0.14, radiusBottom = 0.08, height = 0.36
        const mainGeo = new THREE.CylinderGeometry(0.14, 0.08, 0.32, 24);
        mainTorsoMesh = new THREE.Mesh(mainGeo, clothesMat);
        mainTorsoMesh.castShadow = true;
        mainTorsoMesh.receiveShadow = true;
        torso.add(mainTorsoMesh);

        // Spherical rounded top cap
        const topCap = new THREE.Mesh(new THREE.SphereGeometry(0.14, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), clothesMat);
        topCap.position.y = 0.16;
        topCap.castShadow = true;
        topCap.receiveShadow = true;
        torso.add(topCap);

        // Spherical rounded bottom cap
        const bottomCap = new THREE.Mesh(new THREE.SphereGeometry(0.08, 24, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), clothesMat);
        bottomCap.position.y = -0.16;
        bottomCap.castShadow = true;
        bottomCap.receiveShadow = true;
        torso.add(bottomCap);
      } else {
        // Male body style: Cylinder torso, beautifully smoothed on top and bottom caps to look curvy/finished
        const mainGeo = new THREE.CylinderGeometry(0.13, 0.13, 0.28, 24);
        mainTorsoMesh = new THREE.Mesh(mainGeo, clothesMat);
        mainTorsoMesh.castShadow = true;
        mainTorsoMesh.receiveShadow = true;
        torso.add(mainTorsoMesh);

        // Spherical rounded top cap
        const topCap = new THREE.Mesh(new THREE.SphereGeometry(0.13, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), clothesMat);
        topCap.position.y = 0.14;
        topCap.castShadow = true;
        topCap.receiveShadow = true;
        torso.add(topCap);

        // Spherical rounded bottom cap
        const bottomCap = new THREE.Mesh(new THREE.SphereGeometry(0.13, 24, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), clothesMat);
        bottomCap.position.y = -0.14;
        bottomCap.castShadow = true;
        bottomCap.receiveShadow = true;
        torso.add(bottomCap);
      }

      // White neck-v collar overlay
      const collarGeo = new THREE.BoxGeometry(0.11, 0.08, 0.015);
      const collarMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const collar = new THREE.Mesh(collarGeo, collarMat);
      // Position nicely on top curve of the torso
      collar.position.set(0, 0.14, 0.08);
      torso.add(collar);

      // Cute flat tie on chest
      const tieGeo = new THREE.BoxGeometry(0.026, 0.14, 0.005);
      const tieMat = new THREE.MeshStandardMaterial({ color: 0xd97706 }); // gold yellow tie
      const tie = new THREE.Mesh(tieGeo, tieMat);
      tie.position.set(0, 0.07, 0.09);
      torso.add(tie);

      // Left Arm with curvy edge joints and completely rounded hand sphere (no sharp cone hands!)
      const leftArm = new THREE.Group();
      leftArm.name = "left-arm";
      leftArm.position.set(-0.18, 0.48, 0);
      leftArm.rotation.z = 0.1;
      agentGroup.add(leftArm);

      // Upper arm / sleeve
      const leftSleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.032, 0.22, 12), clothesMat);
      leftSleeve.position.set(0, -0.11, 0);
      leftSleeve.castShadow = true;
      leftArm.add(leftSleeve);

      // Rounded soft shoulder joint
      const leftShoulderCap = new THREE.Mesh(new THREE.SphereGeometry(0.038, 12, 12), clothesMat);
      leftShoulderCap.position.set(0, 0, 0);
      leftShoulderCap.castShadow = true;
      leftArm.add(leftShoulderCap);

      // Soft curvier hand ball representing hand (replaces cone hand)
      const leftHand = new THREE.Mesh(new THREE.SphereGeometry(0.038, 16, 16), skinMat);
      leftHand.position.set(0, -0.22, 0);
      leftHand.castShadow = true;
      leftArm.add(leftHand);

      // Right Arm with curvy edge joints and completely rounded hand sphere
      const rightArm = new THREE.Group();
      rightArm.name = "right-arm";
      rightArm.position.set(0.18, 0.48, 0);
      rightArm.rotation.z = -0.1;
      agentGroup.add(rightArm);

      const rightSleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.032, 0.22, 12), clothesMat);
      rightSleeve.position.set(0, -0.11, 0);
      rightSleeve.castShadow = true;
      rightArm.add(rightSleeve);

      const rightShoulderCap = new THREE.Mesh(new THREE.SphereGeometry(0.038, 12, 12), clothesMat);
      rightShoulderCap.position.set(0, 0, 0);
      rightShoulderCap.castShadow = true;
      rightArm.add(rightShoulderCap);

      const rightHand = new THREE.Mesh(new THREE.SphereGeometry(0.038, 16, 16), skinMat);
      rightHand.position.set(0, -0.22, 0);
      rightHand.castShadow = true;
      rightArm.add(rightHand);

      // Rounded neck column
      const neckGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.08, 10);
      const neck = new THREE.Mesh(neckGeo, skinMat);
      neck.position.set(0, 0.66, 0);
      agentGroup.add(neck);

      // Spherical skin head
      const headGeo = new THREE.SphereGeometry(0.14, 16, 16);
      const head = new THREE.Mesh(headGeo, skinMat);
      head.position.set(0, 0.81, 0);
      head.castShadow = true;
      agentGroup.add(head);

      // Black beads tiny eyes looking forward (+Z)
      const eyeGeo = new THREE.SphereGeometry(0.018, 8, 8);
      const eyeMat = new THREE.MeshBasicMaterial({ color: 0x0a0a0a });
      
      const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
      leftEye.position.set(-0.045, 0.02, 0.115);
      head.add(leftEye);

      const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
      rightEye.position.set(0.045, 0.02, 0.115);
      head.add(rightEye);

      // Customized hair structures
      const hairMat = new THREE.MeshStandardMaterial({ color: feat.hairColor, roughness: 0.75 });
      if (feat.hairStyle === 0) {
        // Spiky - list of small cone pins
        for (let sp = 0; sp < 6; sp++) {
          const spike = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.1, 4), hairMat);
          spike.rotation.x = -0.5 + Math.random() * 0.3;
          spike.rotation.y = Math.random() * Math.PI;
          spike.position.set(-0.07 + Math.random() * 0.14, 0.12, -0.05 + Math.random() * 0.1);
          head.add(spike);
        }
      } else if (feat.hairStyle === 1) {
        // Ponytail base top cap plus trailing locks cylinder
        const cap = new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 12), hairMat);
        cap.position.set(0, 0.04, -0.02);
        cap.scale.set(1.02, 0.9, 1.05);
        head.add(cap);

        const lock = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.01, 0.28, 8), hairMat);
        lock.position.set(0, -0.12, -0.155);
        lock.rotation.x = 0.45;
        head.add(lock);
      } else if (feat.hairStyle === 2) {
        // Corporate styled sweep flat box
        const hairBox = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.06, 0.22), hairMat);
        hairBox.position.set(0, 0.11, -0.01);
        head.add(hairBox);
      } else if (feat.hairStyle === 3) {
        // Curly afro multiple small hair bubbles
        const cap = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 10), hairMat);
        cap.position.set(0, 0.03, -0.02);
        head.add(cap);

        for (let b = 0; b < 10; b++) {
          const bubble = new THREE.Mesh(new THREE.SphereGeometry(0.048, 8, 8), hairMat);
          bubble.position.set(-0.11 + Math.random() * 0.22, 0.08 + Math.random() * 0.06, -0.08 + Math.random() * 0.14);
          head.add(bubble);
        }
      } else {
        // Sleek bob wrapping head sides
        const cap = new THREE.Mesh(new THREE.SphereGeometry(0.152, 14, 14), hairMat);
        cap.position.set(0, 0.02, -0.01);
        head.add(cap);

        const leftBang = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.16, 0.14), hairMat);
        leftBang.position.set(-0.13, -0.03, 0.04);
        head.add(leftBang);

        const rightBang = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.16, 0.14), hairMat);
        rightBang.position.set(0.13, -0.03, 0.04);
        head.add(rightBang);
      }

      // Add elegant spinning halo ring reflecting agent context active / selected state
      if (ag.id === currentAgentId || ag.id === currentAgentId) {
        const ringGeo = new THREE.RingGeometry(0.24, 0.28, 16);
        const ringMat = new THREE.MeshBasicMaterial({
          color: ag.id === currentAgentId ? 0x22c55e : 0xf59e0b, 
          side: THREE.DoubleSide
        });
        const haloRing = new THREE.Mesh(ringGeo, ringMat);
        haloRing.name = "halo-ring";
        haloRing.position.set(0, 1.15, 0);
        haloRing.rotation.x = Math.PI / 2;
        agentGroup.add(haloRing);

        // Active thinking pointlight to project warmth onto face
        const haloLight = new THREE.PointLight(
          ag.id === currentAgentId ? 0x22c55e : 0xf59e0b,
          0.85,
          1.5
        );
        haloLight.color.setHex(ag.id === currentAgentId ? 0x22c55e : 0xf59e0b);
        haloLight.name = "halo-light";
        haloLight.position.set(0, 1.0, 0);
        agentGroup.add(haloLight);
      }

      // 6. Draw floating billboard HUD labels textures above each agent
      const spriteCanvas = document.createElement("canvas");
      spriteCanvas.width = 160;
      spriteCanvas.height = 80;
      const sCtx = spriteCanvas.getContext("2d")!;
      // Soft modern background pill
      sCtx.fillStyle = "rgba(11, 15, 30, 0.85)";
      sCtx.beginPath();
      sCtx.roundRect(4, 4, 152, 72, 8);
      sCtx.fill();
      sCtx.strokeStyle = ag.id === currentAgentId ? "#22c55e" : ag.id === currentAgentId ? "#ffffff" : "#4f46e5";
      sCtx.lineWidth = 2.5;
      sCtx.stroke();

      // Agent First Name
      sCtx.fillStyle = "#ffffff";
      sCtx.font = "bold 15px Arial, sans-serif";
      sCtx.textAlign = "center";
      sCtx.fillText(ag.name.split(" ")[0], 80, 32);

      // Designation label
      sCtx.fillStyle = ag.id === currentAgentId ? "#4ade80" : "#94a3b8";
      sCtx.font = "bold 9px monospace";
      sCtx.fillText(ag.designation.length > 20 ? ag.designation.match(/.{1,14}/g)?.[0] + ".." : ag.designation, 80, 55);

      const labelTex = new THREE.CanvasTexture(spriteCanvas);
      const labelMat = new THREE.SpriteMaterial({ map: labelTex, transparent: true, depthTest: false });
      const labelSprite = new THREE.Sprite(labelMat);
      labelSprite.name = `ag-label-${ag.id}`;
      // Hover name tag slightly above the halo
      labelSprite.position.set((x - center) * spacing, 1.62, (z - center) * spacing);
      labelSprite.scale.set(1.5, 0.75, 1);
      workspaceGroup.add(labelSprite);
    });

    // 6. Trace Parabolic Bezier delegation trajectories representing dynamic message propagation
    if (messages.length > 0) {
      const lastMsg = messages[messages.length - 1];
      if (lastMsg.delegateId && lastMsg.senderId) {
        const sender = agents.find((a) => a.id === lastMsg.senderId);
        const receiver = agents.find((a) => a.id === lastMsg.delegateId);

        if (sender && receiver) {
          const sx = (sender.gridPosition.x - center) * spacing;
          const sz = (sender.gridPosition.z - center) * spacing;
          const rx = (receiver.gridPosition.x - center) * spacing;
          const rz = (receiver.gridPosition.z - center) * spacing;

          // Parabolic Apex curves calculation
          const startVec = new THREE.Vector3(sx, 0.75, sz);
          const endVec = new THREE.Vector3(rx, 0.75, rz);
          const distance = startVec.distanceTo(endVec);
          const apex = Math.max(1.5, distance * 0.45);

          const midPoint = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
          midPoint.y += apex;

          const bezierCurve = new THREE.QuadraticBezierCurve3(startVec, midPoint, endVec);
          const points = bezierCurve.getPoints(24);
          const curveGeo = new THREE.BufferGeometry().setFromPoints(points);

          const curveMat = new THREE.LineBasicMaterial({
            color: timeMode === "matrix" ? 0x22c55e : 0x818cf8,
            transparent: true,
            opacity: 0.6,
          });
          const lineMesh = new THREE.Line(curveGeo, curveMat);
          workspaceGroup.add(lineMesh);

          // Glowing sliding pulsar node represent payload packet transfers
          const pulsarGeo = new THREE.SphereGeometry(0.1, 12, 12);
          const pulsarMat = new THREE.MeshBasicMaterial({
            color: timeMode === "matrix" ? 0x22c55e : 0xfbbf24,
            toneMapped: false,
          });
          const pulsar = new THREE.Mesh(pulsarGeo, pulsarMat);
          pulsar.name = "delegation-pulsar";
          // Inject curves into userData for rotation/ticks interpolation
          pulsar.userData = { curve: bezierCurve };
          workspaceGroup.add(pulsar);
        }
      }
    }

  }, [agents, decorItems, gridSize, timeMode, messages, currentAgentId]);

  const handleResetCamera = () => {
    if (cameraRef3d.current && controlsRef.current) {
      cameraRef3d.current.position.set(12, 11, 16);
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }
  };

  const isMatrix = timeMode === "matrix";
  const isNight = timeMode === "night";

  return (
    <div ref={containerRef} className="relative w-full h-[525px] bg-[#0c0e18] rounded-2xl overflow-hidden border border-slate-900/50 flex flex-col justify-between shadow-inner">
      
      {/* 3D Scene Interactive Overlay Controls */}
      <div className="absolute top-3 left-4 z-10 flex items-center gap-1.5 p-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-white/15 shadow-xl">
        <span className="text-[8px] font-extrabold uppercase text-[#6366f1] px-2 py-0.5 border-r border-white/10 tracking-widest font-mono">
          WebGL View
        </span>

        <p className="text-[10px] text-slate-300 font-mono px-1 flex items-center gap-1">
          <RotateCw className="w-3 h-3 text-emerald-400 shrink-0" />
          <span>DRAG LEFT TO ORBIT &bull; DRAG RIGHT TO PAN</span>
        </p>
      </div>

      {/* Dynamic Motivation/Pacing Indicator */}
      {activeMotiveLabel && (
        <div className="absolute bottom-16 right-4 z-10 px-3 py-1.5 rounded-lg border border-indigo-500/30 bg-slate-900/90 text-[10px] text-indigo-300 shadow-2xl animate-bounce font-mono">
          {activeMotiveLabel}
        </div>
      )}

      {/* Real-Time Ambient Settings controls */}
      <div className="absolute top-3 right-4 z-10 flex items-center gap-1.5">
        <button
          onClick={() => setAllowRandomWalks((w) => !w)}
          className={`px-2.5 py-1 text-[8px] font-mono tracking-wider border rounded-lg transition-all uppercase font-bold ${
            allowRandomWalks
              ? "bg-emerald-600/25 text-emerald-300 border-emerald-500/40"
              : "text-slate-500 border-slate-800 hover:text-white"
          }`}
          id="toggle-roaming-agents"
          title="Toggle automatic random roaming / walks for office agents"
        >
          {allowRandomWalks ? "Walks: Random pacing" : "Walks: Focus at desks"}
        </button>

        <button
          onClick={() => setCinematicEffects((c) => !c)}
          className={`px-2.5 py-1 text-[8px] font-mono tracking-wider border rounded-lg transition-all uppercase font-bold ${
            cinematicEffects
              ? "bg-indigo-600/25 text-indigo-300 border-indigo-500/40"
              : "text-slate-500 border-slate-800 hover:text-white"
          }`}
          id="toggle-cinematic-fx"
          title="Toggle soft drifting cinematic rotate camera effect"
        >
          {cinematicEffects ? "Cinematic: Slow Drift" : "Cinematic: Static"}
        </button>

        <button
          onClick={() => setShowHelpers((h) => !h)}
          className="p-1.5 bg-slate-900/80 border border-white/10 rounded-lg text-slate-400 hover:text-white transition-colors"
          title="Toggle guidelines description"
          id="toggle-canvas-helpers"
        >
          <HelpCircle className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* WebGL Canvas Node */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block bg-[#0c0e18]"
        id="isometric-viewport-canvas"
      />

      {/* Action / Reset Floating footer panel */}
      <div className="absolute bottom-4 left-4 z-10 flex flex-wrap items-center gap-2">
        <button
          onClick={handleResetCamera}
          className="px-3 py-1.5 bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-slate-700 text-[9px] uppercase font-bold rounded-lg flex items-center gap-1 shadow-lg transition-all"
          title="Reset zoom and rotation target"
          id="hud-reset-cam"
        >
          <RefreshCw className="w-2.5 h-2.5" />
          Center Camera
        </button>

        {/* Dynamic Break Timer Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 border border-indigo-500/35 rounded-lg text-[9px] font-mono tracking-wider font-bold shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping shrink-0" />
          <span className="text-slate-400 uppercase">Swarm Break:</span>
          <span className="text-indigo-400">
            {Math.floor(breakTimeLeft / 60)}:{(breakTimeLeft % 60).toString().padStart(2, "0")}
          </span>
          {allowRandomWalks && (
            <span className="text-[7.5px] text-emerald-400 font-sans font-extrabold uppercase ml-1 px-1 bg-emerald-500/10 rounded">Auto</span>
          )}
        </div>

        {/* Manual Group break trigger */}
        <button
          onClick={() => {
            triggerAutomaticBreakGroup();
            setBreakTimeLeft(120);
          }}
          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-500/40 text-[9px] uppercase font-bold rounded-lg flex items-center gap-1.5 shadow-lg transition-all"
          title="Force a random set of 1-3 agents to wander to office settings and come back"
          id="btn-manual-break"
        >
          <span>🔔 Trigger Group Break</span>
        </button>
      </div>

      {/* Informative guidelines HUD */}
      {showHelpers && (
        <div className={`absolute bottom-4 right-4 p-3 rounded-xl border max-w-xs transition-opacity z-10 shadow-2xl ${
          isMatrix
            ? "border-green-500/20 bg-black/95 text-green-400 font-mono text-[9px]"
            : "border-white/10 bg-slate-950/95 text-slate-300 text-[10px]"
        }`}>
          <div className="flex items-center gap-1 text-white font-extrabold uppercase text-[9px] tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#fbbf24] animate-pulse" />
            <span>WebGL Real-Time Workspace:</span>
          </div>
          <p className="leading-relaxed opacity-85">
            Cute 3D avatars on task chairs working dynamically! Every loop, watch golden delegation packets sail along active parabolic curves between coworker nodes!
          </p>
        </div>
      )}

    </div>
  );
}
