"use client";

import React from "react";
import Image from "next/image";
import { SplineHero } from "@/components/sections/SplineHero";
import { HoverSpotlight } from "@/components/ui/hover-spotlight";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";
import { Code, ExternalLink, Calendar, MapPin } from "lucide-react";
import ContributorsTable from "@/components/ui/ruixen-contributors-table";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { Footer } from "@/components/ui/footer-section";
export default function Home() {
  const projects = portfolioData.projects;

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
                <div key={cat.category} className="space-y-3">
                  <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">{cat.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-zinc-900/80 border border-zinc-800 rounded-full text-xs text-zinc-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
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
          {projects.map((project, idx) => (
            <div key={idx} className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-white/10 to-transparent overflow-hidden">
              <HoverSpotlight className="from-cyan-500/30 via-cyan-500/10 to-transparent" size={300} />
              <div className="relative h-full bg-zinc-950 rounded-[23px] overflow-hidden flex flex-col z-10">
                <div className="h-48 w-full relative bg-zinc-900 border-b border-zinc-800">
                  {project.image ? (
                    <Image src={project.image} alt={project.title} fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-700 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950">
                      No Image Available
                    </div>
                  )}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors">
                        <Code className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-wider">{project.category}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-zinc-400 text-sm mb-6 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-zinc-900 text-zinc-300 text-xs rounded-md border border-zinc-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Hobbies Bento Grid */}
      <section id="experience" className="py-24 max-w-7xl mx-auto px-6 relative">
        <div className="absolute right-0 top-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Experience Column */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-4xl font-bold text-white tracking-tighter mb-8">Experience</h2>
            {portfolioData.experience.map((exp, idx) => (
              <Card key={idx} className="bg-zinc-950 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start flex-col md:flex-row gap-4">
                    <div>
                      <CardTitle className="text-xl text-white">{exp.role}</CardTitle>
                      <CardDescription className="text-zinc-400 text-base mt-1">{exp.company}</CardDescription>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 text-sm text-zinc-500 font-medium">
                      <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {exp.duration}</div>
                      {exp.location && <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {exp.location}</div>}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-zinc-400 text-sm">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
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
