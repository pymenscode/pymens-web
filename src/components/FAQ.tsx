"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Does it work on outdoor courts?",
    a: "Yes. Works on hardwood, concrete, and rubberized outdoor courts. Outdoor courts may need a second application mid-game.",
  },
  {
    q: "Will it damage my shoes?",
    a: "No. Safe for all rubber, foam, and composite basketball soles. Won't break down materials or affect shoe structure.",
  },
  {
    q: "How long does the grip last?",
    a: "Typically one full game per application. For dusty courts, reapply during timeouts or halftime.",
  },
  {
    q: "Does it leave residue on the floor?",
    a: "Zero residue — on your soles and on the court floor. Other players won't notice a thing.",
  },
  {
    q: "How many applications per bottle?",
    a: "~50–70 applications per 4oz bottle (2–3 pumps per shoe per session). Enough for a full season.",
  },
  {
    q: "Is the microfiber cloth included?",
    a: "Yes. Every bottle includes a PYMENS branded microfiber cloth.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="w-full text-left flex items-start justify-between gap-6 py-6"
        onClick={() => setOpen(!open)}
      >
        <span className="font-bold text-white text-sm">{q}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 text-[#F26522] transition-transform duration-200 mt-0.5 ${open ? "rotate-45" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
      {open && (
        <p className="pb-6 text-gray-500 text-sm leading-relaxed -mt-2">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-[#0f0f0f] py-24 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="mb-12">
          <p className="text-[#F26522] font-black text-xs uppercase tracking-[0.3em] mb-5">
            Questions
          </p>
          <h2 className="text-5xl font-black uppercase leading-[1]">FAQ</h2>
        </div>
        <div>
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
