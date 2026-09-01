import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for Gratus India - Orders, pricing, shipping, warranty and use of our site. Short, transparent and fair.",
};

const sections = [
  {
    n: "01",
    title: "Acceptance of Terms",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    content: "By browsing, enquiring or ordering with Gratus India you agree to these terms. If you don’t agree, please don’t use our site.",
  },
  {
    n: "02",
    title: "Products & Custom Orders",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10m0-18v4",
    content: "We handcraft Wood Table, Wall, Floor, Pendant, Moroccan & Rope Hanging Lamps + Planter Stands. Wood grain, shade tone & finish may vary slightly — part of handmade charm. Share size, finish, fabric & qty for a 24h quote.",
  },
  {
    n: "03",
    title: "Pricing & Payment",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    content: "Prices are in INR (export in USD) and may change with wood/metal costs. PI confirms final price. We accept bank transfer/UPI. Production starts after advance/confirmation.",
  },
  {
    n: "04",
    title: "Shipping & Delivery",
    icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
    content: "Lead time confirmed at order. Secure packing included; courier/transport cost as applicable. Timelines may shift due to weather, carrier or custom finish load.",
  },
  {
    n: "05",
    title: "Returns & Warranty",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    content: "Check on delivery. Report damage/defect with photos within 48 hours. Custom shades/finishes are non-returnable. 6-month wiring/workmanship warranty — misuse excluded.",
  },
  {
    n: "06",
    title: "Contact & Law",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    content: "Gratus India, Near Ekta Vihar, Kashipur Road, Rampur Doraha, Moradabad - 244001 (UP). GST 09BBZPA4353F2ZE. Queries: gratusindia@gmail.com. Subject to Moradabad jurisdiction.",
  },
];

export default function TermsPage() {
  return (
    <>
      {/* HERO - previous color theme, updated design */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f6f8ff] to-[#eef2ff] py-14 sm:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_20%_0%,rgba(27,44,193,0.07),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_260px_at_90%_10%,rgba(118,146,255,0.10),transparent_65%)]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="pointer-events-none absolute -top-16 right-0 h-64 w-64 rounded-full bg-[#1B2CC1]/5 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-[#7692FF]/10 blur-3xl animate-float-slow" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-bold tracking-widest text-primary ring-1 ring-gray-200 shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              TERMS • SHORT & CLEAR
              <span className="hidden sm:inline-flex rounded-full bg-[#f6f8ff] px-2.5 py-0.5 text-[10px] font-bold text-primary ring-1 ring-primary/10">Handmade • B2B & Retail</span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-[42px] leading-[0.95]">
              <span className="text-secondary">Terms &</span>{" "}
              <span className="bg-gradient-to-r from-[#1B2CC1] via-[#4158f5] to-[#7692FF] bg-clip-text text-transparent">Conditions</span>
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-gray-600">
              Plain, fair and no hidden clauses. How orders, pricing, shipping and warranty work — in under 2 minutes.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs font-semibold">
              <span className="rounded-full bg-white px-3 py-1.5 text-secondary ring-1 ring-gray-200">Effective: April 2026</span>
              <span className="rounded-full bg-secondary px-3 py-1.5 text-white shadow-sm">Last updated: April 2026</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTENT - compact grid, previous color theme + design polish */}
      <section className="relative py-10 sm:py-14">
        <div className="absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[22px] bg-gradient-to-br from-white via-white to-primary/[0.06] p-[1.5px] shadow-sm hover:shadow-[0_16px_40px_rgba(27,44,193,0.12)] hover:-translate-y-1 transition-all duration-300">
                  <div className="flex h-full flex-col rounded-[20px] bg-white p-6 backdrop-blur">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-sky-20 text-primary ring-1 ring-primary/10 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d={s.icon} /></svg>
                      </span>
                      <span className="text-[11px] font-bold tracking-widest text-primary/60">#{s.n}</span>
                      <span className="ml-auto h-px flex-1 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h2 className="mt-3 text-[15px] font-bold tracking-tight text-secondary group-hover:text-primary transition">{s.title}</h2>
                    <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{s.content}</p>
                    <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary via-sky-400 to-[#7692FF] rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Quick note + contact — polished */}
          <Reveal delay={300}>
            <div className="mt-8 grid gap-4 sm:grid-cols-[1.4fr_0.9fr]">
              <div className="group rounded-2xl bg-slate-50 p-5 ring-1 ring-gray-200 flex items-start gap-3 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm ring-1 ring-gray-200 group-hover:bg-primary group-hover:text-white transition-colors">!</span>
                <div>
                  <div className="text-sm font-bold text-secondary">Use of site & content</div>
                  <div className="mt-1 text-[13px] leading-relaxed text-gray-600">Images, text and designs are property of Gratus India. Don’t copy without permission. We may update terms — continued use means acceptance.</div>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-[#091540] via-[#0f1f6e] to-[#1B2CC1] p-5 text-white shadow-lg ring-1 ring-white/10 flex flex-col justify-between overflow-hidden relative group hover:shadow-xl hover:-translate-y-0.5 transition-all">
                <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-2xl group-hover:bg-white/15 transition-colors" />
                <div>
                  <div className="text-xs font-bold tracking-widest text-[#ABD2FA]">NEED HELP?</div>
                  <div className="mt-1 text-sm font-bold">Questions about terms?</div>
                  <div className="text-xs text-white/70">gratusindia@gmail.com • +91 9927683415</div>
                </div>
                <Link href="/contact" className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#1B2CC1] shadow hover:bg-[#f6f8ff] hover:gap-1 transition-all">
                  Contact Us →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
