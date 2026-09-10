"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

type Line = { text: string; outline?: boolean };

/**
 * Oversized heading whose lines slide up out of a mask, one after another.
 * Lines marked `outline` render as stroked type, as on the reference site.
 */
export function RevealLines({
  lines,
  as: Tag = "h2",
  className,
  delay = 0,
  onMount = false,
  tone = "dark",
}: {
  lines: Line[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  /** Animate immediately instead of waiting to scroll into view. */
  onMount?: boolean;
  tone?: "dark" | "light";
}) {
  const reduce = useReducedMotion();
  const shown = { y: "0%" };

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="-mb-[0.08em] block overflow-hidden pb-[0.08em]">
          <motion.span
            className={cn(
              "block",
              line.outline && (tone === "light" ? "text-outline-light" : "text-outline")
            )}
            initial={reduce ? false : { y: "110%" }}
            animate={onMount ? shown : undefined}
            whileInView={onMount ? undefined : shown}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 1.05, ease: EASE, delay: delay + i * 0.1 }}
          >
            {line.text}
          </motion.span>
          {/* Keeps the words separated in the text content for crawlers. */}
          {i < lines.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}
