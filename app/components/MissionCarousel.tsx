"use client";

import { useState } from "react";

const slides = [
  {
    title: "Our Mission",
    body: "To be the most trusted steel manufacturing partner — delivering export-quality pipes, wires, sheets and fasteners on spec, on time, every time.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&auto=format&fit=crop",
  },
  {
    title: "Our Vision",
    body: "To set the benchmark in precision steel manufacturing through continuous innovation, responsible processes, and unwavering quality from Moradabad to the world.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format&fit=crop",
  },
  {
    title: "Our Promise",
    body: "Lab-tested batches, transparent specs, and a 500+ skilled team standing behind every dispatch — consistency you can plan around.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80&auto=format&fit=crop",
  },
];

export default function MissionCarousel() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] aspect-[16/8.4] min-h-[280px] shadow-[0_24px_60px_rgba(9,21,64,0.14)]">
      {slides.map((s, i) => (
        <img
          key={s.title}
          src={s.image}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-[#091540]/80 via-[#091540]/25 to-transparent" />

      <div className="absolute inset-0 flex items-end justify-between gap-6 p-6 sm:p-10">
        <div key={slide.title} className="max-w-xl animate-fadeInUp">
          <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{slide.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-[15px]">{slide.body}</p>
        </div>

        <div className="mb-1 flex shrink-0 gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-secondary"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-secondary"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
