"use client";

import { useEffect, useState } from "react";

const AMAZON_URL =
  "https://www.amazon.com/PYMENS-Basketball-Grip-Spray-Pro/dp/B0FGSKGWFM/";

export default function StickyBuyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#1a0a2e] border-t border-[#5B2D8E]/50 px-4 py-3 flex items-center justify-between gap-4 max-w-screen-xl mx-auto">
        <div className="hidden sm:block">
          <p className="font-bold text-white text-sm">GRIP SPRAY PRO</p>
          <p className="text-[#F26522] text-xs">No Slip. Just Grip.</p>
        </div>
        <a
          href={AMAZON_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-pulse w-full sm:w-auto text-center bg-[#F26522] hover:bg-[#FF8C42] text-white font-black text-sm py-3 px-8 rounded-full transition-colors duration-200 uppercase tracking-wide"
        >
          Buy on Amazon →
        </a>
      </div>
    </div>
  );
}
