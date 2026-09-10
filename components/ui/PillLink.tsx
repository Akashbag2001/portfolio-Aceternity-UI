import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "flame" | "light";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-paper hover:bg-flame hover:text-ink",
  outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  flame: "bg-flame text-ink hover:bg-paper",
  light: "border border-paper/25 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

/**
 * The site's one button shape: a pill whose label rolls on hover and whose
 * arrow swings to point forward. Internal paths use next/link; everything
 * else (mailto, files, external sites) is a plain anchor.
 */
export function PillLink({
  href,
  children,
  variant = "solid",
  className,
  arrow = true,
  download,
  newTab,
}: {
  href: string;
  children: string;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  download?: boolean;
  newTab?: boolean;
}) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
    variants[variant],
    className
  );

  const content = (
    <>
      <span className="roll">
        <span data-text={children}>{children}</span>
      </span>
      {arrow && (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 shrink-0 transition-transform duration-500 ease-out-expo group-hover:rotate-45"
        />
      )}
    </>
  );

  const internal = href.startsWith("/") && !download && !/\.[a-z0-9]+$/i.test(href);

  if (internal) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      download={download || undefined}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}
