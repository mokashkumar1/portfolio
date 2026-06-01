"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  accentColor: "purple" | "cyan" | "amber";
}

export const Footer: React.FC<FooterProps> = ({
  accentColor,
}) => {
  
  const getAccentBorderClass = () => {
    switch (accentColor) {
      case "cyan":
        return "hover:border-[#06b6d4]/40 hover:text-[#06b6d4] hover:bg-[#06b6d4]/5";
      case "purple":
        return "hover:border-[#a855f7]/40 hover:text-[#a855f7] hover:bg-[#a855f7]/5";
      case "amber":
      default:
        return "hover:border-[#f97316]/40 hover:text-[#f97316] hover:bg-[#f97316]/5";
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#050508] border-t border-white/5 py-8 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Dynamic Branding copyright */}
        <div className="text-center md:text-left font-mono text-[11px] text-slate-400">
          <span>&copy; 2026 </span>
          <span className="font-bold text-slate-300">Mokash Kumar</span>
          <span>. All Rights Reserved.</span>
        </div>

        {/* Center: Essential Legal & Nav Links matching the target mockup */}
        <div className="flex items-center gap-6 font-mono text-[9px] font-bold text-slate-500 uppercase tracking-widest">
          <a href="#" className="hover:text-slate-300 transition-colors">
            PRIVACY POLICY
          </a>
          <span className="select-none text-slate-800">•</span>
          <a href="#" className="hover:text-slate-300 transition-colors">
            TERMS & CONDITIONS
          </a>
        </div>

        {/* Right Side: Social links + dynamic back to top button */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://linkedin.com/in/mokashkumar"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center justify-center w-7 h-7 rounded border border-white/5 text-slate-400 bg-white/5 transition-all duration-300",
                getAccentBorderClass()
              )}
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://github.com/mokashkumar1"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center justify-center w-7 h-7 rounded border border-white/5 text-slate-400 bg-white/5 transition-all duration-300",
                getAccentBorderClass()
              )}
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a
              href="https://instagram.com/mokshluhana"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center justify-center w-7 h-7 rounded border border-white/5 text-slate-400 bg-white/5 transition-all duration-300",
                getAccentBorderClass()
              )}
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="mailto:mokshkumar38@gmail.com"
              className={cn(
                "flex items-center justify-center w-7 h-7 rounded border border-white/5 text-slate-400 bg-white/5 transition-all duration-300",
                getAccentBorderClass()
              )}
              title="Mail"
            >
              <Mail size={13} />
            </a>
          </div>

          {/* Elegant Back to Top arrow button */}
          <button
            onClick={handleBackToTop}
            className={cn(
              "flex items-center justify-center w-7 h-7 rounded bg-slate-900 border border-white/5 hover:border-white/20 text-slate-400 hover:text-white transition-all shadow-md active:scale-90",
              accentColor === "cyan" && "hover:border-[#06b6d4] hover:shadow-[0_0_10px_rgba(6,182,212,0.1)]",
              accentColor === "purple" && "hover:border-[#a855f7] hover:shadow-[0_0_10px_rgba(168,85,247,0.1)]",
              accentColor === "amber" && "hover:border-[#f97316] hover:shadow-[0_0_10px_rgba(249,115,22,0.1)]"
            )}
            title="Back to Top"
          >
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
