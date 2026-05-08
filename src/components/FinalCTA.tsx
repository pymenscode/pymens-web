import Image from "next/image";

const AMAZON_URL =
  "https://www.amazon.com/PYMENS-Basketball-Grip-Spray-Pro/dp/B0FGSKGWFM/";

export default function FinalCTA() {
  return (
    <section className="bg-[#3d1d63] py-20 px-6">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight text-white mb-5">
            Stop slipping.<br />
            <span className="text-[#F26522]">Start dominating.</span>
          </h2>
          <p className="text-purple-200 text-lg mb-8 max-w-md mx-auto lg:mx-0">
            Join players who trust Grip Spray Pro to keep them locked in on every cut, pivot, and drive.
          </p>
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse inline-flex items-center gap-3 bg-[#F26522] hover:bg-[#e05a1a] text-white font-black text-lg py-5 px-12 rounded-full transition-colors duration-200 shadow-xl shadow-black/20"
          >
            Buy on Amazon
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <div className="mt-5 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-purple-300">
            <span>✓ Prime eligible</span>
            <span>✓ Easy returns</span>
            <span>✓ Verified reviews</span>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-56 h-[360px] sm:w-64 sm:h-[420px]">
            <Image
              src="/images/bottle-hero.png"
              alt="PYMENS Grip Spray Pro"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
