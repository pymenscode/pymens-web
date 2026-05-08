"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Does it work on outdoor courts?",
    a: "Yes. Grip Spray Pro is formulated to work on hardwood, concrete, and rubberized outdoor courts. Outdoor courts may require a second application mid-game due to the rougher surface.",
  },
  {
    q: "Will it damage my shoes?",
    a: "No. The formula is safe for all rubber, foam, and composite basketball soles. It won't break down the sole material or affect the shoe's structure.",
  },
  {
    q: "How long does the grip last?",
    a: "Typically one full game with a pre-game application. For high-intensity sessions or dusty courts, you can reapply during timeouts or halftime.",
  },
  {
    q: "Does it leave a residue on the floor?",
    a: "No residue. Unlike some sticky pads or other solutions, Grip Spray Pro leaves no film on the court surface that could affect other players.",
  },
  {
    q: "How many applications per bottle?",
    a: "The 4oz bottle provides approximately 50–70 applications (2–3 pumps per shoe, per session), giving you a full season of use.",
  },
  {
    q: "Is the microfiber cloth included?",
    a: "Yes. Every bottle comes with a PYMENS branded microfiber cloth for wiping and spreading the spray evenly on your soles.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      className="w-full text-left card-purple rounded-2xl p-5 hover:border-[#7B3FBE]/50 transition-all duration-200"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-bold text-white text-sm">{q}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 text-[#F26522] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {open && (
        <p className="mt-3 text-gray-400 text-sm leading-relaxed">{a}</p>
      )}
    </button>
  );
}

export default function FAQ() {
  return (
    <section className="bg-[#0a0510] py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#F26522] font-bold text-sm uppercase tracking-widest mb-2">
            Got questions?
          </p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase">
            Frequently asked
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
