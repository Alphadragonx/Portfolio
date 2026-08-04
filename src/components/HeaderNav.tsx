import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Briefcase,
  Code2,
  Cpu,
  FileText,
  FolderGit2,
  Menu,
  Sparkles,
  User,
  Volume2,
  VolumeX,
  X,
  Send,
  Zap
} from "lucide-react";
import { soundManager } from "../utils/soundEffects";

interface HeaderNavProps {
  activeSection: string;
  onOpenResume: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  themeMode: "dark" | "light" | "cyberpunk";
  onSelectTheme: (theme: "dark" | "light" | "cyberpunk") => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeSection,
  onOpenResume,
  soundEnabled,
  onToggleSound,
  themeMode,
  onSelectTheme,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home", icon: Zap },
    { id: "about", label: "About", icon: User },
    { id: "case-studies", label: "Case Studies", icon: FolderGit2 },
    { id: "ai-workflows", label: "AI & Micro-Frontends", icon: Sparkles },
    { id: "skills", label: "Technical Skills", icon: Code2 },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Send },
  ];

  const scrollToSection = (id: string) => {
    soundManager.playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <motion.button
          onClick={() => scrollToSection("hero")}
          onMouseEnter={() => soundManager.playHover()}
          className="flex items-center gap-3 group text-left focus:outline-none"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 shadow-inner group-hover:border-cyan-500/50 transition-colors">
            <span className="font-bold font-mono text-lg bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
              LB
            </span>
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-30 blur transition duration-300"></div>
          </div>
          <div>
            <div className="font-bold text-slate-100 text-sm tracking-tight flex items-center gap-1.5">
              Lokesh Binkam
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] uppercase font-mono rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                Lead
              </span>
            </div>
            <div className="text-[11px] text-slate-400 font-mono hidden sm:block">
              React Lead • 8 Yrs
            </div>
          </div>
        </motion.button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800/80 backdrop-blur-md shadow-inner">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => soundManager.playHover()}
                className={`relative px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "text-slate-100 font-semibold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-xl bg-slate-800 border border-slate-700/80 shadow-md"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-cyan-400" : "text-slate-500"}`} />
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              onToggleSound();
              soundManager.playClick();
            }}
            onMouseEnter={() => soundManager.playHover()}
            className={`p-2 rounded-xl border text-xs font-mono transition-all flex items-center gap-1.5 ${
              soundEnabled
                ? "bg-cyan-950/40 text-cyan-300 border-cyan-700/60 shadow-sm shadow-cyan-900/30"
                : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200"
            }`}
            title={soundEnabled ? "UI Audio On" : "UI Audio Muted"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden xl:inline text-[11px]">{soundEnabled ? "Audio On" : "Mute"}</span>
          </motion.button>

          {/* Theme Accent Picker */}
          <div className="hidden sm:flex items-center p-1 bg-slate-900/60 border border-slate-800 rounded-xl gap-1">
            <button
              onClick={() => {
                onSelectTheme("dark");
                soundManager.playClick();
              }}
              onMouseEnter={() => soundManager.playHover()}
              className={`w-3.5 h-3.5 rounded-full bg-cyan-400 transition-all ${
                themeMode === "dark"
                  ? "ring-2 ring-cyan-300 ring-offset-2 ring-offset-slate-950 scale-125"
                  : "opacity-60 hover:opacity-100"
              }`}
              title="Dark Theme"
            />
            <button
              onClick={() => {
                onSelectTheme("light");
                soundManager.playClick();
              }}
              onMouseEnter={() => soundManager.playHover()}
              className={`w-3.5 h-3.5 rounded-full bg-indigo-400 transition-all ${
                themeMode === "light"
                  ? "ring-2 ring-indigo-300 ring-offset-2 ring-offset-slate-950 scale-125"
                  : "opacity-60 hover:opacity-100"
              }`}
              title="Light Theme"
            />
            <button
              onClick={() => {
                onSelectTheme("cyberpunk");
                soundManager.playClick();
              }}
              onMouseEnter={() => soundManager.playHover()}
              className={`w-3.5 h-3.5 rounded-full bg-emerald-400 transition-all ${
                themeMode === "cyberpunk"
                  ? "ring-2 ring-emerald-300 ring-offset-2 ring-offset-slate-950 scale-125"
                  : "opacity-60 hover:opacity-100"
              }`}
              title="Sandy Cyberpunk Theme"
            />
          </div>

          {/* Resume CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              soundManager.playClick();
              onOpenResume();
            }}
            onMouseEnter={() => soundManager.playHover()}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-cyan-500 bg-[length:200%_auto] hover:bg-right text-slate-950 font-semibold text-xs tracking-wide shadow-lg shadow-cyan-500/20 flex items-center gap-1.5 transition-all duration-300"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume PDF</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 border-b border-slate-800/80 backdrop-blur-2xl overflow-hidden px-4 py-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${
                      isActive
                        ? "bg-cyan-950/60 text-cyan-300 border border-cyan-800/50"
                        : "text-slate-300 hover:bg-slate-900"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-cyan-400" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
