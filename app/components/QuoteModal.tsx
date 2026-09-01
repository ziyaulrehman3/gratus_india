"use client";

import { useEffect, useState } from "react";

type ProductInfo = {
  id?: string;
  sr?: string;
  name?: string;
  variant?: string;
  price?: string;
};

type StoredUser = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
};

const STORAGE_KEY = "gratus_user_details";

export default function QuoteModal({
  open,
  onClose,
  product,
}: {
  open: boolean;
  onClose: () => void;
  product: ProductInfo | null;
}) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Load from localStorage when open
  useEffect(() => {
    if (!open) return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data: StoredUser = JSON.parse(raw);
        if (data.name) setName(data.name);
        if (data.company) setCompany(data.company);
        if (data.email) setEmail(data.email);
        if (data.phone) setPhone(data.phone);
      }
    } catch {}
    setSubmitted(false);
  }, [open]);

  // ESC close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const productId = product ? `ITEM #${product.id || product.sr || ""} • SR #${product.sr || ""}`.trim() : "";
  const productLabel = product ? `${product.name || ""} ${product.variant ? `• ${product.variant}` : ""} ${product.price ? `• ${product.price}` : ""}`.trim() : "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: StoredUser = { name, company, email, phone };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {}
    // Also store last quote request
    try {
      const quote = { ...data, productId, productLabel, at: new Date().toISOString() };
      localStorage.setItem("gratus_last_quote", JSON.stringify(quote));
    } catch {}
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#091540]/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg rounded-[24px] bg-white p-6 shadow-[0_24px_64px_rgba(9,21,64,0.22)] ring-1 ring-black/5 sm:p-7">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-secondary hover:bg-secondary hover:text-white transition"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="inline-flex items-center gap-2 rounded-full bg-[#f4f5f7] px-3 py-1 text-[11px] font-bold tracking-widest text-primary ring-1 ring-black/5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> GET QUOTE
        </div>
        <h3 className="mt-3 text-xl font-extrabold tracking-tight text-secondary sm:text-2xl">Request a Quote</h3>
        <p className="mt-1 text-sm text-gray-500">Fill your details — we’ll save them for next time.</p>

        {product && (
          <div className="mt-4 rounded-xl bg-slate-50 p-3 ring-1 ring-gray-100">
            <div className="text-[11px] font-bold tracking-widest text-primary/60">PRODUCT</div>
            <div className="mt-1 text-sm font-bold text-secondary">{productLabel || product.name}</div>
            <div className="text-xs font-semibold text-primary">{productId}</div>
          </div>
        )}

        {submitted ? (
          <div className="mt-6 rounded-xl bg-emerald-50 p-4 text-center ring-1 ring-emerald-200">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">✓</div>
            <div className="mt-2 text-sm font-bold text-emerald-800">Quote request saved!</div>
            <div className="text-xs text-emerald-700">We’ll contact you soon. Details saved locally.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-3">
            <div>
              <label className="block text-xs font-bold tracking-wide text-secondary">Full Name *</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-wide text-secondary">Company</label>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company name (optional)"
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold tracking-wide text-secondary">Email *</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-wide text-secondary">Phone *</label>
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 9XXXXXXXXX"
                  className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold tracking-wide text-secondary">Product ID</label>
              <input
                value={productId}
                readOnly
                className="mt-1 w-full rounded-xl border border-gray-200 bg-slate-50 px-3 py-2.5 text-sm font-mono text-secondary"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Save & Request Quote →
            </button>
            <p className="text-center text-[11px] text-gray-400">Details saved locally (name, email, phone, company) for faster next quote.</p>
          </form>
        )}
      </div>
    </div>
  );
}
