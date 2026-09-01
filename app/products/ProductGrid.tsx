"use client";

import { useState } from "react";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import QuoteModal from "../components/QuoteModal";

type Product = {
  id?: string;
  sr: string;
  name: string;
  variant: string;
  description: string;
  image: string;
  specs: string;
  price: string;
  moq: string;
  source: string;
};

export default function ProductGrid({ products }: { products: Product[] }) {
  const INITIAL = 9; // 3 rows on lg (3 per row)
  const STEP = 6; // 2 rows per load more
  const [visible, setVisible] = useState(INITIAL);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<Product | null>(null);
  const shown = products.slice(0, visible);
  const remaining = products.length - visible;
  const hasMore = remaining > 0;

  const openQuote = (p: Product, idx: number) => {
    setQuoteProduct({ ...p, id: String(idx + 1).padStart(2, "0") });
    setQuoteOpen(true);
  };

  return (
    <>
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
        {shown.map((category, i) => {
          const itemId = String(i + 1).padStart(2, "0");
          return (
            <Reveal key={`${category.source}-${category.sr}-${category.variant}-${i}`} delay={(i % 9) * 40}>
              <TiltCard className="h-full">
                <div className="spotlight-card group flex h-full flex-col overflow-hidden rounded-[20px] bg-white p-[1.5px] shadow-sm">
                  <div className="flex h-full flex-col overflow-hidden rounded-[18px] bg-white">
                    <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-periwinkle/0 to-sky/0 opacity-0 transition duration-500 group-hover:from-primary/[0.06] group-hover:via-periwinkle/10 group-hover:to-sky/10 group-hover:opacity-100" />
                      <img
                        src={category.image || "/file.svg"}
                        alt={`${category.name} ${category.variant}`}
                        className="h-full max-h-48 w-auto object-contain drop-shadow-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-bold tracking-widest text-white shadow-sm">IN STOCK</span>
                      <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[10px] font-bold tracking-widest text-white shadow-sm">SR #{category.sr}</span>
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-steel-gray/60">
                        <span className="h-px w-4 bg-primary/30" /> ITEM #{itemId} • {category.variant}
                      </div>
                      <h3 className="mt-2 text-[15px] font-bold tracking-tight text-secondary transition-colors group-hover:text-primary">{category.name}</h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-gray-600">{category.description}</p>
                      <div className="mt-3 rounded-xl bg-slate-50 p-3 ring-1 ring-gray-100">
                        <div className="text-[11px] font-bold tracking-widest text-primary/70">SPECS</div>
                        <div className="mt-1 text-xs leading-relaxed text-gray-600">{category.specs}</div>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-sm font-extrabold text-secondary">{category.price} <span className="text-xs font-medium text-gray-500">with GST & Transport</span></span>
                          <span className="rounded-full bg-white px-2 py-1 text-[11px] font-bold text-secondary ring-1 ring-gray-200">MOQ {category.moq}</span>
                        </div>
                      </div>
                      <div className="mt-auto pt-4">
                        <button
                          type="button"
                          onClick={() => openQuote(category, i)}
                          className="relative z-10 inline-flex cursor-pointer items-center justify-center gap-1.5 self-start rounded-full bg-primary px-5 py-2.5 text-xs font-bold tracking-wide text-white shadow-sm ring-1 ring-primary/10 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-primary-dark hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 pointer-events-auto"
                        >
                          <span className="pointer-events-none">Get Quote</span> <svg className="pointer-events-none h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" /></svg>
                        </button>
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

      <div className="mt-10 flex flex-col items-center gap-3">
        <div className="text-xs font-medium tracking-wide text-gray-500">
          Showing <span className="font-bold text-secondary">{shown.length}</span> of <span className="font-bold text-secondary">{products.length}</span> products
        </div>
        {hasMore ? (
          <button
            onClick={() => setVisible((v) => Math.min(v + STEP, products.length))}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-secondary px-8 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(9,21,64,0.15)] transition-all hover:bg-[#0f1a5a] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Load More <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 group-hover:bg-white group-hover:text-secondary transition">→</span>
            <span className="ml-1 hidden sm:inline text-xs font-medium text-white/70">+{Math.min(STEP, remaining)} more</span>
          </button>
        ) : (
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> All products loaded
          </div>
        )}
        {hasMore && (
          <div className="text-[11px] text-gray-400">Load 2 rows (6 items) per click • {remaining} remaining</div>
        )}
      </div>
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} product={quoteProduct} />
    </>
  );
}
