"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiFileText,
  FiTrendingUp,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { PROJECTS, type Project } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

/**
 * Code-generated project artwork — a stylized product mockup rendered
 * with gradients and skeleton UI, so no stock/placeholder images are needed.
 * Swap for a real screenshot with next/image when you have one.
 */
function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="relative h-full min-h-[260px] overflow-hidden rounded-xl border border-border lg:min-h-0">
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-25", project.gradient)} />
      <div className="absolute inset-0 bg-grid-pattern [background-size:32px_32px]" />

      {/* Browser chrome */}
      <div className="absolute inset-x-6 top-6 bottom-0 rounded-t-xl border border-white/10 bg-[#0a0f2a]/90 shadow-2xl backdrop-blur transition-transform duration-500 group-hover:-translate-y-2">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-3 h-4 flex-1 rounded-full bg-white/5" />
        </div>
        <div className="grid grid-cols-3 gap-3 p-4">
          <div className={cn("col-span-2 h-16 rounded-lg bg-gradient-to-r opacity-60", project.gradient)} />
          <div className="h-16 rounded-lg bg-white/5" />
          <div className="h-10 rounded-lg bg-white/5" />
          <div className="h-10 rounded-lg bg-white/10" />
          <div className="h-10 rounded-lg bg-white/5" />
          <div className="col-span-3 h-12 rounded-lg bg-white/5" />
        </div>
      </div>
    </div>
  );
}

function ProjectSlide({ project }: { project: Project }) {
  return (
    <article className="glass group grid gap-6 rounded-3xl p-6 md:p-8 lg:grid-cols-2 lg:gap-10">
      <ProjectVisual project={project} />

      <div className="flex flex-col gap-5">
        <div>
          <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-accent">{project.tagline}</p>
        </div>

        <div className="space-y-3 text-sm leading-relaxed">
          <p className="text-white/70">
            <span className="font-semibold text-white">Problem · </span>
            {project.problem}
          </p>
          <p className="text-white/70">
            <span className="font-semibold text-white">Solution · </span>
            {project.solution}
          </p>
          <p className="flex items-start gap-2 rounded-xl border border-accent/20 bg-accent/10 p-3 text-white/90">
            <FiTrendingUp className="mt-0.5 shrink-0 text-accent" />
            {project.impact}
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-2 text-sm text-white/70 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <FiCheck className="shrink-0 text-primary" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-4 border-t border-border pt-5 text-sm font-medium">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 transition-colors hover:text-accent"
          >
            <FiExternalLink /> Live Demo
          </a>
          <a
            href={project.caseStudy}
            className="flex items-center gap-2 text-white/70 transition-colors hover:text-secondary"
          >
            <FiFileText /> Case Study
          </a>
        </div>
      </div>
    </article>
  );
}

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -80 : 80, opacity: 0 }),
};

export default function Projects() {
  const [[index, direction], setSlide] = useState([0, 0]);

  const paginate = useCallback((dir: number) => {
    setSlide(([current]) => [
      (current + dir + PROJECTS.length) % PROJECTS.length,
      dir,
    ]);
  }, []);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipe = info.offset.x * Math.max(1, Math.abs(info.velocity.x) / 100);
    if (swipe < -80) paginate(1);
    else if (swipe > 80) paginate(-1);
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Work that moved the needle"
          subtitle="Every project below shipped to production and delivered measurable business impact — not just pretty pixels."
        />

        <div className="relative" aria-roledescription="carousel" aria-label="Featured projects">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={handleDragEnd}
              className="cursor-grab active:cursor-grabbing"
            >
              <ProjectSlide project={PROJECTS[index]} />
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            <p className="font-heading text-sm tracking-[0.25em] text-white/40">
              {String(index + 1).padStart(2, "0")}
              <span className="mx-2 text-white/20">/</span>
              {String(PROJECTS.length).padStart(2, "0")}
            </p>

            <div className="flex gap-2">
              {PROJECTS.map((project, i) => (
                <button
                  key={project.title}
                  onClick={() => setSlide([i, i > index ? 1 : -1])}
                  aria-label={`Go to project: ${project.title}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index
                      ? "w-8 bg-gradient-to-r from-primary to-accent"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => paginate(-1)}
                aria-label="Previous project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-white/70 transition-all hover:border-primary/60 hover:text-white hover:shadow-glow"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={() => paginate(1)}
                aria-label="Next project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-white/70 transition-all hover:border-primary/60 hover:text-white hover:shadow-glow"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
