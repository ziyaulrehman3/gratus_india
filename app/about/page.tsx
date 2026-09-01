import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import MissionCarousel from "../components/MissionCarousel";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Gratus India — 25+ years handcrafting decorative lighting in Moradabad since 1995. Makers of Wood Table Lamps, Wall Lamps, Floor Lamps, Pendant, Moroccan & Rope Hanging Lamps and Planter Stands.",
};

const heroImages = [
  {
    src: "/website-images/photo-1513506003901-1e6a229e2d15.jpg",
    alt: "Pendant Lamp — modern minimal ceiling pendant",
    label: "Pendant Lamp",
  },
  {
    src: "/website-images/photo-1519710164239-da123dc03ef4.jpg",
    alt: "Rope Hanging Lamp — jute rope rustic decor",
    label: "Rope Hanging Lamp",
  },
  {
    src: "/website-images/photo-1524758631624-e2822e304c36.jpg",
    alt: "Moroccan Hanging Lamp — jaali pattern ambient light",
    label: "Moroccan Lamp",
  },
  {
    src: "/website-images/photo-1586023492125-27b2c045efd7.jpg",
    alt: "Floor Lamp — tall statement for living room",
    label: "Floor Lamp",
  },
  {
    src: "/website-images/photo-1485955900006-10f4d324d411.jpg",
    alt: "Planter Stand with Pot — wall & hanging metal planter",
    label: "Planter Stand",
  },
];

const stats = [
  { value: 1200, suffix: "+", label: "Handcrafted lamps delivered to homes, hotels & export partners across India and beyond." },
  { value: 95, suffix: "%", label: "Repeat buyers who stay with us for finish, warm light and lasting woodwork." },
  { value: 25, suffix: "+", label: "Years of craftsmanship heritage from Moradabad, since 1995." },
  { value: 500, suffix: "+", label: "Clients and partners who trust Gratus for decorative lighting." },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-14 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="animate-fadeInUp inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#091540] via-[#0f1f7a] to-[#1B2CC1] px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] text-white shadow-[0_8px_20px_rgba(27,44,193,0.25)] ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
              CRAFTED IN MORADABAD • SINCE 1995
              <span className="hidden sm:inline h-3 w-px bg-white/20" />
              <span className="hidden sm:inline font-medium tracking-wide text-white/90">Export-Quality Lighting</span>
            </div>

            <h1 className="animate-fadeInUp delay-100 mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[58px] leading-[0.9]">
              <span className="bg-gradient-to-r from-[#091540] via-[#1B2CC1] to-[#7692FF] bg-clip-text text-transparent">About Us</span>
            </h1>
            <div className="animate-fadeInUp delay-150 mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#1B2CC1] via-[#7692FF] to-[#ABD2FA] sm:w-28" />

            <p className="animate-fadeInUp delay-200 mt-6 text-[16px] leading-relaxed text-gray-600 sm:text-[18px]">
              <span className="font-extrabold tracking-tight text-secondary">Handcrafting light</span>{" "}
              <span className="font-medium text-gray-700">that warms every space</span> —{" "}
              <span className="inline-flex flex-wrap items-center justify-center gap-1.5 align-middle">
                <span className="rounded-full bg-[#f4f5f7] px-3 py-1 text-sm font-bold text-secondary ring-1 ring-black/5">Wood Table Lamps</span>
                <span className="text-gray-300">•</span>
                <span className="rounded-full bg-[#f4f5f7] px-3 py-1 text-sm font-bold text-secondary ring-1 ring-black/5">Wall</span>
                <span className="text-gray-300">•</span>
                <span className="rounded-full bg-[#f4f5f7] px-3 py-1 text-sm font-bold text-secondary ring-1 ring-black/5">Floor</span>
                <span className="text-gray-300">•</span>
                <span className="rounded-full bg-gradient-to-r from-[#091540] to-[#1B2CC1] px-3 py-1 text-sm font-bold text-white shadow-sm">Hanging Lamps</span>
              </span>{" "}
              <span className="whitespace-nowrap font-semibold text-secondary">
                from <span className="bg-gradient-to-r from-[#1B2CC1] to-[#7692FF] bg-clip-text text-transparent">Moradabad since 1995</span>
              </span>
              <span className="text-gray-400">.</span>
            </p>

            <p className="animate-fadeInUp delay-300 mt-3 text-sm italic leading-relaxed text-gray-500 sm:text-[13.5px]">
              Where seasoned wood meets warm glow — made for homes, cafés &amp; hospitality worldwide.
            </p>

            <div className="animate-fadeInUp delay-300 mt-5 flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-500/15">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> 25+ Years
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-secondary shadow-sm ring-1 ring-black/5">
                500+ Clients
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-secondary shadow-sm ring-1 ring-black/5">
                Warm Glow • Hand-finished
              </span>
            </div>
          </div>

          {/* Collage + Attractive Right Text — smaller collage, same design */}
          <div className="mt-10 lg:mt-14 mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.9fr] lg:gap-10 items-center">
              {/* Left — smaller collage, same design */}
              <div className="rounded-[24px] sm:rounded-[28px] bg-[#091540] p-2 sm:p-3 shadow-[0_24px_60px_rgba(9,21,64,0.18)]">
                <div className="grid h-[360px] grid-cols-12 grid-rows-6 gap-2 sm:h-[420px] sm:gap-3 lg:h-[440px]">
                  {heroImages.map((img, i) => {
                    const spans = [
                      "col-span-4 row-span-3", // Pendant — top left
                      "col-span-4 row-span-3", // Rope — top middle
                      "col-span-4 row-span-6", // Moroccan — height extra (full vertical drama right)
                      "col-span-5 row-span-3", // Floor — width extra bottom
                      "col-span-3 row-span-3", // Planter — small bottom
                    ];
                    const rotates = [
                      "rotate-[-0.7deg]",
                      "rotate-[0.8deg]",
                      "rotate-[0.4deg]",
                      "rotate-[0.6deg]",
                      "rotate-[-0.5deg]",
                    ];
                    return (
                      <div
                        key={img.label}
                        style={{ animationDelay: `${120 + i * 70}ms` }}
                        className={`animate-fadeInUp group relative overflow-hidden rounded-[18px] sm:rounded-[22px] border-[3px] border-white bg-white shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-all duration-500 hover:z-10 hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)] hover:rotate-0 ${spans[i]} ${rotates[i]}`}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="h-full w-full object-cover transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                        <span className="absolute bottom-2 left-2 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold tracking-wide text-secondary shadow-lg ring-1 ring-black/5 sm:bottom-3 sm:left-3 sm:px-3 sm:text-[11px]">
                          {img.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right — attractive text */}
              <div className="text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#f4f5f7] px-3 py-1 text-[11px] font-bold tracking-[0.14em] text-secondary ring-1 ring-black/5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1B2CC1] animate-pulse" /> OUR COLLECTION STORY
                </div>
                <h3 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-secondary sm:text-3xl lg:text-[34px]">
                  One frame,{" "}
                  <span className="bg-gradient-to-r from-[#1B2CC1] to-[#7692FF] bg-clip-text text-transparent">five signatures</span> of warm light.
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                  Each tile is a bestseller — <span className="font-semibold text-secondary">Pendant</span>,{" "}
                  <span className="font-semibold text-secondary">Rope</span>,{" "}
                  <span className="font-semibold text-secondary">Moroccan jaali</span>,{" "}
                  <span className="font-semibold text-secondary">Floor</span> &amp;{" "}
                  <span className="font-semibold text-secondary">Planter</span> — hand-finished in Moradabad with seasoned wood, soft fabric shades and safe wiring for a warm, hospitality-ready glow.
                </p>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-2.5 rounded-2xl bg-[#f4f5f7] p-3.5 ring-1 ring-black/5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#1B2CC1] shadow-sm ring-1 ring-black/5">✓</span>
                    <div>
                      <div className="text-sm font-bold text-secondary">Hand-finished</div>
                      <div className="text-xs leading-relaxed text-gray-500">Seasoned wood + jaali detail</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-2xl bg-[#f4f5f7] p-3.5 ring-1 ring-black/5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#1B2CC1] shadow-sm ring-1 ring-black/5">◯</span>
                    <div>
                      <div className="text-sm font-bold text-secondary">Warm Glow</div>
                      <div className="text-xs leading-relaxed text-gray-500">Soft shade • safe wiring</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-2xl bg-[#f4f5f7] p-3.5 ring-1 ring-black/5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#1B2CC1] shadow-sm ring-1 ring-black/5">✦</span>
                    <div>
                      <div className="text-sm font-bold text-secondary">Custom Shades</div>
                      <div className="text-xs leading-relaxed text-gray-500">Size • fabric • finish • qty</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-2xl bg-gradient-to-br from-[#091540] to-[#1B2CC1] p-3.5 text-white shadow-md">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">→</span>
                    <div>
                      <div className="text-sm font-bold">Ready to Ship</div>
                      <div className="text-xs leading-relaxed text-white/70">Secure packing + dispatch in 24h</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/products" className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-6 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-[#0f1a5a] hover:-translate-y-0.5">
                    View Collection <span>→</span>
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-secondary shadow-sm ring-1 ring-black/10 transition hover:bg-[#f4f5f7]">
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do + stats */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.18em] text-gray-400">What we craft</p>
            <h2 className="mt-3 max-w-4xl text-2xl font-extrabold leading-tight tracking-tight text-secondary sm:text-3xl lg:text-[40px] lg:leading-[1.2]">
              We design and handcraft export-quality decorative lighting — Wood Table Lamps, Wall Lamps, Floor Lamps, Pendant & Hanging Lamps with warmth, texture and a finish you can trust.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-500 sm:text-[15px]">
              From rustic Rope Hanging Lamps and Moroccan jaali patterns to minimal Pendants, handcrafted Wooden Table Lamps and statement Floor Lamps — plus our Wall &amp; Hanging Planter Stands with Pots — every piece is made in Moradabad with seasoned wood, metal and artisanal detail, wired for safe, warm glow and ready for homes, hospitality and export.
            </p>
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
                  Quick answers about Wood Table Lamps, Wall &amp; Floor Lamps, Pendant &amp; Hanging Lamps, custom finishes and how we work with new buyers.
                </p>
                <div className="mt-10 max-w-sm rounded-[24px] bg-[#f4f5f7] p-6">
                  <h3 className="text-lg font-bold text-secondary">Still have a question?</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Share finish, size, shade or quantity — we&apos;ll reply within one business day.
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
                src="/website-images/photo-1513506003901-1e6a229e2d15.jpg"
                alt="Warm living room lit by Gratus wood table and floor lamps"
                className="h-[380px] w-full object-cover sm:h-[440px]"
              />
              <div className="absolute inset-0 bg-[#091540]/55" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Light Up Your Space with Gratus
                </h2>
                <p className="mt-3 max-w-lg text-sm text-white/80 sm:text-base">
                  Explore Wood Table Lamps, Wall, Floor, Pendant, Moroccan &amp; Rope Hanging Lamps — custom finishes, warm glow and export-ready quality. Get a quote in 24h.
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
