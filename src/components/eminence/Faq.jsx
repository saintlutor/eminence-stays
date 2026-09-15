import React, { useState } from "react";
import Reveal from "./Reveal";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "When is the £500 deposit required?",
    a: "Only for long-term stays of six months or more. Short stays — daily or weekly — never require a deposit to enquire or to confirm.",
  },
  {
    q: "Is the £500 refundable?",
    a: "Yes. The £500 reservation deposit is fully refundable, and if you proceed with the let it is deducted directly from your rent.",
  },
  {
    q: "How do short-stay payments work?",
    a: "Short stays pay only the full cost of the day or days you book, by bank transfer. No deposit, no hidden extras — we confirm the exact amount before you commit.",
  },
  {
    q: "Can I book The Party House for a celebration?",
    a: "Yes — birthdays, reunions and celebrations are exactly what it's for. Choose “Party house” in the enquiry form and tell us the occasion, dates and headcount. We confirm availability, the house rules and the exact total before you commit. It's priced per night from £450 and paid in full by bank transfer, like any short stay.",
  },
  {
    q: "Does payment guarantee the property?",
    a: "We confirm availability first. Once the agreed amount is received by bank transfer, your stay is secured. We'll walk you through every step.",
  },
  {
    q: "Are the homes fully furnished?",
    a: "Every property comes complete with bedding, towels and kitchen essentials. For long lets, utilities can be bundled into one simple monthly payment.",
  },
];

function Item({ faq, open, onToggle }) {
  return (
    <div className="border-t border-basalt/15">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-7 text-left"
      >
        <span className="font-display text-2xl md:text-3xl font-light text-basalt">{faq.q}</span>
        <span className="shrink-0 text-basalt">
          {open ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-8 max-w-2xl text-stone-mist text-[16px] leading-[1.7]">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className="bg-champagne py-28 md:py-40">
      <div className="gutter-luxe grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <Reveal className="md:col-span-4">
          <p className="text-stone-mist text-[11px] uppercase tracking-luxe">Good to know</p>
          <h2 className="mt-6 font-display text-basalt text-5xl md:text-6xl font-light leading-[1.05]">
            Questions, answered.
          </h2>
          <p className="mt-6 text-stone-mist text-[16px] leading-[1.7] max-w-sm">
            Straight answers to the questions we hear most before a stay. Still unsure? Ask us directly.
          </p>
          <a
            href="#enquiry"
            className="mt-8 inline-block border-b border-basalt/40 pb-1 text-basalt text-[12px] uppercase tracking-wide-sm"
          >
            Ask us directly
          </a>
        </Reveal>

        <div className="md:col-span-7 md:col-start-6">
          <div className="border-b border-basalt/15">
            {FAQS.map((faq, i) => (
              <Item
                key={faq.q}
                faq={faq}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}