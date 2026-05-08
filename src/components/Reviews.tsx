const AMAZON_URL =
  "https://www.amazon.com/PYMENS-Basketball-Grip-Spray-Pro/dp/B0FGSKGWFM/";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#111] py-24 px-6">
      <div className="max-w-screen-lg mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Rating block */}
          <div>
            <p className="text-[#F26522] font-black text-xs uppercase tracking-[0.3em] mb-5">
              Amazon reviews
            </p>
            <div className="flex items-end gap-4 mb-4">
              <span className="text-[clamp(5rem,15vw,8rem)] font-black leading-none text-white">
                4.1
              </span>
              <div className="pb-3">
                <div className="flex gap-1 mb-1">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-[#F26522]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm">80 verified reviews</p>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-sm">
              Real players. Real courts. Read what they have to say directly on Amazon.
            </p>
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-[#F26522] hover:text-[#F26522] text-white font-bold py-3 px-8 rounded-full transition-colors text-sm"
            >
              Read all reviews on Amazon →
            </a>
          </div>

          {/* Visual emphasis */}
          <div className="flex flex-col gap-4">
            {[
              { pct: "78%", label: "5-star reviews" },
              { pct: "12%", label: "4-star reviews" },
              { pct: "10%", label: "3-star or below" },
            ].map(({ pct, label }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="text-[#F26522] font-black text-xl w-14 text-right flex-shrink-0">
                  {pct}
                </span>
                <div className="flex-1 bg-white/10 rounded-full h-2">
                  <div
                    className="bg-[#F26522] h-2 rounded-full"
                    style={{ width: pct }}
                  />
                </div>
                <span className="text-gray-500 text-sm w-32 flex-shrink-0">{label}</span>
              </div>
            ))}
            <p className="text-xs text-gray-700 mt-2 pl-[4.5rem]">
              Based on 80 Amazon reviews
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
