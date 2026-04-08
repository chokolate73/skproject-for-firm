const steps = [
  { number: 1, title: "Identifikácia\nvhodnej investície" },
  { number: 2, title: "Podanie žiadosti\no eurofondy" },
  { number: 3, title: "Schválenie\nprojektu" },
  { number: 4, title: "Zrealizovanie\ninvestície" },
  { number: 5, title: "Vyplatenie\ndotácie" },
  { number: 6, title: "Úspešné ukončenie\nprojektu" },
];

const subSteps = [
  "Príprava projektu",
  "Doplnenie žiadosti",
  "Verejné obstarávanie",
  "Príprava žiadosti o platbu",
  "Monitoring projektu",
];

export default function ProcessSection() {
  return (
    <section className="bg-[#e8e8e8] eu-stars-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="font-serif text-4xl md:text-5xl text-foreground text-center mb-16">
          Poskytujeme komplexnú službu
        </h2>

        {/* Steps */}
        <div className="relative">
          {/* Main steps row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="starburst w-20 h-20 bg-maroon text-white mx-auto mb-4 flex items-center justify-center">
                  <span className="font-serif text-2xl font-bold italic">
                    {step.number}
                  </span>
                </div>
                <p className="text-sm text-foreground leading-snug whitespace-pre-line">
                  {step.title}
                </p>
              </div>
            ))}
          </div>

          {/* Connection line */}
          <div className="hidden lg:block relative h-12 mx-8">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-maroon/30" />
            {/* Sub-step labels */}
            <div className="grid grid-cols-5 gap-4 absolute inset-0">
              {subSteps.map((sub, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center"
                >
                  <span className="text-xs text-maroon border border-maroon/30 bg-white px-3 py-1 rounded">
                    {sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile sub-steps */}
          <div className="lg:hidden mt-8 flex flex-wrap gap-2 justify-center">
            {subSteps.map((sub, i) => (
              <span
                key={i}
                className="text-xs text-maroon border border-maroon/30 bg-white px-3 py-1 rounded"
              >
                {sub}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
