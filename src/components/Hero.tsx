import Image from "next/image";

const AMAZON_URL =
  "https://www.amazon.com/PYMENS-Basketball-Grip-Spray-Pro/dp/B0FGSKGWFM/";

export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#5B2D8E]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#F26522]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text side */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#5B2D8E]/30 border border-[#7B3FBE]/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-[#F26522] rounded-full" />
            <span className="text-xs font-semibold text-[#FF8C42] uppercase tracking-widest">
              Court-Tested
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-4 uppercase">
            No Slip.
            <br />
            <span className="gradient-text">Just Grip.</span>
          </h1>

          <p className="text-lg text-gray-300 mb-3 max-w-md mx-auto lg:mx-0">
            Instant grip boost for basketball players. Deep cleans soles and
            maximizes traction for{" "}
            <strong className="text-white">
              quick cuts, pivots & explosive step backs.
            </strong>
          </p>

          <ul className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 text-sm">
            {[
              "No Residue",
              "Deep Sole Cleaning",
              "Safe for All Shoes",
              "Injury Prevention",
            ].map((feat) => (
              <li
                key={feat}
                className="flex items-center gap-1.5 bg-[#5B2D8E]/20 border border-[#7B3FBE]/30 rounded-full px-3 py-1 text-gray-300"
              >
                <span className="text-[#F26522]">✓</span> {feat}
              </li>
            ))}
          </ul>

          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse inline-flex items-center gap-3 bg-[#F26522] hover:bg-[#FF8C42] text-white font-black text-lg py-4 px-10 rounded-full transition-colors duration-200 uppercase tracking-wide shadow-lg shadow-[#F26522]/30"
          >
            Buy on Amazon
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <p className="mt-4 text-xs text-gray-500">
            4 oz / 120 ml · Ships from Amazon Prime
          </p>
        </div>

        {/* Image side */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="float-anim relative w-72 h-72 sm:w-96 sm:h-96">
            <Image
              src="/images/product-hero.png"
              alt="PYMENS Grip Spray Pro — basketball anti-slip spray"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 text-xs animate-bounce">
        <span>Scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
