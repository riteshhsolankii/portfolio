import { useRef } from "react";
import gsap from "gsap";
import type { IconType } from "react-icons";
import {
  FiLayout,
  FiZap,
  FiBox,
  FiTrendingUp,
  FiTool,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { SiWordpress, SiReact, SiWoocommerce, SiFigma } from "react-icons/si";
import { SERVICES } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";

const ICONS: Record<string, IconType> = {
  FiLayout,
  FiZap,
  FiTrendingUp,
  FiTool,
  SiWordpress,
  SiReact,
  SiWoocommerce,
  SiFigma,
};

export default function Services() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);

  const scroll = (dir: number) => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.clientWidth + 24 : viewport.clientWidth;
    const max = Math.max(0, track.scrollWidth - viewport.clientWidth);
    const next = Math.min(Math.max(posRef.current + dir * step, 0), max);
    posRef.current = next;

    gsap.to(track, { x: -next, duration: 0.6, ease: "power3.out" });
  };

  return (
    <section id="services" className="section-padding relative">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Services"
          title="What I can do for you"
          subtitle="From landing pages to full web apps — built to look great and perform."
        />

        <div ref={viewportRef} className="overflow-hidden">
          <div ref={trackRef} className="flex gap-6 will-change-transform">
            {SERVICES.map((service) => {
              const Icon = ICONS[service.icon] ?? FiBox;
              return (
                <div
                  key={service.title}
                  data-card
                  className="group w-[260px] shrink-0 rounded-3xl border border-border bg-card p-7 transition-colors duration-300 hover:border-primary/50 sm:w-[300px]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous services"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/70 transition-all hover:border-primary/60 hover:text-foreground active:scale-95"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next services"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/70 transition-all hover:border-primary/60 hover:text-foreground active:scale-95"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
