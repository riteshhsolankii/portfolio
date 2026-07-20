"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiBriefcase, FiCheckCircle, FiMapPin } from "react-icons/fi";
import { EXPERIENCE } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";
import GlassCard from "@/components/ui/glass-card";
import Reveal from "@/components/effects/reveal";
import { cn } from "@/lib/utils";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  return (
    <section id="experience" className="section-padding relative">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="The journey so far"
          subtitle="Roles and milestones that shaped how I build products today."
        />

        <div ref={ref} className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-white/10 md:left-1/2" aria-hidden>
            <motion.div
              className="h-full w-full origin-top bg-accent"
              style={{ scaleY: lineProgress }}
            />
          </div>

          <div className="space-y-12">
            {EXPERIENCE.map((job, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={job.company}
                  className={cn(
                    "relative flex md:items-center",
                    isLeft ? "md:justify-start" : "md:justify-end"
                  )}
                >
                  <span
                    className="absolute left-5 top-8 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-primary/50 bg-background shadow-glow md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                    aria-hidden
                  >
                    <FiBriefcase className="text-accent" size={16} />
                  </span>

                  <Reveal
                    direction={isLeft ? "right" : "left"}
                    className={cn(
                      "ml-14 w-full md:ml-0 md:w-[calc(50%-3.5rem)]",
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    )}
                  >
                    <GlassCard className="p-7">
                      <span className="mb-3 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {job.duration}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-white">{job.role}</h3>
                      <p className="mt-0.5 text-sm font-medium text-secondary">{job.company}</p>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-white/50">
                        <FiMapPin size={12} className="shrink-0" />
                        {job.location}
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {job.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-white/70"
                          >
                            <FiCheckCircle className="mt-0.5 shrink-0 text-primary" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
