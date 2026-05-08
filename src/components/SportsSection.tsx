import Image from "next/image";

const AMAZON_URL =
  "https://www.amazon.com/PYMENS-Basketball-Grip-Spray-Pro/dp/B0FGSKGWFM/";

export default function SportsSection() {
  return (
    <section className="bg-[#0a0510] py-20 px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#F26522] font-bold text-sm uppercase tracking-widest mb-2">
            Not just basketball
          </p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase">
            Works on any sport
          </h2>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden mb-10">
          <Image
            src="/images/sports.png"
            alt="Grip Spray Pro works on Soccer, Tennis, Golf, Basketball, Baseball, Volleyball, Football"
            width={1200}
            height={500}
            className="w-full object-cover"
          />
        </div>

        <div className="text-center">
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#FF8C42] text-white font-black py-4 px-10 rounded-full transition-colors duration-200 uppercase tracking-wide shadow-lg shadow-[#F26522]/30"
          >
            Order on Amazon →
          </a>
        </div>
      </div>
    </section>
  );
}
