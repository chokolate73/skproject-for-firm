"use client";

import { useState } from "react";

const references = [
  {
    title: "Modernizácia výrobnej linky",
    description:
      "Projekt bol realizovaný v roku 2022 s využitím financovania z fondov Európskej únie na podporu konkurencieschopnosti malých a stredných podnikov.",
    client: "ABC Manufacturing, s.r.o.",
  },
  {
    title: "Rekonštrukcia materskej školy",
    description:
      "Komplexná rekonštrukcia a zateplenie budovy materskej školy s cieľom zníženia energetickej náročnosti.",
    client: "Mesto Nové Zámky",
  },
  {
    title: "Zavedenie inovatívnych technológií",
    description:
      "Projekt zameraný na digitalizáciu a automatizáciu výrobných procesov v potravinárskom priemysle.",
    client: "FoodTech Slovakia, a.s.",
  },
  {
    title: "Odpadové hospodárstvo obce",
    description:
      "Vybudovanie zberného dvora a kompostárne pre obec s dotáciou z operačného programu Kvalita životného prostredia.",
    client: "Obec Hrušovany",
  },
];

export default function ReferencesSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? references.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === references.length - 1 ? 0 : c + 1));

  const ref = references[current];

  return (
    <section className="bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Quote marks */}
        <div className="text-maroon text-7xl font-serif leading-none mb-4">
          &ldquo;
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              {ref.title}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              {ref.description}
            </p>
            <p className="text-white font-bold text-sm">{ref.client}</p>

            {/* Slide counter */}
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={prev}
                className="text-maroon hover:text-white transition-colors"
              >
                &larr;
              </button>
              <span className="text-sm text-white">
                <span className="font-bold">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <span className="text-gray-500">
                  {" "}/ {String(references.length).padStart(2, "0")}
                </span>
              </span>
              <button
                onClick={next}
                className="text-maroon hover:text-white transition-colors"
              >
                &rarr;
              </button>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="bg-gray-600 rounded-lg aspect-[4/3] flex items-center justify-center">
            <div className="text-center text-gray-400">
              <svg
                className="w-16 h-16 mx-auto mb-2 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm opacity-50">Referenčný projekt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
