/* ──────────────────────────────────────────
   Portfolio Data — Rohan Asudani
   100% strictly aligned with resume .tex source.
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

/* About section — a longer personal introduction */
export const aboutParagraphs = [
  "I'm a Computer Science student at the University of Arizona with an AI minor, graduating May 2027. I care about building software that works in production — whether that's web platforms serving thousands of users, AI infrastructure with real evaluation guardrails, or developer tools with reproducible benchmarks.",
  "I'm looking for full-time roles starting right after graduation, as well as a final summer internship during Summer 2026 or part-time/co-op opportunities. I work extensively with AI-assisted development tools including OpenAI Codex, Claude Code, and Google Antigravity.",
];

export const location = 'Tucson, AZ';
export const email = 'rohanasudani@arizona.edu';
export const phone = '520-271-1351';
export const website = 'purealtors.in';
export const gradDate = 'Expected May 2027';

/* Verified impact metrics from resume */
export const metrics = [
  { value: '100+', label: 'University Web Properties Supported', sub: 'UA ITS platform maintenance' },
  { value: '~$82K', label: 'Property Sales Revenue Contributed', sub: '~₹70L via SEO & conversion flows' },
  { value: '8/8', label: 'Coding Agent Benchmark Score', sub: 'Terminal Agent deterministic suite' },
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

/* ─── Experience (IT Web Analyst → SDE Intern → PawPrints) ─── */

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
      'Developed and tested app and web workflows for a fitness marketplace connecting members with 70+ centers, with attention to membership discovery and trial inquiries.',
      'Reproduced reported issues with product and engineering, then tested changes across affected app and web flows.',
      'Debugged defects and performed regression testing before releases, contributing to a 20% reduction in reported bugs.',
    ],
  },
  {
    title: 'Mobile Software Developer',
    company: 'PawPrints',
    location: 'Tucson, AZ',
    period: 'Sep. 2026 – Present',
    bullets: [
      'Designing owner-facing app workflows for device pairing, session capture, and sensor-data sync for a smart-collar beta.',
    ],
  },
];

/* ─── Featured Projects (from .tex resume with enriched details) ─── */

export const projects: Project[] = [
  {
    index: '01',
    title: 'Enterprise AI Model Router',
    year: '2026',
    description:
      'Full-stack LLM evaluation and routing dashboard that compares models on quality, estimated cost, latency, and context fit, then applies team budgets and allow/block/downgrade/escalate policies.',
    details:
      'Implemented prompt cases, persisted evaluation history, rubric-based LLM-as-judge scoring, policy audit records, and JSON/CSV savings estimates using Next.js API routes and PostgreSQL. Added guarded OpenAI Responses API calls, request validation, admin controls, rate limits, and CI with unit, build, and Playwright end-to-end checks; public demo runs in mock mode.',
    result: 'Policy-aware routing, LLM-as-judge scoring, team budget governance & Playwright E2E CI',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'OpenAI API', 'Playwright'],
    github: 'https://github.com/Rohanasudani/enterprise-ai-model-router',
    demo: 'https://enterprise-ai-model-router.vercel.app',
    visual: 'image',
    imageSrc: '/projects/model-router-dashboard.png',
    imageAlt: 'Enterprise AI Model Router live dashboard interface and analytics',
  },
  {
    index: '02',
    title: 'Terminal Coding Agent',
    description:
      'Terminal agent that searches repositories, indexes Python/JavaScript/TypeScript symbols, plans edits, previews patches, runs verification commands, and reports token and estimated cost usage.',
    details:
      'Enforced repository-root file access, patch-plan checks, and classified shell commands with approval modes; recorded tool calls and outcomes as reproducible JSONL traces. Created an 8-task local fixture benchmark and Harbor/Terminal-Bench campaign tooling to measure task completion and diagnose failures; local fixture suite passes 8/8.',
    result: '8-task deterministic local benchmark suite passes 8/8 with full token & cost tracking',
    tech: ['Python', 'CLI', 'Git', 'OpenAI-compatible API'],
    github: 'https://github.com/Rohanasudani/terminal-coding-agent',
    visual: 'terminal',
  },
  {
    index: '03',
    title: 'PU Realtors Website',
    year: '2026',
    description:
      'Production real estate site for property discovery and buyer inquiries; the digital lead channel contributed to approximately INR 70 lakh (~US$82K) in plot sales.',
    details:
      'Structured mobile-friendly property pages, SEO content, trust details, and WhatsApp/call actions so buyers could compare projects and request a consultation or site visit.',
    result: 'Contributed to ~₹70L (~$82K USD) in residential plot sales via SEO & WhatsApp pipelines',
    tech: ['Web Design', 'SEO', 'Lead Generation'],
    github: 'https://github.com/Rohanasudani/pu-realtors-website-case-study',
    demo: 'https://purealtors.in/',
    visual: 'image',
    imageSrc: '/projects/pu-realtors-river.png',
    imageAlt: 'PU Realtors platform property presentation and lead capture workflow',
  },
];

/* Additional projects mentioned briefly */
export const additionalProjects = [
  'CSC337 Web Programming Final Project',
  'Snake/Gridworld RL (Q-learning, SARSA, Approximate Q-learning)',
];

/* ─── Skills (from .tex resume) ─── */

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
      'PyTorch',
      'Hugging Face',
      'Docker',
      'Git',
      'Linux/Bash',
      'CI/CD',
      'Playwright',
    ],
    highlighted: true,
  },
  {
    category: 'AI-Assisted Dev & Ops',
    items: ['OpenAI Codex', 'Claude Code', 'Antigravity', 'Tableau', 'CRM Workflows'],
  },
];

/* ─── Education (from .tex resume) ─── */

export const education: EducationEntry[] = [
  {
    school: 'University of Arizona',
    college: 'College of Science',
    degree: 'B.S. in Computer Science; Minor in Artificial Intelligence',
    expected: 'Expected May 2027',
    location: 'Tucson, AZ',
    honors: ["Dean's List", 'Global Wildcat Award'],
    clubs: ['Google Developer Student Club', 'University of Arizona AI Club'],
    coursework: [
      'Software Development',
      'Object-Oriented Programming & Design',
      'Data Science',
      'Artificial Intelligence',
      'Systems Programming',
      'Machine Learning',
      'Computer Vision',
    ],
  },
  {
    school: '100xDevs Bootcamp 1.0',
    degree: 'Web Development, DevOps, AI/ML, and Data Structures',
    expected: 'In Progress',
    location: 'Remote',
    inProgress: true,
    topics: [
      'TypeScript',
      'React/Next.js',
      'Node.js/Express',
      'PostgreSQL/MongoDB',
      'Docker',
      'CI/CD',
      'Cloud Workflows',
      'PyTorch',
      'RAG',
      'AI Agents',
      'Evals',
      'C++ Data Structures & Algorithms',
    ],
  },
];

/* ─── Navigation (Experience before Projects) ─── */

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
