const news = [
  {
    date: "30. marca 2026",
    title: "Vybavenie ambulancií – dotácia 92%",
    excerpt:
      "Samosprávne kraje čoskoro zverejnia výzvu na podporu materiálno-technického vybavenia pre zariadenia ambulantnej...",
    featured: false,
  },
  {
    date: "3. marca 2026",
    title: "Výzva pre potravinárov predĺžená!",
    excerpt:
      "Pôdohospodárska platobná agentúra predĺžila výzvu pre spracovateľov poľnohospodárskych produktov do 17.04.2026!",
    featured: true,
  },
  {
    date: "9. februára 2026",
    title: "Nové výzvy PPA",
    excerpt:
      "Dňa 9.2.2026 Pôdohospodárska platobná agentúra zverejňuje dlhoočakávané výzvy zo Strategického plánu Spoločnej poľnohospodárskej politiky 2023 -...",
    featured: false,
  },
  {
    date: "28. novembra 2025",
    title: "Nové výzvy pre mladých poľnohospodárov a spracovateľov už čoskoro!",
    excerpt:
      "Pôdohospodárska platobná agentú...",
    featured: false,
  },
];

export default function NewsSection() {
  return (
    <section className="bg-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Najnovšie správy
          </h2>
          <div className="hidden md:flex gap-2">
            <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center text-gray-400 hover:border-maroon hover:text-maroon transition-colors">
              &larr;
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center text-gray-400 hover:border-maroon hover:text-maroon transition-colors">
              &rarr;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, i) => (
            <div
              key={i}
              className={`rounded-lg overflow-hidden flex flex-col card-hover animate-on-scroll delay-${i + 1} ${
                item.featured
                  ? "bg-maroon text-white"
                  : "bg-white text-foreground"
              }`}
            >
              <div className="p-6 flex-1">
                <div
                  className={`flex items-center gap-2 text-xs mb-4 ${
                    item.featured ? "text-white/70" : "text-gray-400"
                  }`}
                >
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
                  </svg>
                  {item.date}
                </div>
                <h3
                  className={`font-serif text-lg font-semibold leading-snug mb-3 ${
                    item.featured ? "text-white" : "text-foreground"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    item.featured ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {item.excerpt}
                </p>
              </div>
              <div className="px-6 pb-6">
                <span
                  className={`text-sm cursor-pointer inline-flex items-center gap-1 ${
                    item.featured
                      ? "text-white hover:text-white/80"
                      : "text-maroon hover:text-maroon-dark"
                  }`}
                >
                  {item.featured && "čítať viac "}
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-gray-300 rounded-lg bg-white/50">
          <button className="w-full py-4 text-center text-sm text-gray-600 hover:text-maroon transition-colors flex items-center justify-center gap-2">
            Zobraziť všetky správy <span>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
