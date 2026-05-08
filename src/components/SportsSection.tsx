import Image from "next/image";

const AMAZON_URL =
  "https://www.amazon.com/PYMENS-Basketball-Grip-Spray-Pro/dp/B0FGSKGWFM/";

export default function SportsSection() {
  return (
    <section className="bg-[#FAF8F5] py-20 px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#5B2D8E] font-bold text-xs uppercase tracking-widest mb-3">
            Not just basketball
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#111] uppercase">
            Works on any sport
          </h2>
        </div>

        <div className="relative w-full rounded-3xl overflow-hidden mb-10">
          <Image
            src="/images/sports.png"
            alt="Grip Spray Pro — Soccer, Tennis, Golf, Basketball, Baseball, Volleyball, Football"
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
            className="inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#e05a1a] text-white font-black py-4 px-10 rounded-full transition-colors duration-200"
          >
            Order on Amazon →
          </a>
        </div>
      </div>
    </section>
  );
}
