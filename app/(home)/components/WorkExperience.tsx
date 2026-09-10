"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { MapPin } from "lucide-react";

const experiences = [
  {
    company: "Inwork Global Pvt Ltd",
    role: "Software Engineer",
    period: "Nov 2025 — Jun 2026",
    location: "Kolkata, India",
    type: "Full-time",
    highlights: [
      "Built and maintained scalable full-stack features using Next.js, TypeScript and Node.js",
      "Designed REST APIs and integrated third-party services to power core product workflows",
      "Collaborated cross-functionally to ship production features with high code quality",
      "Optimised database queries (PostgreSQL/MongoDB), reducing response latency by 30%+",
    ],
  },
  {
    company: "IEM-UEM Group",
    role: "Software Development Engineer L-1",
    period: "Sep 2024 — Oct 2025",
    location: "Kolkata, India",
    type: "Full-time",
    highlights: [
      "Developed and deployed full-stack web applications serving thousands of students and faculty",
      "Led frontend architecture decisions using React and Tailwind CSS across multiple projects",
      "Built RESTful backend services with Node.js, Express and PostgreSQL",
      "Mentored junior developers and ran code reviews to uphold engineering standards",
    ],
  },
  {
    company: "IEMA R&D Pvt Ltd",
    role: "Software Development Intern",
    period: "Mar 2024 — Aug 2024",
    location: "Kolkata, India",
    type: "Internship",
    highlights: [
      "Contributed to an R&D product from ideation through to production deployment",
      "Built reusable UI components, improving development velocity across the team",
      "Integrated real-time data pipelines using WebSockets and REST APIs",
      "Wrote unit tests improving overall test coverage by 25%",
    ],
  },
  {
    company: "ReadyToGo Travels",
    role: "Front-End Developer Intern",
    period: "May 2022 — Jul 2022",
    location: "Remote",
    type: "Internship",
    highlights: [
      "Designed and built responsive landing pages with React.js and CSS",
      "Worked with the design team to translate Figma mockups into pixel-accurate UI",
      "Improved page load performance through code splitting and lazy loading",
    ],
  },
];

function ExperienceRow({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  return (
    <motion.article
      className="group relative grid grid-cols-1 gap-6 border-b border-ink/10 py-10 md:grid-cols-[220px_1fr] md:gap-12"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Left rail — period & meta */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span
            className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-ink transition-colors duration-300 group-hover:bg-sun"
            aria-hidden="true"
          />
          <time className="font-mono text-xs uppercase tracking-[0.1em] text-ink-muted">
            {exp.period}
          </time>
        </div>
        <span className="ml-[22px] w-fit rounded-full border border-ink/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
          {exp.type}
        </span>
        <span className="ml-[22px] inline-flex items-center gap-1.5 text-xs text-ink-muted">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {exp.location}
        </span>
      </div>

      {/* Right — role & detail */}
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-[clamp(1.35rem,2.6vw,2rem)] font-bold leading-tight text-ink">
            {exp.role}
          </h3>
          <p className="mt-1 text-base font-medium text-ink-muted">
            {exp.company}
          </p>
        </div>

        <ul className="flex flex-col gap-2.5">
          {exp.highlights.map((h) => (
            <li
              key={h}
              className="relative pl-5 text-sm leading-relaxed text-ink-muted"
            >
              <span
                className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-sun"
                aria-hidden="true"
              />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function WorkExperience() {
  return (
    <section id="about" className="border-t border-ink/10 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been building"
          lede="Four roles across product, R&D and education platforms — from first internship to shipping full-time."
        />

        <div className="mt-16 border-t border-ink/10">
          {experiences.map((exp, i) => (
            <ExperienceRow key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
