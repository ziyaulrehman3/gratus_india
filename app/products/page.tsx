import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import { generatedProducts } from "./generated";
import ProductGrid from "./ProductGrid";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Gratus India's full lamp collection — Floor, Table & Hanging Lamps from list1-4. Height 48\", E-27 holder, Iron/Wood & Fabric, MOQ 24pcs.",
};

// All products from list1-4 — Sr No, Item Name, Image, Size, Material, Electric, Price, MOQ
// Images extracted to /public/list-images (list1-row*, list2-row*, list3-row*, list4-row*)
// Descriptions generated per product type
const categories = generatedProducts;

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#070d2e] via-[#0a1550] to-[#1B2CC1] py-14 sm:py-20">
        {/* premium backdrop */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_400px_at_85%_15%,rgba(118,146,255,0.18),transparent_65%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_320px_at_50%_100%,rgba(171,210,250,0.18),transparent_60%)]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.04]" />
        <div className="pointer-events-none absolute -top-20 -right-20 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-[560px] w-[560px] rounded-full bg-[#7692FF]/15 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1B2CC1]/10 blur-3xl" />
        {/* top shimmer line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ABD2FA]/30 to-transparent opacity-60 animate-shimmer" style={{ backgroundSize: "200% 100%" }} />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold tracking-[0.16em] text-white shadow-sm ring-1 ring-white/15 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            CATEGORIES
            <span className="h-3 w-px bg-white/15" />
            <span className="font-medium tracking-wide text-white/90">CUSTOM FABRICATION</span>
            <span className="hidden sm:inline-flex rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-[#091540]">IN STOCK</span>
          </div>
          <h1 className="animate-fadeInUp mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[52px] leading-[0.95] drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
            Our <span className="bg-gradient-to-r from-white via-[#ABD2FA] to-[#7692FF] bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="animate-fadeInUp delay-100 mt-4 max-w-2xl mx-auto text-[17px] leading-relaxed text-blue-100/90">
            Handcrafted <span className="font-semibold text-white">Floor, Table & Hanging Lamps</span> — wood, iron & fabric shades with <span className="font-semibold text-white">E-27 holder & 2-3m wire</span> — 158 designs, MOQ 24pcs.
          </p>
          <div className="animate-fadeIn delay-200 mt-7 flex flex-wrap justify-center gap-2">
            {["Floor Lamps","Table Lamps","Hanging Lights","Wood & Iron","E-27 Holder","158 Products"].map((t)=>(
              <span key={t} className="group rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15 backdrop-blur transition-all hover:bg-white hover:text-[#091540] hover:scale-105 hover:shadow-md cursor-default">{t}</span>
            ))}
          </div>
          <div className="animate-fadeIn delay-300 mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#1B2CC1] shadow-lg ring-1 ring-white/20 transition-all hover:bg-[#f6f8ff] hover:-translate-y-0.5 hover:shadow-xl">
              Get Quote <span>→</span>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition-all hover:bg-white/15 hover:-translate-y-0.5">
              Custom Specs • 24h Quote
            </Link>
          </div>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-slate-50/20 to-transparent" />
      </section>

      {/* Product Grid - Upgraded to match Home's item design: IN STOCK #01 / ITEM #01 / Get Quote */}
      <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_500px_at_20%_0%,rgba(118,146,255,0.08),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_380px_at_90%_20%,rgba(27,44,193,0.04),transparent_65%)]" />
        <div className="absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold tracking-widest text-primary ring-1 ring-gray-200 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  OUR PRODUCT RANGE
                  <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px]">CATEGORIES • IN STOCK</span>
                </div>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl leading-[0.95]">
                  Built for <span className="bg-gradient-to-r from-[#1B2CC1] via-[#4158f5] to-[#7692FF] bg-clip-text text-transparent">Every Industry</span>
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-gray-600">
                  Curated <span className="font-semibold text-secondary">lighting solutions</span> —{" "}
                  <span className="font-medium text-primary">hand-finished, warm glow</span>, hospitality-ready. Same premium card design as home, now with full catalogue.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Certified
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-200">In Stock</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-200">Safe Wiring • Ready</span>
                </div>
                <div className="mt-5 hidden h-1 w-24 rounded-full bg-gradient-to-r from-primary via-sky-400 to-[#7692FF] sm:block" />
              </div>
              <div className="shrink-0 flex flex-col items-start gap-2 lg:items-end">
                <Link href="/contact" className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#1B2CC1] px-6 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(27,44,193,0.18)] ring-1 ring-primary/20 transition-all hover:shadow-[0_12px_28px_rgba(27,44,193,0.22)] hover:-translate-y-0.5 hover:from-primary-dark hover:to-[#1B2CC1]">
                  Get Quote <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
                <span className="hidden lg:block text-xs font-medium tracking-wide text-gray-400">Custom specs • 24h Quote</span>
              </div>
            </div>
          </Reveal>

          <ProductGrid products={categories} />
        </div>
      </section>

      <section className="bg-slate-50 relative py-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_400px_at_20%_0%,rgba(118,146,255,0.06),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_320px_at_85%_100%,rgba(27,44,193,0.04),transparent_65%)]" />
        <div className="absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { t: "Hand-finished Quality", d: "Seasoned wood, jaali & fabric shades hand-finished for even texture and a warm, consistent glow.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { t: "Safety Tested", d: "Every lamp is wiring & finish checked for safe operation and lasting build before secure packing.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { t: "Pan-India Delivery", d: "Loved by homes, cafés & hotels — secure packing and on-time dispatch across India, hospitality-ready.", icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" },
            ].map((c,i)=>(
              <Reveal key={c.t} delay={i*100}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[22px] bg-gradient-to-br from-white via-white to-primary/[0.06] p-[1.5px] shadow-sm hover:shadow-[0_16px_40px_rgba(27,44,193,0.10)] hover:-translate-y-1 transition-all duration-300">
                  <div className="flex h-full flex-col rounded-[20px] bg-white p-7 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-sky-100 text-primary ring-1 ring-primary/10 shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={c.icon} /></svg>
                    </div>
                    <h3 className="mt-4 text-base font-bold tracking-tight text-secondary group-hover:text-primary transition">{c.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{c.d}</p>
                    <div className="mt-5 h-1 w-0 bg-gradient-to-r from-primary via-sky-400 to-[#7692FF] rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#091540] via-[#0f1f7a] to-[#1B2CC1] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_85%_100%,rgba(118,146,255,0.15),transparent_65%)]" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-[#7692FF]/15 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold tracking-[0.14em] text-white ring-1 ring-white/15 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300 animate-pulse" /> CUSTOM LIGHTING
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-[0.95]">
              Looking for a <span className="bg-gradient-to-r from-white via-[#ABD2FA] to-[#7692FF] bg-clip-text text-transparent">Custom Lamp</span>?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[17px] leading-relaxed text-white/85">
              We handcraft lighting to your finish — share <span className="font-semibold text-white">size, wood finish, shade fabric & qty</span> — we’ll quote in 24h, packed with care.
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2 text-[11px] font-semibold text-white/70">
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">Wood • Metal • Fabric</span>
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">Pendant • Floor • Wall • Hanging</span>
            </div>
            <Link href="/contact" className="btn-shine group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold tracking-wide text-[#1B2CC1] shadow-[0_12px_32px_rgba(0,0,0,0.18)] ring-1 ring-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-[#f6f8ff]">
              Request Custom Lamp Quote <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <div className="mt-4 text-xs font-medium tracking-wide text-white/60">Hand-finished in Moradabad • Secure packing • Since 1995</div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
