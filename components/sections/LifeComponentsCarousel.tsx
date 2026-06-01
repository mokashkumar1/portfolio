"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface LifeComponentsCarouselProps {
  accentColor: "purple" | "cyan" | "amber";
}

export const LifeComponentsCarousel: React.FC<LifeComponentsCarouselProps> = ({
  accentColor,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = portfolioData.lifeCarousel;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
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
        return "bg-[#06b6d4] hover:bg-[#06b6d4]/80 text-slate-950";
      case "amber":
        return "bg-[#f59e0b] hover:bg-[#f59e0b]/80 text-slate-950";
      case "purple":
      default:
        return "bg-[#a855f7] hover:bg-[#a855f7]/80 text-slate-950";
    }
  };

  return (
    <section className="relative w-full py-12 px-6 md:px-12 overflow-hidden bg-[#0a0a0e]/40">
      <div className="max-w-6xl w-full mx-auto flex flex-col space-y-8">
        
        {/* Title matches mockup */}
        <div className="flex flex-col space-y-1 text-left">
          <span className="font-mono text-[9px] md:text-xs uppercase tracking-widest text-slate-500 font-bold flex items-center gap-1.5">
            <Layers size={12} className={getAccentClass()} />
            Visual Pillars
          </span>
          <h2 className="font-mono text-xl md:text-2xl font-bold tracking-wider text-slate-100 uppercase mt-1">
            Components of {portfolioData.nickname}&apos;s Life
          </h2>
        </div>

        {/* Desktop grid layout / Mobile sliding carousel layout */}
        <div className="hidden lg:grid grid-cols-3 gap-6 pt-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="obsidian-card rounded-2xl border border-white/5 h-[340px] overflow-hidden relative group spotlight-shine cursor-pointer"
            >
              {/* Image with zoom on hover */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-700 pointer-events-none filter brightness-[0.7] saturate-[0.8]"
              />
              
              {/* Bottom text overlay gradient card */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12] via-transparent to-transparent flex flex-col justify-end p-6 space-y-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#10b981] font-bold">
                  {item.subtitle}
                </span>
                
                <h3 className="font-mono text-base font-bold text-slate-100 tracking-wider">
                  {item.title}
                </h3>
                
                <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Slider view */}
        <div className="lg:hidden flex flex-col space-y-6 pt-2">
          <div className="obsidian-card rounded-2xl border border-white/5 h-[320px] overflow-hidden relative spotlight-shine">
            <img
              src={items[activeIndex].image}
              alt={items[activeIndex].title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 filter brightness-[0.7] saturate-[0.8]"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12] via-transparent to-transparent flex flex-col justify-end p-6 space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#10b981] font-bold">
                {items[activeIndex].subtitle}
              </span>
              <h3 className="font-mono text-base font-bold text-slate-100 tracking-wider">
                {items[activeIndex].title}
              </h3>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                {items[activeIndex].description}
              </p>
            </div>
          </div>

          {/* Carousel arrow triggers */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-slate-400 hover:text-slate-200 bg-white/5 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dot markers */}
            <div className="flex items-center gap-1.5">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeIndex === idx ? getAccentBgClass() : "bg-white/10"
                  )}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-slate-400 hover:text-slate-200 bg-white/5 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
export default LifeComponentsCarousel;
