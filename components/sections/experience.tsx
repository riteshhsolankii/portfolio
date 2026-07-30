import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/effects/reveal";
import ExperienceTimeline from "@/components/experience/experience-timeline";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Experience"
          title="The journey so far"
          subtitle="Roles and milestones that shaped how I build products today."
        />

        <ExperienceTimeline />

        <Reveal className="mt-12 flex justify-center">
          <Link
            to="/experience"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 font-heading text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-primary/10 hover:shadow-glow"
          >
            View full experience
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
