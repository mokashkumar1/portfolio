"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThankYouBannerProps {
  accentColor: "purple" | "cyan" | "amber";
}

export const ThankYouBanner: React.FC<ThankYouBannerProps> = ({
  accentColor,
}) => {
  const getAccentHighlightClass = () => {
    switch (accentColor) {
      case "cyan":
        return "text-[#06b6d4] drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]";
      case "amber":
        return "text-[#f59e0b] drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]";
      case "purple":
      default:
        return "text-[#a855f7] drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]";
    }
  };

  return (
    <div className="w-full px-6 md:px-12 py-8 mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="obsidian-card p-12 rounded-3xl border border-white/5 bg-gradient-to-tr from-[#0f0f15]/80 to-[#121218]/40 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center spotlight-shine min-h-[220px]">
          
          {/* Subtle neon glowing corner lights */}
          <div className="absolute bottom-0 left-4 w-2 h-20 rounded-full bg-cyan-500/25 blur-md" />
          <div className="absolute bottom-0 right-4 w-2 h-20 rounded-full bg-emerald-500/25 blur-md" />

          <div className="space-y-4 z-10 max-w-lg">
            <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 font-bold flex items-center justify-center gap-1">
              <Sparkles size={11} className={cn("animate-pulse", getAccentHighlightClass())} />
              End of Transmission
            </span>

            <h3 className="font-mono text-xl md:text-3xl lg:text-4xl font-bold tracking-wider text-slate-100 uppercase">
              For visiting my profile <br />
              <span className={getAccentHighlightClass()}>Thank you.</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThankYouBanner;
