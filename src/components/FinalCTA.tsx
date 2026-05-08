import Image from "next/image";

const AMAZON_URL =
  "https://www.amazon.com/PYMENS-Basketball-Grip-Spray-Pro/dp/B0FGSKGWFM/";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3d1d63] via-[#1a0a2e] to-[#0a0510]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#5B2D8E]/20 rounded-full blur-3xl" />

      <div className="relative max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-6">
            Stop slipping.
            <br />
            <span className="gradient-text">Start dominating.</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto lg:mx-0">
            Join players who already trust Grip Spray Pro to keep them locked
            in on every cut, pivot, and drive to the rim.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse inline-flex items-center justify-center gap-3 bg-[#F26522] hover:bg-[#FF8C42] text-white font-black text-xl py-5 px-12 rounded-full transition-colors duration-200 uppercase tracking-wide shadow-xl shadow-[#F26522]/30"
            >
              Buy on Amazon
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-400">
            <span>✓ Prime eligible</span>
            <span>✓ Easy returns</span>
            <span>✓ Verified reviews</span>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            <Image
              src="/images/product-hero.png"
              alt="PYMENS Grip Spray Pro full kit"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
