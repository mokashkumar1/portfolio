import type { SVGProps } from "react";
import { ArrowUpRight, CheckCircle2, Mail } from "lucide-react";
import { SplineHero } from "@/components/sections/SplineHero";
import { CreativeWork } from "@/components/sections/CreativeWork";
import { Navbar } from "@/components/ui/navbar";
import { portfolioData } from "@/data/portfolio";

const Github = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
    <path d="M9 18c-4.5 1.5-5-2.5-7-3" />
  </svg>
);

const Linkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mb-9 max-w-3xl sm:mb-12">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-white sm:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">{intro}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-noise">
      <Navbar />
      <SplineHero />

      <section aria-label="Technical focus" className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
          {portfolioData.proofPoints.map((point) => (
            <div key={point} className="bg-[#07090b] px-4 py-5 text-center text-xs font-medium leading-5 text-zinc-300 sm:px-5 sm:text-sm">
              {point}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell">
        <SectionHeading
          eyebrow="Selected projects"
          title="Evidence of how I build."
          intro="The first two projects show my current software engineering work, while the fare predictor is an early applied machine-learning project. Each link below has been checked against the deployed application and public repository."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {portfolioData.projects.map((project, index) => (
            <article key={project.title} className={`project-card ${index === 2 ? "lg:col-span-2" : ""}`}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{project.category}</p>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Deployed</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.title}</h3>
              <p className="mt-3 leading-7 text-zinc-300">{project.description}</p>
              <dl className="mt-6 space-y-4 text-sm leading-6">
                <div>
                  <dt className="font-semibold text-white">Problem</dt>
                  <dd className="mt-1 text-zinc-400">{project.problem}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">What I built</dt>
                  <dd className="mt-1 text-zinc-400">{project.contribution}</dd>
                </div>
              </dl>
              <ul className="mt-6 space-y-2 text-sm text-zinc-300" aria-label={`${project.title} proof`}>
                {project.proof.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-zinc-300">{tech}</span>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a className="button-secondary" href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source code on GitHub`}>
                  <Github aria-hidden="true" className="h-4 w-4" /> Code
                </a>
                <a className="button-primary" href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`Open the live ${project.title} application`}>
                  Live demo <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-shell border-t border-white/10">
        <SectionHeading
          eyebrow="Relevant experience"
          title="Leadership and communication beyond the codebase."
          intro="My strongest engineering evidence is in the projects above. These roles add experience in coordination, deadlines, and communicating work clearly."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {portfolioData.experience.map((item) => (
            <article key={`${item.role}-${item.company}`} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-cyan-300">{item.duration}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.role}</h3>
              <p className="mt-1 text-sm text-zinc-400">{item.company}</p>
              <p className="mt-4 text-sm leading-6 text-zinc-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section-shell border-t border-white/10">
        <SectionHeading eyebrow="Education" title="Computer Systems Engineering at MUET." />
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <p className="text-xl font-semibold text-white sm:text-2xl">{portfolioData.education.degree}</p>
          <p className="mt-2 text-zinc-300">{portfolioData.education.institution}</p>
          <p className="mt-3 text-sm text-zinc-400">{portfolioData.education.duration}</p>
        </div>
      </section>

      <section id="skills" className="section-shell border-t border-white/10">
        <SectionHeading eyebrow="Technical skills" title="A focused stack backed by project work." />
        <div className="grid gap-4 sm:grid-cols-2">
          {portfolioData.skills.map((group) => (
            <div key={group.category} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
              <h3 className="font-semibold text-white">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${group.category} skills`}>
                {group.items.map((skill) => (
                  <li key={skill} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-zinc-300">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CreativeWork />

      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] p-6 sm:p-10">
            <p className="section-kicker">Contact</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-[-0.035em] text-white sm:text-5xl">Open to software engineering and AI/ML internships.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-300">If you are hiring an intern who can contribute to practical software while growing in applied AI, I would be glad to speak.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a className="button-primary" href={`mailto:${portfolioData.email}`}><Mail aria-hidden="true" className="h-4 w-4" /> Email me</a>
              <a className="button-secondary" href={portfolioData.linkedinUrl} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" className="h-4 w-4" /> LinkedIn</a>
              <a className="button-secondary" href={portfolioData.githubUrl} target="_blank" rel="noreferrer"><Github aria-hidden="true" className="h-4 w-4" /> GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-7 text-center text-sm text-zinc-500 sm:px-8">
        © {new Date().getFullYear()} {portfolioData.name}. Built with Next.js.
      </footer>
    </main>
  );
}
