import Image from "next/image";

const AMAZON_URL =
  "https://www.amazon.com/PYMENS-Basketball-Grip-Spray-Pro/dp/B0FGSKGWFM/";

export default function Hero() {
  return (
    <section className="bg-[#0f0f0f] min-h-screen flex items-center overflow-hidden relative">

      {/* Faint orange sweep behind bottle */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(242,101,34,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-screen-xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-center py-16">

        {/* Bottle — left on mobile, right on desktop */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-[260px] h-[420px] sm:w-[320px] sm:h-[520px] lg:w-[380px] lg:h-[620px]">
            <Image
              src="/images/bottle-hero.png"
              alt="PYMENS Grip Spray Pro 4oz bottle"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Copy */}
        <div className="order-2 lg:order-1 lg:pr-12">

          {/* Eyebrow */}
          <p className="text-[#F26522] font-black text-xs uppercase tracking-[0.3em] mb-5">
            Court-Tested · Anti-Slip Spray
          </p>

          {/* Headline — editorial large */}
          <h1 className="text-[clamp(3.5rem,10vw,7rem)] font-black leading-[0.9] uppercase text-white mb-8">
            No<br />
            Slip.<br />
            <span className="text-[#F26522]">Just<br />Grip.</span>
          </h1>

          {/* One-liner */}
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-sm">
            Deep cleans your soles and maximizes traction in under 30 seconds.
            No residue. No excuses.
          </p>

          {/* Amazon social proof — honest */}
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mb-8 group"
          >
            <div className="flex gap-0.5">
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#F26522]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              {/* half star */}
              <svg className="w-4 h-4 text-[#F26522]" fill="currentColor" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="half">
                    <stop offset="50%" stopColor="#F26522" />
                    <stop offset="50%" stopColor="#374151" />
                  </linearGradient>
                </defs>
                <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-white font-bold text-sm">4.1</span>
            <span className="text-gray-500 text-sm">· 80 reviews on Amazon</span>
            <span className="text-[#F26522] text-xs font-bold group-hover:underline">→ Read them</span>
          </a>

          {/* CTA */}
          <div>
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse inline-flex items-center gap-3 bg-[#F26522] hover:bg-[#e05a1a] text-white font-black text-base py-4 px-10 rounded-full transition-colors shadow-lg shadow-[#F26522]/20"
            >
              Buy on Amazon
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <p className="mt-3 text-xs text-gray-600">
              4 oz / 120 ml · Includes microfiber cloth · Prime eligible
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
