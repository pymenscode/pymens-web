import Image from "next/image";

const AMAZON_URL =
  "https://www.amazon.com/PYMENS-Basketball-Grip-Spray-Pro/dp/B0FGSKGWFM/";

const benefits = [
  { icon: "🚫", title: "Zero Residue", desc: "No sticky film on soles or the court floor." },
  { icon: "🧽", title: "Deep Sole Cleaning", desc: "Lifts dust and grime from grooves — restores original factory grip." },
  { icon: "👟", title: "All Shoes", desc: "Works on rubber, foam, and composite soles. Every brand." },
  { icon: "🛡️", title: "Injury Prevention", desc: "More grip = less accidental slipping. Protect your ankles." },
  { icon: "⚡", title: "Instant — 30 sec", desc: "Spray, wipe, play. No waiting. No setup." },
  { icon: "🏀", title: "Court-Tested", desc: "Tested on hardwood, concrete, and rubberized courts." },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white py-20 px-6">
      <div className="max-w-screen-xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-[#5B2D8E] font-bold text-xs uppercase tracking-widest mb-3">
            Why players trust it
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#111] uppercase">
            Built for performance
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Product shot */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <Image
                src="/images/product-bottle.png"
                alt="PYMENS Grip Spray Pro — benefits infographic"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-5">
                Includes <strong className="text-[#111]">spray bottle</strong> +{" "}
                <strong className="text-[#111]">microfiber cloth</strong>
              </p>
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#e05a1a] text-white font-black py-4 px-8 rounded-full transition-colors duration-200 shadow-md shadow-[#F26522]/20"
              >
                Get Yours on Amazon
              </a>
            </div>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-5 hover:border-[#5B2D8E]/20 transition-colors"
              >
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="font-bold text-[#111] mb-1 text-sm">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
