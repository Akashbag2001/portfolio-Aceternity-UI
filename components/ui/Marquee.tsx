import { cn } from "@/lib/utils";

/** An endlessly scrolling band of short phrases. */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const loop = [...items, ...items];
  const row = (
    <ul className="flex shrink-0 items-center">
      {loop.map((item, i) => (
        <li key={i} className="flex items-center gap-8 pr-8">
          <span>{item}</span>
          <span>✦</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <p className="sr-only">{items.join(". ")}</p>
      <div aria-hidden="true" className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </div>
  );
}
