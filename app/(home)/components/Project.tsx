"use client";
import React, { useRef } from "react";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const projects = [
    {
      title: "Online Movie / Series Searcher",
      tech: [SiNextdotjs, RiTailwindCssFill],
      link: "https://hulu-clone-react-nextjs-ma27.vercel.app/?genre=fetchTrending",
      cover: "/hulu.png",
      gradient: "from-green-500/20 to-emerald-600/20",
      border: "border-green-500/20",
      accent: "bg-green-500",
    },
    {
      title: "Twitter Clone",
      tech: [FaReact, RiTailwindCssFill, IoLogoFirebase],
      link: "https://twitter-clone-18a0a.web.app/",
      cover: "/twitter-thump.png",
      gradient: "from-indigo-500/20 to-violet-600/20",
      border: "border-indigo-500/20",
      accent: "bg-indigo-500",
    },
    {
      title: "GPT-3 (Modern UI/UX)",
      tech: [FaReact, FaCss3Alt],
      link: "https://gpt3-20023.netlify.app/",
      cover: "/gpt-3-thump.png",
      gradient: "from-purple-500/20 to-fuchsia-600/20",
      border: "border-purple-500/20",
      accent: "bg-purple-500",
    },
  ];

  return (
    <section id="projects" className="py-10 relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-green-500/5 blur-[100px] pointer-events-none" />

      <motion.div
        ref={ref}
        className="py-10 p-5 sm:p-0 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col justify-center items-center mb-4">
          <Title text="Projects ✅" className="flex flex-col justify-center items-center -rotate-3" />
          <p className="text-gray-400 text-center mt-6 max-w-lg">
            A selection of things I&apos;ve built — from clones to custom UIs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-16 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <div
                  className={cn(
                    "group rounded-2xl border overflow-hidden bg-gradient-to-br transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl",
                    project.gradient,
                    project.border
                  )}
                >
                  <DirectionAwareHover
                    imageUrl={project.cover}
                    className="w-full cursor-pointer"
                  >
                    <div className="space-y-3">
                      <h2 className="text-xl font-bold">{project.title}</h2>
                      <div className="flex items-center gap-3">
                        {project.tech.map((Icon, i) => (
                          <Icon className="w-6 h-6 opacity-90" key={i} />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-white/80">
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>View live</span>
                      </div>
                    </div>
                  </DirectionAwareHover>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Project;
