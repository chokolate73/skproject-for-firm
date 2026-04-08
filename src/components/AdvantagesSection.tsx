const advantages = [
  {
    text: "Už 8 rokov sme špecialisti na eurofondy pre investičné projekty",
  },
  {
    text: "Sme partner na dlhé trate - profesionálny tím s históriou, skúsenosťami a potrebným zázemím",
  },
  {
    text: "Projekty robíme vrátane verejného obstarávania a implementácie svojím vlastným tímom",
  },
  {
    text: "Neveríme v zázraky - komunikujeme na rovinu a pravdivo, neprikrášľujeme fakty",
  },
];

export default function AdvantagesSection() {
  return (
    <section className="bg-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-12 animate-on-scroll">
          Naše výhody
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((adv, i) => (
            <div key={i} className={`flex items-start gap-5 animate-on-scroll delay-${i + 1}`}>
              <div className="flex-shrink-0 w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-maroon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-foreground text-base leading-relaxed pt-3">
                {adv.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
