import Image from "next/image";

const AMAZON_URL =
  "https://www.amazon.com/PYMENS-Basketball-Grip-Spray-Pro/dp/B0FGSKGWFM/";

const benefits = [
  { title: "No Residue", desc: "No sticky film left on your soles or the court floor. Clean every time." },
  { title: "Deep Sole Cleaning", desc: "Penetrates grooves and lifts dust, sweat, and grime that wiping can't reach." },
  { title: "All Shoes", desc: "Rubber, foam, composite — every brand, every model. Safe for them all." },
  { title: "Injury Prevention", desc: "Grip means no accidental slipping. Fewer ankle rolls, less knee stress." },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-[#111] py-24 px-6">
      <div className="max-w-screen-xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: headline + benefits list */}
          <div>
            <p className="text-[#F26522] font-black text-xs uppercase tracking-[0.3em] mb-5">
              What it does
            </p>
            <h2 className="text-5xl sm:text-6xl font-black uppercase leading-[1] mb-12">
              Built for<br />
              <span className="text-[#F26522]">every cut.</span>
            </h2>

            <div className="flex flex-col divide-y divide-white/10">
              {benefits.map(({ title, desc }) => (
                <div key={title} className="py-6">
                  <h3 className="font-black uppercase text-white mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#e05a1a] text-white font-black py-4 px-8 rounded-full transition-colors"
              >
                Get Yours on Amazon
              </a>
              <p className="mt-3 text-xs text-gray-600">
                Includes microfiber cloth · 4 oz / 120 ml
              </p>
            </div>
          </div>

          {/* Right: product infographic image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden">
              <Image
                src="/images/product-bottle.png"
                alt="PYMENS Grip Spray Pro — features"
                width={600}
                height={600}
                className="w-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
