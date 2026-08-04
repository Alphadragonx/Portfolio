import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  Zap
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { soundManager } from "../utils/soundEffects";

export const ContactSection: React.FC = () => {
  const [subject, setSubject] = useState<string>("Frontend Architecture Consultation");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const presets = [
    "Frontend Architecture Consultation",
    "React Team Lead Opportunity",
    "Micro-Frontend Design Discussion",
    "AI Agent Pipeline Enablement",
  ];

  const handleCopyEmail = () => {
    soundManager.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playSuccess();
    setSubmitted(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-3"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans"
          >
            Let's Build Something Exceptional
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-slate-400"
          >
            Open for Technical Leadership, Micro-Frontend Architecture, and AI Enablement opportunities. Reach out directly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Contact Card Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-slate-100 font-sans flex items-center gap-2">
                Contact Information
              </h3>

              {/* Email Box */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Direct Email</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-200 font-mono">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Box */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-800">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Current Base</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-200 font-mono">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>

              {/* Role Focus */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Role Availability</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-200 font-mono">
                    React Team Lead / Principal Architect
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-800 flex gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4 text-indigo-400" />
                  <span>GitHub Repos</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6"
            >
              <h3 className="text-xl font-bold text-slate-100 font-sans">
                Send Direct Message
              </h3>

              {/* Presets */}
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-2">
                  Select Subject Interest:
                </label>
                <div className="flex flex-wrap gap-2">
                  {presets.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => {
                        soundManager.playClick();
                        setSubject(p);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                        subject === p
                          ? "bg-cyan-500 text-slate-950 font-bold"
                          : "bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. sarah@enterprise.com"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your team's frontend challenges or technical goals..."
                  className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-cyan-500 bg-[length:200%_auto] hover:bg-right text-slate-950 font-extrabold text-sm tracking-wide shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Lokesh</span>
              </button>

              {submitted && (
                <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-mono text-center flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Thank you! Message transmitted successfully to Lokesh.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
