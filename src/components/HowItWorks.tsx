import Image from "next/image";

const steps = [
  { n: "01", title: "Spray", desc: "2–3 pumps directly onto the sole. Before the game or during any timeout." },
  { n: "02", title: "Wipe", desc: "Spread with the included microfiber cloth. Lifts dust and grime from every groove." },
  { n: "03", title: "Grip", desc: "Back on the court. Instant traction. No residue, no waiting." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0f0f0f] py-24 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Steps */}
        <div>
          <p className="text-[#F26522] font-black text-xs uppercase tracking-[0.3em] mb-5">
            How it works
          </p>
          <h2 className="text-5xl sm:text-6xl font-black uppercase leading-[1] mb-12">
            Three steps.<br />
            <span className="text-[#F26522]">Zero slips.</span>
          </h2>

          <div className="flex flex-col gap-8">
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="flex gap-6 items-start">
                <span className="text-[#F26522] font-black text-4xl leading-none w-12 flex-shrink-0">
                  {n}
                </span>
                <div className="border-t border-white/10 pt-4 flex-1">
                  <h3 className="font-black uppercase text-white text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage image */}
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/images/product-usage.png"
            alt="Players using PYMENS Grip Spray Pro on court"
            width={800}
            height={500}
            className="w-full object-cover rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}
