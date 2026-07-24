import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "default" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-heading font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-foreground shadow-glow-accent hover:brightness-110",
  outline:
    "border border-border bg-card text-foreground backdrop-blur-xl hover:border-primary/60 hover:bg-primary/10",
  ghost: "text-foreground/80 hover:bg-foreground/5 hover:text-foreground",
};

const sizes: Record<Size, string> = {
  default: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
};

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href !== undefined) {
    if (isExternal(href)) {
      return (
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
