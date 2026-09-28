// Portfolio Data

export interface Project {
  index: string;
  title: string;
  year?: string;
  description: string;
  details: string;
  result: string;
  tech: string[];
  github: string;
  githubLabel?: string;
  demo?: string;
  status?: string;
  visual: 'image' | 'terminal' | 'chart';
  imageSrc?: string;
  imageAlt?: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
  highlighted?: boolean;
}

export interface EducationEntry {
  school: string;
  college?: string;
  degree: string;
  description?: string;
  expected: string;
  location?: string;
  honors?: string[];
  clubs?: string[];
  coursework?: string[];
  topics?: string[];
  inProgress?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
}

// Profile
export const name = 'Rohan Asudani';
export const title = 'Software Engineer · Applied AI Engineer';

// Typewriter roles
export const roles = [
  'Software Engineer',
  'Applied AI Engineer',
  'AI Systems Builder',
  'Developer Tooling Engineer',
];

export const tagline =
  'Building AI systems, developer tools, and production software.';

export const bio =
  'Computer Science student at the University of Arizona with an AI minor, with experience building production web platforms supporting 100+ university websites and software used by real customers.';

// About
export const aboutParagraphs = [
  "I'm a Computer Science student at the University of Arizona with an AI minor, graduating May 2027. I care about building software that works in production — whether that's AI infrastructure with real evaluation guardrails, developer tools with reproducible benchmarks, or web platforms serving real users.",
  "I'm actively looking for full-time software and applied AI engineering roles starting May 2027, as well as co-op, part-time, or internship opportunities. My interests include AI infrastructure, developer tools, full-stack systems, and production software engineering.",
];

export const location = 'Tucson, AZ';
export const email = 'rohanasudani@arizona.edu';
export const phone = '520-271-1351';
export const website = 'purealtors.in';
export const gradDate = 'Expected May 2027';

// Highlights
export const metrics = [
  {
    value: '100+',
    label: 'University Web Properties Supported',
    sub: 'UA ITS platform maintenance',
  },
  {
    value: '~$160K',
    label: 'Property Sales Influenced',
    sub: 'INR 1.5+ crore via digital channel',
  },
  {
    value: '198',
    label: 'Automated Tests Passing',
    sub: 'Terminal Agent v1.0.1 test suite',
  },
  {
    value: '20%',
    label: 'Reduction in Reported Bugs',
    sub: 'FitArt engineering internship',
  },
];

// Socials
export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Rohanasudani', external: true },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rohan-asudani/',
    external: true,
  },
  { label: 'Email', href: 'mailto:rohanasudani@arizona.edu' },
  { label: 'purealtors.in', href: 'https://purealtors.in/', external: true },
];

export const resumeHref = '/resume-rohan-asudani.pdf';

// Experience
export const experiences: ExperienceItem[] = [
  {
    title: 'Incoming AI Research Software Developer',
    company: 'Arizona Online, University of Arizona',
    location: 'Tucson, AZ',
    period: 'Starts Oct. 2026',
    bullets: [
      'Selected to develop an AI skills-mapping assistant for Corporate Partnerships, integrating University degree, employer, and market data to map academic outcomes to industry skill gaps.',
      'Planned interface will recommend relevant Arizona Online degrees, translate higher-education competencies into employer language, and visualize degree-to-skill relationships through interactive network-style views.',
    ],
  },
  {
    title: 'Student Developer (Mobile Application)',
    company: 'PawPrint Labs Inc.',
    location: 'Tucson, AZ',
    period: 'Sep. 2026 – Present',
    bullets: [
      'Leading development of the mobile capture app for a UA-founded smart-collar startup, with planned BLE pairing, session recording, and synchronization of motion, sound, light, and temperature data for real-world beta testing.',
      'Working with the founder to turn functioning collar hardware and a proven first-cat behavior model into a low-friction owner workflow for data capture and behavior/wellbeing analysis.',
    ],
  },
  {
    title: 'IT Web Analyst',
    company: 'University of Arizona Information Technology Services',
    location: 'Tucson, AZ',
    period: 'Mar. 2024 – Present',
    bullets: [
      'Maintain, build, and QA University web properties across Drupal and WordPress, handling site migrations, responsive testing, link validation, accessibility reviews, and production content/UI fixes for academic and administrative units.',
      'Audit Arizona Online degree-search links and PDF accessibility in Adobe Acrobat, repair relative-path issues, cross-check academic program records, and document unresolved exceptions in shared QA workflows.',
    ],
  },
  {
    title: 'Software Development Engineering Intern',
    company: 'FitArt Health and Wellness Pvt. Ltd.',
    location: 'Nagpur, India',
    period: 'May 2025 – Aug. 2025',
    bullets: [
      'Contributed to a live app and web marketplace spanning 70+ fitness centers, testing and improving free-trial, contact, and program-detail flows across WordPress/WooCommerce, AJAX, and API integrations.',
      'Validated form submissions and end-to-end data flows, reproduced UI/API defects, and collaborated on fixes, contributing to a team-reported 20% reduction in reported bugs.',
    ],
  },
];

// Projects
export const projects: Project[] = [
  {
    index: '01',
    title: 'TermAgent – Terminal Coding Agent',
    description:
      'Engineered and released a terminal coding agent that searches repositories, indexes Python/JavaScript/TypeScript symbols, previews patches, runs verification, and records token and estimated-cost telemetry in reproducible JSONL traces.',
    details:
      'Enforced repository confinement, SHA-256 planned-write checks, classified shell execution, approval modes, credential-file protections, and final-diff validation; shipped v1.0.1 with 198 passing tests and CI across Python 3.11–3.13. Built a frozen eight-task Harbor evaluation with independent graders and a matched Codex CLI baseline; measured 87% fewer input tokens, 25% lower total model cost, and 69% lower runtime while documenting completion tradeoffs and controller failure modes.',
    result: '198 passing tests on v1.0.1; 87% fewer input tokens & 25% lower total cost vs Codex CLI baseline',
    tech: ['Python', 'CLI', 'Git', 'OpenAI Responses API', 'Harbor'],
    github: 'https://github.com/Rohanasudani/terminal-coding-agent',
    visual: 'terminal',
  },
  {
    index: '02',
    title: 'AI Model Router & Eval Platform',
    year: '2026',
    description:
      'Built a full-stack LLM routing and evaluation platform that recommends models using task-specific quality, latency, context fit, and estimated cost, with manual overrides and budget-aware policy routing.',
    details:
      'Implemented PostgreSQL-backed prompt datasets, persisted evaluation runs, rubric-based LLM-as-judge scoring, team budgets, auditable routing decisions (allow, block, downgrade, escalate), and JSON/CSV savings exports. Deployed a public Vercel demo in mock mode; gated opt-in live OpenAI execution with server-only keys, admin checks, per-IP rate limits, payload validation, and production error redaction; CI runs 11 unit and 7 Playwright end-to-end tests.',
    result: 'Policy-aware routing, LLM-as-judge rubric scoring, budget governance & Playwright E2E CI',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'OpenAI Responses API', 'Playwright'],
    github: 'https://github.com/Rohanasudani/enterprise-ai-model-router',
    demo: 'https://enterprise-ai-model-router.vercel.app',
    visual: 'image',
    imageSrc: '/projects/model-router-dashboard.webp',
    imageAlt: 'Enterprise AI Model Router live dashboard interface and analytics',
  },
  {
    index: '03',
    title: 'PU Realtors Website',
    year: '2026',
    description:
      'Co-developed and iteratively optimized a responsive real-estate lead-generation site whose digital channel has contributed to INR 1.5+ crore (approximately US$160K) in plot sales; built property pages, SEO content, comparisons, and WhatsApp/call conversion flows.',
    details:
      'Developing AI-assisted lead sourcing and outbound outreach workflows to qualify prospects, organize follow-ups, and automate parts of the sales pipeline.',
    result: 'Contributed to INR 1.5+ crore (~US$160K) in residential plot sales via SEO & WhatsApp conversion flows',
    tech: ['Web Development', 'SEO', 'Lead Generation', 'AI Automation'],
    github: 'https://github.com/Rohanasudani/pu-realtors-website-case-study',
    githubLabel: 'Case Study ↗',
    demo: 'https://purealtors.in/',
    visual: 'image',
    imageSrc: '/projects/pu-realtors-river.webp',
    imageAlt: 'PU Realtors platform property presentation and lead capture workflow',
  },
];

// Additional Projects
export const additionalProjects = [
  'Interactive Planner (CSC 335) — Java, JavaFX, MVC, JUnit; desktop calendar/task manager with local accounts, themes, serialized persistence, save/load, and unit-tested model/controller workflows.',
  'Reinforcement Learning Agents – Snake & Gridworld — Python, NumPy, Matplotlib; Q-learning, SARSA, and approximate Q-learning; 98–100% success in later-stage Snake evaluations.',
];

// Skills
export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'C', 'C++', 'HTML', 'CSS'],
  },
  {
    category: 'AI/ML & LLM Systems',
    items: [
      'PyTorch',
      'Hugging Face',
      'NumPy',
      'Matplotlib',
      'RAG',
      'LLM Evaluation',
      'AI Agents',
      'Reinforcement Learning',
      'OpenAI Responses API',
    ],
    highlighted: true,
  },
  {
    category: 'Web & Data',
    items: [
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'REST APIs',
      'JavaFX',
      'Prisma',
      'PostgreSQL',
      'MongoDB',
      'WordPress/WooCommerce',
      'Drupal',
    ],
  },
  {
    category: 'DevOps & Testing',
    items: [
      'Docker',
      'GitHub Actions / CI/CD',
      'Git / GitHub',
      'Linux / Bash',
      'Vercel',
      'Playwright',
      'pytest',
      'JUnit',
      'Accessibility QA',
    ],
  },
  {
    category: 'AI-Assisted Development',
    items: ['OpenAI Codex', 'Claude Code', 'Antigravity'],
  },
];

// Education
export const education: EducationEntry[] = [
  {
    school: 'University of Arizona',
    college: 'College of Science',
    degree: 'B.S. Computer Science; Minor in Artificial Intelligence',
    expected: 'Expected May 2027',
    location: 'Tucson, AZ',
    honors: ["Dean's List", 'Global Wildcat Award'],
    clubs: ['Google Developer Student Club', 'University of Arizona AI Club'],
    coursework: [
      'Machine Learning',
      'Artificial Intelligence',
      'Object-Oriented Programming & Design',
      'Systems Programming',
      'Programming Languages',
      'Computer Vision',
    ],
  },
  {
    school: '100xDevs Bootcamp 1.0',
    degree: 'Project-Based Web Development, DevOps, AI/ML, and DSA Program',
    description:
      'Intensive training in TypeScript, React/Next.js, Node.js/Express, PostgreSQL/MongoDB, Docker, CI/CD, cloud deployment, PyTorch, Hugging Face, RAG, AI agents, MCP, LLM evaluation, and C++ DSA.',
    expected: 'In Progress',
    location: 'Remote',
    inProgress: true,
    topics: [
      'TypeScript, React, Next.js',
      'Node.js, Express, REST APIs',
      'PostgreSQL, MongoDB, Prisma',
      'Docker, CI/CD, Cloud Deployment',
      'PyTorch & Hugging Face',
      'RAG & Vector Search',
      'AI Agents & MCP',
      'LLM Evaluation',
      'C++ Data Structures & Algorithms',
    ],
  },
];

// Navigation
export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
