import { ArrowUpRight } from "lucide-react";

const instagramUrl = "https://www.instagram.com/mokshkumarr";

export function CreativeWork() {
  return (
    <section id="creative-work" className="section-shell border-t border-white/10">
      <div className="max-w-3xl">
        <p className="section-kicker">Creative perspective</p>
        <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-white sm:text-5xl">Technical work, with an eye for presentation.</h2>
        <p className="mt-4 text-base leading-7 text-zinc-300 sm:text-lg">Outside engineering, I work with video, photography, and audio. That experience shapes how I think about atmosphere, pacing, and the details people notice in a product.</p>
        <a href={instagramUrl} target="_blank" rel="noreferrer" className="button-secondary mt-7" aria-label="View @mokshkumarr on Instagram">
          View @mokshkumarr <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
