import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }): { project: Project } => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    return {
      meta: [
        { title: p ? `${p.name} — Emmanuel Ewuoso` : "Project — Emmanuel Ewuoso" },
        { name: "description", content: p?.tagline ?? "Project case study" },
        { property: "og:title", content: p?.name ?? "Project" },
        { property: "og:description", content: p?.tagline ?? "" },
      ],
    };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl">Project not found</h1>
        <Link to="/" className="mt-6 inline-block text-sm text-accent">← Back home</Link>
      </div>
    </div>
  ),
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>

        <header className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            {p.status && (
              <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {p.status}
              </span>
            )}
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              {p.role}
            </span>
          </div>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">{p.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{p.tagline}</p>
          <ul className="mt-6 flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <li
                key={t}
                className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
          {(p.github || p.demo) && (
            <div className="mt-6 flex gap-3">
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Live <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium transition hover:border-foreground/40"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              )}
            </div>
          )}
        </header>

        <Section title="Overview">
          <p>{p.description}</p>
        </Section>

        <Section title="Problem">
          <p>{p.problem}</p>
        </Section>

        <Section title="Approach">
          <ul className="list-disc space-y-2 pl-5">
            {p.approach.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Section>

        <Section title="Outcome">
          <p>{p.outcome}</p>
        </Section>

        <Section title="Highlights">
          <ul className="grid gap-2 sm:grid-cols-2">
            {p.highlights.map((h) => (
              <li
                key={h}
                className="rounded-lg border border-border bg-card px-4 py-3 text-sm"
              >
                {h}
              </li>
            ))}
          </ul>
        </Section>
      </article>
      <SiteFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </h2>
      <div className="mt-3 text-base leading-relaxed text-foreground/85">{children}</div>
    </section>
  );
}
