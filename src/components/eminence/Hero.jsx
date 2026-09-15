import React from "react";
import { Image } from "@/components/ui/image";
import { HERO_IMG } from "./images";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden bg-basalt">
      <div className="absolute inset-0 animate-scale-slow">
        <Image
          src={HERO_IMG}
          alt="A luxury villa interior at golden hour overlooking a misty mountain valley"
          className="block w-full h-full object-cover"
        />
      </div>
      {/* tonal grade for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/60" />

      {/* Split headline */}
      <div className="relative z-10 flex h-full flex-col justify-between gutter-luxe py-32">
        <div className="animate-fade-up">
          <p className="text-champagne/70 text-[11px] uppercase tracking-luxe">
            A curated collection of UK stays
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h1
            className="hero-headline text-champagne text-[19vw] sm:text-[16vw] md:text-[13vw] lg:text-[10rem]"
            style={{ textShadow: "0 2px 40px rgba(0,0,0,0.55), 0 1px 12px rgba(0,0,0,0.5)" }}
          >
            <span className="block animate-fade-up">Elevate</span>
            <span
              className="block self-end text-right animate-fade-up italic font-light text-champagne/85"
              style={{ animationDelay: "0.15s" }}
            >
              your stay
            </span>
          </h1>
        </div>

        <div className="flex items-end justify-between animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#enquiry"
            className="group inline-flex items-center gap-3 text-champagne"
          >
            <span className="text-[11px] uppercase tracking-wide-sm">Begin your enquiry</span>
            <span className="h-px w-12 bg-champagne/60 transition-all duration-500 group-hover:w-20" />
          </a>
          <div className="hidden sm:flex flex-col items-center gap-2 text-champagne/60">
            <span className="text-[10px] uppercase tracking-wide-sm">Scroll</span>
            <ChevronDown size={16} strokeWidth={1} className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}