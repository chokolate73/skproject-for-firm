import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-maroon rounded-lg overflow-hidden animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="p-10 md:p-16">
              <h2 className="font-serif text-3xl md:text-4xl text-white font-bold italic mb-4">
                Bezplatná úvodná konzultácia
              </h2>
              <p className="text-white/70 mb-8">
                Prídeme za Vami do miesta Vášho pôsobenia
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-maroon-dark text-white px-8 py-4 rounded hover:bg-[#5a1019] btn-animate text-sm font-medium border border-white/20"
              >
                Mám záujem
                <span>&rarr;</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="bg-gray-500/30 aspect-[4/3] rounded-lg m-8 flex items-center justify-center">
                <div className="text-center text-white/50">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="text-sm opacity-50">Konzultácia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
