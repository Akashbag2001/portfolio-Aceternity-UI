import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type Variant = "solid" | "outline" | "sun";

const variants: Record<Variant, string> = {
  // Primary CTA — solid ink pill
  solid:
    "bg-ink text-paper hover:bg-ink/90 border border-ink",
  // Secondary — hairline outline that fills with ink on hover
  outline:
    "bg-transparent text-ink border border-ink/20 hover:border-ink hover:bg-ink hover:text-paper",
  // Accent — the yellow pill
  sun: "bg-sun text-ink border border-ink/10 hover:bg-ink hover:text-paper hover:border-ink",
};

/**
 * The one button shape used site-wide: a full-radius pill with a trailing
 * arrow that nudges out on hover.
 */
function PillButton({
  href,
  children,
  variant = "solid",
  className,
  showArrow = true,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold",
        "transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </a>
  );
}

export default PillButton;
