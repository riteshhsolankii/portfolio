import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import TechStack from "@/components/sections/tech-stack";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Blog from "@/components/sections/blog";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/layout/back-to-top";
import Seo from "@/components/seo";
import { SITE } from "@/lib/data";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  jobTitle: "Web Developer & React Developer",
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

export default function Home() {
  return (
    <>
      <Seo path="/" jsonLd={personJsonLd} />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
