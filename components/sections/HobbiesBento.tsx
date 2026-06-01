"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Sparkles, Camera, BookOpen, Music, BrainCircuit } from "lucide-react";

interface HobbiesBentoProps {
  accentColor: "purple" | "cyan" | "amber";
}

export const HobbiesBento: React.FC<HobbiesBentoProps> = ({ accentColor }) => {
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

  const getHobbyIcon = (icon: string) => {
    switch (icon) {
      case "camera":
        return <Camera className="w-4 h-4 text-emerald-400" />;
      case "music":
        return <Music className="w-4 h-4 text-cyan-400" />;
      case "book":
        return <BookOpen className="w-4 h-4 text-purple-400" />;
      case "sparkles":
      default:
        return <BrainCircuit className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section className="relative w-full py-12 px-6 md:px-12 overflow-hidden bg-[#0c0c12]/20 border-t border-white/5">
      <div className="max-w-6xl w-full mx-auto flex flex-col space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-1 items-center text-center">
          <h2 className="font-mono text-xl md:text-2xl font-bold tracking-wider text-slate-100 uppercase">
            {portfolioData.nickname}&apos;s Hobbies
          </h2>
          <p className="text-slate-500 font-mono text-[9px] md:text-xs uppercase tracking-widest">
            I like to stay active — the hobbies are active almost every day
          </p>
        </div>

        {/* 2x2 Bento Grid matching Radnaabazar mockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Visual Storyteller */}
          <div className="obsidian-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between space-y-4 shadow-xl spotlight-shine min-h-[220px] relative overflow-hidden group">
            <div className="flex items-center justify-between z-10">
              <span className="font-mono text-xs font-bold text-slate-300 flex items-center gap-2">
                {getHobbyIcon("camera")}
                Visual Storyteller
              </span>
              <Sparkles size={11} className={getAccentClass()} />
            </div>
            
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed z-10">
              Photography, videography, and content creation. I enjoy capturing real moments and turning them into meaningful visual stories, whether for events, projects, or social media.
            </p>

            {/* Simulated cinematic camera lens/grid asset overlay */}
            <div className="absolute right-[-40px] bottom-[-40px] w-48 h-48 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
              <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="1">
                <circle cx="50" cy="50" r="40" />
                <circle cx="50" cy="50" r="30" />
                <circle cx="50" cy="50" r="15" />
                <line x1="10" y1="50" x2="90" y2="50" />
                <line x1="50" y1="10" x2="50" y2="90" />
              </svg>
            </div>
          </div>

          {/* Card 2: Enjoyer of Good Books */}
          <div className="obsidian-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between space-y-4 shadow-xl spotlight-shine min-h-[220px] relative overflow-hidden group">
            <div className="flex items-center justify-between z-10">
              <span className="font-mono text-xs font-bold text-slate-300 flex items-center gap-2">
                {getHobbyIcon("book")}
                Curious Reader
              </span>
              <span className="font-mono text-[9px] text-slate-500 uppercase">Self-Growth</span>
            </div>
            
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed z-10">
              Actively studying self-growth and creative thinking. Reading helps me optimize my mental frameworks, escape cognitive blocks, and discover unique angles to apply to software and designs.
            </p>

            {/* Book Thumbnails Visual Stack */}
            <div className="flex items-center gap-3 pt-2 z-10">
              <div className="bg-gradient-to-tr from-purple-900 to-indigo-950 border border-purple-500/20 px-3 py-1.5 rounded font-mono text-[9px] text-slate-300 shadow-md transform group-hover:translate-y-[-4px] transition-transform duration-300">
                📚 Art of Not Overthinking
              </div>
              <div className="bg-gradient-to-tr from-slate-900 to-slate-950 border border-slate-700/30 px-3 py-1.5 rounded font-mono text-[9px] text-slate-400 shadow-md transform group-hover:translate-y-[-2px] transition-transform duration-300">
                🎨 Steal Like an Artist
              </div>
            </div>
          </div>

          {/* Card 3: Music & Editing Enthusiast */}
          <div className="obsidian-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between space-y-4 shadow-xl spotlight-shine min-h-[220px] relative overflow-hidden group">
            <div className="flex items-center justify-between z-10">
              <span className="font-mono text-xs font-bold text-slate-300 flex items-center gap-2">
                {getHobbyIcon("music")}
                Audio Deck Editor
              </span>
              <span className="font-mono text-[9px] text-slate-500 uppercase">FM 92.6</span>
            </div>
            
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed z-10">
              Listen to music, edit videos, make reels, and write engaging scripts. Working at MUET FM 92.6 and editing audio/video has instilled a deep love for sound mixing and podcast editing.
            </p>

            {/* Simulated guitar / player deck thumbnail as in the mockup */}
            <div className="h-10 w-full bg-slate-900/60 rounded border border-white/5 flex items-center justify-between px-3 z-10 overflow-hidden relative">
              <span className="font-mono text-[9px] text-[#06b6d4] truncate pr-2 flex items-center gap-1.5">
                <span className="flex gap-0.5 items-end h-2 w-3">
                  <span className="bg-cyan-500 w-[1.5px] h-full animate-pulse" />
                  <span className="bg-cyan-500 w-[1.5px] h-1/2 animate-pulse" />
                  <span className="bg-cyan-500 w-[1.5px] h-3/4 animate-pulse" />
                </span>
                Sherry Soofi - Out of Reach
              </span>
              <span className="font-mono text-[8px] text-slate-500">01:45</span>
            </div>
          </div>

          {/* Card 4: AI & Polyglot aspirations */}
          <div className="obsidian-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between space-y-4 shadow-xl spotlight-shine min-h-[220px] relative overflow-hidden group">
            <div className="flex items-center justify-between z-10">
              <span className="font-mono text-xs font-bold text-slate-300 flex items-center gap-2">
                {getHobbyIcon("sparkles")}
                AI & Automation Chaser
              </span>
              <span className="font-mono text-[9px] text-slate-500 uppercase">Future goals</span>
            </div>
            
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed z-10">
              Deeply interested in learning and exploring neural models, building custom automation pipelines, and understanding advanced DSA inside of Java to create high-efficiency tools.
            </p>

            {/* Simulated floating wireframe globe sphere inside card background */}
            <div className="absolute right-[-20px] bottom-[-20px] w-36 h-36 opacity-10 pointer-events-none group-hover:rotate-45 transition-transform duration-[4000ms] ease-linear">
              <svg viewBox="0 0 100 100" stroke="rgba(16,185,129,0.5)" strokeWidth="0.8" fill="none">
                <circle cx="50" cy="50" r="40" />
                <ellipse cx="50" cy="50" rx="40" ry="15" />
                <ellipse cx="50" cy="50" rx="15" ry="40" />
                <line x1="50" y1="10" x2="50" y2="90" />
                <line x1="10" y1="50" x2="90" y2="50" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default HobbiesBento;
