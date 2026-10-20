"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Lock } from "lucide-react";
import type { CaseStudy, Project } from "@/types";
import { MEASURED_AT, MEASURED_AT_EN } from "@/data/case-studies";
import { useLanguage } from "@/lib/i18n";

function GithubIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

type Props = {
  project: Project;
  study: CaseStudy;
};

export function CaseStudyView({ project, study }: Props) {
  const { lang, t } = useLanguage();
  const en = lang === "en";
  const labels = t.caseStudy;
  const title = en && project.title_en ? project.title_en : project.title;
  const summary = en ? study.summary_en : study.summary;
  const context = en ? study.context_en : study.context;
  const limitations = en ? study.limitations_en : study.limitations;
  const hasLighthouse = study.results.some((result) => result.label.startsWith("Lighthouse"));

  return (
    <article className="bg-black pb-24 pt-32 text-white dark:bg-[#101113] sm:pt-36">
      <div className="mx-auto max-w-[820px] px-5">
        <Link
          href="/#projects"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white/75 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          {labels.back}
        </Link>

        <p className="mt-6 text-xs font-black uppercase tracking-[0.14em] text-white/65">{labels.eyebrow}</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{title}</h1>
        <p className="mt-5 text-lg leading-8 text-white/80">{summary}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-xs font-black uppercase tracking-[0.08em] text-black transition-opacity hover:opacity-80"
            >
              <ExternalLink size={14} aria-hidden="true" />
              {labels.viewLive}
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-xs font-black uppercase tracking-[0.08em] text-white transition-colors hover:bg-white hover:text-black"
            >
              <GithubIcon />
              {labels.viewCode}
            </a>
          ) : (
            <span className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-dashed border-white/25 px-6 text-xs font-black uppercase tracking-[0.08em] text-white/65">
              <Lock size={14} aria-hidden="true" />
              {labels.privateCode}
            </span>
          )}
        </div>

        <section aria-labelledby="stack" className="mt-12">
          <h2 id="stack" className="text-xs font-black uppercase tracking-[0.14em] text-white/65">
            {labels.stackTitle}
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <li key={tech} className="rounded-full border border-white/20 px-3 py-1 font-mono text-xs text-white/75">
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="context" className="mt-12">
          <h2 id="context" className="text-2xl font-black tracking-[-0.03em]">
            {labels.contextTitle}
          </h2>
          <p className="mt-4 leading-8 text-white/80">{context}</p>
        </section>

        <section aria-labelledby="decisions" className="mt-12">
          <h2 id="decisions" className="text-2xl font-black tracking-[-0.03em]">
            {labels.decisionsTitle}
          </h2>
          <ol className="mt-6 space-y-8">
            {study.decisions.map((decision, index) => (
              <li key={decision.title} className="border-l border-white/20 pl-5">
                <h3 className="text-lg font-black tracking-[-0.02em]">
                  <span className="mr-2 font-mono text-sm text-white/65">{String(index + 1).padStart(2, "0")}</span>
                  {en ? decision.title_en : decision.title}
                </h3>
                <p className="mt-2 leading-7 text-white/80">{en ? decision.text_en : decision.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="results" className="mt-12">
          <h2 id="results" className="text-2xl font-black tracking-[-0.03em]">
            {labels.resultsTitle}
          </h2>
          <dl className="mt-6 divide-y divide-white/15 border-y border-white/15">
            {study.results.map((result) => (
              <div key={result.label} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <dt className="text-sm text-white/75">{en ? result.label_en : result.label}</dt>
                <dd className="font-mono text-sm font-bold text-white">{result.value}</dd>
              </div>
            ))}
          </dl>
          {hasLighthouse ? (
            <p className="mt-3 text-xs leading-5 text-white/65">
              {labels.resultsNote} {en ? MEASURED_AT_EN : MEASURED_AT}.
            </p>
          ) : null}
        </section>

        <section aria-labelledby="limitations" className="mt-12">
          <h2 id="limitations" className="text-2xl font-black tracking-[-0.03em]">
            {labels.limitationsTitle}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-white/80">
            {limitations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
