import { cn } from "@/lib/utils";

/**
 * GPU-friendly aurora background built from blurred, slowly drifting
 * gradient blobs plus a faint grid. Pure CSS animation — zero JS cost.
 */
export default function Aurora({
  className,
  intensity = "strong",
}: {
  className?: string;
  intensity?: "strong" | "subtle";
}) {
  const opacity = intensity === "strong" ? "opacity-100" : "opacity-50";

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        opacity,
        className
      )}
    >
      <div className="absolute -top-1/4 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 animate-aurora rounded-full bg-primary/25 blur-[140px]" />
      <div className="absolute -bottom-1/3 -left-40 h-[45rem] w-[45rem] animate-aurora-slow rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute -right-40 top-1/4 h-[40rem] w-[40rem] animate-aurora rounded-full bg-secondary/20 blur-[130px] [animation-delay:-8s]" />
      <div className="absolute inset-0 bg-grid-pattern [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
    </div>
  );
}
