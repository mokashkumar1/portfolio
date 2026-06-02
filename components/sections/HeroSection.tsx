"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

interface HeroSectionProps {
  accentColor: "purple" | "cyan" | "amber";
}

export const HeroSection: React.FC<HeroSectionProps> = ({ accentColor }) => {
  
  const getAccentClass = () => {
    switch (accentColor) {
      case "cyan":
        return "text-[#06b6d4]";
      case "purple":
        return "text-[#a855f7]";
      case "amber":
      default:
        return "text-[#ff6a00]";
    }
  };

  const getAccentBgClass = () => {
    switch (accentColor) {
      case "cyan":
        return "bg-[#06b6d4] hover:bg-[#06b6d4]/90 text-slate-950 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]";
      case "purple":
        return "bg-[#a855f7] hover:bg-[#a855f7]/90 text-slate-950 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]";
      case "amber":
      default:
        return "bg-[#ff6a00] hover:bg-[#ff6a00]/90 text-slate-950 hover:shadow-[0_0_25px_rgba(255,106,0,0.4)]";
    }
  };

  const getPlayRing = () => {
    switch (accentColor) {
      case "cyan":
        return "border-[#06b6d4] bg-[#06b6d4]/5 text-slate-300";
      case "purple":
        return "border-[#a855f7] bg-[#a855f7]/5 text-slate-300";
      case "amber":
      default:
        return "border-[#ff6a00] bg-[#ff6a00]/5 text-slate-300";
    }
  };

  return (
    <section id="hero-section" className="relative w-full min-h-screen py-16 lg:py-0 overflow-hidden flex items-center scroll-mt-20">
      
      {/* Exact Grid matching tailwind column layout (55% / 45%) */}
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-screen items-center max-w-[1600px] w-full mx-auto px-6 md:px-[60px] gap-12 lg:gap-8">
        
        {/* Left Column: Introductions, Anton Typography & Badges with Sleek Framer Motion Entrance */}
        <motion.div 
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col text-left space-y-7 z-10 py-6 lg:py-0"
        >
          <div className="space-y-3">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="font-mono text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-slate-400"
            >
              HELLO, I&apos;M <span className={cn("font-extrabold uppercase", getAccentClass())}>MOKASH KUMAR</span>
            </motion.span>
            
            {/* Anton Giant Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="hero-title text-white"
            >
              WHERE ENGINEERING <br />
              MEETS <span className={cn("orange", getAccentClass())}>CREATIVITY</span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed font-sans"
          >
            Computer Systems Engineering undergraduate passionate about Data Analytics, Machine Learning, and problem-solving using real-world data.
          </motion.p>

          {/* Three Glowing Category Pills (Engineering, Data & AI, Content Creation) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <span className="font-mono text-[10px] font-bold px-4 py-2 border border-white/10 bg-slate-950/40 rounded flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300">
              <span className={getAccentClass()}>&lt;/&gt;</span> ENGINEERING
            </span>
            <span className="font-mono text-[10px] font-bold px-4 py-2 border border-white/10 bg-slate-950/40 rounded flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300">
              <span className={getAccentClass()}>📊</span> DATA & AI
            </span>
            <span className="font-mono text-[10px] font-bold px-4 py-2 border border-white/10 bg-slate-950/40 rounded flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300">
              <span className={getAccentClass()}>📷</span> CONTENT CREATION
            </span>
          </motion.div>

          {/* Action Call to Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex flex-wrap items-center gap-6 pt-2"
          >
            <a
              href={`https://${portfolioData.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "font-heading text-xs font-bold px-6 py-3.5 rounded flex items-center gap-2 tracking-wider transition-all duration-300 transform active:scale-95 shadow-[0_0_15px_rgba(0,0,0,0.4)]",
                getAccentBgClass()
              )}
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginRight: '2px' }}>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>CONNECT ON LINKEDIN</span>
            </a>
            
            <a
              href={`https://${portfolioData.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-xs font-bold text-slate-300 hover:text-white transition-all duration-300 flex items-center gap-2.5 group py-3"
            >
              <span className={cn("w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:scale-105", getPlayRing())}>
                <GithubIcon size={13} />
              </span>
              <span>GITHUB PROFILE</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D layered profile photo overlaying neon circles (Framer Motion Float effects) */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center items-center relative select-none h-full py-12 lg:py-0 min-h-[460px] lg:min-h-0"
        >
          
          {/* Custom absolute circle image wrapper - Soft Float motion effect */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="image-wrapper relative flex justify-center items-center scale-90 sm:scale-100 transition-transform"
          >
            
            {/* Dynamic Thin Glowing Circle Halo (Sits behind portrait, fully responsive and color-themed) */}
            <div className={cn(
              "absolute rounded-full border-[1.5px] transition-all duration-500 z-0",
              "w-[390px] h-[390px] md:w-[480px] md:h-[480px]",
              accentColor === "cyan" && "border-[#06b6d4]/60 shadow-[0_0_30px_rgba(6,182,212,0.25),inset_0_0_20px_rgba(6,182,212,0.15)]",
              accentColor === "purple" && "border-[#a855f7]/60 shadow-[0_0_30px_rgba(168,85,247,0.25),inset_0_0_20px_rgba(168,85,247,0.15)]",
              accentColor === "amber" && "border-[#ff6a00]/60 shadow-[0_0_30px_rgba(255,106,0,0.25),inset_0_0_20px_rgba(255,106,0,0.15)]"
            )} />
            
            <div className="w-[360px] h-[360px] md:w-[440px] md:h-[440px] z-10 flex items-center justify-center relative drop-shadow-2xl">
              <img
                src="/assets/profile/hero-artwork.png"
                alt="Mokash Kumar Profile"
                className="w-full h-full object-contain filter grayscale contrast-125 brightness-[0.98] hover:scale-[1.02] transition-all duration-[700ms] ease-out pointer-events-none select-none"
                onError={(e) => {
                  e.currentTarget.src = "/assets/profile/profile.png";
                }}
              />
            </div>

            {/* Background Python Code (Low Opacity, z-0, behind picture emerging on right shoulder - exactly as in Mockup 2) */}
            <div className="absolute top-[20%] right-[-10px] sm:right-[-20px] lg:right-[-40px] z-0 font-mono text-[9px] sm:text-[10px] md:text-[11px] leading-relaxed text-slate-400 opacity-[0.25] select-none text-left pointer-events-none transition-all duration-300">
              <span className={getAccentClass()}>def</span> <span className="text-blue-400">solve</span>(problem):<br />
              &nbsp;&nbsp;data = collect()<br />
              &nbsp;&nbsp;data = clean(data)<br />
              &nbsp;&nbsp;model = train(data)<br />
              &nbsp;&nbsp;<span className={getAccentClass()}>return</span> solution<br /><br />
              passion = <span className="text-emerald-400">True</span><br />
              coffee = <span className="text-cyan-400">Infinite</span><br />
              focus = <span className="text-purple-400">Unstoppable</span>
            </div>

            {/* Floating active status card overlaying bottom-right (z-20 sits on top) */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="status-card absolute bottom-[50px] right-[-15px] sm:right-[-20px] z-20 w-[190px] sm:w-[220px] obsidian-card rounded-xl border border-white/5 p-3.5 flex items-center gap-3.5 shadow-2xl backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", 
                  accentColor === "cyan" && "bg-[#06b6d4]",
                  accentColor === "purple" && "bg-[#a855f7]",
                  accentColor === "amber" && "bg-[#ff6a00]"
                )}></span>
                <span className={cn("relative inline-flex rounded-full h-2 w-2", 
                  accentColor === "cyan" && "bg-[#06b6d4]",
                  accentColor === "purple" && "bg-[#a855f7]",
                  accentColor === "amber" && "bg-[#ff6a00]"
                )}></span>
              </span>
              <div className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-wider text-left">
                STATUS:<br />
                <span className="text-slate-100 font-extrabold text-[9px] leading-tight">Building<br />The Future</span>
              </div>
            </motion.div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
