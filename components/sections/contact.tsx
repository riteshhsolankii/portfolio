import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { SITE } from "@/lib/data";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import GlassCard from "@/components/ui/glass-card";
import Reveal from "@/components/effects/reveal";

const socials = [
  { icon: FiMail, href: SITE.socials.email, label: "Email", handle: SITE.email },
  { icon: FiGithub, href: SITE.socials.github, label: "GitHub", handle: "@riteshhsolankii" },
  { icon: FiLinkedin, href: SITE.socials.linkedin, label: "LinkedIn", handle: "in/riteshhsolankii" },
  { icon: FaWhatsapp, href: SITE.socials.whatsapp, label: "WhatsApp", handle: "+91 91111 33600" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Tell me about your project — I usually reply within 24 hours."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <GlassCard hover={false} className="flex h-full flex-col justify-between gap-8 p-8">
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Have a project in mind?
                </h3>
                <p className="mt-3 leading-relaxed text-foreground/60">
                  Whether it&apos;s a new website, a WordPress build or a React app —
                  let&apos;s make it fast, beautiful and built to convert.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href={SITE.socials.email} size="lg">
                  <FiMail /> Email Me
                </Button>
                <Button
                  href={SITE.socials.whatsapp}
                  variant="outline"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> WhatsApp
                </Button>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex h-full flex-col gap-4">
              {socials.map(({ icon: Icon, href, label, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <Icon size={22} />
                  </span>
                  <div>
                    <p className="font-heading font-semibold text-foreground">{label}</p>
                    <p className="text-sm text-foreground/50">{handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
