export default function ProblemSection() {
  return (
    <section className="bg-[#111] py-24 px-6">
      <div className="max-w-screen-lg mx-auto">

        {/* Big provocative statement */}
        <div className="mb-16">
          <p className="text-[#F26522] font-black text-xs uppercase tracking-[0.3em] mb-5">
            The real problem
          </p>
          <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[1] uppercase text-white">
            Dust kills{" "}
            <span className="text-gray-600 line-through decoration-[#F26522]">your grip</span>
            <br />
            <span className="text-[#F26522]">every game.</span>
          </h2>
        </div>

        {/* Stat-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10">
          {[
            {
              stat: "1 slip",
              label: "is all it takes",
              desc: "One missed cut or blown pivot can change the momentum of the entire game.",
            },
            {
              stat: "30 sec",
              label: "to fix it",
              desc: "Spray, wipe, done. No waiting, no fuss. Back on the court before tip-off.",
            },
            {
              stat: "0%",
              label: "residue",
              desc: "Leaves nothing behind on your soles or on the floor. Clean grip every time.",
            },
          ].map(({ stat, label, desc }) => (
            <div key={stat} className="bg-[#111] p-8">
              <div className="text-[#F26522] font-black text-5xl mb-1">{stat}</div>
              <div className="text-white font-bold uppercase text-sm tracking-wide mb-4">{label}</div>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
