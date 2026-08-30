"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";

const phones = [
  { display: "+91 99276 83415", href: "tel:+919927683415" },
  { display: "+91 87917 37818", href: "tel:+918791737818" },
];

const emails = [
  { display: "gratusindia@gmail.com", href: "mailto:gratusindia@gmail.com" },
  { display: "sales@gratusindia.com", href: "mailto:sales@gratusindia.com" },
];

const waHref =
  "https://wa.me/919927683415?text=Hello%20Gratus%20India%2C%20I%20would%20like%20to%20enquire%20about%20your%20steel%20products.";

const mapsHref =
  "https://maps.google.com/?q=Near+Ekta+Vihar+Kashipur+Road+Rampur+Doraha+Moradabad+244001";

const mapsEmbed =
  "https://maps.google.com/maps?q=Near+Ekta+Vihar+Kashipur+Road+Rampur+Doraha+Moradabad+244001&z=14&output=embed";

const subjects = [
  { value: "product-inquiry", label: "Product Inquiry" },
  { value: "custom-order", label: "Custom Order" },
  { value: "export-quote", label: "Export Quotation" },
  { value: "partnership", label: "Partnership" },
  { value: "general", label: "General" },
];

const faqs = [
  {
    q: "How quickly do you respond to inquiries?",
    a: "We reply within one business day — usually within a few hours during IST working hours. WhatsApp is the fastest way to reach us for urgent quotes.",
  },
  {
    q: "Can you manufacture to custom specifications?",
    a: "Yes. Share grades, sizes, coating, quantity, and destination port. Our team will confirm feasibility, lead time, and a detailed quotation.",
  },
  {
    q: "Do you handle export documentation?",
    a: "We support complete export packing, marking, and documentation including commercial invoice, packing list, and certificates as required.",
  },
  {
    q: "What is the typical order process?",
    a: "Inquiry → specification review → quotation → sample (if needed) → PI / contract → production → inspection → dispatch. We keep you updated at each step.",
  },
];

const fieldClass =
  "peer mt-2 block w-full rounded-xl border border-gray-200 bg-slate-50/60 px-4 py-3.5 text-sm text-secondary shadow-sm transition-all placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 focus:outline-none";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [focused, setFocused] = useState<string | null>(null);
  const [subject, setSubject] = useState("");
  const [messageLen, setMessageLen] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("sent"), 1400);
  }

  return (
    <>


      <section id="inquiry" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-5 lg:sticky lg:top-24">
              <Reveal>
                <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-widest text-primary">GET IN TOUCH</div>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary">We&apos;d love to hear from you</h2>
                <div className="section-divider mt-3 w-16" />
                <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
                  Tell us the product, grade, quantity, and destination. The more detail you share, the faster we can return a workable quotation.
                </p>
              </Reveal>

              <Reveal delay={80}>
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                  <p className="text-xs font-bold tracking-widest text-steel-gray">DIRECT CONTACT</p>
                  <ul className="mt-4 space-y-4 text-sm">
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-sky/30 text-primary ring-1 ring-primary/10">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </span>
                      <span className="leading-relaxed text-gray-600">
                        <span className="block text-xs font-bold tracking-wide text-secondary">Address</span>
                        <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Near Ekta Vihar, Kashipur Road, Rampur Doraha, Moradabad — 244001 (UP), India</a>
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-sky/30 text-primary ring-1 ring-primary/10">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </span>
                      <span>
                        <span className="block text-xs font-bold tracking-wide text-secondary">Phone</span>
                        <span className="mt-1 flex flex-wrap gap-2">
                          {phones.map((p) => (
                            <a key={p.href} href={p.href} className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1 text-xs font-bold text-secondary ring-1 ring-gray-200 hover:bg-primary hover:text-white hover:ring-primary transition">{p.display}</a>
                          ))}
                        </span>
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-sky/30 text-primary ring-1 ring-primary/10">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </span>
                      <span>
                        <span className="block text-xs font-bold tracking-wide text-secondary">Email</span>
                        <span className="mt-1 flex flex-col gap-1">
                          {emails.map((em) => (
                            <a key={em.href} href={em.href} className="text-sm font-medium text-primary hover:text-primary-dark hover:underline break-all">{em.display}</a>
                          ))}
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex overflow-hidden rounded-2xl bg-[#0b1a12] p-5 text-white shadow-lg ring-1 ring-white/10"
                >
                  <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#25D366]/30 blur-2xl transition group-hover:scale-125" />
                  <div className="relative">
                    <p className="text-xs font-bold tracking-widest text-[#25D366]">FASTEST RESPONSE</p>
                    <p className="mt-1 text-lg font-extrabold">Chat on WhatsApp</p>
                    <p className="mt-1 text-sm text-white/70">+91 99276 83415 · typically under an hour</p>
                    <span className="mt-3 inline-flex text-xs font-bold text-[#25D366]">Start conversation →</span>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={200} direction="scale">
                <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200">
                  <iframe
                    title="Gratus India office location"
                    src={mapsEmbed}
                    className="h-64 w-full border-0 grayscale-[20%] contrast-[1.05]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-white/90 px-3 py-2 text-xs shadow-lg backdrop-blur">
                    <span className="font-semibold text-secondary">Rampur Doraha, Moradabad</span>
                    <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="font-bold text-primary">
                      Directions →
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={80} direction="right">
              <div className="relative">
                <div className="pointer-events-none absolute -inset-1 rounded-[28px] bg-gradient-to-br from-primary/30 via-periwinkle/20 to-sky/30 opacity-60 blur-lg" />
                <div className="relative rounded-[24px] bg-white p-6 shadow-xl shadow-primary/10 ring-1 ring-gray-100 sm:p-8">
                  <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-widest text-primary">SEND A MESSAGE</div>
                  <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-secondary">Tell us your requirement</h2>
                  <div className="section-divider mt-3 w-16" />

                  {formStatus === "sent" ? (
                    <div className="mt-8 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 text-center animate-scaleIn">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 animate-pulse-glow">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="mt-4 text-lg font-bold tracking-tight text-emerald-800">Message sent successfully</h3>
                      <p className="mt-2 text-sm leading-relaxed text-emerald-700">
                        We&apos;ve received your inquiry and will get back within 24 hours with a detailed quotation.
                      </p>
                      <button
                        className="mt-5 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700 transition"
                        onClick={() => {
                          setFormStatus("idle");
                          setSubject("");
                          setMessageLen(0);
                        }}
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className={`block text-xs font-bold tracking-widest transition-colors ${focused === "name" ? "text-primary" : "text-gray-700"}`}>
                            FULL NAME *
                          </label>
                          <input onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} type="text" id="name" name="name" required className={fieldClass} placeholder="Amit Sharma" />
                        </div>
                        <div>
                          <label htmlFor="company" className={`block text-xs font-bold tracking-widest transition-colors ${focused === "company" ? "text-primary" : "text-gray-700"}`}>
                            COMPANY
                          </label>
                          <input onFocus={() => setFocused("company")} onBlur={() => setFocused(null)} type="text" id="company" name="company" className={fieldClass} placeholder="Your company" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="email" className={`block text-xs font-bold tracking-widest transition-colors ${focused === "email" ? "text-primary" : "text-gray-700"}`}>
                            EMAIL *
                          </label>
                          <input onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} type="email" id="email" name="email" required className={fieldClass} placeholder="you@company.com" />
                        </div>
                        <div>
                          <label htmlFor="phone" className={`block text-xs font-bold tracking-widest transition-colors ${focused === "phone" ? "text-primary" : "text-gray-700"}`}>
                            PHONE
                          </label>
                          <input onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} type="tel" id="phone" name="phone" className={fieldClass} placeholder="+91 98xxx xxxxx" />
                        </div>
                      </div>

                      <div>
                        <p className={`text-xs font-bold tracking-widest ${focused === "subject" ? "text-primary" : "text-gray-700"}`}>SUBJECT *</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {subjects.map((s) => (
                            <button
                              key={s.value}
                              type="button"
                              onClick={() => setSubject(s.value)}
                              className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300 ${
                                subject === s.value
                                  ? "bg-primary text-white shadow-md shadow-primary/25"
                                  : "bg-slate-50 text-secondary ring-1 ring-gray-200 hover:ring-primary/30 hover:bg-primary/5"
                              }`}
                            >
                              {s.label}
                            </button>
                          ))}
                        </div>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          onFocus={() => setFocused("subject")}
                          onBlur={() => setFocused(null)}
                          className={`${fieldClass} mt-3`}
                        >
                          <option value="">Or choose from the list</option>
                          {subjects.map((s) => (
                            <option key={s.value} value={s.value}>
                              {s.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="message" className={`text-xs font-bold tracking-widest transition-colors ${focused === "message" ? "text-primary" : "text-gray-700"}`}>
                            MESSAGE *
                          </label>
                          <span className="text-[10px] font-medium text-gray-400">{messageLen}/1200</span>
                        </div>
                        <textarea
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused(null)}
                          onChange={(e) => setMessageLen(e.target.value.length)}
                          id="message"
                          name="message"
                          rows={5}
                          maxLength={1200}
                          required
                          className={`${fieldClass} resize-none`}
                          placeholder="Specs, quantity, destination port, packing, required certificates..."
                        />
                      </div>

                      <div className="flex flex-col gap-3 sm:flex-row">
                        <MagneticButton
                          type="submit"
                          disabled={formStatus === "sending"}
                          className="btn-shine group inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-primary/25 hover:bg-primary-dark disabled:opacity-50 sm:w-auto"
                        >
                          {formStatus === "sending" ? (
                            <>
                              <svg className="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send message
                              <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
                            </>
                          )}
                        </MagneticButton>
                        <a
                          href={waHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:bg-[#1ebe5a] hover:-translate-y-0.5 sm:w-auto"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.05 4.91A9.91 9.91 0 0012 2a9.96 9.96 0 00-8.51 15.09L2 22l5.02-1.32A9.97 9.97 0 0012 22c5.52 0 10-4.48 10-10 0-2.67-1.04-5.18-2.95-7.09zM12 20a8 8 0 01-4.08-1.11l-.29-.17-2.98.78.79-2.89-.19-.3A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8 2.14 0 4.15.83 5.66 2.34A7.95 7.95 0 0120 12c0 4.41-3.59 8-8 8zm4.37-5.9c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.64-1.19-1.42-1.33-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.39-.4-.54-.41l-.46-.01c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.57.18 1.09.16 1.5.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
                          </svg>
                          WhatsApp
                        </a>
                      </div>
                      <p className="text-xs text-gray-400">
                        By sending, you agree to our{" "}
                        <Link href="/privacy" className="font-semibold text-primary hover:underline">
                          Privacy Policy
                        </Link>
                        . We reply within 24 hours on working days.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-widest text-primary">FAQ</div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary">Before you write</h2>
              <div className="section-divider mx-auto mt-3 w-16" />
            </div>
          </Reveal>
          <div className="mt-10 space-y-3">
            {faqs.map((item, i) => {
              const open = openFaq === i;
              return (
                <Reveal key={item.q} delay={i * 60}>
                  <div className="overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-gray-100 transition hover:ring-primary/20">
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-bold text-secondary">{item.q}</span>
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm ring-1 ring-gray-100 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                    <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <p className="px-5 pb-4 text-sm leading-relaxed text-gray-600">{item.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
