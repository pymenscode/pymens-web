const items = [
  "No Residue",
  "Deep Sole Cleaning",
  "Safe for All Shoes",
  "Injury Prevention",
  "Court-Tested",
  "Instant — 30 sec",
];

export default function TrustBar() {
  return (
    <div className="bg-[#F26522] py-3.5">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6">
        {items.map((item) => (
          <span key={item} className="text-white text-xs font-black uppercase tracking-widest whitespace-nowrap">
            — {item}
          </span>
        ))}
      </div>
    </div>
  );
}
