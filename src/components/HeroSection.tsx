"use client";

import { useState } from "react";

const slides = [
  {
    title: "Sme odborníci\nna investičné projekty\nfinancované z eurofondov",
    image: "/images/hero-solar.jpg",
  },
  {
    title: "Pomáhame firmám\na samosprávam získať\neurópske dotácie",
    image: "/images/hero-city.jpg",
  },
  {
    title: "Komplexné poradenstvo\npre Vaše investičné\nzámery",
    image: "/images/hero-office.jpg",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <section className="bg-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[400px] md:min-h-[500px]">
          {/* Left: Text */}
          <div>
            {/* Slide counter */}
            <div className="flex items-center gap-3 mb-8 hero-animate">
              <button
                onClick={prev}
                className="text-maroon hover:text-maroon-dark transition-colors text-xl"
                aria-label="Previous slide"
              >
                &larr;
              </button>
              <span className="text-sm">
                <span className="font-bold text-foreground">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <span className="text-gray-400">
                  {" "}/ {String(slides.length).padStart(2, "0")}
                </span>
              </span>
              <button
                onClick={next}
                className="text-maroon hover:text-maroon-dark transition-colors text-xl"
                aria-label="Next slide"
              >
                &rarr;
              </button>
            </div>

            <h1
              key={current}
              className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-tight text-foreground whitespace-pre-line slide-in"
            >
              {slides[current].title}
            </h1>
          </div>

          {/* Right: Image placeholder */}
          <div className="relative hero-animate-delay">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg overflow-hidden aspect-[4/3] flex items-end">
              <div className="w-full h-full bg-gradient-to-t from-green-700/30 to-transparent flex items-center justify-center">
                <div className="text-center text-white/80">
                  <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm opacity-50">Investičné projekty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
