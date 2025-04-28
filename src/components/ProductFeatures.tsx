'use client';

import Image from 'next/image';

const features = [
  {
    icon: '/icons/clock.webp',
    title: 'Long Lasting Quality',
    description: ['100% Waterproof', 'No Shelf Life']
  },
  {
    icon: '/icons/designs.webp',
    title: '6,000+ Designs',
    description: ['Multiple Sizes Per Design', 'Real Artists']
  },
  {
    icon: '/icons/return.webp',
    title: 'FREE 30 Day Returns',
    description: ['Money Back', 'Guarantee']
  },
  {
    icon: '/icons/organic.webp',
    title: '100% Organic',
    description: ['Vegan | Cruelty-Free', 'Soy-Based Ink']
  },
  {
    icon: '/icons/globe.svg',
    title: 'Support Artists',
    description: ['Worldwide']
  }
];

const ProductFeatures = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Horizontal scroll, Desktop: Grid */}
        <div className="flex md:grid md:grid-cols-5 md:gap-4 overflow-x-auto hide-scrollbar">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex-none w-[160px] md:w-auto flex flex-col items-center text-center px-2 md:px-0"
            >
              {/* Icon */}
              <div className="relative w-30 h-30 mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Title */}
              {/* <h3 className="text-base font-medium mb-2">
                <span className="font-light">{feature.title.split(' ')[0]} </span>
                {feature.title.split(' ').slice(1).join(' ')}
              </h3> */}
              
              {/* Description */}
              {/* <div className="space-y-1">
                {feature.description.map((line, i) => (
                  <p key={i} className="text-sm text-gray-600">
                    {line}
                  </p>
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default ProductFeatures; 