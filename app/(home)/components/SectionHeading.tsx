"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Shared section header: small uppercase eyebrow, oversized display heading,
 * optional lede. Rises into place once on scroll.
 */
function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <motion.div
      className={cn(
        "flex flex-col gap-5",
        centered && "items-center text-center",
        className
      )}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-sun" aria-hidden="true" />
          {eyebrow}
        </span>
      )}

      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02] text-ink">
        {title}
      </h2>

      {lede && (
        <p
          className={cn(
            "max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg",
            centered && "mx-auto"
          )}
        >
          {lede}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
