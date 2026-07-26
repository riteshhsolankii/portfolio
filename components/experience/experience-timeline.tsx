import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiBriefcase, FiCheckCircle, FiMapPin } from "react-icons/fi";
import { EXPERIENCE } from "@/lib/data";
import Reveal from "@/components/effects/reveal";
import { cn } from "@/lib/utils";

export default function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
  });

  return (
    <div ref={ref} className="relative mx-auto max-w-4xl">
      <div
        className="absolute left-5 top-0 h-full w-px bg-border md:left-1/2"
        aria-hidden
      >
        <motion.div
          className="h-full w-full origin-top bg-gradient-to-b from-accent to-primary"
          style={{ scaleY: lineProgress }}
        />
      </div>

      <div className="space-y-8 md:space-y-4">
        {EXPERIENCE.map((job, i) => {
          const isLeft = i % 2 === 0;
          const current = job.duration.includes("Present");
          return (
            <div
              key={job.company}
              className={cn(
                "relative flex md:items-center",
                isLeft ? "md:justify-start" : "md:justify-end"
              )}
            >
              <span
                className="absolute left-5 top-7 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-primary/50 bg-background shadow-glow md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                aria-hidden
              >
                {current && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40" />
                )}
                <FiBriefcase className="relative text-accent" size={16} />
              </span>

              <Reveal
                direction={isLeft ? "right" : "left"}
                className={cn(
                  "ml-14 w-full md:ml-0 md:w-[calc(50%-3rem)]",
                  isLeft ? "md:mr-auto" : "md:ml-auto"
                )}
              >
                <div className="liquid-glass liquid-glass-hover rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {job.duration}
                    </span>
                    {current && (
                      <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Present
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {job.role}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-accent">
                    {job.company}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-foreground/50">
                    <FiMapPin size={12} className="shrink-0" />
                    {job.location}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {job.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/70"
                      >
                        <FiCheckCircle className="mt-0.5 shrink-0 text-accent" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </div>
  );
}
