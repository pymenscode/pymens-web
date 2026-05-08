"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Does it work on outdoor courts?",
    a: "Yes. Works on hardwood, concrete, and rubberized outdoor courts. Outdoor courts may need a second application mid-game due to rougher surface.",
  },
  {
    q: "Will it damage my shoes?",
    a: "No. The formula is safe for all rubber, foam, and composite basketball soles. It won't break down the sole material.",
  },
  {
    q: "How long does the grip last?",
    a: "Typically one full game with a pre-game application. For dusty courts, reapply during timeouts or halftime.",
  },
  {
    q: "Does it leave residue on the floor?",
    a: "No residue at all — unlike sticky pads or other solutions. It won't affect other players on the court.",
  },
  {
    q: "How many applications per bottle?",
    a: "The 4oz / 120ml bottle gives approximately 50–70 applications (2–3 pumps per shoe per session). A full season of use.",
  },
  {
    q: "Is the microfiber cloth included?",
    a: "Yes. Every bottle ships with a PYMENS branded microfiber cloth for wiping and spreading evenly.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full text-left flex items-start justify-between gap-4 py-5"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-[#111] text-sm">{q}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 text-[#5B2D8E] transition-transform duration-200 mt-0.5 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <p className="pb-5 text-gray-500 text-sm leading-relaxed -mt-1">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-[#FAF8F5] py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#5B2D8E] font-bold text-xs uppercase tracking-widest mb-3">
            Got questions?
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#111] uppercase">
            FAQ
          </h2>
        </div>
        <div className="bg-white rounded-3xl border border-gray-100 px-8 py-2">
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
