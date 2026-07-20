"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiCode, FiZap } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTypescript } from "react-icons/si";
import { SITE } from "@/lib/data";
import { Button } from "@/components/ui/button";
import TextReveal from "@/components/effects/text-reveal";

function useTypewriter(words: readonly string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const speed = deleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
}

const floatingBadges = [
  { icon: SiReact, className: "left-0 top-8 text-accent", label: "React" },
  { icon: SiNextdotjs, className: "-right-2 top-24 text-accent", label: "Next.js" },
  { icon: SiTypescript, className: "bottom-16 -left-4 text-accent", label: "TypeScript" },
  { icon: FiZap, className: "-right-4 bottom-6 text-accent", label: "AI Automation" },
];

export default function Hero() {
  const typed = useTypewriter(SITE.roles);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 sm:px-10 lg:px-16"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-white/80 backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for new projects
          </motion.p>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
            <TextReveal text="I Build Beautiful Web Experiences" delay={1.6} />{" "}
            <span className="text-gradient">
              <TextReveal text="That Solve Real Business Problems." delay={2.0} />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.6 }}
            className="mt-6 flex items-center gap-3 font-heading text-lg text-white/90 sm:text-xl"
          >
            <FiCode className="text-accent" aria-hidden />
            <span aria-live="polite">
              {typed}
              <span className="ml-0.5 inline-block h-5 w-[2px] animate-blink bg-accent align-middle" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.6 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {SITE.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="#projects" size="lg">
              View Projects
              <FiArrowRight />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.0, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto hidden w-full max-w-sm lg:block"
        >
          <div className="glass relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
            <Image
              src="/profile.jpg"
              alt={SITE.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-background/80 p-6">
              <p className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                {SITE.name}
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                <span aria-hidden>{SITE.flag}</span>
                {SITE.location}
              </p>
            </div>
          </div>

          {floatingBadges.map(({ icon: Icon, className, label }, i) => (
            <div
              key={label}
              title={label}
              className={`absolute flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-black shadow-glass ${className} ${
                i % 2 === 0 ? "animate-float" : "animate-float-delayed"
              }`}
            >
              <Icon size={26} aria-label={label} />
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-label="Scroll to about section"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
          <span className="h-2 w-1 animate-scroll-dot rounded-full bg-accent" />
        </span>
      </motion.a>
    </section>
  );
}
