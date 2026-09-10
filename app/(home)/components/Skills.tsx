"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FaNode, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import {
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiFastify,
  SiDocker,
  SiTypescript,
  SiPrisma,
  SiRedis,
} from "react-icons/si";

const skills = [
  { text: "React", Icon: FaReact },
  { text: "Next.js", Icon: RiNextjsFill },
  { text: "TypeScript", Icon: SiTypescript },
  { text: "Tailwind", Icon: RiTailwindCssFill },
  { text: "Node.js", Icon: FaNode },
  { text: "Express", Icon: SiExpress },
  { text: "PostgreSQL", Icon: SiPostgresql },
  { text: "MongoDB", Icon: BiLogoMongodb },
  { text: "MySQL", Icon: SiMysql },
  { text: "Prisma", Icon: SiPrisma },
  { text: "Redis", Icon: SiRedis },
  { text: "Fastify", Icon: SiFastify },
  { text: "Docker", Icon: SiDocker },
];

function Skills() {
  return (
    <section id="toolkit" className="border-t border-ink/10 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Toolkit"
          title="The stack I reach for"
          lede="Tools I use daily — chosen because they hold up in production, not because they trend well."
          align="center"
          className="mx-auto max-w-2xl"
        />

        {/* Hairline grid — negative margins collapse the shared borders */}
        <div className="mt-16 grid grid-cols-2 border-l border-t border-ink/10 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map(({ text, Icon }, i) => (
            <motion.div
              key={text}
              className="group relative flex flex-col items-center justify-center gap-3 border-b border-r border-ink/10 bg-paper-alt px-4 py-10 transition-colors duration-300 hover:bg-sun"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
            >
              <Icon
                className="h-8 w-8 text-ink transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              <p className="text-sm font-semibold text-ink">{text}</p>
            </motion.div>
          ))}

          {/*
            Closing cell absorbs the remainder so the grid stays rectangular:
            13 skills + span 1 = 14 (2 cols), + span 2 = 15 (3 cols),
            + span 3 = 16 (4 cols).
          */}
          <div className="col-span-1 flex items-center justify-center border-b border-r border-ink/10 bg-paper-alt px-4 py-10 sm:col-span-2 lg:col-span-3">
            <span className="text-center text-sm text-ink-muted">
              …and whatever else the problem needs.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
