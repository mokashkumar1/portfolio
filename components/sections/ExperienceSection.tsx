"use client";

import React from "react";
import { portfolioData, Experience } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin, Sparkles, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ExperienceSectionProps {
  accentColor: "purple" | "cyan" | "amber";
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  accentColor,
}) => {
  const getAccentClass = () => {
    switch (accentColor) {
      case "cyan":
        return "text-[#06b6d4]";
      case "amber":
        return "text-[#f59e0b]";
      case "purple":
      default:
        return "text-[#a855f7]";
    }
  };

  const getAccentBgClass = () => {
    switch (accentColor) {
      case "cyan":
        return "bg-[#06b6d4]";
      case "amber":
        return "bg-[#f59e0b]";
      case "purple":
      default:
        return "bg-[#a855f7]";
    }
  };

  const getRoleGlowClass = (color?: string) => {
    switch (color) {
      case "cyan":
        return "border-l-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.06)]";
      case "amber":
        return "border-l-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.06)]";
      case "purple":
      default:
        return "border-l-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.06)]";
    }
  };

  const getAccentHighlightText = () => {
    return "text-[#10b981] drop-shadow-[0_0_10px_rgba(16,185,129,0.2)]";
  };

  return (
    <section className="relative w-full py-16 px-6 md:px-12 bg-[#0c0c12]/40 border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto flex flex-col space-y-16">
        
        {/* Section 1: My Experience Cards */}
        <div className="flex flex-col space-y-10">
          
          {/* Section Header */}
          <div className="flex flex-col space-y-2 items-center text-center">
            <div className="flex items-center gap-2">
              <Briefcase className={cn("w-5 h-5", getAccentClass())} />
              <span className="font-mono text-xs tracking-widest text-slate-400 uppercase font-bold">
                Professional Path
              </span>
            </div>
            <h2 className="font-mono text-xl md:text-2xl lg:text-3xl font-bold tracking-wider text-slate-100 uppercase mt-1">
              My <span className={getAccentHighlightText()}>Experience</span>
            </h2>
          </div>

          {/* Grid of contribution experience cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.experience.slice(0, 4).map((exp: Experience, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "obsidian-card p-6 md:p-8 rounded-2xl border-l-[3.5px] flex flex-col gap-4 spotlight-shine relative shadow-xl hover:-translate-y-1 transition-all duration-300",
                  getRoleGlowClass(exp.color)
                )}
              >
                {/* Floating sparkle decoration */}
                <div className="absolute top-4 right-4 text-white/5 hover:text-white/20 transition-colors">
                  <Sparkles size={12} />
                </div>

                <div className="flex flex-col space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1.5">
                    <Calendar size={10} />
                    {exp.duration}
                  </span>
                  
                  <h3 className="font-mono text-base font-bold text-slate-100">
                    {exp.role}
                  </h3>
                  
                  <p className="text-xs text-slate-300 font-sans font-semibold">
                    {exp.company}
                  </p>
                </div>

                {exp.location && (
                  <span className="font-mono text-[9px] text-slate-500 flex items-center gap-1">
                    <MapPin size={10} />
                    {exp.location}
                  </span>
                )}

                <ul className="space-y-1.5 border-t border-white/5 pt-3">
                  {exp.description.map((point, pIdx) => (
                    <li key={pIdx} className="text-[11px] text-slate-400 leading-relaxed list-disc list-inside">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Section 2: My Journey Timeline */}
        <div className="flex flex-col space-y-12 pt-6">
          
          {/* Timeline Header */}
          <div className="flex flex-col space-y-2 items-center text-center">
            <div className="flex items-center gap-2">
              <Layers className={cn("w-5 h-5", getAccentClass())} />
              <span className="font-mono text-xs tracking-widest text-slate-400 uppercase font-bold">
                Chronological History
              </span>
            </div>
            <h2 className="font-mono text-xl md:text-2xl lg:text-3xl font-bold tracking-wider text-slate-100 uppercase mt-1">
              My <span className={getAccentHighlightText()}>Journey (History)</span>
            </h2>
          </div>

          {/* Timeline Node Chain */}
          <div className="relative border-l border-white/10 max-w-3xl mx-auto pl-8 space-y-10 py-2">
            
            {/* Year 2026 Node */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Pulsing indicator node */}
              <span className={cn("absolute -left-[41.5px] top-1.5 w-6 h-6 rounded-full border-4 border-[#0a0a0e] shadow-[0_0_15px_rgba(255,255,255,0.15)] flex justify-center items-center", getAccentBgClass())} />
              <div className="flex flex-col space-y-2">
                <span className="font-mono text-sm font-bold text-slate-200">2026</span>
                <div className="obsidian-card p-5 rounded-xl border border-white/5 space-y-2">
                  <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
                    IICT&apos;26 DevOps & Research Assistant
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                    Volunteered at the 1st International Conference on Innovations in Information and Communication Technologies, Jamshoro. Assisted during the core cloud engineering workshops, coordinating delegates and acquiring exposure to CI/CD workflows and automated containers.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Year 2025 Node */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span className="absolute -left-[41.5px] top-1.5 w-6 h-6 rounded-full border-4 border-[#0a0a0e] bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.15)]" />
              <div className="flex flex-col space-y-2">
                <span className="font-mono text-sm font-bold text-slate-200">2025</span>
                <div className="obsidian-card p-5 rounded-xl border border-white/5 space-y-2">
                  <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Hult Prize Director of Videography & PEF Volunteer
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                    Led creative digital sequences for Hult Prize entrepreneurship, increasing reach across Jamshoro. Volunteered at the PEF soft-skills seminar, coordinating interactive classes on professional resume polish and confidence training.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Year 2024 Node */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span className="absolute -left-[41.5px] top-1.5 w-6 h-6 rounded-full border-4 border-[#0a0a0e] bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.15)]" />
              <div className="flex flex-col space-y-2">
                <span className="font-mono text-sm font-bold text-slate-200">2024</span>
                <div className="obsidian-card p-5 rounded-xl border border-white/5 space-y-2">
                  <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Enrollment in MUET CSE & FM Editor Role
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                    Admitted to the Bachelor of Engineering program in Computer Systems at MUET. Joined the official FM 92.6 media deck as video/audio editor, polishing broadcast frequencies and reels scripts.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default ExperienceSection;
