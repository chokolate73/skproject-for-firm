"use client";

import { useState } from "react";

const contactInfo = [
  {
    label: "Adresa",
    value: "Castrum Novum INVEST a.s.\nHlavná 123\n949 01 Nitra\nSlovensko",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    ),
    icon2: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
  {
    label: "Telefón",
    value: "+421 900 123 456",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
  },
  {
    label: "E-mail",
    value: "info@castrumnovum.sk",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    label: "IČO",
    value: "54919266",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    ),
  },
];

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
            Kontakt
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            Neváhajte nás kontaktovať. Radi Vám odpovieme na všetky otázky.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-8">
                Kontaktné údaje
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-maroon rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {info.icon}
                        {info.icon2}
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm mb-1">
                        {info.label}
                      </h3>
                      <p className="text-gray-600 text-sm whitespace-pre-line">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-10 bg-gray-300 rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-sm opacity-50">Mapa</p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-8">
                Napíšte nám
              </h2>

              {submitted ? (
                <div className="bg-white rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-2">
                    Ďakujeme!
                  </h3>
                  <p className="text-gray-600">
                    Vaša správa bola úspešne odoslaná. Ozveme sa Vám čo najskôr.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 space-y-6">
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
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Predmet
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-maroon"
                        placeholder="Predmet správy"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Správa *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-maroon resize-vertical"
                      placeholder="Vaša správa..."
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
                    Odoslať správu
                    <span>&rarr;</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
