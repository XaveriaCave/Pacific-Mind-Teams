import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { AgentNode, TimeMode, DecorItem } from "../types";
import { Coffee, RotateCcw, Sparkles, Footprints, Grid } from "lucide-react";

interface Office2DCanvasProps {
  agents: AgentNode[];
  decorItems: DecorItem[];
  onUpdateAgentPosition: (id: string, x: number, z: number) => void;
  onAddDecorItem: (item: DecorItem) => void;
  onRemoveDecorItem: (id: string) => void;
  gridSize: number;
  timeMode: TimeMode;
}

export default function Office2DCanvas({
  agents,
  decorItems,
  onUpdateAgentPosition,
  onAddDecorItem,
  onRemoveDecorItem,
  gridSize,
  timeMode,
}: Office2DCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });
  const [draggedAgentId, setDraggedAgentId] = useState<string | null>(null);
  const [draggedDecorId, setDraggedDecorId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Currently selected item type to stamp click-to-place
  const [activeStampTool, setActiveStampTool] = useState<"none" | "coffee" | "cooler" | "plant" | "couch">("none");

  // Keep responsive fluid bounding container resize monitoring
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        const size = Math.min(width, height, 600);
        setDimensions({
          width: Math.max(size, 350),
          height: Math.max(size, 350)
        });
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Calculate cell layout sizes dynamically based on grid size input
  const cellPix = Math.min(dimensions.width, dimensions.height) / (gridSize + 2);
  const offsetPadding = cellPix; // Offset starting index to leave margins

  // Coordinate mapper helpers
  const toScreen = (gx: number, gz: number) => {
    return {
      x: offsetPadding + gx * cellPix + cellPix / 2,
      y: offsetPadding + gz * cellPix + cellPix / 2,
    };
  };

  const toGrid = (sx: number, sy: number) => {
    const gx = Math.round((sx - offsetPadding - cellPix / 2) / cellPix);
    const gz = Math.round((sy - offsetPadding - cellPix / 2) / cellPix);
    return {
      x: Math.max(0, Math.min(gridSize - 1, gx)),
      z: Math.max(0, Math.min(gridSize - 1, gz)),
    };
  };

  // Canvas render frame buffer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Theme color palettes
    const getColors = () => {
      if (timeMode === "matrix") {
        return {
          bg: "#02040a",
          grid: "rgba(34, 197, 94, 0.15)",
          gridActive: "rgba(34, 197, 94, 0.4)",
          text: "#39ff14",
          border: "#22c55e",
          cellActive: "rgba(34, 197, 94, 0.1)",
        };
      } else if (timeMode === "night") {
        return {
          bg: "#0d111d",
          grid: "rgba(100, 116, 139, 0.2)",
          gridActive: "rgba(129, 140, 248, 0.4)",
          text: "#f1f5f9",
          border: "#4f46e5",
          cellActive: "rgba(79, 70, 229, 0.15)",
        };
      } else {
        return {
          bg: "#ffffff",
          grid: "#e2e8f0",
          gridActive: "#cbd5e1",
          text: "#0f172a",
          border: "#cbd5e1",
          cellActive: "#f1f5f9",
        };
      }
    };

    const colors = getColors();

    // 1. Clear background
    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, dimensions.width, dimensions.height);

    // 2. Draw Office Floor Wall Border bounds
    const p00 = toScreen(0, 0);
    const pMax = toScreen(gridSize - 1, gridSize - 1);
    ctx.strokeStyle = colors.border;
    ctx.lineWidth = 2.5;
    ctx.strokeRect(
      p00.x - cellPix / 2,
      p00.y - cellPix / 2,
      gridSize * cellPix,
      gridSize * cellPix
    );

    // 3. Draw grid coordinate lines
    ctx.strokeStyle = colors.grid;
    ctx.lineWidth = 1;
    for (let i = 0; i < gridSize; i++) {
      // Columns
      const pTop = toScreen(i, 0);
      const pBot = toScreen(i, gridSize - 1);
      ctx.beginPath();
      ctx.moveTo(pTop.x - cellPix / 2, pTop.y - cellPix / 2);
      ctx.lineTo(pBot.x - cellPix / 2, pBot.y + cellPix / 2);
      ctx.stroke();

      // Rows
      const pLeft = toScreen(0, i);
      const pRight = toScreen(gridSize - 1, i);
      ctx.beginPath();
      ctx.moveTo(pLeft.x - cellPix / 2, pLeft.y - cellPix / 2);
      ctx.lineTo(pRight.x + cellPix / 2, pRight.y - cellPix / 2);
      ctx.stroke();
    }

    // Double highlight placed Stamp placement coordinate hover
    if (activeStampTool !== "none") {
      const hoverGrid = toGrid(mousePos.x, mousePos.y);
      const pScr = toScreen(hoverGrid.x, hoverGrid.z);
      ctx.fillStyle = colors.cellActive;
      ctx.fillRect(
        pScr.x - cellPix / 2,
        pScr.y - cellPix / 2,
        cellPix,
        cellPix
      );
      ctx.strokeStyle = "#fbbf24";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(
        pScr.x - cellPix / 2,
        pScr.y - cellPix / 2,
        cellPix,
        cellPix
      );
    }

    // 4. Draw placed custom office decoration models
    decorItems.forEach((decor) => {
      const scr = toScreen(decor.x, decor.z);

      // Simple unique icon tags based on selection
      ctx.fillStyle = timeMode === "day" ? "#f1f5f9" : "#1e293b";
      ctx.strokeStyle = colors.border;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect?.(scr.x - cellPix / 2.5, scr.y - cellPix / 2.5, cellPix * 0.8, cellPix * 0.8, 4);
      ctx.fill();
      ctx.stroke();

      // Emblems labels for furniture items
      ctx.font = `bold ${Math.max(9, cellPix * 0.35)}px Inter, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      let iconText = "🛋️";
      if (decor.type === "coffee") iconText = "☕";
      if (decor.type === "cooler") iconText = "💧";
      if (decor.type === "plant") iconText = "🪴";

      ctx.fillText(iconText, scr.x, scr.y);
    });

    // 5. Draw Agents Desks/Home nodes
    agents.forEach((agent) => {
      const scr = toScreen(agent.gridPosition.x, agent.gridPosition.z);
      const radius = cellPix * 0.4;

      // Outer pod glowing highlight
      ctx.fillStyle = agent.avatarColor || "#2563eb";
      ctx.beginPath();
      ctx.arc(scr.x, scr.y, radius, 0, Math.PI * 2);
      ctx.fill();

      // Inside desk computer icon placeholder
      ctx.fillStyle = "#ffffff";
      ctx.font = `${Math.max(8, cellPix * 0.28)}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const shortCode = agent.name.substring(0, 2).toUpperCase();
      ctx.fillText(shortCode, scr.x, scr.y);

      // Tiny direction indicator or status ring
      ctx.strokeStyle = colors.bg;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(scr.x, scr.y, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Label name overlay tags
      ctx.fillStyle = colors.text;
      ctx.font = `bold ${Math.max(8, cellPix * 0.25)}px Inter, sans-serif`;
      ctx.fillText(agent.name.split(" ")[0], scr.x, scr.y + radius + 10);
    });

  }, [dimensions, agents, decorItems, gridSize, timeMode, activeStampTool, mousePos]);

  // Click & Drag coordinates resolvers
  const getMouseCoords = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const getTouchCoords = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect || e.touches.length === 0) return { x: 0, y: 0 };
    return {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    };
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y } = getMouseCoords(e);
    const clickedGrid = toGrid(x, y);

    // If stamp tool is active, place the selected stamp and return
    if (activeStampTool !== "none") {
      // Verify no collision or simply stack
      const existingDecor = decorItems.find((d) => d.x === clickedGrid.x && d.z === clickedGrid.z);
      if (existingDecor) {
        onRemoveDecorItem(existingDecor.id);
      } else {
        onAddDecorItem({
          id: `decor-${Date.now()}`,
          type: activeStampTool,
          x: clickedGrid.x,
          z: clickedGrid.z,
        });
      }
      setActiveStampTool("none"); // reset stamp tool after placement
      return;
    }

    // Find if user clicked on an agent node to drag it around
    const foundAgent = agents.find(
      (a) => a.gridPosition.x === clickedGrid.x && a.gridPosition.z === clickedGrid.z
    );

    if (foundAgent) {
      setDraggedAgentId(foundAgent.id);
      return;
    }

    // Find if clicked on any decor item to delete it instantly
    const foundDecor = decorItems.find(
      (d) => d.x === clickedGrid.x && d.z === clickedGrid.z
    );
    if (foundDecor) {
      onRemoveDecorItem(foundDecor.id);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y } = getMouseCoords(e);
    setMousePos({ x, y });

    if (draggedAgentId) {
      const g = toGrid(x, y);
      onUpdateAgentPosition(draggedAgentId, g.x, g.z);
    }
  };

  const handleMouseUp = () => {
    setDraggedAgentId(null);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const { x, y } = getTouchCoords(e);
    const clickedGrid = toGrid(x, y);

    // If stamp tool is active, place the selected stamp and return
    if (activeStampTool !== "none") {
      const existingDecor = decorItems.find((d) => d.x === clickedGrid.x && d.z === clickedGrid.z);
      if (existingDecor) {
        onRemoveDecorItem(existingDecor.id);
      } else {
        onAddDecorItem({
          id: `decor-${Date.now()}`,
          type: activeStampTool,
          x: clickedGrid.x,
          z: clickedGrid.z,
        });
      }
      setActiveStampTool("none"); // reset stamp tool after placement
      return;
    }

    // Find if user clicked on an agent node to drag it around
    const foundAgent = agents.find(
      (a) => a.gridPosition.x === clickedGrid.x && a.gridPosition.z === clickedGrid.z
    );

    if (foundAgent) {
      setDraggedAgentId(foundAgent.id);
      return;
    }

    // Find if clicked on any decor item to delete it instantly
    const foundDecor = decorItems.find(
      (d) => d.x === clickedGrid.x && d.z === clickedGrid.z
    );
    if (foundDecor) {
      onRemoveDecorItem(foundDecor.id);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const { x, y } = getTouchCoords(e);
    setMousePos({ x, y });

    if (draggedAgentId) {
      const g = toGrid(x, y);
      onUpdateAgentPosition(draggedAgentId, g.x, g.z);
    }
  };

  const handleTouchEnd = () => {
    setDraggedAgentId(null);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Furniture stamp toolbar panel */}
      <div className={`p-4 rounded-xl border flex flex-wrap items-center justify-between gap-3 ${
        timeMode === "matrix" ? "border-green-500/20 bg-slate-950 text-green-300" : "border-slate-200 bg-white text-slate-800"
      }`}>
        <div className="flex items-center gap-2">
          <Grid className="w-4 h-4 text-indigo-400" />
          <h4 className="text-xs font-extrabold uppercase tracking-wider">
            2D Drag & Stamp Architecture tools
          </h4>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setActiveStampTool("plant")}
            className={`px-3 py-1.5 text-xs rounded-md border flex items-center gap-1.5 transition-colors ${
              activeStampTool === "plant" ? "bg-emerald-600 text-white border-emerald-500" : "hover:bg-slate-800 hover:text-white border-slate-700/80"
            }`}
            id="btn-stamp-plant"
          >
            🪴 Plant
          </button>
          <button
            onClick={() => setActiveStampTool("coffee")}
            className={`px-3 py-1.5 text-xs rounded-md border flex items-center gap-1.5 transition-colors ${
              activeStampTool === "coffee" ? "bg-amber-600 text-white border-amber-500" : "hover:bg-slate-800 hover:text-white border-slate-700/80"
            }`}
            id="btn-stamp-coffee"
          >
            ☕ Coffee Station
          </button>
          <button
            onClick={() => setActiveStampTool("cooler")}
            className={`px-3 py-1.5 text-xs rounded-md border flex items-center gap-1.5 transition-colors ${
              activeStampTool === "cooler" ? "bg-blue-600 text-white border-blue-500" : "hover:bg-slate-800 hover:text-white border-slate-700/80"
            }`}
            id="btn-stamp-cooler"
          >
            💧 Water Dispenser
          </button>
          <button
            onClick={() => setActiveStampTool("couch")}
            className={`px-3 py-1.5 text-xs rounded-md border flex items-center gap-1.5 transition-colors ${
              activeStampTool === "couch" ? "bg-indigo-650 text-white border-indigo-500" : "hover:bg-slate-800 hover:text-white border-slate-700/80"
            }`}
            id="btn-stamp-couch"
          >
            🛋️ Lounge Couch
          </button>

          {activeStampTool !== "none" && (
            <button
              onClick={() => setActiveStampTool("none")}
              className="text-[10px] uppercase font-bold text-rose-400 hover:underline px-2"
              id="btn-cancel-stamp"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Main Canvas view */}
      <div
        ref={containerRef}
        className={`w-full aspect-square border rounded-xl overflow-hidden shadow-xl flex items-center justify-center relative ${
          timeMode === "matrix" ? "border-green-500/30 bg-[#02040a]" : "border-slate-200 bg-slate-50"
        }`}
      >
        <div className="absolute top-3 left-3 pointer-events-none flex flex-col gap-1 z-10">
          <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500">
            BLUEPRINT GRID CONTROLLER
          </span>
          <span className="text-xs font-bold">
            {activeStampTool !== "none"
              ? `🎯 Stamp Mode: Click any grid tile to drop a ${activeStampTool}`
              : "Drag agent desks dynamically. Click placed stamps to deconstruct."}
          </span>
        </div>

         <canvas
          ref={canvasRef}
          width={dimensions.width}
          height={dimensions.height}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="cursor-crosshair block touch-none"
          id="2d-office-custom-canvas"
        />
      </div>
    </div>
  );
}
