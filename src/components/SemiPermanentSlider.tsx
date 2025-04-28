'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const products = [
  {
    id: 1,
    name: 'Moon - Semi-Permanent Tattoo',
    price: 700,
    originalPrice: 900,
    rating: 5,
    image: '/products/moon-tattoo.png',
    isSale: true,
    saveAmount: 200
  },
  {
    id: 2,
    name: 'Love Rose - Semi-Permanent Tattoo',
    price: 1000,
    rating: 5,
    image: '/products/love-rose-tattoo.png',
    isSale: false,
    saveAmount: 200
  },
  {
    id: 3,
    name: 'Dragon - Semi-Permanent Tattoo',
    price: 800,
    rating: 4,
    image: '/products/dragon-tattoo.png',
    isSale: false,
    saveAmount: 200
  },
  {
    id: 4,
    name: 'Butterfly - Semi-Permanent Tattoo',
    price: 600,
    originalPrice: 750,
    rating: 5,
    image: '/products/butterfly-tattoo.png',
    isSale: true,
    saveAmount: 150
  },
  {
    id: 5,
    name: 'Phoenix - Semi-Permanent Tattoo',
    price: 900,
    rating: 4,
    image: '/products/phoenix-tattoo.png',
    isSale: false,
    saveAmount: 200
  }
];

const SemiPermanentSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-light tracking-wider">FEATURED-COLLECTION</h2>
        <Link href="/semi-permanent" className="text-blue-300 hover:text-black text-xl">
          VIEW ALL
        </Link>
      </div>

      <div className="relative">
        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex gap-4 min-w-max">
            {products.map((product) => (
              <div key={product.id} className="w-[180px] md:w-[280px] relative group rounded-lg">
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
                <div className="relative aspect-[3/4] mb-4 bg-gray-100">
                  <div className="w-full h-full relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <h3 className="font-light text-sm">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className='flex justify-between'>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < product.rating ? "text-blue-400" : "text-gray-300"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <AiOutlineShoppingCart className="w-5 h-5" />
                      </button>
                  </div>
                  

                  {/* Price Section */}
                  <div className="space-y-1">
                    {/* Original Price and Current Price */}
                    <div className="flex items-center gap-2">
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          Rs. {product.originalPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-lg">Rs. {product.price.toFixed(2)}</span>
                    </div>
                    
                    {/* Save Amount and Cart */}
                    <div className="flex items-center justify-between">
                      {product.saveAmount && (
                        <span className="text-sm text-red-500">
                          Save Rs. {product.saveAmount.toFixed(2)}
                        </span>
                      )}
                      {/* <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <AiOutlineShoppingCart className="w-5 h-5" />
                      </button> */}
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