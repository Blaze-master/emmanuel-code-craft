export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status?: "In Progress" | "Live" | "Internal" | "Deployed";
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  highlights: string[];
  role: string;
  problem: string;
  approach: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "maestro",
    name: "Maestro",
    tagline:
      "AI-powered learning platform that turns documents into structured lessons, exercises, and exams.",
    status: "Live",
    description:
      "Flagship fullstack platform that ingests learner documents and generates personalized lessons, practice exercises, and exams using LLMs.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "LangChain", "OpenAI", "GCP"],
    role: "Founder & Lead Engineer",
    problem:
      "Learners and educators spend hours converting raw study material into structured, testable curricula. Existing tools either summarize shallowly or lock content into rigid templates.",
    approach: [
      "Designed a document ingestion pipeline (PDF, DOCX, slides) with chunking, embedding, and structured extraction.",
      "Built an LLM orchestration layer that generates lessons, exercises, and exams aligned to extracted learning objectives.",
      "Implemented personalized progression with spaced retrieval and difficulty adaptation per learner.",
      "Shipped a Next.js frontend backed by a FastAPI service and PostgreSQL, deployed on GCP.",
    ],
    outcome:
      "End-to-end platform converting raw study material into ready-to-use, AI-generated learning programs in minutes.",
    highlights: [
      "Document ingestion pipeline",
      "LLM-driven lesson & exam generation",
      "Personalized learning workflows",
      "Cloud-deployed fullstack architecture",
    ],
  },
  {
    slug: "medilingo",
    name: "MediLingo",
    tagline:
      "Multilingual medical QA system inspired by a Zindi competition, with planned model fine-tuning.",
    status: "In Progress",
    description:
      "AI/ML research project focused on multilingual NLP for medical question answering across low-resource languages.",
    tech: ["Python", "PyTorch", "Transformers", "FastAPI"],
    role: "AI/ML Engineer",
    problem:
      "Quality medical QA in low-resource languages is limited. Generic LLMs hallucinate and lose domain accuracy across translations.",
    approach: [
      "Curating and normalizing multilingual medical QA datasets.",
      "Designing an evaluation harness for factuality and clinical safety.",
      "Planned fine-tuning of open-weight models with domain adapters.",
    ],
    outcome:
      "Active research direction targeting reliable multilingual clinical QA with measurable factuality gains.",
    highlights: [
      "Multilingual NLP",
      "Domain fine-tuning roadmap",
      "Clinical QA evaluation harness",
    ],
  },
  {
    slug: "bizmate",
    name: "BizMate",
    tagline:
      "AI-powered Telegram assistant for SME operations — inventory, orders, customers, analytics.",
    description:
      "Agent-based assistant that lets small business owners manage operations through natural-language chat.",
    tech: ["Python", "FastAPI", "LangChain", "PostgreSQL", "Telegram Bot API"],
    role: "Backend & AI Engineer",
    problem:
      "Many SMEs can't afford or operate full ERP tools but still need to track inventory, orders, customers, and basic analytics.",
    approach: [
      "Designed an agent workflow with intent routing across inventory, orders, customers, and reporting tools.",
      "Implemented a tool-using LLM agent backed by a structured PostgreSQL schema.",
      "Wrapped the experience in a Telegram bot so users transact entirely from chat.",
    ],
    outcome:
      "Prototype demonstrating that core SME operations can run from a single conversational interface.",
    highlights: [
      "Agent-based AI workflow",
      "Conversational business operations",
      "Structured backend tooling",
    ],
  },
  {
    slug: "monolith-analytics",
    name: "Monolith Analytics Dashboard",
    tagline:
      "Internal analytics for product usage, engagement, and AI interaction tracking.",
    status: "Internal",
    description:
      "Production internal tool that surfaces product usage, engagement, and AI interaction metrics in one dashboard.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Recharts"],
    role: "Fullstack Engineer",
    problem:
      "Product and engineering teams lacked a unified view of how AI features were being used and where engagement dropped.",
    approach: [
      "Modeled an event schema covering sessions, AI calls, and feature usage.",
      "Built dashboards for engagement funnels, retention, and AI interaction quality.",
      "Optimized aggregate queries for fast time-range filtering.",
    ],
    outcome:
      "Single source of truth for product analytics powering weekly review decisions.",
    highlights: [
      "Engagement & retention views",
      "AI interaction tracking",
      "Production internal tool",
    ],
  },
  {
    slug: "ervis-contract-api",
    name: "Ervis AI Contract Analysis API",
    tagline:
      "Backend API for AI-powered contract review and clause analysis on the Ervis Intelligence platform.",
    description:
      "Built the AI contract analysis API powering clause extraction, risk flagging, and review workflows for Ervis Intelligence.",
    tech: ["Python", "FastAPI", "LangChain", "PostgreSQL", "OpenAI"],
    role: "Backend Engineer (API ownership only)",
    problem:
      "Manual contract review is slow and inconsistent. The platform needed a reliable backend to extract clauses, flag risk, and structure review output.",
    approach: [
      "Designed clause-level extraction pipelines with LLM + rule-based validation.",
      "Built risk-scoring and clause-classification endpoints consumed by the platform UI.",
      "Implemented async job handling for long contracts and batch review.",
    ],
    outcome:
      "Production AI API enabling structured contract review inside Ervis Intelligence.",
    highlights: [
      "Clause extraction pipeline",
      "LLM + validation hybrid",
      "Async review jobs",
    ],
  },
  {
    slug: "mastpin",
    name: "MastPin",
    tagline:
      "Mast placement optimization using Particle Swarm Optimization and signal propagation modeling.",
    status: "Deployed",
    description:
      "Deployed research + engineering project that optimizes telecom mast placement using PSO and signal propagation models.",
    tech: ["Python", "NumPy", "Flask", "Leaflet"],
    role: "Engineer & Researcher",
    problem:
      "Mast placement decisions impact coverage and cost. Manual planning rarely explores the full search space.",
    approach: [
      "Modeled signal propagation across candidate sites with terrain-aware assumptions.",
      "Implemented Particle Swarm Optimization to search placements maximizing coverage.",
      "Shipped a deployed web app to visualize candidate placements on a map.",
    ],
    outcome:
      "Working tool that proposes optimized mast placements over a target region.",
    highlights: [
      "Particle Swarm Optimization",
      "Signal propagation modeling",
      "Deployed research tool",
    ],
  },
];
