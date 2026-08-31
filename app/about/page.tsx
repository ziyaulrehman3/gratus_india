import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import MissionCarousel from "../components/MissionCarousel";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Gratus India - 25+ years of manufacturing excellence, built to export-quality standards since 1995.",
};

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80&auto=format&fit=crop",
    alt: "Leadership discussion at Gratus India",
    className: "h-44 sm:h-56 lg:h-[280px] lg:w-[18%]",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80&auto=format&fit=crop",
    alt: "Steel manufacturing facility",
    className: "h-52 sm:h-72 lg:h-[340px] lg:w-[22%]",
  },
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80&auto=format&fit=crop",
    alt: "Modern industrial architecture",
    className: "h-40 sm:h-48 lg:h-[220px] lg:w-[18%]",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80&auto=format&fit=crop",
    alt: "Precision steel production",
    className: "h-48 sm:h-64 lg:h-[300px] lg:w-[20%]",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80&auto=format&fit=crop",
    alt: "Client partnership meeting",
    className: "h-52 sm:h-80 lg:h-[360px] lg:w-[22%]",
  },
];

const stats = [
  { value: 1200, suffix: "+", label: "Orders delivered with documented QC across India and export lanes." },
  { value: 95, suffix: "%", label: "Repeat buyers who stay with us for finish, specs and timelines." },
  { value: 25, suffix: "+", label: "Years of manufacturing heritage from Moradabad, since 1995." },
  { value: 500, suffix: "+", label: "Clients and partners who trust Gratus for industrial steel." },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-10 sm:pt-14 lg:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-fadeInUp text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl lg:text-[56px]">
              About Us
            </h1>
            <p className="animate-fadeInUp delay-100 mt-3 text-sm text-gray-500 sm:text-base">
              Helping industries find steel they can trust — manufactured in Moradabad since 1995.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-end justify-center gap-3 sm:gap-4 lg:mt-14 lg:flex-nowrap">
            {heroImages.map((img, i) => (
              <div
                key={img.src}
                style={{ animationDelay: `${120 + i * 90}ms` }}
                className={`animate-fadeInUp w-[46%] overflow-hidden rounded-[22px] sm:rounded-[28px] lg:w-auto ${img.className}`}
              >
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do + stats */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.18em] text-gray-400">What we do</p>
            <h2 className="mt-3 max-w-4xl text-2xl font-extrabold leading-tight tracking-tight text-secondary sm:text-3xl lg:text-[40px] lg:leading-[1.2]">
              We manufacture export-quality steel products with precision, consistency and a finish you can specify with confidence.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="group h-full rounded-[22px] bg-[#f4f5f7] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(9,21,64,0.08)]">
                  <div className="text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal direction="scale">
            <MissionCarousel />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">FAQ&apos;s</h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
                  Quick answers about products, custom specs, quality and how we work with new buyers.
                </p>
                <div className="mt-10 max-w-sm rounded-[24px] bg-[#f4f5f7] p-6">
                  <h3 className="text-lg font-bold text-secondary">Still have a question?</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Share your specs and we&apos;ll reply within one business day.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-shine mt-5 inline-flex rounded-full bg-secondary px-6 py-2.5 text-sm font-bold text-white transition hover:bg-secondary/90"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <FaqAccordion />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal direction="scale">
            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px]">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c119fb3?w=1800&q=80&auto=format&fit=crop"
                alt="Industrial facility at dusk"
                className="h-[380px] w-full object-cover sm:h-[440px]"
              />
              <div className="absolute inset-0 bg-[#091540]/55" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Start Your Steel Journey Today
                </h2>
                <p className="mt-3 max-w-lg text-sm text-white/80 sm:text-base">
                  Get a quote, share drawings, or talk to our plant team — we&apos;ll help you lock the right spec.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/contact"
                    className="btn-shine inline-flex rounded-full bg-[#e85d4c] px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#d54c3c] hover:-translate-y-0.5"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex rounded-full border border-white/80 px-7 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-secondary"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
