import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Cursor } from "@/components/site/Cursor";
import { PageTransition } from "@/components/site/PageTransition";
import { SocialRail } from "@/components/site/SocialRail";
import { JsonLd } from "@/components/ui/JsonLd";
import { education } from "@/lib/resume";
import { site } from "@/lib/site";

// Body copy: neutral and highly legible.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Display type: a variable grotesk whose width axis gives both the extended
// section headings and the tall, condensed hero lines.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["wdth"],
});

const title = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Akash Bag",
    "full-stack developer",
    "software engineer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "PostgreSQL",
    "AI engineer",
    "hire full-stack developer",
    "freelance web developer India",
    "Kolkata",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    images: [{ url: "/og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    creator: "@AkashBag19",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.name,
  url: site.url,
  image: `${site.url}${site.portrait}`,
  jobTitle: "Software Engineer",
  description: site.description,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressCountry: "IN" },
  alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Distributed systems",
    "Agentic AI",
  ],
  sameAs: site.socials.map((s) => s.href),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  publisher: { "@id": `${site.url}/#person` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${archivo.variable}`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <Nav />
        <SocialRail />
        <Cursor />
        <PageTransition />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={[personSchema, websiteSchema]} />
      </body>
    </html>
  );
}
