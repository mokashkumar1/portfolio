"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import { ChevronLeft, ChevronRight, Terminal, Award, Users, ExternalLink, FolderGit2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectsSectionProps {
  accentColor: "purple" | "cyan" | "amber";
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  accentColor,
}) => {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const getAccentClass = () => {
    switch (accentColor) {
      case "cyan":
        return "text-[#06b6d4]";
      case "purple":
        return "text-[#a855f7]";
      case "amber":
      default:
        return "text-[#f97316]";
    }
  };

  const getAccentBgClass = () => {
    switch (accentColor) {
      case "cyan":
        return "bg-[#06b6d4] hover:bg-[#06b6d4]/90 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.2)]";
      case "purple":
        return "bg-[#a855f7] hover:bg-[#a855f7]/90 text-slate-950 shadow-[0_0_20px_rgba(168,85,247,0.2)]";
      case "amber":
      default:
        return "bg-[#f97316] hover:bg-[#f97316]/90 text-slate-950 shadow-[0_0_20px_rgba(249,115,22,0.2)]";
    }
  };

  const handleNextProject = () => {
    setActiveProjectIdx((prev) => (prev + 1) % portfolioData.projects.length);
  };

  const handlePrevProject = () => {
    setActiveProjectIdx((prev) => (prev - 1 + portfolioData.projects.length) % portfolioData.projects.length);
  };

  // Mock technical skill ratings for progress sliders
  const skillsProgress = [
    { name: "Python", rating: 95 },
    { name: "Machine Learning", rating: 90 },
    { name: "Data Analytics", rating: 90 },
    { name: "SQL & Databases", rating: 85 },
    { name: "Java Development", rating: 80 },
    { name: "C++ Programming", rating: 75 },
    { name: "Git & CI/CD", rating: 85 }
  ];

  return (
    <section id="skills-section" className="relative w-full py-16 px-6 md:px-12 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10">
        
        {/* Unified 12-Column Grid for Technical Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT SIDE: SKILLS & PROGRESS (spans 5 cols on lg) ================= */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            
            {/* Box 1: Technical Skills Sliders */}
            <div className="obsidian-card p-6 rounded-2xl border border-white/5 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-4">
                <span className="font-mono text-xs font-bold text-slate-300 flex items-center gap-1.5 uppercase">
                  <Terminal size={13} className={getAccentClass()} />
                  Technical Skills
                </span>
                <span className="font-mono text-[8px] text-slate-500 uppercase tracking-widest">Ratios Map</span>
              </div>

              {/* Progress bars & circular mesh coordinate row */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                
                {/* Left Progress Sliders (spans 7 cols) */}
                <div className="sm:col-span-7 space-y-3">
                  {skillsProgress.map((skill, idx) => (
                    <div key={idx} className="space-y-1 text-left">
                      <div className="flex justify-between font-mono text-[9px] font-bold text-slate-300 uppercase">
                        <span>{skill.name}</span>
                        <span className={getAccentClass()}>{skill.rating}%</span>
                      </div>
                      
                      <div className="w-full h-1.5 bg-slate-900 border border-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${skill.rating}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                          className={cn(
                            "h-full rounded-full",
                            accentColor === "cyan" && "bg-[#06b6d4]",
                            accentColor === "purple" && "bg-[#a855f7]",
                            accentColor === "amber" && "bg-[#f97316]"
                          )} 
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right circular vector Skills Compass (spans 5 cols) */}
                <div className="sm:col-span-5 flex justify-center items-center select-none relative">
                  
                  {/* Rotating Coordinate SVG Compass Grid */}
                  <svg viewBox="0 0 100 100" className="w-32 h-32 opacity-25 animate-spin-slow">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="3, 3" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="15" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="1, 2" />
                    <line x1="5" y1="50" x2="95" y2="50" stroke="white" strokeWidth="0.5" />
                    <line x1="50" y1="5" x2="50" y2="95" stroke="white" strokeWidth="0.5" />
                    <ellipse cx="50" cy="50" rx="35" ry="10" stroke="white" strokeWidth="0.5" />
                    <ellipse cx="50" cy="50" rx="10" ry="35" stroke="white" strokeWidth="0.5" />
                  </svg>

                  {/* Glowing center indicator badge */}
                  <div className={cn(
                    "absolute w-9 h-9 rounded-full border bg-slate-950 flex items-center justify-center font-mono text-[9px] font-bold shadow-lg shadow-black/80",
                    accentColor === "cyan" && "border-[#06b6d4]/40 text-[#06b6d4]",
                    accentColor === "purple" && "border-[#a855f7]/40 text-[#a855f7]",
                    accentColor === "amber" && "border-[#f97316]/40 text-[#f97316]"
                  )}>
                    &lt;/&gt;
                  </div>
                </div>

              </div>
            </div>

            {/* Box 2: Tech Stack Grid of icons */}
            <div className="obsidian-card p-5 rounded-2xl border border-white/5 relative">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-4">
                <span className="font-mono text-xs font-bold text-slate-300 uppercase">
                  Tech Stack
                </span>
                <span className="font-mono text-[8px] text-slate-500 uppercase">Familiar Tools</span>
              </div>

              {/* Stack items (Text representation matching visual screenshot badge logos) */}
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[9px] font-bold">
                <span className="px-3 py-1.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">🐍 PYTHON</span>
                <span className="px-3 py-1.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">🛠️ C++</span>
                <span className="px-3 py-1.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">☕ JAVA</span>
                <span className="px-3 py-1.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">📊 SQL</span>
                <span className="px-3 py-1.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">📦 DOCKER</span>
                <span className="px-3 py-1.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">⚡ GITHUB ACTIONS</span>
                <span className="px-3 py-1.5 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20">💻 TABLEAU</span>
              </div>
            </div>

            {/* Box 3: Achievements Block */}
            <div className="obsidian-card p-5 rounded-2xl border border-white/5 relative">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-4">
                <span className="font-mono text-xs font-bold text-slate-300 flex items-center gap-1.5 uppercase">
                  <Award size={13} className={getAccentClass()} />
                  Achievements
                </span>
                <span className="font-mono text-[8px] text-slate-500 uppercase">Key Strengths</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.015] flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Award size={14} />
                  </div>
                  <div>
                    <h4 className="font-heading text-[11px] font-bold text-slate-200 uppercase tracking-wide">Event Coordinator</h4>
                    <p className="text-[9px] text-slate-400 font-sans leading-normal mt-0.5">Led media and directed video planning for college scaling events successfully.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.015] flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <Users size={14} />
                  </div>
                  <div>
                    <h4 className="font-heading text-[11px] font-bold text-slate-200 uppercase tracking-wide">Team Player</h4>
                    <p className="text-[9px] text-slate-400 font-sans leading-normal mt-0.5">Facilitated CI/CD workshops and collaborated in diverse project contexts.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDE: FEATURED PROJECTS (spans 7 cols on lg) ================= */}
          <div id="projects-section" className="lg:col-span-7 flex flex-col gap-6 text-left scroll-mt-20">
            
            {/* Main Featured Project Carousel Container */}
            <div className="obsidian-card rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between spotlight-shine relative shadow-2xl min-h-[580px]">
              
              {/* Decorative top accent colored divider */}
              <div className={cn(
                "absolute top-0 left-0 right-0 h-[2px]",
                accentColor === "cyan" && "bg-gradient-to-r from-cyan-500 to-teal-500",
                accentColor === "purple" && "bg-gradient-to-r from-purple-500 to-indigo-500",
                accentColor === "amber" && "bg-gradient-to-r from-amber-500 to-orange-500"
              )} />

              {/* Card Header with Page Controls */}
              <div className="p-6 md:p-8 flex items-center justify-between border-b border-white/5 pb-4">
                <span className="font-mono text-xs font-bold text-slate-300 flex items-center gap-1.5 uppercase">
                  <FolderGit2 size={13} className={getAccentClass()} />
                  Featured Project
                </span>
                
                {/* Carousel Page controller nodes */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handlePrevProject}
                    className="w-7 h-7 rounded bg-slate-900 border border-white/5 hover:border-white/15 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                    title="Previous Project"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <span className="font-mono text-[9px] text-slate-500 font-bold select-none px-1">
                    {activeProjectIdx + 1} / {portfolioData.projects.length}
                  </span>
                  <button 
                    onClick={handleNextProject}
                    className="w-7 h-7 rounded bg-slate-900 border border-white/5 hover:border-white/15 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                    title="Next Project"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>

              {/* Dynamic Project Content */}
              <AnimatePresence mode="wait">
                {portfolioData.projects.map((project: Project, idx: number) => {
                  if (idx !== activeProjectIdx) return null;
                  
                  return (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="p-6 md:p-8 flex flex-col space-y-6 flex-1 justify-between"
                    >
                      
                      {/* Simulated Screen/Dashboard Frame holding the project image */}
                      <div className="relative w-full aspect-video rounded-lg border border-white/5 bg-[#09090d] shadow-inner overflow-hidden group select-none flex items-center justify-center">
                        <div className="absolute top-2 left-2 flex gap-1 z-20">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                        </div>
                        
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-[1.02] filter contrast-105 brightness-90 transition-transform duration-700" 
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop";
                          }}
                        />
                        
                        {/* Interactive category float tag */}
                        <span className="absolute bottom-2.5 right-2.5 font-mono text-[8px] font-bold px-2 py-0.5 rounded bg-[#050508]/85 text-slate-400 border border-white/5 uppercase tracking-widest z-10">
                          {project.category}
                        </span>
                      </div>

                      {/* Text content details & highlights */}
                      <div className="space-y-4 text-left">
                        <div className="space-y-1">
                          <h3 className="font-heading text-lg md:text-xl font-bold tracking-wider text-slate-100 uppercase">
                            {project.title}
                          </h3>
                          <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans">
                            {project.longDescription || project.description}
                          </p>
                        </div>

                        {/* Bullet Highlights checklist */}
                        <div className="space-y-1.5 pt-1">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-bold">Key Highlights:</span>
                          <ul className="grid grid-cols-1 gap-1 text-[10px] text-slate-400 font-mono">
                            {project.highlights.map((highlight, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-1.5 leading-normal">
                                <span className={cn("text-xs leading-none shrink-0 mt-0.5", getAccentClass())}>•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Card Footer actions & tech tags */}
                      <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                        {/* Tech stack badge tags */}
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((techItem, tIdx) => (
                            <span
                              key={tIdx}
                              className="font-mono text-[8px] font-semibold px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5 tracking-wide uppercase"
                            >
                              {techItem}
                            </span>
                          ))}
                        </div>

                        {/* Links to live / github */}
                        <div className="flex items-center gap-4">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 font-mono text-[10px] text-slate-400 hover:text-slate-100 transition-colors uppercase tracking-wider"
                            >
                              <svg viewBox="0 0 24 24" width="11" height="11" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                              </svg>
                              <span>SOURCE CODE</span>
                            </a>
                          )}

                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cn(
                                "flex items-center gap-1 font-heading text-[10px] font-bold px-3 py-1.5 rounded transition-all duration-300 tracking-wider",
                                getAccentBgClass()
                              )}
                            >
                              <ExternalLink size={10} />
                              <span>VIEW PROJECT</span>
                            </a>
                          )}
                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
