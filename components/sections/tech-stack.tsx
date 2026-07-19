"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FiBox } from "react-icons/fi";
import { RiOpenaiFill } from "react-icons/ri";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiLangchain,
  SiHuggingface,
  SiN8N,
  SiGit,
  SiFigma,
  SiVscodium,
  SiShopify,
  SiWordpress,
} from "react-icons/si";
import { TECH_STACK } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/effects/reveal";
import { cn } from "@/lib/utils";

/* Explicit icon map keeps the bundle lean — a namespace import of
   react-icons/si would pull in the entire icon set. */
const ICONS: Record<string, IconType> = {
  RiOpenaiFill,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiLangchain,
  SiHuggingface,
  SiN8N,
  SiGit,
  SiFigma,
  SiVscodium,
  SiShopify,
  SiWordpress,
};

export default function TechStack() {
  const [active, setActive] = useState(0);

  return (
    <section id="stack" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I ship with"
          subtitle="A battle-tested toolkit spanning the full product lifecycle — from pixel to production."
        />

        <Reveal>
          <div
            className="mb-10 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Technology categories"
          >
            {TECH_STACK.map((category, i) => (
              <button
                key={category.title}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300",
                  active === i
                    ? "border-primary/60 bg-primary/20 text-white shadow-glow"
                    : "border-border bg-card text-white/60 hover:border-primary/40 hover:text-white"
                )}
              >
                {category.title}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {TECH_STACK[active].items.map((tech, i) => {
            const Icon = ICONS[tech.icon] ?? FiBox;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                whileHover={{ y: -6, scale: 1.04 }}
                className="glass group flex flex-col items-center gap-3 rounded-2xl px-4 py-7 transition-colors hover:border-primary/50"
                data-cursor-hover
              >
                <Icon
                  size={34}
                  className="text-white/70 transition-all duration-300 group-hover:scale-110 group-hover:text-accent"
                  aria-hidden
                />
                <span className="text-center text-sm font-medium text-white/80 group-hover:text-white">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
