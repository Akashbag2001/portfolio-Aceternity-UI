import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://portfolio-aceternity-ui.vercel.app/"),

	title: {
		template: "%s | Akash Bag ",
		default: "Akash Bag ",
	},
	authors: {
		name: "Akash Bag ",
	},

	description:
		"I'm a Full stack developer and a problem solver!",
	openGraph: {
		title: "Akash Bag ",
		description:
			"I'm a Full stack developer and a problem solver!",
		url: "https://portfolio-aceternity-ui.vercel.app/",
		siteName: "Akash Bag ",
		images: "/og.png",
		type: "website",
	},
	keywords: ["Portfolio", "Web development", "Next.js", "Aceternity" ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
