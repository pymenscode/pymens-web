import Image from "next/image";

const AMAZON_URL =
  "https://www.amazon.com/PYMENS-Basketball-Grip-Spray-Pro/dp/B0FGSKGWFM/";

const benefits = [
  {
    icon: "🚫",
    title: "Zero Residue Formula",
    desc: "Cleans and grips without leaving any sticky film on your soles or the court floor.",
  },
  {
    icon: "🧽",
    title: "Deep Sole Cleaning",
    desc: "Penetrates sole grooves to lift dust, sweat and grime — restoring original factory grip.",
  },
  {
    icon: "👟",
    title: "Safe for All Shoes",
    desc: "Works on rubber, foam, and composite soles. Approved for all basketball shoe brands.",
  },
  {
    icon: "🛡️",
    title: "Injury Prevention",
    desc: "More grip means less accidental slipping. Protect your ankles and knees on every cut.",
  },
  {
    icon: "⚡",
    title: "Instant Activation",
    desc: "No waiting. Spray, wipe, play. Ready in under 30 seconds.",
  },
  {
    icon: "🏀",
    title: "Court-Tested",
    desc: "Developed with athletes and tested on real hardwood, outdoor concrete, and gym courts.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#0a0510] py-20 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#F26522] font-bold text-sm uppercase tracking-widest mb-2">
            Why players trust it
          </p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase">
            Built for performance
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map(({ icon, title, desc }) => (
              <div key={title} className="card-purple rounded-2xl p-5 hover:border-[#F26522]/40 transition-colors duration-200">
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="font-bold text-white mb-1.5 text-sm">{title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Product image + CTA */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <Image
                src="/images/product-bottle.png"
                alt="PYMENS Grip Spray Pro — Restore, Clean, Boost Traction"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-sm mb-4">
                Includes <strong className="text-white">spray bottle</strong> +{" "}
                <strong className="text-white">microfiber cloth</strong>
              </p>
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#FF8C42] text-white font-black py-4 px-8 rounded-full transition-colors duration-200 uppercase tracking-wide shadow-lg shadow-[#F26522]/30"
              >
                Get Yours on Amazon
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
