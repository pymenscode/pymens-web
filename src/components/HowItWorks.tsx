import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Spray",
      desc: "2–3 pumps directly onto the sole of your shoe before the game or during timeouts.",
      icon: "🟣",
    },
    {
      number: "02",
      title: "Wipe",
      desc: "Use the included microfiber cloth to spread evenly and remove loosened dirt.",
      icon: "🧹",
    },
    {
      number: "03",
      title: "Grip",
      desc: "Hit the court. Feel the traction instantly — no sticky residue, no slipping.",
      icon: "🔥",
    },
  ];

  return (
    <section className="section-dark py-20 px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#F26522] font-bold text-sm uppercase tracking-widest mb-2">
            Simple. Fast. Effective.
          </p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase">
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-[#5B2D8E] via-[#F26522] to-[#5B2D8E]" />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center relative z-10">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#5B2D8E] to-[#3d1d63] border-2 border-[#F26522]/50 flex items-center justify-center mb-6 shadow-lg shadow-[#5B2D8E]/30">
                <span className="text-3xl">{step.icon}</span>
              </div>
              <div className="text-[#F26522] font-black text-xs tracking-widest mb-1">
                STEP {step.number}
              </div>
              <h3 className="text-xl font-black uppercase mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Real usage image */}
        <div className="mt-16 relative w-full rounded-2xl overflow-hidden">
          <Image
            src="/images/product-usage.png"
            alt="Players using PYMENS Grip Spray Pro on court"
            width={1200}
            height={500}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
