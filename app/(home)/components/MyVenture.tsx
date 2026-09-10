"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import PillButton from "./ui/pill-button";
import CircledText from "./ui/circled-text";
import {
  ArrowUpRight,
  Globe,
  Zap,
  Brain,
  Layers,
  TrendingUp,
  MessageSquare,
  ShoppingCart,
} from "lucide-react";

const services = [
  { label: "Web Development", Icon: Globe },
  { label: "AI Applications", Icon: Brain },
  { label: "Automation", Icon: Zap },
  { label: "UI/UX Design", Icon: Layers },
  { label: "E-commerce", Icon: ShoppingCart },
  { label: "Digital Marketing", Icon: TrendingUp },
  { label: "AI Chatbots", Icon: MessageSquare },
];

const facts = [
  { label: "Role", value: "Co-Founder" },
  { label: "Founded", value: "2026" },
  { label: "Status", value: "Live" },
];

function MyVenture() {
  return (
    <section
      id="work"
      className="border-t border-ink/10 py-24 lg:py-32"
      aria-label="Selected work — Vriddhi Tech"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Building something <CircledText>of my own</CircledText>
            </>
          }
          lede="Vriddhi Tech is my venture — an AI-powered studio shipping production websites, LLM integrations and intelligent automation."
        />

        {/* ── Feature card ── */}
        <motion.a
          href="https://www.vriddhitech.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit the Vriddhi Tech website, opens in a new tab"
          className="group mt-16 block overflow-hidden rounded-[2rem] border border-ink/10 bg-paper-alt shadow-[0_30px_80px_-40px_rgba(17,17,17,0.4)] transition-shadow duration-500 hover:shadow-[0_40px_90px_-40px_rgba(17,17,17,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Preview */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink/5">
            <Image
              src="/VriddhriTechThump.png"
              alt="The Vriddhi Tech website — an AI-powered web agency and software studio"
              fill
              className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            <span className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-paper/90 px-3.5 py-1.5 text-xs font-semibold text-ink backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sun opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sun" />
              </span>
              Live
            </span>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-8 p-8 sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <h3 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-none text-ink">
                  Vriddhi Tech
                </h3>
                <p className="mt-2 font-mono text-sm text-ink-muted">
                  vriddhitech.com
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition-transform duration-300 group-hover:-translate-y-0.5">
                Visit site
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
              &ldquo;Vriddhi&rdquo; means growth. From immersive 3D web
              experiences to LLM-powered agents, every build is designed to
              scale — production-grade websites, AI integrations and
              intelligent automation that help businesses grow.
            </p>

            {/* Facts */}
            <dl className="grid grid-cols-3 gap-6 border-y border-ink/10 py-6">
              {facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1">
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                    {fact.label}
                  </dt>
                  <dd className="font-display text-lg font-bold text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Capability chips */}
            <div className="flex flex-wrap gap-2">
              {services.map(({ label, Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/12 px-3.5 py-1.5 text-xs font-medium text-ink-muted transition-colors duration-200 hover:border-ink/30 hover:bg-sun hover:text-ink"
                >
                  <Icon className="h-3 w-3" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </motion.a>

        {/* More work teaser */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-5 rounded-[2rem] border border-dashed border-ink/20 px-8 py-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="max-w-md text-base text-ink-muted">
            More case studies are being written up. In the meantime, the code is
            all public.
          </p>
          <PillButton
            href="https://github.com/Akashbag2001"
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse the GitHub
          </PillButton>
        </motion.div>
      </div>
    </section>
  );
}

export default MyVenture;
