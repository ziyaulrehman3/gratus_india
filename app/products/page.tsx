import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Gratus India's comprehensive range of steel products - pipes, tubes, wire products, sheets, coils, fasteners, and more.",
};

const categories = [
  { name: "Steel Pipes & Tubes", description: "High-quality seamless and ERW pipes and tubes for construction, oil & gas, water supply, and general engineering applications.", items: ["Seamless Steel Pipes","ERW Steel Pipes","Galvanized Pipes","Stainless Steel Tubes","Square & Rectangular Tubes","Precision Tubes"], specs: "Size: 1/2\" to 48\" | Grades: A106, A53, A333, 304, 316" },
  { name: "Steel Wire Products", description: "Comprehensive range of steel wire products for construction, agriculture, fencing, and industrial binding applications.", items: ["Galvanized Iron Wire","Binding Wire","Barbed Wire","Chain Link Fencing","Wire Mesh & Netting","Spring Steel Wire"], specs: "Gauge: 8 to 24 SWG | Coating: HDG, PVC, Electro-plated" },
  { name: "Steel Sheets & Coils", description: "Hot-rolled, cold-rolled, and galvanized steel sheets and coils for roofing, cladding, fabrication, and automotive applications.", items: ["Hot Rolled Sheets","Cold Rolled Sheets","Galvanized Sheets","Galvanized Coils","Color Coated Sheets","Chequered Plates"], specs: "Thickness: 0.3mm to 25mm | Width: Up to 2000mm" },
  { name: "Steel Fasteners", description: "High-strength industrial fasteners including bolts, nuts, screws, and custom fastener solutions for structural and mechanical applications.", items: ["Hex Bolts & Nuts","Anchor Bolts","High Tensile Fasteners","Stainless Steel Screws","Threaded Rods","Custom Fasteners"], specs: "Grades: 4.6, 8.8, 10.9, 12.9 | Standards: DIN, ASTM" },
  { name: "Steel Angles & Sections", description: "Structural steel angles, channels, beams, and custom sections for construction, infrastructure, and engineering projects.", items: ["Equal Angles","Unequal Angles","C-Channels","I-Beams","T-Bars","Flat Bars"], specs: "Sizes: 20mm to 200mm | Grades: E250, E300, E350" },
  { name: "Specialty Products", description: "Custom-engineered steel solutions including processed steel, surface-treated products, and application-specific manufacturing.", items: ["Steel Cut-to-Size","Surface Treated Steel","Pre-painted Steel","Steel Ladders & Gratings","Custom Fabrication","Steel Furniture Components"], specs: "As per customer specifications | MOQ applicable" },
];

export default function ProductsPage() {
  return (
    <>
      <section className="hero-gradient animate-gradient relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="pointer-events-none absolute -top-10 -right-10 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-sky-200/10 blur-3xl animate-float-slow" />
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-bold tracking-widest text-white">6 CATEGORIES • CUSTOM FABRICATION</div>
          <h1 className="animate-fadeInUp mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Our Products</h1>
          <p className="animate-fadeInUp delay-100 mt-4 max-w-2xl mx-auto text-[17px] leading-relaxed text-blue-100">Comprehensive range of premium steel products manufactured to international quality standards — ready to export.</p>
          <div className="animate-fadeIn delay-200 mt-6 flex flex-wrap justify-center gap-2">
            {["Pipes & Tubes","Wire Products","Sheets & Coils","Fasteners","Angles & Sections","Specialty"].map((t)=>(
              <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid - Upgraded to match Home's item design: IN STOCK #01 / ITEM #01 / Get Quote */}
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
                  <span className="hidden sm:inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[10px]">6 CATEGORIES • IN STOCK</span>
                </div>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">Built for Every Industry</h2>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-gray-600">Comprehensive steel solutions — precision engineered, globally certified. Same premium card design as home, now with full catalogue.</p>
                <div className="section-divider mt-4 w-20 hidden sm:block" />
              </div>
              <Link href="/contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-primary-dark transition">
                Get Quote <span>→</span>
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, i) => {
              const itemId = String(i + 1).padStart(2, "0");
              const images = ["/globe.svg", "/file.svg", "/window.svg", "/file.svg", "/window.svg", "/globe.svg"];
              const image = images[i % images.length];
              return (
                <Reveal key={category.name} delay={i * 80}>
                  <TiltCard className="h-full">
                    <div className="spotlight-card group flex h-full flex-col overflow-hidden rounded-[20px] bg-white p-[1.5px] shadow-sm">
                      <div className="flex h-full flex-col overflow-hidden rounded-[18px] bg-white">
                        <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-white">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-periwinkle/0 to-sky/0 opacity-0 transition duration-500 group-hover:from-primary/[0.06] group-hover:via-periwinkle/10 group-hover:to-sky/10 group-hover:opacity-100" />
                          <img src={image} alt={category.name} className="h-20 w-20 opacity-60 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-90 group-hover:scale-110 group-hover:rotate-1" />
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
                          <h3 className="mt-2 text-[15px] font-bold tracking-tight text-secondary transition-colors group-hover:text-primary">{category.name}</h3>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-gray-600">{category.description}</p>
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
        </div>
      </section>

      <section className="bg-slate-50 relative py-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { t: "Certified Quality", d: "Certified quality management system ensuring consistent product quality.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { t: "Lab Tested", d: "Every batch tested in our in-house metallurgical laboratory for assurance.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
              { t: "Global Export", d: "Products exported to 50+ countries with certifications and documentation.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            ].map((c,i)=>(
              <Reveal key={c.t} delay={i*100}>
                <div className="card-lift rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100 group">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110"><svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={c.icon} /></svg></div>
                  <h3 className="mt-4 text-base font-bold tracking-tight text-secondary">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/40 to-sky-500/10" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold tracking-widest text-white ring-1 ring-white/15">CUSTOM FABRICATION</div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white">Can&apos;t Find What You Need?</h2>
            <p className="mt-3 text-lg text-white/85">We specialize in custom steel solutions. Share your drawings & specs — we&apos;ll quote in 24h.</p>
            <Link href="/contact" className="btn-shine mt-8 inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-bold tracking-wide text-primary shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">Request Custom Quote <span className="ml-2">→</span></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
