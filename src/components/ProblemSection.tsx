export default function ProblemSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-screen-md mx-auto text-center">
        <p className="text-[#5B2D8E] font-bold text-xs uppercase tracking-widest mb-3">
          The problem
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-[#111] uppercase mb-5">
          Slipping costs you the play
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-lg mx-auto">
          Dusty gym floors kill your sole grip mid-game. One missed cut,
          one lost pivot — and your defender blows past you.
          Regular shoe-wiping doesn&apos;t clean the grooves. You need more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            {
              icon: "💨",
              title: "Dusty Courts",
              desc: "Gym dust packs into sole grooves, reducing traction close to zero.",
            },
            {
              icon: "⚡",
              title: "Lost First Step",
              desc: "Without grip you hesitate. That split-second kills your explosiveness.",
            },
            {
              icon: "🦵",
              title: "Injury Risk",
              desc: "Slipping increases ankle rolls and knee stress on every lateral cut.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#FAF8F5] rounded-2xl p-6 border border-gray-100"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="font-bold text-[#111] mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
