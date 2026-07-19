import dynamic from "next/dynamic";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";

// Below-the-fold sections are code-split and lazy-loaded for a lean first paint.
const About = dynamic(() => import("@/components/sections/about"));
const TechStack = dynamic(() => import("@/components/sections/tech-stack"));
const Projects = dynamic(() => import("@/components/sections/projects"));
const Experience = dynamic(() => import("@/components/sections/experience"));
const Blog = dynamic(() => import("@/components/sections/blog"));
const Contact = dynamic(() => import("@/components/sections/contact"));
const Footer = dynamic(() => import("@/components/layout/footer"));

export default function Home() {
  return (
    <>
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
    </>
  );
}
