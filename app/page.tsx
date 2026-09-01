import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "./components/Reveal";
import Counter from "./components/Counter";
import TiltCard from "./components/TiltCard";
import Marquee from "./components/Marquee";
import TextReveal from "./components/TextReveal";
import FeedbackCarousel from "./components/FeedbackCarousel";
import { generatedProducts } from "./products/generated";
import HomeProductGrid from "./components/HomeProductGrid";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Gratus India - Handcrafting warm decorative lighting in Moradabad since 1995. Wood Table Lamps, Wall, Floor, Pendant, Moroccan & Rope Hanging Lamps and Planter Stands for homes & hospitality.",
};

const stats = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Product Variants" },
  { value: 10, suffix: "K+", label: "Products Delivered" },
  { value: 500, suffix: "+", label: "Happy Clients" },
];

const features = [
  {
    title: "Hand-finished Craftsmanship",
    description: "Seasoned wood, jaali & fabric shades hand-finished for even texture and a warm, consistent glow — Made in Moradabad since 1995.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
  {
    title: "Warm Glow & Safety",
    description: "Soft fabric shades with E-27 holder, 3m wire, ON/OFF switch & 2-pin plug — wiring & finish checked for safe, warm light.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4zm0 10a6 6 0 00-6 6v2h12v-2a6 6 0 00-6-6z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 21h6" /></svg>
    ),
  },
  {
    title: "Custom Shades & Sizes",
    description: "Tailored to your spec — size, wood finish, shade fabric & qty. Share your moodboard, we’ll craft it and quote in 24h.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V8a2 2 0 012-2h10a2 2 0 012 2v1" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7l2.5 2.5L12 12 9.5 9.5 12 7z" /></svg>
    ),
  },
  {
    title: "Factory-Direct Value",
    description: "Direct Moradabad workshop advantage — fair pricing, secure packing and on-time dispatch without compromising glow.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12h10" /></svg>
    ),
  },
];

const products = generatedProducts.slice(-4).reverse().map((p, idx) => ({
  id: String(idx + 1).padStart(2, "0"),
  sr: p.sr,
  name: p.name,
  variant: p.variant,
  description: p.description,
  image: p.image,
  specs: p.specs,
  price: p.price,
  moq: p.moq,
}));

export default function Home() {
  return (
    <>
      {/* Hero - LIGHT THEME */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f6f8ff] to-[#eef2ff]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_20%_0%,rgba(27,44,193,0.07),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_380px_at_90%_15%,rgba(118,146,255,0.12),transparent_65%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_100%,rgba(171,210,250,0.25),transparent_60%)]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        {/* decorative blobs - light */}
        <div className="pointer-events-none absolute -top-28 -right-28 h-[520px] w-[520px] rounded-full bg-[#1B2CC1]/5 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-[560px] w-[560px] rounded-full bg-[#7692FF]/10 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl">
              <div className="animate-fadeInUp inline-flex items-center gap-2.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold tracking-wide text-secondary shadow-sm ring-1 ring-gray-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Trusted by 500+ homes • 25+ Years Crafted in Moradabad
              </div>

              <h1 className="animate-fadeInUp delay-100 mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[56px] leading-[0.95]">
                <span className="block text-secondary">Warm Handcrafted</span>
                <span className="block bg-gradient-to-r from-[#1B2CC1] via-[#4158f5] to-[#7692FF] bg-clip-text text-transparent pb-1">Lighting Solutions</span>
              </h1>

              <p className="animate-fadeInUp delay-200 mt-5 max-w-xl text-[17px] leading-relaxed text-gray-600">
                Gratus India handcrafts warm decorative lighting — <span className="font-semibold text-secondary">Wood Table Lamps</span>, Wall & Floor Lamps, Pendant, Moroccan & Rope Hanging Lamps and Planter Stands — made in Moradabad since 1995 for homes, cafés & hospitality.
              </p>

              <div className="animate-fadeInUp delay-300 mt-8 flex flex-col gap-3.5 sm:flex-row">
                <Link
                  href="/products"
                  className="btn-shine group inline-flex items-center justify-center rounded-full bg-[#091540] px-7 py-3.5 text-[15px] font-bold tracking-wide text-white shadow-xl shadow-[#091540]/15 transition-all duration-300 hover:bg-[#0f1e6e] hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
                >
                  View Products
                  <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-7 py-3.5 text-[15px] font-semibold text-secondary shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:bg-secondary hover:text-white hover:border-secondary hover:-translate-y-0.5"
                >
                  <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white shadow-sm ring-1 ring-black/5 group-hover:bg-white group-hover:text-secondary group-hover:shadow-md transition-all">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </span>
                  Get a Quote
                </Link>
              </div>

              <div className="animate-fadeIn delay-500 mt-8 flex items-center gap-6 border-t border-gray-200 pt-6">
                <div className="flex -space-x-2">
                  {[11,12,13,14].map((id) => (
                    <img
                      key={id}
                      src={`/website-images/pravatar-${id}.jpg`}
                      alt="Client"
                      className="h-8 w-8 rounded-full object-cover ring-2 ring-white shadow-sm"
                      loading="lazy"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex items-center gap-1 font-semibold text-secondary">
                    <span className="flex items-center gap-0.5 text-amber-400">★★★★★</span> 4.9/5
                  </div>
                  <span className="text-xs text-gray-500">from 1,200+ reviews</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-gray-600 ml-auto">
                  <span className="h-px w-6 bg-primary/20" /> Hand-finished • Warm Glow
                </div>
              </div>
            </div>

            {/* Hero visual — now visible on small screens */}
            <div className="relative mt-8 lg:mt-0">
              <div className="animate-float-slow relative mx-auto aspect-[4.4/3.4] w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[560px]">
                {/* main card */}
                <div className="absolute inset-0 rounded-[28px] bg-white p-3 shadow-[0_32px_80px_rgba(13,38,80,0.35)]">
                  <div className="flex h-full flex-col overflow-hidden rounded-[20px] bg-gradient-to-br from-slate-50 to-white">
                    <div className="relative flex-1 overflow-hidden bg-slate-900">
                      <img
                        src="/website-images/photo-1524758631624-e2822e304c36.jpg"
                        alt="Gratus lamp collection warm glow"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-primary/20" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-slate-900/60" />
                      <div className="absolute inset-0 grid-pattern opacity-10" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-white ring-1 ring-white/15">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Production • Moradabad (UP)
                        </div>
                        <div className="mt-3 text-xl font-bold text-white drop-shadow">Warm Glow, Handcrafted Trust</div>
                        <div className="text-xs text-white/80">5 Signature Collections • 500+ Clients</div>
                      </div>
                      {/* floating icon */}
                      <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary shadow-lg animate-float">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 divide-x divide-gray-100 bg-white p-2 text-center">
                      {[
                        { k: "25+", l: "Years" },
                        { k: "50+", l: "Countries" },
                        { k: "Quality", l: "Assured" },
                      ].map((s)=>(
                        <div key={s.l} className="py-2">
                          <div className="text-sm font-extrabold text-secondary">{s.k}</div>
                          <div className="text-[11px] tracking-wide text-gray-500">{s.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* floating badges — now with images, visible on mobile */}
                <div className="animate-float absolute left-1 sm:-left-8 top-2 sm:top-10 flex items-center gap-2 sm:gap-3 rounded-2xl bg-white px-3 py-2.5 sm:px-3 sm:py-3 shadow-xl ring-1 ring-black/5">
                  <img
                    src="/website-images/photo-1507473885765-e6ed057f782c.jpg"
                    alt="Hand-finished wood table lamp"
                    className="h-10 w-10 rounded-xl object-cover shadow-sm ring-1 ring-black/5"
                  />
                  <div>
                    <div className="text-xs font-bold text-secondary">Hand-finished</div>
                    <div className="text-[11px] text-emerald-600 font-semibold">Since 1995 • Moradabad</div>
                  </div>
                </div>
                <div className="animate-float-slow absolute right-1 sm:-right-6 bottom-2 sm:bottom-6 flex items-center gap-2 sm:gap-3 rounded-2xl bg-secondary px-3 py-2.5 sm:px-3 sm:py-3 shadow-xl text-white ring-1 ring-white/10">
                  <img
                    src="/website-images/photo-1513506003901-1e6a229e2d15.jpg"
                    alt="Warm glow pendant lamp"
                    className="h-10 w-10 rounded-xl object-cover shadow-sm ring-1 ring-white/20"
                  />
                  <div>
                    <div className="text-xs font-bold">Warm Glow</div>
                    <div className="text-[11px] text-primary-light">Safe Wiring • Handcrafted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#eef2ff] to-transparent" />
      </section>

      {/* Marquee */}
      <Marquee items={["Export-Quality Standards", "25+ Years Manufacturing", "500+ Happy Clients", "100K+ Tons Capacity", "Precision Engineering"]} speed="30s" />

      {/* Stats */}
      <section className="bg-secondary relative overflow-hidden py-10 sm:py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
        <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 90}>
                <div className="text-center group px-2">
                  <div className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl transition-transform duration-300 group-hover:scale-105">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1.5 text-xs font-medium tracking-widest uppercase text-steel-light">{stat.label}</div>
                  <div className="mx-auto mt-3 h-0.5 w-8 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-12 transition-all duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Upgraded : modern, smooth, standout */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f6f8ff] to-white py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_15%_0%,rgba(118,146,255,0.10),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_380px_at_90%_20%,rgba(27,44,193,0.06),transparent_65%)]" />
        <div className="absolute -top-28 right-0 h-[420px] w-[420px] rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[380px] w-[380px] rounded-full bg-sky-300/10 blur-3xl" />
        <div className="absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold tracking-widest text-primary ring-1 ring-gray-200 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                WHY GRATUS INDIA
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px]">HAND-FINISHED • WARM GLOW</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl lg:text-[38px] leading-[0.95]">
                <TextReveal text="Why Choose Gratus India ?" />
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-gray-600">
                Trusted by <span className="font-semibold text-secondary">homes, cafés & hospitality</span> for warm decorative lighting — <span className="font-medium text-primary">hand-finished in Moradabad since 1995</span>.
              </p>
              <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-[#7692FF] to-[#ABD2FA]" />
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 90}>
                <TiltCard className="h-full">
                  <div className="spotlight-card group relative flex h-full flex-col overflow-hidden rounded-[22px] bg-gradient-to-br from-white via-white to-primary/[0.06] p-[1.5px] shadow-sm hover:shadow-[0_16px_40px_rgba(27,44,193,0.10)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex h-full flex-col rounded-[20px] bg-white p-6">
                      <div className="flex items-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/12 via-periwinkle/15 to-sky/25 text-primary ring-1 ring-primary/10 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-lg group-hover:shadow-primary/20">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="mt-5 text-[16px] font-bold tracking-tight text-secondary transition-colors group-hover:text-primary">{feature.title}</h3>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-gray-600">{feature.description}</p>
                      <div className="mt-auto pt-6">
                        <div className="h-1 w-0 bg-gradient-to-r from-primary via-periwinkle to-sky rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
              <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#1B2CC1] px-7 py-3 text-white shadow-[0_8px_20px_rgba(27,44,193,0.18)] ring-1 ring-primary/20 transition-all hover:shadow-[0_12px_28px_rgba(27,44,193,0.22)] hover:-translate-y-0.5">
                Get a quote <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Products - Upgraded modern smooth */}
      <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_500px_at_20%_0%,rgba(118,146,255,0.08),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_380px_at_90%_20%,rgba(27,44,193,0.04),transparent_65%)]" />
        <div className="absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-bold tracking-widest text-primary ring-1 ring-gray-200 shadow-sm">
                  OUR PRODUCT RANGE
                  <span className="hidden sm:inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[10px]">4 FEATURED • IN STOCK</span>
                </div>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">Built for Every Industry</h2>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-gray-600">Comprehensive steel solutions — precision engineered, manufactured to export-quality standards.</p>
                <div className="section-divider mt-4 w-20 hidden sm:block" />
              </div>
              <Link href="/products" className="hidden md:inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary ring-1 ring-gray-200 shadow-sm transition-all hover:bg-primary hover:text-white hover:ring-primary">
                View all products <span>→</span>
              </Link>
            </div>
          </Reveal>

          <HomeProductGrid products={products} />

          <Reveal delay={200}>
            <div className="mt-10 flex justify-center">
              <Link href="/products" className="btn-shine inline-flex items-center rounded-full bg-secondary px-8 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-secondary/20 transition-all duration-300 hover:bg-secondary/95 hover:shadow-xl hover:-translate-y-0.5">
                View All Products
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonial / trust - Upgraded modern smooth standout, keep feedback */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f6f8ff] via-white to-[#f6f8ff] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_20%_0%,rgba(118,146,255,0.08),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_380px_at_90%_100%,rgba(27,44,193,0.05),transparent_65%)]" />
        <div className="absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/12 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-bold tracking-widest text-primary ring-1 ring-gray-200 shadow-sm">
                <span className="flex items-center gap-0.5 text-amber-400">★★★★★</span> CLIENT FEEDBACK
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 ring-1 ring-emerald-200">4.9/5 • 1,200+ reviews</span>
              </div>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl lg:text-[32px]">
                What our <span className="bg-gradient-to-r from-[#1B2CC1] via-[#4158f5] to-[#7692FF] bg-clip-text text-transparent">partners say</span>
              </h2>
              <p className="mt-2 text-sm font-medium tracking-wide text-gray-500">Trusted for precision manufacturing • Verified • 5.0 average</p>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-[#7692FF]" />
            </div>
          </Reveal>

          <div className="mt-10">
            <Reveal>
              <FeedbackCarousel />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/50 via-primary to-sky-500/20" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl animate-float-slow" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-bold tracking-widest text-white ring-1 ring-white/15">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" /> LET&apos;S BUILD TOGETHER
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[40px]">Ready to Discuss Your Requirements?</h2>
              <p className="mt-4 text-[17px] leading-relaxed text-white/85">Get a custom quote within 24 hours. Our engineers will help you pick the right spec.</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                <Link href="/contact" className="btn-shine inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-white px-8 py-4 text-[15px] font-bold tracking-wide text-primary shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  Contact Us Today <span className="ml-2">→</span>
                </Link>
                <a href="tel:+919927683415" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-8 py-4 text-[15px] font-semibold text-white ring-1 ring-white/10 transition-all duration-300 hover:border-white hover:bg-white/15 hover:-translate-y-0.5">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +91 9927683415
                </a>
                <a href="tel:+918791737818" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-primary shadow-lg transition-all hover:bg-gray-50 hover:-translate-y-0.5">
                  +91 8791737818
                </a>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2 text-[11px] font-semibold tracking-wide text-white/70">
                <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">No obligation quote</span>
                <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Quality docs included</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
