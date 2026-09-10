export const site = {
  name: "Akash Bag",
  url: "https://portfolio-aceternity-ui.vercel.app",
  role: "Full-Stack & AI Engineer",
  description:
    "Akash Bag is a full-stack & AI software engineer in Kolkata, India. React, Next.js, Node.js and PostgreSQL. Available for full-time roles and freelance projects.",
  email: "bagakash11@gmail.com",
  location: "Kolkata, India",
  resumePdf: "/resume.pdf",
  portrait: "/akash-portrait.jpg",
  socials: [
    { label: "GitHub", href: "https://github.com/Akashbag2001" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/akash-bag/" },
    { label: "X", href: "https://x.com/AkashBag19" },
  ],
} as const;

export const nav = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/hire", label: "Hire me" },
] as const;
