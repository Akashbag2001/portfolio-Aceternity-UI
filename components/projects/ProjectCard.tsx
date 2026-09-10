import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProjectCover } from "./ProjectCover";

export function ProjectCard({
  project,
  index,
  priority = false,
}: {
  project: Project;
  index: number;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-cursor="View"
      className="group block rounded-[1.75rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-ink">
        <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.05]">
          <ProjectCover project={project} priority={priority} sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/75" />
        <span className="absolute left-6 top-6 font-display text-sm font-extrabold text-white/80 sm:left-8 sm:top-8">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white sm:p-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
              {project.category}
            </p>
            <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight tracking-[-0.02em] sm:text-3xl">
              {project.title}
            </h3>
          </div>
          <span
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:bg-flame"
          >
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70">{project.tagline}</p>
      <p className="mt-3 flex flex-wrap gap-x-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink/40">
        <span>{project.year}</span>
        <span>{project.context}</span>
      </p>
    </Link>
  );
}
