import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Gratus India - How we collect, use and protect your data. Short, transparent and compliant.",
};

const sections = [
  {
    n: "01",
    title: "Information We Collect",
    icon: "M12 11a3 3 0 100-6 3 3 0 000 6z M6 21v-1a6 6 0 0112 0v1",
    content: "Name, email, phone, company & address when you contact us. Plus usage data (browser, pages) for analytics.",

  },
  {
    n: "02",
    title: "How We Use It",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    content: "To respond to inquiries, process quotes/orders, improve our site & services, and send updates you request. No spam.",
  },
  {
    n: "03",
    title: "Sharing",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    content: "We never sell your data. Only trusted partners (e.g. logistics, IT) under confidentiality, or when required by law.",
  },
  {
    n: "04",
    title: "Security & Retention",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    content: "SSL encryption, secure servers & access controls. We keep data only as long as needed, then delete/anonymize it.",
  },
  {
    n: "05",
    title: "Your Rights",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    content: "Access, correct, delete or port your data anytime. Email gratusindia@gmail.com — we reply within 48 hours.",
  },
  {
    n: "06",
    title: "Contact",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    content: "Gratus India, Near Ekta Vihar, Kashipur Road, Rampur Doraha, Moradabad - 244001 (UP). GST 09BBZPA4353F2ZE.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* HERO - light, short, animated */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f6f8ff] to-[#eef2ff] py-14 sm:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_20%_0%,rgba(27,44,193,0.07),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_260px_at_90%_10%,rgba(118,146,255,0.10),transparent_65%)]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="pointer-events-none absolute -top-16 right-0 h-64 w-64 rounded-full bg-[#1B2CC1]/5 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-[#7692FF]/10 blur-3xl animate-float-slow" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-bold tracking-widest text-primary ring-1 ring-gray-200 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              PRIVACY • SHORT & CLEAR
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-[42px] leading-[0.95]">
              <span className="text-secondary">Privacy</span>{" "}
              <span className="bg-gradient-to-r from-[#1B2CC1] via-[#4158f5] to-[#7692FF] bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-gray-600">
              Short, transparent and no legal jargon. Here is how we handle your data — in under 2 minutes.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs font-semibold">
              <span className="rounded-full bg-white px-3 py-1.5 text-secondary ring-1 ring-gray-200">Effective: April 2026</span>
              <span className="rounded-full bg-secondary px-3 py-1.5 text-white shadow-sm">Last updated: April 2026</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTENT - compact grid */}
      <section className="relative py-10 sm:py-14">
        <div className="absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[20px] bg-white p-[1.5px] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex h-full flex-col rounded-[18px] bg-white p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-sky/20 text-primary ring-1 ring-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-105">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d={s.icon} /></svg>
                      </span>
                      <span className="text-[11px] font-bold tracking-widest text-primary/60">#{s.n}</span>
                    </div>
                    <h2 className="mt-3 text-[15px] font-bold tracking-tight text-secondary group-hover:text-primary transition">{s.title}</h2>
                    <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{s.content}</p>
                    <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary to-sky-400 rounded-full transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Quick note + contact */}
          <Reveal delay={300}>
            <div className="mt-8 grid gap-4 sm:grid-cols-[1.4fr_0.9fr]">
              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-gray-200 flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm ring-1 ring-gray-200">✓</span>
                <div>
                  <div className="text-sm font-bold text-secondary">Cookies & third-party links</div>
                  <div className="mt-1 text-[13px] leading-relaxed text-gray-600">We use cookies for analytics. You can disable them in your browser. External links have their own policies.</div>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-[#091540] via-[#0f1f6e] to-[#1B2CC1] p-5 text-white shadow-lg ring-1 ring-white/10 flex flex-col justify-between overflow-hidden relative">
                <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                <div>
                  <div className="text-xs font-bold tracking-widest text-[#ABD2FA]">NEED HELP?</div>
                  <div className="mt-1 text-sm font-bold">Questions about privacy?</div>
                  <div className="text-xs text-white/70">gratusindia@gmail.com • +91 9927683415</div>
                </div>
                <Link href="/contact" className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#1B2CC1] shadow hover:bg-[#f6f8ff] transition">
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
