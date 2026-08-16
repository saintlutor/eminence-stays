import React from "react";

const LINKS = [
  { label: "Collection", href: "#collection" },
  { label: "Short Stays", href: "#short-stays" },
  { label: "Long Stays", href: "#long-stays" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-basalt text-champagne">
      <div className="gutter-luxe py-20 md:py-28">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-medium tracking-wide-sm">Eminence</span>
              <span className="font-display text-3xl font-light italic text-stone-mist">Stays</span>
            </div>
            <p className="mt-1 text-[9px] tracking-luxe uppercase text-stone-mist">
              Elevate Your Stay
            </p>
            <p className="mt-8 text-champagne/60 text-[15px] leading-[1.7]">
              A curated collection of luxury UK stays — by the day, the week, or the season.
              One simple enquiry, a thousand doors.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-16 gap-y-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-champagne/70 text-[12px] uppercase tracking-wide-sm transition-colors hover:text-champagne"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div>
            <p className="text-[11px] uppercase tracking-wide-sm text-champagne/50">Concierge</p>
            <a href="mailto:concierge@eminencestays.co.uk" className="mt-4 block font-display text-2xl font-light text-champagne">
              concierge@eminencestays.co.uk
            </a>
            <a href="#enquiry" className="mt-6 inline-block border-b border-champagne/40 pb-1 text-[12px] uppercase tracking-wide-sm text-champagne">
              Make an enquiry
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-champagne/15 pt-8 text-[11px] uppercase tracking-wide-sm text-champagne/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Eminence Stays. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="transition-colors hover:text-champagne">Privacy</a>
            <a href="#" className="transition-colors hover:text-champagne">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}