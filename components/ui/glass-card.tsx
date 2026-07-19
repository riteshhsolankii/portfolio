import { cn } from "@/lib/utils";

/** Frosted-glass card used across every section. */
export default function GlassCard({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow",
        className
      )}
    >
      {children}
    </div>
  );
}
