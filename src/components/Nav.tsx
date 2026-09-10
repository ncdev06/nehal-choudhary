"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { href: "/#projects", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        solid
          ? "border-[var(--line)] bg-[rgba(10,14,22,0.82)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="section-pad mx-auto flex h-16 max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--accent-line)] bg-[var(--accent-soft)] text-xs font-bold text-lavender-deep">
            NC
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-ink">
              {link.label}
            </Link>
          ))}
          <a href={site.resumes[0].href} target="_blank" rel="noreferrer" className="btn-secondary !px-3.5 !py-2">
            <FileText size={14} /> Resume
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-[var(--line)] bg-bg-elevated p-2 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="section-pad border-t border-[var(--line)] bg-bg-elevated pb-5 md:hidden"
          >
            <div className="flex flex-col gap-1 pt-3 text-sm text-ink-soft">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-xl px-3 py-2.5 transition hover:bg-[var(--accent-soft)] hover:text-ink">
                  {link.label}
                </Link>
              ))}
              <a href={site.resumes[0].href} target="_blank" rel="noreferrer" className="mt-2 rounded-xl px-3 py-2.5 font-medium text-ink">
                Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
