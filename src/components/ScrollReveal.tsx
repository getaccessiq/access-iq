"use client";

import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type AnimationType =
  | "fade-in-up"
  | "fade-in-down"
  | "fade-in-left"
  | "fade-in-right"
  | "scale-in"
  | "scale-in-soft"
  | "scale-in-bounce"
  | "fade-in"
  | "blur-in-up"
  | "blur-in"
  | "reveal-up";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  as?: React.ElementType;
  threshold?: number;
  stagger?: boolean;
  distance?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  animation = "fade-in-up",
  delay = 0,
  duration = 800,
  className = "",
  as: Component = "div",
  threshold = 0.15,
  stagger = false,
  distance = 28,
  once = true,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    once,
  });

  const animClass = isVisible ? "scroll-animate-visible" : "scroll-animate-hidden";
  const staggerClass = stagger ? "scroll-stagger-children" : "";

  return (
    <Component
      ref={ref}
      className={[
        "scroll-animate",
        `scroll-${animation}`,
        animClass,
        staggerClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        {
          "--scroll-delay": `${delay}ms`,
          "--scroll-duration": `${duration}ms`,
          "--scroll-distance": `${distance}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </Component>
  );
}