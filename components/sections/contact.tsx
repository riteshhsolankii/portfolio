"use client";

import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { SITE } from "@/lib/data";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import GlassCard from "@/components/ui/glass-card";
import Reveal from "@/components/effects/reveal";
import Aurora from "@/components/effects/aurora";
import Magnetic from "@/components/effects/magnetic";

const socials = [
  { icon: FiMail, href: SITE.socials.email, label: "Email", handle: SITE.email },
  { icon: FiGithub, href: SITE.socials.github, label: "GitHub", handle: "@riteshhsolankii" },
  { icon: FiLinkedin, href: SITE.socials.linkedin, label: "LinkedIn", handle: "in/riteshhsolankii" },
  { icon: FaWhatsapp, href: SITE.socials.whatsapp, label: "WhatsApp", handle: "+91 91111 33600" },
];

const inputClasses =
  "w-full rounded-xl border border-border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 backdrop-blur-xl transition-all focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  /* Opens the visitor's mail client with the message pre-filled.
     To send without a mail client, wire this to Resend/Formspree instead. */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <Aurora intensity="subtle" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Tell me about your project — I usually reply within 24 hours."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Socials + resume */}
          <Reveal>
            <div className="flex h-full flex-col gap-4">
              {socials.map(({ icon: Icon, href, label, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-glow"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-accent/25 text-accent transition-transform group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <div>
                    <p className="font-heading font-semibold text-white">{label}</p>
                    <p className="text-sm text-white/50">{handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15}>
            <GlassCard hover={false} className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className={inputClasses}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What are you building? What's the goal, timeline and budget range?"
                    className={`${inputClasses} resize-none`}
                  />
                </div>
                <Magnetic strength={0.2} className="inline-block">
                  <Button type="submit" size="lg">
                    Send Message
                    <FiSend className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </Button>
                </Magnetic>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
