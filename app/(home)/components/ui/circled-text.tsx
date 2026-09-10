import React from "react";
import { cn } from "@/lib/utils";

/**
 * Wraps inline text in a hand-drawn yellow ellipse that draws itself in on
 * load — the signature accent of the reference design.
 *
 * `pathLength="1"` normalises the stroke so the CSS dash animation in
 * globals.css can work in unitless terms regardless of the rendered width.
 */
function CircledText({
  children,
  className,
  strokeClassName,
}: {
  children: React.ReactNode;
  className?: string;
  strokeClassName?: string;
}) {
  return (
    <span className={cn("relative inline-block whitespace-nowrap", className)}>
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute -inset-x-[6%] -inset-y-[18%] h-[136%] w-[112%] overflow-visible"
        viewBox="0 0 300 100"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          pathLength="1"
          className={cn("circle-draw stroke-sun", strokeClassName)}
          d="M148 12C90 9 30 22 15 46 3 68 45 88 120 92c80 4 165-10 171-38 5-24-56-42-131-44"
          strokeWidth={4}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}

export default CircledText;
