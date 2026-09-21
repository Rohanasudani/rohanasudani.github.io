/* ──────────────────────────────────────────
   Portfolio Data — Rohan Asudani
   100% strictly aligned with the latest one-page resume.
   ────────────────────────────────────────── */

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

/* ─── Hero Identity ─── */

export const name = 'Rohan Asudani';
export const title = 'Software Engineer';

/* Typewriter roles — cycles below the name */
export const roles = [
  'Software Engineer',
  'Full-Stack Developer',
  'AI Systems Builder',
  'Developer Tooling Engineer',
];

export const tagline =
  'Building full-stack products, AI systems, and developer tools.';

export const bio =
  'Computer Science student at the University of Arizona with an AI minor, with experience building production web platforms supporting 100+ university websites and software used by real customers.';

/* About section — concise personal introduction */
export const aboutParagraphs = [
  "I'm a Computer Science student at the University of Arizona with an AI minor, graduating May 2027. I care about building software that works in production — whether that's web platforms serving thousands of users, AI infrastructure with real evaluation guardrails, or developer tools with reproducible benchmarks.",
  "I'm actively looking for full-time software engineering roles starting upon graduation in May 2027, as well as co-op, part-time, or internship opportunities. I work extensively with AI-assisted development tools including OpenAI Codex, Claude Code, and Google Antigravity.",
];

export const location = 'Tucson, AZ';
export const email = 'rohanasudani@arizona.edu';
export const phone = '520-271-1351';
export const website = 'purealtors.in';
export const gradDate = 'Expected May 2027';

/* Verified impact metrics from resume (strictly accurate) */
export const metrics = [
  { value: '100+', label: 'University Web Properties Supported', sub: 'UA ITS platform maintenance' },
  { value: '~$82K', label: 'Property Sales Revenue Contributed', sub: '~INR 70 lakh via SEO & conversion flows' },
  { value: '8/8', label: 'Local Fixture Suite Passed', sub: '8-task local baseline (176 tests)' },
  { value: '-20%', label: 'Bug Reports Reduced', sub: 'FitArt Health internship' },
];

/* ─── Social & Direct Links ─── */

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

/* ─── Experience (UA ITS → FitArt → PawPrints) ─── */

export const experiences: ExperienceItem[] = [
  {
    title: 'IT Web Analyst',
    company: 'University of Arizona Information Technology Services',
    location: 'Tucson, AZ',
    period: 'Mar. 2024 – Present',
    bullets: [
      'Support 100+ university web properties across Arizona.edu and sites.arizona.edu, updating Drupal and WordPress sites for academic departments and resolving production content and functionality issues.',
      'Translate client requests into documented web requirements and scoped tasks; coordinate redesigns, cloud migrations, and site changes through team checkpoints and a CRM-managed support queue.',
      'QA-test links, responsive layouts, accessibility, and CMS changes before releases; debug front-end defects against web standards.',
      'Use Tableau, CRM records, and internal reports to surface recurring support issues and prioritize work; write client-facing documentation and communicate status with nontechnical stakeholders.',
    ],
  },
  {
    title: 'Software Development Engineering Intern',
    company: 'FitArt Health and Wellness Pvt. Ltd.',
    location: 'Nagpur, India',
    period: 'May 2025 – Aug. 2025',
    bullets: [
      "Developed and shipped app and web features for FitArt's one-membership marketplace spanning 70+ fitness centers, including center discovery, program details, free-trial inquiries, and contact flows.",
      'Collaborated with product and engineering to design and deploy scalable backend services; integrated and validated WordPress/WooCommerce data flows, Contact Form 7 submissions, and AJAX endpoints.',
      'Reproduced API and UI defects, debugged affected flows, and ran cross-platform regression and production-release checks, contributing to a 20% reduction in reported bugs.',
    ],
  },
  {
    title: 'Mobile Software Developer',
    company: 'PawPrints',
    location: 'Tucson, AZ',
    period: 'Sep. 2026 – Present',
    bullets: [
      'Own mobile app development for a UA-founded smart-collar startup, designing owner-facing flows for pairing, session recording, sensor-data sync, and beta feedback.',
      'Translate motion, sound, light, and temperature signals from the hardware/ML prototype into iOS/Android capture workflows, onboarding screens, and data models.',
    ],
  },
];

/* ─── Featured Projects (verbatim from latest resume) ─── */

export const projects: Project[] = [
  {
    index: '01',
    title: 'Enterprise AI Model Router',
    year: '2026',
    description:
      'Built and deployed an LLM evaluation and routing platform that ranks models by quality, estimated cost, latency, and context fit while enforcing team budgets and allow, block, downgrade, and escalation policies.',
    details:
      'Implemented prompt cases, PostgreSQL evaluation history, rubric-based LLM-as-judge scoring, policy audit logs, and reproducible JSON/CSV savings reports. Secured OpenAI Responses API workflows with server-side credentials, request validation, admin authorization, rate limits, and production error redaction; added unit, build, and Playwright end-to-end CI checks.',
    result: 'Policy-aware routing, LLM-as-judge rubric scoring, budget governance & Playwright E2E CI',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'OpenAI Responses API', 'Playwright'],
    github: 'https://github.com/Rohanasudani/enterprise-ai-model-router',
    demo: 'https://enterprise-ai-model-router.vercel.app',
    visual: 'image',
    imageSrc: '/projects/model-router-dashboard.webp',
    imageAlt: 'Enterprise AI Model Router live dashboard interface and analytics',
  },
  {
    index: '02',
    title: 'Terminal Coding Agent',
    description:
      'Built a terminal coding agent that searches repositories, indexes Python, JavaScript, and TypeScript symbols, plans edits, previews patches, executes verification commands, and tracks token and estimated cost usage.',
    details:
      'Designed a tool-mediated safety layer with repository-bound file access, planned-write hashes, shell-command classification, approval modes, final-diff validation, and reproducible JSONL execution traces. Built reproducible Harbor/Terminal-Bench 2 evaluation tooling with frozen task hashes, independent graders, comparator runs, and failure analysis; validated orchestration with 176 automated tests and an 8/8 local fixture baseline.',
    result: '176 automated tests passing and an 8/8 deterministic local fixture baseline',
    tech: ['Python', 'CLI', 'Git', 'OpenAI Responses API'],
    github: 'https://github.com/Rohanasudani/terminal-coding-agent',
    visual: 'terminal',
  },
  {
    index: '03',
    title: 'PU Realtors Website',
    year: '2026',
    description:
      'Co-developed a production real estate site for property discovery and buyer inquiries; the digital lead channel contributed to approximately INR 70 lakh in plot sales.',
    details:
      'Structured mobile-friendly property pages, SEO content, trust details, and WhatsApp/call actions so buyers could compare projects and request a consultation or site visit.',
    result: 'Contributed to approximately INR 70 lakh in residential plot sales via SEO & WhatsApp actions',
    tech: ['Web Design', 'SEO', 'Lead Generation'],
    github: 'https://github.com/Rohanasudani/pu-realtors-website-case-study',
    githubLabel: 'Case Study ↗',
    demo: 'https://purealtors.in/',
    visual: 'image',
    imageSrc: '/projects/pu-realtors-river.webp',
    imageAlt: 'PU Realtors platform property presentation and lead capture workflow',
  },
];

/* Additional projects mentioned briefly */
export const additionalProjects = [
  'CSC337 Web Programming final project',
  'Snake/Gridworld RL (Q-learning, SARSA, approximate Q-learning; 98–100% Snake success in later runs)',
];

/* ─── Skills (verbatim from latest resume) ─── */

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'HTML/CSS', 'C++'],
  },
  {
    category: 'Web & Data',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'Prisma', 'MongoDB', 'Drupal', 'WordPress'],
  },
  {
    category: 'AI & Engineering',
    items: [
      'LLM Evaluation',
      'AI Agents',
      'RAG',
      'Reinforcement Learning',
      'Q-learning',
      'SARSA',
      'PyTorch',
      'Hugging Face',
    ],
    highlighted: true,
  },
  {
    category: 'DevOps & Tools',
    items: [
      'Docker',
      'CI/CD',
      'Git/GitHub',
      'Linux/Bash',
      'Playwright',
      'Tableau',
      'CRM',
      'Lovable',
    ],
  },
  {
    category: 'AI-Assisted Development',
    items: ['OpenAI Codex', 'Claude Code', 'Antigravity'],
  },
];

/* ─── Education (verbatim from latest resume) ─── */

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
      'Software Development',
      'Object-Oriented Programming & Design (OOP)',
      'Data Science',
      'Artificial Intelligence',
      'Systems Programming',
      'Machine Learning',
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

/* ─── Navigation ─── */

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
