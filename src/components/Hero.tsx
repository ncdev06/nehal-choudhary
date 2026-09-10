"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Code2, FileText } from "lucide-react";
import { site } from "@/data/site";

const stats = [
  { value: "80%+", label: "manual effort reduced" },
  { value: "32+", label: "devices scheduled concurrently" },
  { value: "3×", label: "hackathon podium finishes" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="mesh relative overflow-hidden border-b border-[var(--line)]">
      <div className="section-pad mx-auto grid min-h-[92svh] max-w-6xl items-center gap-14 pb-16 pt-28 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-bg-elevated/80 px-3 py-1.5 text-xs font-medium text-ink-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            UC San Diego · {site.education.graduation}
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-lavender-deep">
            Software Engineering · Applied ML
          </p>
          <h1 className="mt-4 max-w-4xl text-[clamp(3rem,8vw,6.4rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-ink">
            Building software that works beyond the demo.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-ink-soft md:text-lg">
            I&apos;m {site.name}, a Math–CS and Cognitive Science–ML student at UCSD. I build full-stack systems, AI-powered developer tools, and applied ML products with a focus on reliability, evaluation, and real users.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/#projects" className="btn-primary group">
              View selected work
              <ArrowDownRight size={16} className="transition group-hover:translate-y-0.5" />
            </Link>
            <a href={site.resumes[0].href} target="_blank" rel="noreferrer" className="btn-secondary">
              <FileText size={15} /> Resume
            </a>
            <a href={site.links.github} target="_blank" rel="noreferrer" className="btn-secondary">
              <Code2 size={15} /> GitHub
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
            {["Python", "TypeScript", "React", "FastAPI", "PyTorch", "AWS"].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={reduce ? false : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[1.75rem] border border-[var(--line)] bg-bg-elevated/80 p-6 shadow-[var(--shadow)] backdrop-blur md:p-8"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">At a glance</p>
              <p className="mt-2 text-lg font-semibold text-ink">Systems + ML, end to end</p>
            </div>
            <ArrowUpRight size={20} className="text-lavender-deep" />
          </div>

          <div className="mt-7 grid gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[var(--line)] bg-bg px-5 py-4">
                <p className="text-3xl font-semibold tracking-tight text-ink">{stat.value}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-[var(--line)] bg-[var(--accent-soft)] px-5 py-4">
            <p className="text-sm font-medium text-ink">Recent work</p>
            <p className="mt-2 text-sm leading-6 text-ink-soft">
              Android automation at EchoStar / Boost Mobile, multimodal model evaluation at UCSD, and live recommendation systems built for the web.
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
