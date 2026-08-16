"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";

const instagramUrl = "https://www.instagram.com/mokshkumarr";

function InstagramMark({ className }: { className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}

const visuals = [
  {
    src: "/assets/creative/moksh-night-portrait.jpg",
    alt: "Night portrait of Moksh Kumar holding a drink on a city street",
    label: "Portrait study",
    className: "creative-feature",
  },
  {
    src: "/assets/creative/moksh-night-portrait.jpg",
    alt: "Close portrait detail photographed at night",
    label: "Light & atmosphere",
    className: "creative-detail creative-detail-top",
  },
  {
    src: "/assets/creative/moksh-night-portrait.jpg",
    alt: "Street-scene detail from a night portrait",
    label: "Street frame",
    className: "creative-detail creative-detail-bottom",
  },
];

export function CreativeWork() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="creative-work" className="section-shell border-t border-white/10">
      <div className="max-w-3xl">
        <p className="section-kicker">Creative perspective</p>
        <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-white sm:text-5xl">Technical work, with an eye for presentation.</h2>
        <p className="mt-4 text-base leading-7 text-zinc-300 sm:text-lg">Outside engineering, I work with video, photography, and audio. That experience shapes how I think about atmosphere, pacing, and the details people notice in a product.</p>
      </div>

      <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="View Moksh Kumar's Instagram profile" className="creative-profile-row mt-8">
        <Image src="/assets/creative/moksh-night-portrait.jpg" alt="Moksh Kumar" width={56} height={56} className="creative-avatar" />
        <span className="min-w-0 flex-1">
          <span className="block truncate font-semibold text-white">@mokshkumarr</span>
          <span className="mt-0.5 block text-sm text-zinc-400">Photography <span aria-hidden="true">•</span> Reels <span aria-hidden="true">•</span> Visual storytelling</span>
        </span>
        <span className="creative-profile-link">View Instagram <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></span>
      </a>

      <div className="creative-gallery mt-12 sm:mt-16" aria-label="Selected photography">
        {visuals.map((visual, index) => (
          <button key={visual.label} type="button" className={`creative-image ${visual.className}`} onClick={() => setActiveIndex(index)} aria-label={`Open ${visual.label} photograph`}>
            <Image src={visual.src} alt={visual.alt} fill sizes={index === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"} />
            <span className="creative-image-label">{visual.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-12 border-t border-white/10 pt-9 text-center sm:mt-16 sm:pt-12">
        <p className="text-lg font-medium text-white sm:text-xl">More of my visual work lives on Instagram.</p>
        <a href={instagramUrl} target="_blank" rel="noreferrer" className="button-secondary mt-5" aria-label="View @mokshkumarr on Instagram">
          <InstagramMark className="h-4 w-4" /> View @mokshkumarr <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>

      {activeIndex !== null && (
        <div className="creative-lightbox" role="dialog" aria-modal="true" aria-label={`${visuals[activeIndex].label} preview`} onClick={() => setActiveIndex(null)}>
          <button type="button" className="creative-close" onClick={() => setActiveIndex(null)} aria-label="Close image preview"><X aria-hidden="true" className="h-5 w-5" /></button>
          <Image src={visuals[activeIndex].src} alt={visuals[activeIndex].alt} width={1080} height={1080} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
