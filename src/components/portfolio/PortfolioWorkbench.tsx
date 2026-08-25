"use client";

import Image from "next/image";
import type { ComponentType } from "react";
import { ArrowDownToLine, ArrowUpRight, Languages, Mail } from "lucide-react";
import { projects } from "@/data/projects";
import { workbenchCopy } from "@/data/workbench";
import { useLanguage } from "@/lib/i18n";

const links = {
  github: "https://github.com/LipDev-sudo",
  linkedin: "https://www.linkedin.com/in/hamilton-felipe-875054383/",
  email: "mailto:hamiltonfelipe019@gmail.com",
  resume: "/documents/curriculo-hamilton-felipe.pdf",
} as const;

type Icon = ComponentType<{ size?: number; "aria-hidden"?: boolean | "true" | "false" }>;

function GitHubIcon({ size = 16, ...props }: { size?: number; "aria-hidden"?: boolean | "true" | "false" }) {
  return <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12Z" /></svg>;
}

function LinkedInIcon({ size = 16, ...props }: { size?: number; "aria-hidden"?: boolean | "true" | "false" }) {
  return <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0Z" /></svg>;
}

function Action({ href, label, icon: IconComponent = ArrowUpRight, download = false }: { href: string; label: string; icon?: Icon; download?: boolean }) {
  const external = href.startsWith("http");
  return (
    <a className="neo-button" href={href} download={download || undefined} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
      <span>{label}</span><IconComponent aria-hidden="true" size={16} />
    </a>
  );
}

function ToolLedger({ title, tools }: { title: string; tools: Array<{ name: string; level: string }> }) {
  return (
    <div className="neo-inset tool-ledger">
      <h3>{title}</h3>
      <dl>{tools.map((tool) => <div key={tool.name} className="tool-row"><dt>{tool.name}</dt><dd>{tool.level}</dd></div>)}</dl>
    </div>
  );
}

export function PortfolioWorkbench() {
  const { lang, toggle } = useLanguage();
  const copy = workbenchCopy[lang];
  const previousProjects = projects.filter((project) => project.category === "previous-work");

  return (
    <div className="workbench-shell">
      <a className="skip-link" href="#content">{lang === "pt" ? "Ir para o conteúdo" : "Skip to content"}</a>
      <header className="workbench-bar">
        <a className="brand-plate" href="#top" aria-label="LipDev — início"><span aria-hidden="true">L</span><strong>LipDev</strong><code>portfolio.py</code></a>
        <nav aria-label={lang === "pt" ? "Navegação principal" : "Main navigation"}>
          <a href="#tools">{copy.navigation.tools}</a><a href="#projects">{copy.navigation.projects}</a><a href="#journey">{copy.navigation.journey}</a><a href="#contact">{copy.navigation.contact}</a>
        </nav>
        <div className="bar-actions">
          <button className="square-control" type="button" onClick={toggle} title={copy.navigation.language} aria-label={copy.navigation.language}><Languages aria-hidden="true" size={17} /><span>{lang === "pt" ? "EN" : "PT"}</span></button>
          <a className="resume-control" href={links.resume} download>{copy.navigation.resume}<ArrowDownToLine aria-hidden="true" size={15} /></a>
        </div>
      </header>

      <main id="content">
        <section id="top" className="neo-panel hero-workbench" aria-labelledby="hero-title">
          <div className="portrait-rig">
            <div className="portrait-frame"><Image src="/images/hamilton-purple-portrait.webp" alt={lang === "pt" ? "Retrato ilustrado de Hamilton Felipe com iluminação roxa" : "Illustrated portrait of Hamilton Felipe with purple lighting"} width={1254} height={1254} priority /></div>
            <p className="availability-line"><span aria-hidden="true" />{copy.hero.availability}</p>
          </div>
          <div className="hero-copy">
            <p className="command-line" aria-hidden="true">~/lipdev <span>$</span> whoami</p>
            <h1 id="hero-title">Hamilton Felipe</h1><h2>{copy.hero.role}</h2><p>{copy.hero.summary}</p>
            <div className="hero-actions"><Action href={links.github} label={copy.hero.github} icon={GitHubIcon} /><a className="neo-button neo-button-secondary" href="#contact"><span>{copy.hero.contact}</span><Mail aria-hidden="true" size={16} /></a></div>
          </div>
        </section>

        <section id="tools" className="section-block" aria-labelledby="tools-title">
          <div className="section-heading"><span>01</span><div><h2 id="tools-title">{copy.tools.title}</h2><p>{copy.tools.description}</p></div></div>
          <div className="tool-columns"><ToolLedger title={copy.tools.current} tools={copy.currentTools} /><ToolLedger title={copy.tools.learning} tools={copy.learningTools} /></div>
        </section>

        <section id="projects" className="section-block" aria-labelledby="projects-title">
          <div className="section-heading"><span>02</span><div><h2 id="projects-title">{copy.projects.title}</h2><p>{copy.projects.description}</p></div></div>
          <article className="neo-panel odin-project">
            <div className="project-index" aria-hidden="true">ODIN/01</div>
            <div className="odin-main"><div className="project-state"><span>{copy.projects.odinStatus}</span><code>{copy.projects.odinScope}</code></div><h3>{copy.projects.odinTitle}</h3><p className="project-lead">{copy.projects.odinDescription}</p><div className="neo-inset project-note"><strong>{lang === "pt" ? "Estado real" : "Current state"}</strong><p>{copy.projects.odinNext}</p></div></div>
          </article>
          <div className="previous-work"><h3>{copy.projects.previous}</h3>{previousProjects.map((project) => (
            <article key={project.id} className="project-row"><div><h4>{lang === "pt" ? project.title : project.title_en}</h4><p>{lang === "pt" ? project.description : project.description_en}</p></div><div className="project-row-actions">{project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">{copy.projects.code}<ArrowUpRight aria-hidden="true" size={14} /></a> : null}{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">{copy.projects.demo}<ArrowUpRight aria-hidden="true" size={14} /></a> : null}</div></article>
          ))}</div>
        </section>

        <section id="journey" className="section-block" aria-labelledby="journey-title">
          <div className="section-heading"><span>03</span><div><h2 id="journey-title">{copy.journeySection.title}</h2><p>{copy.journeySection.description}</p></div></div>
          <ol className="journey-ledger">{copy.journey.map((item, index) => <li key={item.title}><span className="journey-number">{String(index + 1).padStart(2, "0")}</span><time>{item.date}</time><div><h3>{item.title}</h3><p>{item.description}</p></div></li>)}</ol>
        </section>

        <section id="contact" className="neo-panel contact-console" aria-labelledby="contact-title">
          <div><h2 id="contact-title">{copy.contact.title}</h2><p>{copy.contact.description}</p></div>
          <div className="contact-actions"><Action href={links.email} label={copy.contact.email} icon={Mail} /><Action href={links.github} label={copy.contact.github} icon={GitHubIcon} /><Action href={links.linkedin} label={copy.contact.linkedin} icon={LinkedInIcon} /><Action href={links.resume} label={copy.contact.resume} icon={ArrowDownToLine} download /></div>
        </section>
      </main>

      <footer className="workbench-footer"><Image src="/images/gengar.png" alt="" width={500} height={493} loading="eager" unoptimized aria-hidden="true" /><blockquote>{copy.footer.quote}</blockquote><p>{copy.footer.note}</p></footer>
    </div>
  );
}
