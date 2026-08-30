import Image from "next/image";
import { ArrowRight, Download, ExternalLink, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function SplineHero() {
  return (
    <section id="about" className="relative overflow-hidden border-b border-white/10 pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(34,211,238,.12),transparent_26rem)]" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[1fr_22rem] lg:items-center lg:pb-24">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="section-kicker">Computer Systems Engineering student</p>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md shadow-[0_0_12px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
              </span>
              Interactive Windows 11 &amp; Copilot
            </span>
          </div>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-bold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            I build practical software while developing skills in applied AI.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            {portfolioData.summary}
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm text-zinc-400">
            <MapPin aria-hidden="true" className="h-4 w-4 text-cyan-400" />
            {portfolioData.location}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              className="group relative inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-xl border border-cyan-300/50 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-[1.02] hover:border-cyan-200 hover:from-cyan-400 hover:via-sky-400 hover:to-blue-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.65)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-cyan-300"
              href={portfolioData.aiDesktopUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Launch AI Desktop OS interactive experience (opens in new tab)"
            >
              <span>🚀 Launch AI Desktop OS</span>
              <ExternalLink aria-hidden="true" className="h-4 w-4 text-cyan-100 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a className="button-secondary" href="#projects">
              View selected projects <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a className="button-secondary" href={portfolioData.resumeUrl} target="_blank" rel="noreferrer">
              <Download aria-hidden="true" className="h-4 w-4" /> View resume
            </a>
          </div>
        </div>

        <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6" aria-label="Profile summary">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-cyan-400/30">
              <Image src="/assets/profile/profile.png" alt="Mokash Kumar" fill priority sizes="80px" className="object-cover" />
            </div>
            <div>
              <p className="text-xl font-semibold text-white">{portfolioData.name}</p>
              <p className="mt-1 text-sm leading-5 text-zinc-400">{portfolioData.title}</p>
            </div>
          </div>
          <ul className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm text-zinc-300">
            {portfolioData.proofPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                {point}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
