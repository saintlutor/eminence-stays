import React from "react";
import Reveal from "./Reveal";

const STEPS = [
  {
    no: "01",
    title: "Enquire",
    body: "Tell us what you're looking for — location, dates, guests, budget, or the occasion you're celebrating. One simple form, no deposit to enquire.",
  },
  {
    no: "02",
    title: "Confirm availability",
    body: "We confirm availability and the exact amount, payable by bank transfer. Short stays pay only the full booking total.",
  },
  {
    no: "03",
    title: "Arrive",
    body: "For long-term stays, a fully refundable £500 reservation deposit secures your home — deducted from your rent. Then you simply arrive.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-basalt text-champagne py-28 md:py-40">
      <div className="gutter-luxe">
        <Reveal>
          <p className="text-champagne/50 text-[11px] uppercase tracking-luxe">The journey</p>
          <h2 className="mt-6 font-display text-5xl md:text-7xl font-light leading-[1.05] max-w-3xl">
            Enquire. Transfer. Arrive.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.no}
              delay={i * 0.12}
              className="border-t border-champagne/15 pt-8 md:pr-10 md:border-l md:first:border-l-0 md:pl-0"
            >
              <span className="font-display text-6xl font-light text-stone-mist/80">{s.no}</span>
              <h3 className="mt-6 font-display text-3xl font-light">{s.title}</h3>
              <p className="mt-4 text-champagne/60 text-[16px] leading-[1.7] max-w-sm">{s.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <a
            href="#enquiry"
            className="inline-flex items-center gap-3 bg-champagne text-basalt px-8 py-4 text-[11px] uppercase tracking-wide-sm transition-colors hover:bg-stone-mist hover:text-champagne"
          >
            Begin your enquiry
          </a>
        </Reveal>
      </div>
    </section>
  );
}