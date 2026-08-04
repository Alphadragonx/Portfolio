import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Cpu,
  FileText,
  FolderGit2,
  Layers,
  MapPin,
  Sparkles,
  Zap,
  Award
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { soundManager } from "../utils/soundEffects";

interface HeroSectionProps {
  onOpenResume: () => void;
  onExploreCaseStudies: () => void;
  onOpenAiSimulator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResume,
  onExploreCaseStudies,
  onOpenAiSimulator,
}) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated Subtle Ambient Background Grids and Blur Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-emerald-500/10 rounded-full blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>

        {/* Tech SVG Circuit Lines Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Availability Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-xl mb-6 backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-medium text-slate-300">
            {PERSONAL_INFO.status}
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
            <MapPin className="w-3 h-3 text-cyan-400" />
            {PERSONAL_INFO.location}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy & Intro */}
          <div className="lg:col-span-7">
            {/* Title & Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans leading-none"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                Lokesh Binkam
              </span>
            </motion.h1>

            {/* Dynamic Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 flex flex-wrap items-center gap-2 text-lg sm:text-2xl font-semibold text-slate-200"
            >
              <span className="text-cyan-400 font-mono">React Web Development Team Lead</span>
              <span className="text-slate-600">•</span>
              <span className="text-indigo-300 font-mono">8+ Years Experience</span>
            </motion.div>

            {/* Objective & Focus */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              Architecting scalable, high-performance enterprise portals and Azure UI modules at Accenture (Microsoft Project). Specialized in{" "}
              <strong className="text-cyan-300 font-semibold">Micro-Frontend Architecture</strong>,{" "}
              <strong className="text-indigo-300 font-semibold">AI Agent Development Pipelines</strong>, and translating complex Figma designs into defect-free React single-page applications.
            </motion.p>

            {/* Core Capability Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {[
                { name: "Azure UI Modules", icon: Layers },
                { name: "Micro-Frontends", icon: Cpu },
                { name: "2x Productivity via AI Agents", icon: Bot },
                { name: "30% Initial Load Speedup", icon: Zap },
                { name: "Figma-to-React", icon: Code2 },
              ].map((pill, idx) => {
                const Icon = pill.icon;
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    <Icon className="w-3.5 h-3.5 text-cyan-400" />
                    {pill.name}
                  </span>
                );
              })}
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4 items-center"
            >
              <button
                onClick={() => {
                  soundManager.playClick();
                  onExploreCaseStudies();
                }}
                onMouseEnter={() => soundManager.playHover()}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-cyan-500 bg-[length:200%_auto] hover:bg-right text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-cyan-500/20 flex items-center gap-2 group transition-all duration-300"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  soundManager.playClick();
                  onOpenAiSimulator();
                }}
                onMouseEnter={() => soundManager.playHover()}
                className="px-5 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-slate-200 font-semibold text-sm flex items-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                <span>AI Simulator</span>
              </button>

              <button
                onClick={() => {
                  soundManager.playClick();
                  onOpenResume();
                }}
                onMouseEnter={() => soundManager.playHover()}
                className="px-5 py-3.5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 text-slate-300 hover:text-white font-medium text-sm flex items-center gap-2 transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Full Resume PDF</span>
              </button>
            </motion.div>
          </div>

          {/* Right Visual Tech Card Stack */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl overflow-hidden group"
            >
              {/* Subtle glowing header gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500"></div>

              {/* Developer Profile Header Box */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-slate-900 p-0.5 shadow-xl">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-mono font-bold text-2xl text-cyan-400">
                      LB
                    </div>
                  </div>
                  <span className="absolute -bottom-1 -right-1 p-1 bg-emerald-500 rounded-full ring-4 ring-slate-900" title="Active Team Lead">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100 tracking-tight">Lokesh Binkam</h3>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">Team Lead • Accenture India</p>
                  <p className="text-xs text-slate-400 mt-0.5">Project: Microsoft (Azure UI Modules)</p>
                </div>
              </div>

              {/* Key Impact Metrics Cards */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-2xl font-black text-cyan-400 font-mono tracking-tight">
                    -30%
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-1">Initial Load Time</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Micro-Frontend optimization for Azure UI</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-2xl font-black text-indigo-400 font-mono tracking-tight">
                    2x
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-1">Dev Productivity</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">AI Agents embedded in sprint workflows</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-2xl font-black text-emerald-400 font-mono tracking-tight">
                    8+ Yrs
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-1">Total Experience</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">React, Redux, Micro-Frontends, QA</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-2xl font-black text-amber-400 font-mono tracking-tight flex items-center gap-1">
                    100%
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-1">Distinction</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">JNTU(H) B.Tech EEE Graduate</div>
                </div>
              </div>

              {/* Company Experience Badge Strip */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Enterprise Client Portfolio:
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-lg bg-blue-950/60 text-blue-300 border border-blue-800/50">
                    Microsoft
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-950/60 text-blue-300 border border-blue-800/50">
                    AT&T
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-950/60 text-indigo-300 border border-indigo-800/50">
                    Accenture
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-cyan-950/60 text-cyan-300 border border-cyan-800/50">
                    Infosys
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                    Finacle
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
