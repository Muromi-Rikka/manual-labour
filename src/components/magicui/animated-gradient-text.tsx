import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export interface AnimatedGradientTextProperties
  extends ComponentPropsWithoutRef<"div"> {
  colorFrom?: string;
  colorTo?: string;
  speed?: number;
}

export function AnimatedGradientText({
  children,
  className,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  speed = 1,
  ...properties
}: AnimatedGradientTextProperties) {
  return (
    <span
      className={cn(
        `inline animate-gradient bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
        className,
      )}
      style={
        {
          "--bg-size": `${speed * 300}%`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
        } as React.CSSProperties
      }
      {...properties}
    >
      {children}
    </span>
  );
}
