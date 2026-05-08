export default function ProblemSection() {
  return (
    <section className="bg-[#0a0510] py-20 px-6">
      <div className="max-w-screen-md mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-black uppercase mb-6">
          Slipping costs you{" "}
          <span className="gradient-text">the play.</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Dusty courts kill your sole grip mid-game. One slip on a cut, one
          lost pivot — and your opponent blows past you. Standard shoe-wiping
          doesn&apos;t deep-clean the grooves. You need more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            {
              icon: "💨",
              title: "Dusty Courts",
              desc: "Gym dust builds up in sole grooves, reducing traction to nearly zero.",
            },
            {
              icon: "⚡",
              title: "Lost Explosiveness",
              desc: "Without grip, you hesitate. That split-second kills your first step.",
            },
            {
              icon: "🦵",
              title: "Injury Risk",
              desc: "Slipping increases ankle rolls and knee strain during lateral cuts.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="card-purple rounded-2xl p-6">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
