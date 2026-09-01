"use client";

import { useState } from "react";

const slides = [
  {
    title: "Our Mission",
    body: "To be the most trusted lighting partner — handcrafting Wood Table Lamps, Wall Lamps, Floor Lamps, Pendant, Moroccan & Rope Hanging Lamps that bring warm, ambient light to homes, cafés and hotels — on spec, on time, every time.",
    image:
      "/website-images/photo-1519710164239-da123dc03ef4.jpg",
  },
  {
    title: "Our Vision",
    body: "To set the benchmark in handcrafted decorative lighting through thoughtful design, sustainable wood & metal craft, and consistent finish — from Moradabad to the world.",
    image:
      "/website-images/photo-1586023492125-27b2c045efd7.jpg",
  },
  {
    title: "Our Promise",
    body: "Hand-finished wood, quality-checked wiring and shade, and a skilled team behind every lamp — consistent warm glow and build you can count on, with our Wall & Hanging Planter Stands adding green warmth to any space.",
    image:
      "/website-images/photo-1524758631624-e2822e304c36.jpg",
  },
];

export default function MissionCarousel() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[36px] aspect-[16/9] sm:aspect-[16/9] lg:aspect-[16/8.4] min-h-[320px] sm:min-h-[360px] lg:min-h-[380px] shadow-[0_24px_60px_rgba(9,21,64,0.14)]">
      {slides.map((s, i) => (
        <img
          key={s.title}
          src={s.image}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-[#091540]/80 via-[#091540]/25 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end gap-3 p-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:p-8 lg:p-10">
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
