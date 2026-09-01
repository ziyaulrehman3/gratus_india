"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import ScrollProgress from "./ScrollProgress";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const productMenu = [
  {
    name: "Wood Table Lamp",
    desc: "Handcrafted wooden base, warm glow",
    href: "/products",
  },
  {
    name: "Pendant Lamp",
    desc: "Ceiling pendant, modern & minimal",
    href: "/products",
  },
  {
    name: "Moroccan Hanging Lamp",
    desc: "Moroccan jaali, ambient pattern light",
    href: "/products",
  },
  {
    name: "Rope Hanging Lamp",
    desc: "Jute rope, rustic hanging decor",
    href: "/products",
  },
  {
    name: "Wall & Hanging Planter Stand with Pot",
    desc: "Metal planter stand + pot, wall/hanging",
    href: "/products",
  },
  {
    name: "Floor Lamp",
    desc: "Tall floor lamp, living room statement",
    href: "/products",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      if (y > 260) {
        const diff = y - lastY;
        if (diff > 10) setHidden(true);
        else if (diff < -12) setHidden(false);
      } else {
        setHidden(false);
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock scroll + ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setProductOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
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

  useEffect(() => {
    setMenuOpen(false);
    setProductOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <ScrollProgress />
      {/* ===== TOP BAR - upgraded gradient, more attractive ===== */}
      <div
        className={`hidden lg:block relative z-[41] overflow-hidden border-b border-white/10 bg-gradient-to-r from-[#070d2e] via-[#0a1550] to-[#111f8a] text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "max-h-0 opacity-0 border-transparent"
            : "max-h-10 opacity-100"
        } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
        aria-hidden={scrolled}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#ABD2FA]/20 to-transparent" />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-2 text-[11.5px] leading-none">
          <div className="flex items-center gap-3 text-white/80">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse" />
              <span className="font-semibold tracking-wide text-white">
                TRUSTED SINCE 1995
              </span>
              <span className="text-white/30">•</span>
              <span>Moradabad (UP) • Export-Quality Manufacturing</span>
            </span>
            <span
              className="hidden xl:inline-flex h-3 w-px bg-white/15"
              aria-hidden
            />
            <span className="hidden xl:inline-flex items-center gap-1.5 text-white/60">
              <span className="font-medium tracking-wide text-white/80">
                GST:
              </span>
              <span className="font-mono text-white">09BBZPA4353F2ZE</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:gratusindia@gmail.com"
              className="hidden sm:inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors">
              <svg
                className="h-3.5 w-3.5 opacity-70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.7}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              gratusindia@gmail.com
            </a>
            <span className="hidden sm:block h-3 w-px bg-white/15" />
            <a
              href="tel:+919927683415"
              className="inline-flex items-center gap-1.5 font-medium text-white hover:text-[#ABD2FA] transition-colors">
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.7}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +91 9927683415
            </a>
            <a
              href="tel:+918791737818"
              className="hidden md:inline-flex text-white/60 hover:text-white transition-colors">
              +91 8791737818
            </a>
            <span className="h-3 w-px bg-white/15 hidden sm:block" />
            <a
              href="https://www.instagram.com/gratus.india"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 ring-1 ring-white/10 hover:bg-white hover:text-[#091540] transition-all">
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.7}
                  d="M12 2.2c2.4 0 2.7 0 3.6.05.9.04 1.5.2 1.9.35.4.15.7.35 1 .65.3.3.5.6.65 1 .15.4.31 1 .35 1.9.05.9.05 1.2.05 3.6s0 2.7-.05 3.6c-.04.9-.2 1.5-.35 1.9-.15.4-.35.7-.65 1-.3.3-.6.5-1 .65-.4.15-1 .31-1.9.35-.9.05-1.2.05-3.6.05s-2.7 0-3.6-.05c-.9-.04-1.5-.2-1.9-.35a2.7 2.7 0 01-1-.65c-.3-.3-.5-.6-.65-1-.15-.4-.31-1-.35-1.9C2.2 14.7 2.2 14.4 2.2 12s0-2.7.05-3.6c.04-.9.2-1.5.35-1.9.15-.4.35-.7.65-1 .3-.3.6-.5 1-.65.4-.15 1-.31 1.9-.35C9.3 2.2 9.6 2.2 12 2.2z"
                />
              </svg>
              gratus.india
            </a>
          </div>
        </div>
      </div>

      {/* ===== MAIN HEADER - attractive upgraded gradient ===== */}
      <header
        ref={headerRef}
        className={`sticky top-0 z-40 overflow-x-clip overflow-y-visible will-change-transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${mounted ? "opacity-100" : "opacity-0 -translate-y-2"} ${
          scrolled
            ? "bg-gradient-to-r from-[#091540]/90 via-[#0f1f6e]/85 to-[#1B2CC1]/90 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#0f1f6e]/80 shadow-[0_12px_40px_rgba(9,21,64,0.28),0_1px_0_rgba(171,210,250,0.15)_inset] border-b border-white/10"
            : "bg-gradient-to-r from-[#091540] via-[#0f1f7a] to-[#1B2CC1] shadow-[0_10px_30px_rgba(9,21,64,0.22)] border-b border-white/10"
        }`}>
        {/* top highlight line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ABD2FA]/40 to-transparent opacity-70" />
        {/* animated shimmer highlight */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-40 animate-shimmer"
          style={{ backgroundSize: "200% 100%" }}
        />
        {/* ambient glow */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[720px] -translate-x-1/2 rounded-full bg-[#7692FF]/20 blur-3xl transition-opacity duration-700"
          style={{ opacity: scrolled ? 0.9 : 0.6 }}
        />
        <div className="pointer-events-none absolute -top-10 right-[18%] h-28 w-80 rounded-full bg-[#ABD2FA]/15 blur-2xl opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_80px_at_20%_0%,rgba(255,255,255,0.06),transparent_70%)]" />

        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 h-[68px] sm:h-[72px]">
          {/* Brand - logo.png */}
          <Link href="/" className="group flex items-center gap-3 shrink-0">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white p-1 shadow-[0_8px_22px_rgba(27,44,193,0.35),0_1px_0_rgba(255,255,255,0.2)_inset] ring-1 ring-white/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:rotate-[1.5deg] group-hover:shadow-[0_12px_28px_rgba(27,44,193,0.45)] overflow-hidden">
              <img
                src="/logo.png"
                alt="Gratus India logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="leading-none">
              <div className="flex items-baseline gap-1.5">
                <span className="text-[18.5px] font-extrabold tracking-[0.05em] text-white">
                  GRATUS
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#ABD2FA]">
                  INDIA
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const isProducts = link.label === "Products";
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => {
                    if (isProducts) {
                      if (closeTimer.current)
                        window.clearTimeout(closeTimer.current);
                      setProductOpen(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (isProducts) {
                      closeTimer.current = window.setTimeout(
                        () => setProductOpen(false),
                        140,
                      ) as unknown as number;
                    }
                  }}>
                  <Link
                    href={link.href}
                    onFocus={() => isProducts && setProductOpen(true)}
                    className={`relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-[13.5px] font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      active
                        ? "bg-white text-[#091540] shadow-[0_4px_16px_rgba(255,255,255,0.14)]"
                        : "text-white/75 hover:text-white hover:bg-white/[0.08]"
                    }`}
                    aria-current={active ? "page" : undefined}
                    aria-expanded={isProducts ? productOpen : undefined}
                    aria-haspopup={isProducts ? "menu" : undefined}>
                    <span className="relative z-10">{link.label}</span>
                    {isProducts && (
                      <svg
                        className={`h-3.5 w-3.5 opacity-70 transition-transform duration-300 ${productOpen ? "rotate-180" : ""} ${active ? "text-[#091540]" : "text-white/70"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                    {/* active pill bg is already handled, add underline for inactive */}
                    {!active && (
                      <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-[#7692FF] to-[#ABD2FA] transition-transform duration-300 group-hover:scale-x-100" />
                    )}
                  </Link>

                  {/* Products mega dropdown */}
                  {isProducts && (
                    <div
                      className={`absolute left-1/2 top-[calc(100%+14px)] z-50 w-[640px] -translate-x-1/2 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        productOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 translate-y-2 pointer-events-none"
                      }`}
                      onMouseEnter={() => {
                        if (closeTimer.current)
                          window.clearTimeout(closeTimer.current);
                        setProductOpen(true);
                      }}
                      onMouseLeave={() => setProductOpen(false)}>
                      {/* arrow */}
                      <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white ring-1 ring-gray-100 shadow-sm" />
                      <div className="relative overflow-hidden rounded-2xl bg-white p-2 shadow-[0_20px_60px_rgba(9,21,64,0.18),0_8px_20px_rgba(9,21,64,0.08)] ring-1 ring-gray-100">
                        <div className="grid grid-cols-2 gap-1 p-1">
                          {productMenu.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="group/item flex items-start gap-3 rounded-xl px-3.5 py-3 hover:bg-[#f6f8ff] transition-colors">
                              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#091540] text-white shadow-sm transition-all group-hover/item:bg-[#1B2CC1] group-hover/item:scale-105">
                                <svg
                                  className="h-4 w-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.7}
                                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10m0-18v4"
                                  />
                                </svg>
                              </span>
                              <span>
                                <span className="block text-[13px] font-bold leading-tight text-[#091540] group-hover/item:text-[#1B2CC1]">
                                  {item.name}
                                </span>
                                <span className="block text-xs leading-tight text-gray-500">
                                  {item.desc}
                                </span>
                              </span>
                              <span className="ml-auto hidden group-hover/item:flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#091540] shadow ring-1 ring-gray-100">
                                <svg
                                  className="h-3 w-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="flex items-center justify-between gap-3 rounded-xl bg-gradient-to-br from-[#091540] via-[#0f1a5a] to-[#1B2CC1] px-4 py-3 text-white">
                          <div className="flex items-center gap-2 text-xs">
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/15">
                              ✓
                            </span>
                            <div>
                              <div className="text-xs font-bold tracking-wide">
                                Need custom specs?
                              </div>
                              <div className="text-[11px] text-white/70">
                                Share drawings • Quote in 24h
                              </div>
                            </div>
                          </div>
                          <Link
                            href="/contact"
                            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#1B2CC1] shadow hover:bg-[#f6f8ff] transition">
                            Get Quote <span>→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <span className="mx-2 h-6 w-px bg-white/10" aria-hidden />

            {/* phone icon + CTA */}
            <a
              href="tel:+919927683415"
              className="hidden xl:inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] text-white ring-1 ring-white/10 backdrop-blur hover:bg-white hover:text-[#091540] transition-all active:scale-95"
              aria-label="Call us">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>

            <Link
              href="/contact"
              className="btn-shine group relative inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-bold tracking-wide text-[#1B2CC1] shadow-[0_8px_22px_rgba(255,255,255,0.18),0_1px_0_rgba(255,255,255,0.6)_inset] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_12px_28px_rgba(27,44,193,0.28)] hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]">
              <span className="relative">Get a Quote</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#091540] text-white transition-all duration-300 group-hover:bg-[#1B2CC1] group-hover:rotate-6 group-hover:translate-x-0.5">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d="M7 17L17 7M17 7h-7m7 0v7"
                  />
                </svg>
              </span>
            </Link>
          </nav>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+919927683415"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#091540] shadow-sm ring-1 ring-white/20 lg:hidden"
              aria-label="Call">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
            <button
              className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08] ring-1 ring-white/[0.10] backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/[0.13] hover:ring-white/20 hover:scale-[1.02] active:scale-95"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}>
              <span
                className={`absolute h-0.5 w-5 rounded-full bg-white transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? "rotate-45" : "-translate-y-1.5"}`}
              />
              <span
                className={`absolute h-0.5 w-5 rounded-full bg-white transition-all duration-250 ${menuOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"}`}
              />
              <span
                className={`absolute h-0.5 w-5 rounded-full bg-white transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? "-rotate-45" : "translate-y-1.5"}`}
              />
            </button>
          </div>
        </div>

        {/* bottom hairline glow */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </header>

      {/* ===== Mobile Drawer ===== */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${menuOpen ? "visible" : "invisible"}`}
        aria-hidden={!menuOpen}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-[#091540]/45 backdrop-blur-[8px] transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute right-0 top-0 flex h-[100dvh] w-[380px] max-w-[86vw] flex-col bg-gradient-to-b from-[#0c1a55] via-[#091540] to-[#061036] shadow-[-20px_0_64px_rgba(9,21,64,0.5)] ring-1 ring-white/10 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          role="dialog"
          aria-modal="true">
          {/* panel header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white p-1 shadow overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Gratus India logo"
                  className="h-full w-full object-contain"
                />
              </span>
              <div className="leading-none">
                <div className="text-sm font-extrabold tracking-[0.08em] text-white leading-none">
                  GRATUS INDIA
                </div>
              </div>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10 backdrop-blur transition-all hover:bg-white hover:text-[#091540] hover:rotate-90 active:scale-95"
              aria-label="Close menu">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* ambient */}
          <div className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-[#1B2CC1]/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#7692FF]/10 blur-3xl" />

          <div className="relative flex flex-1 flex-col overflow-y-auto px-6 py-6">
            <div className="space-y-1.5">
              {navLinks.map((link, i) => {
                const active = isActive(link.href);
                const isProducts = link.label === "Products";
                return (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        transitionDelay: `${menuOpen ? i * 55 + 120 : 0}ms`,
                      }}
                      className={`group flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        active
                          ? "bg-white text-[#091540] shadow-lg translate-x-0 opacity-100"
                          : "bg-white/[0.06] text-white/85 ring-1 ring-white/[0.06] hover:bg-white hover:text-[#091540] hover:translate-x-1"
                      } ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}>
                      <span className="flex items-center gap-3">
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${active ? "bg-[#1B2CC1] text-white" : "bg-white/10 text-white group-hover:bg-[#1B2CC1] group-hover:text-white"}`}>
                          0{i + 1}
                        </span>
                        {link.label}
                      </span>
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${active ? "bg-[#091540]/10 text-[#091540]" : "bg-white/10 text-white/60 group-hover:bg-[#091540]/10 group-hover:text-[#091540] group-hover:translate-x-0.5"}`}>
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </Link>
                    {isProducts && (
                      <div
                        className={`grid transition-all duration-500 ${menuOpen ? "opacity-100" : "opacity-0"} overflow-hidden`}
                        style={{
                          transitionDelay: `${menuOpen ? i * 55 + 160 : 0}ms`,
                        }}>
                        <div className="mt-2 ml-4 mr-1 grid grid-cols-1 gap-1.5 rounded-2xl bg-white/[0.05] p-2 ring-1 ring-white/10">
                          {productMenu.map((p) => (
                            <Link
                              key={p.name}
                              href={p.href}
                              onClick={() => setMenuOpen(false)}
                              className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm text-white/80 hover:bg-white hover:text-[#091540] transition-colors">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#ABD2FA] shrink-0" />
                              {p.name}
                            </Link>
                          ))}
                          <Link
                            href="/products"
                            onClick={() => setMenuOpen(false)}
                            className="mt-1 flex items-center justify-center gap-1 rounded-full bg-white px-3 py-2 text-xs font-bold text-[#1B2CC1] hover:bg-[#f6f8ff]">
                            View all products →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div
              className={`mt-6 rounded-2xl bg-gradient-to-br from-[#1B2CC1] via-[#1B2CC1] to-[#7692FF] p-[1.5px] transition-all duration-700 delay-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
              <div className="rounded-[15px] bg-[#091540] p-5">
                <div className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-[#ABD2FA]">
                  NEED STEEL • FAST QUOTE
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Custom specs? Get a 24h quote with export docs. Trusted by
                  500+ clients.
                </p>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-shine mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#1B2CC1] shadow-lg transition-all hover:bg-[#f6f8ff] hover:-translate-y-0.5 active:translate-y-0">
                  Get a Quote <span>→</span>
                </Link>
                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-white/60">
                  <a
                    href="tel:+919927683415"
                    className="hover:text-white transition-colors font-medium">
                    +91 9927683415
                  </a>
                  <span className="h-3 w-px bg-white/15" />
                  <a
                    href="tel:+918791737818"
                    className="hover:text-white transition-colors">
                    +91 8791737818
                  </a>
                </div>
                <div className="mt-2 flex items-center justify-center gap-2 text-[11px] text-white/50">
                  <span>Mon–Sat 9am–7pm IST</span>
                  <span className="h-2.5 w-px bg-white/15" />
                  <a
                    href="mailto:gratusindia@gmail.com"
                    className="hover:text-white">
                    gratusindia@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`mt-auto pt-6 transition-all duration-700 delay-500 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
              <div className="flex items-center gap-2 text-[11px] font-semibold tracking-widest text-white/40">
                <span className="h-px flex-1 bg-white/10" /> PRECISION •
                CERTIFIED <span className="h-px flex-1 bg-white/10" />
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/20">
                  Since 1995
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/60 ring-1 ring-white/10">
                  GST: 09BBZPA4353F2ZE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
