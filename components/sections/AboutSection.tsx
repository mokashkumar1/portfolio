"use client";

import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import { 
  User, 
  Mail, 
  Music, 
  Play, 
  Pause, 
  Sparkles, 
  Clock, 
  Compass, 
  Flame 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExpandableSkillTags } from "@/components/ui/expandable-skill-tags";

interface AboutSectionProps {
  accentColor: "purple" | "cyan" | "amber";
}

export const AboutSection: React.FC<AboutSectionProps> = ({ accentColor }) => {
  // Audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundBars, setSoundBars] = useState<number[]>([12, 18, 14, 28, 22, 10, 16, 24, 12, 18, 14, 20]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize and manage audio element
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(portfolioData.musicTrack.url);
      audioRef.current.loop = true;
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Sync play/pause state with audio element
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.warn("Audio playback failed or was interrupted:", err);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Sound frequency animation effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isPlaying) {
      interval = setInterval(() => {
        setSoundBars((prev) =>
          prev.map(() => Math.floor(Math.random() * 24) + 6)
        );
      }, 100);
    } else {
      setSoundBars([6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

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

  return (
    <section id="about-section" className="relative w-full py-16 px-6 md:px-12 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col space-y-8">
        
        {/* Core 12-Column Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* ================= COLUMN 1: LEFT STACK (spans 4 cols on desktop) ================= */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-6">
            
            {/* Card 1: About Me Widget */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="obsidian-card p-6 rounded-2xl flex flex-col justify-between min-h-[300px] spotlight-shine relative overflow-hidden group border border-white/5"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <span className="font-mono text-xs font-bold text-slate-300 flex items-center gap-2 uppercase">
                  <User size={13} className={getAccentClass()} />
                  About Me
                </span>
                <Sparkles size={11} className={getAccentClass()} />
              </div>
              
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans mb-6">
                {portfolioData.aboutText}
              </p>

              {/* Dynamic Social Connect Buttons (LinkedIn, GitHub, Instagram, Email) */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <a
                  href={`https://${portfolioData.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/5 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#f97316]/30 hover:bg-[#f97316]/5 transition-all duration-300"
                  title="Connect on LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href={`https://${portfolioData.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/5 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#f97316]/30 hover:bg-[#f97316]/5 transition-all duration-300"
                  title="View GitHub Profile"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a
                  href={`https://${portfolioData.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/5 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#f97316]/30 hover:bg-[#f97316]/5 transition-all duration-300"
                  title="Follow on Instagram"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="w-9 h-9 rounded-lg border border-white/5 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#f97316]/30 hover:bg-[#f97316]/5 transition-all duration-300"
                  title="Send Direct Email"
                >
                  <Mail size={14} />
                </a>
              </div>
            </motion.div>

            {/* Card 2: Currently Listening music panel */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="obsidian-card p-6 rounded-2xl flex flex-col justify-between relative bg-gradient-to-br from-indigo-950/10 to-purple-950/10 border border-white/5"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <span className="font-mono text-xs font-bold text-slate-300 flex items-center gap-2 uppercase">
                  <Music size={13} className="text-purple-400" />
                  Currently Listening
                </span>
                <span className="font-mono text-[8px] text-slate-500 uppercase tracking-widest">Focus Deck</span>
              </div>

              <div className="flex items-center gap-4">
                {/* CD Album graphic */}
                <div className="relative w-14 h-14 rounded-lg bg-gradient-to-tr from-purple-600 to-orange-600 border border-white/10 flex items-center justify-center shadow-lg overflow-hidden group shrink-0">
                  {portfolioData.musicTrack.cover ? (
                    <img
                      src={portfolioData.musicTrack.cover}
                      alt={portfolioData.musicTrack.title}
                      className={cn(
                        "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110",
                        isPlaying ? "animate-spin-slow" : ""
                      )}
                    />
                  ) : (
                    <>
                      <span className="text-white/40 text-xs font-mono font-bold select-none">CD</span>
                      <div className={cn("absolute inset-1 rounded-full border border-dashed border-white/10", isPlaying ? "animate-spin-slow" : "")} />
                    </>
                  )}
                </div>

                <div className="flex-1 min-w-0 text-left">
                  <h4 className="font-heading text-xs font-bold text-slate-100 uppercase tracking-wider truncate">
                    {portfolioData.musicTrack.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-mono tracking-wide truncate">
                    {portfolioData.musicTrack.artist}
                  </p>
                  
                  {/* Glowing Sound Frequency Waves */}
                  <div className="flex gap-[2.5px] items-end h-6 pt-2 select-none">
                    {soundBars.map((val, idx) => (
                      <span
                        key={idx}
                        className={cn(
                          "w-[2px] rounded-full transition-all duration-100 bg-gradient-to-t",
                          accentColor === "purple" && "from-purple-500 to-indigo-500",
                          accentColor === "cyan" && "from-cyan-500 to-teal-500",
                          accentColor === "amber" && "from-amber-500 to-yellow-500"
                        )}
                        style={{ height: `${val}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                <span className="font-mono text-[8px] text-slate-500 uppercase tracking-wider">
                  {isPlaying ? "Deck Active" : "Deck Idle"}
                </span>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={cn(
                    "flex items-center gap-1.5 font-heading text-[10px] font-bold px-3 py-1 rounded-full transition-all duration-300 transform active:scale-95",
                    getAccentBgClass()
                  )}
                >
                  {isPlaying ? (
                    <>
                      <Pause size={9} fill="currentColor" />
                      <span>PAUSE</span>
                    </>
                  ) : (
                    <>
                      <Play size={9} fill="currentColor" />
                      <span>PLAY DECK</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

          </div>

          {/* ================= COLUMN 2 & 3: CENTER & RIGHT GRID ================= */}
          <div className="md:col-span-12 lg:col-span-8 flex flex-col gap-6">
            
            {/* Stat Counter cards (2x2 grid, spans full 8 cols) - Cascading Staggered Fades */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              
              {/* Stat 1: Chai */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="obsidian-card p-5 rounded-2xl flex flex-col justify-center text-center items-center relative overflow-hidden group border border-white/5"
              >
                <span className="text-xl mb-1 filter drop-shadow-[0_0_10px_rgba(249,115,22,0.2)]">☕</span>
                <span className="font-heading text-2xl font-black text-white leading-none tracking-tight">
                  {portfolioData.personalCounters.chaiConsumed}
                </span>
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider mt-1.5">
                  Cups of Chai
                </span>
              </motion.div>

              {/* Stat 2: Books */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="obsidian-card p-5 rounded-2xl flex flex-col justify-center text-center items-center relative overflow-hidden group border border-white/5"
              >
                <span className="text-xl mb-1 filter drop-shadow-[0_0_10px_rgba(168,85,247,0.2)]">📚</span>
                <span className="font-heading text-2xl font-black text-white leading-none tracking-tight">
                  {portfolioData.personalCounters.booksRead}
                </span>
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider mt-1.5">
                  Books Read
                </span>
              </motion.div>

              {/* Stat 3: Projects */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="obsidian-card p-5 rounded-2xl flex flex-col justify-center text-center items-center relative overflow-hidden group border border-white/5"
              >
                <span className="text-xl mb-1 filter drop-shadow-[0_0_10px_rgba(6,182,212,0.2)]">💻</span>
                <span className="font-heading text-2xl font-black text-white leading-none tracking-tight">
                  {portfolioData.professionalStats.projectsCount}+
                </span>
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider mt-1.5">
                  Projects Built
                </span>
              </motion.div>

              {/* Stat 4: Curiosity */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="obsidian-card p-5 rounded-2xl flex flex-col justify-center text-center items-center relative overflow-hidden group border border-white/5"
              >
                <span className="text-xl mb-1 filter drop-shadow-[0_0_10px_rgba(16,185,129,0.2)]">⚡</span>
                <span className="font-heading text-2xl font-black text-white leading-none tracking-tight">
                  {portfolioData.personalCounters.curiosityLevel}
                </span>
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider mt-1.5">
                  Curiosity Level
                </span>
              </motion.div>

            </div>

            {/* Bottom 3-Card Bento layer (Routine, Hobbies, Image Quote Card) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
              
              {/* Card 3: Daily Routine Schedule (spans 5 cols on sm) */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="sm:col-span-5 obsidian-card p-5 rounded-2xl border border-white/5 flex flex-col min-h-[350px]"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-4">
                  <span className="font-mono text-xs font-bold text-slate-300 flex items-center gap-1.5 uppercase">
                    <Clock size={13} className="text-emerald-400" />
                    Daily Routine
                  </span>
                  <span className="font-mono text-[8px] text-slate-500 uppercase">24H Schedule</span>
                </div>

                <div className="space-y-3.5 text-left overflow-y-auto max-h-[260px] pr-1">
                  {portfolioData.routine.map((item, idx) => (
                    <div key={idx} className="flex gap-3 relative group">
                      {idx !== portfolioData.routine.length - 1 && (
                        <span className="absolute left-[15.5px] top-[14px] bottom-[-22px] w-[1.5px] bg-emerald-500/10 group-hover:bg-emerald-500/25 transition-colors" />
                      )}
                      
                      <span className="w-8 shrink-0 font-mono text-[8px] font-bold text-emerald-400 pt-0.5 select-none">
                        {item.time}
                      </span>

                      <div className="flex-1 space-y-0.5">
                        <h4 className="font-mono text-[10px] font-bold text-slate-200 uppercase tracking-wide group-hover:text-emerald-400 transition-colors">
                          {item.activity}
                        </h4>
                        <p className="text-[9px] text-slate-400 leading-normal font-sans">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Card 4: Hobbies Panel (spans 3 cols on sm) */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="sm:col-span-3 obsidian-card p-5 rounded-2xl border border-white/5 flex flex-col min-h-[350px] text-left"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-4">
                  <span className="font-mono text-xs font-bold text-slate-300 flex items-center gap-1.5 uppercase">
                    <Compass size={13} className="text-amber-400" />
                    Hobbies
                  </span>
                  <Sparkles size={11} className="text-amber-400" />
                </div>

                <ul className="space-y-4 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-300 pt-1.5">
                  <li className="flex items-center gap-2.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 group-hover:scale-125 transition-transform" />
                    <span>Photography</span>
                  </li>
                  <li className="flex items-center gap-2.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 group-hover:scale-125 transition-transform" />
                    <span>Videography</span>
                  </li>
                  <li className="flex items-center gap-2.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 group-hover:scale-125 transition-transform" />
                    <span>Editing</span>
                  </li>
                  <li className="flex items-center gap-2.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 group-hover:scale-125 transition-transform" />
                    <span>Travelling</span>
                  </li>
                  <li className="flex items-center gap-2.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 group-hover:scale-125 transition-transform" />
                    <span>Gaming</span>
                  </li>
                  <li className="flex items-center gap-2.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0 group-hover:scale-125 transition-transform" />
                    <span>Exploring Tech</span>
                  </li>
                </ul>
              </motion.div>

              {/* Card 5: Moments Orange Graphic Card (spans 4 cols on sm) */}
              <motion.div 
                id="hobbies-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="sm:col-span-4 rounded-2xl relative min-h-[350px] overflow-hidden border border-white/5 flex flex-col justify-end p-5 text-left group shadow-2xl scroll-mt-20"
              >
                {/* Visual Background image overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center filter grayscale contrast-110 brightness-50 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out" 
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400&auto=format&fit=crop')` }}
                />
                
                {/* Cyber Orange overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-orange-950/10 mix-blend-overlay group-hover:opacity-30 transition-opacity" />

                <div className="z-10 space-y-1 relative">
                  <div className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-widest text-[#f97316] font-bold pb-2 select-none">
                    <Flame size={10} className="animate-pulse" />
                    <span>Moments</span>
                  </div>
                  
                  <h3 className="font-heading text-lg md:text-xl font-bold tracking-normal leading-tight text-white uppercase">
                    Collect <span className="text-[#f97316] font-black">Moments</span> <br />
                    Not Things.
                  </h3>
                </div>
              </motion.div>

            </div>

          </div>

          {/* ================= SKILLS GRID ================= */}
          <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {portfolioData.skills.map((cat, idx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.1 * idx, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="obsidian-card p-5 rounded-2xl flex flex-col relative overflow-hidden group border border-white/5 bg-zinc-950/40 hover:bg-zinc-950/80 transition-colors"
              >
                <ExpandableSkillTags
                  title={cat.category}
                  skills={cat.items}
                  initialCount={4}
                />
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
