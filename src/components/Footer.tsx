import React from "react";
import { ArrowUp, Code2, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { soundManager } from "../utils/soundEffects";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-slate-200 font-bold font-sans text-sm flex items-center gap-2">
            Lokesh Binkam
            <span className="text-[10px] text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
              React Lead • 8 Yrs
            </span>
          </div>
          <p className="text-slate-400 text-xs font-sans mt-1">
            Frontend Architecture, Micro-Frontends & AI Workflow Integration.
          </p>
        </div>

        <div className="text-slate-400 text-center md:text-right">
          <div>© {new Date().getFullYear()} Lokesh Binkam. All rights reserved.</div>
          <div className="text-[11px] text-slate-400 mt-0.5">
            Crafted for High Performance & Micro-Frontend Scalability
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-cyan-400 transition-colors flex items-center gap-1.5"
          title="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
          <span className="hidden sm:inline text-xs">Back to Top</span>
        </button>
      </div>
    </footer>
  );
};
