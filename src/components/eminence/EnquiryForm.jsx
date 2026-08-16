import React, { useState } from "react";
import Reveal from "./Reveal";
import { supabase } from "@/lib/supabase";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const LOCATIONS = ["London", "Manchester", "Edinburgh", "Birmingham", "Other"];
const RENTAL_TYPES = ["Short-term (daily or weekly)", "Long-term (6+ months)"];
const GUESTS = ["1-2", "3-4", "5+"];
const PROPERTY_TYPES = ["Apartment", "Holiday home", "Furnished house"];
const TIMING = ["ASAP", "Within 1 week", "Within 1 month", "1–3 months", "Just browsing"];

function Field({ label, children, required }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] uppercase tracking-wide-sm text-stone-mist">
        {label}{required && <span className="text-basalt"> *</span>}
      </span>
      {children}
    </label>
  );
}

const inputBase =
  "bg-transparent border-b border-basalt/25 py-3 text-basalt text-[16px] placeholder:text-stone-mist/50 focus:outline-none focus:border-basalt transition-colors";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    current_address: "",
    preferred_location: "",
    rental_type: "",
    number_of_guests: "",
    monthly_budget: "",
    preferred_property_type: "",
    move_in_timing: "",
    additional_requirements: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.full_name || !form.email) {
      setError("Please share your name and email so we can reach you.");
      return;
    }
    setSubmitting(true);
    try {
      const { error: insertError } = await supabase
        .from("eminence_enquiries")
        .insert(form);
      if (insertError) throw insertError;
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong sending your enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="enquiry" className="bg-champagne py-28 md:py-40">
      <div className="gutter-luxe grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <Reveal className="md:col-span-4">
          <p className="text-stone-mist text-[11px] uppercase tracking-luxe">Make an enquiry</p>
          <h2 className="mt-6 font-display text-basalt text-5xl md:text-6xl font-light leading-[1.05]">
            One enquiry.<br />A thousand doors.
          </h2>
          <p className="mt-6 text-stone-mist text-[16px] leading-[1.7] max-w-sm">
            Tell us what you're looking for and we'll match you with the right stay. No deposit to
            enquire — we confirm availability and the exact amount before you commit.
          </p>
          <div className="mt-10 space-y-4 text-[14px] text-stone-mist leading-[1.7]">
            <p>
              <span className="block text-[11px] uppercase tracking-wide-sm text-basalt">Payment</span>
              Short stays: pay only the full cost by bank transfer. Long-term: a fully refundable £500
              reservation deposit, deducted from your rent.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-7 md:col-start-6">
          {submitted ? (
            <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center border border-stone-mist/20 px-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-stone-mist">
                <Check size={26} strokeWidth={1.25} className="text-basalt" />
              </div>
              <h3 className="mt-8 font-display text-4xl font-light text-basalt">
                Enquiry received.
              </h3>
              <p className="mt-4 max-w-md text-stone-mist text-[16px] leading-[1.7]">
                Thank you, {form.full_name.split(" ")[0] || "guest"}. Our concierge team will be in
                touch shortly to confirm availability and your next steps.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 border-b border-basalt/40 pb-1 text-[12px] uppercase tracking-wide-sm text-basalt"
              >
                Make another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              <Field label="Full name" required>
                <input
                  className={inputBase}
                  value={form.full_name}
                  onChange={(e) => set("full_name", e.target.value)}
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email" required>
                <input
                  type="email"
                  className={inputBase}
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="you@email.com"
                />
              </Field>
              <Field label="Phone number">
                <input
                  className={inputBase}
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="+44 …"
                />
              </Field>
              <Field label="Current residential address">
                <input
                  className={inputBase}
                  value={form.current_address}
                  onChange={(e) => set("current_address", e.target.value)}
                  placeholder="City, country"
                />
              </Field>
              <Field label="Preferred UK location">
                <select
                  className={cn(inputBase, "appearance-none")}
                  value={form.preferred_location}
                  onChange={(e) => set("preferred_location", e.target.value)}
                >
                  <option value="">Select…</option>
                  {LOCATIONS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field label="Rental type">
                <select
                  className={cn(inputBase, "appearance-none")}
                  value={form.rental_type}
                  onChange={(e) => set("rental_type", e.target.value)}
                >
                  <option value="">Select…</option>
                  {RENTAL_TYPES.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field label="Number of guests or occupants">
                <select
                  className={cn(inputBase, "appearance-none")}
                  value={form.number_of_guests}
                  onChange={(e) => set("number_of_guests", e.target.value)}
                >
                  <option value="">Select…</option>
                  {GUESTS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field label="Monthly budget (in GBP)">
                <input
                  className={inputBase}
                  value={form.monthly_budget}
                  onChange={(e) => set("monthly_budget", e.target.value)}
                  placeholder="e.g. £1,800"
                />
              </Field>
              <Field label="Preferred property type">
                <select
                  className={cn(inputBase, "appearance-none")}
                  value={form.preferred_property_type}
                  onChange={(e) => set("preferred_property_type", e.target.value)}
                >
                  <option value="">Select…</option>
                  {PROPERTY_TYPES.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field label="When do you want to move in?">
                <select
                  className={cn(inputBase, "appearance-none")}
                  value={form.move_in_timing}
                  onChange={(e) => set("move_in_timing", e.target.value)}
                >
                  <option value="">Select…</option>
                  {TIMING.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Anything else we should know?">
                  <textarea
                    rows={3}
                    className={cn(inputBase, "resize-none")}
                    value={form.additional_requirements}
                    onChange={(e) => set("additional_requirements", e.target.value)}
                    placeholder="Additional requirements, preferences, dates…"
                  />
                </Field>
              </div>

              {error && (
                <p className="sm:col-span-2 text-[14px] text-destructive">{error}</p>
              )}

              <div className="sm:col-span-2 flex items-center gap-6 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-3 bg-basalt text-champagne px-10 py-4 text-[11px] uppercase tracking-wide-sm transition-colors hover:bg-stone-mist disabled:opacity-60"
                >
                  {submitting && <Loader2 size={15} className="animate-spin" />}
                  {submitting ? "Sending" : "Send enquiry"}
                </button>
                <p className="text-[12px] text-stone-mist">We reply within one business day.</p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}