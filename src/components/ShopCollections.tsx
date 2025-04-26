'use client';

import Link from 'next/link';

const collections = [
  {
    id: 1,
    title: 'SEMI-PERMANENT PACKS',
    image: '/collections/semi-permanent-packs.jpg',
    href: '/collections/semi-permanent-packs'
  },
  {
    id: 2,
    title: 'TEMPORARY PACKS',
    image: '/collections/temporary-packs.jpg',
    href: '/collections/temporary-packs'
  },
  {
    id: 3,
    title: 'CUSTOM TEMPORARY',
    image: '/collections/custom-temporary.jpg',
    href: '/collections/custom-temporary'
  },
  {
    id: 4,
    title: 'FREEHEAD INK KITS',
    image: '/collections/freehand-kits.jpg',
    href: '/collections/freehand-kits'
  },
  {
    id: 5,
    title: 'CUSTOM SEMI-PERMANENT',
    image: '/collections/custom-semi-permanent.jpg',
    href: '/collections/custom-semi-permanent'
  },
  {
    id: 6,
    title: 'FULL SLEEVES',
    image: '/collections/full-sleeves.jpg',
    href: '/collections/full-sleeves'
  },
  {
    id: 7,
    title: 'PREMIUM TEMPORARY',
    image: '/collections/premium-temporary.jpg',
    href: '/collections/premium-temporary'
  },
  {
    id: 8,
    title: 'SEMI-PERMANENT',
    image: '/collections/semi-permanent.jpg',
    href: '/collections/semi-permanent'
  }
];

const ShopCollections = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <h2 className="text-4xl md:text-5xl text-center mb-12 tracking-wider font-light">
        SHOP COLLECTIONS
      </h2>
      
      <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {collections.map((collection) => (
          <Link 
            href={collection.href}
            key={collection.id}
            className="group relative overflow-hidden aspect-square "
          >
            {/* Image Container */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url(${collection.image})`
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-700 group-hover:opacity-50"></div>
            </div>
            
            {/* Title */}
            <div className="relative h-full flex items-center justify-center">
              <h3 className="text-white text-xl md:text-2xl font-light tracking-widest text-center px-4">
                {collection.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShopCollections; 