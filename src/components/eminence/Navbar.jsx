import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Collection", href: "#collection" },
  { label: "Short Stays", href: "#short-stays" },
  { label: "Long Stays", href: "#long-stays" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

function Wordmark({ onClick, light }) {
  return (
    <a href="#top" onClick={onClick} className="group flex flex-col leading-none">
      <span className="flex items-baseline gap-2">
        <span className={cn("font-display text-2xl font-medium tracking-wide-sm transition-colors", light ? "text-champagne" : "text-basalt")}>
          Eminence
        </span>
        <span className={cn("font-display text-2xl font-light italic transition-colors", light ? "text-champagne/70" : "text-stone-mist")}>Stays</span>
      </span>
      <span className={cn("mt-0.5 text-[9px] tracking-luxe uppercase transition-colors", light ? "text-champagne/70" : "text-stone-mist")}>
        Elevate Your Stay
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-champagne/85 backdrop-blur-xl border-b border-stone-mist/15 py-3"
            : "bg-transparent py-6"
        )}
      >
        <div className="gutter-luxe flex items-center justify-between">
          <Wordmark onClick={() => setOpen(false)} light={!scrolled} />

          <nav className="hidden items-center gap-9 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "relative text-[11px] uppercase tracking-wide-sm transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-stone-mist after:transition-all after:duration-500 hover:after:w-full",
                  scrolled ? "text-basalt/70 hover:text-basalt" : "text-champagne/85 hover:text-champagne"
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#enquiry"
              className={cn(
                "hidden sm:inline-flex items-center px-6 py-3 text-[11px] uppercase tracking-wide-sm transition-all border",
                scrolled
                  ? "bg-basalt text-champagne border-basalt hover:bg-stone-mist hover:border-stone-mist"
                  : "bg-champagne/10 text-champagne border-champagne/40 backdrop-blur-sm hover:bg-champagne/20"
              )}
            >
              Make an Enquiry
            </a>
            <button
              className={cn("lg:hidden transition-colors", scrolled ? "text-basalt" : "text-champagne")}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-basalt text-champagne transition-all duration-700",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="gutter-luxe flex items-center justify-between py-6">
          <Wordmark onClick={() => setOpen(false)} />
          <button className="text-champagne" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={24} strokeWidth={1.25} />
          </button>
        </div>
        <nav className="gutter-luxe mt-20 flex flex-col gap-2">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "font-display text-5xl font-light text-champagne/90 hover:text-champagne transition-all border-b border-champagne/10 py-5",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              )}
              style={{ transitionDelay: open ? `${i * 60 + 200}ms` : "0ms" }}
            >
              <span className="text-xs align-top text-stone-mist mr-4 font-body tracking-wide-sm">
                0{i + 1}
              </span>
              {l.label}
            </a>
          ))}
          <a
            href="#enquiry"
            onClick={() => setOpen(false)}
            className="mt-10 inline-block bg-champagne text-basalt px-8 py-4 text-[11px] uppercase tracking-wide-sm self-start"
          >
            Make an Enquiry
          </a>
        </nav>
      </div>
    </>
  );
}