import React from "react";

interface MarkdownTextProps {
  text: string;
  timeMode?: "day" | "night" | "matrix";
}

export default function MarkdownText({ text, timeMode = "day" }: MarkdownTextProps) {
  const isMatrix = timeMode === "matrix";
  const isNight = timeMode === "night";

  const h4Class = isMatrix
    ? "text-green-400 font-mono text-xs font-bold mt-3 mb-1 uppercase tracking-wide"
    : isNight
    ? "text-indigo-400 text-xs font-bold mt-3 mb-1 uppercase tracking-wide"
    : "text-indigo-950 font-black text-xs mt-3 mb-1 uppercase tracking-wide";

  const h3Class = isMatrix
    ? "text-green-300 font-mono text-sm font-extrabold mt-4 mb-2 uppercase tracking-wider"
    : isNight
    ? "text-indigo-300 text-sm font-extrabold mt-4 mb-2 uppercase tracking-wider"
    : "text-indigo-900 font-black text-sm mt-4 mb-2 uppercase tracking-wider";

  const h2Class = isMatrix
    ? "text-white font-mono text-base font-black mt-5 mb-3 border-b pb-1 border-green-500/20"
    : isNight
    ? "text-white text-base font-black mt-5 mb-3 border-b pb-1 border-indigo-500/20"
    : "text-slate-950 text-base font-black mt-5 mb-3 border-b pb-1 border-slate-200";

  const bqClass = isMatrix
    ? "border-l-4 border-green-500 bg-green-950/20 px-3 py-1.5 rounded text-green-300 italic my-2 font-mono text-[11px]"
    : isNight
    ? "border-l-4 border-indigo-500 bg-indigo-950/20 px-3 py-1.5 rounded text-slate-300 italic my-2 text-[11px]"
    : "border-l-4 border-indigo-600 bg-indigo-50/60 px-3 py-1.5 rounded text-slate-900 font-medium italic my-2 text-[11px]";

  const listDotClass = isMatrix ? "text-green-500 font-bold" : isNight ? "text-indigo-400" : "text-indigo-800 font-black";

  // Simple custom parser to split lines
  const lines = text.split("\n");

  return (
    <div className="space-y-2 text-xs leading-relaxed font-sans">
      {lines.map((line, idx) => {
        const trimmed = line.trim();

        // 1. Double check Headers
        if (trimmed.startsWith("### ")) {
          return (
            <h4 key={idx} className={h4Class}>
              {trimmed.substring(4)}
            </h4>
          );
        }
        if (trimmed.startsWith("## ")) {
          return (
            <h3 key={idx} className={h3Class}>
              {trimmed.substring(3)}
            </h3>
          );
        }
        if (trimmed.startsWith("# ")) {
          return (
            <h2 key={idx} className={h2Class}>
              {trimmed.substring(2)}
            </h2>
          );
        }

        // 2. Handle blockquotes
        if (trimmed.startsWith("> ")) {
          return (
            <blockquote key={idx} className={bqClass}>
              {trimmed.substring(2)}
            </blockquote>
          );
        }

        // 3. Handle code blocks
        if (trimmed.startsWith("```")) {
          return null; // Skip raw code blocks bounds
        }

        // 4. List items
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const content = trimmed.substring(2);
          return (
            <div key={idx} className="flex items-start gap-2 pl-3">
              <span className={listDotClass}>•</span>
              <span>{parseInlineFormatting(content, timeMode)}</span>
            </div>
          );
        }

        // Normal paragraph line
        if (!trimmed) {
          return <div key={idx} className="h-2" />;
        }

        return <p key={idx}>{parseInlineFormatting(line, timeMode)}</p>;
      })}
    </div>
  );
}

// Simple helper to parse bold(**) and code(`) structures
function parseInlineFormatting(source: string, timeMode: "day" | "night" | "matrix"): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let currentWord = "";
  let i = 0;

  const isMatrix = timeMode === "matrix";
  const isNight = timeMode === "night";

  const strongClass = isMatrix 
    ? "font-bold text-green-400 font-mono" 
    : isNight 
    ? "font-bold text-teal-400" 
    : "font-black text-indigo-900";

  const codeTokenClass = isMatrix
    ? "bg-black border border-green-500/25 px-1 py-0.5 rounded text-[11px] text-green-400 font-mono"
    : isNight
    ? "bg-slate-950 px-1 py-0.5 rounded text-[11px] text-green-400 font-mono"
    : "bg-slate-200 border border-slate-300 px-1 py-0.5 rounded text-[11px] text-slate-950 font-semibold font-mono";

  while (i < source.length) {
    if (source.substring(i, i + 2) === "**") {
      if (currentWord) {
        parts.push(currentWord);
        currentWord = "";
      }
      // find next **
      const nextBound = source.indexOf("**", i + 2);
      if (nextBound !== -1) {
        parts.push(
          <strong key={i} className={strongClass}>
            {source.substring(i + 2, nextBound)}
          </strong>
        );
        i = nextBound + 2;
      } else {
        currentWord += "**";
        i += 2;
      }
    } else if (source[i] === "`") {
      if (currentWord) {
        parts.push(currentWord);
        currentWord = "";
      }
      // find next `
      const nextBound = source.indexOf("`", i + 1);
      if (nextBound !== -1) {
        parts.push(
          <code key={i} className={codeTokenClass}>
            {source.substring(i + 1, nextBound)}
          </code>
        );
        i = nextBound + 1;
      } else {
        currentWord += "`";
        i += 1;
      }
    } else {
      currentWord += source[i];
      i++;
    }
  }

  if (currentWord) {
    parts.push(currentWord);
  }

  return parts;
}
