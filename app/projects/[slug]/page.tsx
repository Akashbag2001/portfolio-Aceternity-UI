import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { ProjectCover } from "@/components/projects/ProjectCover";
import { Reveal } from "@/components/motion/Reveal";
import { RevealLines } from "@/components/motion/RevealLines";
import { CountUp } from "@/components/motion/CountUp";
import { PillLink } from "@/components/ui/PillLink";
import { JsonLd } from "@/components/ui/JsonLd";
import { getProject, projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return pageMetadata({
    title: `${project.title}: Case Study`,
    description: project.seoDescription,
    path: `/projects/${project.slug}`,
    image: project.cover.kind === "image" ? project.cover.src : undefined,
  });
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const url = `${site.url}/projects/${project.slug}`;
  const meta = [
    { label: "Role", value: project.role },
    { label: "Company", value: project.context },
    { label: "Year", value: project.year },
    { label: "Stack", value: project.stack.join(", ") },
  ];

  return (
    <article>
      <header className="container-x pt-36 sm:pt-44">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-ink/45">
            <li>
              <Link href="/" className="transition-colors hover:text-ink">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/projects" className="transition-colors hover:text-ink">
                Work
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              {project.title}
            </li>
          </ol>
        </nav>

        <Reveal y={12} className="mt-10">
          <p className="eyebrow">{project.category}</p>
        </Reveal>
        <RevealLines
          as="h1"
          onMount
          delay={0.4}
          lines={[{ text: project.title }]}
          className="mt-6 font-display text-[clamp(2.5rem,7vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]"
        />
        <Reveal delay={0.55}>
          <p className="mt-8 max-w-3xl text-xl leading-snug text-ink/75 sm:text-2xl">{project.tagline}</p>
        </Reveal>

        <Reveal delay={0.65}>
          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink/10 pt-8 lg:grid-cols-4">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">{item.label}</dt>
                <dd className="mt-2 font-medium leading-snug">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </header>

      <Reveal className="container-x mt-16">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] bg-ink sm:aspect-[16/9]">
          <ProjectCover project={project} priority sizes="(min-width: 1280px) 1184px, 100vw" />
        </div>
        {project.confidential && (
          <p className="mt-4 text-sm text-ink/50">
            Built for an employer, so the code and screenshots aren&apos;t public. The illustration
            is mine; the numbers are real.
          </p>
        )}
      </Reveal>

      {/* ── The challenge ── */}
      <section className="container-x grid gap-8 py-24 md:grid-cols-[0.75fr_1fr] md:gap-20 lg:py-32">
        <h2 className="eyebrow self-start">The challenge</h2>
        <div className="space-y-6 text-xl leading-relaxed text-ink/80 sm:text-2xl sm:leading-snug">
          {project.challenge.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── What I built ── */}
      <section className="border-t border-ink/10 py-24 lg:py-32">
        <div className="container-x grid gap-12 md:grid-cols-[0.75fr_1fr] md:gap-20">
          <div className="md:sticky md:top-32 md:self-start">
            <p className="eyebrow">What I built</p>
            <RevealLines
              lines={[{ text: "How it" }, { text: "works", outline: true }]}
              className="mt-6 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em]"
            />
          </div>
          <ol className="border-t border-ink/10">
            {project.build.map((step, i) => (
              <li key={step.title} className="border-b border-ink/10 py-10">
                <Reveal>
                  <span className="font-display text-sm font-extrabold text-flame">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-ink/70">{step.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="bg-ink py-24 text-paper lg:py-32">
        <div className="container-x">
          <h2 className="eyebrow text-paper/50">The results</h2>
          <dl
            className={cn(
              "mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2",
              project.results.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"
            )}
          >
            {project.results.map((result, i) => (
              <Reveal key={result.label} delay={i * 0.08} className="flex flex-col-reverse border-t border-paper/20 pt-6">
                <dt className="mt-3 max-w-[16rem] leading-relaxed text-paper/65">{result.label}</dt>
                <dd className="font-display text-[clamp(3rem,6vw,5rem)] font-extrabold leading-none tracking-[-0.04em] text-flame">
                  <CountUp value={result.value} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ── For the reader deciding whether to hire ── */}
      <section className="container-x grid gap-8 py-24 md:grid-cols-[0.75fr_1fr] md:gap-20 lg:py-32">
        <h2 className="eyebrow self-start">Why it matters to you</h2>
        <Reveal>
          <p className="font-display text-[clamp(1.6rem,3vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em]">
            {project.hireAngle}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <PillLink href="/hire">Work with me</PillLink>
            {project.link ? (
              <PillLink href={project.link.href} newTab variant="outline">
                {project.link.label}
              </PillLink>
            ) : (
              <PillLink href="/resume" variant="outline">
                See the resume
              </PillLink>
            )}
          </div>
        </Reveal>
      </section>

      <Link href={`/projects/${next.slug}`} data-cursor="Next" className="group block border-t border-ink/10">
        <div className="container-x py-20 sm:py-28">
          <p className="eyebrow">Next project</p>
          <p className="text-outline mt-6 font-display text-[clamp(2.5rem,7vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] transition-colors duration-500 group-hover:text-ink">
            {next.title}
          </p>
          <p className="mt-6 max-w-2xl text-lg text-ink/60">{next.tagline}</p>
        </div>
      </Link>

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            headline: `${project.title}: Case Study`,
            description: project.seoDescription,
            url,
            author: { "@id": `${site.url}/#person` },
            keywords: project.stack.join(", "),
            ...(project.cover.kind === "image" && { image: `${site.url}${project.cover.src}` }),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: site.url },
              { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/projects` },
              { "@type": "ListItem", position: 3, name: project.title, item: url },
            ],
          },
        ]}
      />
    </article>
  );
}
