import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  Copy,
  Download,
  FileText,
  Printer,
  X,
  Sparkles
} from "lucide-react";
import { PERSONAL_INFO, EXPERIENCE_LIST, TECHNICAL_SKILLS, EDUCATION_DATA } from "../data/portfolioData";
import { soundManager } from "../utils/soundEffects";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const fullResumeText = `
${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.title.toUpperCase()} | ${PERSONAL_INFO.experienceYears.toUpperCase()} EXPERIENCE
Location: ${PERSONAL_INFO.location} | Role Focus: ${PERSONAL_INFO.roleFocus}

PROFESSIONAL OBJECTIVE
${PERSONAL_INFO.objective}

PROFESSIONAL EXPERIENCE
${EXPERIENCE_LIST.map(
  (e) => `
${e.company} — ${e.role} (${e.project})
${e.period} | ${e.location}
Focus: ${e.focus}
${e.responsibilities.map((r) => `• ${r}`).join("\n")}
${
  e.keyInnovations
    ? `\nKey Leadership & AI Innovations:\n${e.keyInnovations.items.map((i) => `• ${i}`).join("\n")}`
    : ""
}`
).join("\n\n")}

TECHNICAL SKILLS
${TECHNICAL_SKILLS.map((c) => `${c.category}: ${c.skills.map((s) => s.name).join(", ")}`).join("\n")}

EDUCATION & CREDENTIALS
${EDUCATION_DATA.degree}: ${EDUCATION_DATA.institution} — ${EDUCATION_DATA.honors}
Languages Known: ${EDUCATION_DATA.languages.join(", ")}
  `.trim();

  const handleCopy = () => {
    soundManager.playClick();
    navigator.clipboard.writeText(fullResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    soundManager.playClick();
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-y-auto z-10 p-6 sm:p-10 text-slate-100"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold font-sans">Lokesh Binkam — Resume</h2>
                <p className="text-xs text-slate-400 font-mono">React Team Lead • 8 Years Experience</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 flex items-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied!" : "Copy Text"}</span>
              </button>

              <button
                onClick={handlePrint}
                className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-lg shadow-cyan-500/20"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="print:text-black print:bg-white p-4 sm:p-8 bg-slate-950 rounded-2xl border border-slate-800 space-y-6">
            {/* Header Info */}
            <div className="border-b border-slate-800 pb-4">
              <h1 className="text-3xl font-black font-sans text-cyan-400 tracking-tight">
                LOKESH BINKAM
              </h1>
              <div className="text-sm font-mono text-slate-300 mt-1 font-bold">
                REACT WEB DEVELOPMENT TEAM LEAD | 8 YEARS EXPERIENCE
              </div>
              <div className="text-xs font-mono text-slate-400 mt-1">
                Location: {PERSONAL_INFO.location} | Role Focus: {PERSONAL_INFO.roleFocus}
              </div>
            </div>

            {/* Objective */}
            <div>
              <h3 className="text-xs font-mono uppercase font-bold text-cyan-400 mb-2 tracking-wider">
                PROFESSIONAL OBJECTIVE
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {PERSONAL_INFO.objective}
              </p>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xs font-mono uppercase font-bold text-cyan-400 mb-3 tracking-wider">
                PROFESSIONAL EXPERIENCE
              </h3>
              <div className="space-y-6">
                {EXPERIENCE_LIST.map((e, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-baseline text-sm font-bold text-slate-100">
                      <span>{e.company} — {e.role} ({e.project})</span>
                      <span className="text-xs font-mono text-slate-400">{e.period}</span>
                    </div>
                    <div className="text-xs font-mono text-cyan-300">Focus: {e.focus}</div>
                    <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 mt-2">
                      {e.responsibilities.map((r, rIdx) => (
                        <li key={rIdx}>{r}</li>
                      ))}
                    </ul>
                    {e.keyInnovations && (
                      <div className="mt-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-xs font-bold text-indigo-300 mb-1">
                          {e.keyInnovations.title}:
                        </div>
                        <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                          {e.keyInnovations.items.map((i, iIdx) => (
                            <li key={iIdx}>{i}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xs font-mono uppercase font-bold text-cyan-400 mb-3 tracking-wider">
                TECHNICAL SKILLS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {TECHNICAL_SKILLS.map((s, idx) => (
                  <div key={idx} className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="font-bold text-slate-200">{s.category}: </span>
                    <span className="text-slate-400">{s.skills.map((sk) => sk.name).join(", ")}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-mono uppercase font-bold text-cyan-400 mb-2 tracking-wider">
                EDUCATION & CREDENTIALS
              </h3>
              <div className="text-xs text-slate-300">
                <span className="font-bold">{EDUCATION_DATA.degree}: </span>
                {EDUCATION_DATA.institution} — <span className="text-amber-300">{EDUCATION_DATA.honors}</span>
              </div>
              <div className="text-xs text-slate-400 mt-1 font-mono">
                Languages Known: {EDUCATION_DATA.languages.join(", ")}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
