"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink, FileText, Mail } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { experiences, projects, site, type Project } from "@/data/site";

const featuredSlugs = [
  "classgraph",
  "create-similar-playlist",
  "techtonic",
  "wildscan",
  "neural-forecasting",
  "otterx",
];

const featuredProjects = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();

  return (
    <FadeIn delay={index * 0.04}>
      <motion.article
        whileHover={reduce ? undefined : { y: -5 }}
        transition={{ duration: 0.2 }}
        className="group flex h-full flex-col rounded-[1.5rem] border border-[var(--line)] bg-bg-elevated p-6 shadow-sm transition hover:border-[var(--accent-line)] hover:shadow-[var(--shadow)] md:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.award && <span className="badge-dark">{project.award}</span>}
            {project.focus.map((focus) => (
              <span key={focus} className="chip">{focus}</span>
            ))}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full border border-[var(--line)] p-2 text-ink-soft transition hover:border-[var(--accent-line)] hover:text-ink"
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-[-0.025em] text-ink">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-ink-soft">{project.blurb}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((tech) => (
            <span key={tech} className="chip">{tech}</span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-[var(--line)] pt-5 text-sm">
          <Link href={`/projects/${project.slug}`} className="font-medium text-ink transition hover:text-lavender-deep">
            Case study
          </Link>
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-soft transition hover:text-ink"
            >
              Live demo <ExternalLink size={13} />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-soft transition hover:text-ink"
            >
              GitHub <Code2 size={13} />
            </a>
          )}
        </div>
      </motion.article>
    </FadeIn>
  );
}

export function About() {
  return (
    <section id="about" className="section-pad mx-auto max-w-6xl py-24 md:py-28">
      <FadeIn>
        <p className="eyebrow">Profile</p>
        <div className="mt-4 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-ink md:text-5xl">
              Engineering depth with a product mindset.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ink-soft">
              My work sits between software engineering and applied machine learning: backend services, automation platforms, model evaluation, and interactive products. I care about systems that are measurable, maintainable, and useful to the people operating them.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-[var(--line)] bg-bg-elevated p-6 md:p-7">
            <p className="text-sm font-semibold text-ink">{site.education.school}</p>
            <p className="mt-2 text-sm leading-6 text-ink-soft">
              {site.education.degrees[0]}<br />
              {site.education.degrees[1]}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="metric-card">
                <p className="metric-label">Graduation</p>
                <p className="metric-value text-base">{site.education.graduation}</p>
              </div>
              <div className="metric-card">
                <p className="metric-label">GPA</p>
                <p className="metric-value text-base">{site.education.gpa}</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {[
          ["Software systems", "Full-stack platforms, APIs, concurrency, automation, testing, and observability."],
          ["Applied ML", "Model evaluation, multimodal systems, time-series forecasting, ranking, and experimentation."],
          ["Technical leadership", "Curriculum, mentorship, team coordination, and K–12 computer science outreach."],
        ].map(([title, description], index) => (
          <FadeIn key={title} delay={0.05 * index}>
            <div className="h-full rounded-2xl border border-[var(--line)] bg-bg-elevated p-5">
              <p className="font-semibold text-ink">{title}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-pad mx-auto max-w-6xl py-24 md:py-28">
      <FadeIn>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-ink md:text-5xl">
              Projects built to be used.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-ink-soft">
            Live products, ML systems, and engineering projects with measurable outcomes. Open a case study for implementation details and my contribution.
          </p>
        </div>
      </FadeIn>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-pad mx-auto max-w-6xl py-24 md:py-28">
      <FadeIn>
        <p className="eyebrow">Experience</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-ink md:text-5xl">
          Building, evaluating, and leading.
        </h2>
      </FadeIn>

      <div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {experiences.map((job, index) => (
          <FadeIn key={job.id} delay={index * 0.04}>
            <article className="grid gap-5 py-8 md:grid-cols-[220px_1fr] md:gap-10">
              <div>
                <p className="text-sm text-ink-faint">{job.period}</p>
                <p className="mt-2 text-sm font-semibold text-ink">{job.org}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">{job.role}</h3>
                <ul className="mt-4 space-y-3">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-7 text-ink-soft">
                      <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-lavender-deep" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function Resume() {
  const resume = site.resumes[0];
  return (
    <section id="resume" className="section-pad mx-auto max-w-6xl py-20 md:py-24">
      <FadeIn>
        <div className="rounded-[1.75rem] border border-[var(--accent-line)] bg-[var(--accent-soft)] p-7 md:flex md:items-center md:justify-between md:gap-10 md:p-10">
          <div>
            <p className="eyebrow">Resume</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-ink md:text-4xl">
              Prefer the one-page version?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-ink-soft">{resume.description}.</p>
          </div>
          <a href={resume.href} target="_blank" rel="noreferrer" className="btn-primary mt-6 shrink-0 md:mt-0">
            <FileText size={16} /> Open resume
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-pad mx-auto max-w-6xl py-24 md:py-28">
      <FadeIn>
        <div className="max-w-3xl">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-ink md:text-5xl">
            Let&apos;s connect.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-ink-soft">
            I&apos;m interested in software engineering and applied ML opportunities where I can build reliable systems, work close to real users, and learn from strong engineering teams.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className="btn-primary"><Mail size={15} /> Email</a>
          <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="btn-secondary"><ExternalLink size={15} /> LinkedIn</a>
          <a href={site.links.github} target="_blank" rel="noreferrer" className="btn-secondary"><Code2 size={15} /> GitHub</a>
        </div>
      </FadeIn>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="section-pad border-t border-[var(--line)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Nehal Choudhary</p>
        <p>Software engineering · Applied ML · San Diego, CA</p>
      </div>
    </footer>
  );
}
