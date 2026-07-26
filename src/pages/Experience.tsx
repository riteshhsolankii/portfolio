import { Link } from "react-router-dom";
import { ABOUT } from "@/lib/data";
import Footer from "@/components/layout/footer";
import PageHero from "@/components/layout/page-hero";
import Reveal from "@/components/effects/reveal";
import ExperienceTimeline from "@/components/experience/experience-timeline";
import Seo from "@/components/seo";

export default function Experience() {
  return (
    <>
      <Seo
        title="Experience"
        description="The career journey of Ritesh Solanki — roles, milestones and the work that shaped how he builds products today."
        path="/experience"
      />
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Experience" }]}
        title="The journey so far"
        subtitle="Roles and milestones that shaped how I build products today."
        image="/profile.jpg"
      />
      <main id="main" className="section-padding">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto mb-16 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="liquid-glass flex h-full flex-col items-center gap-1.5 rounded-2xl py-7 text-center">
                  <span className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                    {stat.value}
                    <span className="text-accent">{stat.suffix}</span>
                  </span>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <ExperienceTimeline />

          <div className="mx-auto mt-16 flex max-w-4xl flex-col items-start gap-4 rounded-3xl border border-accent/30 bg-accent/10 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">
                Let&apos;s work together
              </h2>
              <p className="mt-1 text-sm text-foreground/60">
                Have a role or project in mind? I&apos;d love to hear about it.
              </p>
            </div>
            <Link
              to="/#contact"
              className="shrink-0 rounded-full bg-accent px-6 py-3 font-heading text-sm font-semibold text-accent-foreground shadow-glow-accent transition hover:brightness-110"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
