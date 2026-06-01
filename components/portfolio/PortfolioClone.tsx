"use client";

import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Briefcase,
  Camera,
  Code2,
  Coffee,
  Download,
  ExternalLink,
  Gamepad2,
  Mail,
  MapPin,
  Menu,
  Plane,
  Play,
  Rocket,
  Send,
  Trophy,
  UserRound,
  Users,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

function Github({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

import { motion } from "framer-motion";
import { galleryAssets, profileAssets, projectAssets, socialLinks } from "@/data/siteContent";
import { portfolioData } from "@/data/portfolio";

const navItems = ["HOME", "ABOUT", "SKILLS", "PROJECTS", "EXPERIENCE", "GALLERY", "CONTACT"];
const skills = [
  ["Python", 90],
  ["Data Cleaning", 85],
  ["Data Visualization", 85],
  ["Machine Learning", 80],
  ["SQL", 80],
  ["Java", 75],
  ["C++", 70],
  ["Dart", 60],
] as const;

const stats = [
  [Code2, "5+", "Projects", "Completed"],
  [Briefcase, "3+", "Months Practical", "Experience"],
  [Trophy, "2+", "Certifications", "Earned"],
  [Rocket, "∞", "Curiosity", "& Learning"],
] as const;

const hobbies: [LucideIcon, string][] = [
  [Camera, "Photography"],
  [Video, "Videography"],
  [Code2, "Editing"],
  [Plane, "Travelling"],
  [Gamepad2, "Gaming"],
  [Rocket, "Exploring Tech"],
];

function useReferenceMotion() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.08, easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)) });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ref-card",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.025, ease: "power2.out" },
      );
    }, rootRef);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return rootRef;
}

function Logo() {
  return (
    <a className="ref-logo" href="#home" aria-label="Mokash Kumar home">
      <span className="ref-logo-mark">MJ</span>
      <strong>MOKASH<br />KUMAR</strong>
    </a>
  );
}

function Socials() {
  return (
    <div className="ref-socials">
      <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noreferrer" aria-label="LinkedIn"><BrandIcon name="linkedin" /></a>
      <a href={`https://${portfolioData.github}`} target="_blank" rel="noreferrer" aria-label="GitHub"><BrandIcon name="github" /></a>
      <a href={`https://${portfolioData.instagram}`} target="_blank" rel="noreferrer" aria-label="Instagram"><BrandIcon name="instagram" /></a>
      <a href={`mailto:${portfolioData.email}`} aria-label="Email"><Mail size={15} /></a>
    </div>
  );
}

function BrandIcon({ name }: { name: "github" | "instagram" | "linkedin" }) {
  const paths = {
    github: "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.91-.38 2.89-.39.98.01 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z",
    instagram: "M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7.15A4.85 4.85 0 1 1 12 16.85 4.85 4.85 0 0 1 12 7.15Zm0 2A2.85 2.85 0 1 0 12 14.85 2.85 2.85 0 0 0 12 9.15Zm5-2.55a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z",
    linkedin: "M4.98 3.5a2.48 2.48 0 1 1 0 4.96 2.48 2.48 0 0 1 0-4.96ZM3 9.8h3.96V21H3V9.8Zm6.18 0h3.79v1.53h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V21h-3.96v-5.01c0-1.2-.02-2.73-1.66-2.73-1.67 0-1.93 1.3-1.93 2.64V21H10V9.8h-.82Z",
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d={paths[name]} />
    </svg>
  );
}

function SectionHead({ title }: { title: string }) {
  return (
    <div className="ref-section-head">
      <h2>{title}</h2>
      <p>Home <span>&gt;</span> {title[0] + title.slice(1).toLowerCase()}</p>
    </div>
  );
}

function SkillBars({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "ref-bars compact" : "ref-bars"}>
      {skills.map(([name, value]) => (
        <p key={name}>
          <span>{name}</span>
          <i><em style={{ width: `${value}%` }} /></i>
          <b>{value}%</b>
        </p>
      ))}
    </div>
  );
}

function Radar() {
  return (
    <div className="ref-radar" aria-hidden="true">
      <span /><span /><span /><span />
      <b>&lt;/&gt;</b>
    </div>
  );
}

function ProjectShot({ image, index }: { image: string; index: number }) {
  return (
    <div className={`ref-project-shot shot-${index + 1}`} style={{ backgroundImage: `url(${image})` }}>
      <span /><span /><span />
    </div>
  );
}

export function PortfolioClone() {
  const rootRef = useReferenceMotion();
  const [formState, setFormState] = useState("SEND MESSAGE");

  async function submitContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setFormState("SENDING...");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        subject: form.get("subject"),
        message: form.get("message"),
      }),
    });
    setFormState(response.ok ? "MESSAGE SENT" : "TRY AGAIN");
  }

  return (
    <main ref={rootRef} id="home" className="ref-site">
      <header className="ref-header">
        <Logo />
        <nav>{navItems.map((item) => <a key={item} className={item === "HOME" ? "active" : ""} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>
        <a className="ref-download" href={profileAssets.resumePdf}><Download size={16} /> DOWNLOAD CV</a>
        <button className="ref-menu" aria-label="Open menu"><Menu size={18} /></button>
      </header>

      <section className="ref-hero ref-wrap">
        <motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="ref-hero-copy">
          <p className="ref-eyebrow">HELLO, I&apos;M <span>MOKASH KUMAR</span></p>
          <h1>WHERE ENGINEERING<br />MEETS <span>CREATIVITY</span></h1>
          <p className="ref-intro">Computer Systems Engineering undergraduate passionate about Data Analytics, Machine Learning, and problem-solving using real-world data.</p>
          <div className="ref-pills">
            <button><Code2 size={18} /> ENGINEERING</button>
            <button><BarChart3 size={18} /> DATA & AI</button>
            <button><Camera size={18} /> CONTENT CREATION</button>
          </div>
          <div className="ref-actions">
            <a className="ref-primary" href={`https://${portfolioData.linkedin}`} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: '10px' }}>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              CONNECT ON LINKEDIN
            </a>
            <a className="ref-showreel" href={`https://${portfolioData.github}`} target="_blank" rel="noreferrer">
              <span>
                <Github size={16} />
              </span> 
              GITHUB PROFILE
            </a>
          </div>
        </motion.div>
        <div className="ref-hero-art">
          <img className="ref-hero-artwork" src="/assets/profile/hero-artwork.png" alt="Mokash Kumar cinematic hero artwork" />
          <div className="ref-status"><i /> <b>STATUS</b><span>Building<br />The Future</span></div>
        </div>
      </section>

      <section className="ref-home-grid ref-wrap">
        <article id="about" className="ref-card ref-about-card">
          <h3><UserRound size={17} /> ABOUT ME</h3>
          <p>Computer Systems Engineering undergraduate passionate about Data Analytics, Machine Learning, and problem-solving using real-world data. Skilled in Python, Java, C++, data cleaning, and analytical thinking with hands-on experience building machine learning projects.</p>
          <h4>LET&apos;S CONNECT</h4><Socials />
        </article>
        <div className="ref-card ref-stats">
          {stats.map(([Icon, number, top, bottom]) => <div key={top}><Icon size={35} /><strong>{number}</strong><p>{top}<br />{bottom}</p></div>)}
        </div>
        <article className="ref-card ref-hobbies"><h3><Camera size={16} /> HOBBIES</h3>{hobbies.map(([Icon, label]) => <p key={label}><Icon size={18} />{label}</p>)}</article>
        <article id="skills" className="ref-card ref-skills-home"><h3><Code2 size={16} /> TECHNICAL SKILLS</h3><div className="ref-split"><SkillBars compact /><Radar /></div></article>
        <article className="ref-card ref-featured"><h3><Trophy size={16} /> FEATURED PROJECT</h3><div className="ref-featured-body"><ProjectShot image={portfolioData.projects[0].image} index={0} /><div><h2>{portfolioData.projects[0].title.split(" – ")[0]}<br />{portfolioData.projects[0].title.split(" – ")[1] || ""}</h2><p>{portfolioData.projects[0].description}</p><Tags tags={portfolioData.projects[0].tech} /><div className="ref-project-links">{portfolioData.projects[0].demoUrl && <a className="ref-outline" href={portfolioData.projects[0].demoUrl} target="_blank" rel="noreferrer"><ExternalLink size={16} /> LIVE PREVIEW</a>}{portfolioData.projects[0].githubUrl && <a className="ref-outline ref-github-btn" href={portfolioData.projects[0].githubUrl} target="_blank" rel="noreferrer"><Github size={16} /> CODE</a>}</div></div></div></article>
        <article className="ref-card ref-tech"><h3>TECH STACK</h3>{["Python", "C++", "Java", "SQL", "Dart", "Git", "Tableau"].map((item) => <span key={item}>{item}</span>)}</article>
        <article id="experience" className="ref-card ref-achievements"><h3><Trophy size={16} /> ACHIEVEMENTS & ROLES</h3><div><Trophy size={39} /><p><b>Google Certified</b><span>Data Analytics Professional Certificate</span></p></div><div><Video size={39} /><p><b>Director of Videography</b><span>Hult Prize MUET SZAB</span></p></div></article>
      </section>

      <section className="ref-page ref-wrap"><SectionHead title="ABOUT ME" /><div className="ref-card ref-about-wide"><div className="ref-portrait"><img src={profileAssets.profilePhoto} alt="Mokash Kumar portrait" /><span>Mokash Kumar</span></div><div><h3>Who Am I?</h3><p>Computer Systems Engineering undergraduate passionate about Data Analytics, Machine Learning, and problem-solving using real-world data.</p><p>Skilled in Python, Java, C++, data cleaning, and analytical thinking with hands-on experience building machine learning projects using self-collected datasets. Familiar with Linear Regression, Gradient Descent, and data preprocessing techniques. Seeking opportunities to apply analytical and technical skills in practical environments.</p><div className="ref-info"><span>Birthday<b>17 Sep, 2003</b></span><span>Location<b>Hyderabad, Pakistan</b></span><span>Email<b>mokshkumar38@gmail.com</b></span><span>Freelance<b>Available</b></span></div></div></div></section>

      <section className="ref-page ref-wrap"><SectionHead title="SKILLS" /><div className="ref-skills-layout"><div className="ref-card ref-skill-card"><h3><Code2 size={16} /> TECHNICAL SKILLS</h3><div className="ref-split"><SkillBars /><Radar /></div></div><div className="ref-card ref-tools"><h3>TOOLS & TECHNOLOGIES</h3>{["Git", "GitHub", "VS Code", "Vercel", "Tableau", "Microsoft Excel"].map((tool) => <div key={tool}>{tool}</div>)}</div><div className="ref-card ref-soft"><h3>SOFT SKILLS</h3>{["Problem Solving", "Leadership", "Team Collaboration", "Event Coordination"].map((skill) => <p key={skill}>{skill}<span>•••••••••</span></p>)}</div><div className="ref-card ref-learning"><h3>I&apos;M CURRENTLY LEARNING</h3>{["Advanced Data Analytics", "Artificial Intelligence Fundamentals"].map((topic, i) => <p key={topic}>{topic}<i><em style={{ width: `${60 + i * 9}%` }} /></i></p>)}</div></div></section>

      <section id="projects" className="ref-page ref-wrap"><SectionHead title="PROJECTS" /><div className="ref-filters">{["All", "Machine Learning", "Data Analytics", "Web Development", "Mobile Development", "Civic Tech", "Other"].map((f) => <button key={f}>{f}</button>)}</div><div className="ref-projects">{portfolioData.projects.map((project, index) => <article className="ref-card ref-project-card" key={project.title}><ProjectShot image={project.image} index={index} /><div className="ref-project-content"><h3>{project.title}</h3><Tags tags={project.tech} /><p>{project.description}</p><div className="ref-project-links">{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer" className="ref-link-btn"><ExternalLink size={15} /> Live Preview</a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="ref-link-btn"><Github size={15} /> GitHub Repo</a>}</div></div></article>)}</div></section>

      <section className="ref-page ref-wrap"><SectionHead title="EXPERIENCE & ACHIEVEMENTS" /><div className="ref-exp-layout"><div className="ref-card ref-timeline">{
        portfolioData.experience.map((item, index) => <article key={item.role + index}><b>{item.duration}</b><h3>{item.role}</h3><span>{item.company}</span><p>{item.description.join(" ")}</p></article>)
      }</div><div className="ref-card ref-education"><h3>EDUCATION</h3><p><b>{portfolioData.education.duration}</b>{portfolioData.education.degree}<span>{portfolioData.education.institution}</span></p><h3 style={{ marginTop: '24px' }}>CERTIFICATIONS</h3>{
        portfolioData.certifications.map((cert, index) => <p key={cert.title + index}><b>{cert.issuer}</b>{cert.title}</p>)
      }</div></div></section>

      <section id="gallery" className="ref-page ref-wrap"><SectionHead title="GALLERY" /><div className="ref-filters">{["All", "Photography", "Videography", "Editing", "Travel"].map((f) => <button key={f}>{f}</button>)}</div><div className="ref-gallery">{galleryAssets.preview.map((item, index) => <div className={`ref-gallery-tile tile-${index + 1}`} style={{ backgroundImage: `url(${item})` }} key={item} />)}</div><button className="ref-more">View More</button></section>

      <section id="contact" className="ref-page ref-wrap ref-contact"><div className="ref-card ref-contact-info"><h3>LET&apos;S CONNECT</h3><p>Have a project in mind or just want to say hi? I&apos;d love to hear from you.</p><span><Mail size={14} /> mokshkumar38@gmail.com</span><span><MapPin size={14} /> Hyderabad, Pakistan</span><span><Trophy size={14} /> Open to Opportunities</span><Socials /></div><form className="ref-card ref-contact-form" onSubmit={submitContact}><h3>SEND A MESSAGE</h3><div><input name="name" placeholder="Your Name" required /><input name="email" type="email" placeholder="Your Email" required /></div><input name="subject" placeholder="Subject" /><textarea name="message" placeholder="Your Message" required /><button type="submit">{formState} <Send size={16} /></button></form></section>

      <section className="ref-cta ref-wrap"><div><h2>LET&apos;S BUILD SOMETHING<br /><span>AMAZING TOGETHER</span></h2><ArrowRight /></div><p>Have a project in mind or just want to say hi?<br />Let&apos;s connect and create something impactful.</p><a href="#contact">GET IN TOUCH <ArrowRight size={16} /></a></section>
      <footer className="ref-footer ref-wrap"><p>© 2024 Mokash Kumar. All Rights Reserved.</p><p>PRIVACY POLICY</p><p>TERMS & CONDITIONS</p><a href="#home" aria-label="Back to top">↑</a></footer>
    </main>
  );
}

function Tags({ tags }: { tags: readonly string[] }) {
  return <div className="ref-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>;
}

