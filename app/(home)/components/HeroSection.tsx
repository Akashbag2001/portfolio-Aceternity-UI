"use client";
import React from "react";
import { FlipWords } from "./ui/flip-words";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stats = [
  { value: "2+", label: "Years Coding" },
  { value: "4", label: "Companies" },
  { value: "10+", label: "Projects" },
  { value: "~", label: "Coffee Cups" },
];

function HeroSection() {
  const words = [
    "Software Engineer",
    "Full-Stack Developer",
    "Problem Solver",
    "TypeScript Specialist",
    "Agentic-AI Practitioner",
  ];

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Particle canvas background */}
      <div className="absolute inset-0 -z-10">
        <ParticleField />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-green-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <motion.div
        className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          {/* Available badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for opportunities
            </span>
          </motion.div>

          {/* Greeting + name */}
          <motion.div variants={itemVariants}>
            <p className="text-gray-400 text-lg mb-2">Hello, world! 👋</p>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              {"I'm "}
              <span className="relative">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Akash Bag
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full" />
              </span>
            </h1>
          </motion.div>

          {/* FlipWords */}
          <motion.div variants={itemVariants} className="text-xl font-semibold text-white flex items-center flex-wrap gap-1">
            <span>A passionate</span>
            <FlipWords
              words={words}
              className="!text-green-400 font-bold"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="mailto:bagakash11@gmail.com"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5"
            >
              Contact Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/Akashbag2001"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/akash-bag/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right — animated geometric avatar */}
        <motion.div
          variants={itemVariants}
          className="relative w-80 h-80 lg:w-96 lg:h-96 flex-shrink-0"
        >
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50" />
          </div>

          {/* Inner rotating ring */}
          <div className="absolute inset-8 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
          </div>

          {/* Central card */}
          <div className="absolute inset-12 rounded-2xl bg-gradient-to-br from-green-500/10 to-indigo-500/10 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center gap-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-indigo-500/5" />
            {/* Code snippet decoration */}
            <div className="relative z-10 font-mono text-xs text-center space-y-1 px-4">
              <p className="text-green-400">{"<Akash"}</p>
              <p className="text-gray-400 pl-2">{"role=\"Engineer\""}</p>
              <p className="text-gray-400 pl-2">{"passion=\"100%\""}</p>
              <p className="text-green-400">{"/>"}</p>
            </div>
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </div>
          </div>

          {/* Glow center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-green-500/10 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* Stats row */}
      <motion.div
        className="relative z-10 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-4 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-300 group"
          >
            <span className="text-2xl font-black bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              {stat.value}
            </span>
            <span className="text-xs text-gray-500 mt-1 font-medium">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-px h-8 bg-gradient-to-b from-white/0 to-white/30 animate-pulse" />
        <p className="text-xs text-gray-600">scroll down</p>
      </motion.div>
    </div>
  );
}

export default HeroSection;
