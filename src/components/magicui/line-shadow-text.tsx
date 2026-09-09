import type { MotionProps } from "motion/react";
import { motion } from "motion/react";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

const createMotionComponent = (component: React.ElementType) => motion.create(component);

interface LineShadowTextProperties
  extends MotionProps,
  Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  as?: React.ElementType;
  shadowColor?: string;
}

/* eslint-disable react/static-components */
export function LineShadowText({
  as: Component = "span",
  children,
  className,
  shadowColor = "black",
  ...properties
}: LineShadowTextProperties) {
  const MotionComponent = useMemo(() => createMotionComponent(Component), [Component]);
  const content = typeof children === "string" ? children : null;

  if (!content) {
    throw new Error("LineShadowText only accepts string content");
  }

  return (
    <MotionComponent
      className={cn(
        "relative z-0 inline-flex",
        "after:absolute after:left-[0.04em] after:top-[0.04em] after:content-[attr(data-text)]",
        "after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]",
        "after:-z-10 after:bg-[length:0.06em_0.06em] after:bg-clip-text after:text-transparent",
        "after:animate-line-shadow",
        className,
      )}
      data-text={content}
      style={{ "--shadow-color": shadowColor } as React.CSSProperties}
      {...properties}
    >
      {content}
    </MotionComponent>
  );
}
/* eslint-enable react/static-components */
