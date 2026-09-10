"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";
import CircledText from "./ui/circled-text";
import PillButton from "./ui/pill-button";
import { ArrowDown } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stats = [
  { value: "2+", label: "Years shipping" },
  { value: "4", label: "Companies" },
  { value: "10+", label: "Projects delivered" },
  { value: "24h", label: "Reply time" },
];

function HeroSection() {
  const roles = [
    "Full-Stack Developer",
    "Problem Solver",
    "TypeScript Specialist",
    "AI Practitioner",
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Soft yellow wash behind the headline */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] max-w-[140vw] -translate-x-1/2 rounded-full bg-sun/25 blur-[130px]"
        aria-hidden="true"
      />

      <motion.div
        className="mx-auto max-w-6xl px-6 pb-24 pt-16 sm:pt-20 lg:pb-32 lg:pt-24"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* ── Split: copy left, portrait right ── */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Portrait — first on mobile, right column on desktop */}
          <motion.div
            variants={item}
            className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:order-2 lg:max-w-none"
          >
            {/* Decorative yellow disc, offset behind */}
            <div
              className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-full bg-sun sm:translate-x-6 sm:translate-y-6"
              aria-hidden="true"
            />
            {/* Outline ring, offset the other way */}
            <div
              className="absolute inset-0 -z-10 -translate-x-3 -translate-y-3 rounded-full border-2 border-ink/15 sm:-translate-x-5 sm:-translate-y-5"
              aria-hidden="true"
            />

            {/*
              The source photo is a white-ringed circle on a black square.
              Clipping to a circle and scaling past 1.093 crops out both the
              black corners and that stock white ring, so the site's own ring
              is the only edge that shows.
            */}
            <div className="relative aspect-square overflow-hidden rounded-full border-[3px] border-ink bg-ink/5">
              <Image
                src="/akash-portrait.jpg"
                alt="Akash Bag"
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 460px"
                className="scale-[1.18] object-cover"
              />
            </div>
          </motion.div>

          {/* Copy */}
          <div className="flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
            {/* Availability */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-ink/12 bg-paper-alt px-4 py-2 text-xs font-medium text-ink-muted shadow-[0_1px_2px_rgba(17,17,17,0.04)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sun opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sun" />
                </span>
                Available for new projects
              </span>
            </motion.div>

            {/* Role line.
                FlipWords renders a <div> and goes position:absolute on exit, so
                it lives in a relative wrapper (not a <p>) to keep the outgoing
                word anchored here rather than to the section. */}
            <motion.div
              variants={item}
              className="mt-7 flex flex-wrap items-center justify-center gap-x-1 text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted lg:justify-start"
            >
              <span>Software Engineer &amp;</span>
              <span className="relative inline-flex">
                <FlipWords
                  words={roles}
                  className="text-ink px-1 uppercase tracking-[0.16em]"
                />
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="mt-4 text-[clamp(2.25rem,5.4vw,4rem)] font-bold leading-[1.0] text-ink"
            >
              Fast, scalable web apps and AI products,{" "}
              <CircledText>built to ship</CircledText>.
            </motion.h1>

            {/* Lede */}
            <motion.p
              variants={item}
              className="mt-7 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg"
            >
              I&apos;m Akash — a full-stack engineer who turns ambitious ideas
              into production software. Clean architecture, measurable
              performance, and interfaces people actually enjoy using.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              <PillButton href="#contact" variant="solid" className="justify-center px-8 py-4">
                Let&apos;s start a project
              </PillButton>
              <PillButton
                href="#work"
                variant="outline"
                className="justify-center px-8 py-4"
                showArrow={false}
              >
                See my work
              </PillButton>
            </motion.div>
          </div>
        </div>

        {/* Stat row */}
        <motion.dl
          variants={item}
          className="mt-20 grid grid-cols-2 gap-y-8 border-t border-ink/10 pt-10 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 sm:border-r sm:border-ink/10 sm:last:border-r-0"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
                {stat.value}
              </dd>
              <p className="text-xs uppercase tracking-[0.12em] text-ink-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.dl>

        {/* Scroll cue */}
        <div className="flex justify-center">
          <motion.a
            href="#services"
            className="mt-14 inline-flex flex-col items-center gap-2 text-ink-muted transition-colors hover:text-ink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            aria-label="Scroll to services"
          >
            <span className="text-[11px] uppercase tracking-[0.2em]">
              Scroll
            </span>
            <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
