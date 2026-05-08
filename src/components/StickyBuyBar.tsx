"use client";

import { useEffect, useState } from "react";

const AMAZON_URL =
  "https://www.amazon.com/PYMENS-Basketball-Grip-Spray-Pro/dp/B0FGSKGWFM/";

export default function StickyBuyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#111] border-t border-white/10 px-6 py-3 flex items-center justify-between gap-4 max-w-screen-xl mx-auto">
        <div className="hidden sm:flex items-center gap-3">
          <span className="font-black text-white text-sm uppercase">Grip Spray Pro</span>
          <span className="text-gray-600">·</span>
          <div className="flex gap-0.5">
            {[...Array(4)].map((_, i) => (
              <svg key={i} className="w-3.5 h-3.5 text-[#F26522]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-500 text-xs">4.1 · 80 reviews</span>
        </div>
        <a
          href={AMAZON_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-center bg-[#F26522] hover:bg-[#e05a1a] text-white font-black text-sm py-3 px-8 rounded-full transition-colors"
        >
          Buy on Amazon →
        </a>
      </div>
    </div>
  );
}
