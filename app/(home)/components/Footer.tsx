"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

function Footer() {
  const socials = [
    { link: "https://www.linkedin.com/in/akash-bag/", label: "LinkedIn", Icon: FaLinkedin },
    { link: "https://github.com/Akashbag2001", label: "Github", Icon: FaGithub },
    { link: "https://x.com/AkashBag19?t=FQuCXF_KdXc5pmeynzLvIg&s=09", label: "X", Icon: FaXTwitter },
  ];

  return (
    <footer className="relative mt-8 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-black text-xl">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Akash</span>
            <span className="text-white">.dev</span>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Akash Bag. Crafted with ❤️ &amp; Next.js
          </p>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map((social, i) => {
              const Icon = social.Icon;
              return (
                <Link href={social.link} key={i} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
