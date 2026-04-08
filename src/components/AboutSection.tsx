import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4 animate-on-scroll">
            Kto sme?
          </h2>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-6 animate-on-scroll delay-1">
            História spoločnosti Castrum Novum INVEST siaha do roku 2018.
          </h3>
          <p className="text-gray-600 leading-relaxed text-justify mb-8 animate-on-scroll delay-2">
            Za krátky čas sme si vybudovali vedúcu pozíciu na trhu poradenských
            služieb v oblasti prípravy investičných projektov financovaných z
            fondov Európskej únie. Prvú priečku v rebríčku najúspešnejších sa
            nám darí držať dodnes – k dnešnému dňu sme pripravili už{" "}
            <strong>viac ako 120 úspešných projektov.</strong>
          </p>
          <Link
            href="/o-nas"
            className="inline-flex items-center gap-2 bg-maroon text-white px-8 py-4 rounded hover:bg-maroon-dark btn-animate text-sm font-medium animate-on-scroll delay-3"
          >
            Viac o nás
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
