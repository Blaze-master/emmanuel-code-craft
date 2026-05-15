import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Mail, Linkedin } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emmanuel Ewuoso — Fullstack & AI Systems Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Emmanuel Ewuoso — fullstack software engineer building AI-powered systems, scalable backends, and intelligent automation tools.",
      },
      { property: "og:title", content: "Emmanuel Ewuoso — Fullstack & AI Systems Engineer" },
      {
        property: "og:description",
        content:
          "Fullstack software engineer specializing in AI systems, backend platforms, and data engineering.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--primary)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--accent)" }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for new work
        </div>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
          Emmanuel{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            Ewuoso
          </span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Fullstack Software Engineer · AI Systems & Backend Engineer
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80">
          I build AI-powered systems, scalable backend platforms, and intelligent
          automation tools across education, finance, and analytics.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            View Projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition hover:border-foreground/40"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 flex items-end justify-between gap-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-display text-3xl md:text-4xl">{title}</h2>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader eyebrow="Selected Work" title="Featured Projects" />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition hover:border-foreground/30"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                {p.status && (
                  <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent">
                    {p.status}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.tagline}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-4 text-sm">
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="inline-flex items-center gap-1 font-medium text-foreground transition hover:text-accent"
                >
                  View Details <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground transition hover:text-foreground"
                  >
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-3">
        <div className="md:col-span-1">
          <SectionHeader eyebrow="About" title="Profile" />
        </div>
        <div className="space-y-5 text-base leading-relaxed text-foreground/85 md:col-span-2">
          <p>
            I'm a fullstack software engineer focused on building real-world
            AI-powered systems — from document-ingesting learning platforms to
            agent-based business assistants and contract analysis APIs.
          </p>
          <p>
            My work spans backend architecture, data engineering, and LLM
            orchestration. I've shipped production systems on Node.js, FastAPI,
            and PostgreSQL across Google Cloud, Railway, and Netlify.
          </p>
          <p>
            I care about systems that hold up under real usage: clear data
            models, reliable pipelines, and AI features that earn user trust.
          </p>
        </div>
      </div>
    </section>
  );
}

const skillGroups: { title: string; items: string[] }[] = [
  { title: "Frontend", items: ["React", "Angular", "Next.js", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express", "NestJS", "FastAPI", "Flask"] },
  {
    title: "AI / ML",
    items: ["LangChain", "OpenAI API", "Gemini API", "Claude", "RAG", "PyTorch", "TensorFlow"],
  },
  { title: "Data Engineering", items: ["PySpark", "Airflow", "Pandas"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"] },
  {
    title: "Cloud / DevOps",
    items: ["Google Cloud", "Docker", "Railway", "Netlify", "Azure"],
  },
  { title: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL"] },
];

function Skills() {
  return (
    <section id="skills" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader eyebrow="Toolkit" title="Skills & Stack" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {g.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const experience = [
  {
    company: "Overmind Technologies",
    role: "Founder & Lead Software Engineer",
    period: "Present",
    points: [
      "Lead design and delivery of AI-powered systems across education, analytics, and automation.",
      "Own end-to-end architecture, deployment, and operations.",
      "Ship LLM-driven products including the Maestro learning platform.",
    ],
  },
  {
    company: "Ervis Intelligence",
    role: "Backend Developer",
    period: "Recent",
    points: [
      "Built the AI contract analysis API powering clause extraction and risk review.",
      "Designed LangChain workflows and LLM pipelines for production use.",
      "Owned async job handling for long-document review.",
    ],
  },
  {
    company: "Skrima",
    role: "AI Systems Engineer",
    period: "Recent",
    points: [
      "Built an intervention recommendation system with agent-based AI workflows.",
      "Designed backend services around LLM tool use and structured data.",
    ],
  },
  {
    company: "Interswitch",
    role: "Data Engineer Intern",
    period: "Internship",
    points: [
      "Built ETL pipelines using Spark and Airflow.",
      "Worked on financial reconciliation systems and data infrastructure automation.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader eyebrow="Experience" title="Where I've Worked" />
        <ol className="relative space-y-10 border-l border-border pl-6">
          {experience.map((e) => (
            <li key={e.company} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-accent" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{e.company}</h3>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {e.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{e.role}</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-foreground/85">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader eyebrow="Contact" title="Let's build something" />
        <p className="max-w-2xl text-base text-foreground/85">
          Open to backend, fullstack, and AI engineering roles — full-time or
          collaborative project work.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <a
            href="mailto:ewuoso03@gmail.com"
            className="flex items-center justify-between rounded-xl border border-border bg-card p-5 transition hover:border-foreground/30"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
              <p className="mt-1 text-sm font-medium">ewuoso03@gmail.com</p>
            </div>
            <Mail className="h-5 w-5 text-muted-foreground" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-xl border border-border bg-card p-5 transition hover:border-foreground/30"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">GitHub</p>
              <p className="mt-1 text-sm font-medium">@emmanuelewuoso</p>
            </div>
            <Github className="h-5 w-5 text-muted-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-ewuoso-0005801b8/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-xl border border-border bg-card p-5 transition hover:border-foreground/30"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</p>
              <p className="mt-1 text-sm font-medium">emmanuel-ewuoso</p>
            </div>
            <Linkedin className="h-5 w-5 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}
