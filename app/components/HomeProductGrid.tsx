"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import QuoteModal from "./QuoteModal";

type Product = {
  id: string;
  sr: string;
  name: string;
  variant: string;
  description: string;
  image: string;
  specs: string;
  price: string;
  moq: string;
};

export default function HomeProductGrid({ products }: { products: Product[] }) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<Product | null>(null);

  const openQuote = (p: Product) => {
    setQuoteProduct(p);
    setQuoteOpen(true);
  };

  return (
    <>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, i) => (
          <Reveal key={`${product.image}-${i}`} delay={i * 90}>
            <TiltCard className="h-full">
              <div className="spotlight-card group flex h-full flex-col overflow-hidden rounded-[20px] bg-white p-[1.5px] shadow-sm">
                <div className="flex h-full flex-col overflow-hidden rounded-[18px] bg-white">
                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-periwinkle/0 to-sky/0 opacity-0 transition duration-500 group-hover:from-primary/[0.06] group-hover:via-periwinkle/10 group-hover:to-sky/10 group-hover:opacity-100" />
                    <img src={product.image} alt={`${product.name} ${product.variant}`} className="h-full max-h-48 w-auto object-contain drop-shadow-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-bold tracking-widest text-white shadow-sm">IN STOCK</span>
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[10px] font-bold tracking-widest text-white shadow-sm">SR #{product.sr}</span>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-steel-gray/60">
                      <span className="h-px w-4 bg-primary/30" /> ITEM #{product.id} • {product.variant}
                    </div>
                    <h3 className="mt-2 text-[15px] font-bold tracking-tight text-secondary transition-colors group-hover:text-primary">{product.name}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-gray-600">{product.description}</p>
                    <div className="mt-3 rounded-xl bg-slate-50 p-3 ring-1 ring-gray-100">
                      <div className="text-[11px] font-bold tracking-widest text-primary/70">SPECS</div>
                      <div className="mt-1 text-xs leading-relaxed text-gray-600">{product.specs}</div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm font-extrabold text-secondary">{product.price} <span className="text-xs font-medium text-gray-500">with GST & Transport</span></span>
                        <span className="rounded-full bg-white px-2 py-1 text-[11px] font-bold text-secondary ring-1 ring-gray-200">MOQ {product.moq}</span>
                      </div>
                    </div>
                    <div className="mt-auto pt-4">
                      <button
                        type="button"
                        onClick={() => openQuote(product)}
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
        ))}
      </div>
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} product={quoteProduct} />
    </>
  );
}
