const AMAZON_URL =
  "https://www.amazon.com/PYMENS-Basketball-Grip-Spray-Pro/dp/B0FGSKGWFM/";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-[#0f0f0f] border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-black text-white tracking-widest uppercase text-sm">
          PYMENS
        </span>
        <a
          href={AMAZON_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F26522] hover:bg-[#e05a1a] text-white font-black text-sm py-2.5 px-6 rounded-full transition-colors"
        >
          Buy Now
        </a>
      </div>
    </nav>
  );
}
