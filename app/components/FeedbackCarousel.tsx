"use client";

import { useEffect, useRef, useState } from "react";

const feedbacks = [
  {
    id: 1,
    initials: "AK",
    name: "A. Kumar — Procurement Head",
    company: "Dubai Construction Group • UAE",
    text: "Gratus India delivered exactly what we needed — on time, certified, and precisely to spec. Their wire products have become our go-to for infrastructure projects.",
  },
  {
    id: 2,
    initials: "RS",
    name: "R. Sharma — Project Manager",
    company: "Mumbai InfraBuild • India",
    text: "Consistent quality and on-time documentation. The sheets and coils were exactly as per mill test certificates — zero rework needed.",
  },
  {
    id: 3,
    initials: "JS",
    name: "J. Singh — Factory Head",
    company: "Delhi Fab Works • India",
    text: "Custom sizes and competitive pricing as a direct manufacturer. Our repeat orders are now fully with Gratus India.",
  },
  {
    id: 4,
    initials: "MA",
    name: "M. Al Farsi — Sourcing Lead",
    company: "Muscat Steel Traders • Oman",
    text: "Export-quality packing and responsive team. Quotes within 24 hours and clear lead times — very professional experience.",
  },
  {
    id: 5,
    initials: "PV",
    name: "P. Verma — Managing Director",
    company: "Pune Engineering Co. • India",
    text: "Lab-tested quality with reliable logistics. Fasteners and pipes performed perfectly on site, we will continue ordering.",
  },
  {
    id: 6,
    initials: "NS",
    name: "N. Shaikh — Purchase Officer",
    company: "Doha Industrial Supply • Qatar",
    text: "From inquiry to dispatch, the process was transparent and fast. Support is the fastest we have seen.",
  },
];

export default function FeedbackCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(2);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchDelta = useRef(0);

  const total = feedbacks.length;

  // responsive visible count
  useEffect(() => {
    const update = () => setVisible(window.innerWidth < 768 ? 1 : 2);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // clamp index when visible changes (avoid empty space at end for desktop 2)
  useEffect(() => {
    const max = Math.max(0, total - visible);
    if (index > max) setIndex(max);
  }, [visible, total, index]);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIndex((prev) => {
        const max = total - visible;
        const next = prev + 1;
        return next > max ? 0 : next;
      });
    }, 3200);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, total, visible]);

  const go = (dir: number) => {
    const max = total - visible;
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return max;
      if (next > max) return 0;
      return next;
    });
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDelta.current = 0;
    setPaused(true);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    touchDelta.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (touchStartX.current == null) return;
    const threshold = 48;
    if (touchDelta.current < -threshold) go(1);
    else if (touchDelta.current > threshold) go(-1);
    touchStartX.current = null;
    touchDelta.current = 0;
    setTimeout(() => setPaused(false), 1800);
  };

  // pages for dots (ceil for visible grouping)
  const pages = Math.max(1, total - visible + 1);
  const dots = Array.from({ length: pages }, (_, i) => i);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* viewport with vertical padding so shadow not cut, horizontal overflow hidden */}
      <div className="overflow-hidden py-6 -my-6 px-1 -mx-1">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
          style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
        >
          {feedbacks.map((fb) => (
            <div
              key={fb.id}
              className="w-full shrink-0 px-3 md:w-1/2"
              style={{ flex: `0 0 ${100 / visible}%`, maxWidth: `${100 / visible}%` }}
            >
              <div className="relative flex h-full min-h-[260px] flex-col rounded-[24px] bg-white p-7 sm:p-8 shadow-[0_8px_32px_rgba(9,21,64,0.08),0_2px_8px_rgba(9,21,64,0.06)] ring-1 ring-gray-200/70">
                <div className="pointer-events-none absolute -inset-1 -z-10 rounded-[28px] bg-gradient-to-br from-primary/10 via-periwinkle/8 to-sky/10 opacity-60 blur-xl" />
                <div className="absolute right-6 top-6 hidden h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary/15 sm:flex">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3l-2 4zm9 0h3l2-4V7h-6v6h3l-2 4z" /></svg>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-amber-400">
                  <span className="text-sm tracking-widest">★★★★★</span>
                  <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold tracking-wide text-amber-700 ring-1 ring-amber-200">5.0 • Verified</span>
                </div>
                <p className="mt-1 text-xs font-medium text-gray-500">Trusted for precision manufacturing</p>
                <blockquote className="mt-4 flex-1 text-[15.5px] font-medium leading-relaxed text-secondary">
                  &quot;{fb.text}&quot;
                </blockquote>
                <div className="mt-6 flex items-center gap-3.5 border-t border-gray-100 pt-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-primary text-sm font-bold text-white shadow-md ring-1 ring-white">{fb.initials}</span>
                  <div>
                    <div className="text-sm font-bold tracking-tight text-secondary">{fb.name}</div>
                    <div className="text-xs font-medium text-gray-500">{fb.company}</div>
                  </div>
                  <span className="ml-auto hidden sm:inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">✓</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          aria-label="Previous"
          onClick={() => go(-1)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-secondary shadow-sm ring-1 ring-gray-200 transition hover:bg-secondary hover:text-white hover:shadow-md active:scale-95"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="flex items-center gap-1.5">
          {dots.map((i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-6 bg-primary" : "w-1.5 bg-gray-300 hover:bg-gray-400"}`}
            />
          ))}
        </div>
        <button
          aria-label="Next"
          onClick={() => go(1)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-secondary shadow-sm ring-1 ring-gray-200 transition hover:bg-secondary hover:text-white hover:shadow-md active:scale-95"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* mobile swipe hint */}
      <div className="mt-3 flex justify-center md:hidden">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-gray-500 ring-1 ring-gray-200 shadow-sm">
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
          Swipe to view
        </span>
      </div>
    </div>
  );
}
