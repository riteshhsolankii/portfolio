"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  FiArrowUpRight,
  FiSend,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { PROJECTS } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.clientWidth + 24 : el.clientWidth;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          subtitle="Real client work shipped to production — fast, responsive and built to convert."
        />

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PROJECTS.map((project) => (
            <a
              key={project.title}
              data-card
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-glass backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-glow sm:w-[60%] md:w-[calc(50%-12px)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 85vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <FiArrowUpRight className="mt-1 shrink-0 text-accent" size={20} />
                </div>
                <p className="text-sm font-medium text-accent">{project.tagline}</p>
                <p className="text-sm leading-relaxed text-white/60">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}

          <a
            data-card
            href="#contact"
            className="group flex w-[85%] shrink-0 snap-start flex-col items-start justify-center gap-4 rounded-3xl border border-border bg-card p-8 shadow-glass backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-glow sm:w-[60%] md:w-[calc(50%-12px)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <FiSend size={22} />
            </span>
            <h3 className="font-heading text-2xl font-bold text-white">
              Have a project in mind?
            </h3>
            <p className="text-sm leading-relaxed text-white/60">
              Let&apos;s build something fast, beautiful and built to convert.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              Start a project <FiArrowUpRight />
            </span>
          </a>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous project"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-white/70 transition-all hover:border-primary/60 hover:text-white hover:shadow-glow"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next project"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-white/70 transition-all hover:border-primary/60 hover:text-white hover:shadow-glow"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
