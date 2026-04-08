import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nás | Castrum Novum INVEST a.s.",
  description: "O spoločnosti Castrum Novum INVEST a.s. - história, tím a naše hodnoty.",
};

const team = [
  { name: "Ing. Ján Novák", role: "Konateľ spoločnosti", description: "Viac ako 15 rokov skúseností v oblasti investičného poradenstva a eurofondov." },
  { name: "Mgr. Mária Kováčová", role: "Projektová manažérka", description: "Špecializácia na projekty pre samosprávy a verejný sektor." },
  { name: "Ing. Peter Horváth", role: "Senior konzultant", description: "Expert na verejné obstarávanie a implementáciu projektov." },
  { name: "Bc. Anna Tóthová", role: "Finančná analytička", description: "Zabezpečuje finančné analýzy a prípravu žiadostí o platbu." },
];

export default function ONasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-maroon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">
            O nás
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            Spoznajte spoločnosť Castrum Novum INVEST a.s. a náš profesionálny tím
          </p>
        </div>
      </section>

      {/* History */}
      <section className="bg-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Naša história
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Spoločnosť Castrum Novum INVEST a.s. (IČO: 54919266) bola
                  založená s cieľom poskytovať komplexné poradenské služby v
                  oblasti investičných projektov financovaných z fondov Európskej
                  únie.
                </p>
                <p>
                  Od svojho vzniku sme sa zamerali na budovanie silného tímu
                  odborníkov, ktorí majú dlhoročné skúsenosti s prípravou a
                  implementáciou projektov pre podnikateľské subjekty aj
                  samosprávy.
                </p>
                <p>
                  Dnes patríme medzi popredné poradenské spoločnosti na
                  Slovensku v oblasti eurofondov. Naši klienti oceňujú
                  predovšetkým náš profesionálny prístup, transparentnosť a
                  vysokú úspešnosť schválených projektov.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-gray-300 rounded-lg aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-sm opacity-50">Naše sídlo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
            Naše hodnoty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Profesionalita",
                text: "Pracujeme s najvyššími štandardmi kvality. Každý projekt pristupujeme s maximálnym nasadením a odbornosťou.",
              },
              {
                title: "Transparentnosť",
                text: "Komunikujeme otvorene a pravdivo. Neprikrášľujeme fakty a vždy informujeme o reálnych možnostiach.",
              },
              {
                title: "Komplexnosť",
                text: "Poskytujeme služby od identifikácie príležitosti až po úspešné ukončenie projektu vrátane monitoringu.",
              },
            ].map((value, i) => (
              <div key={i} className="text-center p-8">
                <div className="w-16 h-16 bg-maroon/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">
            Náš tím
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden">
                <div className="bg-gray-200 aspect-square flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-foreground">{member.name}</h3>
                  <p className="text-maroon text-sm mb-2">{member.role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
