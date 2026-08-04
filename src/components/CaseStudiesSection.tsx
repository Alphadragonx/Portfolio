import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  ExternalLink,
  Layers,
  Sparkles,
  X,
  Zap,
  Building2,
  Calendar
} from "lucide-react";
import { CASE_STUDIES } from "../data/portfolioData";
import { CaseStudy } from "../types";
import { soundManager } from "../utils/soundEffects";

export const CaseStudiesSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);

  const tags = ["All", "Micro-Frontends", "AI Agents", "React", "Enterprise SPA", "Banking UI"];

  const filteredStudies = CASE_STUDIES.filter((cs) => {
    if (selectedTag === "All") return true;
    if (selectedTag === "Micro-Frontends") return cs.tags.includes("Micro-Frontends");
    if (selectedTag === "AI Agents") return cs.tags.includes("AI Agents");
    if (selectedTag === "React") return cs.tags.includes("React");
    if (selectedTag === "Enterprise SPA") return cs.tags.includes("Enterprise SPA");
    if (selectedTag === "Banking UI") return cs.tags.includes("Banking UI") || cs.tags.includes("Selenium");
    return true;
  });

  return (
    <section id="case-studies" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-3"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Proven Enterprise Impact</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans"
          >
            Project Case Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-slate-400"
          >
            Detailed architectural deep dives into high-scale projects built for Microsoft, AT&T, Telecom E-Commerce, and Finacle Banking.
          </motion.p>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                soundManager.playClick();
                setSelectedTag(tag);
              }}
              className={`px-4 py-2 rounded-2xl text-xs font-mono transition-all duration-200 ${
                selectedTag === tag
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 scale-105"
                  : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl"
            >
              <div className="p-6 sm:p-8">
                {/* Header Tag & Company */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60">
                    {cs.company} • {cs.project}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {cs.period}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-100 font-sans group-hover:text-cyan-300 transition-colors mb-2">
                  {cs.title}
                </h3>

                <p className="text-xs font-mono text-indigo-300 mb-4">
                  Role: {cs.role}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {cs.summary}
                </p>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {cs.impactMetrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-center">
                      <div className="text-lg font-black text-cyan-400 font-mono tracking-tight">{m.value}</div>
                      <div className="text-[10px] text-slate-400 font-medium truncate">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cs.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-950 text-slate-400 text-[11px] font-mono border border-slate-800"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-4 sm:px-8 sm:pb-6 bg-slate-950/50 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Deep Dive Architecture</span>
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setActiveCaseStudy(cs);
                  }}
                  className="px-4 py-2 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-800 text-cyan-300 font-semibold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Deep Dive */}
      <AnimatePresence>
        {activeCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCaseStudy(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-y-auto z-10 p-6 sm:p-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Info */}
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-mono">
                  {activeCaseStudy.company} • {activeCaseStudy.project}
                </span>
                <span className="text-xs font-mono text-slate-400">{activeCaseStudy.period}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-white font-sans mt-2 mb-2">
                {activeCaseStudy.title}
              </h2>

              <p className="text-sm font-mono text-indigo-300 mb-6">
                Role Focus: {activeCaseStudy.role}
              </p>

              {/* Impact Metrics Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-8">
                {activeCaseStudy.impactMetrics.map((m, idx) => (
                  <div key={idx} className="p-3">
                    <div className="text-2xl font-black text-cyan-400 font-mono">{m.value}</div>
                    <div className="text-xs font-semibold text-slate-200 mt-1">{m.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{m.desc}</div>
                  </div>
                ))}
              </div>

              {/* Problem & Solution Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-base font-bold text-red-400 font-sans mb-3 flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> Challenge & Problem Statement
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-normal">
                    {activeCaseStudy.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-base font-bold text-emerald-400 font-sans mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Solution & Architecture
                  </h4>
                  <ul className="space-y-2">
                    {activeCaseStudy.solution.map((sol, idx) => (
                      <li key={idx} className="text-slate-300 text-xs sm:text-sm flex items-start gap-2">
                        <span className="text-emerald-400 shrink-0 mt-0.5">✓</span>
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="text-base font-bold text-slate-100 font-sans mb-3">
                  Key Accomplishments
                </h4>
                <div className="space-y-2">
                  {activeCaseStudy.highlights.map((h, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCaseStudy.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-xl bg-slate-950 text-cyan-300 border border-slate-800 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
