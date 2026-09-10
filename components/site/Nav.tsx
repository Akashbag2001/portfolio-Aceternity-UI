"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";
import { nav, site } from "@/lib/site";
import { PillLink } from "@/components/ui/PillLink";

const mobileLinks = [{ href: "/", label: "Home" }, ...nav, { href: "/contact", label: "Contact" }];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Tuck the bar away while scrolling down, bring it back on the way up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > previous && y > 280);
  });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <motion.header
        className="no-print fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <div
          className={cn(
            "border-b transition-colors duration-300",
            scrolled && !open ? "border-ink/10 bg-paper/80 backdrop-blur-xl" : "border-transparent"
          )}
        >
          <nav aria-label="Main" className="container-x flex items-center justify-between py-4">
            <Link
              href="/"
              aria-label={`${site.name}, home`}
              className={cn(
                "font-display text-2xl font-extrabold tracking-[-0.04em] transition-colors duration-300",
                open ? "text-paper" : "text-ink"
              )}
            >
              Akash<span className="text-flame">.</span>
            </Link>

            <ul className="hidden items-center md:flex">
              {nav.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative block px-4 py-2 text-sm font-medium transition-colors duration-200",
                        active ? "text-ink" : "text-ink/55 hover:text-ink"
                      )}
                    >
                      {link.label}
                      {active && (
                        <motion.span
                          layoutId="nav-dot"
                          className="absolute inset-x-0 -bottom-0.5 mx-auto h-1.5 w-1.5 rounded-full bg-flame"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden md:block">
              <PillLink href="/contact" className="px-5 py-2.5">
                {"Let's talk"}
              </PillLink>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={cn(
                "relative flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 md:hidden",
                open ? "bg-paper text-ink" : "bg-ink text-paper"
              )}
            >
              <span
                className={cn(
                  "absolute h-[2px] w-5 rounded-full bg-current transition-transform duration-300",
                  open ? "rotate-45" : "-translate-y-[4px]"
                )}
              />
              <span
                className={cn(
                  "absolute h-[2px] w-5 rounded-full bg-current transition-transform duration-300",
                  open ? "-rotate-45" : "translate-y-[4px]"
                )}
              />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Lives outside the header: its transform would otherwise trap this fixed layer. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="no-print fixed inset-0 z-40 bg-ink text-paper md:hidden"
            initial={{ clipPath: "circle(0% at 90% 40px)" }}
            animate={{ clipPath: "circle(150% at 90% 40px)" }}
            exit={{ clipPath: "circle(0% at 90% 40px)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <nav aria-label="Mobile" className="container-x flex h-full flex-col justify-between pb-10 pt-28">
              <ul>
                {mobileLinks.map((link, i) => (
                  <li key={link.href} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{ delay: 0.15 + i * 0.06, duration: 0.7, ease: EASE }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block py-1 font-display text-[2.6rem] font-extrabold leading-[1.1] tracking-[-0.03em]",
                          isActive(link.href) && "text-flame"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
              <div className="space-y-4">
                <a href={`mailto:${site.email}`} className="block text-lg font-semibold">
                  {site.email}
                </a>
                <ul className="flex gap-6 text-sm text-paper/60">
                  {site.socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-flame"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
