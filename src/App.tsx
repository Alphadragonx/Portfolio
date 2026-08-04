/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { HeaderNav } from "./components/HeaderNav";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { AiSimulatorSection } from "./components/AiSimulatorSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { ResumeModal } from "./components/ResumeModal";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { soundManager } from "./utils/soundEffects";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [themeAccent, setThemeAccent] = useState<"cyan" | "indigo" | "emerald">("cyan");

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundManager.setEnabled(next);
  };

  useEffect(() => {
    const sections = ["hero", "about", "case-studies", "ai-workflows", "skills", "experience", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 accent-${themeAccent}`}>
      {/* Fixed Navigation Bar */}
      <HeaderNav
        activeSection={activeSection}
        onOpenResume={() => setResumeModalOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        themeAccent={themeAccent}
        onSelectTheme={setThemeAccent}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenResume={() => setResumeModalOpen(true)}
        onExploreCaseStudies={() => scrollTo("case-studies")}
        onOpenAiSimulator={() => scrollTo("ai-workflows")}
      />

      {/* About & Core Pillars Section */}
      <AboutSection />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* AI Agents & Micro-Frontend Simulator Section */}
      <AiSimulatorSection />

      {/* Technical Skills Section */}
      <SkillsSection />

      {/* Professional Experience Section */}
      <ExperienceTimeline />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
