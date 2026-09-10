"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/** A single line of oversized text that slides sideways as the page scrolls. */
export function ScrollSlide({
  children,
  from = "0%",
  to = "-30%",
  className,
}: {
  children: React.ReactNode;
  from?: string;
  to?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ x: reduce ? 0 : x }} className="w-max whitespace-nowrap">
        {children}
      </motion.div>
    </div>
  );
}
