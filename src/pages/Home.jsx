import React from "react";
import Navbar from "@/components/eminence/Navbar";
import Hero from "@/components/eminence/Hero";
import Collection from "@/components/eminence/Collection";
import { ShortStays, LongStays, SectionBreakWater, SectionBreakWood } from "@/components/eminence/StaysNarrative";
import HowItWorks from "@/components/eminence/HowItWorks";
import Reviews from "@/components/eminence/Reviews";
import Faq from "@/components/eminence/Faq";
import EnquiryForm from "@/components/eminence/EnquiryForm";
import Footer from "@/components/eminence/Footer";

export default function Home() {
  return (
    <div className="bg-champagne text-basalt min-h-screen font-body antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Collection />
        <ShortStays />
        <SectionBreakWater />
        <LongStays />
        <SectionBreakWood />
        <HowItWorks />
        <Reviews />
        <Faq />
        <EnquiryForm />
      </main>
      <Footer />
    </div>
  );
}