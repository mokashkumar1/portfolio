"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Sparkles } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GooeyText } from "./gooey-text-morphing";

function Hero() {
  const titles = useMemo(
    () => ["Creative", "Analytical", "Driven", "Curious", "Innovative"],
    []
  );

  return (
    <div className="w-full relative z-10">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
            <Button variant="outline" size="sm" className="gap-4 rounded-full px-6 bg-zinc-900/50 hover:bg-zinc-800/80 border border-zinc-800 text-zinc-300">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Available for full-time roles <MoveRight className="w-4 h-4" />
            </Button>
          </motion.div>
          
          <div className="flex gap-2 flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-zinc-800 shadow-[0_0_40px_rgba(34,211,238,0.2)] mb-2"
            >
              <Image 
                src="/assets/profile/profile.png" 
                alt="Moksh Kumar" 
                fill 
                className="object-cover"
                priority
              />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-heading font-bold flex flex-col items-center justify-center">
              <span className="text-zinc-100">Moksh is</span>
              <GooeyText 
                texts={titles}
                morphTime={1.2}
                cooldownTime={2.0}
                className="w-full h-20 md:h-24 mt-2 md:mt-4"
                textClassName="text-cyan-400 font-semibold text-5xl md:text-7xl"
              />
            </h1>
          </div>

          <motion.p 
            className="text-lg md:text-xl leading-relaxed tracking-tight text-zinc-400 max-w-2xl text-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Where engineering logic meets infinite creative boundaries. I build robust web applications, explore machine learning, and craft visual stories.
          </motion.p>
          
          <motion.div 
            className="flex flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <a href="#projects" className={cn(buttonVariants({ size: "lg" }), "gap-4 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-full px-8")}>
              View My Work <MoveRight className="w-4 h-4" />
            </a>
            <a href="https://drive.google.com/file/d/1QwVP4oj3UiYuiX0XP-XkFIAgWKsUrPcH/view?usp=sharing" target="_blank" rel="noreferrer" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "gap-4 rounded-full px-8")}>
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
