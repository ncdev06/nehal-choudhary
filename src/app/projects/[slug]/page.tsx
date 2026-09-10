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

function youtubeEmbed(url: string) {
  const match = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
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

  const videoEmbed = project.links.video ? youtubeEmbed(project.links.video) : null;

  return (
    <>
      <article className="section-pad mx-auto max-w-5xl pb-20 pt-28 md:pt-32">
        <FadeIn>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-ink-soft transition hover:text-ink"
          >
            <ArrowLeft size={15} />
            All projects
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {project.award && <span className="badge-dark px-3 py-1 text-xs">{project.award}</span>}
            {project.focus.map((f) => (
              <span
                key={f}
                className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-ink-faint"
              >
                {f}
              </span>
            ))}
          </div>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl tracking-tight md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {project.summary}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn-primary">
                Live demo <ExternalLink size={14} />
              </a>
            )}
            {project.links.video && (
              <a href={project.links.video} target="_blank" rel="noreferrer" className="btn-primary">
                Watch demo <ExternalLink size={14} />
              </a>
            )}
            {project.links.competition && (
              <a
                href={project.links.competition}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Competition <ExternalLink size={14} />
              </a>
            )}
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer" className="btn-secondary">
                <Code2 size={14} /> Repository
              </a>
            )}
            {project.links.devpost && (
              <a href={project.links.devpost} target="_blank" rel="noreferrer" className="btn-secondary">
                Devpost <ExternalLink size={14} />
              </a>
            )}
          </div>
        </FadeIn>

        {project.links.demo ? (
          <FadeIn delay={0.1} className="mt-12">
            <div className="overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-bg-elevated shadow-[var(--shadow)]">
              <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-3 text-xs text-ink-faint">
                <span>Embedded demo</span>
                <a href={project.links.demo} target="_blank" rel="noreferrer" className="hover:text-ink">
                  Open fullscreen
                </a>
              </div>
              <iframe
                src={project.links.demo}
                title={`${project.title} demo`}
                className="h-[28rem] w-full bg-white md:h-[34rem]"
                loading="lazy"
              />
            </div>
          </FadeIn>
        ) : videoEmbed ? (
          <FadeIn delay={0.1} className="mt-12">
            <div className="overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-bg-elevated shadow-[var(--shadow)]">
              <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-3 text-xs text-ink-faint">
                <span>Demo video</span>
                <a href={project.links.video} target="_blank" rel="noreferrer" className="hover:text-ink">
                  Open on YouTube
                </a>
              </div>
              <iframe
                src={videoEmbed}
                title={`${project.title} video`}
                className="aspect-video h-auto w-full bg-black"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.1} className="mt-12">
            <div className="rounded-[1.5rem] border border-dashed border-lavender-deep/40 bg-lavender-mist/30 px-6 py-10 text-center">
              <p className="font-[family-name:var(--font-display)] text-xl text-ink">
                {project.links.competition ? "No live demo" : "Demo placeholder"}
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">
                {project.demoNote ?? "A hosted demo link will go here once available."}
              </p>
              {project.links.competition && (
                <a
                  href={project.links.competition}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary mt-5 inline-flex"
                >
                  View competition <ExternalLink size={14} />
                </a>
              )}
            </div>
          </FadeIn>
        )}

        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_0.9fr]">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
              Highlights
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lavender-deep" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h2 className="mt-10 font-[family-name:var(--font-display)] text-2xl tracking-tight">
              My contribution
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.contribution}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--line)] bg-bg-elevated px-3 py-1 text-xs text-ink-soft"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>

          {project.codeSnippet && (
            <FadeIn delay={0.08}>
              <div className="code-panel">
                <div className="code-bar">
                  <span>{project.codeSnippet.filename}</span>
                  <span>{project.codeSnippet.language}</span>
                </div>
                <pre>
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            </FadeIn>
          )}
        </div>
      </article>
      <Footer />
    </>
  );
}
