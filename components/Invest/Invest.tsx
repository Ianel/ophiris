export default function Invest() {
  const sectors = [
    {
      title: "Agribusiness",
      desc: "Enhancing Agricultural Resources for High-End Markets.",
      icon: (
        <svg
          className="w-6 h-6 text-[#C5A059]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
    },
    {
      title: "Infrastructure",
      desc: "Advancing Urban Development and Critical Mobility Networks.",
      icon: (
        <svg
          className="w-6 h-6 text-[#C5A059]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      ),
    },
    {
      title: "Mining",
      desc: "Sustainable and Ethical Precious Mineral Extraction.",
      icon: (
        <svg
          className="w-6 h-6 text-[#C5A059]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
    },
    {
      title: "ICT & Tech",
      desc: "Leading Digital Innovation Across the Indian Ocean.",
      icon: (
        <svg
          className="w-6 h-6 text-[#C5A059]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
    },
    {
      title: "Energy",
      desc: "Renewable Energy and Next-Generation Solar Solutions.",
      icon: (
        <svg
          className="w-6 h-6 text-[#C5A059]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
    },
    {
      title: "Tourism",
      desc: "Eco-Friendly Luxury Resort Development.",
      icon: (
        <svg
          className="w-6 h-6 text-[#C5A059]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="invest" className="pt-8 pb-24 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-16 md:gap-6">
          <div className="max-w-2xl md:max-w-3xl">
            <h2 className="text-[#C5A059] uppercase tracking-widest mb-4">
              Investment Opportunities
            </h2>
            <h3 className="text-5xl font-serif leading-tight">
              Crafting <span className="italic">Madagascar’s Success</span>
            </h3>
          </div>
          <p className="text-gray-400 md:max-w-[25rem] mt-8 md:mt-0 text-justify">
            With our on-the-ground expertise and established strategic network,
            we walk alongside you at every stage — handling company formation,
            licenses, permits, and staff recruitment — so you can invest with
            confidence and focus on what matters most: your growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="p-10 glass hover:border-[#C5A059]/40 rounded-3xl hover:bg-white/5 transition-all group"
            >
              <div className="w-12 h-12 bg-[#C5A059]/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {sector.icon}
              </div>
              <h5 className="text-xl font-serif mb-2">{sector.title}</h5>
              <p className="text-sm text-gray-500 text-justify">{sector.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
