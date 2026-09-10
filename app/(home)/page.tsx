import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { HomeSections } from "@/components/home/HomeSections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — Full-Stack & AI Engineer in Kolkata, India` },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeSections />
    </>
  );
}
