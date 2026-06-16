"use client";

import React from "react";
import { motion } from "framer-motion";
import { MoveRight, Sparkles, Download } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { portfolioData } from "@/data/portfolio";

// Shared easing curve for all animations
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function SplineHero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Spotlight (hero-scoped only) ── */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="cyan"
      />

      {/* ── Ambient glow blobs ── */}
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-cyan-500/[0.07] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-purple-500/[0.05] blur-[120px] rounded-full pointer-events-none" />

      {/* ── Main grid ── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-4 max-w-7xl mx-auto w-full px-6 md:px-12 py-24 lg:py-0 min-h-screen">
        {/* ─────────────── LEFT: Typography & CTAs ─────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          className="flex flex-col space-y-8 z-10"
        >
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-zinc-900/60 border border-zinc-800 text-xs font-medium text-zinc-400 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              Available for opportunities
            </span>
          </motion.div>

          {/* Profile image – visible on all screens, floats gently */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6, ease: EASE_OUT_EXPO }}
            className="flex items-center gap-6"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-zinc-700 shadow-[0_0_30px_rgba(34,211,238,0.15)] flex-shrink-0"
            >
              <Image
                src="/assets/profile/profile.png"
                alt="Mokash Kumar"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <div>
              <p className="text-lg md:text-xl font-bold text-white">
                {portfolioData.name}
              </p>
              <p className="text-xs md:text-sm text-zinc-400 mt-1">
                {portfolioData.title}
              </p>
            </div>
          </motion.div>

          {/* Hero heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: EASE_OUT_EXPO }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-heading font-bold tracking-tighter leading-[1.05]"
          >
            <span className="text-white">Where Engineering</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500">
              Meets Creativity
            </span>
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Building robust web applications, exploring machine learning, and
            crafting visual stories — where engineering logic meets infinite
            creative boundaries.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className={cn(
                "inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold",
                "bg-cyan-500 hover:bg-cyan-400 text-black",
                "shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]",
                "transition-all duration-300 active:scale-95"
              )}
            >
              View My Work <MoveRight className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-medium",
                "border border-zinc-700 bg-zinc-900/50 text-zinc-300",
                "hover:bg-zinc-800/80 hover:border-zinc-600 hover:text-white",
                "transition-all duration-300 active:scale-95 backdrop-blur-sm"
              )}
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </motion.div>
        </motion.div>

        {/* ─────────────── RIGHT: Spline 3D Scene ─────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: EASE_OUT_EXPO }}
          className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px]"
        >
          {/* Soft vignette edges so the 3D scene blends into the dark bg */}
          <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-[#050607] via-transparent to-transparent lg:block hidden" />
          <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-t from-[#050607] via-transparent to-[#050607]/30" />

          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050607] to-transparent pointer-events-none z-20" />
    </section>
  );
}
