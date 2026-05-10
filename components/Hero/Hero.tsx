import Image from "next/image";

export default function Hero() {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="/assets/images/hero.png"
          alt="Stunning Madagascar landscape showcasing the natural beauty and biodiversity of the island - Ophiris Travel Agency"
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="relative mt-24 z-20 text-center px-4 max-w-4xl animate-fade-in">
        <h2 className="text-[#C5A059] uppercase tracking-[0.3em] mb-4 text-[1rem] md:text-[1.5rem] font-semibold">
          Ophir International Services
        </h2>
        <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">
          Beyond the Horizon of <span className="gold-gradient">Prestige</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
          Your exclusive gateway to Madagascar’s unique opportunities — from
          untamed exploration to strategic investment.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="#tours"
            className="w-full md:w-auto px-10 py-4 bg-[#C5A059] text-black font-bold rounded-full hover:scale-105 transition-transform"
            title="Discover our exclusive Madagascar tours"
          >
            Explore the Island
          </a>
          <a
            href="#invest"
            className="w-full md:w-auto px-10 py-4 border border-white/30 backdrop-blur hover:bg-white/10 rounded-full transition-all"
            title="Learn about investment opportunities in Madagascar"
          >
            Promising Sectors
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7-7-7m14-8l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </header>
  );
}
