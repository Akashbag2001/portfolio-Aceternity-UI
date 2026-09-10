"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionHeading from "./SectionHeading";
import CircledText from "./ui/circled-text";
import PillButton from "./ui/pill-button";
import { Check } from "lucide-react";

/* ────────────────────────────────────────────────────────────
   Abstract visuals — drawn, not photographed, so the section
   stays honest until real case-study imagery exists.
   ──────────────────────────────────────────────────────────── */

function BrowserVisual() {
  return (
    <div className="w-full rounded-2xl border border-ink/10 bg-paper-alt p-4 shadow-[0_20px_60px_-30px_rgba(17,17,17,0.35)]">
      {/* Chrome */}
      <div className="mb-4 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-sun" />
        <div className="ml-3 h-5 flex-1 rounded-full bg-ink/[0.05]" />
      </div>
      {/* Skeleton page */}
      <div className="space-y-3">
        <div className="h-8 w-3/5 rounded-md bg-ink/85" />
        <div className="h-3 w-full rounded-md bg-ink/10" />
        <div className="h-3 w-4/5 rounded-md bg-ink/10" />
        <div className="flex gap-3 pt-2">
          <div className="h-9 w-32 rounded-full bg-sun" />
          <div className="h-9 w-24 rounded-full border border-ink/15" />
        </div>
        <div className="grid grid-cols-3 gap-3 pt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-xl border border-ink/10 bg-ink/[0.03]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function NeuralVisual() {
  const nodes = [
    { cx: 40, cy: 60 },
    { cx: 40, cy: 140 },
    { cx: 150, cy: 40 },
    { cx: 150, cy: 100 },
    { cx: 150, cy: 160 },
    { cx: 260, cy: 100 },
  ];
  const edges = [
    [0, 2],
    [0, 3],
    [1, 3],
    [1, 4],
    [2, 5],
    [3, 5],
    [4, 5],
  ];

  return (
    <div className="w-full rounded-2xl border border-ink/10 bg-paper-alt p-6 shadow-[0_20px_60px_-30px_rgba(17,17,17,0.35)]">
      <svg viewBox="0 0 300 200" className="w-full" role="img" aria-label="Neural network diagram">
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            stroke="currentColor"
            className="text-ink/20"
            strokeWidth={1.5}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 * i }}
          />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.cx}
            cy={n.cy}
            r={i === 5 ? 16 : 11}
            className={i === 5 ? "fill-sun" : "fill-ink"}
            stroke="currentColor"
            strokeWidth={0}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.06 * i, type: "spring" }}
            style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
          />
        ))}
      </svg>
      <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4 text-xs text-ink-muted">
        <span className="font-mono">prompt → context → tools</span>
        <span className="rounded-full bg-sun px-2.5 py-1 font-semibold text-ink">
          response
        </span>
      </div>
    </div>
  );
}

function PipelineVisual() {
  const steps = ["Trigger", "Enrich", "Decide", "Deliver"];

  return (
    <div className="w-full rounded-2xl border border-ink/10 bg-paper-alt p-6 shadow-[0_20px_60px_-30px_rgba(17,17,17,0.35)]">
      <div className="flex flex-col gap-3">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 * i }}
          >
            <span
              className={cn(
                "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-display text-sm font-bold",
                i === steps.length - 1
                  ? "bg-sun text-ink"
                  : "bg-ink text-paper"
              )}
            >
              {i + 1}
            </span>
            <div className="flex-1 rounded-full border border-ink/10 bg-ink/[0.03] px-5 py-3">
              <span className="text-sm font-semibold text-ink">{step}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-5 border-t border-ink/10 pt-4 text-center text-xs text-ink-muted">
        Runs on a schedule. No one has to remember to press anything.
      </p>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────── */

const services = [
  {
    id: "web",
    label: "Web Development",
    heading: (
      <>
        A site built for you — fast, scalable and{" "}
        <span className="mark-sun">easy to run</span>
      </>
    ),
    body: "No dragged-in template. Every build starts from your actual requirements and ships as typed, tested Next.js you or your team can own afterwards.",
    points: [
      "Next.js & TypeScript, end to end",
      "Design systems in Tailwind, not one-off CSS",
      "Core Web Vitals treated as a requirement",
      "Handover docs so nothing is locked in my head",
    ],
    Visual: BrowserVisual,
  },
  {
    id: "ai",
    label: "AI Applications",
    heading: (
      <>
        LLM products that do real work, <span className="mark-sun">not demos</span>
      </>
    ),
    body: "Retrieval, agents and tool-calling wired into the systems you already run — with evaluation and guardrails so behaviour stays predictable in production.",
    points: [
      "RAG pipelines over your own data",
      "Agentic workflows with real tool access",
      "Streaming interfaces that feel instant",
      "Cost and latency budgets tracked from day one",
    ],
    Visual: NeuralVisual,
  },
  {
    id: "automation",
    label: "Automation",
    heading: (
      <>
        The manual work in your week, <span className="mark-sun">deleted</span>
      </>
    ),
    body: "The recurring copy-paste between tools, the weekly report someone assembles by hand, the data that never quite syncs — replaced with something that just runs.",
    points: [
      "Third-party API and webhook integrations",
      "Scheduled jobs with retries and alerting",
      "Database syncs across PostgreSQL & MongoDB",
      "Dashboards that update themselves",
    ],
    Visual: PipelineVisual,
  },
];

function Services() {
  return (
    <section id="services" className="border-t border-ink/10 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What I do"
          title={
            <>
              Three ways I help teams <CircledText>ship faster</CircledText>
            </>
          }
          lede="From the first line of schema to the deploy that puts it in front of users — I handle the whole path."
          align="center"
          className="mx-auto max-w-3xl"
        />

        <div className="mt-20 flex flex-col gap-24 lg:gap-32">
          {services.map((service, i) => {
            const { Visual } = service;
            const flipped = i % 2 === 1;

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20"
              >
                {/* Copy */}
                <motion.div
                  className={cn("flex flex-col gap-6", flipped && "lg:order-2")}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display text-sm font-bold text-ink-muted">
                      0{i + 1}
                    </span>
                    <span className="h-px w-10 bg-ink/20" />
                    <span className="eyebrow">{service.label}</span>
                  </div>

                  <h3 className="text-[clamp(1.75rem,3.6vw,2.75rem)] font-bold leading-[1.05] text-ink">
                    {service.heading}
                  </h3>

                  <p className="max-w-lg text-base leading-relaxed text-ink-muted">
                    {service.body}
                  </p>

                  <ul className="flex flex-col gap-3 pt-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-ink"
                      >
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-sun">
                          <Check className="h-3 w-3 text-ink" strokeWidth={3} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <PillButton href="#contact" variant="outline">
                      Talk about this
                    </PillButton>
                  </div>
                </motion.div>

                {/* Visual */}
                <motion.div
                  className={cn(flipped && "lg:order-1")}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Visual />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
