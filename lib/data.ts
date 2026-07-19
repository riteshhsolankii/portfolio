/**
 * ─────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH for all portfolio content.
 *  Edit this file to personalize every section of the site.
 *  Entries marked with `// EDIT:` contain example data that you
 *  should replace with your real numbers, projects and history.
 * ─────────────────────────────────────────────────────────────
 */

export const SITE = {
  name: "Ritesh Solanki",
  initials: "RS",
  roles: ["Frontend Developer", "Full Stack Developer", "AI Automation Engineer"],
  headline: "I Build Beautiful Web Experiences That Solve Real Business Problems.",
  subheadline:
    "Design-obsessed engineer crafting fast, accessible, conversion-focused products for startups and global clients.",
  email: "riteshhsolankii@gmail.com",
  location: "India · Working Worldwide",
  url: "https://riteshsolanki.dev", // EDIT: your production domain
  resumeUrl: "/resume.pdf", // EDIT: drop your resume PDF into /public/resume.pdf
  socials: {
    github: "https://github.com/riteshhsolankii", // EDIT
    linkedin: "https://www.linkedin.com/in/riteshhsolankii", // EDIT
    whatsapp: "https://wa.me/919111133600",
    email: "mailto:riteshhsolankii@gmail.com",
  },
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
] as const;

// ── Section 2 · About ────────────────────────────────────────
export const ABOUT = {
  intro:
    "I'm a developer who treats every pixel and every millisecond as part of the product. I partner with founders and teams to turn ambiguous ideas into polished, revenue-generating software — from marketing sites that convert to full-stack platforms and AI-powered automations.",
  stats: [
    { value: 4, suffix: "+", label: "Years Experience" }, // EDIT
    { value: 40, suffix: "+", label: "Projects Shipped" }, // EDIT
    { value: 25, suffix: "+", label: "Technologies" }, // EDIT
    { value: 12, suffix: "+", label: "Countries Worked With" }, // EDIT
  ],
  focus: {
    title: "Current Focus",
    items: [
      "AI-powered workflow automation for businesses",
      "High-performance Next.js applications",
      "Design systems & premium UI engineering",
    ],
  },
} as const;

// ── Section 3 · Tech Stack ───────────────────────────────────
export type TechCategory = {
  title: string;
  items: { name: string; icon: string }[];
};

export const TECH_STACK: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Framer Motion", icon: "SiFramer" },
      { name: "Redux", icon: "SiRedux" },
    ],
  },
  {
    title: "AI",
    items: [
      { name: "OpenAI", icon: "RiOpenaiFill" },
      { name: "LangChain", icon: "SiLangchain" },
      { name: "Hugging Face", icon: "SiHuggingface" },
      { name: "n8n", icon: "SiN8N" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: "SiGit" },
      { name: "Figma", icon: "SiFigma" },
      { name: "VS Code", icon: "SiVscodium" },
      { name: "Shopify", icon: "SiShopify" },
      { name: "WordPress", icon: "SiWordpress" },
    ],
  },
];

// ── Section 4 · Featured Projects ────────────────────────────
export type Project = {
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  impact: string;
  features: string[];
  stack: string[];
  github: string;
  demo: string;
  caseStudy: string;
  gradient: string; // used by the generated project visual
};

// EDIT: Replace these four example projects with your real work.
export const PROJECTS: Project[] = [
  {
    title: "FlowPilot AI",
    tagline: "AI workflow automation platform for agencies",
    problem:
      "Agencies were losing 15+ hours a week to repetitive client onboarding, reporting and follow-up tasks spread across disconnected tools.",
    solution:
      "Built a full-stack automation platform with a visual workflow builder, GPT-powered content steps and native integrations for Slack, Gmail and Notion.",
    impact:
      "Cut manual operations work by 70% for early customers and processed 50k+ automated runs in the first quarter.",
    features: [
      "Drag-and-drop workflow builder",
      "GPT-4 powered smart steps",
      "Real-time run monitoring",
      "Team roles & audit logs",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI", "Tailwind"],
    github: "https://github.com/riteshhsolankii", // EDIT
    demo: "#", // EDIT
    caseStudy: "#", // EDIT
    gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
  },
  {
    title: "Lumen Commerce",
    tagline: "Headless storefront for a D2C fashion brand",
    problem:
      "A growing fashion brand's Shopify theme loaded in 6+ seconds on mobile, tanking conversion and paid-ads ROI.",
    solution:
      "Rebuilt the storefront headless with Next.js on top of the Shopify Storefront API — edge-rendered pages, optimistic cart and image optimization throughout.",
    impact:
      "Lighthouse scores went from 43 to 98 and mobile conversion rate improved 32% within two months of launch.",
    features: [
      "Edge-rendered product pages",
      "Optimistic cart & checkout",
      "CMS-driven landing pages",
      "A/B-testable sections",
    ],
    stack: ["Next.js", "Shopify", "GraphQL", "Tailwind", "Vercel"],
    github: "https://github.com/riteshhsolankii", // EDIT
    demo: "#", // EDIT
    caseStudy: "#", // EDIT
    gradient: "from-cyan-500 via-sky-500 to-blue-600",
  },
  {
    title: "InsightBoard",
    tagline: "Real-time analytics dashboard for SaaS teams",
    problem:
      "A B2B SaaS team was flying blind between weekly exports — no live view of activation, churn signals or feature usage.",
    solution:
      "Designed and shipped a real-time analytics product with streaming ingestion, cohort views and alerting, wrapped in a fast, keyboard-friendly UI.",
    impact:
      "Reduced time-to-insight from days to seconds and became the team's default daily tool across 3 departments.",
    features: [
      "Live event streaming",
      "Cohort & funnel analysis",
      "Custom alert rules",
      "Command-palette navigation",
    ],
    stack: ["React", "Node.js", "Redis", "PostgreSQL", "WebSockets"],
    github: "https://github.com/riteshhsolankii", // EDIT
    demo: "#", // EDIT
    caseStudy: "#", // EDIT
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    title: "Atlas CRM Automations",
    tagline: "AI assistant layer on top of a legacy CRM",
    problem:
      "A sales team of 20 spent hours daily writing follow-ups and logging calls into an aging CRM nobody wanted to touch.",
    solution:
      "Built an AI layer that transcribes calls, drafts personalized follow-ups and syncs structured notes back to the CRM automatically via its API.",
    impact:
      "Saved each rep ~6 hours per week and lifted reply rates on follow-ups by 41%.",
    features: [
      "Call transcription & summaries",
      "Personalized email drafting",
      "Two-way CRM sync",
      "Manager analytics digest",
    ],
    stack: ["Python", "OpenAI", "Next.js", "AWS", "MongoDB"],
    github: "https://github.com/riteshhsolankii", // EDIT
    demo: "#", // EDIT
    caseStudy: "#", // EDIT
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
];

// ── Section 5 · Experience ───────────────────────────────────
export type Experience = {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
};

// EDIT: Replace with your real work history.
export const EXPERIENCE: Experience[] = [
  {
    company: "SeqOps",
    role: "Full Stack Developer & AI Automation Engineer",
    duration: "2024 — Present",
    achievements: [
      "Own end-to-end delivery of client web platforms, from design system to deployment",
      "Built AI automation pipelines that eliminated hundreds of hours of manual work",
      "Led performance overhauls bringing key products to 95+ Lighthouse scores",
    ],
  },
  {
    company: "Freelance · Global Clients",
    role: "Frontend Developer & Consultant",
    duration: "2022 — 2024",
    achievements: [
      "Delivered 25+ projects for clients across 12 countries with a 100% completion rate",
      "Specialized in Next.js storefronts, SaaS dashboards and WordPress/Shopify builds",
      "Maintained long-term retainers through consistent, on-time, high-quality delivery",
    ],
  },
  {
    company: "Early Career",
    role: "Web Developer",
    duration: "2021 — 2022",
    achievements: [
      "Shipped responsive marketing sites and landing pages for local businesses",
      "Learned production workflows: Git, code review, CI/CD and client communication",
      "Built the foundation in JavaScript, React and UI engineering I use today",
    ],
  },
];

// ── Blog ─────────────────────────────────────────────────────
// EDIT: Point these at your real articles (dev.to, Hashnode, Medium or /blog).
export const BLOG_POSTS = [
  {
    title: "Building Buttery-Smooth Scroll Experiences with Lenis and Framer Motion",
    excerpt:
      "A practical guide to layering smooth scroll, parallax and scroll-linked animation without wrecking performance.",
    category: "React",
    readTime: "8 min read",
    href: "#",
  },
  {
    title: "AI Automation for Small Teams: Where to Start",
    excerpt:
      "The highest-ROI workflows to automate first — and the mistakes that make teams abandon automation entirely.",
    category: "AI",
    readTime: "6 min read",
    href: "#",
  },
  {
    title: "How I Get 100 Lighthouse Scores on Next.js Sites",
    excerpt:
      "Fonts, images, third-party scripts, hydration — a checklist of what actually moves the needle.",
    category: "Coding",
    readTime: "10 min read",
    href: "#",
  },
  {
    title: "From Zapier to Custom: When to Build Your Own Automations",
    excerpt:
      "No-code tools are great until they aren't. How to know when it's time to write real code.",
    category: "Automation",
    readTime: "7 min read",
    href: "#",
  },
] as const;
