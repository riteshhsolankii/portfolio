"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { FiTarget, FiCheckCircle } from "react-icons/fi";
import { ABOUT, SITE } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";
import GlassCard from "@/components/ui/glass-card";
import Reveal from "@/components/effects/reveal";

/** Counts from 0 to `value` when scrolled into view. */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, value]);

  return (
    <span ref={ref} className="font-heading text-4xl font-bold text-white md:text-5xl">
      <motion.span>{rounded}</motion.span>
      <span className="text-gradient">{suffix}</span>
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Engineer by craft, designer at heart"
          subtitle={ABOUT.intro}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <GlassCard className="flex h-full flex-col items-center gap-2 py-10 text-center">
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-muted">{stat.label}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.1}>
            <GlassCard className="h-full p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  <FiTarget size={22} />
                </span>
                <h3 className="font-heading text-xl font-semibold text-white">
                  {ABOUT.focus.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {ABOUT.focus.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80">
                    <FiCheckCircle className="mt-1 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.2}>
            <GlassCard className="flex h-full flex-col justify-between gap-6 bg-gradient-to-br from-primary/15 to-accent/10 p-8">
              <p className="font-heading text-2xl font-semibold leading-snug text-white">
                “Great software feels effortless.
                <span className="text-gradient"> That takes real effort.”</span>
              </p>
              <div>
                <p className="font-medium text-white">{SITE.name}</p>
                <p className="text-sm text-muted">{SITE.location}</p>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
