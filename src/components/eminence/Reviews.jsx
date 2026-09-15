import React from "react";
import Reveal from "./Reveal";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    quote:
      "The London flat was spotless and exactly as pictured. Check-in was simple and the host checked in on us by message. We'll book again next visit.",
    name: "Emma Thompson",
    detail: "Weekend visitor to London",
  },
  {
    quote:
      "We needed a furnished place for six months while our house was renovated. The team found us a comfortable apartment fast. No stress at all.",
    name: "James Wilson",
    detail: "Long-term tenant in Manchester",
  },
  {
    quote:
      "Stayed for a month in a holiday cottage. It was quiet, warm and had everything we needed. The booking process was straightforward from start to finish.",
    name: "Priya Patel",
    detail: "Monthly stay in the Lake District",
  },
  {
    quote:
      "The team took the time to understand what we were looking for. We ended up in a lovely flat in Birmingham for three months. It felt like home.",
    name: "Daniel O'Connor",
    detail: "Relocation stay in Birmingham",
  },
  {
    quote:
      "We took the Party House for my mum's 60th. Twenty of us for the weekend and it never once felt crowded. The kitchen handled everything, and the gated drive meant no fuss over parking.",
    name: "Sophie Bennett",
    detail: "60th birthday at The Party House",
  },
  {
    quote:
      "Three nights with old university friends. Huge open living space, bedrooms for everyone, and the team sorted a late check-out without any bother. We're already talking about next year.",
    name: "Marcus Reid",
    detail: "Reunion weekend at The Party House",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-champagne py-28 md:py-40">
      <div className="gutter-luxe">
        <Reveal>
          <p className="text-stone-mist text-[11px] uppercase tracking-luxe">Guest voices</p>
          <h2 className="mt-6 font-display text-basalt text-5xl md:text-7xl font-light leading-[1.05] max-w-3xl">
            What guests say about their stay.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={(i % 2) * 0.1} className="flex flex-col">
              <div className="flex gap-1 text-stone-mist">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-6 font-display text-2xl md:text-[28px] font-light leading-[1.4] text-basalt">
                “{r.quote}”
              </p>
              <div className="mt-6">
                <p className="text-basalt text-[13px] uppercase tracking-wide-sm">{r.name}</p>
                <p className="text-stone-mist text-[13px] mt-1">{r.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}