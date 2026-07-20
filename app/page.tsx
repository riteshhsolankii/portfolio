import dynamic from "next/dynamic";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import BackToTop from "@/components/layout/back-to-top";

const About = dynamic(() => import("@/components/sections/about"));
const TechStack = dynamic(() => import("@/components/sections/tech-stack"));
const Projects = dynamic(() => import("@/components/sections/projects"));
const Experience = dynamic(() => import("@/components/sections/experience"));
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
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
