export type Cover =
  | { kind: "image"; src: string; alt: string }
  | { kind: "visual"; visual: "query" | "iot" | "portal" | "leaderboard"; alt: string };

export type Project = {
  slug: string;
  title: string;
  /** One line for cards and the case-study lede. */
  tagline: string;
  /** ~155 characters for the meta description. */
  seoDescription: string;
  category: string;
  year: string;
  role: string;
  context: string;
  stack: string[];
  cover: Cover;
  /** Background for drawn covers. */
  tone: string;
  challenge: string[];
  build: { title: string; body: string }[];
  results: { value: string; label: string }[];
  /** Speaks directly to someone deciding whether to hire. */
  hireAngle: string;
  link?: { href: string; label: string };
  /** Employer work: no real screenshots, so the cover is illustrative. */
  confidential?: boolean;
};

export const projects: Project[] = [
  {
    slug: "vriddhi-tech",
    title: "Vriddhi Tech",
    tagline:
      "An AI studio I co-founded to ship websites, LLM integrations and automation for growing businesses.",
    seoDescription:
      "Case study: Vriddhi Tech, the AI-powered studio co-founded by Akash Bag, shipping production websites, LLM integrations and business automation.",
    category: "Venture · AI studio",
    year: "2026",
    role: "Co-founder, engineering",
    context: "Vriddhi Tech, own venture",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "LLM APIs", "Automation"],
    cover: {
      kind: "image",
      src: "/vriddhi-preview.jpg",
      alt: "The Vriddhi Tech website: AI-powered digital solutions",
    },
    tone: "#0d1a14",
    challenge: [
      "Small and mid-sized businesses keep hearing that AI will change everything, then get handed a chatbot widget that knows nothing about them. What they actually need is a fast website, an assistant that can answer real questions, and the repetitive admin behind the scenes quietly automated.",
      "That usually means three different vendors. We wanted one team that could do all of it properly.",
    ],
    build: [
      {
        title: "The studio and its offer",
        body: "I co-founded Vriddhi (Sanskrit for “growth”) and shaped what we sell around problems I had already solved in production: web development, AI applications, automation, UI/UX, e-commerce, AI chatbots and digital marketing.",
      },
      {
        title: "The engineering side",
        body: "I own the technical half of the company: the default stack, how projects are scoped and estimated, and how work moves from a first call to a deployed build with a clean handover.",
      },
      {
        title: "Our own website as the first proof",
        body: "vriddhitech.com is both the storefront and the demo. It's built on the same stack and standards we sell: fast, responsive and easy for a non-developer to keep up to date.",
      },
    ],
    results: [
      { value: "7", label: "Service lines under one roof" },
      { value: "1", label: "Team, from website to AI to automation" },
      { value: "Live", label: "vriddhitech.com, shipping since 2026" },
    ],
    hireAngle:
      "I've been on the business side of software, not just the ticket queue. I know what a scope, a quote and a deadline mean to the person paying for them, and I build with that in mind.",
    link: { href: "https://www.vriddhitech.com/", label: "Visit vriddhitech.com" },
  },
  {
    slug: "analytics-query-engine",
    title: "Analytics Query Engine",
    tagline:
      "A distributed query system that lets teams filter, analyse and export 500K+ record datasets without freezing the app.",
    seoDescription:
      "Case study: a distributed query orchestration system for 500K+ record datasets, with async workers, ~40% faster SQL, sub-second UI and role-based access.",
    category: "Data platform",
    year: "2025–26",
    role: "Software Engineer",
    context: "Inwork Global Pvt Ltd",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Async workers", "RBAC"],
    cover: {
      kind: "visual",
      visual: "query",
      alt: "Illustration of rows of data flowing into parallel background workers",
    },
    tone: "#1b1b1b",
    confidential: true,
    challenge: [
      "The product's reporting screens ran heavy analytical queries directly inside the request. On large datasets (hundreds of thousands of rows) a filter or an export could lock the interface for the whole wait, and complex joins were slow enough that people stopped trusting the numbers would arrive.",
      "The job: make big queries feel instant to the user, make them actually faster underneath, and make sure every user only ever sees the data their role allows.",
    ],
    build: [
      {
        title: "Query orchestration",
        body: "I architected a distributed orchestration layer that takes a report request, splits up the work and tracks it through to a result. It's built for datasets of 500K+ records across filtering, processing and CSV export.",
      },
      {
        title: "Async worker pipelines",
        body: "Long-running queries moved off the request path and onto background workers. The UI gets an immediate response and a progress state instead of a spinner that might never end: sub-second responses on every report flow, and no more blocking.",
      },
      {
        title: "Dynamic SQL, tuned",
        body: "Reports are assembled by a SQL generator that plans JOINs and deduplicates results deliberately rather than by accident. On complex analytical workloads that cut execution time by around 40%.",
      },
      {
        title: "Dashboards and access control",
        body: "On top sit analytics and operational dashboards for KPI monitoring and real-time visualisation, guarded by role-based access control across 4+ roles: protected routes, permission checks, and UI that only renders what you're allowed to see.",
      },
    ],
    results: [
      { value: "500K+", label: "Records per dataset, filtered and exported" },
      { value: "~40%", label: "Faster execution on complex analytical queries" },
      { value: "<1s", label: "Frontend response on long-running report flows" },
      { value: "30%", label: "Faster delivery with agentic AI workflows" },
    ],
    hireAngle:
      "If your product has slow reports, a database that groans under analytics, or data that has to be locked down by role, I've fixed exactly that, and I can show you the numbers.",
  },
  {
    slug: "industrial-iot-monitoring",
    title: "Industrial IoT Monitoring",
    tagline:
      "Real-time machine health, anomaly detection and predictive maintenance across 50+ connected industrial devices.",
    seoDescription:
      "Case study: a real-time industrial IoT platform for 50+ devices, with high-frequency sensor ingestion, sub-second dashboards and anomaly detection.",
    category: "IoT · Real-time",
    year: "2024–25",
    role: "Software Development Engineer",
    context: "IEM-UEM Group, Kolkata",
    stack: ["React", "Node.js", "REST APIs", "Streaming data", "RBAC"],
    cover: {
      kind: "visual",
      visual: "iot",
      alt: "Illustration of a grid of connected devices with one flagged anomaly on a live chart",
    },
    tone: "#10202a",
    confidential: true,
    challenge: [
      "Machines on an industrial floor rarely fail without warning; the warning is just buried in sensor data nobody is watching. The goal was a platform that watches it for you: live health for every connected device, early flags when readings drift, and enough history to plan maintenance before a breakdown forces it.",
      "That meant ingesting high-frequency sensor streams reliably, and giving operators and engineers their own view of the same data.",
    ],
    build: [
      {
        title: "Ingestion that keeps up",
        body: "I built data ingestion pipelines for high-frequency IoT sensor streams, feeding dashboards that refresh in under a second.",
      },
      {
        title: "Machine health and anomaly detection",
        body: "Live status for each of the 50+ connected devices, with anomaly detection surfacing unusual readings and predictive-maintenance signals so teams can act before a failure, not after it.",
      },
      {
        title: "Four views of the same floor",
        body: "4+ role-based monitoring dashboards. Each team sees the metrics and controls that matter to its job instead of a wall of every chart.",
      },
      {
        title: "Secure device workflows",
        body: "API-driven workflows for device management, telemetry processing and access control, used across operations and engineering teams.",
      },
    ],
    results: [
      { value: "50+", label: "Connected industrial devices monitored" },
      { value: "<1s", label: "Dashboard refresh on live sensor streams" },
      { value: "4+", label: "Role-based monitoring dashboards" },
    ],
    hireAngle:
      "Real-time data is unforgiving: late, duplicated or dropped readings show up on screen immediately. I've built both the pipeline and the interface for it, and I know where it breaks.",
  },
  {
    slug: "campus-hiring-portal",
    title: "University Hiring Portal",
    tagline:
      "I led a team of four to build the placement portal connecting 1,000+ students with recruiters.",
    seoDescription:
      "Case study: Akash Bag led a team of 4 engineers to architect and ship a university hiring portal serving 1,000+ students and recruiters.",
    category: "Platform · Team lead",
    year: "2024–25",
    role: "Tech lead, team of 4",
    context: "IEM-UEM Group, Kolkata",
    stack: ["React", "Node.js", "REST APIs", "Role-based access"],
    cover: {
      kind: "visual",
      visual: "portal",
      alt: "Illustration of three overlapping dashboards for students, recruiters and admins",
    },
    tone: "#1f1812",
    confidential: true,
    challenge: [
      "Campus hiring has three groups pulling in different directions: students who want to find and apply for roles, recruiters who want the right shortlist fast, and administrators who need to see and run the whole process. Without one shared system, all of that coordination falls on people.",
      "I was asked to lead the build. That meant writing code, and also deciding how it would be built and who would build what.",
    ],
    build: [
      {
        title: "Architecture ownership",
        body: "I owned the system design end to end: the data model, the service boundaries and the API contract the frontend and backend were built against.",
      },
      {
        title: "Leading four engineers",
        body: "I broke the work into deliverable pieces, delegated across a team of four, reviewed code, and made the technical calls that kept everyone moving in the same direction.",
      },
      {
        title: "One portal, three audiences",
        body: "Students manage profiles and applications, recruiters manage openings and candidates, and administrators oversee the whole pipeline, each with their own permissions and views.",
      },
    ],
    results: [
      { value: "1,000+", label: "Students and recruiters on the platform" },
      { value: "4", label: "Engineers led, from design to delivery" },
    ],
    hireAngle:
      "I can do more than write features. I can take a project from a blank page to a shipped product with a team, scoping, splitting and reviewing the work so it actually lands.",
  },
  {
    slug: "coding-contest-platform",
    title: "Live Coding Contest Platform",
    tagline:
      "Optimised a university coding-competition platform for 12,000+ students, with a real-time leaderboard for live events.",
    seoDescription:
      "Case study: optimising a coding competition platform for a 12,000+ student university, with REST integrations and a real-time leaderboard.",
    category: "Real-time · EdTech",
    year: "2024",
    role: "Software Developer Intern",
    context: "IEMA Research & Development",
    stack: ["React", "REST APIs", "Real-time leaderboard"],
    cover: {
      kind: "visual",
      visual: "leaderboard",
      alt: "Illustration of a live leaderboard with ranked score bars",
    },
    tone: "#171a26",
    confidential: true,
    challenge: [
      "During a live contest, the leaderboard is the product. Students refresh it constantly, and if scores lag the event loses its energy, and its credibility.",
      "The platform served a university of 12,000+ students and had to keep up on event day.",
    ],
    build: [
      {
        title: "Real-time leaderboard",
        body: "I worked on the REST API integrations and the live leaderboard, cutting data-refresh latency so scores update during the event rather than after it.",
      },
      {
        title: "Production frontend",
        body: "I built responsive React features that went to production and were used by 500+ active users.",
      },
    ],
    results: [
      { value: "12,000+", label: "Students at the university served" },
      { value: "500+", label: "Active users on features I shipped" },
    ],
    hireAngle:
      "I learned early that a feature isn't done until it survives real traffic. That habit has come with me to every project since.",
  },
];

export const featuredSlugs = [
  "analytics-query-engine",
  "vriddhi-tech",
  "industrial-iot-monitoring",
  "campus-hiring-portal",
];

export const featuredProjects = featuredSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is Project => Boolean(p));

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Early front-end builds: linked out, no case study. */
export const earlierBuilds = [
  {
    title: "GPT-3 landing page",
    description: "A responsive, animation-heavy marketing page. Practice in modern layout and UI polish.",
    stack: ["React", "CSS"],
    href: "https://gpt3-20023.netlify.app/",
    image: "/gpt-3-thump.png",
  },
  {
    title: "Movie & series finder",
    description: "A Hulu-style browser for trending films and shows, powered by a public movie API.",
    stack: ["Next.js", "REST API"],
    href: "https://hulu-clone-react-nextjs-ma27.vercel.app/?genre=fetchTrending",
    image: "/hulu.png",
  },
  {
    title: "Twitter clone",
    description: "A social feed with auth and real-time posts, backed by Firebase.",
    stack: ["React", "Firebase"],
    href: "https://twitter-clone-18a0a.web.app/",
    image: "/twitter-thump.png",
  },
];
