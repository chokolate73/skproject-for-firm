const challenges = [
  {
    title: "Investičné projekty pre podnikateľov",
    description:
      "Pomáhame podnikateľom identifikovať vhodné investičné príležitosti a získať financovanie z fondov EÚ.",
    days: 83,
  },
  {
    title: "Výzva pre mladých poľnohospodárov",
    description:
      "Aktuálne výzvy pre začínajúcich poľnohospodárov s dotáciou až do výšky 70%.",
    days: 51,
  },
  {
    title: "Investičné projekty pre podnikateľov v tepelnej energetike",
    description:
      "Podpora pre projekty zamerané na zníženie energetickej náročnosti a modernizáciu tepelných systémov.",
    days: 72,
  },
  {
    title: "Envirofond – ENERGETICKÁ ÚČINNOSŤ VEREJNÝCH BUDOV",
    description:
      "Výzva zameraná na zvýšenie energetickej účinnosti verejných budov vrátane zateplenia.",
    days: 5,
  },
];

export default function ChallengesSection() {
  return (
    <section className="bg-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Aktuálne výzvy
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
          {challenges.map((challenge, i) => (
            <div key={i} className={`bg-white rounded-lg overflow-hidden flex flex-col card-hover animate-on-scroll delay-${i + 1}`}>
              <div className="p-6 flex-1">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4 leading-snug">
                  {challenge.title}
                </h3>
                <span className="text-maroon text-sm cursor-pointer">
                  &rarr;
                </span>
              </div>
              <div className="bg-dark-bg p-6 text-white">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  Čas do skončenia výzvy
                </div>
                <div className="font-serif text-4xl font-bold">
                  {challenge.days}
                  <span className="text-base font-normal ml-1">dní</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-gray-300 rounded-lg bg-white/50">
          <button className="w-full py-4 text-center text-sm text-gray-600 hover:text-maroon transition-colors flex items-center justify-center gap-2">
            Zobraziť všetky výzvy <span>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
