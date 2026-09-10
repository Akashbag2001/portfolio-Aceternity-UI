import { site } from "@/lib/site";

/**
 * Vertical social links pinned bottom-left on wide screens. Difference
 * blending keeps them legible over both the light page and the dark footer.
 */
export function SocialRail() {
  return (
    <div className="no-print fixed bottom-10 left-5 z-40 hidden mix-blend-difference xl:block">
      <ul className="flex flex-col items-center gap-6 text-white">
        {site.socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rotate-180 text-[11px] font-semibold uppercase tracking-[0.25em] opacity-60 transition-opacity [writing-mode:vertical-rl] hover:opacity-100"
            >
              {s.label}
            </a>
          </li>
        ))}
        <li aria-hidden="true" className="h-14 w-px bg-white/40" />
      </ul>
    </div>
  );
}
