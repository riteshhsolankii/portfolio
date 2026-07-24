import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { PROJECTS } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/effects/reveal";
import ProjectCard from "@/components/projects/project-card";

export default function Projects() {
  const projects = PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          subtitle="Real client work shipped to production — fast, responsive and built to convert."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 font-heading text-sm font-medium text-foreground backdrop-blur-xl transition-all duration-300 hover:border-primary/60 hover:bg-primary/10 hover:shadow-glow"
          >
            View all projects
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
