export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status?: string;
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
      "AI-powered learning platform that turns documents into personalized and structured lessons, supplemented with assesments, visuals, and interactive elements.",
    status: "Live",
    demo: "https://www.maestrolearningplatform.com/",
    description:
      "Fullstack AI learning platform that ingests educational materials and converts them into structured topics, lessons, exercises, assessments, and enriched lesson experiences with contextual AI support.",
    tech: ["Angular", "Express.js", "FastAPI", "PostgreSQL", "Gemini", "GCP", "Railway"],
    role: "Founder & Lead Engineer",
    problem:
      "Learners and educators spend hours converting raw study material into structured, testable curricula. Existing tools either summarize shallowly or lock content into rigid templates.",
    approach: [
      "Built a multi-service architecture comprising an Angular frontend, Express backend, PostgreSQL database, and dedicated AI services.",
      "Developed a document ingestion and topic extraction pipeline that transforms uploaded materials into structured learning hierarchies.",
      "Implemented AI-powered lesson generation supporting customizable learning preferences and topic-driven navigation.",
      "Designed lesson supplements that enrich generated lessons with contextual visuals, interactive elements, lightweight practice, and adaptive learning aids.",
      "Built a context-aware chatbot that receives lesson, exercise, and assessment metadata to provide in-context explanations and assistance.",
      "Integrated cloud-hosted execution infrastructure for evaluating generated coding activities and learner submissions."
    ],
    outcome:
      "Transforms uploaded educational materials into interactive learning sessions that combine generated lessons, embedded supplements, assessments, and contextual AI guidance.",
    highlights: [
      "Document ingestion & topic extraction",
      "AI-generated lessons & assessments",
      "Interactive lesson supplements",
      "Context-aware educational chatbot",
      "Code execution infrastructure",
      "Distributed cloud architecture"
    ],
  },

  {
    slug: "medilingo",
    name: "MediLingo",
    tagline:
      "Multilingual health QA system exploring retrieval-augmented and translation-based approaches for low-resource African languages.",
    status: "In Progress",
    description:
      "AI/ML research project inspired by a multilingual health question-answering challenge, focused on improving medical QA quality across Luganda, Kiswahili, Akan, and Amharic.",
    tech: ["Python", "PyTorch", "Transformers", "FAISS", "LlamaIndex", "HuggingFace", "Kaggle"],
    role: "Fullstack Developer & AI/ML Engineer",
    problem:
      "Access to reliable health information remains limited across many low-resource African languages. Existing multilingual models often struggle with factual consistency, medical terminology, and cross-language knowledge transfer.",
    approach: [
      "Designed and evaluated two competing architectures: a native multilingual RAG pipeline and an English-pivot translation workflow.",
      "Built reproducible experiment infrastructure driven by configuration files for model training, retrieval evaluation, and end-to-end benchmarking.",
      "Planned construction of multilingual health corpora using translated and native medical resources for retrieval and generation.",
      "Structured training and evaluation pipelines to compare translation quality, retrieval performance, and answer generation across languages.",
      "Implemented experiment tracking and modular infrastructure to support rapid iteration across models and datasets."
    ],
    outcome:
      "Ongoing research exploring scalable approaches for delivering more reliable multilingual medical question answering in low-resource settings.",
    highlights: [
      "Low-resource African language NLP",
      "Dual-path architecture experimentation",
      "Retrieval-augmented generation",
      "Reproducible ML experimentation",
      "Multilingual evaluation pipelines"
    ],
  },

  {
    slug: "bizmate",
    name: "BizMate",
    tagline:
      "Multi-agent AI assistant that helps SMEs manage operations through conversational workflows inside Telegram.",
    description:
      "AI-powered business assistant enabling small businesses to manage inventory, orders, suppliers, customers, and operational insights through natural-language interaction.",
    tech: ["Python", "Google ADK", "Gemini", "FastAPI", "SQLAlchemy", "MySQL", "Telegram Bot API"],
    role: "Backend & AI Engineer",
    problem:
      "Small and medium businesses often rely on fragmented tools or manual processes for operational management, making inventory tracking, customer handling, and business oversight difficult to scale.",
    approach: [
      "Designed a multi-agent architecture where specialized agents collaborate across business domains including registration, inventory, customer operations, supplier workflows, and analytics.",
      "Implemented conversational orchestration using Google ADK to route user intent and coordinate task execution between agents.",
      "Built backend services and a multi-tenant data model supporting multiple businesses, transactional workflows, and operational state management.",
      "Integrated the system into Telegram to enable business operations entirely through chat-based interaction."
    ],
    outcome:
      "Prototype demonstrating how multi-agent systems and conversational interfaces can simplify day-to-day SME operations without traditional ERP complexity.",
    highlights: [
      "Multi-agent orchestration",
      "Conversational business workflows",
      "Multi-tenant architecture",
      "Telegram-native experience",
      "AI-assisted operations"
    ],
  },

  {
    slug: "monolith-analytics",
    name: "Monolith Analytics",
    tagline:
      "Product analytics platform for monitoring usage, engagement, and AI adoption across the Maestro ecosystem.",
    status: "Internal",
    description:
      "Internal analytics platform designed to surface user behavior, activation funnels, feature adoption, and conversational AI insights through interactive dashboards and natural-language exploration.",
    tech: ["Python", "Streamlit", "PostgreSQL", "Pandas", "SQL"],
    role: "Fullstack & Data Engineer",
    problem:
      "Understanding how users engage with AI-powered learning experiences required more than raw database queries. Product decisions needed accessible, real-time visibility into behavior, adoption, and platform performance.",
    approach: [
      "Designed a modular analytics architecture that aggregates and transforms operational data into product-facing insights.",
      "Built interactive dashboards for user growth, activation funnels, lesson engagement, feature usage, and chatbot adoption.",
      "Implemented filtering, KPI tracking, and analytical workflows to support exploration across multiple dimensions of platform behavior.",
      "Integrated an AI-powered analytics assistant capable of answering natural-language questions about platform data."
    ],
    outcome:
      "Created a centralized analytics layer that enables faster product evaluation, insight discovery, and data-informed iteration across the Maestro platform.",
    highlights: [
      "Product analytics platform",
      "Funnel & adoption analysis",
      "AI analytics assistant",
      "Interactive data exploration",
      "Modular analytics architecture"
    ],
  },

  {
    slug: "mastpin",
    name: "MastPin",
    tagline:
      "Telecom mast placement optimization platform using Particle Swarm Optimization and radio propagation modeling.",
    status: "Deployed",
    demo: "https://mastpin.up.railway.app/",
    description:
      "Research and engineering project exploring optimized telecom mast placement through simulation-driven search and wireless coverage modeling, validated on a real-world case study.",
    tech: ["Python", "Flask", "NumPy", "SciPy"],
    role: "Engineer & Researcher",
    problem:
      "Telecom mast placement requires balancing signal coverage, network performance, and infrastructure cost. Manual planning approaches struggle to efficiently explore large placement possibilities.",
    approach: [
      "Modeled wireless signal propagation using the Hata-Okumura model to estimate coverage across candidate locations.",
      "Implemented Particle Swarm Optimization (PSO) to search for mast configurations that improve signal distribution and infrastructure efficiency.",
      "Built a Flask-based application exposing optimization and simulation workflows for experimentation and evaluation.",
      "Developed and deployed an interactive web application for running optimization scenarios and visualizing placement outcomes.",
      "Validated the system through a case study based on a real-world deployment scenario at Babcock University."
    ],
    outcome:
      "Delivered a deployed optimization platform capable of evaluating mast placement strategies and analyzing trade-offs between coverage quality and deployment cost.",
    highlights: [
      "Metaheuristic Algorithms",
      "Particle Swarm Optimization",
      "Hata-Okumura propagation model",
      "Simulation-driven optimization",
      "Real-world case study (Babcock University)",
      "Deployed research platform"
    ],
  }
];
