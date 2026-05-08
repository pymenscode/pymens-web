import Image from "next/image";

const AMAZON_URL =
  "https://www.amazon.com/PYMENS-Basketball-Grip-Spray-Pro/dp/B0FGSKGWFM/";

export default function Hero() {
  return (
    <section className="bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 py-12 lg:py-0 grid grid-cols-1 lg:grid-cols-2 min-h-[92vh] items-center gap-8">

        {/* Copy */}
        <div className="order-2 lg:order-1 py-12">
          <div className="inline-flex items-center gap-2 bg-[#5B2D8E]/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-[#5B2D8E] rounded-full" />
            <span className="text-xs font-semibold text-[#5B2D8E] uppercase tracking-widest">
              Court-Tested Formula
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-black leading-[1.05] text-[#111] mb-5 uppercase">
            No Slip.<br />
            <span className="text-[#F26522]">Just Grip.</span>
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
            Deep cleans your soles and maximizes traction instantly.
            Built for quick cuts, explosive pivots, and step backs.
          </p>

          {/* Trust row */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#F26522]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-[#111] text-sm">4.9</span>
            <span className="text-gray-400 text-sm">· 200+ verified reviews on Amazon</span>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse inline-flex items-center gap-3 bg-[#F26522] hover:bg-[#e05a1a] text-white font-black text-base py-4 px-10 rounded-full transition-colors duration-200 shadow-lg shadow-[#F26522]/20"
            >
              Buy on Amazon
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <div className="flex flex-col justify-center text-sm text-gray-400 gap-1 pt-1">
              <span>✓ Prime eligible · Fast shipping</span>
              <span>✓ No residue · Safe for all shoes</span>
            </div>
          </div>
        </div>

        {/* Product image */}
        <div className="order-1 lg:order-2 flex justify-center items-end lg:items-center relative">
          {/* Purple blob behind bottle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[420px] h-[420px] bg-[#5B2D8E]/8 rounded-full blur-3xl" />
          </div>
          <div className="relative w-[300px] h-[480px] sm:w-[360px] sm:h-[580px] lg:w-[400px] lg:h-[640px]">
            <Image
              src="/images/bottle-hero.png"
              alt="PYMENS Grip Spray Pro 4oz bottle"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
