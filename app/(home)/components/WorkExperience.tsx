"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Title from "./Title";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Inwork Global Pvt Ltd",
    role: "Software Engineer",
    period: "Nov 2025 – Jun 2026",
    location: "India",
    type: "Full-time",
    color: "from-green-500 to-emerald-600",
    glowColor: "rgba(34,197,94,0.2)",
    borderColor: "border-green-500/30",
    dotColor: "bg-green-500",
    dotGlow: "#22c55e",
    highlights: [
      "Built and maintained scalable full-stack features using Next.js, TypeScript and Node.js",
      "Designed REST APIs and integrated third-party services to power core product workflows",
      "Collaborated cross-functionally to ship production features with high code quality",
      "Optimised database queries (PostgreSQL/MongoDB) reducing response latency by 30%+",
    ],
  },
  {
    company: "IEM-UEM Group",
    role: "Software Development Engineer L-1",
    period: "Sep 2024 – Oct 2025",
    location: "Kolkata, India",
    type: "Full-time",
    color: "from-indigo-500 to-violet-600",
    glowColor: "rgba(99,102,241,0.2)",
    borderColor: "border-indigo-500/30",
    dotColor: "bg-indigo-500",
    dotGlow: "#6366f1",
    highlights: [
      "Developed and deployed full-stack web applications serving thousands of students and faculty",
      "Led frontend architecture decisions using React and Tailwind CSS across multiple projects",
      "Built RESTful backend services with Node.js, Express and PostgreSQL",
      "Mentored junior developers and conducted code reviews to uphold engineering standards",
    ],
  },
  {
    company: "IEMA R&D Pvt Ltd",
    role: "Software Development Intern",
    period: "Mar 2024 – Aug 2024",
    location: "Remote",
    type: "Internship",
    color: "from-purple-500 to-fuchsia-600",
    glowColor: "rgba(168,85,247,0.2)",
    borderColor: "border-purple-500/30",
    dotColor: "bg-purple-500",
    dotGlow: "#a855f7",
    highlights: [
      "Contributed to an R&D product from ideation to production deployment",
      "Built reusable UI components improving development velocity across the team",
      "Integrated real-time data pipelines using WebSockets and REST APIs",
      "Wrote unit tests improving overall test coverage by 25%",
    ],
  },
  {
    company: "ReadyToGo Travels",
    role: "Front-End Developer Intern",
    period: "May 2022 – Jul 2022",
    location: "Remote",
    type: "Internship",
    color: "from-cyan-500 to-sky-600",
    glowColor: "rgba(6,182,212,0.2)",
    borderColor: "border-cyan-500/30",
    dotColor: "bg-cyan-500",
    dotGlow: "#06b6d4",
    highlights: [
      "Designed and built responsive landing pages with React.js and CSS",
      "Collaborated with the design team to translate Figma mockups into pixel-perfect UI",
      "Improved page load performance through code splitting and lazy loading",
    ],
  },
];

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="relative pl-10 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Timeline dot */}
      <motion.div
        className={`absolute left-0 top-6 w-4 h-4 rounded-full ${exp.dotColor} ring-4 ring-black z-10`}
        style={{ boxShadow: `0 0 16px ${exp.dotGlow}` }}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.35, delay: index * 0.1 + 0.15 }}
      />

      {/* Card */}
      <div
        className={`relative rounded-2xl p-6 border ${exp.borderColor} bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:bg-white/[0.05]`}
        style={{ boxShadow: `0 4px 32px ${exp.glowColor}` }}
      >
        {/* Top gradient bar */}
        <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${exp.color} rounded-t-2xl`} />

        {/* Glow blob */}
        <div
          className="absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: exp.dotGlow }}
        />

        {/* Header */}
        <div className="flex flex-wrap items-start gap-3 mb-4 relative z-10">
          <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white`}>
            {exp.type}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white mb-0.5 relative z-10">{exp.role}</h3>
        <p className="text-base font-semibold text-gray-300 mb-4 relative z-10">{exp.company}</p>

        {/* Meta badges */}
        <div className="flex flex-wrap gap-4 mb-5 relative z-10">
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{exp.period}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>{exp.location}</span>
          </div>
        </div>

        {/* Bullet points */}
        <ul className="space-y-2 relative z-10">
          {exp.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed">
              <ChevronRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-green-400" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function WorkExperience() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="flex flex-col justify-center items-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Title text="Experience" className="flex flex-col justify-center items-center -rotate-3" />
          <p className="text-gray-400 text-center mt-6 max-w-lg text-sm">
            My professional journey — from internships to full-time engineering roles across diverse tech stacks.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-green-500/40 via-indigo-500/30 to-transparent" />

          {/* Cards */}
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
