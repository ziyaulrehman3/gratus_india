"use client";
import { useEffect, useRef, useState } from "react";

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  stagger = 18,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ paddingRight: i !== words.length - 1 ? "0.28em" : undefined }}
        >
          <span
            className="inline-block"
            style={{
              transform: visible ? "translateY(0)" : "translateY(110%)",
              opacity: visible ? 1 : 0,
              transition: `transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay + i * stagger}ms, opacity 0.5s ease ${delay + i * stagger}ms`,
            }}
          >
            {w}
          </span>
        </span>
      ))}
    </span>
  );
}
