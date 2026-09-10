import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Sections";
import { getProject, projects } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.blurb,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <article className="section-pad mx-auto max-w-5xl pb-20 pt-28 md:pt-32">
        <FadeIn>
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-ink-soft transition hover:text-ink">
            <ArrowLeft size={15} /> Back to selected work
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            {project.award && <span className="badge-dark">{project.award}</span>}
            {project.focus.map((focus) => <span key={focus} className="chip">{focus}</span>)}
          </div>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-ink md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-soft">{project.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn-primary">
                Open live project <ExternalLink size={14} />
              </a>
            )}
            {project.links.video && (
              <a href={project.links.video} target="_blank" rel="noreferrer" className="btn-primary">
                Watch demo <ExternalLink size={14} />
              </a>
            )}
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer" className="btn-secondary">
                <Code2 size={14} /> GitHub
              </a>
            )}
            {project.links.devpost && (
              <a href={project.links.devpost} target="_blank" rel="noreferrer" className="btn-secondary">
                Devpost <ExternalLink size={14} />
              </a>
            )}
            {project.links.competition && (
              <a href={project.links.competition} target="_blank" rel="noreferrer" className="btn-secondary">
                Competition <ExternalLink size={14} />
              </a>
            )}
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <FadeIn>
            <section className="h-full rounded-[1.5rem] border border-[var(--line)] bg-bg-elevated p-6 md:p-7">
              <p className="eyebrow">Impact</p>
              <ul className="mt-5 space-y-4">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-7 text-ink-soft">
                    <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-lavender-deep" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>

          <FadeIn delay={0.06}>
            <section className="h-full rounded-[1.5rem] border border-[var(--line)] bg-bg-elevated p-6 md:p-7">
              <p className="eyebrow">My contribution</p>
              <p className="mt-5 text-sm leading-7 text-ink-soft">{project.contribution}</p>
              <div className="mt-7 border-t border-[var(--line)] pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">Tech</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => <span key={tech} className="chip">{tech}</span>)}
                </div>
              </div>
            </section>
          </FadeIn>
        </div>

        {!project.links.demo && !project.links.video && project.demoNote && (
          <FadeIn delay={0.1} className="mt-5">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--accent-soft)] px-5 py-4 text-sm leading-6 text-ink-soft">
              {project.demoNote}
            </div>
          </FadeIn>
        )}
      </article>
      <Footer />
    </>
  );
}
