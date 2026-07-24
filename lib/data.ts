export const SITE = {
  name: "Ritesh Solanki",
  initials: "RS",
  roles: ["Web Developer", "React Developer", "WordPress & Elementor Expert"],
  headline: "I Build Beautiful Web Experiences That Solve Real Business Problems.",
  subheadline:
    "Design-obsessed developer crafting fast, responsive, conversion-focused websites for startups and global clients.",
  email: "riteshhsolankii@gmail.com",
  location: "Indore, India",
  flag: "🇮🇳",
  url: "https://riteshsolanki.dev",
  socials: {
    github: "https://github.com/riteshhsolankii",
    linkedin: "https://www.linkedin.com/in/riteshhsolankii",
    whatsapp: "https://wa.me/919111133600",
    email: "mailto:riteshhsolankii@gmail.com",
  },
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Stack", href: "/#stack" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Blog", href: "/blog" },
  { label: "Author", href: "/author" },
  { label: "Contact", href: "/#contact" },
] as const;

export const ABOUT = {
  intro:
    "I'm a developer who treats every pixel and every millisecond as part of the product. I partner with founders and teams to turn ideas into polished, revenue-generating websites — from high-converting landing pages to full WordPress and React builds.",
  stats: [
    { value: 4, suffix: "+", label: "Years Experience" },
    { value: 40, suffix: "+", label: "Projects Shipped" },
    { value: 3, suffix: "+", label: "Technologies" },
    { value: 2, suffix: "+", label: "Countries Worked With" },
  ],
  focus: {
    title: "Current Focus",
    items: [
      "High-performance React & Next.js applications",
      "WordPress, Elementor & WooCommerce builds",
      "Pixel-perfect, responsive UI engineering",
    ],
  },
} as const;

export type TechCategory = {
  title: string;
  items: { name: string; icon: string }[];
};

export const TECH_STACK: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: "SiHtml5" },
      { name: "CSS", icon: "SiCss" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "jQuery", icon: "SiJquery" },
      { name: "Bootstrap", icon: "SiBootstrap" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "React", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Redux", icon: "SiRedux" },
    ],
  },
  {
    title: "AI",
    items: [
      { name: "ChatGPT", icon: "RiOpenaiFill" },
      { name: "Gemini", icon: "SiGooglegemini" },
      { name: "Cursor", icon: "SiCursor" },
      { name: "Claude", icon: "SiClaude" },
      { name: "Lovable", icon: "FiHeart" },
      { name: "GitHub Copilot", icon: "SiGithubcopilot" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: "SiGit" },
      { name: "Figma", icon: "SiFigma" },
      { name: "VS Code", icon: "SiVscodium" },
      { name: "Sublime Text", icon: "SiSublimetext" },
      { name: "WordPress", icon: "SiWordpress" },
      { name: "Shopify", icon: "SiShopify" },
      { name: "Elementor", icon: "SiElementor" },
      { name: "Oxygen", icon: "SiOxygen" },
      { name: "Divi", icon: "FiLayout" },
      { name: "WP Bakery", icon: "FiGrid" },
      { name: "Photoshop", icon: "FiImage" },
      { name: "Canva", icon: "FiPenTool" },
    ],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  image: string;
  url: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Gavin's Herbal Remedies",
    tagline: "WooCommerce store for a herbal wellness brand",
    description:
      "Designed in Figma and built on WordPress with WooCommerce and Elementor — a fast, responsive, conversion-focused online store.",
    stack: ["WordPress", "WooCommerce", "Elementor", "Figma"],
    image: "/gavinsherbalremedies.png",
    url: "https://gavinsherbalremedies.com/",
  },
  {
    title: "ClickDimensions",
    tagline: "Marketing & analytics platform website",
    description:
      "WordPress site built with Elementor and Advanced Custom Fields (ACF) — fast, responsive and easy to manage.",
    stack: ["WordPress", "Elementor", "ACF"],
    image: "/clickdimensions.png",
    url: "https://clickdimensions.com/",
  },
  {
    title: "Altez Building Inspections",
    tagline: "Building inspection service, Australia",
    description:
      "WordPress site designed and built with Oxygen Builder — clean, responsive and conversion-focused.",
    stack: ["WordPress", "Oxygen Builder"],
    image: "/altezbuilding.png",
    url: "https://www.altezbuildinginspections.com.au/",
  },
  {
    title: "Workplace Wizards",
    tagline: "HR & workplace consulting, Australia",
    description:
      "WordPress site built with Elementor — professional, responsive and simple to update.",
    stack: ["WordPress", "Elementor"],
    image: "/workplacewizards.png",
    url: "https://www.workplacewizards.com.au/",
  },
  {
    title: "Musthm",
    tagline: "Business website",
    description:
      "WordPress site built with Oxygen Builder — fast, responsive and cleanly structured.",
    stack: ["WordPress", "Oxygen Builder"],
    image: "/musthm.png",
    url: "https://musthm.com/",
  },
  {
    title: "Chiropractic Health",
    tagline: "Chiropractic clinic, Australia",
    description:
      "WordPress site built with Oxygen Builder — optimized for bookings and local search.",
    stack: ["WordPress", "Oxygen Builder"],
    image: "/chiro-heath.png",
    url: "https://chiropractic-health.com.au/",
  },
];

export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Opsio Cloud Pvt Ltd",
    role: "Web Developer & React Developer",
    duration: "Oct 2025 — Present",
    location: "Bengaluru · Remote (Sweden Main Office)",
    achievements: [
      "Building web applications and interfaces with React",
      "Converting Adobe XD designs to Elementor",
      "WordPress ACF custom development",
      "Creating websites with Lovable",
      "Developing responsive, high-performance user interfaces",
    ],
  },
  {
    company: "PNP Infotech",
    role: "Web Designer",
    duration: "Oct 2024 — Oct 2025",
    location: "Indore, India",
    achievements: [
      "Designed and built responsive client websites",
      "WordPress and Elementor development",
    ],
  },
  {
    company: "Mono Infotech Pvt. Ltd.",
    role: "Web Designer",
    duration: "Sep 2023 — Sep 2024",
    location: "Indore, India",
    achievements: [
      "Converted Figma/PSD designs to HTML",
      "Made websites fully responsive",
      "WordPress and Elementor development",
      "ClickFunnels builds",
      "Copied landing pages and pre-lander pages",
    ],
  },
  {
    company: "Krikir Technologies",
    role: "Web Designer — Intern",
    duration: "Sep 2022 — Mar 2023",
    location: "Indore, India",
    achievements: [
      "Converted Figma/PSD designs to HTML",
      "Made websites fully responsive",
      "Converted Figma/PSD to Elementor and Divi themes",
    ],
  },
];

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; title?: string; tone?: "pro" | "con" | "default"; items: string[] }
  | { type: "table"; columns: string[]; rows: string[][] }
  | { type: "callout"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  emoji: string;
  image?: string;
  category: string;
  tags: string[];
  content: BlogBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "cursor-ai-vs-github-copilot",
    title: "Cursor AI vs GitHub Copilot: Which AI Coding Assistant is Better?",
    excerpt:
      "Both boost productivity, but they excel in different areas. A hands-on comparison of Cursor AI and GitHub Copilot for real-world development.",
    date: "2026-07-20",
    readTime: "6 min read",
    emoji: "🤖",
    image: "/blog/cursorvscopilot.jpeg",
    category: "AI Tools",
    tags: ["AI", "Tools", "Productivity"],
    content: [
      {
        type: "paragraph",
        text: "AI coding assistants have transformed software development. Two of the most popular options today are Cursor AI and GitHub Copilot. Both improve productivity, but they excel in different areas.",
      },
      { type: "heading", text: "Cursor AI" },
      {
        type: "paragraph",
        text: "Cursor AI is an AI-first code editor built on VS Code. It understands your entire codebase, making it ideal for debugging, refactoring, and working across multiple files.",
      },
      {
        type: "list",
        title: "Pros",
        tone: "pro",
        items: [
          "Excellent codebase understanding",
          "Multi-file editing",
          "AI-powered debugging",
          "Great for React and TypeScript projects",
        ],
      },
      {
        type: "list",
        title: "Cons",
        tone: "con",
        items: ["Slight learning curve for beginners"],
      },
      { type: "heading", text: "GitHub Copilot" },
      {
        type: "paragraph",
        text: "GitHub Copilot integrates directly with VS Code, Visual Studio, JetBrains IDEs, and GitHub. It's known for fast code completion and strong GitHub integration.",
      },
      {
        type: "list",
        title: "Pros",
        tone: "pro",
        items: [
          "Excellent autocomplete",
          "Great GitHub integration",
          "AI code reviews",
          "Easy to use",
        ],
      },
      {
        type: "list",
        title: "Cons",
        tone: "con",
        items: ["Limited project-wide context compared to Cursor"],
      },
      { type: "heading", text: "Quick Comparison" },
      {
        type: "table",
        columns: ["Feature", "Cursor AI", "GitHub Copilot"],
        rows: [
          ["Code Completion", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"],
          ["Codebase Understanding", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐☆"],
          ["Debugging", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐☆"],
          ["Multi-file Editing", "✅", "Limited"],
          ["GitHub Integration", "⭐⭐⭐", "⭐⭐⭐⭐⭐"],
        ],
      },
      { type: "heading", text: "Which One Should You Choose?" },
      {
        type: "list",
        title: "✅ Choose Cursor AI if you:",
        items: [
          "Build React or Next.js applications",
          "Work on large codebases",
          "Need advanced debugging and refactoring",
        ],
      },
      {
        type: "list",
        title: "✅ Choose GitHub Copilot if you:",
        items: [
          "Use GitHub daily",
          "Want fast code suggestions",
          "Work in team-based projects",
        ],
      },
      { type: "heading", text: "Final Verdict" },
      {
        type: "paragraph",
        text: "Both tools are excellent, but they serve different needs.",
      },
      { type: "callout", text: "🏆 Best for React & Frontend Developers: Cursor AI" },
      { type: "callout", text: "🏆 Best for Teams & GitHub Workflows: GitHub Copilot" },
      {
        type: "paragraph",
        text: "If you're an individual developer looking for an AI-first coding experience, Cursor AI is the better choice. If your workflow revolves around GitHub and collaboration, GitHub Copilot is the smarter pick.",
      },
    ],
  },
];
