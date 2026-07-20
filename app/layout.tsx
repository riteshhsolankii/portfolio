import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { SITE } from "@/lib/data";
import SmoothScroll from "@/components/providers/smooth-scroll";
import "./globals.css";

const SEO_TITLE = `${SITE.name} — Web & React Developer | WordPress & Elementor Expert`;
const SEO_DESCRIPTION =
  "Ritesh Solanki is a web & React developer in Indore, India, building fast, responsive, conversion-focused websites with WordPress, Elementor, Oxygen, WooCommerce, React and Next.js.";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SEO_TITLE,
    template: `%s — ${SITE.name}`,
  },
  description: SEO_DESCRIPTION,
  applicationName: `${SITE.name} Portfolio`,
  keywords: [
    "Ritesh Solanki",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "WordPress Developer",
    "Elementor Expert",
    "Oxygen Builder",
    "WooCommerce Developer",
    "Web Developer Indore",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  jobTitle: "Web Developer & React Developer",
  description: SEO_DESCRIPTION,
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "WordPress",
    "Elementor",
    "Oxygen Builder",
    "WooCommerce",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indore",
    addressCountry: "IN",
  },
  worksFor: { "@type": "Organization", name: "Opsio Cloud Pvt Ltd" },
  sameAs: [SITE.socials.github, SITE.socials.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-body bg-background text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
