// Lightweight bridge so any part of the site (e.g. a collection card) can
// pre-fill the enquiry form before scrolling to it.
export const ENQUIRY_PREFILL_EVENT = "eminence:enquiry-prefill";

export function prefillEnquiry(fields) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(ENQUIRY_PREFILL_EVENT, { detail: fields }));
}
