"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ExternalLink,
  Globe,
  Zap,
  Brain,
  Layers,
  TrendingUp,
  MessageSquare,
  ShoppingCart,
} from "lucide-react";
import Title from "./Title";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { label: "Web Development", Icon: Globe },
  { label: "AI Applications", Icon: Brain },
  { label: "Automation", Icon: Zap },
  { label: "UI/UX Design", Icon: Layers },
  { label: "E-commerce", Icon: ShoppingCart },
  { label: "Digital Marketing", Icon: TrendingUp },
  { label: "AI Chatbots", Icon: MessageSquare },
];

function MyVenture() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const cardWrapRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const desc = descRef.current;
    const card = cardWrapRef.current;
    const chips = chipsRef.current;

    if (!section || !heading || !desc || !card || !chips) return;

    // Set initial states
    gsap.set(heading, { opacity: 0, x: -40 });
    gsap.set(desc, { opacity: 0, y: 24 });
    gsap.set(card, { opacity: 0, y: 50, scale: 0.96 });
    const chipEls = chips.querySelectorAll("[data-chip]");
    gsap.set(chipEls, { opacity: 0, scale: 0.85, y: 12 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.to(heading, { opacity: 1, x: 0, duration: 0.75 });
      tl.to(desc, { opacity: 1, y: 0, duration: 0.65 }, "-=0.4");
      tl.to(
        chipEls,
        { opacity: 1, scale: 1, y: 0, duration: 0.45, stagger: 0.07 },
        "-=0.3",
      );
      tl.to(card, { opacity: 1, y: 0, scale: 1, duration: 0.8 }, "-=0.55");

      // Ambient float after entrance
      gsap.to(card, {
        y: -6,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.4,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="venture"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      aria-label="My Venture - Vriddhi Tech"
    >
      {/* ── Background atmosphere ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-green-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col gap-8">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-semibold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                My Venture
              </span>
            </motion.div>

            {/* Main heading — animated by GSAP */}
            <div ref={headingRef}>
              <Title
                text="Building Something of My Own"
                className="flex flex-col -rotate-1"
              />
            </div>

            {/* Description — animated by GSAP */}
            <div ref={descRef} className="space-y-4">
              <p className="text-gray-300 text-base leading-relaxed max-w-md">
                <span className="text-white font-semibold">Vriddhi Tech</span>{" "}
                is my venture focused on building production-grade websites,
                AI-powered applications, intelligent automation, and digital
                experiences that help businesses grow.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                &ldquo;Vriddhi&rdquo; means growth &mdash; and that&apos;s
                exactly what we engineer. From immersive 3D web experiences to
                LLM-powered agents, every build is designed to scale.
              </p>
            </div>

            {/* Service chips — animated by GSAP */}
            <div ref={chipsRef} className="flex flex-wrap gap-2">
              {services.map(({ label, Icon }) => (
                <span
                  key={label}
                  data-chip
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-gray-400 text-xs font-medium hover:border-green-500/40 hover:text-green-400 hover:bg-green-500/10 transition-all duration-200"
                >
                  <Icon className="w-3 h-3" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>

            {/* Mobile CTA — hidden on lg */}
            <div className="lg:hidden">
              <a
                href="https://www.vriddhitech.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Explore Vriddhi Tech, opens in a new tab"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-sm hover:from-green-400 hover:to-emerald-500 transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Explore Vriddhi Tech
                <ExternalLink
                  className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* ── RIGHT: Venture Card ── */}
          <div ref={cardWrapRef}>
            <motion.a
              href="https://www.vriddhitech.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Vriddhi Tech website, opens in a new tab"
              className="block group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer"
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                boxShadow:
                  "0 4px 40px rgba(34,197,94,0.08), 0 1px 0 rgba(255,255,255,0.04) inset",
              }}
            >
              {/* Top gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-emerald-400 to-cyan-500 z-10" />

              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none z-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(34,197,94,0.08) 0%, transparent 70%)",
                }}
              />

              {/* Website preview image */}
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src="/vriddhi-preview.jpg"
                  alt="Vriddhi Tech website preview — AI-Powered Web Agency and Software Development"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                {/* Live badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-xs text-gray-300 font-medium">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                  </span>
                  Live
                </div>
              </div>

              {/* Card body */}
              <div className="relative z-10 p-6 space-y-4">
                {/* Branding row */}
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h2 className="text-xl font-black bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                      Vriddhi Tech
                    </h2>
                    <p className="text-xs text-gray-500 font-medium flex items-center gap-1">
                      <Globe className="w-3 h-3" aria-hidden="true" />
                      vriddhitech.com
                    </p>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.04] text-xs text-gray-400 font-mono">
                    vriddhitech.com
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  AI-powered web agency shipping production-grade websites, LLM
                  integrations, and intelligent automation &mdash; accelerated
                  by AI tooling.
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Footer row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-medium">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                      </span>
                      Co-Founder
                    </span>
                    <span className="text-xs text-gray-600">·</span>
                    <span className="text-xs text-gray-500">Est. 2026</span>
                  </div>

                  <motion.div
                    className="flex items-center gap-1.5 text-sm font-semibold text-green-400 group-hover:text-green-300 transition-colors duration-200"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Explore Vriddhi Tech</span>
                    <ExternalLink
                      className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyVenture;
