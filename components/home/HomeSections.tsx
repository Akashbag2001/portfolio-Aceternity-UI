import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { RevealLines } from "@/components/motion/RevealLines";
import { ScrollText } from "@/components/motion/ScrollText";
import { ScrollSlide } from "@/components/motion/ScrollSlide";
import { CountUp } from "@/components/motion/CountUp";
import { PillLink } from "@/components/ui/PillLink";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { featuredProjects } from "@/lib/projects";
import { experience } from "@/lib/resume";

const stats = [
  { value: "2+", label: "Years shipping production software" },
  { value: "500K+", label: "Records per dataset in my latest data platform" },
  { value: "50+", label: "Industrial devices monitored in real time" },
  { value: "1,704", label: "Peak competitive programming rating" },
];

const stackTop = ["React", "Next.js", "TypeScript", "Node.js", "Fastify"];
const stackBottom = ["PostgreSQL", "Docker", "Agentic AI", "RBAC", "Real-time"];

export function HomeSections() {
  return (
    <>
      {/* ── In short ── */}
      <section className="border-t border-ink/10 py-24 sm:py-32">
        <div className="container-x grid gap-8 md:grid-cols-[12rem_1fr] md:gap-16">
          <p className="eyebrow md:pt-3">In short</p>
          <div>
            <ScrollText
              className="font-display text-[clamp(1.6rem,3.4vw,3rem)] font-bold leading-[1.15] tracking-[-0.02em]"
              text="I build software that has to hold up on a Monday morning: an analytics engine working through *500K-record* datasets, live dashboards for *50+* factory machines, a hiring portal for *1,000+* students. Now I'm looking for the next team, or the next project, worth building for."
            />
            <div className="mt-12 flex flex-wrap gap-3">
              <PillLink href="/about" variant="outline">
                More about me
              </PillLink>
              <PillLink href="/resume" variant="outline">
                Read the resume
              </PillLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── Selected work ── */}
      <section className="border-t border-ink/10 py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="eyebrow">Selected work</p>
              <RevealLines
                className="section-title mt-6"
                lines={[{ text: "Things I've" }, { text: "shipped", outline: true }]}
              />
            </div>
            <PillLink href="/projects" variant="outline">
              All projects
            </PillLink>
          </div>
          <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 0.1} className={cn(i % 2 === 1 && "md:mt-28")}>
                <ProjectCard project={project} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stack band ── */}
      <section aria-label="Tech stack" className="overflow-hidden border-t border-ink/10 py-16 sm:py-24">
        <ScrollSlide
          from="0%"
          to="-25%"
          className="font-display text-[clamp(3rem,10vw,9rem)] font-extrabold leading-none tracking-[-0.04em]"
        >
          <StackRow items={stackTop} />
        </ScrollSlide>
        <ScrollSlide
          from="-25%"
          to="0%"
          className="mt-2 font-display text-[clamp(3rem,10vw,9rem)] font-extrabold leading-none tracking-[-0.04em]"
        >
          <StackRow items={stackBottom} outline />
        </ScrollSlide>
      </section>

      {/* ── Numbers ── */}
      <section className="border-t border-ink/10 py-24 sm:py-32">
        <div className="container-x">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08} className="flex flex-col-reverse border-t border-ink pt-6">
                <dt className="mt-3 max-w-[15rem] text-sm leading-relaxed text-ink/60">{stat.label}</dt>
                <dd className="font-display text-[clamp(2.75rem,6vw,5rem)] font-extrabold leading-none tracking-[-0.04em]">
                  <CountUp value={stat.value} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Two ways to hire ── */}
      <section className="border-t border-ink/10 py-24 sm:py-32">
        <div className="container-x">
          <p className="eyebrow">Work with me</p>
          <RevealLines
            className="section-title mt-6"
            lines={[{ text: "Two ways" }, { text: "to hire me", outline: true }]}
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <Reveal className="h-full">
              <HireCard
                dark
                kicker="For hiring managers"
                title="Looking for a full-stack engineer?"
                points={[
                  "2+ years across data platforms, IoT and product teams",
                  "Owns features end to end, from schema to UI to deploy",
                  "Has led a team of four engineers",
                  "Available now for full-time roles",
                ]}
                primary={{ href: "/hire#teams", label: "Why hire me" }}
                secondary={{ href: "/resume", label: "Resume" }}
              />
            </Reveal>
            <Reveal className="h-full" delay={0.1}>
              <HireCard
                kicker="For founders & businesses"
                title="Need a product built properly?"
                points={[
                  "Web apps, websites, dashboards and internal tools",
                  "AI features and automation that do real work",
                  "Written scope, weekly demos, clean handover",
                ]}
                primary={{ href: "/hire#projects", label: "Start a project" }}
                secondary={{ href: "/contact", label: "Get in touch" }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="border-t border-ink/10 py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="eyebrow">Experience</p>
              <RevealLines
                className="section-title mt-6"
                lines={[{ text: "Where I've" }, { text: "been building", outline: true }]}
              />
            </div>
            <PillLink href="/about#experience" variant="outline">
              The full story
            </PillLink>
          </div>
          <ul className="mt-14 border-t border-ink/10">
            {experience.map((role) => (
              <li key={role.company}>
                <Link
                  href="/about#experience"
                  className="group relative grid gap-1 overflow-hidden border-b border-ink/10 px-2 py-7 sm:grid-cols-[1.2fr_1fr_auto] sm:items-center sm:gap-8 sm:px-6"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-out-expo group-hover:scale-y-100"
                  />
                  <span className="relative font-display text-xl font-extrabold tracking-[-0.02em] transition-colors duration-500 group-hover:text-paper sm:text-2xl">
                    {role.role}
                  </span>
                  <span className="relative text-ink/60 transition-colors duration-500 group-hover:text-paper/70">
                    {role.company}
                  </span>
                  <span className="relative font-mono text-xs uppercase tracking-[0.12em] text-ink/45 transition-colors duration-500 group-hover:text-flame">
                    {role.period}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function StackRow({ items, outline = false }: { items: string[]; outline?: boolean }) {
  return (
    <p>
      {[...items, ...items].map((item, i) => (
        <span key={i} className="inline-flex items-center">
          <span className={cn(outline && "text-outline")}>{item}</span>
          <span aria-hidden="true" className="mx-[0.3em] text-[0.4em] text-flame">
            ✦
          </span>
        </span>
      ))}
    </p>
  );
}

function HireCard({
  dark = false,
  kicker,
  title,
  points,
  primary,
  secondary,
}: {
  dark?: boolean;
  kicker: string;
  title: string;
  points: string[];
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-[1.75rem] p-8 sm:p-12",
        dark ? "bg-ink text-paper" : "bg-flame text-ink"
      )}
    >
      <p className={cn("text-xs font-semibold uppercase tracking-[0.2em]", dark ? "text-paper/50" : "text-ink/60")}>
        {kicker}
      </p>
      <h3 className="mt-6 font-display text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
        {title}
      </h3>
      <ul className="mt-8 flex-1 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex gap-3 leading-relaxed">
            <Check aria-hidden="true" className={cn("mt-1 h-4 w-4 shrink-0", dark ? "text-flame" : "text-ink")} />
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-wrap gap-3">
        <PillLink href={primary.href} variant={dark ? "flame" : "solid"} className={cn(!dark && "hover:bg-paper")}>
          {primary.label}
        </PillLink>
        <PillLink href={secondary.href} variant={dark ? "light" : "outline"}>
          {secondary.label}
        </PillLink>
      </div>
    </div>
  );
}
