"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const CLOSE_MS = 700;

/**
 * The "page out" half of the transition: on an internal link click, two
 * slanted panels close over the page, then we navigate. The new page's
 * template (app/template.tsx) mounts already covered and splits them open.
 */
export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [leaving, setLeaving] = useState(false);

  useEffect(() => setLeaving(false), [pathname]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = e.target instanceof Element ? e.target.closest("a") : null;
      if (!anchor || anchor.hasAttribute("download")) return;
      if (anchor.target && anchor.target !== "_self") return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return; // same page, hash links
      if (/\.[a-z0-9]+$/i.test(url.pathname)) return; // files such as resume.pdf

      // Capture phase: stop next/link from navigating immediately.
      e.preventDefault();
      e.stopPropagation();
      const destination = url.pathname + url.search + url.hash;
      router.prefetch(destination);
      setLeaving(true);
      window.setTimeout(() => router.push(destination), CLOSE_MS);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return (
    <div aria-hidden="true" className={cn("page-leave no-print", leaving && "is-active")}>
      <span className="page-leave__panel page-leave__panel--left" />
      <span className="page-leave__panel page-leave__panel--right" />
    </div>
  );
}
