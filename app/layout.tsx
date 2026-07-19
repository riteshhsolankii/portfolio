import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SITE } from "@/lib/data";
import SmoothScroll from "@/components/providers/smooth-scroll";
import CustomCursor from "@/components/effects/custom-cursor";
import MouseGlow from "@/components/effects/mouse-glow";
import LoadingScreen from "@/components/layout/loading-screen";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Frontend & Full Stack Developer | AI Automation Engineer`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.subheadline,
  keywords: [
    "Frontend Developer",
    "Full Stack Developer",
    "AI Automation Engineer",
    "Next.js Developer",
    "React Developer",
    "Ritesh Solanki",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Frontend & Full Stack Developer`,
    description: SITE.subheadline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Frontend & Full Stack Developer`,
    description: SITE.subheadline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  jobTitle: "Full Stack Developer & AI Automation Engineer",
  knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "AI Automation"],
  sameAs: [SITE.socials.github, SITE.socials.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body bg-background text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LoadingScreen />
        <SmoothScroll>{children}</SmoothScroll>
        <MouseGlow />
        <CustomCursor />
      </body>
    </html>
  );
}
