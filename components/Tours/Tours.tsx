"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/Common/Modal";

interface Tour {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  thumbImg: string;
  price: string;
  duration: string;
  itinerary: string[];
  description: string;
}

const tourData: Record<string, Tour> = {
  baobab: {
    id: "baobab",
    title: "Baobab Tour",
    subtitle: "The Mystic West",
    img: "/assets/images/baobab-3.png",
    thumbImg: "/assets/images/baobab-tour.png",
    price: "From $1575",
    duration: "7 days",
    description: "The Mystic West & The Giants",
    itinerary: [
      "Day 1 - Arrival in Antananarivo",
      "Day 2 - Antananarivo / Antsirabe & City Tour",
      "Day 3 - Antsirabe/ Tritriva Lake / Miandrivazo",
      "Day 4 - Miandrivazo / Zazamalala Park / Morondava",
      "Day 5 - Baobab Avenue / Kirindy Forest Park",
      "Day 6 - Flight from Morondava to Antananarivo",
      "Day 7 - Check-out and Departure",
    ],
  },
  indri: {
    id: "indri",
    title: "A Glimpse of Madagascar",
    subtitle: "The Emerald East",
    img: "/assets/images/CHAMELEON.png",
    thumbImg: "/assets/images/indri-tour.png",
    price: "From $1350",
    duration: "6 days",
    description: "The Emerald East & The Primary Forest",
    itinerary: [
      "Day 1 - Arrival in Antananarivo",
      "Day 2 - Antananarivo / Peyrieras Reptile Park / Andasibe",
      "Day 3 - Andasibe National Park (Analamazaotra)",
      "Day 4 - Andasibe / Queen's Palace Antananarivo",
      "Day 5 - Ambohimanga King's Palace",
      "Day 6 - Departure",
    ],
  },
  sakalava: {
    id: "sakalava",
    title: "Wonders of Madagascar",
    subtitle: "The Royal North",
    img: "/assets/images/lemurien-de-face.png",
    thumbImg: "/assets/images/IRANJA.png",
    price: "From $1825",
    duration: "10 days",
    description: "The Royal North & The Archipelagos",
    itinerary: [
      "Day 1 - Arrival in Antananarivo",
      "Day 2 - Antananarivo / Peyrieras reptile park / Andasibe",
      "Day 3 - Andasibe National Park & Vakona Private Park",
      "Day 4 - Andasibe / Queen's Palace",
      "Day 5 - Ambohimanga Kings Palace & Lisy Art Gallery",
      "Day 6 - Antananarivo / Nosy Be (Domestic flight)",
      "Day 7 - Nosy Komba & Tanihely",
      "Day 8 - Nosy Iranja",
      "Day 9 - Nosy Be Island Tour",
      "Day 10 - Departure",
    ],
  },
  vezo: {
    id: "vezo",
    title: "Vezo Tour",
    subtitle: "The Nomadic South",
    img: "/assets/images/madagascar-lemur-catta.png",
    thumbImg: "/assets/images/isalo-fenetre.png",
    price: "From $1925",
    duration: "11 days",
    description: "The Nomadic South & The Soul of the Sea",
    itinerary: [
      "Day 1 - Arrival in Antananarivo",
      "Day 2 - Antananarivo / Antsirabe",
      "Day 3 - Antsirabe / Ambositra / Ranomafana National Park",
      "Day 4 - Ranomafana National Park / Fianarantsoa",
      "Day 5 - Fianarantsoa / Ambalavao / Ranohira",
      "Day 6 - Ranohira (Isalo National Park)",
      "Day 7 - Ranohira / Tulear / Ifaty",
      "Day 8 & Day 9 - Ifaty",
      "Day 10 - Ifaty / Tulear / Antananarivo",
      "Day 11 - Departure",
    ],
  },
};

export default function Tours() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  return (
    <section id="tours" className="pt-8 pb-24 px-6 bg-[#0d1211]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-[#C5A059] uppercase tracking-widest mb-4">
            Exclusive Exploration
          </h2>
          <h3 className="text-5xl font-serif">Madagascar Tour Packages</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.values(tourData).map((tour) => (
            <div
              key={tour.id}
              className="glass p-6 rounded-3xl card-hover flex flex-col h-full"
            >
              <div className="h-48 mb-6 overflow-hidden rounded-xl relative">
                <img
                  src={tour.thumbImg}
                  alt={tour.title}
                 
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h4 className="text-xl font-serif mb-1">{tour.title}</h4>
              <div className="mb-4 flex flex-row justify-between items-center mt-2">
                <p className="text-[#C5A059] font-bold text-sm">
                  {tour.subtitle}
                </p>
                <p className="text-xs font-bold bg-[#C5A059] px-2 py-1 rounded-full text-black">
                  {tour.duration}
                </p>
              </div>

              <p className="text-gray-400 text-xs mb-6 text-justify line-clamp-3">
                {tour.id === "baobab" &&
                  "Explore Zazamalala Park, admire the unique sunset over the Avenue of the Baobabs, and venture into Kirindy Forest, home of the famous fossa."}
                {tour.id === "indri" &&
                  "Encounter the Indri-Indri in the lush Andasibe Forest, explore Madagascar’s fascinating reptiles, and immerse yourself in the island’s rich cultural heritage."}
                {tour.id === "sakalava" &&
                  "Experience Madagascar’s wildlife at Andasibe National Park, explore the culture and history of Antananarivo, and relax on the beautiful beaches of Nosy Be."}
                {tour.id === "vezo" &&
                  "Experience Madagascar’s highlights, from its cultural charm and scenic highlands to wildlife-rich national parks and the stunning beaches of Ifaty."}
              </p>

              <div className="pt-4 border-t border-white/10 flex justify-between items-center mt-auto">
                <span className="text-[#C5A059] font-bold">{tour.price}</span>
                <button
                  onClick={() => setSelectedTour(tour)}
                  className="text-[10px] uppercase tracking-tighter border border-[#C5A059] px-3 py-1 rounded-full hover:bg-[#C5A059] hover:text-black transition-all"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedTour} onClose={() => setSelectedTour(null)}>
        {selectedTour && (
          <div className="glass max-h-[90vh] overflow-y-auto rounded-3xl relative shadow-2xl border-white/20">
            <button
              onClick={() => setSelectedTour(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-[#C5A059] transition-colors"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
              <div className="h-64 md:h-auto relative">
                <img
                  src={selectedTour.img}
                  alt={selectedTour.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8 md:p-12">
                <h2 className="text-4xl font-serif mb-2 text-white">
                  {selectedTour.title}
                </h2>
                <p className="text-[#C5A059] font-bold uppercase tracking-widest text-sm mb-6">
                  {selectedTour.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <span className="w-8 h-px bg-[#C5A059] mr-3"></span>{" "}
                      Itinerary
                    </h4>
                    <ul className="text-gray-400 text-sm space-y-2 list-none ml-4">
                      {selectedTour.itinerary.map((item, index) => (
                        <li key={index}>
                          <span className="text-[#C5A059] mr-2">✦</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase tracking-widest">
                        Estimated Budget
                      </p>
                      <p className="text-xl font-serif text-[#C5A059]">
                        {selectedTour.price} / pers.
                      </p>
                    </div>
                    <a
                      href="#contact"
                      onClick={() => setSelectedTour(null)}
                      className="bg-[#C5A059] text-black px-6 py-3 rounded-full font-bold text-center text-[8px] md:text-sm hover:scale-105 transition-transform"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
