import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Code2,
  Cpu,
  Database,
  Layers,
  Sparkles,
  Terminal,
  Award,
  CheckCircle2
} from "lucide-react";
import { TECHNICAL_SKILLS } from "../data/portfolioData";
import { soundManager } from "../utils/soundEffects";

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const categoryIcons: Record<string, React.ElementType> = {
    "JS Libraries & Frameworks": Code2,
    "Web Technologies & Architecture": Layers,
    "AI & Workflow Tools (2025-2026)": Sparkles,
    "Programming & Databases": Database,
    "Environments & Tools": Terminal,
  };

  const selectedCategory = TECHNICAL_SKILLS[activeCategoryIndex];

  return (
    <section id="skills" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-3"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Core Competency Matrix</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans"
          >
            Technical Skills & Tooling
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-slate-400"
          >
            8 years of hands-on mastery spanning React 19, Micro-Frontends, AI agent automation, Redux state engines, and enterprise QA automation.
          </motion.p>
        </div>

        {/* Category Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TECHNICAL_SKILLS.map((cat, idx) => {
            const Icon = categoryIcons[cat.category] || Code2;
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  soundManager.playClick();
                  setActiveCategoryIndex(idx);
                }}
                onMouseEnter={() => soundManager.playHover()}
                className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 scale-105"
                    : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Skill Category Card */}
        <motion.div
          key={selectedCategory.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-6 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-800">
            {React.createElement(categoryIcons[selectedCategory.category] || Code2, {
              className: "w-7 h-7 text-cyan-400",
            })}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                {selectedCategory.category}
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                {selectedCategory.skills.length} Technical Skills Verified
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedCategory.skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-cyan-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-slate-100 font-sans group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>

                  <div className="flex items-center gap-2">
                    {skill.highlight && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-semibold">
                        {skill.highlight}
                      </span>
                    )}
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress Ring / Bar */}
                <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: sIdx * 0.05 }}
                    className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 rounded-full shadow-inner"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Lead Competencies Radar Overview */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="text-lg font-extrabold text-cyan-400 font-mono">Micro-Frontends</div>
            <div className="text-xs text-slate-400 mt-1">Azure UI Module Isolation</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="text-lg font-extrabold text-indigo-400 font-mono">AI Workflows</div>
            <div className="text-xs text-slate-400 mt-1">AI Agents & Enablement</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="text-lg font-extrabold text-emerald-400 font-mono">Team Leadership</div>
            <div className="text-xs text-slate-400 mt-1">Client Consultation & QA</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="text-lg font-extrabold text-amber-400 font-mono">React 19 & Redux</div>
            <div className="text-xs text-slate-400 mt-1">High-Speed SPA Engines</div>
          </div>
        </div>
      </div>
    </section>
  );
};
