"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Sparkles, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface PersonalHeroProps {
  accentColor: "purple" | "cyan" | "amber";
}

export const PersonalHero: React.FC<PersonalHeroProps> = ({ accentColor }) => {

  const getAccentBorderClass = () => {
    switch (accentColor) {
      case "cyan":
        return "border-[#06b6d4] hover:bg-[#06b6d4]/10";
      case "amber":
        return "border-[#f59e0b] hover:bg-[#f59e0b]/10";
      case "purple":
      default:
        return "border-[#a855f7] hover:bg-[#a855f7]/10";
    }
  };

  const handleLetterClick = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full py-16 md:py-20 px-6 md:px-12 flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background spot light glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-[radial-gradient(circle,rgba(16,185,129,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-3xl w-full mx-auto space-y-6 z-10">
        <div className="flex items-center justify-center gap-1.5 font-mono text-xs tracking-widest text-[#10b981] font-bold uppercase">
          <Sparkles size={13} className="animate-spin-slow" />
          <span>Personal Space</span>
        </div>

        <div className="space-y-3">
          <h1 className="font-mono text-3xl md:text-5xl font-bold tracking-wider text-slate-100 uppercase">
            Hello again? <br />
            My nickname is{" "}
            <span className="bg-slate-800 border border-white/10 px-3 py-1 rounded text-slate-100 shadow-md">
              {portfolioData.nickname}
            </span>
          </h1>
          
          <p className="text-slate-300 font-mono text-sm md:text-base max-w-lg mx-auto pt-3 leading-relaxed">
            {portfolioData.vibeText}
          </p>
        </div>

        {/* Mockup sub-bar "Ara is Persistent. Built this website with love" */}
        <div className="flex items-center justify-center gap-1.5 text-slate-500 font-mono text-[10px] md:text-xs pt-1">
          <span>{portfolioData.nickname} is Curious</span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1">
            Built this website with love <Heart size={10} className="fill-red-500 stroke-red-500 animate-pulse" />
          </span>
        </div>

        {/* Action Button: "Write a letter" (which scrolls down to the contact terminal!) */}
        <div className="pt-4">
          <button
            onClick={handleLetterClick}
            className={cn(
              "font-mono text-[10px] md:text-xs font-bold px-6 py-2.5 rounded border bg-white/5 transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,0,0,0.3)] uppercase tracking-widest",
              getAccentBorderClass()
            )}
          >
            Write a Letter →
          </button>
        </div>

      </div>
    </section>
  );
};
export default PersonalHero;
