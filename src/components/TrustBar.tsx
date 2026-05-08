const items = [
  { icon: "✓", text: "No Residue" },
  { icon: "✓", text: "Deep Sole Cleaning" },
  { icon: "✓", text: "Safe for All Shoes" },
  { icon: "✓", text: "Injury Prevention" },
  { icon: "✓", text: "Court-Tested" },
  { icon: "✓", text: "Instant Activation" },
];

export default function TrustBar() {
  return (
    <div className="bg-[#5B2D8E] py-4 overflow-hidden">
      <div className="flex gap-12 animate-none">
        <div className="flex items-center gap-12 whitespace-nowrap px-6 flex-wrap justify-center w-full">
          {items.map(({ icon, text }) => (
            <span key={text} className="flex items-center gap-2 text-white text-sm font-semibold">
              <span className="text-[#F26522] font-black">{icon}</span>
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
