"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SplineHero } from "@/components/sections/SplineHero";
import { MarqueeDemo } from "@/components/ui/marquee-demo";
import { HoverSpotlight } from "@/components/ui/hover-spotlight";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import ContributorsTable from "@/components/ui/ruixen-contributors-table";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { Footer } from "@/components/ui/footer-section";
import { ExpandableSkillTags } from "@/components/ui/expandable-skill-tags";
const experienceColorMap: Record<string, {
  border: string;
  hoverBorder: string;
  hoverShadow: string;
  borderLeft: string;
  text: string;
  bullet: string;
}> = {
  amber: {
    border: "border-amber-500/20",
    hoverBorder: "hover:border-amber-500/50",
    hoverShadow: "hover:shadow-amber-500/10",
    borderLeft: "border-l-amber-500/80",
    text: "text-amber-400",
    bullet: "bg-amber-500",
  },
  purple: {
    border: "border-purple-500/20",
    hoverBorder: "hover:border-purple-500/50",
    hoverShadow: "hover:shadow-purple-500/10",
    borderLeft: "border-l-purple-500/80",
    text: "text-purple-400",
    bullet: "bg-purple-500",
  },
  cyan: {
    border: "border-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/50",
    hoverShadow: "hover:shadow-cyan-500/10",
    borderLeft: "border-l-cyan-500/80",
    text: "text-cyan-400",
    bullet: "bg-cyan-500",
  },
  pink: {
    border: "border-pink-500/20",
    hoverBorder: "hover:border-pink-500/50",
    hoverShadow: "hover:shadow-pink-500/10",
    borderLeft: "border-l-pink-500/80",
    text: "text-pink-400",
    bullet: "bg-pink-500",
  },
  blue: {
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-500/50",
    hoverShadow: "hover:shadow-blue-500/10",
    borderLeft: "border-l-blue-500/80",
    text: "text-blue-400",
    bullet: "bg-blue-500",
  },
};

const getExperienceColor = (color?: string) => {
  return experienceColorMap[color as keyof typeof experienceColorMap] || {
    border: "border-zinc-800",
    hoverBorder: "hover:border-zinc-700",
    hoverShadow: "hover:shadow-cyan-500/10",
    borderLeft: "border-l-cyan-500/80",
    text: "text-cyan-400",
    bullet: "bg-cyan-500",
  };
};

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projects = portfolioData.projects;
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-cyan-500/30 bg-noise">
      {/* Navbar space placeholder if needed */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:px-8 flex justify-between items-center glass-panel shadow-lg shadow-black/20 rounded-b-2xl mx-auto max-w-7xl">
        <div className="font-heading font-bold text-2xl tracking-tighter text-white">
          {portfolioData.name}
        </div>
        <div className="flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Work</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
        </div>
      </nav>

      {/* Hero Section */}
      <SplineHero />

      {/* Infinite Marquee Tech Stack */}
      <MarqueeDemo />

      {/* About Section */}
      <section id="about" className="py-24 relative max-w-7xl mx-auto px-6">
        <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] bg-cyan-500/[0.04] blur-[120px] rounded-full pointer-events-none" />
        <Card className="w-full bg-black/[0.96] relative overflow-hidden border-zinc-800 hover:bg-black/[0.96]">
          <div className="p-8 md:p-14">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tighter">
              About
            </h2>
            <p className="mt-6 text-zinc-400 max-w-3xl leading-relaxed text-base md:text-lg">
              {portfolioData.aboutText}
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {portfolioData.skills.map(cat => (
                <ExpandableSkillTags
                  key={cat.category}
                  title={cat.category}
                  skills={cat.items}
                  initialCount={4}
                  className="space-y-3"
                />
              ))}
            </div>
          </div>
        </Card>
      </section>

      {/* Projects Grid with Ibelick Spotlight */}
      <section id="projects" className="py-24 max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">Projects</h2>
          <p className="text-zinc-400 mt-4 text-lg">A selection of my recent works across web, ML, and systems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx > 2 ? (idx - 3) * 0.1 : 0 }}
                className={cn(
                  "relative group rounded-3xl p-[1px] bg-gradient-to-b overflow-hidden shadow-2xl shadow-black/50",
                  idx === 0 ? "md:col-span-2 from-cyan-500/30 via-cyan-500/5 to-transparent" : "from-white/10 to-transparent"
                )}
              >
                <HoverSpotlight className={idx === 0 ? "from-cyan-500/20 via-cyan-500/5 to-transparent" : "from-cyan-500/30 via-cyan-500/10 to-transparent"} size={300} />
                <div className={cn(
                  "relative h-full bg-zinc-950/60 backdrop-blur-xl rounded-[23px] overflow-hidden flex flex-col z-10 border border-white/5",
                  idx === 0 ? "md:flex-row" : "flex-col"
                )}>

                  {/* Image Section */}
                  <div className={cn(
                    "relative bg-zinc-900 overflow-hidden shrink-0 flex items-center justify-center",
                    idx === 0 ? "h-64 md:h-auto md:w-[45%] lg:w-[50%] border-b md:border-b-0 md:border-r border-white/5" : "aspect-video w-full border-b border-white/5"
                  )}>
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-zinc-700 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950">
                        No Image Available
                      </div>
                    )}
                    {/* Subtle inner shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Browser Frame Dots (for premium feel on featured project) */}
                    {idx === 0 && (
                      <div className="absolute top-5 left-5 flex gap-1.5 z-20">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 border border-black/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 border border-black/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 border border-black/20" />
                      </div>
                    )}

                    <div className="absolute top-4 right-4 flex gap-2 z-20">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white hover:text-cyan-400 transition-colors" title="GitHub Repository">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                      )}
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="p-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white hover:text-cyan-400 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={cn(
                    "p-6 flex-1 flex flex-col justify-center",
                    idx === 0 ? "md:p-10 lg:p-12 md:w-[55%] lg:w-[50%]" : ""
                  )}>
                    <div className="text-[10px] font-mono font-bold text-cyan-400/80 mb-3 uppercase tracking-widest">{project.category}</div>
                    <h3 className={cn(
                      "font-bold text-white mb-3 tracking-tight",
                      idx === 0 ? "text-3xl lg:text-4xl" : "text-2xl"
                    )}>{project.title}</h3>
                    <p className="text-zinc-400/90 text-sm leading-relaxed mb-6 flex-1">
                      {idx === 0 && project.longDescription ? project.longDescription : project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-white/5">
                      {project.tech.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white/5 text-zinc-300 text-[11px] font-medium rounded-full border border-white/10 tracking-wide hover:bg-white/10 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="group flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white border border-white/10 hover:border-cyan-500/50 rounded-full transition-all duration-300 shadow-lg shadow-black/20"
          >
            <span className="font-medium text-sm">{showAllProjects ? "Show Less" : "Show More Projects"}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("transition-transform duration-300", showAllProjects ? "rotate-180" : "group-hover:translate-y-1")}><path d="m6 9 6 6 6-6" /></svg>
          </button>
        </div>
      </section>

      {/* Experience & Hobbies Bento Grid */}
      <section id="experience" className="py-24 max-w-7xl mx-auto px-6 relative">
        <div className="absolute right-0 top-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Experience Column */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-4xl font-bold text-white tracking-tighter mb-8">Experience</h2>
            {portfolioData.experience.map((exp, idx) => {
              const colorClasses = getExperienceColor(exp.color);
              return (
                <Card
                  key={idx}
                  className={cn(
                    "bg-zinc-950 border-l-4 transition-all duration-300",
                    colorClasses.border,
                    colorClasses.hoverBorder,
                    colorClasses.hoverShadow,
                    colorClasses.borderLeft
                  )}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start flex-col md:flex-row gap-4">
                      <div>
                        <CardTitle className="text-xl text-white">{exp.role}</CardTitle>
                        <CardDescription className={cn("text-base mt-1 font-medium transition-colors duration-300", colorClasses.text)}>
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-1 text-sm text-zinc-500 font-medium">
                        <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {exp.duration}</div>
                        {exp.location && <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {exp.location}</div>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-zinc-400 text-sm">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300", colorClasses.bullet)} />
                          <span className="leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Life Carousel / Hobbies */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white tracking-tighter mb-8">Beyond Code</h2>
            <div className="grid grid-cols-1 gap-6">
              {portfolioData.hobbies.map((hobby, idx) => (
                <div key={idx} className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-white/10 to-transparent overflow-hidden h-full">
                  <HoverSpotlight className="from-purple-500/30 via-purple-500/10 to-transparent" size={200} />
                  <div className="relative h-full bg-zinc-950 p-6 rounded-[23px] overflow-hidden flex flex-col z-10">
                    <h3 className="text-lg font-bold text-white mb-2">{hobby.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{hobby.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Contributions Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative">
        <div className="mb-12 flex flex-col md:flex-row gap-6 justify-between items-end">
          <div>
            <h2 className="text-4xl font-bold text-white tracking-tighter">Open Source & Community</h2>
            <p className="text-zinc-400 mt-4 text-lg max-w-2xl">
              I actively contribute to and maintain various open-source projects. Here&apos;s a live overview of my recent activities.
            </p>
          </div>
          <ButtonColorful label="Explore My GitHub" onClick={() => window.open("https://github.com/mokashkumar1", "_blank")} />
        </div>
        <ContributorsTable />
      </section>

      {/* Custom Footer Component */}
      <Footer />
    </main>
  );
}
