"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

/**
 * Counts the numeric part of a value like "500K+", "~40%" or "12,000+" up
 * from zero the first time it scrolls into view. Server HTML carries the
 * final value, so crawlers and no-JS readers see the real number.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState<number | null>(null);

  const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  const animatable = match !== null;
  const target = match ? parseFloat(match[2].replace(/,/g, "")) : 0;
  const decimals = match?.[2].split(".")[1]?.length ?? 0;
  const grouped = Boolean(match?.[2].includes(","));

  useEffect(() => {
    if (!animatable || reduce || !inView) return;
    const controls = animate(0, target, { duration: 1.6, ease: EASE, onUpdate: setCurrent });
    return () => controls.stop();
  }, [animatable, inView, reduce, target]);

  if (!match || current === null) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  const number = grouped
    ? current.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : current.toFixed(decimals);

  return (
    <span ref={ref} className={className}>
      {match[1]}
      {number}
      {match[3]}
    </span>
  );
}
