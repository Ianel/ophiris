import Image from "next/image";

export default function Trade() {
  return (
    <section
      id="trade"
      className="pt-8 pb-24 px-6 bg-linear-to-b from-[#0a0a0a] to-[#0d1211]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-[#C5A059] uppercase tracking-widest mb-4">
              The Trade Bridge
            </h2>
            <h3 className="text-5xl font-serif mb-6">
              Import & <span className="italic">Export</span>
            </h3>
            <p className="text-gray-400 mb-6 text-justify">
              We drive the flow of wealth between Madagascar and the world. By
              securing the supply chain for the island’s exceptional products
              and introducing cutting-edge technologies to the local market, we
              create opportunities for sustainable growth and global impact.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 glass rounded-2xl">
                <div className="text-[#C5A059] mt-1">
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
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Prestige Export</h4>
                  <p className="text-sm text-gray-500 text-justify pt-3">
                    We source and export an exceptional range of local products
                    — from beautifully crafted handicrafts to premium dried
                    legumes (including beans, black-eyed peas, and more),
                    alongside carefully selected agricultural and artisanal
                    specialties that reflect the island's rich heritage.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 glass rounded-2xl">
                <div className="text-[#C5A059] mt-1">
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
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Strategic Imports</h4>
                  <p className="text-sm text-gray-500 text-justify pt-3">
                    We supply businesses and consumers alike with a carefully
                    sourced range of high-demand products — from electronics and
                    kitchenware to auto parts, everyday essentials, and beauty
                    products — delivered reliably and at competitive value.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl shadow-2xl overflow-hidden h-125 w-full">
              <Image
                src="/assets/images/trade.png"
                alt="Logistics"
                fill
                className="object-cover transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#C5A059] p-6 rounded-2xl text-black">
              <p className="text-3xl font-serif font-bold">15+</p>
              <p className="text-xs uppercase font-bold tracking-tighter">
                Trusted Partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
