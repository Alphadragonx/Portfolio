import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MapPin,
  Sparkles
} from "lucide-react";
import { EXPERIENCE_LIST } from "../data/portfolioData";
import { soundManager } from "../utils/soundEffects";

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>("accenture-microsoft");

  const toggleExpand = (id: string) => {
    soundManager.playClick();
    setExpandedId(expandedId === id ? "" : id);
  };

  return (
    <section id="experience" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-slate-400"
          >
            8 years of progressive leadership at Accenture, Infosys, and EdgeVerve across Microsoft, AT&T, Telecom, and Finacle products.
          </motion.p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {EXPERIENCE_LIST.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "bg-slate-900 border-cyan-500/50 shadow-2xl"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Header Strip */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  onMouseEnter={() => soundManager.playHover()}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-cyan-950 border border-cyan-800 text-cyan-400 shrink-0 mt-1 sm:mt-0">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono font-semibold text-cyan-400 px-2.5 py-0.5 rounded-md bg-cyan-950 border border-cyan-800/60">
                          {exp.company}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {exp.project}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-100 font-sans mt-1">
                        {exp.role}
                      </h3>

                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        Focus: {exp.focus}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end sm:self-center">
                    <div className="text-right">
                      <div className="text-xs font-mono font-medium text-slate-300 flex items-center justify-end gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {exp.period}
                      </div>
                      <div className="text-[11px] font-mono text-slate-500 flex items-center justify-end gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        {exp.location}
                      </div>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 border-t border-slate-800/80">
                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-xs font-mono uppercase text-slate-400 mb-3">
                        Key Responsibilities & Deliverables
                      </h4>
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="text-slate-300 text-xs sm:text-sm flex items-start gap-2.5 leading-relaxed">
                            <span className="text-cyan-400 mt-1 font-bold">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* AI Innovations Highlight Box (If applicable) */}
                    {exp.keyInnovations && (
                      <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-800/60 mb-6">
                        <h4 className="text-sm font-bold text-indigo-300 font-sans mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-indigo-400" />
                          {exp.keyInnovations.title}
                        </h4>
                        <ul className="space-y-2">
                          {exp.keyInnovations.items.map((item, iIdx) => (
                            <li key={iIdx} className="text-slate-300 text-xs sm:text-sm flex items-start gap-2 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    <div>
                      <h4 className="text-[11px] font-mono text-slate-400 mb-2">
                        Technologies & Tools Used:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-slate-950 text-cyan-300 text-xs font-mono border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
