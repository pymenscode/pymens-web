import Image from "next/image";

const AMAZON_URL =
  "https://www.amazon.com/PYMENS-Basketball-Grip-Spray-Pro/dp/B0FGSKGWFM/";

export default function FinalCTA() {
  return (
    <section className="bg-[#F26522] py-24 px-6 overflow-hidden relative">

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        <div>
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-black uppercase leading-[0.9] text-white mb-8">
            Stop<br />
            slipping.<br />
            Start<br />
            winning.
          </h2>
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse inline-flex items-center gap-3 bg-white text-[#F26522] hover:bg-gray-100 font-black text-lg py-5 px-12 rounded-full transition-colors shadow-xl"
          >
            Buy on Amazon
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <div className="mt-5 flex flex-wrap gap-5 text-sm text-orange-100">
            <span>✓ Prime eligible</span>
            <span>✓ Easy returns</span>
            <span>✓ 80 verified reviews</span>
          </div>
        </div>

        {/* Bottle */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[220px] h-[360px] sm:w-[260px] sm:h-[420px]">
            <Image
              src="/images/bottle-hero.png"
              alt="PYMENS Grip Spray Pro"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>

      {/* Big background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span className="text-[20vw] font-black uppercase text-white/10 whitespace-nowrap">
          GRIP
        </span>
      </div>

    </section>
  );
}
