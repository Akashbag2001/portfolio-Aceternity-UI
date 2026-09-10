import type { Metadata } from "next";
import { site } from "./site";

/**
 * Per-page metadata. Next replaces (rather than merges) a parent's
 * openGraph/twitter objects, so every page has to restate them — and every
 * page needs its own canonical, otherwise it inherits the home page's.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = "/og.png",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
