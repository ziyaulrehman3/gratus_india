"use client";
import { useEffect, useRef } from "react";

export default function Parallax({
  children,
  speed = 0.15,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const off = (window.innerHeight - rect.top) * speed * 0.3;
        // clamp small parallax to avoid big jumps on mobile
        const clamped = Math.max(-40, Math.min(40, off));
        const inner = el.firstElementChild as HTMLElement | null;
        if (inner) inner.style.transform = `translateY(${clamped}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`parallax ${className}`} style={{ overflow: "hidden" }}>
      <div style={{ willChange: "transform" }}>{children}</div>
    </div>
  );
}
