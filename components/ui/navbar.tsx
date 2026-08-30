"use client";

import { useEffect, useRef, useState } from "react";
import { Download, ExternalLink, Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const links = [
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050607]/90 backdrop-blur-xl">
      <nav aria-label="Primary navigation" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#about" className="rounded-md text-lg font-bold tracking-tight text-white">
          Mokash<span className="text-cyan-400">.</span>
        </a>
        <div className="hidden items-center gap-3 md:flex lg:gap-5">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="rounded-md text-sm text-zinc-300 transition-colors hover:text-white">
              {label}
            </a>
          ))}
          <a
            href={portfolioData.aiDesktopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-1.5 rounded-xl border border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 via-sky-500/25 to-blue-600/30 px-3.5 py-2 text-xs font-semibold text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-cyan-300/80 hover:from-cyan-500/35 hover:via-sky-500/40 hover:to-blue-600/45 hover:text-white hover:shadow-[0_0_22px_rgba(6,182,212,0.5)] active:scale-[0.98] lg:text-sm"
            aria-label="Launch AI Desktop interactive experience (opens in new tab)"
          >
            <span>🚀 Launch AI Desktop</span>
            <ExternalLink aria-hidden="true" className="h-3.5 w-3.5 text-cyan-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a className="button-secondary !px-4 !py-2" href={portfolioData.resumeUrl} target="_blank" rel="noreferrer">
            <Download aria-hidden="true" className="h-4 w-4" /> Resume
          </a>
        </div>
        <button
          ref={menuButtonRef}
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-[#050607] px-5 pb-6 pt-3 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-zinc-200">
                {label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2.5 border-t border-white/10 pt-4">
              <a
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-gradient-to-r from-cyan-500/25 via-sky-500/30 to-blue-600/35 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_16px_rgba(6,182,212,0.3)] transition-all active:scale-[0.98]"
                href={portfolioData.aiDesktopUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <span>🚀 Launch AI Desktop</span>
                <ExternalLink aria-hidden="true" className="h-4 w-4 text-cyan-300" />
              </a>
              <a className="button-secondary" href={portfolioData.resumeUrl} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
                <Download aria-hidden="true" className="h-4 w-4" /> View resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
