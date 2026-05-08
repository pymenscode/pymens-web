const AMAZON_URL =
  "https://www.amazon.com/PYMENS-Basketball-Grip-Spray-Pro/dp/B0FGSKGWFM/";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-black text-[#5B2D8E] tracking-widest uppercase text-sm">
          PYMENS
        </span>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600 font-medium">
          <a href="#how-it-works" className="hover:text-[#111] transition-colors">How it works</a>
          <a href="#benefits" className="hover:text-[#111] transition-colors">Benefits</a>
          <a href="#reviews" className="hover:text-[#111] transition-colors">Reviews</a>
        </div>

        <a
          href={AMAZON_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F26522] hover:bg-[#e05a1a] text-white font-bold text-sm py-2.5 px-6 rounded-full transition-colors duration-200"
        >
          Buy Now
        </a>
      </div>
    </nav>
  );
}
