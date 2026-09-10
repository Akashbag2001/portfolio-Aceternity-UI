// Single source of truth for the About and Resume pages — mirrors public/resume.pdf.

export type Role = {
  company: string;
  role: string;
  period: string;
  location?: string;
  type: "Full-time" | "Internship";
  summary: string;
  highlights: string[];
  /** Slugs of related case studies in lib/projects.ts */
  projects?: string[];
};

export const headline =
  "Software Engineer · Full-Stack Developer · Agentic AI Practitioner";

export const summary =
  "Software Engineer with 2+ years of experience building industrial IoT platforms, analytics dashboards and scalable full-stack applications using React.js, Next.js, Fastify.js, PostgreSQL and Docker.";

export const experience: Role[] = [
  {
    company: "Inwork Global Pvt Ltd",
    role: "Software Engineer",
    period: "Nov 2025 – Jun 2026",
    type: "Full-time",
    summary:
      "Data platform engineering: query orchestration, async processing and the analytics dashboards on top.",
    highlights: [
      "Architected a distributed query orchestration system handling 500K+ record datasets for analytical filtering, data processing and CSV export workflows.",
      "Built async worker-based processing pipelines for long-running queries, achieving sub-second frontend response times and eliminating UI blocking across all report flows.",
      "Designed dynamic SQL generation with JOIN optimisation and deduplication strategies, reducing execution time by ~40% on complex analytical workloads.",
      "Delivered 2+ analytics and operational dashboards for KPI monitoring, business intelligence and real-time data visualisation.",
      "Implemented RBAC supporting 4+ user roles with permission-based access control, protected routes and dynamic UI rendering.",
      "Used agentic AI workflows and AI-assisted development to accelerate delivery by 30% while maintaining code quality and scalability.",
    ],
    projects: ["analytics-query-engine"],
  },
  {
    company: "IEM-UEM Group",
    role: "Software Development Engineer L-1",
    period: "Sep 2024 – Oct 2025",
    location: "Kolkata",
    type: "Full-time",
    summary:
      "Led a four-person team on a university hiring portal and engineered a real-time industrial IoT platform.",
    highlights: [
      "Led a team of 4 engineers to architect and deliver a university hiring portal serving 1,000+ students and recruiters, owning architecture, task delegation and technical decisions.",
      "Engineered a real-time industrial IoT monitoring platform for machine health tracking, anomaly detection and predictive maintenance across 50+ connected devices.",
      "Built scalable ingestion pipelines for high-frequency IoT sensor streams with sub-second dashboard refresh rates and 4+ role-based monitoring dashboards.",
      "Implemented secure API-driven workflows for device management, telemetry processing and access control across operations and engineering teams.",
    ],
    projects: ["industrial-iot-monitoring", "campus-hiring-portal"],
  },
  {
    company: "IEMA Research & Development Pvt Ltd",
    role: "Software Developer Intern",
    period: "Mar 2024 – Aug 2024",
    type: "Internship",
    summary: "Real-time features for a university coding-competition platform.",
    highlights: [
      "Optimised a coding competition platform for a university with 12,000+ students via REST API integrations and a real-time leaderboard, improving data refresh latency for live event scoring.",
      "Developed responsive React.js features shipped to production and used by 500+ active users.",
    ],
    projects: ["coding-contest-platform"],
  },
  {
    company: "ReadyToGo Travels Pvt Ltd",
    role: "Front-End Developer Intern",
    period: "May 2022 – Jul 2022",
    type: "Internship",
    summary: "First professional role: responsive interfaces and code review.",
    highlights: [
      "Developed responsive frontend interfaces and took part in code reviews to maintain UI quality standards.",
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "C/C++"] },
  { group: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "React Query"] },
  { group: "Backend", items: ["Node.js", "Fastify.js", "Express.js", "Payload CMS"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"] },
  { group: "Tools & DevOps", items: ["Drizzle ORM", "NextAuth", "Docker", "Git", "GitHub"] },
  { group: "Architecture", items: ["Microservices", "RBAC", "Distributed Systems"] },
  {
    group: "AI & Practices",
    items: ["Agentic AI", "AI-Assisted Development", "Agile", "REST APIs", "CI/CD"],
  },
];

export const education = {
  degree: "B.Tech in Computer Science and Technology",
  school: "University of Engineering & Management, Kolkata",
  year: "2024",
  grade: "CGPA 8.8 / 10",
};

export const achievements = [
  "Architected a distributed query orchestration system for 500K+ record datasets, cutting delivery time by 30% through agentic AI workflows while keeping production-grade code quality.",
  "Contributed to open-source projects across multiple Hacktoberfest events, earning official recognition for community contributions.",
  "Peak competitive programming rating of 1,704, with 200+ problems solved on LeetCode across multiple contests.",
];

export const certifications = [
  { name: "Complete React Developer (Redux, Hooks, GraphQL)", issuer: "Udemy", year: "2023" },
  { name: "The Web Developer Bootcamp", issuer: "Udemy", year: "2023" },
];
