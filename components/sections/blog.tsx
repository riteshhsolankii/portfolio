"use client";

import { FiArrowUpRight, FiClock } from "react-icons/fi";
import { BLOG_POSTS } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/effects/reveal";

const categoryStyles: Record<string, string> = {
  React: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
  AI: "border-violet-400/30 bg-violet-400/10 text-violet-300",
  Coding: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  Automation: "border-amber-400/30 bg-amber-400/10 text-amber-300",
};

export default function Blog() {
  return (
    <section id="blog" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Blog"
          title="Latest articles"
          subtitle="Notes from the trenches on coding, AI, automation and React."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.title} delay={(i % 2) * 0.1}>
              <a
                href={post.href}
                className="glass group flex h-full flex-col gap-4 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-glow"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${
                      categoryStyles[post.category] ?? "border-border bg-white/5 text-white/70"
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-white/40">
                    <FiClock aria-hidden />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold leading-snug text-white transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">{post.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors group-hover:text-accent">
                  Read article
                  <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
