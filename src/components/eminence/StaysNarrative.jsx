import React from "react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import { BEDROOM_IMG, LONGLIVING_IMG, WATERDROP_IMG, WOOD_IMG } from "./images";

const SHORT_POINTS = [
  { title: "Book by the day", body: "Need a base for a few nights? Stylish flats and holiday homes, ready when you are." },
  { title: "Or settle in weekly", body: "Staying a week or two keeps your budget kinder, and keeps you in the same home throughout." },
  { title: "Fully furnished, ready now", body: "Bedding, towels, kitchen essentials — every home comes complete. Just bring your bags." },
  { title: "Celebrate together", body: "Birthdays, reunions, hen and stag weekends — The Party House sleeps the whole group under one roof, from £450 a night." },
];

const LONG_POINTS = [
  { title: "Furnished and ready", body: "Move in with nothing but your bags. Every home is fully furnished and equipped for daily life." },
  { title: "Bills made simple", body: "One monthly payment covers rent and essential utilities — no surprise costs to chase." },
  { title: "Your own postcode", body: "Register for a GP, set up a gym, get mail delivered. It's a home, not just a let." },
];

function SectionBreak({ img }) {
  return (
    <div className="relative h-[42vh] min-h-[280px] overflow-hidden">
      <Image src={img} alt="" className="block w-full h-full object-cover" />
      <div className="absolute inset-0 bg-basalt/10" />
    </div>
  );
}

export function ShortStays() {
  return (
    <section id="short-stays" className="bg-champagne py-28 md:py-40">
      <div className="gutter-luxe grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        <Reveal className="md:col-span-5 order-2 md:order-1">
          <p className="text-stone-mist text-[11px] uppercase tracking-luxe">Short-term stays</p>
          <h2 className="mt-6 font-display text-basalt text-5xl md:text-6xl font-light leading-[1.05]">
            By the day,<br />or by the week.
          </h2>
          <p className="mt-6 max-w-md text-stone-mist text-[17px] leading-[1.7]">
            Skip the one-size-fits-all rental. From city apartments to countryside retreats across
            the UK, we match you with a home that fits your plans — not the other way round.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7">
            {SHORT_POINTS.map((pt) => (
              <div key={pt.title}>
                <h3 className="font-display text-xl text-basalt">{pt.title}</h3>
                <p className="mt-1.5 text-stone-mist text-[14px] leading-[1.65]">{pt.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-6 md:col-start-7 order-1 md:order-2">
          <div className="relative h-[70vh] overflow-hidden">
            <Image
              src={BEDROOM_IMG}
              alt="A bright, airy short-stay bedroom with fresh linen"
              className="block w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionBreakWater() {
  return <SectionBreak img={WATERDROP_IMG} />;
}

export function LongStays() {
  return (
    <section id="long-stays" className="bg-champagne py-28 md:py-40">
      <div className="gutter-luxe grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        <Reveal className="md:col-span-6">
          <div className="relative h-[70vh] overflow-hidden">
            <Image
              src={LONGLIVING_IMG}
              alt="An elegant furnished long-term apartment living room"
              className="block w-full h-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-5 md:col-start-8">
          <p className="text-stone-mist text-[11px] uppercase tracking-luxe">Long let · six months or more</p>
          <h2 className="mt-6 font-display text-basalt text-5xl md:text-6xl font-light leading-[1.05]">
            One place<br />to call home.
          </h2>
          <p className="mt-6 max-w-md text-stone-mist text-[17px] leading-[1.7]">
            Settle into a furnished UK property for six months or longer, with flexible terms that
            work around your life.
          </p>
          <div className="mt-10 flex flex-col gap-7">
            {LONG_POINTS.map((pt, i) => (
              <div key={pt.title} className="flex gap-5 border-t border-stone-mist/20 pt-5">
                <span className="text-stone-mist text-[11px] tracking-wide-sm mt-1">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl text-basalt">{pt.title}</h3>
                  <p className="mt-1.5 text-stone-mist text-[14px] leading-[1.65]">{pt.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionBreakWood() {
  return <SectionBreak img={WOOD_IMG} />;
}