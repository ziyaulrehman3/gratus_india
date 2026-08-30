"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "fade" | "left" | "right" | "scale" | "blur";
  threshold?: number;
  className?: string;
  once?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  duration = 700,
  direction = "up",
  threshold = 0.12,
  className = "",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);

  const anim =
    direction === "fade" ? "animate-fadeIn"
    : direction === "left" ? "animate-slideInLeft"
    : direction === "right" ? "animate-slideInRight"
    : direction === "scale" ? "animate-scaleIn"
    : direction === "blur" ? "animate-blurIn"
    : "animate-fadeInUp";

  return (
    <div
      ref={ref}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        opacity: visible ? undefined : 0,
      }}
      className={visible ? `${anim} ${className}` : className}
    >
      {children}
    </div>
  );
}
