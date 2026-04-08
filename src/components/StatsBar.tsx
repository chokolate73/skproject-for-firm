const stats = [
  { number: "127", label: "Schválených projektov" },
  { number: "8", label: "Rokov na trhu" },
  { number: "79", label: "Projektov vo všetkých okresoch" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#dcdcdc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="font-serif text-5xl md:text-6xl font-bold text-maroon mb-2">
                {stat.number}
              </div>
              <p className="text-sm text-gray-600 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
