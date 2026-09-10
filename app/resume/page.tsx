import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { PillLink } from "@/components/ui/PillLink";
import {
  achievements,
  certifications,
  education,
  experience,
  headline,
  skills,
  summary,
} from "@/lib/resume";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Resume",
  description:
    "Resume of Akash Bag, Software Engineer: experience at Inwork Global and IEM-UEM Group, with React, Next.js, Node.js, PostgreSQL and Docker. Download the PDF.",
  path: "/resume",
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-ink/10 py-10 md:grid-cols-[11rem_1fr] md:gap-10 print:py-4">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50 md:pt-1">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative pl-5 leading-relaxed text-ink/75">
      <span aria-hidden="true" className="absolute left-0 top-[0.62em] h-1.5 w-1.5 rounded-full bg-flame" />
      {children}
    </li>
  );
}

export default function ResumePage() {
  return (
    <>
      <div className="no-print">
        <PageHeader
          eyebrow="Resume"
          lines={[{ text: "My" }, { text: "resume", outline: true }]}
          intro="Two-plus years of shipping production software, on one page. Read it here, or download the PDF for your ATS."
        >
          <Reveal delay={0.7} className="mt-10 flex flex-wrap gap-3">
            <PillLink href={site.resumePdf} download>
              Download PDF
            </PillLink>
            <PillLink href={site.resumePdf} newTab variant="outline">
              Open PDF
            </PillLink>
            <PillLink href="/hire" variant="outline">
              Hire me
            </PillLink>
          </Reveal>
        </PageHeader>
      </div>

      <div className="container-x pb-24 lg:pb-32 print:p-0">
        <div className="mx-auto max-w-5xl rounded-[1.75rem] border border-ink/10 bg-white px-6 pb-4 pt-10 sm:px-12 sm:pt-14 print:max-w-none print:rounded-none print:border-0 print:p-0">
          <header className="pb-10">
            <p className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">Akash Bag</p>
            <p className="mt-3 text-lg text-ink/70">{headline}</p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
              <li>{site.location}</li>
              <li>
                <a href={`mailto:${site.email}`} className="underline decoration-flame decoration-2 underline-offset-4">
                  {site.email}
                </a>
              </li>
              {site.socials.slice(0, 2).map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-flame decoration-2 underline-offset-4"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </header>

          <Block title="Summary">
            <p className="text-lg leading-relaxed text-ink/80">{summary}</p>
          </Block>

          <Block title="Experience">
            <ol className="space-y-10">
              {experience.map((role) => (
                <li key={role.company}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="font-display text-xl font-extrabold tracking-[-0.02em]">{role.role}</h3>
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink/50">{role.period}</p>
                  </div>
                  <p className="mt-1 text-ink/60">
                    {role.company}
                    {role.location && `, ${role.location}`}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {role.highlights.map((h) => (
                      <Bullet key={h}>{h}</Bullet>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Block>

          <Block title="Skills">
            <dl className="space-y-3">
              {skills.map((s) => (
                <div key={s.group} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4">
                  <dt className="font-semibold">{s.group}</dt>
                  <dd className="text-ink/70">{s.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </Block>

          <Block title="Education">
            <h3 className="font-display text-xl font-extrabold tracking-[-0.02em]">{education.degree}</h3>
            <p className="mt-1 text-ink/65">{education.school}</p>
            <p className="mt-2 text-sm font-semibold">
              Graduated {education.year} · {education.grade}
            </p>
          </Block>

          <Block title="Achievements">
            <ul className="space-y-2">
              {achievements.map((a) => (
                <Bullet key={a}>{a}</Bullet>
              ))}
            </ul>
          </Block>

          <Block title="Certifications">
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c.name} className="flex flex-wrap justify-between gap-x-6">
                  <span>
                    {c.name} <span className="text-ink/50">· {c.issuer}</span>
                  </span>
                  <span className="font-mono text-xs text-ink/50">{c.year}</span>
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </div>
    </>
  );
}
