"use client";

import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import { Clock, CheckSquare, Music, Play, Pause, Sparkles, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveWidgetsProps {
  accentColor: "purple" | "cyan" | "amber";
}

export const InteractiveWidgets: React.FC<InteractiveWidgetsProps> = ({
  accentColor,
}) => {
  // Audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundBars, setSoundBars] = useState<number[]>([12, 18, 14, 28, 22, 10, 16, 24, 12, 18, 14, 20]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Future plans checklist interactive state
  const [checkedPlans, setCheckedPlans] = useState<boolean[]>(
    new Array(portfolioData.futurePlans.length).fill(false)
  );

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

  const handleTogglePlan = (index: number) => {
    const nextPlans = [...checkedPlans];
    nextPlans[index] = !nextPlans[index];
    setCheckedPlans(nextPlans);
  };

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
        return "bg-[#06b6d4] hover:bg-[#06b6d4]/90 text-slate-950";
      case "amber":
        return "bg-[#f59e0b] hover:bg-[#f59e0b]/90 text-slate-950";
      case "purple":
      default:
        return "bg-[#a855f7] hover:bg-[#a855f7]/90 text-slate-950";
    }
  };

  return (
    <section className="relative w-full py-12 px-6 md:px-12 overflow-hidden bg-[#0a0a0e]/60 border-t border-white/5">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Widget 1: Daily Routine (4 cols) */}
        <div className="md:col-span-12 lg:col-span-4 obsidian-card rounded-2xl border border-white/5 p-5 shadow-2xl relative min-h-[360px] bg-[#0c1616]/70 border-[#10b981]/15">
          <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
            <span className="font-mono text-xs font-bold text-slate-300 flex items-center gap-1.5 uppercase">
              <Clock size={13} className="text-emerald-400" />
              Daily routine
            </span>
            <span className="font-mono text-[8px] text-slate-500 uppercase">24h Schedule</span>
          </div>

          <div className="space-y-4">
            {portfolioData.routine.map((item, idx) => (
              <div key={idx} className="flex gap-3 relative group">
                {/* Timeline connector thread */}
                {idx !== portfolioData.routine.length - 1 && (
                  <span className="absolute left-[15.5px] top-[14px] bottom-[-22px] w-[1.5px] bg-[#10b981]/15 group-hover:bg-[#10b981]/30 transition-colors" />
                )}
                
                {/* Timeline marker */}
                <span className="w-8 shrink-0 font-mono text-[9px] font-bold text-emerald-400 pt-0.5">
                  {item.time}
                </span>

                <div className="flex-1 space-y-0.5 pb-1">
                  <h4 className="font-mono text-[11px] font-semibold text-slate-200 uppercase tracking-wide group-hover:text-emerald-400 transition-colors">
                    {item.activity}
                  </h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed font-sans">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Widget 2: Future Plans (4 cols) */}
        <div className="md:col-span-6 lg:col-span-4 obsidian-card rounded-2xl border border-white/5 p-5 shadow-2xl relative min-h-[360px]">
          <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
            <span className="font-mono text-xs font-bold text-slate-300 flex items-center gap-1.5 uppercase">
              <CheckSquare size={13} className={getAccentClass()} />
              Future plan
            </span>
            <span className="font-mono text-[8px] text-slate-500 uppercase">Click to toggle</span>
          </div>

          <div className="space-y-3">
            {portfolioData.futurePlans.map((plan, idx) => (
              <div
                key={idx}
                onClick={() => handleTogglePlan(idx)}
                className="flex items-start gap-2.5 cursor-pointer group select-none"
              >
                {/* Custom active checkbox */}
                <div className={cn(
                  "w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300",
                  checkedPlans[idx] 
                    ? "bg-[#10b981] border-[#10b981] text-slate-950 scale-105" 
                    : "border-white/10 bg-slate-900 group-hover:border-white/20"
                )}>
                  {checkedPlans[idx] && <Check size={10} className="stroke-[3.5]" />}
                </div>

                <span className={cn(
                  "font-mono text-[10px] leading-relaxed transition-all duration-300",
                  checkedPlans[idx]
                    ? "text-slate-500 line-through"
                    : "text-slate-300 group-hover:text-slate-100"
                )}>
                  {plan}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Widget 3: Music Player Deck & Stats stack (4 cols) */}
        <div className="md:col-span-6 lg:col-span-4 flex flex-col gap-6">
          
          {/* Soundboard Audio Player Card */}
          <div className="obsidian-card p-5 rounded-2xl border border-white/5 shadow-2xl relative bg-gradient-to-br from-indigo-950/20 to-purple-950/20">
            <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-4">
              <Music size={13} className="text-purple-400" />
              <span className="font-mono text-xs font-bold text-slate-300 uppercase">
                Focus Deck Soundboard
              </span>
            </div>

            {/* Song cover art and control block */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-900 border border-white/10 flex items-center justify-center shadow-lg overflow-hidden group shrink-0">
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
                    <Sparkles size={16} className="text-white/40 group-hover:scale-110 transition-transform duration-300" />
                    {/* Simulated CD circular spin */}
                    <div className={cn("absolute inset-1 rounded-full border border-dashed border-white/5", isPlaying ? "animate-spin-slow" : "")} />
                  </>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-mono text-xs font-bold text-slate-100 uppercase tracking-wider truncate">
                  {portfolioData.musicTrack.title}
                </h4>
                <p className="text-[10px] text-slate-400 font-mono tracking-wide truncate">
                  {portfolioData.musicTrack.artist}
                </p>
                
                {/* Soundbars frequency waves indicator */}
                <div className="flex gap-[2px] items-end h-7 pt-2">
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

            {/* Player play/pause toggle button */}
            <div className="pt-4 mt-2 border-t border-white/5 flex items-center justify-between">
              <span className="font-mono text-[8px] text-slate-500 uppercase tracking-wider">
                {isPlaying ? "Playing deck active" : "Audio player idle"}
              </span>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={cn(
                  "flex items-center gap-1 font-mono text-[9px] font-bold px-3 py-1 rounded-full shadow-md transition-all duration-300 transform active:scale-95",
                  getAccentBgClass()
                )}
              >
                {isPlaying ? (
                  <>
                    <Pause size={10} fill="currentColor" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play size={10} fill="currentColor" />
                    Play
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Vertical Counters list (exact match to Radnaabazar mockup) */}
          <div className="flex flex-col gap-2">
            
            {/* Counter 1: Books read */}
            <div className="flex items-center justify-between p-2 px-3 rounded-lg bg-cyan-950/10 border border-cyan-500/10 text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
              <span>Books read</span>
              <span className="bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded text-[9px]">
                {portfolioData.personalCounters.booksRead}
              </span>
            </div>

            {/* Counter 2: Videos edited */}
            <div className="flex items-center justify-between p-2 px-3 rounded-lg bg-purple-950/10 border border-purple-500/10 text-purple-400 font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
              <span>Videos Edited</span>
              <span className="bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded text-[9px]">
                +{portfolioData.personalCounters.videosEdited}
              </span>
            </div>

            {/* Counter 3: Git commits */}
            <div className="flex items-center justify-between p-2 px-3 rounded-lg bg-amber-950/10 border border-amber-500/10 text-amber-400 font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
              <span>Git Commits</span>
              <span className="bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded text-[9px]">
                +{portfolioData.personalCounters.gitCommits}
              </span>
            </div>

            {/* Counter 4: Coffee/Chai consumed */}
            <div className="flex items-center justify-between p-2 px-3 rounded-lg bg-emerald-950/10 border border-emerald-500/10 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
              <span>Chai Consumed</span>
              <span className="bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded text-[9px]">
                {portfolioData.personalCounters.chaiConsumed}
              </span>
            </div>

            {/* Counter 5: ML Models built */}
            <div className="flex items-center justify-between p-2 px-3 rounded-lg bg-orange-950/10 border border-orange-500/10 text-orange-400 font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
              <span>ML Models Built</span>
              <span className="bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded text-[9px]">
                +{portfolioData.personalCounters.mlModels}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default InteractiveWidgets;
