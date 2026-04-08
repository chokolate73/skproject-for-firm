import Link from "next/link";

const footerLinks1 = [
  { href: "/o-nas", label: "O nás" },
  { href: "/sluzby", label: "Služby" },
  { href: "/cenova-ponuka", label: "Cenová ponuka" },
];

const footerLinks2 = [
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact info */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-8">
              V prípade otázok nás kontaktujte
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-maroon rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <span className="text-gray-300">+421 900 123 456</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-maroon rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span className="text-gray-300">info@castrumnovum.sk</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Informácie</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <div className="space-y-3">
                {footerLinks1.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="space-y-3">
                {footerLinks2.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-2xl font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6">
              Aktuality z oblasti investícií, dotácií, regionálneho rozvoja a manažmentu investícií.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Zadajte Váš e-mail"
                className="flex-1 bg-transparent border border-gray-600 rounded-l px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-maroon"
              />
              <button className="bg-maroon px-4 rounded-r hover:bg-maroon-dark transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </button>
            </div>
            <label className="flex items-start gap-2 mt-4 text-xs text-gray-400">
              <input type="checkbox" className="mt-0.5" />
              <span>
                Súhlasím so{" "}
                <span className="underline">spracovaním osobných údajov.</span>
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-maroon rounded flex items-center justify-center text-white font-bold text-xs">
              CN
            </div>
            <div>
              <div className="text-sm font-bold leading-tight">Castrum Novum</div>
              <div className="text-xs text-gray-500 leading-tight">INVEST a.s.</div>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            Copyright &copy; 2026 Castrum Novum INVEST a.s. All rights reserved. |{" "}
            <span className="underline cursor-pointer">Ochrana osobných údajov</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
