"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";
import { PillLink } from "@/components/ui/PillLink";

/** Hero animations wait for the opening curtain to start clearing. */
const START = 0.55;
const companies = ["Inwork Global", "IEM-UEM Group", "IEMA R&D"];

const lineClass =
  "hero-type block overflow-hidden whitespace-nowrap pb-[0.04em] text-center text-[clamp(3rem,16vw,7rem)] leading-[0.86] md:text-[clamp(3rem,11vw,10.5rem)]";

type From = { x?: string | number; y?: string | number; scale?: number };

/**
 * Built like the reference hero: the headline exists twice. The base copy
 * (solid line, outlined line) sits *under* the cut-out portrait; a copy
 * stroked in white sits *over* it, so the letters keep drawing across the
 * photo. Hovering the outlined line fills it and swaps which line is traced
 * over the photo. The portrait drifts with the mouse.
 */
export function Hero() {
  const reduce = useReducedMotion();
  const [secondActive, setSecondActive] = useState(false);
  const pointerX = useMotionValue(0);
  const photoX = useSpring(pointerX, { stiffness: 60, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return;
    // ±3vw across the width of the window, as on the reference site.
    const move = (e: PointerEvent) => pointerX.set((e.clientX - window.innerWidth / 2) * 0.06);
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [pointerX, reduce]);

  const slide = (from: string, delay: number, fade = false) =>
    reduce
      ? { initial: false as const }
      : {
          initial: fade ? { x: from, opacity: 0 } : { x: from },
          animate: fade ? { x: "0%", opacity: 1 } : { x: "0%" },
          transition: { x: { duration: 2, ease: EASE, delay }, opacity: { duration: 0.8, delay } },
        };

  const appear = (delay: number, from: From) =>
    reduce
      ? { initial: false as const }
      : {
          initial: { opacity: 0, ...from },
          animate: { opacity: 1, x: 0, y: 0, scale: 1 },
          transition: { duration: 1.2, ease: EASE, delay },
        };

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="container-x relative flex flex-col items-center pb-10 md:pb-16">
        <motion.p
          {...appear(START, { y: -24 })}
          className="relative z-[4] text-center text-xl font-light tracking-[-0.01em] text-ink/85 sm:text-3xl"
        >
          <span aria-hidden="true" className="wave">
            👋
          </span>{" "}
          Hi, I&apos;m Akash Bag and I&apos;m a
        </motion.p>

        {/* ── Headline, in two stacked layers ── */}
        <div className="relative mt-3 grid w-full">
          <h1 className="relative z-[1] [grid-area:1/1]">
            <span className="sr-only">Akash Bag, </span>
            <span className={lineClass}>
              <motion.span className="block" {...slide("100%", START)}>
                <Link href="/projects" data-cursor="Work" className="inline-block">
                  Full-Stack
                </Link>
              </motion.span>
            </span>{" "}
            <span className={lineClass}>
              <motion.span className="block" {...slide("-120%", START, true)}>
                <Link
                  href="/about"
                  data-cursor="About"
                  onPointerEnter={() => setSecondActive(true)}
                  onPointerLeave={() => setSecondActive(false)}
                  className={cn("text-outline inline-block transition-colors duration-500", secondActive && "text-ink")}
                >
                  &amp; AI Engineer
                </Link>
              </motion.span>
            </span>
          </h1>

          <div aria-hidden="true" className="pointer-events-none relative z-[5] [grid-area:1/1]">
            <span className={lineClass}>
              <motion.span
                className={cn("text-outline-light block transition-opacity duration-500", secondActive && "opacity-0")}
                {...slide("100%", START)}
              >
                Full-Stack
              </motion.span>
            </span>
            <span className={lineClass}>
              <motion.span
                className={cn(
                  "text-outline-light block opacity-0 transition-opacity duration-500",
                  secondActive && "opacity-100"
                )}
                {...slide("-120%", START)}
              >
                &amp; AI Engineer
              </motion.span>
            </span>
          </div>
        </div>

        {/* ── Location and previous companies, flanking the portrait ── */}
        <div className="relative z-[4] mt-6 flex w-full flex-col items-center gap-5 md:flex-row md:justify-between">
          <span className="block overflow-hidden">
            <motion.p
              {...appear(START + 0.3, { x: "-100%" })}
              className="text-2xl font-light tracking-[-0.01em] text-ink/80 sm:text-3xl"
            >
              Based in Kolkata, India.
            </motion.p>
          </span>
          <div className="flex flex-col items-center gap-2 md:max-w-[20rem] md:items-end">
            <motion.p
              {...appear(START + 0.5, { y: 8 })}
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/40"
            >
              Previously at
            </motion.p>
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 md:justify-end">
              {companies.map((company, i) => (
                <motion.li
                  key={company}
                  {...appear(START + 0.6 + i * 0.12, { scale: 0.2 })}
                  className="font-display text-sm font-extrabold uppercase tracking-[0.04em] text-ink/45"
                >
                  {company}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Cut-out portrait: in flow on mobile, anchored to the bottom from md up ── */}
        <div className="pointer-events-none relative z-[3] mt-4 flex w-full justify-center md:absolute md:inset-x-0 md:bottom-0 md:mt-0">
          <motion.div
            style={{ x: photoX }}
            className="relative w-[min(82%,22rem)] md:w-[min(38%,30rem)]"
            initial={reduce ? false : { opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: EASE, delay: START + 0.15 }}
          >
            <Image
              src="/akash-cutout.png"
              alt="Portrait of Akash Bag"
              width={729}
              height={801}
              priority
              sizes="(min-width: 768px) 38vw, 82vw"
              className="hero-photo h-auto w-full"
            />
          </motion.div>
        </div>

        <motion.div
          {...appear(START + 0.8, { y: 16 })}
          className="relative z-[4] -mt-14 flex flex-col items-center gap-3 sm:flex-row md:mt-24"
        >
          <PillLink href="/hire#teams" arrow={false} className="rounded-md border-2 border-ink px-6 py-3.5">
            Hiring for a role?
          </PillLink>
          <PillLink
            href="/hire#projects"
            variant="outline"
            arrow={false}
            className="rounded-md border-2 border-ink bg-paper px-6 py-3.5 hover:border-ink hover:bg-flame hover:text-ink"
          >
            Need something built?
          </PillLink>
        </motion.div>
      </div>
    </section>
  );
}
