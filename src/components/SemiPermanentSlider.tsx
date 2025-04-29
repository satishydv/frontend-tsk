'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const products = [
  {
    id: 1,
    name: 'Moon',
    price: 700,
    originalPrice: 900,
    rating: 5,
    image: '/products/moon-tattoo.png',
    isSale: true,
    saveAmount: 200
  },
  {
    id: 2,
    name: 'Love Rose',
    price: 1000,
    originalPrice: 1200,
    rating: 5,
    image: '/products/love-rose-tattoo.png',
    isSale: false,
    saveAmount: 200
  },
  {
    id: 3,
    name: 'Dragon',
    price: 800,
    originalPrice: 1000,
    rating: 4,
    image: '/products/dragon-tattoo.png',
    isSale: false,
    saveAmount: 200
  },
  {
    id: 4,
    name: 'Butterfly',
    price: 600,
    originalPrice: 750,
    rating: 5,
    image: '/products/butterfly-tattoo.png',
    isSale: true,
    saveAmount: 150
  },
  {
    id: 5,
    name: 'Phoenix',
    price: 900,
    originalPrice: 1100,
    rating: 4,
    image: '/products/phoenix-tattoo.png',
    isSale: false,
    saveAmount: 200
  }
];

const SemiPermanentSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="py-3 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm font-extrabold tracking-normal">FEATURED-COLLECTION</h2>
        {/* <h2 className=" text-[24px]  text-heading6 font-bold  text-black mb-2 md:text-3xl">FEATURED-COLLECTION</h2> */}
        <Link href="/semi-permanent" className="text-blue-300 hover:text-black text-sm font-bold">
          VIEW ALL
        </Link>
      </div>

      <div className="relative">
        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex gap-4 min-w-max">
            {products.map((product) => (
              <div key={product.id} className="w-[180px] md:w-[280px] relative group rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* Wishlist Button */}
                <button className="absolute right-4 top-4 z-10 bg-grey p-2 text-black rounded-full shadow-md">
                  <AiOutlineHeart className="w-5 h-5" />
                </button>

                {/* Sale Badge */}
                {product.isSale && (
                  <div className="absolute left-4 top-4 z-10 bg-black text-white text-xs px-2 py-1">
                    Sale
                  </div>
                )}

                {/* Product Image */}
                <div className="relative aspect-[3/4] bg-gray-100">
                  <div className="w-full h-full relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Cart Icon - Repositioned for new height */}
                  <button className="absolute -bottom-3 right-4 p-2 bg-white hover:bg-gray-100 rounded-full transition-colors shadow-md">
                    <AiOutlineShoppingCart className="w-5 h-5" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="space-y-0 relative pb-0 pl-5">
                  <h3 className="text-lg font-normal">{product.name}</h3>
                  
                  {/* Price Section */}
                  <div className="space-y-1">
                    {/* Original Price and Current Price */}
                    <div className="flex justify-between items-center gap-2 whitespace-nowrap">
                      {product.originalPrice && (
                        <span className="text-xs text-gray-500 line-through">
                          Rs. {product.originalPrice}
                        </span>
                      )}
                      <span className="pr-2 font-semi-bold pb-0.5 text-sm">Rs. {product.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SemiPermanentSlider; 