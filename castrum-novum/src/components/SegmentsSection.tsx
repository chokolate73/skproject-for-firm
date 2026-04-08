import Link from "next/link";

const businessItems = [
  "Priemysel",
  "Potravinárstvo",
  "Poľnohospodárstvo",
  "Odpadové hospodárstvo",
  "Energetické úspory",
  "Inovácie",
  "Informačné technológie",
];

const municipalItems = [
  "Obecná infraštruktúra",
  "Životné prostredie",
  "Odpadové hospodárstvo",
  "Energetické úspory",
  "Modernizácia služieb",
  "Materské školy / školy",
  "Sociálne služby",
];

export default function SegmentsSection() {
  return (
    <section className="bg-maroon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left title */}
          <div className="flex items-center md:min-h-[400px]">
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-snug">
              Naša spoločnosť obsluhuje dva segmenty
            </h2>
          </div>

          {/* Business card */}
          <div className="bg-white rounded-lg p-8">
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
              Podnikateľské subjekty
            </h3>
            <div className="w-12 h-0.5 bg-maroon mb-6" />
            <ul className="space-y-2">
              {businessItems.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-2 h-2 bg-maroon rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/sluzby"
              className="inline-block mt-6 text-maroon hover:text-maroon-dark transition-colors"
            >
              &rarr;
            </Link>
          </div>

          {/* Municipal card */}
          <div className="bg-white rounded-lg p-8">
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
              Samosprávy
            </h3>
            <div className="w-12 h-0.5 bg-maroon mb-6" />
            <ul className="space-y-2">
              {municipalItems.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-2 h-2 bg-maroon rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/sluzby"
              className="inline-block mt-6 text-maroon hover:text-maroon-dark transition-colors"
            >
              &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
