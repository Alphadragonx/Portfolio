import React from "react";
import { motion } from "motion/react";
import {
  Award,
  Bot,
  Check,
  Code2,
  Cpu,
  Figma,
  Globe,
  GraduationCap,
  LayoutGrid,
  Sparkles,
  Zap
} from "lucide-react";
import { PERSONAL_INFO, CORE_PILLARS, EDUCATION_DATA } from "../data/portfolioData";
import { soundManager } from "../utils/soundEffects";

export const AboutSection: React.FC = () => {
  const pillarIcons: Record<string, React.ElementType> = {
    LayoutGrid,
    Bot,
    Figma,
    Zap,
  };

  return (
    <section id="about" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Leadership & Architectural Focus</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans"
          >
            Engineering Excellence & Strategic Leadership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-slate-400"
          >
            With 8 years of dedicated React & Web Development expertise, I bridge high-level client business strategy with modular, high-speed frontend architectures.
          </motion.p>
        </div>

        {/* Professional Objective Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="p-4 rounded-2xl bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 shrink-0">
              <Code2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100 font-sans mb-2 flex items-center gap-2">
                Professional Objective
                <span className="text-xs font-mono font-normal text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800">
                  8 Yrs Lead
                </span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                "{PERSONAL_INFO.objective}"
              </p>
            </div>
          </div>
        </motion.div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CORE_PILLARS.map((pillar, idx) => {
            const IconComponent = pillarIcons[pillar.iconName] || Zap;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => soundManager.playHover()}
                className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 font-semibold">
                      {pillar.metric}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-100 font-sans mb-2 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Education & Language Credentials Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider">
                  Education & Honors
                </span>
                <h4 className="text-xl font-bold text-slate-100 mt-1">
                  {EDUCATION_DATA.degree}
                </h4>
                <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                  {EDUCATION_DATA.institution} —{" "}
                  <span className="text-amber-300 font-mono">
                    {EDUCATION_DATA.honors}
                  </span>
                </p>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  Electrical & Electronics Engineering foundation providing strong mathematical modeling, signal logic, and system architecture fundamentals applied to modern high-scale software systems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Languages Known Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-emerald-400" />
                <h4 className="text-base font-bold text-slate-100 font-sans">
                  Languages Spoken
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {EDUCATION_DATA.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 font-mono">
              Role Focus: {PERSONAL_INFO.roleFocus}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
