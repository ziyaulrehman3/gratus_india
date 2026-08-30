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
    text: "Consistent quality and on-time export documentation. The sheets and coils were exactly as per mill test certificates — zero rework needed.",
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
    text: "Export-ready packing and responsive team. Quotes within 24 hours and clear lead times — very professional experience.",
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
    text: "From inquiry to dispatch, the process was transparent and fast. WhatsApp support is the fastest we have seen.",
  },
];

export default function FeedbackCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const visibleDesktop = 2;
  const total = feedbacks.length;

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, total]);

  // handle manual nav
  const go = (dir: number) => {
    setIndex((prev) => (prev + dir + total) % total);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-[24px]">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
          style={{ transform: `translateX(-${index * (100 / visibleDesktop)}%)` }}
        >
          {feedbacks.map((fb) => (
            <div
              key={fb.id}
              className="w-full shrink-0 px-3 md:w-1/2"
            >
              <div className="relative flex h-full flex-col rounded-[24px] bg-white p-7 sm:p-8 shadow-xl ring-1 ring-gray-100">
                <div className="pointer-events-none absolute -inset-1 -z-10 rounded-[28px] bg-gradient-to-br from-primary/10 via-periwinkle/8 to-sky/10 opacity-60 blur-xl" />
                <div className="absolute right-6 top-6 hidden h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary/15 sm:flex">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3l-2 4zm9 0h3l2-4V7h-6v6h3l-2 4z" /></svg>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-amber-400">
                  <span className="text-sm tracking-widest">★★★★★</span>
                  <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold tracking-wide text-amber-700 ring-1 ring-amber-200">5.0 • Verified</span>
                </div>
                <p className="mt-1 text-xs font-medium text-gray-500">Trusted by industries across 50+ countries</p>
                <blockquote className="mt-4 text-[15.5px] font-medium leading-relaxed text-secondary">
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
          {feedbacks.map((_, i) => (
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
    </div>
  );
}
