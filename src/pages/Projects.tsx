import { Link } from "react-router-dom";
import { PROJECTS } from "@/lib/data";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/layout/back-to-top";
import Reveal from "@/components/effects/reveal";
import ProjectCard from "@/components/projects/project-card";
import Seo from "@/components/seo";

export default function Projects() {
  return (
    <>
      <Seo
        title="Projects"
        description="Selected client work by Ritesh Solanki — fast, responsive, conversion-focused websites built with WordPress, Elementor, Oxygen, WooCommerce, React and Next.js."
        path="/projects"
      />
      <Navbar />
      <main id="main" className="section-padding pt-28 md:pt-32">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="mb-12 max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent backdrop-blur-xl">
              Projects
            </span>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Selected work
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Real client work shipped to production — fast, responsive and
              built to convert.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.title} delay={(i % 3) * 0.1}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start gap-4 rounded-3xl border border-border bg-card p-8 shadow-glass backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">
                Have a project in mind?
              </h2>
              <p className="mt-1 text-sm text-foreground/60">
                Let&apos;s build something fast, beautiful and built to convert.
              </p>
            </div>
            <Link
              to="/#contact"
              className="shrink-0 rounded-full bg-accent px-6 py-3 font-heading text-sm font-semibold text-accent-foreground shadow-glow-accent transition hover:brightness-110"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
