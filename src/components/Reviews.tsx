const reviews = [
  {
    name: "Marcus T.",
    rating: 5,
    text: "Game changer. I used to wipe my shoes every possession. Now I spray before warmups and I'm locked in the whole game. My crossovers feel so much sharper.",
  },
  {
    name: "Jordan M.",
    rating: 5,
    text: "Tried it on an outdoor concrete court. Couldn't believe the grip. No sticky feeling at all. My ankles feel safer cutting hard now.",
  },
  {
    name: "DeShawn R.",
    rating: 5,
    text: "Sprayed on my Kyries, wiped, and instantly felt the difference on the first cut. The cloth that comes with it is super useful. Will buy again every month.",
  },
  {
    name: "Leila V.",
    rating: 4,
    text: "I coach a high school team and got bottles for our starting five. The kids love it and parents appreciate the injury prevention angle.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-[#F26522]" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20 px-6">
      <div className="max-w-screen-lg mx-auto">

        <div className="text-center mb-14">
          <p className="text-[#5B2D8E] font-bold text-xs uppercase tracking-widest mb-3">
            What players say
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#111] uppercase">
            Real results on court
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Stars count={5} />
            <span className="font-black text-[#111]">4.9</span>
            <span className="text-gray-400 text-sm">on Amazon</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6"
            >
              <Stars count={r.rating} />
              <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-5">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#5B2D8E] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{r.name[0]}</span>
                </div>
                <div>
                  <p className="font-bold text-[#111] text-sm">{r.name}</p>
                  <p className="text-xs text-[#F26522]">Verified Amazon Purchase</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
