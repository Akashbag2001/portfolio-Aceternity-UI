import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { RevealLines } from "@/components/motion/RevealLines";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PillLink } from "@/components/ui/PillLink";
import { JsonLd } from "@/components/ui/JsonLd";
import { earlierBuilds, projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Work & Case Studies",
  description:
    "Case studies by Akash Bag: an analytics query engine for 500K+ record datasets, industrial IoT monitoring, a university hiring portal and the Vriddhi Tech studio.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        lines={[{ text: "Selected" }, { text: "work", outline: true }]}
        intro="Five projects from the last few years: a studio I co-founded, and platforms I built for employers. Each has a short case study covering the problem, what I built and the result."
      />

      <section className="container-x pb-24 lg:pb-32">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.1} className={cn(i % 2 === 1 && "md:mt-28")}>
              <ProjectCard project={project} index={i} priority={i < 2} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 py-24 lg:py-32">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow">Earlier builds</p>
              <RevealLines
                className="section-title mt-6"
                lines={[{ text: "Where it" }, { text: "started", outline: true }]}
              />
            </div>
            <p className="max-w-md text-lg leading-relaxed text-ink/65 md:justify-self-end">
              Front-end projects I built while learning to ship. They&apos;re small, but they&apos;re
              where the habits started.
            </p>
          </div>

          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {earlierBuilds.map((build, i) => (
              <li key={build.href}>
                <Reveal delay={i * 0.08}>
                  <a
                    href={build.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="Open"
                    className="group block"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-ink/5">
                      <Image
                        src={build.image}
                        alt={`Screenshot of the ${build.title}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-[1200ms] ease-out-expo group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-xl font-extrabold tracking-[-0.02em]">{build.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink/60">{build.description}</p>
                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink/40">
                          {build.stack.join(" · ")}
                        </p>
                      </div>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 shrink-0 transition-transform duration-500 ease-out-expo group-hover:rotate-45"
                      />
                    </div>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mt-20 flex flex-wrap items-center gap-3">
            <PillLink href={site.socials[0].href} newTab variant="outline">
              More on GitHub
            </PillLink>
            <PillLink href="/hire">Have a project like these?</PillLink>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Work & Case Studies",
          url: `${site.url}/projects`,
          author: { "@id": `${site.url}/#person` },
          hasPart: projects.map((p) => ({
            "@type": "CreativeWork",
            name: p.title,
            url: `${site.url}/projects/${p.slug}`,
          })),
        }}
      />
    </>
  );
}
