import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import Reveal from "@/components/effects/reveal";

export type Crumb = { label: string; to?: string };

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  image,
  children,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs: Crumb[];
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-20"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_120%_at_50%_-10%,rgba(156,244,0,0.14),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(to_right,rgb(var(--fg))_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--fg))_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="mx-auto max-w-[1440px] px-[15px] pb-10 pt-28 md:pb-14 md:pt-36">
        <Reveal>
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-sm text-foreground/50"
          >
            {breadcrumbs.map((c, i) => {
              const last = i === breadcrumbs.length - 1;
              return (
                <span key={`${c.label}-${i}`} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <FiChevronRight size={13} className="text-foreground/30" />
                  )}
                  {c.to && !last ? (
                    <Link
                      to={c.to}
                      className="transition-colors hover:text-accent"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className={last ? "text-foreground/80" : undefined}>
                      {c.label}
                    </span>
                  )}
                </span>
              );
            })}
          </nav>

          <h1 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {subtitle}
            </p>
          )}

          {children}
        </Reveal>
      </div>
    </section>
  );
}
