import Link from "next/link";
import { RevealLines } from "@/components/motion/RevealLines";
import { Magnetic } from "@/components/motion/Magnetic";
import { PillLink } from "@/components/ui/PillLink";
import { Marquee } from "@/components/ui/Marquee";
import { nav, site } from "@/lib/site";

const pages = [{ href: "/", label: "Home" }, ...nav, { href: "/contact", label: "Contact" }];

export function Footer() {
  return (
    <footer className="no-print relative overflow-hidden bg-ink text-paper">
      <Marquee
        className="bg-flame py-4 font-display text-lg font-extrabold uppercase text-ink sm:text-xl"
        items={["Open to full-time roles", "Taking on freelance projects", "Replies within 24 hours"]}
      />

      <div className="container-x pb-10 pt-24 sm:pt-32">
        <p className="eyebrow text-paper/50">What&apos;s next?</p>
        <RevealLines
          as="p"
          tone="light"
          className="mt-6 font-display text-[clamp(2.75rem,8vw,7rem)] font-extrabold leading-[0.92] tracking-[-0.04em]"
          lines={[{ text: "Let's build" }, { text: "something good.", outline: true }]}
        />

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <Magnetic>
            <PillLink href="/hire" variant="flame">
              Hire me
            </PillLink>
          </Magnetic>
          <Magnetic>
            <PillLink href={`mailto:${site.email}`} variant="light">
              {site.email}
            </PillLink>
          </Magnetic>
        </div>

        <div className="mt-24 grid gap-12 border-t border-paper/15 pt-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-extrabold tracking-[-0.04em]">
              Akash<span className="text-flame">.</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
              Full-stack & AI engineer in Kolkata, India. I build fast, dependable web products for
              teams and founders.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/40">Pages</p>
            <ul className="mt-5 space-y-2.5">
              {pages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-paper/75 transition-colors hover:text-flame">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/40">Elsewhere</p>
            <ul className="mt-5 space-y-2.5">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-paper/75 transition-colors hover:text-flame"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={site.resumePdf} download className="text-sm text-paper/75 transition-colors hover:text-flame">
                  Resume (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 text-xs text-paper/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Akash Bag. All rights reserved.</p>
          <p>Designed and built by me, with Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
