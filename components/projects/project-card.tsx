import { FiArrowUpRight } from "react-icons/fi";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-glass backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-xl font-bold text-foreground">
            {project.title}
          </h3>
          <FiArrowUpRight className="mt-1 shrink-0 text-accent" size={20} />
        </div>
        <p className="text-sm font-medium text-accent">{project.tagline}</p>
        <p className="text-sm leading-relaxed text-foreground/60">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
