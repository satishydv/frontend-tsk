'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  unit: string;
  discount?: number;
}

const ProductCard = ({ id, name, price, originalPrice, image, unit, discount }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(prev => prev + 1);
  };

  const handleRemoveFromCart = () => {
    setQuantity(prev => Math.max(0, prev - 1));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/product/${id}`}>
        <div className="relative h-48 bg-gray-200">
          {/* Placeholder for product image */}
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Product Image
          </div>
          {discount && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
              {discount}% OFF
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/product/${id}`}>
          <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">{name}</h3>
        </Link>
        
        <div className="flex items-center mb-2">
          <span className="font-bold text-lg">₹{price}</span>
          {originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">₹{originalPrice}</span>
          )}
          <span className="ml-2 text-sm text-gray-500">/{unit}</span>
        </div>
        
        <div className="flex justify-between items-center">
          {quantity === 0 ? (
            <button 
              onClick={handleAddToCart}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
            >
              ADD
            </button>
          ) : (
            <div className="flex items-center justify-between w-full border border-green-600 rounded-lg">
              <button 
                onClick={handleRemoveFromCart}
                className="px-4 py-2 text-green-600 hover:bg-green-50"
              >
                -
              </button>
              <span className="font-medium">{quantity}</span>
              <button 
                onClick={handleAddToCart}
                className="px-4 py-2 text-green-600 hover:bg-green-50"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 