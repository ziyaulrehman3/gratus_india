import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "./components/Reveal";
import Counter from "./components/Counter";
import TiltCard from "./components/TiltCard";
import Marquee from "./components/Marquee";
import TextReveal from "./components/TextReveal";
import FeedbackCarousel from "./components/FeedbackCarousel";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Gratus India - Leading manufacturer and exporter of premium steel products, wire items, and industrial solutions.",
};

const stats = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Countries Served" },
  { value: 10, suffix: "K+", label: "Products Delivered" },
  { value: 500, suffix: "+", label: "Happy Clients" },
];

const features = [
  {
    title: "Quality Manufacturing",
    description: "State-of-the-art facilities ensuring the highest quality standards through rigorous testing.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
  {
    title: "Global Export",
    description: "Trusted export partner serving clients across 50+ countries with reliable logistics and timely delivery.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: "Custom Solutions",
    description: "Tailored steel products designed and manufactured to meet your specific industrial requirements.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
  },
  {
    title: "Competitive Pricing",
    description: "Direct manufacturer advantage with competitive pricing without compromising on quality or timelines.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
];

const products = [
  { id: "01", name: "Steel Pipes & Tubes", description: "Seamless and ERW pipes for construction, oil & gas, and industrial applications.", image: "/globe.svg" },
  { id: "02", name: "Steel Wire Products", description: "Galvanized wire, binding wire, barbed wire, and custom wire solutions.", image: "/file.svg" },
  { id: "03", name: "Steel Sheets & Coils", description: "Hot-rolled, cold-rolled, and galvanized steel sheets and coils.", image: "/window.svg" },
  { id: "04", name: "Steel Fasteners", description: "High-strength bolts, nuts, screws, and custom fastener solutions.", image: "/file.svg" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient animate-gradient relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.18]" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-transparent to-secondary/20" />
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-28 -right-28 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-[560px] w-[560px] rounded-full bg-sky-300/10 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl">
              <div className="animate-fadeInUp inline-flex items-center gap-2.5 rounded-full glass px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Trusted by 500+ clients in 50+ countries
              </div>

              <h1 className="animate-fadeInUp delay-100 mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[56px] leading-[0.95]">
                <span className="block">Premium Steel</span>
                <span className="block bg-gradient-to-r from-sky-200 via-white to-sky-100 bg-clip-text text-transparent pb-1">Manufacturing & Export</span>
              </h1>

              <p className="animate-fadeInUp delay-200 mt-5 max-w-xl text-[17px] leading-relaxed text-blue-50/90">
                Gratus India is a trusted name in steel manufacturing and export, delivering high-quality steel products and wire solutions to clients across the globe for over 25 years.
              </p>

              <div className="animate-fadeInUp delay-300 mt-8 flex flex-col gap-3.5 sm:flex-row">
                <Link
                  href="/products"
                  className="btn-shine group inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[15px] font-bold tracking-wide text-primary shadow-xl shadow-blue-900/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
                >
                  View Products
                  <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:bg-white hover:text-primary hover:border-white hover:-translate-y-0.5"
                >
                  <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 group-hover:bg-primary/10 transition">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132a1 1 0 00-1.506 1.13l1.11 3.57-1.11 3.57a1 1 0 001.506 1.13l3.197-2.132a1 1 0 000-1.668z" /></svg>
                  </span>
                  Get a Quote
                </Link>
              </div>

              <div className="animate-fadeIn delay-500 mt-8 flex items-center gap-6 border-t border-white/10 pt-6">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i)=>(
                    <span key={i} className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[11px] font-bold text-secondary ring-2 ring-white/20">{String.fromCharCode(64+i)}</span>
                  ))}
                </div>
                <div className="text-sm text-blue-100">
                  <div className="flex items-center gap-1 font-semibold text-white">
                    <span className="flex items-center gap-0.5 text-amber-300">★★★★★</span> 4.9/5
                  </div>
                  <span className="text-xs text-blue-200">from 1,200+ reviews</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-blue-100 ml-auto">
                  <span className="h-px w-6 bg-white/20" /> Export Ready • On-time Delivery
                </div>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative hidden lg:block">
              <div className="animate-float-slow relative mx-auto aspect-[4.4/3.4] w-full max-w-[560px]">
                {/* main card */}
                <div className="absolute inset-0 rounded-[28px] bg-white p-3 shadow-[0_32px_80px_rgba(13,38,80,0.35)]">
                  <div className="flex h-full flex-col overflow-hidden rounded-[20px] bg-gradient-to-br from-slate-50 to-white">
                    <div className="relative flex-1 overflow-hidden bg-slate-900">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-blue-600/20 to-slate-900" />
                      <div className="absolute inset-0 grid-pattern opacity-10" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-white ring-1 ring-white/15">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Production • Moradabad (UP)
                        </div>
                        <div className="mt-3 text-xl font-bold text-white">Steel Precision, Global Trust</div>
                        <div className="text-xs text-white/70">Capacity 100K+ tons • 500+ Team</div>
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
                {/* floating badges */}
                <div className="animate-float absolute -left-8 top-10 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
                  <div className="text-xs font-bold text-secondary">On-Time Delivery</div>
                  <div className="text-[11px] text-emerald-600 font-semibold">99.2% • 2024</div>
                </div>
                <div className="animate-float-slow absolute -right-6 bottom-6 rounded-2xl bg-secondary px-4 py-3 shadow-xl text-white">
                  <div className="text-xs font-bold">Export Quality</div>
                  <div className="text-[11px] text-primary-light">Lab Tested • Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-secondary/40 to-transparent" />
      </section>

      {/* Marquee */}
      <Marquee items={["Export to 50+ Countries", "25+ Years Excellence", "500+ Happy Clients", "100K+ Tons Capacity", "Global Logistics"]} speed="30s" />

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
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-bold tracking-widest text-primary ring-1 ring-gray-200 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                WHY GRATUS INDIA
                <span className="ml-1 hidden sm:inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold tracking-widest">TRUSTED • 50+ COUNTRIES</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl lg:text-[38px]">
                <TextReveal text="Why Choose Gratus India ?" />
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15.5px] leading-relaxed text-gray-600">
                Trusted by industries worldwide for quality steel solutions and dependable export operations — precision made, export ready.
              </p>
              <div className="section-divider mx-auto mt-6 w-28" />
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 90}>
                <TiltCard className="h-full">
                  <div className="spotlight-card group relative flex h-full flex-col overflow-hidden rounded-[20px] bg-white p-[1.5px] shadow-sm">
                    <div className="flex h-full flex-col rounded-[18px] bg-white p-6">
                      <div className="flex items-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/12 via-periwinkle/15 to-sky/25 text-primary ring-1 ring-primary/10 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-primary group-hover:text-white group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-lg group-hover:shadow-primary/20">
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
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-secondary ring-1 ring-gray-200">Lab Tested • Export Ready</span>
              <Link href="/contact" className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-white shadow hover:bg-primary-dark transition">Get a quote →</Link>
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
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-gray-600">Comprehensive steel solutions — precision engineered, globally certified. Item-wise catalogue ready for export.</p>
                <div className="section-divider mt-4 w-20 hidden sm:block" />
              </div>
              <Link href="/products" className="hidden md:inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary ring-1 ring-gray-200 shadow-sm transition-all hover:bg-primary hover:text-white hover:ring-primary">
                View all products <span>→</span>
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, i) => {
              const itemId = product.id;
              return (
                <Reveal key={product.name} delay={i * 90}>
                  <TiltCard className="h-full">
                    <div className="spotlight-card group flex h-full flex-col overflow-hidden rounded-[20px] bg-white p-[1.5px] shadow-sm">
                      <div className="flex h-full flex-col overflow-hidden rounded-[18px] bg-white">
                        <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-white">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-periwinkle/0 to-sky/0 opacity-0 transition duration-500 group-hover:from-primary/[0.06] group-hover:via-periwinkle/10 group-hover:to-sky/10 group-hover:opacity-100" />
                          <img src={product.image} alt={product.name} className="h-20 w-20 opacity-60 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-90 group-hover:scale-110 group-hover:rotate-1" />
                          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[10px] font-bold tracking-widest text-white shadow-sm">IN STOCK</span>
                          <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-secondary shadow-md ring-1 ring-gray-100 opacity-0 translate-y-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          </span>
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-steel-gray/60">
                            <span className="h-px w-4 bg-primary/30" /> ITEM #{itemId}
                          </div>
                          <h3 className="mt-2 text-[15px] font-bold tracking-tight text-secondary transition-colors group-hover:text-primary">{product.name}</h3>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-gray-600">{product.description}</p>
                          <div className="mt-auto pt-4">
                            <Link href="/contact" className="inline-flex items-center justify-center gap-1.5 self-start rounded-full bg-primary px-4 py-2 text-xs font-bold tracking-wide text-white shadow-sm ring-1 ring-primary/10 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-primary-dark hover:shadow-md hover:-translate-y-0.5 active:translate-y-0">
                            Get Quote <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" /></svg>
                          </Link>
                          </div>
                        </div>
                        <div className="h-1 w-0 bg-gradient-to-r from-primary via-periwinkle to-sky transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>

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
                <span className="text-amber-400">★★★★★</span> CLIENT FEEDBACK
              </div>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl">What our partners say</h2>
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
                <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Export docs included</span>
                <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Lab test reports</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
