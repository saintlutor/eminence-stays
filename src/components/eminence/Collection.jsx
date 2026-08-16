import React from "react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import { PENTHOUSE_IMG, COTTAGE_IMG, SEASIDE_IMG } from "./images";
import { ArrowUpRight } from "lucide-react";

const PROPERTIES = [
  {
    name: "The Penthouse",
    location: "Manchester · City Centre",
    desc: "A vertical sanctuary above the skyline. Floor-to-ceiling glass frames the blue-hour cityscape while warm oak and stone ground the space.",
    img: PENTHOUSE_IMG,
    span: "tall",
    price: "From £240 / night",
  },
  {
    name: "The Stone Cottage",
    location: "Lake District",
    desc: "A secluded retreat of warm stone and climbing ivy. Golden-hour light, a log burner, and silence.",
    img: COTTAGE_IMG,
    span: "square",
    price: "From £180 / night",
  },
  {
    name: "The Horizon House",
    location: "Cornwall · Coastline",
    desc: "A wide, low home pressed against the sea. The horizon line runs through every room, anchoring the architecture to the tide.",
    img: SEASIDE_IMG,
    span: "wide",
    price: "From £320 / night",
  },
];

function PropertyCard({ p, index }) {
  const heightClass =
    p.span === "tall"
      ? "h-[78vh]"
      : p.span === "wide"
      ? "h-[60vh]"
      : "h-[52vh]";
  return (
    <Reveal delay={index * 0.1} className="group">
      <div className="relative overflow-hidden">
        <div className={`relative ${heightClass}`}>
          <Image
            src={p.img}
            alt={p.name}
            className="block w-full h-full transition-transform duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-basalt/50 via-transparent to-transparent" />
          <div className="absolute top-5 left-5 text-champagne/90 text-[10px] uppercase tracking-wide-sm">
            {String(index + 1).padStart(2, "0")} — {p.price}
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-champagne">
            <div>
              <p className="text-[10px] uppercase tracking-wide-sm text-champagne/70">{p.location}</p>
              <h3 className="font-display text-3xl md:text-4xl font-light mt-1">{p.name}</h3>
            </div>
            <ArrowUpRight
              size={22}
              strokeWidth={1}
              className="opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
            />
          </div>
        </div>
      </div>
      <p className="mt-5 max-w-md text-stone-mist text-[15px] leading-[1.7]">{p.desc}</p>
    </Reveal>
  );
}

export default function Collection() {
  return (
    <section id="collection" className="bg-champagne py-28 md:py-40">
      <div className="gutter-luxe">
        <Reveal>
          <p className="text-stone-mist text-[11px] uppercase tracking-luxe">The Curated Collection</p>
          <h2 className="mt-6 font-display text-basalt text-5xl md:text-7xl font-light leading-[1.05] max-w-3xl">
            Each stay, a standalone masterpiece.
          </h2>
          <p className="mt-6 max-w-xl text-stone-mist text-[17px] leading-[1.7]">
            Not a catalogue to skim — a collection to consider. We arrange each property as its own
            statement, with the breathing room it deserves.
          </p>
        </Reveal>

        {/* Staggered editorial grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-20">
          <div className="md:col-span-5">
            <PropertyCard p={PROPERTIES[0]} index={0} />
          </div>
          <div className="md:col-span-6 md:col-start-8 md:mt-40">
            <PropertyCard p={PROPERTIES[1]} index={1} />
          </div>
          <div className="md:col-span-12">
            <PropertyCard p={PROPERTIES[2]} index={2} />
          </div>
        </div>

        <Reveal className="mt-20 flex justify-center">
          <a
            href="#enquiry"
            className="group inline-flex items-center gap-3 border-b border-basalt/40 pb-1 text-basalt text-[12px] uppercase tracking-wide-sm"
          >
            Enquire about a property
            <span className="h-px w-8 bg-basalt/40 transition-all duration-500 group-hover:w-14" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}