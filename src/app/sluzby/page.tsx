import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Služby | Castrum Novum INVEST a.s.",
  description: "Komplexné poradenské služby v oblasti eurofondov a investičných projektov.",
};

const services = [
  {
    title: "Identifikácia vhodnej investície",
    description:
      "Analyzujeme Vaše podnikateľské zámery a identifikujeme najvhodnejšie zdroje financovania z fondov EÚ. Posúdime oprávnenosť Vášho projektu a navrhneme optimálnu stratégiu.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    ),
  },
  {
    title: "Príprava projektu a žiadosti",
    description:
      "Komplexne spracujeme žiadosť o nenávratný finančný príspevok vrátane všetkých povinných príloh, štúdie uskutočniteľnosti a finančnej analýzy.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
  },
  {
    title: "Verejné obstarávanie",
    description:
      "Zabezpečíme kompletný proces verejného obstarávania v súlade s platnou legislatívou – od prípravy súťažných podkladov až po vyhodnotenie ponúk.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    ),
  },
  {
    title: "Implementácia projektu",
    description:
      "Počas realizácie projektu zabezpečíme odborný dohľad nad dodržiavaním podmienok zmluvy o poskytnutí NFP, prípravu monitorovacích správ a žiadostí o platbu.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    ),
  },
  {
    title: "Monitoring a udržateľnosť",
    description:
      "Po ukončení projektu zabezpečíme splnenie všetkých podmienok udržateľnosti a prípravu monitorovacích správ počas celého obdobia udržateľnosti.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    ),
  },
  {
    title: "Finančné poradenstvo",
    description:
      "Poskytujeme poradenstvo v oblasti financovania investícií, kombinácie vlastných zdrojov, bankových úverov a dotácií pre dosiahnutie optimálnej finančnej štruktúry.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
];

const businessAreas = [
  "Priemysel a výroba",
  "Potravinárstvo",
  "Poľnohospodárstvo",
  "Odpadové hospodárstvo",
  "Energetické úspory",
  "Inovácie a výskum",
  "Informačné technológie",
];

const municipalAreas = [
  "Obecná infraštruktúra",
  "Životné prostredie",
  "Odpadové hospodárstvo",
  "Energetické úspory budov",
  "Modernizácia služieb",
  "Školstvo a vzdelávanie",
  "Sociálne služby",
];

export default function SluzbyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-maroon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">
            Služby
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            Poskytujeme komplexnú službu od identifikácie vhodnej investície až po úspešné ukončenie projektu
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-lg p-8">
                <div className="w-14 h-14 bg-maroon/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {service.icon}
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-12 text-center">
            Oblasti pôsobenia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Podnikateľské subjekty
              </h3>
              <div className="w-12 h-0.5 bg-maroon mb-6" />
              <ul className="space-y-3">
                {businessAreas.map((area, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-maroon rounded-full flex-shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Samosprávy
              </h3>
              <div className="w-12 h-0.5 bg-maroon mb-6" />
              <ul className="space-y-3">
                {municipalAreas.map((area, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-maroon rounded-full flex-shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Máte záujem o naše služby?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Kontaktujte nás pre bezplatnú úvodnú konzultáciu. Radi Vám poradíme s Vaším investičným zámerom.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-maroon text-white px-8 py-4 rounded hover:bg-maroon-dark transition-colors text-sm font-medium"
          >
            Kontaktujte nás
            <span>&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
