import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Spray",
    desc: "2–3 pumps directly onto the sole before the game or during timeouts.",
  },
  {
    number: "02",
    title: "Wipe",
    desc: "Use the included microfiber cloth to spread evenly and remove loosened dirt.",
  },
  {
    number: "03",
    title: "Grip",
    desc: "Hit the court. Instant traction — no sticky residue, no slipping.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#FAF8F5] py-20 px-6">
      <div className="max-w-screen-xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-[#5B2D8E] font-bold text-xs uppercase tracking-widest mb-3">
            Simple. Fast. Effective.
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#111] uppercase">
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#5B2D8E] flex items-center justify-center">
                  <span className="text-white font-black text-sm">{step.number}</span>
                </div>
                <div>
                  <h3 className="font-black text-[#111] text-lg uppercase mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Usage image */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/product-usage.png"
              alt="Players using PYMENS Grip Spray Pro on court"
              width={800}
              height={450}
              className="w-full object-cover rounded-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
