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
        fill="#1e1b4b"
      />

      {/* ── Ambient glow blobs ── */}
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-zinc-800/[0.03] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-zinc-900/[0.02] blur-[120px] rounded-full pointer-events-none" />

      {/* ── Main grid ── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-4 max-w-7xl mx-auto w-full px-6 md:px-12 py-24 lg:py-0 min-h-screen">
        {/* ─────────────── LEFT: Typography & CTAs ─────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          className="flex flex-col space-y-8 z-10"
        >
          {/* Profile image – visible on all screens, clean & minimal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6, ease: EASE_OUT_EXPO }}
            className="flex items-center gap-8"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-zinc-700 shadow-xl flex-shrink-0">
              <Image
                src="/assets/profile/profile.png"
                alt="Mokash Kumar"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                {portfolioData.name}
              </p>
              <p className="text-base md:text-lg text-zinc-400 mt-2 font-medium">
                {portfolioData.title}
              </p>
            </div>
          </motion.div>

          {/* Hero heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: EASE_OUT_EXPO }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-heading font-extrabold tracking-tighter leading-[1.05]"
          >
            <span className="text-white">Where Engineering</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
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
            crafting visual stories where engineering logic meets creative thinking.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className={cn(
                "inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold",
                "bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black",
                "shadow-md active:scale-95 transition-all duration-300"
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
                "border border-zinc-800 bg-transparent text-zinc-300",
                "hover:bg-zinc-900/60 hover:text-white",
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
          <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-t from-[#050607] via-transparent to-[#050607]/40" />

          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050607] to-transparent pointer-events-none z-20" />
    </section>
  );
}
