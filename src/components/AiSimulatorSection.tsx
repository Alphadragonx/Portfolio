import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Bot,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  Play,
  RefreshCw,
  Sparkles,
  Terminal,
  Zap,
  Check
} from "lucide-react";
import { soundManager } from "../utils/soundEffects";

interface MicroModule {
  id: string;
  name: string;
  size: string;
  latency: number;
  status: "idle" | "loading" | "loaded";
  progress: number;
}

export const AiSimulatorSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"micro-frontend" | "ai-agent">("micro-frontend");

  // Micro-Frontend Simulator State
  const [modules, setModules] = useState<MicroModule[]>([
    { id: "azure-core", name: "Azure Core Shell", size: "140 KB", latency: 120, status: "loaded", progress: 100 },
    { id: "azure-compute", name: "Compute Module (VMs)", size: "85 KB", latency: 90, status: "idle", progress: 0 },
    { id: "azure-storage", name: "Storage Module (Blob)", size: "72 KB", latency: 80, status: "idle", progress: 0 },
    { id: "azure-ai", name: "AI Agent Copilot Module", size: "110 KB", latency: 110, status: "idle", progress: 0 },
  ]);
  const [optimizedMode, setOptimizedMode] = useState<boolean>(true);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  // AI Agent Code Optimizer State
  const [codePrompt, setCodePrompt] = useState<string>(
    `// Azure UI Module Component Example\nexport function AzureVirtualMachineCard({ vmName, status }: { vmName: string; status: string }) {\n  return (\n    <div className="vm-card">\n      <h3>{vmName}</h3>\n      <span>Status: {status}</span>\n    </div>\n  );\n}`
  );
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const [aiOutput, setAiOutput] = useState<string | null>(null);

  // Micro-Frontend Simulation Trigger
  const runMicroFrontendSim = () => {
    soundManager.playClick();
    setIsSimulating(true);

    // Reset non-core modules
    setModules((prev) =>
      prev.map((m) =>
        m.id === "azure-core"
          ? m
          : { ...m, status: "loading", progress: 0 }
      )
    );

    let progressStep = 0;
    const interval = setInterval(() => {
      progressStep += 20;
      setModules((prev) =>
        prev.map((m) => {
          if (m.id === "azure-core") return m;
          const newProg = Math.min(100, progressStep + (optimizedMode ? 15 : 0));
          return {
            ...m,
            progress: newProg,
            status: newProg >= 100 ? "loaded" : "loading",
          };
        })
      );

      if (progressStep >= 100) {
        clearInterval(interval);
        setIsSimulating(false);
        soundManager.playSuccess();
      }
    }, 150);
  };

  // AI Agent Optimization Call
  const handleAiOptimize = async () => {
    soundManager.playClick();
    setAiLoading(true);
    setAiOutput(null);

    try {
      const res = await fetch("/api/ai-optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          codeOrPrompt: codePrompt,
          mode: "optimize",
        }),
      });
      const data = await res.json();
      setAiOutput(data.analysis || "Analysis complete.");
      soundManager.playSuccess();
    } catch (e) {
      setAiOutput("### Optimization Insights\n- Refactored component with React 19 memoization.\n- Extracted Micro-Frontend bundle boundary.");
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <section id="ai-workflows" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Technical Demos</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans"
          >
            AI Agents & Micro-Frontend Simulator
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-slate-400"
          >
            Simulate how Lokesh orchestrates Micro-Frontend module lazy-loading and embeds AI agent workflows to achieve 30% initial load speedup and 2x dev productivity.
          </motion.p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="p-1.5 rounded-2xl bg-slate-900 border border-slate-800 flex gap-2">
            <button
              onClick={() => {
                soundManager.playClick();
                setActiveTab("micro-frontend");
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                activeTab === "micro-frontend"
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Micro-Frontend Module Loader</span>
            </button>
            <button
              onClick={() => {
                soundManager.playClick();
                setActiveTab("ai-agent");
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                activeTab === "ai-agent"
                  ? "bg-indigo-500 text-slate-950 shadow-md shadow-indigo-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>AI Agent Code Optimizer</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Micro-Frontend Orchestration Simulator */}
        {activeTab === "micro-frontend" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-slate-100 font-sans flex items-center gap-2">
                  <Layers className="w-5 h-5 text-cyan-400" />
                  Azure UI Micro-Frontend Lazy Loading
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Simulate module federation chunk resolution with Lokesh's 30% performance optimization preset.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setOptimizedMode(!optimizedMode)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 border ${
                    optimizedMode
                      ? "bg-emerald-950/80 text-emerald-300 border-emerald-800/60"
                      : "bg-slate-950 text-slate-400 border-slate-800"
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>30% Speedup Preset: {optimizedMode ? "ON" : "OFF"}</span>
                </button>

                <button
                  onClick={runMicroFrontendSim}
                  disabled={isSimulating}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isSimulating ? "Loading Chunks..." : "Simulate Module Load"}</span>
                </button>
              </div>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {modules.map((m) => (
                <div key={m.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-slate-300 font-semibold">{m.name}</span>
                      <span className="text-[10px] font-mono text-slate-500">{m.size}</span>
                    </div>

                    <div className="text-[11px] font-mono text-cyan-400 mb-3 flex items-center justify-between">
                      <span>Latency: {optimizedMode ? Math.round(m.latency * 0.7) : m.latency}ms</span>
                      <span className="capitalize">{m.status}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-200"
                        style={{ width: `${m.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>Federation Container</span>
                    {m.status === "loaded" ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Ready
                      </span>
                    ) : (
                      <span className="text-amber-400">Isolated</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB 2: AI Agent Code Optimizer */}
        {activeTab === "ai-agent" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-100 font-sans flex items-center gap-2">
                <Bot className="w-5 h-5 text-indigo-400" />
                AI Agent Sprint & Code Optimizer
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Simulate how Lokesh embeds AI agents into dev pipelines to achieve 2x productivity gains. Paste React code or ask for architectural review.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Input Snippet Box */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-2">
                  Input Code Snippet / Component:
                </label>
                <textarea
                  value={codePrompt}
                  onChange={(e) => setCodePrompt(e.target.value)}
                  rows={8}
                  className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 focus:outline-none focus:border-indigo-500/80 resize-none"
                />

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    Powered by @google/genai Gemini 3.6 Flash
                  </span>
                  <button
                    onClick={handleAiOptimize}
                    disabled={aiLoading}
                    className="px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-indigo-500/20 disabled:opacity-50"
                  >
                    {aiLoading ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <Sparkles className="w-4 h-4" />
                    )}
                    <span>{aiLoading ? "Analyzing..." : "Run AI Agent Analysis"}</span>
                  </button>
                </div>
              </div>

              {/* AI Output Terminal Box */}
              <div className="p-4 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-900 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-emerald-400" />
                      AI Agent Pipeline Output
                    </span>
                    <span className="text-emerald-400 text-[10px]">Active</span>
                  </div>

                  {aiOutput ? (
                    <div className="text-xs font-mono text-slate-300 leading-relaxed whitespace-pre-line max-h-60 overflow-y-auto pr-2">
                      {aiOutput}
                    </div>
                  ) : (
                    <div className="text-xs font-mono text-slate-500 py-12 text-center">
                      Click "Run AI Agent Analysis" to simulate AI optimization pipeline...
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Sprint Velocity Impact</span>
                  <span className="text-indigo-400 font-bold">+100% (2x Gains)</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
