"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const directions = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
} as const;

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
}: {
  children: React.ReactNode;
  direction?: keyof typeof directions;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const offset = directions[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
