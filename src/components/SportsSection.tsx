import Image from "next/image";

const AMAZON_URL =
  "https://www.amazon.com/PYMENS-Basketball-Grip-Spray-Pro/dp/B0FGSKGWFM/";

export default function SportsSection() {
  return (
    <section className="bg-[#0f0f0f] py-24 px-6">
      <div className="max-w-screen-xl mx-auto">

        <div className="mb-10">
          <p className="text-[#F26522] font-black text-xs uppercase tracking-[0.3em] mb-5">
            Not just basketball
          </p>
          <h2 className="text-5xl sm:text-6xl font-black uppercase leading-[1]">
            Any sport.<br />
            <span className="text-[#F26522]">Any court.</span>
          </h2>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden mb-10">
          <Image
            src="/images/sports.png"
            alt="Grip Spray Pro — Soccer, Tennis, Golf, Basketball, Baseball, Volleyball, Football"
            width={1200}
            height={500}
            className="w-full object-cover"
          />
        </div>

        <div className="flex justify-end">
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-[#F26522] hover:text-[#F26522] text-white font-bold py-3 px-8 rounded-full transition-colors text-sm"
          >
            Order on Amazon →
          </a>
        </div>

      </div>
    </section>
  );
}
