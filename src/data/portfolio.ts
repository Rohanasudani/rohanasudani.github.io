/* ──────────────────────────────────────────
   Portfolio Data — Rohan Asudani
   100% strictly aligned with resume & verified projects.
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
  coursework?: string[];
  topics?: string[];
  inProgress?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
  icon?: string;
}

/* ─── Hero Identity (Authentic to Resume) ─── */

export const name = 'Rohan Asudani';
export const title = 'Software Engineer';
export const specialty = 'Full-Stack Engineering · AI Systems · Developer Tooling';

export const tagline =
  'Building full-stack products, AI systems, and developer tools.';

export const bio =
  'Computer Science student at the University of Arizona with an AI minor, with experience building production web platforms supporting 100+ university websites and software used by real customers.';

export const location = 'Tucson, AZ';
export const email = 'rohanasudani@arizona.edu';
export const phone = '520-271-1351';
export const website = 'purealtors.in';
export const gradDate = 'Expected May 2027';

/* Verified impact metrics from resume (NO fabricated GPA) */
export const metrics = [
  { value: '100+', label: 'University Web Properties Supported', sub: 'UA ITS platform maintenance' },
  { value: '~$82K', label: 'Property Sales Revenue Contributed', sub: '~₹70L via SEO & conversion flows' },
  { value: '98-100%', label: 'RL Agent Reliability Benchmark', sub: 'Approximate Q-learning' },
  { value: '-20%', label: 'Bug Reports Reduced', sub: 'FitArt Health internship' },
];

/* ─── Social & Direct Links ─── */

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Rohanasudani', external: true },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rohan-asudani-2167a8252/',
    external: true,
  },
  { label: 'Email', href: 'mailto:rohanasudani@arizona.edu' },
  { label: 'purealtors.in', href: 'https://purealtors.in/', external: true },
];

export const resumeHref = '/resume-rohan-asudani.pdf';

/* ─── Featured Projects ─── */

export const projects: Project[] = [
  {
    index: '01',
    title: 'Enterprise AI Model Router',
    year: '2026',
    description:
      'Full-stack AI infrastructure dashboard for company-side LLM governance, model evaluation, policy enforcement, and cost/savings reporting.',
    details:
      'Built policy-aware routing with allow/block/downgrade/escalate decisions, persisted eval runs, LLM-as-judge rubric scoring, model comparison, team budget tracking, and CSV/JSON report exports.',
    result: 'Policy-aware routing, LLM-as-judge rubric scoring & team budget governance',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'OpenAI API'],
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
      'Benchmarkable terminal coding agent that inspects repositories, uses structured tools, previews diffs, enforces safety gates, and logs reproducible traces.',
    details:
      'Implemented repo search, file read/write sandboxing, shell command policies, planned-write patch previews, OpenAI-compatible provider support, token/cost tracking, and an 8-task local benchmark harness.',
    result: '8-task deterministic local benchmark harness with token & cost tracking',
    tech: ['Python', 'CLI Tools', 'Git', 'OpenAI API'],
    github: 'https://github.com/Rohanasudani/terminal-coding-agent',
    status: 'In Progress',
    visual: 'terminal',
  },
  {
    index: '03',
    title: 'PU Realtors Website',
    year: '2026',
    description:
      'Production real estate platform for property discovery and qualified lead generation through SEO, landing pages, and WhatsApp-driven conversion workflows.',
    details:
      'Co-developed a production real estate platform that generated qualified buyer leads and contributed to approximately 70 lakh INR (~US$82K) in residential plot sales.',
    result: 'Contributed to ~₹70L (~$82K USD) in residential plot sales via SEO & WhatsApp pipelines',
    tech: ['Lovable', 'Web Design', 'SEO', 'Lead Generation'],
    github: 'https://github.com/Rohanasudani/pu-realtors-website-case-study',
    demo: 'https://purealtors.in/',
    visual: 'image',
    imageSrc: '/projects/pu-realtors-river.png',
    imageAlt: 'PU Realtors platform property presentation and lead capture workflow',
  },
  {
    index: '04',
    title: 'Snake and Gridworld Reinforcement Learning',
    year: '2026',
    description:
      'Reinforcement learning benchmark comparing tabular and approximate agents across custom Snake and Gridworld environments from scratch.',
    details:
      'Implemented Q-learning, SARSA, approximate Q-learning, random, and greedy agents from scratch, improving Snake reliability to 98–100% success across board sizes versus roughly 27–51% for tabular baselines.',
    result: '98–100% success across board sizes vs. ~27–51% for tabular baselines',
    tech: ['Python', 'NumPy', 'Q-learning', 'SARSA', 'Approximate Q-learning'],
    github: 'https://github.com/Rohanasudani/snake-gridworld-rl',
    visual: 'chart',
  },
];

export const moreProject = {
  title: 'Interactive Planner Java',
  description:
    'JavaFX desktop planner focused on OOP, MVC-style separation, persistence, and unit-tested calendar workflows.',
  tech: ['Java', 'JavaFX', 'OOP', 'MVC', 'JUnit'],
};

/* ─── Experience (Verbatim from Resume) ─── */

export const experiences: ExperienceItem[] = [
  {
    title: 'IT Web Analyst',
    company: 'University of Arizona Information Technology Services',
    location: 'Tucson, AZ',
    period: 'Mar. 2024 – Present',
    bullets: [
      'Support and maintain 100+ University of Arizona web properties across Arizona.edu and sites.arizona.edu using Drupal and WordPress, improving accessibility, reliability, and user experience for multiple academic departments.',
      'Own site updates, redesign support, cloud migration tasks, and platform maintenance while coordinating with clients through Agile workflows, CRM-based support, and university web service standards.',
      'Conduct QA testing, troubleshoot CMS/front-end issues, validate releases, and use Tableau, CRM records, and internal reporting to prioritize fixes and improve site quality.',
    ],
  },
  {
    title: 'Software Development Engineering Intern',
    company: 'FitArt Health and Wellness Pvt. Ltd.',
    location: 'Nagpur, India',
    period: 'May 2025 – Aug. 2025',
    bullets: [
      'Developed and tested features for a health and wellness application, collaborating with engineering/product stakeholders to improve app and web workflows and reduce bug reports by 20%.',
    ],
  },
];

/* ─── Skills Toolkit ─── */

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS', 'C++'],
  },
  {
    category: 'Web / Backend',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'AI / ML',
    items: [
      'AI Agents',
      'RAG',
      'Evals',
      'Reinforcement Learning',
      'Q-learning',
      'SARSA',
      'PyTorch',
      'Hugging Face',
    ],
    highlighted: true,
  },
  {
    category: 'DevOps / Tools',
    items: [
      'Docker',
      'CI/CD',
      'Git/GitHub',
      'Linux/Bash',
      'Drupal',
      'WordPress',
      'Tableau',
      'CRM',
      'Lovable',
    ],
  },
];

/* ─── Education (Strictly from Resume) ─── */

export const education: EducationEntry[] = [
  {
    school: 'University of Arizona',
    college: 'College of Science',
    degree: 'B.S. in Computer Science; Minor in Artificial Intelligence',
    expected: 'Expected May 2027',
    location: 'Tucson, AZ',
    honors: ["Dean's List", 'Global Wildcat Award'],
    coursework: [
      'Software Development',
      'Object-Oriented Programming & Design',
      'Systems Programming & Unix',
      'Computer Organization',
      'Discrete Structures',
      'Principles of Data Science',
      'Artificial Intelligence',
      'Data Ethics',
      'Machine Learning (In Progress)',
      'Computer Vision (In Progress)',
      'Comparative Programming Languages (In Progress)',
    ],
  },
  {
    school: '100xDevs Bootcamp 1.0',
    degree: 'Web Development, DevOps, AI/ML, and DSA',
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

/* ─── Navigation ─── */

export const navItems = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
