"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";
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
        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="rounded-md text-sm text-zinc-300 transition-colors hover:text-white">
              {label}
            </a>
          ))}
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
            <a className="button-secondary mt-3" href={portfolioData.resumeUrl} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
              <Download aria-hidden="true" className="h-4 w-4" /> View resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
