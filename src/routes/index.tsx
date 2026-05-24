import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Mail, Linkedin } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayomikun Ewuoso — Fullstack & AI Systems Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Emmanuel Ayomikun Ewuoso — fullstack software engineer building AI-powered systems, scalable backends, and intelligent automation tools.",
      },
      { property: "og:title", content: "Ayomikun Ewuoso — Fullstack & AI Systems Engineer" },
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
        <Experience />
        <Skills />
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
            Ayomikun{" "}
          </span>
          Ewuoso
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Fullstack Software Engineer · AI Systems & Backend Engineer
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80">
          I build production AI systems, backend platforms, and data-driven automation tools across education, 
          finance, analytics, and more, from multi-agent assistants to document intelligence and large-scale data pipelines.
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
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition hover:border-foreground/30"
            >
              <div>
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
              </div>
              <div className="mt-6 flex items-center justify-between text-sm">
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="inline-flex items-center gap-1 font-medium text-foreground transition hover:text-accent"
                >
                  View Details <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-foreground transition hover:text-accent"
                  >
                    Visit {p.name} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
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
            I'm a software engineer building AI-powered systems that go beyond prototypes, 
            from document-driven learning platforms and agent-based business tools to 
            contract analysis and data-intensive backend systems.
          </p>
          <p>
            My work sits at the intersection of backend engineering, data systems, and LLM orchestration. 
            I've built and shipped production systems using Node.js, FastAPI, and PostgreSQL, 
            deployed across Google Cloud, Railway, and Netlify.
          </p>
          <p>
            I focus on building systems that are reliable under real usage: 
            well-structured data models, dependable pipelines, and AI features 
            designed for consistency, not just capability.
          </p>
        </div>
      </div>
    </section>
  );
}

const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "AI/ML Engineering",
    items: [
      "LangChain",
      "RAG Systems",
      "OpenAI / Claude / Gemini APIs",
      "Prompt Engineering",
      "Agentic Workflows",
      "Ollama",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn"
    ]
  },

  {
    title: "Backend Systems",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "FastAPI",
      "Flask",
      "REST APIs",
      "System Design"
    ]
  },

  {
    title: "Frontend Engineering",
    items: [
      "HTML",
      "CSS",
      "React",
      "Angular",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design"
    ]
  },

  {
    title: "Data Engineering",
    items: [
      "PySpark",
      "Airflow",
      "ETL Pipelines",
      "Pandas",
      "Data Modeling"
    ]
  },


  {
    title: "Databases & Storage",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLite",
      "SQL Design",
      "Redis"
    ]
  },

  {
    title: "Cloud & DevOps",
    items: [
      "Google Cloud Platform",
      "Docker",
      "CI/CD",
      "Railway",
      "Netlify",
      "Render",
      "Azure"
    ]
  },

  {
    title: "Languages",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL"
    ]
  }
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
    period: "Jul 2025 - Present",
    points: [
      "Led development of AI systems across education, analytics, and automation, including the Maestro learning platform and Monolith analytics system.",
      "Architected distributed multi-service systems using Node.js, PostgreSQL, and AI microservices integrated with LLMs (Gemini, Claude).",
      "Built end-to-end AI pipelines for document ingestion, lesson generation, and adaptive learning workflows.",
      "Deployed and managed cloud infrastructure across Netlify, Railway, and Google Cloud Platform supporting ~2,000+ users across internal and pilot systems."
    ]
  },

  {
    company: "Interswitch Group",
    role: "Data Engineer Intern",
    period: "Mar 2025 - Mar 2026",
    points: [
      "Built Spark-based ETL pipelines processing large-scale financial transaction data across multiple systems.",
      "Developed LLM-powered automation workflows for generating reconciliation configurations from functional requirements documents.",
      "Built agent-based systems for schema discovery and semi-automated reconciliation logic across datasets.",
      "Migrated legacy SSIS pipelines to PySpark and Airflow, improving reliability and reducing maintenance overhead by ~30%."
    ]
  },

  {
    company: "Skrima",
    role: "AI Systems Engineer",
    period: "Sep 2025 - May 2026",
    points: [
      "Built a multi-agent intervention recommendation system using LLM-driven workflows and structured decision logic.",
      "Designed backend services for processing behavioral signals and ranking intervention strategies.",
      "Implemented Google ADK-based orchestration for tool routing and agent coordination.",
      "Improved intervention consistency and accuracy by ~35% through structured prompting and ranking design."
    ]
  },

  {
    company: "Ervis Intelligence",
    role: "Backend Developer",
    period: "Aug 2024 - Nov 2024",
    points: [
      "Built backend APIs for AI-powered contract analysis including clause rewriting and validation workflows.",
      "Designed LangChain-based pipelines for structured LLM document processing.",
      "Developed metadata extraction systems for contract classification and legal attribute detection.",
      "Migrated AI workflows from GPT-3.5 to Claude 3.5 Sonnet, improving output stability and consistency."
    ]
  }
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
            href="https://github.com/Blaze-master"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-xl border border-border bg-card p-5 transition hover:border-foreground/30"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">GitHub</p>
              <p className="mt-1 text-sm font-medium">@Blaze-master</p>
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
