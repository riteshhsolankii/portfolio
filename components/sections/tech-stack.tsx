import { useState } from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FiBox, FiHeart, FiLayout, FiGrid, FiImage, FiPenTool } from "react-icons/fi";
import { RiOpenaiFill } from "react-icons/ri";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiJquery,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiGooglegemini,
  SiCursor,
  SiClaude,
  SiGithubcopilot,
  SiGit,
  SiFigma,
  SiVscodium,
  SiSublimetext,
  SiWordpress,
  SiShopify,
  SiElementor,
  SiOxygen,
} from "react-icons/si";
import { TECH_STACK } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/effects/reveal";
import { cn } from "@/lib/utils";

const ICONS: Record<string, IconType> = {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiJquery,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  RiOpenaiFill,
  SiGooglegemini,
  SiCursor,
  SiClaude,
  SiGithubcopilot,
  SiGit,
  SiFigma,
  SiVscodium,
  SiSublimetext,
  SiWordpress,
  SiShopify,
  SiElementor,
  SiOxygen,
  FiHeart,
  FiLayout,
  FiGrid,
  FiImage,
  FiPenTool,
};

export default function TechStack() {
  const [active, setActive] = useState(0);

  return (
    <section id="stack" className="section-padding relative">
      <div className="mx-auto max-w-[1440px]">
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
                    ? "border-primary/60 bg-primary/20 text-foreground shadow-glow"
                    : "border-border bg-card text-foreground/60 hover:border-primary/40 hover:text-foreground"
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
                className="glass group flex flex-col items-center gap-3 rounded-2xl px-4 py-7 transition-colors hover:border-primary/50"
              >
                <Icon
                  size={34}
                  className="text-foreground/70 transition-all duration-300 group-hover:text-accent"
                  aria-hidden
                />
                <span className="text-center text-sm font-medium text-foreground/80 group-hover:text-foreground">
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
