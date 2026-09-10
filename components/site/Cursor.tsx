"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Mode = "idle" | "link" | "label";

const follow = { stiffness: 500, damping: 40, mass: 0.4 };
const sizes: Record<Mode, number> = { idle: 10, link: 40, label: 84 };

/**
 * Reference-style cursor: a small dot that trails the pointer, opens into a
 * translucent 40px ring over links, and becomes a bordered disc with a label
 * over anything marked `data-cursor="Label"`. Difference blending keeps the
 * dot visible on light and dark sections alike. Mouse-only; skipped for
 * reduced motion. The system cursor stays visible.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<Mode>("idle");
  const [label, setLabel] = useState("");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, follow);
  const springY = useSpring(y, follow);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduce) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e: PointerEvent) => {
      const el = e.target instanceof Element ? e.target : null;
      const labelled = el?.closest("[data-cursor]");
      if (labelled) {
        setLabel(labelled.getAttribute("data-cursor") ?? "");
        setMode("label");
        return;
      }
      setMode(el?.closest("a, button, summary, [role='button']") ? "link" : "idle");
    };
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over);
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className={cn("no-print pointer-events-none fixed left-0 top-0 z-[100]", mode !== "label" && "mix-blend-difference")}
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className={cn(
          "flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[10px] font-bold uppercase tracking-[0.14em] text-ink",
          mode === "label" && "border-[3px] border-ink"
        )}
        initial={false}
        animate={{
          width: sizes[mode],
          height: sizes[mode],
          opacity: visible ? (mode === "link" ? 0.5 : 1) : 0,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
      >
        <AnimatePresence>
          {mode === "label" && (
            <motion.span
              key={label}
              className="flex items-center gap-1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              {label}
              <ArrowUpRight className="h-3 w-3" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
