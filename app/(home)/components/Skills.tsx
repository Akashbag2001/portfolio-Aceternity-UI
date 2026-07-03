"use client";
import React, { useRef } from "react";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect";
import { FaNode, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiPostgresql, SiMysql, SiFastify, SiDocker, SiTypescript, SiPrisma, SiRedis } from "react-icons/si";
import { motion, useInView } from "framer-motion";

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  return (
    <section id="skills" className="py-10 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none" />

      <motion.div
        ref={ref}
        className="max-w-5xl mx-auto px-8 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col justify-center items-center mb-4">
          <Title text="Skills 💫" className="flex flex-col justify-center items-center -rotate-3" />
          <p className="text-gray-400 text-center mt-6 max-w-lg">
            My toolkit — technologies I work with daily to build fast, scalable, and beautiful products.
          </p>
        </div>
        <HoverEffect items={skills} />
      </motion.div>
    </section>
  );
}

export default Skills;
