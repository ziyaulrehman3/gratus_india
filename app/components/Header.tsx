"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ScrollProgress from "./ScrollProgress";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      if (y > 220) {
        const diff = y - lastY;
        if (diff > 8) setHidden(true);
        else if (diff < -8) setHidden(false);
      } else {
        setHidden(false);
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overscrollBehavior = "none";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overscrollBehavior = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overscrollBehavior = "";
    };
  }, [menuOpen]);

  // close on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <ScrollProgress />
      <header
        className={`sticky top-0 z-40 text-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          mounted ? "opacity-100" : "opacity-0 -translate-y-2"
        } ${
          scrolled
            ? "bg-[#091540]/85 backdrop-blur-2xl shadow-[0_12px_40px_rgba(9,21,64,0.25),0_1px_0_rgba(171,210,250,0.15)_inset] border-b border-white/[0.08]"
            : "bg-[#091540] shadow-[0_4px_24px_rgba(9,21,64,0.18)] border-b border-transparent"
        }`}
      >
        {/* subtle top highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ABD2FA]/30 to-transparent opacity-0 transition-opacity duration-500 data-[scrolled=true]:opacity-100" data-scrolled={scrolled} />
        {/* soft ambient glow */}
        <div className="pointer-events-none absolute -top-24 right-1/4 h-48 w-96 rounded-full bg-[#1B2CC1]/20 blur-3xl transition-opacity duration-700" style={{ opacity: scrolled ? 1 : 0.6 }} />

        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6 lg:px-8">
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-3 shrink-0">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1B2CC1] via-[#1B2CC1] to-[#7692FF] text-white shadow-[0_6px_20px_rgba(27,44,193,0.35),0_1px_0_rgba(255,255,255,0.2)_inset] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:rotate-[2deg] group-hover:shadow-[0_10px_28px_rgba(27,44,193,0.45)]">
              <span className="relative z-10 text-[17px] font-black tracking-tighter">G</span>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute -inset-px rounded-xl bg-gradient-to-br from-[#ABD2FA]/0 via-[#ABD2FA]/0 to-[#ABD2FA]/30 opacity-0 blur-[6px] transition-opacity duration-500 group-hover:opacity-100" />
            </div>
            <div className="leading-none">
              <div className="flex items-baseline gap-1.5">
                <span className="text-[18px] font-extrabold tracking-[0.05em] text-white">GRATUS</span>
                <span className="text-[10px] font-bold tracking-[0.20em] text-[#ABD2FA]">INDIA</span>
              </div>
              <span className="block text-[10px] font-medium tracking-[0.16em] text-white/55 -mt-0.5 group-hover:text-white/70 transition-colors">EST. 1995 • MORADABAD</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative inline-flex items-center rounded-full px-4 py-2 text-[13.5px] font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    active
                      ? "bg-white text-[#091540] shadow-[0_4px_16px_rgba(255,255,255,0.15)]"
                      : "text-white/70 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {active && (
                    <span className="absolute inset-0 -z-0 rounded-full bg-white shadow-sm" />
                  )}
                  {!active && (
                    <span className="pointer-events-none absolute bottom-1 left-1/2 h-px w-0 bg-gradient-to-r from-[#7692FF] to-[#ABD2FA] transition-all duration-500 group-hover:w-1/2 -translate-x-1/2" />
                  )}
                </Link>
              );
            })}
            <span className="mx-2 h-6 w-px bg-white/10" aria-hidden />
            <Link
              href="/contact"
              className="btn-shine group relative inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-bold tracking-wide text-[#1B2CC1] shadow-[0_6px_20px_rgba(255,255,255,0.18),0_1px_0_rgba(255,255,255,0.6)_inset] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_10px_28px_rgba(27,44,193,0.28)] hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]"
            >
              <span className="relative">Get a Quote</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#091540] text-white transition-all duration-300 group-hover:bg-[#1B2CC1] group-hover:rotate-6">
                <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M7 17L17 7M17 7h-7m7 0v7" />
                </svg>
              </span>
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08] ring-1 ring-white/[0.10] backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/[0.13] hover:ring-white/20 hover:scale-[1.02] active:scale-95 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`absolute h-0.5 w-5 rounded-full bg-white transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute h-0.5 w-5 rounded-full bg-white transition-all duration-250 ${menuOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"}`} />
            <span className={`absolute h-0.5 w-5 rounded-full bg-white transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>

        {/* bottom hairline glow */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-50 md:hidden ${menuOpen ? "visible" : "invisible"}`} aria-hidden={!menuOpen}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-[#091540]/40 backdrop-blur-[6px] transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute right-0 top-0 flex h-[100dvh] w-[360px] max-w-[86vw] flex-col bg-gradient-to-b from-[#0c1a55] via-[#091540] to-[#091540] shadow-[-16px_0_64px_rgba(9,21,64,0.45)] ring-1 ring-white/10 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* panel header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#091540] text-sm font-black">G</span>
              <span className="text-sm font-extrabold tracking-[0.08em] text-white">GRATUS INDIA</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10 backdrop-blur transition-all hover:bg-white hover:text-[#091540] hover:rotate-90 active:scale-95"
              aria-label="Close menu"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* ambient */}
          <div className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-[#1B2CC1]/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#7692FF]/10 blur-3xl" />

          <div className="relative flex flex-1 flex-col overflow-y-auto px-6 py-6">
            <div className="space-y-1.5">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{ transitionDelay: `${menuOpen ? i * 50 + 120 : 0}ms` }}
                    className={`group flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      active
                        ? "bg-white text-[#091540] shadow-lg translate-x-0 opacity-100"
                        : "bg-white/[0.06] text-white/85 ring-1 ring-white/[0.06] hover:bg-white hover:text-[#091540] hover:translate-x-1"
                    } ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${active ? "bg-[#1B2CC1] text-white" : "bg-white/10 text-white group-hover:bg-[#1B2CC1] group-hover:text-white"}`}>
                        0{i + 1}
                      </span>
                      {link.label}
                    </span>
                    <span className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${active ? "bg-[#091540]/10 text-[#091540]" : "bg-white/10 text-white/60 group-hover:bg-[#091540]/10 group-hover:text-[#091540] group-hover:translate-x-0.5"}`}>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className={`mt-6 rounded-2xl bg-gradient-to-br from-[#1B2CC1] via-[#1B2CC1] to-[#7692FF] p-[1.5px] transition-all duration-700 delay-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
              <div className="rounded-[15px] bg-[#091540] p-4">
                <div className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-[#ABD2FA]">NEED STEEL • FAST QUOTE</div>
                <p className="mt-2 text-sm leading-relaxed text-white/80">Custom specs? Get a 24h quote with lab reports & export docs.</p>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-shine mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#1B2CC1] shadow-lg transition-all hover:bg-[#f6f8ff] hover:-translate-y-0.5 active:translate-y-0"
                >
                  Get a Quote <span>→</span>
                </Link>
                <div className="mt-3 flex items-center justify-center gap-3 text-xs text-white/60">
                  <a href="tel:+919927683415" className="hover:text-white transition-colors">+91 9927683415</a>
                  <span className="h-3 w-px bg-white/15" />
                  <a href="tel:+918791737818" className="hover:text-white transition-colors">+91 8791737818</a>
                </div>
              </div>
            </div>

            <div className={`mt-auto pt-6 transition-all duration-700 delay-500 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
              <div className="flex items-center gap-2 text-[11px] font-semibold tracking-widest text-white/40">
                <span className="h-px flex-1 bg-white/10" /> TRUSTED • 50+ COUNTRIES <span className="h-px flex-1 bg-white/10" />
              </div>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/20">Since 1995</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
