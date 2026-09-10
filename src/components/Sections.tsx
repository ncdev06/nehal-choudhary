"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import type { MouseEvent } from "react";
import { FadeIn } from "@/components/FadeIn";
import { experiences, projects, site, type Project } from "@/data/site";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const glow = useMotionTemplate`radial-gradient(280px circle at ${mx}px ${my}px, rgba(168,152,196,0.28), transparent 55%)`;

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <FadeIn delay={0.05 * index}>
      <motion.article
        onMouseMove={onMove}
        whileHover={reduce ? undefined : { y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-bg-elevated p-6 md:p-7"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glow }}
        />
        <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-lavender-mist/50 blur-2xl transition duration-500 group-hover:scale-125 group-hover:bg-lilac/60" />

        <div className="relative flex items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {project.award && <span className="badge-dark">{project.award}</span>}
              {project.focus.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-[var(--line)] px-2.5 py-0.5 text-[11px] text-ink-faint"
                >
                  {f}
                </span>
              ))}
            </div>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl tracking-tight">
              {project.title}
            </h3>
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full border border-[var(--line)] p-2 text-ink-soft transition group-hover:rotate-12 group-hover:border-lavender-deep group-hover:text-ink"
            aria-label={`Open ${project.title}`}
          >
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{project.blurb}</p>

        <div className="relative mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-full bg-bg px-2.5 py-1 text-[11px] text-ink-faint">
              {tech}
            </span>
          ))}
        </div>

        <div className="relative mt-6 flex flex-wrap gap-3 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="font-medium text-lavender-deep underline-offset-4 hover:underline"
          >
            Read more
          </Link>
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-ink-soft hover:text-ink"
            >
              Demo <ExternalLink size={13} />
            </a>
          )}
          {project.links.video && (
            <a
              href={project.links.video}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-ink-soft hover:text-ink"
            >
              Video <ExternalLink size={13} />
            </a>
          )}
          {project.links.competition && (
            <a
              href={project.links.competition}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-ink-soft hover:text-ink"
            >
              Competition <ExternalLink size={13} />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-ink-soft hover:text-ink"
            >
              Code <Code2 size={13} />
            </a>
          )}
        </div>
      </motion.article>
    </FadeIn>
  );
}

export function About() {
  return (
    <section id="about" className="section-pad mx-auto max-w-6xl py-24 md:py-32">
      <FadeIn>
        <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">About</p>
        <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-tight tracking-tight md:text-5xl">
          I like building things that are{" "}
          <span className="text-shimmer">useful</span> and a little bit{" "}
          <span className="text-lavender-deep">clever</span>.
        </h2>
      </FadeIn>

      <div className="mt-12 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
        <FadeIn delay={0.08}>
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
            <p>
              I&apos;m {site.name}, studying {site.education.degrees[0]} and{" "}
              {site.education.degrees[1]} at {site.education.school} (
              {site.education.gpa} GPA). Day to day, I bounce between full-stack
              product work and ML — whatever helps ship something people can
              actually use.
            </p>
            <p>
              Right now that looks like LLM-powered device automation at EchoStar /
              Boost Mobile, multimodal eval research at UCSD&apos;s Cognitive
              Development Lab, and hackathon projects where I get to try weird
              ideas quickly and see what sticks.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.16}>
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-[1.5rem] border border-[var(--line)] bg-bg-elevated p-6 shadow-[var(--shadow)]"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-ink-faint">These days</p>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender-deep" />
                Full-stack tools and platforms
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender-deep" />
                LLM eval, agents, and MCP hooks
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender-deep" />
                Multimodal + time-series ML
              </li>
            </ul>
            <div className="reveal-line my-5" />
            <p className="text-xs uppercase tracking-[0.16em] text-ink-faint">Tools I reach for</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[...site.skills.languages.slice(0, 5), ...site.skills.frameworks.slice(0, 4)].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--line)] bg-bg px-2.5 py-1 text-xs text-ink-soft transition hover:border-lavender hover:bg-lavender-mist/40"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-pad mx-auto max-w-6xl py-24 md:py-28">
      <FadeIn>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">Projects</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
              A few things I&apos;ve shipped
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-soft">
            Mix of SWE and ML. Click through for demos, notes, and a bit of the
            code behind each one.
          </p>
        </div>
      </FadeIn>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-pad mx-auto max-w-6xl py-24 md:py-28">
      <FadeIn>
        <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">Experience</p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
          Where I&apos;ve been lately
        </h2>
      </FadeIn>

      <div className="mt-12 space-y-0">
        {experiences.map((job, i) => (
          <FadeIn key={job.id} delay={0.05 * i}>
            <motion.article
              whileHover={{ x: 4 }}
              className="grid gap-4 border-t border-[var(--line)] py-8 md:grid-cols-[220px_1fr] md:gap-10"
            >
              <div>
                <p className="text-sm text-ink-faint">{job.period}</p>
                <p className="mt-2 font-medium text-ink">{job.org}</p>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
                  {job.role}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lavender" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[11px] text-ink-faint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function Resume() {
  return (
    <section id="resume" className="section-pad mx-auto max-w-6xl py-24 md:py-28">
      <FadeIn>
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-gradient-to-br from-bg-elevated via-lavender-mist/40 to-bg-deep p-8 shadow-[var(--shadow)] md:p-12">
          <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 animate-[drift_12s_ease-in-out_infinite] rounded-full bg-lilac/40 blur-3xl" />
          <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">Resume</p>
          <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
            The short version
          </h2>
          <p className="mt-4 max-w-lg text-ink-soft">
            One cohesive resume covering SWE, ML, research, and outreach.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-1 sm:max-w-md">
            {site.resumes.map((resume) => (
              <motion.a
                key={resume.href}
                href={resume.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.01 }}
                className="group flex items-center justify-between rounded-2xl border border-[var(--line)] bg-bg-elevated/90 px-5 py-5 transition hover:border-lavender-deep"
              >
                <div>
                  <p className="font-medium text-ink">{resume.label}</p>
                  <p className="mt-1 text-sm text-ink-soft">{resume.description}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-ink-faint transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lavender-deep"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-pad mx-auto max-w-6xl py-24 md:py-32">
      <FadeIn>
        <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">Contact</p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
          Want to chat?
        </h2>
        <p className="mt-4 max-w-xl text-ink-soft">
          Always down to talk internships, research, or just cool systems problems —
          SWE, ML, or somewhere in between.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a href={`mailto:${site.email}`} className="btn-primary justify-center">
            {site.email}
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary justify-center"
          >
            LinkedIn
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary justify-center"
          >
            GitHub
          </a>
          <a
            href={site.links.devpost}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary justify-center"
          >
            Devpost
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="section-pad border-t border-[var(--line)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-[family-name:var(--font-display)] italic text-ink-soft">
          thanks for stopping by
        </p>
      </div>
    </footer>
  );
}
