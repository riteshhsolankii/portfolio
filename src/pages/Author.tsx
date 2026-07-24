import { Link } from "react-router-dom";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiTarget,
  FiCheckCircle,
  FiArrowUpRight,
  FiClock,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { SITE, ABOUT, BLOG_POSTS } from "@/lib/data";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/layout/back-to-top";
import Reveal from "@/components/effects/reveal";
import { Button } from "@/components/ui/button";
import Seo from "@/components/seo";

const socials = [
  { icon: FiMail, href: SITE.socials.email, label: "Email" },
  { icon: FiGithub, href: SITE.socials.github, label: "GitHub" },
  { icon: FiLinkedin, href: SITE.socials.linkedin, label: "LinkedIn" },
  { icon: FaWhatsapp, href: SITE.socials.whatsapp, label: "WhatsApp" },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const authorJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: SITE.name,
    url: `${SITE.url}/author`,
    jobTitle: "Web Developer & React Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indore",
      addressCountry: "IN",
    },
    sameAs: [SITE.socials.github, SITE.socials.linkedin],
  },
};

export default function Author() {
  return (
    <>
      <Seo
        title="Author"
        description={`${SITE.name} — web & React developer building fast, responsive, conversion-focused websites.`}
        path="/author"
        jsonLd={authorJsonLd}
      />
      <Navbar />
      <main id="main" className="section-padding pt-28 md:pt-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-start gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-16">
            <Reveal className="lg:sticky lg:top-28">
              <div className="liquid-glass rounded-3xl p-8">
                <div className="relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded-3xl">
                  <img
                    src="/profile.jpg"
                    alt={SITE.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <h1 className="mt-6 text-center font-heading text-2xl font-bold text-foreground">
                  {SITE.name}
                </h1>
                <p className="mt-1 text-center text-sm font-medium text-accent">
                  {SITE.roles.join(" · ")}
                </p>
                <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-foreground/50">
                  <FiMapPin size={13} /> {SITE.location}
                </p>
                <div className="mt-6 flex justify-center gap-3">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-foreground/5 text-foreground/70 transition-all hover:border-primary/50 hover:text-accent hover:shadow-glow"
                    >
                      <Icon size={19} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="flex flex-col gap-12">
              <Reveal>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent backdrop-blur-xl">
                  Author
                </span>
                <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                  Engineer by craft, designer at heart
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                  {ABOUT.intro}
                </p>
                <div className="mt-7 flex flex-wrap gap-4">
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
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

              <Reveal>
                <div className="liquid-glass rounded-2xl p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-primary">
                      <FiTarget size={22} />
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {ABOUT.focus.title}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {ABOUT.focus.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-foreground/80"
                      >
                        <FiCheckCircle className="mt-1 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal>
                <h3 className="mb-5 font-heading text-2xl font-bold text-foreground">
                  Latest articles
                </h3>
                <div className="flex flex-col gap-4">
                  {BLOG_POSTS.map((post) => (
                    <Link
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className="liquid-glass liquid-glass-hover group flex items-center gap-4 rounded-2xl p-5"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-2xl">
                        {post.emoji}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-heading font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
                          {post.title}
                        </h4>
                        <p className="mt-1 flex items-center gap-2 text-xs text-foreground/50">
                          <span>{formatDate(post.date)}</span>
                          <span className="text-foreground/20">•</span>
                          <span className="inline-flex items-center gap-1">
                            <FiClock size={11} /> {post.readTime}
                          </span>
                        </p>
                      </div>
                      <FiArrowUpRight
                        className="shrink-0 text-accent"
                        size={20}
                      />
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
