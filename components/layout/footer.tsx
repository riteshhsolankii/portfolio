import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { NAV_LINKS, SITE } from "@/lib/data";

const socials = [
  { icon: FiGithub, href: SITE.socials.github, label: "GitHub" },
  { icon: FiLinkedin, href: SITE.socials.linkedin, label: "LinkedIn" },
  { icon: FaWhatsapp, href: SITE.socials.whatsapp, label: "WhatsApp" },
  { icon: FiMail, href: SITE.socials.email, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="flex items-center gap-2.5 font-heading font-bold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-sm">
            {SITE.initials}
          </span>
          {SITE.name}
        </div>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-white/70 transition-all hover:border-primary/60 hover:text-white hover:shadow-glow"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-white/40">
        © {new Date().getFullYear()} {SITE.name}. Designed & built with obsession.
      </p>
    </footer>
  );
}
