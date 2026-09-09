"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function InfiniteMovingCards({
  className,
  direction = "left",
  items,
  pauseOnHover = true,
  speed = "fast",
}: {
  className?: string;
  direction?: "left" | "right";
  items: {
    name: string;
    quote: string;
    title: string;
  }[];
  pauseOnHover?: boolean;
  speed?: "fast" | "normal" | "slow";
}) {
  const containerReference = React.useRef<HTMLDivElement>(null);
  const scrollerReference = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  const getDirection = () => {
    if (containerReference.current) {
      if (direction === "left") {
        containerReference.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      }
      else {
        containerReference.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerReference.current) {
      if (speed === "fast") {
        containerReference.current.style.setProperty("--animation-duration", "20s");
      }
      else if (speed === "normal") {
        containerReference.current.style.setProperty("--animation-duration", "40s");
      }
      else {
        containerReference.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  function addAnimation() {
    if (!(containerReference.current && scrollerReference.current)) {
      return;
    }

    const scrollerContent = [...scrollerReference.current.children];

    for (const item of scrollerContent) {
      const duplicatedItem = item.cloneNode(true);
      if (scrollerReference.current) {
        scrollerReference.current.append(duplicatedItem);
      }
    }

    getDirection();
    getSpeed();
    setStart(true);
  }

  return (
    <div
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
      ref={containerReference}
    >
      <ul
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        ref={scrollerReference}
      >
        {items.map((item, _index) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              >
              </div>
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}
