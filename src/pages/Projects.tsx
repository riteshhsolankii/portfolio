import { Link } from "react-router-dom";
import { PROJECTS } from "@/lib/data";
import Footer from "@/components/layout/footer";
import PageHero from "@/components/layout/page-hero";
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
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
        title="Selected work"
        subtitle="Real client work shipped to production — fast, responsive and built to convert."
        image={PROJECTS[0]?.image}
      />
      <main id="main" className="section-padding">
        <div className="mx-auto max-w-[1440px]">
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
    </>
  );
}
