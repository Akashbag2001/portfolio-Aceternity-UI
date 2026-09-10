"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUp } from "lucide-react";

const socials = [
  {
    link: "https://www.linkedin.com/in/akash-bag/",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    link: "https://github.com/Akashbag2001",
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    link: "https://x.com/AkashBag19?t=FQuCXF_KdXc5pmeynzLvIg&s=09",
    label: "X",
    Icon: FaXTwitter,
  },
];

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Oversized wordmark */}
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-ink/10 pb-12">
          <div>
            <p className="font-display text-[clamp(2.5rem,9vw,6rem)] font-bold leading-none tracking-[-0.05em] text-ink">
              Akash Bag
              <span className="text-sun">.</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              Full-stack engineer building fast, scalable web apps and AI
              products. Currently available for new projects.
            </p>
          </div>

          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
          >
            Back to top
            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse items-center justify-between gap-8 pt-10 md:flex-row">
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} Akash Bag — built with Next.js.
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-2">
            {socials.map(({ link, label, Icon }) => (
              <Link
                href={link}
                key={label}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-sun"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
