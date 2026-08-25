// Single source of truth for portfolio content.
// Mirrors docs/reume-details.txt — update that file and this one together.

export const SUMMARY = {
  name: 'Rohit Singh Katiyar',
  role: 'Senior Frontend Engineer',
  years: '4+',
  location: 'Indore, India',
  coordinates: '22.71°N 75.85°E',
  short:
    'Senior Frontend Engineer with 4+ years building scalable web and mobile platforms. Currently shipping enterprise manufacturing systems at Softude — React, TypeScript, and AI-native workflows.',
};

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  periodCode: string;
  badge: string;
  accent: string;
  product: string;
  achievements: string[];
  stack: string[];
  footnote?: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'Softude',
    role: 'Senior Frontend Engineer',
    period: 'Nov 2025 – Present',
    periodCode: '2025.11 → NOW',
    badge: 'MANUFACTURING / CIR',
    accent: 'var(--hud-cyan)',
    product:
      'Cost It Right (CIR) — enterprise cost management platform for manufacturing operations, across costing, simulation, master data, and reporting modules.',
    achievements: [
      'Built cost simulation features with delta/percentage adjustment support for raw material and BOP categories; fixed complex recalculation bugs involving scrap rates, net cost, and undo/reset flows.',
      'Implemented backend-driven PDF and Excel export for costing data; refactored the download flow to use server-side generation.',
      'Created custom PDF report templates for a structural engineering tool — formula display, dynamic layouts, and project-named file exports.',
      'Led dependency modernization: React 16 → 18, CRA → Vite, legacy class components to functional, and migration off every deprecated library.',
    ],
    stack: ['React.js', 'TypeScript', 'Redux + Thunk', 'Docker', 'i18next', '.NET'],
  },
  {
    company: 'TechRadix',
    role: 'Senior Frontend Engineer',
    period: '2021 – Nov 2025',
    periodCode: '2021 → 2025.11',
    badge: 'FINTECH SAAS / CASHTRAC',
    accent: 'var(--hud-violet)',
    product:
      'CashTrac Inc (USA) — led development and launch of the SaaS finance platform’s website and web app, driving a 30% improvement in dev efficiency and 40% higher engagement.',
    achievements: [
      'Built the company’s website and app from scratch; launched the MVP in under 90 days.',
      'Developed 20+ reusable components and responsive layouts, boosting dev efficiency by 30%.',
      'Led and mentored the frontend team (2 juniors + 1 intern); resolved 10+ critical blockers.',
      'Implemented an LLM-powered chatbot and visual dashboards, increasing engagement by 40%.',
      'Built 5+ embeddable components for public-sharing use cases (blogs, external platforms).',
      'Designed the public-sharing module and responsive mobile UI, improving shareability by 60%.',
      'Launched an SEO-optimized blog with 11ty, boosting organic traffic by 50%; wired Umami analytics for real-time usage tracking.',
      'Owned 8+ critical modules including auth, routing, planner comparison, and confidence charts.',
    ],
    stack: ['React.js', 'TypeScript', 'Redux', 'Docker', '11ty', 'React Helmet', 'Umami', 'GoLang'],
    footnote:
      'Also delivered 5+ client apps across e-commerce, healthcare, and sports — see Project Archive below.',
  },
];

export interface SkillModule {
  code: string;
  title: string;
  accent: string;
  featured?: boolean;
  skills: string[];
}

export const SKILL_MODULES: SkillModule[] = [
  {
    code: 'MOD.01',
    title: 'Frontend Core',
    accent: 'var(--hud-cyan)',
    skills: ['React.js', 'React Native', 'TypeScript', 'JavaScript (ES6+)', 'Vite'],
  },
  {
    code: 'MOD.02',
    title: 'UI Libraries',
    accent: 'var(--hud-violet)',
    skills: ['MUI', 'Tailwind CSS', 'PrimeReact', 'React Bootstrap'],
  },
  {
    code: 'MOD.03',
    title: 'State, Routing & Data Viz',
    accent: 'var(--hud-blue)',
    skills: ['Redux', 'React Router', 'Chart.js', 'ReCharts'],
  },
  {
    code: 'MOD.04',
    title: 'AI & Agentic Workflows',
    accent: 'var(--hud-green)',
    featured: true,
    skills: ['Claude Code', 'Cursor', 'Codex', 'Gemini CLI', 'Roo Code', 'GitHub Copilot', 'Aider'],
  },
  {
    code: 'MOD.05',
    title: 'DevOps & Tools',
    accent: 'var(--hud-amber)',
    skills: ['Docker', 'Google Cloud', 'Google Play Console', 'Umami Analytics', 'Node.js'],
  },
  {
    code: 'MOD.06',
    title: 'Content & Other',
    accent: 'var(--hud-magenta)',
    skills: ['React Helmet', '11ty', 'i18next', 'PlantUML', 'Adalo', 'Bubble.io'],
  },
];

export interface ProjectEntry {
  name: string;
  domain: string;
  description: string;
  highlights: string[];
  impact?: string;
  tech: string[];
  accent: string;
  status: string;
}

export const FLAGSHIP_PROJECT: ProjectEntry = {
  name: 'CashTrac',
  domain: 'FINTECH SAAS — USA',
  description:
    'SaaS finance platform. Led the development and launch of the website and web app from scratch — MVP shipped in under 90 days.',
  highlights: [
    'LLM-powered chatbot and visual dashboards — +40% user engagement',
    '20+ reusable components and responsive layouts — +30% dev efficiency',
    'Embeddable public-sharing components — +60% shareability',
    'SEO-optimized 11ty blog — +50% organic traffic',
    '8+ critical modules: auth, routing, planner comparison, confidence charts',
  ],
  impact: 'MVP < 90 DAYS · +40% ENGAGEMENT · +30% DEV EFFICIENCY',
  tech: ['React.js', 'TypeScript', 'Redux', 'Docker', '11ty', 'GoLang'],
  accent: 'var(--hud-cyan)',
  status: 'SHIPPED',
};

export const PROJECTS: ProjectEntry[] = [
  {
    name: 'Porna Satya',
    domain: 'HEALTH / NUTRITION',
    description:
      'Nutrition-facts comparison platform. Built as a PWA with search, login/signup, and a side-by-side food comparison view.',
    highlights: [],
    impact: 'FASTER LOADS VIA VITE OPTIMIZATION',
    tech: ['React.js', 'Vite', 'PWA'],
    accent: 'var(--hud-green)',
    status: 'SHIPPED',
  },
  {
    name: 'Aforro',
    domain: 'E-COMMERCE / DELIVERY',
    description:
      'Grocery delivery app with animated onboarding, role-based routing, and a full cart module — plus geo-fencing, Google Maps, and background location tracking.',
    highlights: [],
    tech: ['React Native', 'Django'],
    accent: 'var(--hud-cyan)',
    status: 'CLIENT PROJECT',
  },
  {
    name: 'Milk Book',
    domain: 'LOGISTICS / DELIVERY',
    description:
      'Milk delivery tracker with a custom calendar UI, navigation for 3 user roles, and enhanced delivery date and quantity visualization.',
    highlights: [],
    tech: ['React Native'],
    accent: 'var(--hud-violet)',
    status: 'CLIENT PROJECT',
  },
  {
    name: 'Khele Kya',
    domain: 'SPORTS / BOOKING',
    description:
      'Turf booking app with OTP login, Razorpay payments, and a reward-based booking flow — plus feeds, reusable UI components, and nested navigation.',
    highlights: [],
    tech: ['React.js', 'React Native', 'PrimeReact'],
    accent: 'var(--hud-amber)',
    status: 'SHIPPED',
  },
  {
    name: 'RX Camp',
    domain: 'HEALTHCARE',
    description:
      'Health camp platform covering bookings, test uploads, and prescriptions; responsive components reduced bounce rate.',
    highlights: [],
    tech: ['React.js', 'React Bootstrap'],
    accent: 'var(--hud-blue)',
    status: 'CLIENT PROJECT',
  },
  {
    name: 'FerroDeal',
    domain: 'B2B / STEEL TRADING',
    description:
      'B2B steel trading app — designed and shipped the complete MVP in Adalo in just 2 weeks using a no-code approach.',
    highlights: [],
    impact: 'LAUNCH COSTS DOWN 70%+',
    tech: ['Adalo', 'No-Code'],
    accent: 'var(--hud-magenta)',
    status: 'SHIPPED',
  },
];

export const AI_TOOLS = [
  'Claude Code',
  'Cursor',
  'Codex',
  'Gemini CLI',
  'Roo Code',
  'GitHub Copilot',
  'Aider',
];

export interface EducationEntry {
  code: string;
  degree: string;
  institution: string;
  period: string;
  status: 'IN PROGRESS' | 'COMPLETE';
}

export const EDUCATION: EducationEntry[] = [
  {
    code: 'EDU.01',
    degree: 'Executive Post Graduate Program — Generative AI & Agentic AI',
    institution: 'IIT Kharagpur',
    period: '2026',
    status: 'IN PROGRESS',
  },
  {
    code: 'EDU.02',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'DAVV University — Indore',
    period: '2018 – 2021',
    status: 'COMPLETE',
  },
];

export const CERTIFICATIONS = [
  {
    code: 'CERT.01',
    name: 'Generative AI Mastermind',
    issuer: 'Outskill',
    detail: 'Hands-on workshop covering LLM workflows, prompt engineering, and AI-assisted development.',
  },
];

export const SOCIALS = {
  github: 'https://github.com/rohitsinghkatiyar',
  linkedin: 'https://linkedin.com/in/rohitsinghkatiyar',
  email: 'hello@rohitsinghkatiyar.com',
};
