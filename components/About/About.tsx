import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C5A059]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden border border-white/10 aspect-[4/3]">
              <img
                src="/assets/images/exploration-baobab.png"
                alt="Baobab"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-4xl font-serif mb-6 leading-snug">
              A Land of <span className="italic text-[#C5A059]">Striking Contrasts</span>
            </h3>
            <p className="text-gray-400 mb-8 text-justify">
              Madagascar is more than a destination — it is a living ecosystem
              of extraordinary opportunity. At Ophir International Services, we
              bring together the spirit of exploration and the precision of
              economic strategy to create meaningful, lasting impact.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="text-3xl font-serif text-[#C5A059]">90%</span>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">
                  Endemic Biodiversity
                </p>
              </div>
              <div>
                <span className="text-3xl font-serif text-[#C5A059]">6+</span>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">
                  Key Investment Sectors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
