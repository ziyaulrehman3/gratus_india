"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What products does Gratus India manufacture?",
    a: "We manufacture steel pipes and tubes, wire products, sheets and coils, and fasteners — built to export-quality standards with in-house lab verification on every batch.",
  },
  {
    q: "Where is your manufacturing facility located?",
    a: "Our plant is at Rampur Doraha, Kashipur Road, Moradabad (Uttar Pradesh). We ship across India and support export packing and documentation.",
  },
  {
    q: "Can you manufacture to custom specifications?",
    a: "Yes. Share grade, size, coating, quantity and destination. Our team confirms feasibility, lead time and a detailed quotation — usually within one business day.",
  },
  {
    q: "How do you ensure quality and on-time delivery?",
    a: "Automated lines, in-house testing, and documented QC at each stage. We currently hold a 99.2% on-time dispatch record with quality documents ready for every order.",
  },
  {
    q: "What is the typical order process?",
    a: "Inquiry → spec review → quotation → sample (if needed) → PI / contract → production → inspection → dispatch. You get updates at each step.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="py-1">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[15px] font-semibold tracking-tight text-secondary sm:text-base">
                {item.q}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg font-light text-secondary transition-transform duration-300 ${
                  isOpen ? "rotate-45 bg-secondary text-white" : "bg-gray-100"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pr-12 text-sm leading-relaxed text-gray-600">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
