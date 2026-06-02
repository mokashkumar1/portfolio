"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Send,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData, Project } from "@/data/portfolio";
import { profileAssets } from "@/data/siteContent";

const navItems = [
  ["HOME", "home"],
  ["ABOUT", "about"],
  ["PROJECTS", "projects"],
  ["EXPERIENCE", "experience"],
  ["SKILLS", "skills"],
  ["CONTACT", "contact"],
] as const;

const skillIcons = [Code2, Database, Wrench, Sparkles];
const stats = [
  ["Projects Built", `${portfolioData.professionalStats.projectsCount}+`],
  ["Tech Stack", `${portfolioData.professionalStats.techStackCount}+`],
  ["Git Commits", `${portfolioData.professionalStats.gitCommits}+`],
  ["Curiosity", portfolioData.personalCounters.curiosityLevel],
] as const;

function useCursorGlow() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const handleMove = (event: PointerEvent) => {
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return rootRef;
}

function handleMagneticMove(event: React.MouseEvent<HTMLElement>) {
  const element = event.currentTarget;
  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const moveX = (x - rect.width / 2) * 0.12;
  const moveY = (y - rect.height / 2) * 0.16;

  element.style.setProperty("--mx", `${x}px`);
  element.style.setProperty("--my", `${y}px`);
  element.style.setProperty("--magnet-x", `${moveX}px`);
  element.style.setProperty("--magnet-y", `${moveY}px`);
  element.style.setProperty("--tilt-x", `${((y / rect.height) - 0.5) * -9}deg`);
  element.style.setProperty("--tilt-y", `${((x / rect.width) - 0.5) * 9}deg`);
}

function resetMagnetic(event: React.MouseEvent<HTMLElement>) {
  const element = event.currentTarget;
  element.style.setProperty("--magnet-x", "0px");
  element.style.setProperty("--magnet-y", "0px");
  element.style.setProperty("--tilt-x", "0deg");
  element.style.setProperty("--tilt-y", "0deg");
}

function GithubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon({ size = 17 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Logo() {
  return (
    <a className="premium-logo" href="#home" aria-label="Mokash Kumar home">
      <span>MK</span>
      <strong>Mokash<br />Kumar</strong>
    </a>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-header">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="social-links">
      <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
      <a href={`https://${portfolioData.github}`} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
      <a href={`https://${portfolioData.instagram}`} target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
      <a href={`mailto:${portfolioData.email}`} aria-label="Email"><Mail size={17} /></a>
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <motion.article
      className={featured ? "project-card featured magnetic-surface" : "project-card magnetic-surface"}
      onMouseMove={handleMagneticMove}
      onMouseLeave={resetMagnetic}
      initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {project.image && (
        <div className="project-image">
          <img src={project.image} alt={`${project.title} preview`} />
        </div>
      )}
      <div className="project-body">
        <div>
          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>
          <p>{featured ? project.longDescription || project.description : project.description}</p>
        </div>
        <div className="chips">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="project-actions">
          {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer"><ExternalLink size={15} /> Live Demo</a>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer"><GithubIcon size={15} /> GitHub</a>}
        </div>
      </div>
    </motion.article>
  );
}

export function PortfolioClone() {
  const rootRef = useCursorGlow();
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState("Send message");
  const featuredProjects = portfolioData.projects.slice(0, 3);
  const otherProjects = portfolioData.projects.slice(3);

  async function submitContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setFormState("Sending...");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        subject: "Portfolio contact",
        message: form.get("message"),
      }),
    });
    setFormState(response.ok ? "Message sent" : "Try again");
  }

  return (
    <main ref={rootRef} className="premium-site" id="home">
      <div className="cinematic-field" aria-hidden="true">
        <span className="field-orbit orbit-a" />
        <span className="field-orbit orbit-b" />
        <span className="field-beam beam-a" />
        <span className="field-beam beam-b" />
        <span className="noise-layer" />
      </div>

      <header className="premium-header">
        <Logo />
        <nav>
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <a className="download-link magnetic-button" href={portfolioData.resumeUrl || profileAssets.resumePdf} target="_blank" rel="noreferrer" onMouseMove={handleMagneticMove} onMouseLeave={resetMagnetic}>
          <Download size={16} /> Download CV
        </a>
        <button className="mobile-menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </div>
      )}

      <section className="hero-section premium-wrap storytelling-panel">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="hero-copy">
          <p className="eyebrow">Hello, I&apos;m {portfolioData.fullName}</p>
          <h1>Where engineering meets <span>creativity.</span></h1>
          <p className="hero-intro">{portfolioData.aboutText}</p>
          <div className="hero-actions">
            <a className="primary-action magnetic-button liquid-button" href="#projects" onMouseMove={handleMagneticMove} onMouseLeave={resetMagnetic}>View my work <ArrowRight size={16} /></a>
            <a className="secondary-action magnetic-button" href="#contact" onMouseMove={handleMagneticMove} onMouseLeave={resetMagnetic}>Get in touch</a>
          </div>
          <div className="hero-stats">
            {stats.map(([label, value]) => <div className="stat-tile" key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, rotateX: 8 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hero-portrait magnetic-surface"
          onMouseMove={handleMagneticMove}
          onMouseLeave={resetMagnetic}
        >
          <div className="portrait-code code-a">model.train(data)</div>
          <div className="portrait-code code-b">solve(real_world_problem)</div>
          <div className="portrait-ring" />
          <img src="/assets/profile/hero-artwork.png" alt="Mokash Kumar portrait" />
        </motion.div>
      </section>

      <motion.section id="about" className="about-panel premium-wrap reveal-panel" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
        <article>
          <SectionHeader eyebrow="About" title="Computer systems student focused on data, AI, and practical software." />
          <p>{portfolioData.aboutText}</p>
          <div className="contact-strip">
            <span><Mail size={16} /> {portfolioData.email}</span>
            <span><MapPin size={16} /> {portfolioData.location}</span>
          </div>
        </article>
        <aside>
          <h3>What I do</h3>
          <p><Code2 size={17} /> Software and web projects</p>
          <p><Database size={17} /> Data analytics and preprocessing</p>
          <p><Sparkles size={17} /> Machine learning fundamentals</p>
          <p><BriefcaseBusiness size={17} /> Team and event coordination</p>
        </aside>
      </motion.section>

      <section id="projects" className="premium-section premium-wrap">
        <div className="section-row">
          <SectionHeader eyebrow="Projects" title="Featured projects" />
          <a className="magnetic-button" href={`https://${portfolioData.github}`} target="_blank" rel="noreferrer" onMouseMove={handleMagneticMove} onMouseLeave={resetMagnetic}>View GitHub <ArrowRight size={15} /></a>
        </div>
        <div className="featured-grid">
          {featuredProjects.map((project) => <ProjectCard project={project} featured key={project.title} />)}
        </div>
        <h3 className="subsection-title">Other projects</h3>
        <div className="other-grid">
          {otherProjects.map((project) => <ProjectCard project={project} key={project.title} />)}
        </div>
      </section>

      <section id="experience" className="premium-section premium-wrap two-column-section">
        <div>
          <SectionHeader eyebrow="Experience" title="Roles and contributions" />
          <div className="timeline">
            {portfolioData.experience.map((item) => (
              <article key={`${item.role}-${item.company}`}>
                <span>{item.duration}</span>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                {item.location && <p className="location">{item.location}</p>}
                <ul>{item.description.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
        <aside className="education-card magnetic-surface" onMouseMove={handleMagneticMove} onMouseLeave={resetMagnetic}>
          <h3><GraduationCap size={18} /> Education</h3>
          <p><strong>{portfolioData.education.degree}</strong>{portfolioData.education.institution}<span>{portfolioData.education.duration}</span></p>
          <h3><Award size={18} /> Certifications</h3>
          {portfolioData.certifications.map((cert) => (
            <p key={cert.title}><strong>{cert.title}</strong>{cert.issuer}</p>
          ))}
        </aside>
      </section>

      <section id="skills" className="premium-section premium-wrap">
        <SectionHeader eyebrow="Skills" title="Skills and technologies" />
        <div className="skills-grid">
          {portfolioData.skills.map((group, index) => {
            const Icon = skillIcons[index] || Code2;
            return (
              <article className="skill-group magnetic-surface" key={group.category} onMouseMove={handleMagneticMove} onMouseLeave={resetMagnetic}>
                <h3><Icon size={18} /> {group.category}</h3>
                <div className="chips">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            );
          })}
        </div>
      </section>

      <motion.section id="contact" className="contact-section premium-wrap reveal-panel" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
        <div className="contact-copy">
          <SectionHeader eyebrow="Contact" title="Let&apos;s connect" />
          <p>Have a project in mind or just want to say hi? I&apos;d love to hear from you.</p>
          <div className="contact-strip vertical">
            <span><Mail size={16} /> {portfolioData.email}</span>
            <span><MapPin size={16} /> {portfolioData.location}</span>
          </div>
          <SocialLinks />
        </div>
        <form onSubmit={submitContact} className="contact-form">
          <div>
            <input name="name" placeholder="Your name" required />
            <input name="email" type="email" placeholder="Your email" required />
          </div>
          <textarea name="message" placeholder="Your message" required />
          <button className="magnetic-button liquid-button" type="submit" onMouseMove={handleMagneticMove} onMouseLeave={resetMagnetic}>{formState} <Send size={15} /></button>
        </form>
      </motion.section>

      <footer className="premium-footer premium-wrap">
        <p>© 2024 {portfolioData.fullName}. All Rights Reserved.</p>
        <a href="#home">Back to top</a>
      </footer>
    </main>
  );
}
