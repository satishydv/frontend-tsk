'use client';

import Link from 'next/link';
import Image from 'next/image';

const ReligiousCollection = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Shiva Card */}
          <div className="relative overflow-hidden group rounded-md">
            <div className="relative h-[500px] w-full">
              {/* Placeholder for Shiva image - replace src with actual image path */}
              <Image
                src="/religious/shiva.jpg"
                alt="Lord Shiva Tattoo Collection"
                fill
                className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-sm tracking-wider mb-2">FOR THE SHIVA BELIEVER</p>
              <h2 className="text-2xl md:text-3xl font-light tracking-wider mb-6">
                RECONNECT WITH SHIVA WITHIN YOU
              </h2>
              <Link 
                href="/collections/mahadev-tattoos"
                className="inline-block border border-white px-6 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
              >
                MAHADEV TATTOOS
              </Link>
            </div>
          </div>

          {/* Krishna Card */}
          <div className="relative overflow-hidden group rounded-md">
            <div className="relative h-[500px] w-full">
              {/* Placeholder for Krishna image - replace src with actual image path */}
              <Image
                src="/religious/krishna.png"
                alt="Lord Krishna Tattoo Collection"
                fill
                className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-sm tracking-wider mb-2">FEATURED COLLECTION OF LORD KRISHNA TATTOOS</p>
              <h2 className="text-2xl md:text-3xl font-light tracking-wider mb-6">
                DIVINE FLUTE COLLECTION
              </h2>
              <Link 
                href="/collections/krishna-tattoos"
                className="inline-block border border-white px-6 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
              >
                KRISHNA TATTOOS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReligiousCollection; 