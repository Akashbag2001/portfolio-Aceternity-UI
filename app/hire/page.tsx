import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Check, Plus } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { RevealLines } from "@/components/motion/RevealLines";
import { PillLink } from "@/components/ui/PillLink";
import { JsonLd } from "@/components/ui/JsonLd";
import { getProject } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Hire Me",
  description:
    "Hire Akash Bag, a full-stack & AI engineer available for full-time roles and freelance projects: web apps, dashboards, AI features and automation.",
  path: "/hire",
});

const linkedin = site.socials.find((s) => s.label === "LinkedIn")!.href;

const quickFacts = [
  { label: "Roles", value: "Software Engineer, Full-Stack, AI product engineering" },
  { label: "Experience", value: "2+ years across 4 roles" },
  { label: "Core stack", value: "React, Next.js, TypeScript, Node.js, PostgreSQL" },
  { label: "Also", value: "Fastify, Docker, RBAC, agentic AI workflows" },
  { label: "Education", value: "B.Tech CSE, UEM Kolkata · CGPA 8.8" },
  { label: "Based in", value: site.location },
  { label: "Availability", value: "Available now" },
];

const proof = [
  {
    title: "Data-heavy features that stay fast",
    body: "500K+ record datasets, async workers and ~40% faster SQL.",
    slug: "analytics-query-engine",
  },
  {
    title: "Real-time systems",
    body: "Sub-second dashboards over live sensor streams from 50+ devices.",
    slug: "industrial-iot-monitoring",
  },
  {
    title: "Technical leadership",
    body: "Led four engineers from architecture to delivery for 1,000+ users.",
    slug: "campus-hiring-portal",
  },
  {
    title: "Product and business sense",
    body: "Co-founded an AI studio, so I know what a missed deadline costs.",
    slug: "vriddhi-tech",
  },
];

const services = [
  {
    title: "Web apps & websites",
    body: "Fast, search-friendly sites and full web applications in Next.js and TypeScript, built so your team can own them afterwards.",
    points: ["Marketing sites & landing pages", "SaaS products & customer portals", "Core Web Vitals treated as a requirement"],
  },
  {
    title: "Dashboards & internal tools",
    body: "The admin panel, the reporting screen, the ops dashboard, wired to your real data, with the right people seeing the right things.",
    points: ["Analytics & KPI dashboards", "Role-based access control", "CSV exports & heavy reports that stay fast"],
  },
  {
    title: "AI features & automation",
    body: "LLM features that do real work, and the repetitive admin in your week turned into something that just runs.",
    points: ["AI assistants over your own content", "Agentic workflows with real tool access", "API integrations & scheduled jobs"],
  },
];

const process = [
  { title: "Intro call", body: "A short call about what you're building, who it's for and what “done” looks like." },
  { title: "Scope & quote", body: "A written scope with deliverables, timeline and price, agreed before any work starts." },
  { title: "Build in the open", body: "Regular demos on a live preview link, so you see progress and can change direction early." },
  { title: "Launch & handover", body: "Deployed, documented and handed over. The code and the accounts are yours." },
];

const faqs = [
  {
    q: "Are you open to full-time roles?",
    a: "Yes. I'm available now for full-time software engineering roles: full-stack, frontend-leaning or AI product engineering. I'm based in Kolkata and happy to talk about remote, hybrid or on-site setups.",
  },
  {
    q: "Do you take freelance or contract work?",
    a: "Yes. I take on scoped projects directly, and for larger builds I can bring in the team at Vriddhi Tech, the studio I co-founded.",
  },
  {
    q: "How is a freelance project priced?",
    a: "It depends on scope. After an intro call I send a written quote with clear deliverables and a timeline, so there are no surprises later.",
  },
  {
    q: "What's your main tech stack?",
    a: "React, Next.js and TypeScript on the front end; Node.js (Fastify, Express) and PostgreSQL on the back end; Docker for deployment. I also work with MongoDB, MySQL, Drizzle ORM and LLM APIs where they fit.",
  },
  { q: "How quickly do you reply?", a: "Within 24 hours, usually sooner." },
  {
    q: "Can I see your resume?",
    a: "Of course. It's on the resume page, and you can download it as a PDF from there.",
  },
];

export default function HirePage() {
  return (
    <>
      <PageHeader
        eyebrow="Hire me"
        lines={[{ text: "Let's work" }, { text: "together.", outline: true }]}
        intro="Whether you're filling a role on your team or need a product built, here's what I bring, how I work, and how to get started today."
      >
        <Reveal delay={0.7} className="mt-10">
          <p className="inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white px-5 py-2.5 text-sm font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-flame" />
            </span>
            Available now for full-time roles and freelance projects
          </p>
        </Reveal>
      </PageHeader>

      {/* ── Pick a track ── */}
      <section className="container-x grid gap-6 pb-24 md:grid-cols-2">
        <Reveal className="h-full">
          <a
            href="#teams"
            data-cursor="Go"
            className="group flex h-full min-h-[18rem] flex-col justify-between rounded-[1.75rem] bg-ink p-8 text-paper sm:p-10"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/50">
              For hiring managers & recruiters
            </span>
            <span className="mt-10 flex items-end justify-between gap-6">
              <span>
                <span className="block font-display text-4xl font-extrabold leading-none tracking-[-0.03em] sm:text-5xl">
                  I&apos;m hiring for a role
                </span>
                <span className="mt-4 block max-w-sm text-paper/65">
                  Quick facts, proof from real projects, and my resume.
                </span>
              </span>
              <ArrowDownRight aria-hidden="true" className="h-10 w-10 shrink-0 text-flame transition-transform duration-500 ease-out-expo group-hover:translate-y-1" />
            </span>
          </a>
        </Reveal>
        <Reveal className="h-full" delay={0.1}>
          <a
            href="#projects"
            data-cursor="Go"
            className="group flex h-full min-h-[18rem] flex-col justify-between rounded-[1.75rem] bg-flame p-8 text-ink sm:p-10"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
              For founders & businesses
            </span>
            <span className="mt-10 flex items-end justify-between gap-6">
              <span>
                <span className="block font-display text-4xl font-extrabold leading-none tracking-[-0.03em] sm:text-5xl">
                  I need something built
                </span>
                <span className="mt-4 block max-w-sm text-ink/70">
                  Services, process, and what you can expect.
                </span>
              </span>
              <ArrowDownRight aria-hidden="true" className="h-10 w-10 shrink-0 transition-transform duration-500 ease-out-expo group-hover:translate-y-1" />
            </span>
          </a>
        </Reveal>
      </section>

      {/* ── For teams hiring ── */}
      <section id="teams" className="border-t border-ink/10 py-24 lg:py-32">
        <div className="container-x">
          <p className="eyebrow">For teams hiring</p>
          <RevealLines
            className="section-title mt-6"
            lines={[{ text: "Hiring a full-stack" }, { text: "engineer?", outline: true }]}
          />

          <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_0.9fr]">
            <Reveal className="space-y-6 text-lg leading-relaxed text-ink/75 sm:text-xl">
              <p>
                I&apos;m a software engineer with 2+ years of shipping production systems: a query
                engine for 500K+ record datasets, a real-time IoT platform, and a hiring portal I led
                a team of four to build.
              </p>
              <p>
                I&apos;m most useful on teams that want someone to own a feature end to end, from
                schema and API through to the interface and the deploy, and who care whether it&apos;s
                still fast and maintainable a year later.
              </p>
              <p>
                I use agentic AI workflows every day, and they&apos;ve made my delivery about 30%
                faster. The review, the testing and the judgement stay with me.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <PillLink href="/resume">View resume</PillLink>
                <PillLink href={site.resumePdf} download variant="outline">
                  Download PDF
                </PillLink>
                <PillLink href={linkedin} newTab variant="outline">
                  LinkedIn
                </PillLink>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[1.75rem] border border-ink/10 bg-white p-8 sm:p-10">
                <h3 className="eyebrow">Quick facts</h3>
                <dl className="mt-6">
                  {quickFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-ink/10 py-4 last:border-0"
                    >
                      <dt className="pt-0.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink/45">{fact.label}</dt>
                      <dd className="font-medium leading-snug">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          <h3 className="mt-24 font-display text-3xl font-extrabold tracking-[-0.02em] sm:text-4xl">
            What I&apos;d bring to your team
          </h3>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {proof.map((item, i) => {
              const project = getProject(item.slug);
              return (
                <li key={item.title}>
                  <Reveal delay={(i % 2) * 0.08} className="h-full">
                    <Link
                      href={`/projects/${item.slug}`}
                      data-cursor="Read"
                      className="group flex h-full flex-col justify-between gap-8 rounded-[1.5rem] border border-ink/10 p-7 transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-paper sm:p-8"
                    >
                      <span>
                        <span className="block font-display text-2xl font-extrabold tracking-[-0.02em]">{item.title}</span>
                        <span className="mt-3 block leading-relaxed text-ink/65 transition-colors duration-500 group-hover:text-paper/70">
                          {item.body}
                        </span>
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold">
                        Case study: {project?.title}
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
                      </span>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── For founders & businesses ── */}
      <section id="projects" className="bg-ink py-24 text-paper lg:py-32">
        <div className="container-x">
          <p className="eyebrow text-paper/50">For founders & businesses</p>
          <RevealLines
            tone="light"
            className="section-title mt-6"
            lines={[{ text: "Need something" }, { text: "built?", outline: true }]}
          />
          <Reveal>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-paper/70 sm:text-xl">
              I build web products for startups and growing businesses: the kind that load fast,
              rank well and don&apos;t fall over when people actually use them. You work directly with
              the engineer writing the code.
            </p>
          </Reveal>

          <ul className="mt-16 grid gap-6 lg:grid-cols-3">
            {services.map((service, i) => (
              <li key={service.title}>
                <Reveal delay={i * 0.08} className="flex h-full flex-col rounded-[1.5rem] border border-paper/15 p-7 sm:p-8">
                  <span className="font-display text-sm font-extrabold text-flame">0{i + 1}</span>
                  <h3 className="mt-5 font-display text-2xl font-extrabold tracking-[-0.02em]">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-paper/65">{service.body}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-paper/15 pt-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm">
                        <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ul>

          <h3 className="mt-24 font-display text-3xl font-extrabold tracking-[-0.02em] sm:text-4xl">How a project runs</h3>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] border border-paper/15 bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <li key={step.title} className="bg-ink p-7 sm:p-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-flame font-display text-sm font-extrabold text-ink">
                  {i + 1}
                </span>
                <h4 className="mt-6 font-display text-xl font-extrabold">{step.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-16 flex flex-wrap gap-3">
            <PillLink href="/contact" variant="flame">
              Start a project
            </PillLink>
            <PillLink href={`mailto:${site.email}`} variant="light">
              Email me directly
            </PillLink>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-ink/10 py-24 lg:py-32">
        <div className="container-x grid gap-12 md:grid-cols-[0.75fr_1fr] md:gap-20">
          <div>
            <p className="eyebrow">FAQ</p>
            <RevealLines
              className="mt-6 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em]"
              lines={[{ text: "Good" }, { text: "questions", outline: true }]}
            />
          </div>
          <div className="border-t border-ink/10">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border-b border-ink/10 py-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-extrabold tracking-[-0.02em] sm:text-2xl">
                  {faq.q}
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-transform duration-300 group-open:rotate-45 group-open:bg-flame">
                    <Plus aria-hidden="true" className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink/70">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
    </>
  );
}
