import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { RevealLines } from "@/components/motion/RevealLines";
import { PillLink } from "@/components/ui/PillLink";
import { JsonLd } from "@/components/ui/JsonLd";
import { achievements, certifications, education, experience, skills } from "@/lib/resume";
import { getProject, type Project } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About",
  description:
    "About Akash Bag: a full-stack engineer from Kolkata with 2+ years building data platforms, real-time dashboards and AI products. Experience, skills and education.",
  path: "/about",
});

const story = [
  "I'm a full-stack software engineer based in Kolkata, India. Over the last two-plus years I've built data platforms, real-time IoT dashboards and portals used by thousands of students, mostly with React, Next.js, Node.js and PostgreSQL.",
  "My path: a front-end internship in 2022, then an R&D internship where I first shipped to a live audience. After that came a full-time SDE role at IEM-UEM Group, where I led a team of four on a university hiring portal and built an industrial IoT platform. Most recently, at Inwork Global, I architected a query orchestration system for 500K+ record datasets.",
  "Alongside that I co-founded Vriddhi Tech, an AI studio that builds websites, LLM integrations and automation for growing businesses. It keeps me honest about the business side of software: deadlines, budgets and what a client actually needs.",
  "I graduated with a B.Tech in Computer Science from the University of Engineering & Management, Kolkata (CGPA 8.8). I still enjoy competitive programming, with a peak rating of 1,704 and 200+ LeetCode problems solved, and I've contributed to open source across several Hacktoberfests.",
];

const principles = [
  {
    title: "Performance is a feature",
    body: "Sub-second responses and fast pages aren't polish. They're the difference between a tool people trust and one they work around.",
  },
  {
    title: "Own it end to end",
    body: "Schema, API, UI, deploy. I'm most useful when I can see the whole path and fix the part that's actually broken.",
  },
  {
    title: "Measure, then optimise",
    body: "The 40% query speed-up came from profiling, not guessing. I like having numbers before and after.",
  },
  {
    title: "AI as leverage",
    body: "Agentic AI workflows make me around 30% faster. The review, the tests and the judgement stay firmly human.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        lines={[{ text: "Hi, I'm" }, { text: "Akash Bag.", outline: true }]}
        intro="A full-stack engineer who likes the unglamorous parts: data that has to be right, pages that have to be fast, and systems other people can maintain after me."
      />

      {/* ── Story ── */}
      <section className="container-x grid gap-12 pb-24 md:grid-cols-[0.8fr_1fr] md:gap-20 lg:pb-32">
        <Reveal className="md:sticky md:top-32 md:self-start">
          <div className="group relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full bg-ink/10">
            <Image
              src={site.portrait}
              alt="Akash Bag"
              fill
              sizes="(min-width: 768px) 30vw, 90vw"
              className="scale-[1.2] object-cover grayscale transition-[filter] duration-700 group-hover:grayscale-0"
            />
          </div>
        </Reveal>
        <div className="space-y-6 text-lg leading-relaxed text-ink/75 sm:text-xl">
          {story.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
          <Reveal>
            <div className="flex flex-wrap gap-3 pt-4">
              <PillLink href="/resume">Read my resume</PillLink>
              <PillLink href="/hire" variant="outline">
                Hire me
              </PillLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="border-t border-ink/10 py-24 lg:py-32">
        <div className="container-x">
          <p className="eyebrow">How I work</p>
          <RevealLines
            className="section-title mt-6"
            lines={[{ text: "Four things" }, { text: "I care about", outline: true }]}
          />
          <ol className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {principles.map((p, i) => (
              <li
                key={p.title}
                className="group bg-paper p-8 transition-colors duration-500 hover:bg-ink hover:text-paper sm:p-10"
              >
                <span className="font-display text-sm font-extrabold text-flame">0{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-ink/65 transition-colors duration-500 group-hover:text-paper/70">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="border-t border-ink/10 py-24 lg:py-32">
        <div className="container-x">
          <p className="eyebrow">Experience</p>
          <RevealLines
            className="section-title mt-6"
            lines={[{ text: "Where I've" }, { text: "been building", outline: true }]}
          />
          <ol className="mt-16 border-t border-ink/10">
            {experience.map((role) => {
              const related = (role.projects ?? [])
                .map(getProject)
                .filter((p): p is Project => Boolean(p));
              return (
                <li key={role.company} className="border-b border-ink/10 py-12">
                  <Reveal className="grid gap-6 md:grid-cols-[0.75fr_1fr] md:gap-16">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink/50">{role.period}</p>
                      <h3 className="mt-3 font-display text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">
                        {role.role}
                      </h3>
                      <p className="mt-1 text-ink/60">
                        {role.company}
                        {role.location && `, ${role.location}`}
                      </p>
                      <span className="mt-4 inline-block rounded-full border border-ink/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/55">
                        {role.type}
                      </span>
                    </div>
                    <div>
                      <p className="text-lg text-ink/85">{role.summary}</p>
                      <ul className="mt-5 space-y-3">
                        {role.highlights.map((h) => (
                          <li key={h} className="relative pl-5 leading-relaxed text-ink/65">
                            <span aria-hidden="true" className="absolute left-0 top-[0.65em] h-1.5 w-1.5 rounded-full bg-flame" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      {related.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {related.map((p) => (
                            <Link
                              key={p.slug}
                              href={`/projects/${p.slug}`}
                              className="group inline-flex items-center gap-1.5 rounded-full bg-ink/5 px-4 py-2 text-sm font-semibold transition-colors hover:bg-flame"
                            >
                              Case study: {p.title}
                              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ── Toolkit ── */}
      <section className="border-t border-ink/10 py-24 lg:py-32">
        <div className="container-x">
          <p className="eyebrow">Toolkit</p>
          <RevealLines
            className="section-title mt-6"
            lines={[{ text: "The stack" }, { text: "I reach for", outline: true }]}
          />
          <dl className="mt-16 border-t border-ink/10">
            {skills.map((s) => (
              <Reveal key={s.group} className="grid gap-4 border-b border-ink/10 py-7 md:grid-cols-[14rem_1fr] md:items-center">
                <dt className="font-display text-lg font-extrabold">{s.group}</dt>
                <dd className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink/15 px-4 py-1.5 text-sm font-medium transition-colors hover:border-ink hover:bg-flame"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Education, achievements, certifications ── */}
      <section className="border-t border-ink/10 py-24 lg:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-3">
          <Reveal>
            <h2 className="eyebrow">Education</h2>
            <p className="mt-6 font-display text-2xl font-extrabold tracking-[-0.02em]">{education.degree}</p>
            <p className="mt-2 text-ink/65">{education.school}</p>
            <p className="mt-4 text-sm font-semibold">
              Class of {education.year} · {education.grade}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="eyebrow">Achievements</h2>
            <ul className="mt-6 space-y-4">
              {achievements.map((a) => (
                <li key={a} className="relative pl-5 leading-relaxed text-ink/70">
                  <span aria-hidden="true" className="absolute left-0 top-[0.65em] h-1.5 w-1.5 rounded-full bg-flame" />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.16}>
            <h2 className="eyebrow">Certifications</h2>
            <ul className="mt-6 space-y-5">
              {certifications.map((c) => (
                <li key={c.name}>
                  <p className="font-semibold leading-snug">{c.name}</p>
                  <p className="mt-1 text-sm text-ink/55">
                    {c.issuer} · {c.year}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: `${site.url}/about`,
          mainEntity: { "@id": `${site.url}/#person` },
        }}
      />
    </>
  );
}
