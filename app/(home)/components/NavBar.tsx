"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function NavBar({ className }: { className?: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socials = [
    { link: "https://www.linkedin.com/in/akash-bag/", label: "LinkedIn", Icon: FaLinkedin },
    { link: "https://github.com/Akashbag2001", label: "Github", Icon: FaGithub },
    { link: "https://x.com/AkashBag19?t=FQuCXF_KdXc5pmeynzLvIg&s=09", label: "X", Icon: FaXTwitter },
  ];

  return (
    <motion.nav
      className={cn(
        "flex justify-between items-center py-4 px-4 rounded-2xl transition-all duration-500 sticky top-4 z-50",
        scrolled
          ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50"
          : "bg-transparent",
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.02 }}>
        <h1 className="text-xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Akash
          </span>
          <span className="text-white">.dev</span>
        </h1>
      </motion.div>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 group rounded-lg hover:bg-white/5"
          >
            {link.label}
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full group-hover:w-4/5 transition-all duration-300" />
          </a>
        ))}
      </div>

      {/* Socials */}
      <div className="flex gap-3 items-center">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label} target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}

export default NavBar;