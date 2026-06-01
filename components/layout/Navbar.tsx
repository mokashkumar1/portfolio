"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  accentColor: "purple" | "cyan" | "amber";
  onAccentChange: (color: "purple" | "cyan" | "amber") => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  accentColor,
  onAccentChange,
}) => {
  const [activeLink, setActiveLink] = useState("HOME");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getAccentTextClass = () => {
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

  const getAccentBorderClass = () => {
    switch (accentColor) {
      case "cyan":
        return "border-[#06b6d4] hover:bg-[#06b6d4]/5 text-[#06b6d4]";
      case "purple":
        return "border-[#a855f7] hover:bg-[#a855f7]/5 text-[#a855f7]";
      case "amber":
      default:
        return "border-[#ff6a00] hover:bg-[#ff6a00]/5 text-[#ff6a00]";
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string, label: string) => {
    e.preventDefault();
    setActiveLink(label);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full h-[90px] bg-[#050505]/90 backdrop-blur-md border-b border-white/5 py-0 px-6 md:px-[60px] flex items-center justify-between">
      
      {/* Branding Logo - Monogram Box [MK] + Name (Dynamically colored) */}
      <div 
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => {
          setActiveLink("HOME");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <span className={cn("font-mono text-base font-black tracking-tighter transition-colors duration-500", getAccentTextClass())}>
          [MK]
        </span>
        <span className="font-heading text-sm md:text-base font-bold tracking-widest text-slate-100 select-none uppercase">
          MOKASH KUMAR
        </span>
      </div>

      {/* Center: Navigation Links matching exact height and active lines */}
      <nav className="hidden lg:flex items-center gap-7 font-sans text-[15px] font-semibold tracking-[1px] text-slate-400">
        {[
          { label: "HOME", id: "hero-section" },
          { label: "ABOUT", id: "about-section" },
          { label: "SKILLS", id: "skills-section" },
          { label: "PROJECTS", id: "projects-section" },
          { label: "EXPERIENCE", id: "experience-section" },
          { label: "GALLERY", id: "hobbies-section" },
          { label: "CONTACT", id: "contact-section" },
        ].map((link) => (
          <a
            key={link.label}
            href={`#${link.id}`}
            onClick={(e) => handleScroll(e, link.id, link.label)}
            className={cn(
              "transition-colors duration-300 hover:text-slate-100 uppercase py-1",
              activeLink === link.label ? "active-nav-link" : ""
            )}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Right Action: Download Resume CTA */}
      <div className="flex items-center gap-3 md:gap-4">
        
        {/* Accent Color Dot Toggles */}
        <div className="flex items-center gap-1.5 bg-white/5 border border-white/5 rounded-full p-1 px-2.5">
          {(["amber", "cyan", "purple"] as const).map((color) => (
            <button
              key={color}
              onClick={() => onAccentChange(color)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300 hover:scale-125",
                color === "purple" && "bg-[#a855f7]",
                color === "cyan" && "bg-[#06b6d4]",
                color === "amber" && "bg-[#ff6a00]",
                accentColor === color ? "ring-2 ring-white/50 scale-110" : "opacity-40"
              )}
              title={`Switch theme to ${color}`}
            />
          ))}
        </div>

        <a
          href={portfolioData.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "font-heading text-[10px] sm:text-xs font-bold px-3 py-2 sm:px-4 sm:py-2 border flex items-center gap-1.5 transition-all duration-300 tracking-wider rounded-md",
            getAccentBorderClass()
          )}
        >
          <Download size={13} />
          <span className="hidden sm:inline">DOWNLOAD CV</span>
          <span className="sm:hidden">CV</span>
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden flex items-center justify-center w-9 h-9 rounded bg-white/5 border border-white/5 text-slate-300 hover:text-white transition-all focus:outline-none",
            isMobileMenuOpen ? "border-slate-500" : ""
          )}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile Drawer Menu - Animated Glassmorphic Slide down overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[90px] left-0 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-white/5 lg:hidden overflow-hidden z-40 shadow-2xl"
          >
            <nav className="flex flex-col space-y-4 px-6 py-6 font-mono text-xs sm:text-sm font-bold tracking-[2px] uppercase text-left">
              {[
                { label: "HOME", id: "hero-section" },
                { label: "ABOUT", id: "about-section" },
                { label: "SKILLS", id: "skills-section" },
                { label: "PROJECTS", id: "projects-section" },
                { label: "EXPERIENCE", id: "experience-section" },
                { label: "GALLERY", id: "hobbies-section" },
                { label: "CONTACT", id: "contact-section" },
              ].map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={`#${link.id}`}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.3 }}
                  onClick={(e) => {
                    handleScroll(e, link.id, link.label);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "py-1.5 transition-colors duration-300 hover:text-slate-100 flex items-center gap-2",
                    activeLink === link.label ? getAccentTextClass() : "text-slate-400"
                  )}
                >
                  <span className="opacity-40 text-[9px] font-normal">&gt;</span>
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Navbar;
