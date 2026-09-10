"use client";

import { Fragment, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A paragraph that "lights up" word by word as it scrolls through the
 * viewport. Wrap a word in *asterisks* to set it in the accent colour.
 */
export function ScrollText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((raw, i) => {
        const accent = raw.startsWith("*");
        const word = raw.replace(/\*/g, "");
        return (
          <Fragment key={i}>
            <Word
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
              still={Boolean(reduce)}
              className={cn(accent && "text-flame")}
            >
              {word}
            </Word>{" "}
          </Fragment>
        );
      })}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
  still,
  className,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  still: boolean;
  className?: string;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span className={className} style={{ opacity: still ? 1 : opacity }}>
      {children}
    </motion.span>
  );
}
