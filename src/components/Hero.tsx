"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { MouseEvent } from "react";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { site } from "@/data/site";

function SplitName({ name }: { name: string }) {
  const reduce = useReducedMotion();
  const parts = name.split(" ");

  return (
    <h1 className="font-[family-name:var(--font-display)] text-[clamp(3.2rem,11vw,7.2rem)] leading-[0.92] tracking-[-0.03em] text-ink">
      {parts.map((word, wi) => (
        <span key={word} className="inline-block whitespace-nowrap">
          {word.split("").map((char, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="inline-block"
              initial={reduce ? false : { opacity: 0, y: 36, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.65,
                delay: 0.18 + wi * 0.12 + i * 0.028,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
          {wi < parts.length - 1 ? <span className="inline-block">&nbsp;</span> : null}
        </span>
      ))}
    </h1>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(255,255,255,0.28), transparent 55%)`;

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <section onMouseMove={onMove} className="relative min-h-[100svh] overflow-hidden mesh">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 mix-blend-soft-light"
        style={{ background: spotlight }}
      />

      <div className="orb left-[-8%] top-[18%] h-64 w-64 bg-lilac/70" />
      <div className="orb orb-delayed right-[-4%] top-[42%] h-72 w-72 bg-lavender/50" />
      <div
        className="orb left-[35%] top-[8%] h-40 w-40 bg-lavender-mist/80"
        style={{ animationDelay: "-3s" }}
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="float-dot"
            style={{
              left: `${8 + ((i * 17) % 84)}%`,
              top: `${12 + ((i * 23) % 70)}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${7 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to top, var(--bg), transparent)" }}
      />

      <div className="section-pad relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end pb-16 pt-28 md:pb-20 md:pt-32">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--line)] bg-bg-elevated/70 px-3 py-1 text-xs text-ink-soft backdrop-blur"
        >
          <motion.span
            animate={reduce ? undefined : { rotate: [0, 12, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={13} className="text-lavender-deep" />
          </motion.span>
          {site.location} · SWE & ML
        </motion.p>

        <SplitName name={site.name} />

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-7 flex max-w-2xl flex-col gap-6 md:mt-9 md:flex-row md:items-end md:justify-between"
        >
          <p className="text-base leading-relaxed text-ink-soft md:text-lg">{site.tagline}</p>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link href="/#projects" className="btn-primary group">
              See my work
              <ArrowDownRight
                size={16}
                className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>
            <Link href="/#contact" className="btn-secondary">
              Say hello
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-14 hidden items-center gap-6 text-xs uppercase tracking-[0.18em] text-ink-faint md:flex"
        >
          {["UCSD", "EchoStar", "Multimodal AI"].map((label, i) => (
            <span key={label} className="inline-flex items-center gap-6">
              {i > 0 && <span className="h-px w-10 bg-lavender/80" />}
              <motion.span
                animate={reduce ? undefined : { opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 3.2, delay: i * 0.4, repeat: Infinity }}
              >
                {label}
              </motion.span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
