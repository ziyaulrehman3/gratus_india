import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import TiltCard from "../components/TiltCard";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Gratus India - 25+ years of excellence in steel manufacturing and export, serving 50+ countries worldwide.",
};

const timeline = [
  { year: "1995", title: "Founded", description: "Gratus India was established with a vision to deliver quality steel products." },
  { year: "2002", title: "Quality Certification", description: "Achieved certified quality management systems ensuring consistent standards." },
  { year: "2010", title: "Global Expansion", description: "Expanded export operations to 30+ countries across Asia, Europe, and Africa." },
  { year: "2015", title: "Modern Facility", description: "Commissioned state-of-the-art manufacturing plant with automated production lines." },
  { year: "2020", title: "Green Initiative", description: "Adopted sustainable manufacturing practices and renewable energy solutions." },
  { year: "2024", title: "50+ Countries", description: "Serving clients in over 50 countries with 500+ satisfied customers." },
];

const values = [
  { title: "Quality First", description: "We never compromise on the quality of our products. Every item undergoes rigorous quality checks." },
  { title: "Customer Focus", description: "Our customers are at the heart of everything we do. We build lasting relationships based on trust." },
  { title: "Innovation", description: "We continuously invest in modern technology and processes to stay ahead in the industry." },
  { title: "Sustainability", description: "We are committed to environmentally responsible manufacturing practices." },
  { title: "Integrity", description: "Transparent business practices and ethical operations define who we are." },
  { title: "Excellence", description: "We strive for excellence in every aspect of our operations, from production to delivery." },
];

export default function AboutPage() {
  return (
    <>

      {/* Our Story - modernized, hint from contact's left sticky + card blur */}
      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_400px_at_10%_0%,rgba(118,146,255,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-widest text-primary">OUR STORY</div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">Built on Steel. Driven by Trust.</h2>
              <div className="section-divider mt-4 w-16" />
              <p className="mt-6 leading-relaxed text-[15px] text-gray-600">Gratus India was founded in 1995 with a clear vision: to become a globally trusted name in steel manufacturing and export. Starting as a small manufacturing unit at Rampur Doraha, Moradabad (UP), we have grown into one of India&apos;s leading steel product manufacturers, serving clients across 50+ countries.</p>
              <p className="mt-4 leading-relaxed text-[15px] text-gray-600">Our journey has been defined by an unwavering commitment to quality, continuous innovation, and deep respect for our customers. We specialize in manufacturing a wide range of steel products including pipes, tubes, wire products, sheets, coils, and fasteners that meet international quality standards.</p>
              <p className="mt-4 leading-relaxed text-[15px] text-gray-600">Today, with a team of over 500 skilled professionals and a modern manufacturing facility equipped with the latest technology, we continue to push the boundaries of what&apos;s possible in steel manufacturing.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-secondary ring-1 ring-gray-200">Kashipur Road • Moradabad</span>
                <span className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-secondary ring-1 ring-gray-200">100K+ tons capacity</span>
                <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary ring-1 ring-primary/10">Since 1995</span>
              </div>
              <div className="mt-6 flex gap-3">
                <Link href="/products" className="inline-flex items-center rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-secondary/90 transition">View Products →</Link>
                <Link href="/contact" className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-secondary ring-1 ring-gray-200 hover:bg-slate-50 transition">Talk to us</Link>
              </div>
            </Reveal>

            <Reveal delay={120} direction="scale">
              <div className="relative">
                {/* gradient blur like contact form card */}
                <div className="pointer-events-none absolute -inset-2 rounded-[28px] bg-gradient-to-br from-primary/20 via-periwinkle/15 to-sky/20 opacity-60 blur-xl" />
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { v: 25, s: "+", l: "Years in Business", sub: "Since 1995" },
                      { v: 500, s: "+", l: "Team Members", sub: "Skilled workforce" },
                      { v: 50, s: "+", l: "Countries Served", sub: "Global export" },
                      { v: 100, s: "K+", l: "Tons Capacity", sub: "Annual output" },
                    ].map((s, i) => (
                      <TiltCard key={s.l}>
                        <div style={{ animationDelay: `${i * 80}ms` }} className="group card-lift spotlight-card rounded-2xl p-6 text-center shadow-sm animate-fadeInUp">
                          <div className="text-3xl font-extrabold tracking-tight text-primary"><Counter value={s.v} suffix={s.s} /></div>
                          <div className="mt-1 text-sm font-semibold text-secondary">{s.l}</div>
                          <div className="text-xs text-gray-500">{s.sub}</div>
                          <div className="mx-auto mt-3 h-0.5 w-0 bg-gradient-to-r from-primary to-sky-400 rounded-full transition-all duration-500 group-hover:w-8" />
                        </div>
                      </TiltCard>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-4 rounded-2xl bg-gradient-to-br from-slate-900 via-secondary to-primary p-5 text-white shadow-lg ring-1 ring-white/10">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary shadow">★</span>
                    <div>
                      <div className="text-sm font-bold">Lab Tested • Certified Quality</div>
                      <div className="text-xs text-white/70">Every batch verified in-house • Export docs ready</div>
                    </div>
                    <span className="ml-auto hidden sm:inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10">✓</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline - modern, smooth, with pulse glow */}
      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_0%,rgba(27,44,193,0.06),transparent_60%)]" />
        <div className="absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold tracking-widest text-primary ring-1 ring-gray-200 shadow-sm">OUR JOURNEY</div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">Milestones that shaped us</h2>
              <p className="mx-auto mt-3 max-w-2xl text-[15px] text-gray-600">From a local workshop to a global export house — each step built on quality and trust.</p>
              <div className="section-divider mx-auto mt-4 w-24" />
            </div>
          </Reveal>

          <div className="mt-12 relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/25 via-primary/12 to-transparent md:block" />
            <div className="space-y-6 md:space-y-8">
              {timeline.map((item, index) => (
                <Reveal key={item.year} delay={index * 70} direction={index % 2 === 0 ? "left" : "right"}>
                  <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? "" : "md:flex-row-reverse"} items-stretch gap-4`}>
                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <TiltCard>
                        <div className="spotlight-card card-lift text-left">
                          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1 text-xs font-bold tracking-wide text-white shadow-sm"><span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />{item.year}</span>
                            <h3 className="mt-3 text-lg font-bold tracking-tight text-secondary">{item.title}</h3>
                            <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{item.description}</p>
                            <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-primary to-sky-400 rounded-full transition-all duration-700 group-hover:w-full" aria-hidden />
                          </div>
                        </div>
                      </TiltCard>
                    </div>
                    <div className="hidden md:flex md:w-1/2 md:items-center md:justify-center">
                      <div className="relative">
                        <div className="h-4 w-4 rounded-full border-4 border-primary bg-white shadow-md animate-pulse-glow" />
                        <div className="absolute inset-0 h-4 w-4 rounded-full bg-primary/20 animate-ping" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values - hint from contact's cards: spotlight, gradient line, hover */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-widest text-primary">OUR VALUES</div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">Principles that guide us</h2>
              <p className="mt-3 text-gray-600">The foundation of every product we ship — modern, responsible, reliable.</p>
              <div className="section-divider mx-auto mt-4 w-24" />
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 60}>
                <TiltCard className="h-full">
                  <div className="spotlight-card card-lift group flex h-full flex-col p-6">
                    <div className="h-1 w-0 bg-gradient-to-r from-primary via-periwinkle to-sky rounded-full transition-all duration-700 group-hover:w-full mb-4" />
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-sky/30 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105">
                      <span className="text-sm font-black">{value.title[0]}</span>
                    </div>
                    <h3 className="mt-4 text-[15px] font-bold tracking-tight text-secondary">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{value.description}</p>
                    <div className="mt-auto pt-4 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">Explore <span className="transition-transform group-hover:translate-x-1">→</span></div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision - modern dark section like contact's final CTA, smooth blur */}
      <section className="relative overflow-hidden bg-secondary py-16">
        <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
        <div className="absolute -right-20 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="absolute -left-16 -bottom-12 h-72 w-72 rounded-full bg-sky-300/10 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="card-lift group relative overflow-hidden rounded-2xl bg-white/10 p-8 backdrop-blur-xl ring-1 ring-white/10">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl transition group-hover:scale-110" />
                <div className="inline-flex rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-bold tracking-widest text-white ring-1 ring-white/15">OUR MISSION</div>
                <h3 className="relative mt-3 text-2xl font-bold text-white">Trusted. Reliable. Global.</h3>
                <p className="relative mt-4 text-[15px] leading-relaxed text-blue-50/90">To be the most trusted and reliable steel manufacturing partner globally, providing innovative and sustainable solutions that exceed customer expectations — on time, on spec, every time.</p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-wide text-white/80"><span className="h-px w-6 bg-white/30" /> Since 1995 • Moradabad</div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card-lift group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition group-hover:scale-110" />
                <div className="inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold tracking-widest text-primary ring-1 ring-primary/10">OUR VISION</div>
                <h3 className="relative mt-3 text-2xl font-bold text-secondary">Global benchmark in steel</h3>
                <p className="relative mt-4 text-[15px] leading-relaxed text-gray-600">To set the global benchmark in steel manufacturing through continuous innovation, sustainable practices, and unwavering commitment to quality — building the backbone of modern industry.</p>
                <div className="mt-6 flex gap-2">
                  <Link href="/products" className="inline-flex rounded-full bg-secondary px-4 py-2 text-xs font-bold text-white hover:bg-secondary/90 transition">Explore products →</Link>
                  <Link href="/contact" className="inline-flex rounded-full bg-slate-50 px-4 py-2 text-xs font-bold text-secondary ring-1 ring-gray-200 hover:bg-white transition">Contact us</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
