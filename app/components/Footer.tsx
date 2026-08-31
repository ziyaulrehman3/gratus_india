"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#091540] via-[#0f1a5a] to-[#1B2CC1] text-slate-100">
      {/* Header-matched ambient */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[640px] w-[640px] rounded-full bg-[#7692FF]/18 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-48 -left-32 h-[560px] w-[560px] rounded-full bg-[#1B2CC1]/25 blur-[90px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ABD2FA]/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_200px_at_30%_0%,rgba(255,255,255,0.06),transparent_70%)]" />
      <div className="absolute inset-0 grid-pattern opacity-[0.05]" />

      {/* Top highlight - matching header shimmer */}
      <div className="relative h-px w-full overflow-hidden bg-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ABD2FA]/40 via-[#7692FF]/50 to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer opacity-40" style={{ backgroundSize: "200% 100%" }} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`group fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-bold tracking-wide text-[#091540] shadow-[0_12px_32px_rgba(9,21,64,0.35),0_1px_0_rgba(255,255,255,0.7)_inset] ring-1 ring-white/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(9,21,64,0.45)] hover:bg-[#f6f8ff] active:translate-y-0 active:scale-95 ${showTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <span>Back to top</span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#091540] to-[#1B2CC1] text-white shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 15l7-7 7 7" />
          </svg>
        </span>
      </button>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.35fr_0.75fr_0.95fr_1.25fr] lg:gap-8">
          {/* Brand */}
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white p-1 shadow-[0_8px_22px_rgba(27,44,193,0.35),0_1px_0_rgba(255,255,255,0.2)_inset] ring-1 ring-white/20 overflow-hidden">
                <img src="/logo.png" alt="Gratus India logo" className="h-full w-full object-contain" />
              </div>
              <div className="leading-none">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[18.5px] font-extrabold tracking-[0.05em] text-white">GRATUS</span>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#ABD2FA]">INDIA</span>
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-[36ch] text-[13.5px] leading-relaxed text-slate-200/90">
              Leading manufacturer of premium steel products — pipes, wires, sheets, fasteners. Manufactured to export-quality standards since 1995.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://www.instagram.com/gratus.india"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-[#091540] shadow-md ring-1 ring-white/20 transition-all duration-300 hover:bg-[#f6f8ff] hover:shadow-lg hover:scale-[1.02]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#1B2CC1] to-[#7692FF] text-white">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 2.2c2.4 0 2.7 0 3.6.05.9.04 1.5.2 1.9.35.4.15.7.35 1 .65.3.3.5.6.65 1 .15.4.31 1 .35 1.9.05.9.05 1.2.05 3.6s0 2.7-.05 3.6c-.04.9-.2 1.5-.35 1.9-.15.4-.35.7-.65 1-.3.3-.6.5-1 .65-.4.15-1 .31-1.9.35-.9.05-1.2.05-3.6.05s-2.7 0-3.6-.05c-.9-.04-1.5-.2-1.9-.35a2.7 2.7 0 01-1-.65c-.3-.3-.5-.6-.65-1-.15-.4-.31-1-.35-1.9C2.2 14.7 2.2 14.4 2.2 12s0-2.7.05-3.6c.04-.9.2-1.5.35-1.9.15-.4.35-.7.65-1 .3-.3.6-.5 1-.65.4-.15 1-.31 1.9-.35C9.3 2.2 9.6 2.2 12 2.2zM12 6.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM12 15a3 3 0 110-6 3 3 0 010 6zm5.5-7.8a1.3 1.3 0 11-2.6 0 1.3 1.3 0 012.6 0z" />
                  </svg>
                </span>
                gratus.india
              </a>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300 ring-1 ring-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Precision
              </span>
            </div>

            <div className="mt-4 flex gap-2">
              {[
                { label: "𝕏", href: "#" },
                { label: "in", href: "#" },
                { label: "f", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="group flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08] text-white ring-1 ring-white/15 backdrop-blur transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:text-[#091540] hover:-translate-y-0.5 hover:shadow-md hover:ring-white"
                >
                  <span className="text-xs font-bold">{s.label}</span>
                </a>
              ))}
              <span className="ml-2 hidden items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/70 ring-1 ring-white/10 sm:inline-flex backdrop-blur">
                <span className="h-1 w-1 rounded-full bg-[#ABD2FA] animate-pulse" /> Crafted with precision
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-4">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
              <span className="h-px w-6 bg-gradient-to-r from-[#ABD2FA] to-transparent" />
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Products" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-white/75 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-white hover:translate-x-1"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.08] ring-1 ring-white/10 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-white group-hover:text-[#1B2CC1] group-hover:ring-white">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="h-px w-0 bg-[#ABD2FA] transition-all duration-300 group-hover:w-4" aria-hidden />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
              <span className="h-px w-6 bg-gradient-to-r from-[#ABD2FA] to-transparent" />
              Products
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {["Steel Pipes & Tubes", "Steel Wire Products", "Steel Sheets & Coils", "Steel Fasteners"].map((p) => (
                <li key={p}>
                  <Link href="/products" className="group inline-flex items-center gap-2 text-white/75 transition-all duration-300 hover:text-white hover:translate-x-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40 transition-all duration-300 group-hover:bg-[#ABD2FA] group-hover:scale-125 group-hover:shadow-[0_0_8px_rgba(171,210,250,0.6)]" />
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/products" className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold tracking-wide text-[#1B2CC1] shadow-md ring-1 ring-white/20 transition-all hover:bg-[#f6f8ff] hover:gap-2 hover:shadow-lg">
              View catalogue <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Contact - upgraded glass to match header */}
          <div className="rounded-2xl bg-white/[0.07] p-5 ring-1 ring-white/15 backdrop-blur-xl lg:p-6 shadow-[0_8px_32px_rgba(9,21,64,0.18),inset_0_1px_0_rgba(255,255,255,0.08)]">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse" />
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="group flex items-start gap-3 text-white/85">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#091540] shadow-sm ring-1 ring-white/20 transition-all duration-300 group-hover:bg-[#1B2CC1] group-hover:text-white group-hover:scale-105 group-hover:shadow-md">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="leading-relaxed">Near Ekta Vihar, Kashipur Road,<br />Rampur Doraha, Moradabad — 244001 (UP), India</span>
              </li>
              <li className="group flex items-start gap-3 text-white/85">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/15 backdrop-blur transition-all duration-300 group-hover:bg-white group-hover:text-[#091540]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="leading-relaxed">
                  <a href="mailto:gratusindia@gmail.com" className="font-medium text-white transition-colors hover:text-[#ABD2FA] hover:underline decoration-white/20 underline-offset-4">gratusindia@gmail.com</a>
                  <br />
                  <a href="mailto:sales@gratusindia.com" className="text-xs text-white/60 transition-colors hover:text-white">sales@gratusindia.com</a>
                </span>
              </li>
              <li className="group flex items-start gap-3 text-white/85">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/15 backdrop-blur transition-all duration-300 group-hover:bg-white group-hover:text-[#091540]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span className="font-medium">
                  <a href="tel:+919927683415" className="text-white transition-colors hover:text-[#ABD2FA]">+91 9927683415</a>
                  <span className="mx-2 text-white/20">•</span>
                  <a href="tel:+918791737818" className="text-white transition-colors hover:text-[#ABD2FA]">+91 8791737818</a>
                  <span className="mt-1 block text-xs font-normal text-white/60">Mon–Sat • 9am – 7pm IST</span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/85">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.08] text-white ring-1 ring-white/10">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <span className="text-xs tracking-wide text-white/80">GST: <span className="font-mono font-bold tracking-wider text-white">09BBZPA4353F2ZE</span></span>
              </li>
            </ul>

            <div className="mt-6 flex gap-2">
              <a href="tel:+919927683415" className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-[#091540] shadow-md ring-1 ring-white/20 transition-all duration-300 hover:bg-[#f6f8ff] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Now
              </a>
              <Link href="/contact" className="flex flex-1 items-center justify-center rounded-full bg-white px-4 py-2.5 text-xs font-bold text-[#1B2CC1] shadow-md ring-1 ring-white/20 transition-all duration-300 hover:bg-[#f6f8ff] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
                Get Quote →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs leading-relaxed tracking-wide text-white/60">
              © {new Date().getFullYear()} Gratus India All rights reserved.
              <span className="hidden sm:inline text-white/20"> • </span>
              <span className="text-white/80">Crafted with precision in Moradabad</span>
            </p>
            <div className="flex items-center gap-3 text-xs">
              <Link href="/privacy" className="rounded-full bg-white px-3 py-1.5 font-bold text-[#091540] shadow-sm ring-1 ring-white/20 transition-all hover:bg-[#f6f8ff] hover:shadow-md">Privacy Policy</Link>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <a href="#" className="hidden text-white/60 transition-colors hover:text-white sm:inline">Terms</a>
              <span className="hidden text-white/15 sm:inline">•</span>
              <a href="#" className="hidden text-white/60 transition-colors hover:text-white sm:inline">Sitemap</a>
              <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300 ring-1 ring-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-4 text-center">
          <p className="text-xs tracking-wide text-white/55">
            Built with <span className="text-red-300">♥</span> by{" "}
            <a href="https://sparklineo.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-[#ABD2FA] hover:underline underline-offset-4">
              Sparklineo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
