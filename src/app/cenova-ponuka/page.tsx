"use client";

import { useState } from "react";

const packages = [
  {
    name: "Základný balík",
    subtitle: "Pre menšie projekty",
    features: [
      "Identifikácia vhodnej výzvy",
      "Príprava žiadosti o NFP",
      "Základné poradenstvo",
      "E-mailová podpora",
    ],
    highlighted: false,
  },
  {
    name: "Štandardný balík",
    subtitle: "Najobľúbenejšia voľba",
    features: [
      "Všetko zo Základného balíka",
      "Verejné obstarávanie",
      "Implementácia projektu",
      "Príprava žiadostí o platbu",
      "Telefonická podpora",
    ],
    highlighted: true,
  },
  {
    name: "Premium balík",
    subtitle: "Komplexná služba",
    features: [
      "Všetko zo Štandardného balíka",
      "Monitoring projektu",
      "Udržateľnosť projektu",
      "Finančné poradenstvo",
      "Osobný konzultant",
      "Prioritná podpora",
    ],
    highlighted: false,
  },
];

export default function CenovaPonukaPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-maroon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">
            Cenová ponuka
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            Získajte cenovú ponuku na mieru pre Váš investičný projekt
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-center">
            Naše balíky služieb
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
            Cena sa odvíja od rozsahu a náročnosti projektu. Kontaktujte nás pre individuálnu cenovú ponuku.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`rounded-lg p-8 flex flex-col ${
                  pkg.highlighted
                    ? "bg-maroon text-white ring-2 ring-maroon scale-105"
                    : "bg-white text-foreground"
                }`}
              >
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-bold mb-1">
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      pkg.highlighted ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    {pkg.subtitle}
                  </p>
                </div>
                <div
                  className={`w-12 h-0.5 mb-6 ${
                    pkg.highlighted ? "bg-white/30" : "bg-maroon"
                  }`}
                />
                <ul className="space-y-3 flex-1">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          pkg.highlighted ? "text-white" : "text-maroon"
                        }`}
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
                      {feature}
                    </li>
                  ))}
                </ul>
                <p
                  className={`mt-6 text-lg font-serif font-bold ${
                    pkg.highlighted ? "text-white" : "text-maroon"
                  }`}
                >
                  Cena na vyžiadanie
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request form */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-center">
            Žiadosť o cenovú ponuku
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Vyplňte formulár a my Vám pripravíme cenovú ponuku na mieru.
          </p>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-2">
                Ďakujeme za Váš záujem!
              </h3>
              <p className="text-gray-600">
                Vašu žiadosť sme prijali. Cenovú ponuku Vám zašleme na uvedený e-mail do 2 pracovných dní.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Meno a priezvisko *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-maroon"
                    placeholder="Vaše meno"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-maroon"
                    placeholder="vas@email.sk"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Názov spoločnosti
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-maroon"
                    placeholder="Názov firmy / obce"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefón
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-maroon"
                    placeholder="+421 ..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Typ projektu *
                </label>
                <select
                  required
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-maroon bg-white"
                >
                  <option value="">Vyberte typ projektu</option>
                  <option value="priemysel">Priemysel a výroba</option>
                  <option value="potravinarstvo">Potravinárstvo</option>
                  <option value="polnohospodarstvo">Poľnohospodárstvo</option>
                  <option value="odpady">Odpadové hospodárstvo</option>
                  <option value="energia">Energetické úspory</option>
                  <option value="inovacie">Inovácie</option>
                  <option value="it">Informačné technológie</option>
                  <option value="infrastruktura">Obecná infraštruktúra</option>
                  <option value="skolstvo">Školstvo</option>
                  <option value="ine">Iné</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Popis investičného zámeru *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-maroon resize-vertical"
                  placeholder="Stručne opíšte Váš investičný zámer..."
                />
              </div>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) =>
                    setFormData({ ...formData, consent: e.target.checked })
                  }
                  className="mt-1"
                />
                <span className="text-xs text-gray-600">
                  Súhlasím so spracovaním osobných údajov v súlade s GDPR. *
                </span>
              </label>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-maroon text-white px-8 py-4 rounded hover:bg-maroon-dark transition-colors text-sm font-medium"
              >
                Odoslať žiadosť
                <span>&rarr;</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
