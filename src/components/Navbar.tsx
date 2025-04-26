'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [cartItemCount] = useState(0); // This would be managed by your cart state

  return (
    <nav className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-green-600 text-white py-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-gray-200 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18v-5m0 0V6m0 7h5m-5 0H7" />
              </svg>
              SAVE MORE ON APP
            </Link>
            <Link href="/" className="hover:text-gray-200">Sell on GreenCart</Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-gray-200">Help</Link>
            <Link href="/" className="hover:text-gray-200">Sign In</Link>
            <Link href="/cart" className="hover:text-gray-200 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-16 w-56 flex items-center">
              <div className="relative h-14 w-14">
                <Image 
                  src="/logo.avif"
                  alt="GreenCart Logo"
                  width={556}
                  height={556}
                  className="rounded-lg"
                  priority
                />
              </div>
              {/* <span className="text-green-600 font-bold text-2xl ml-3">GreenCart</span> */}
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-3xl mx-12">
            <div className={`relative ${isSearchFocused ? 'ring-2 ring-green-600' : ''}`}>
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none text-gray-700 placeholder-gray-400"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <button className="absolute right-0 top-0 h-full px-8 bg-green-600 text-white rounded-r-lg hover:bg-green-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Cart */}
          <div className="flex items-center">
            <Link href="/cart" className="flex items-center space-x-2 group">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700 group-hover:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <span className="font-semibold text-gray-700 group-hover:text-green-600">Cart</span>
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-6 flex items-center space-x-8 text-gray-600">
          <Link href="/" className="hover:text-green-600 transition-colors">Fruits & Vegetables</Link>
          <Link href="/" className="hover:text-green-600 transition-colors">Foodgrains, Oil & Masala</Link>
          <Link href="/" className="hover:text-green-600 transition-colors">Bakery, Cakes & Dairy</Link>
          <Link href="/" className="hover:text-green-600 transition-colors">Beverages</Link>
          <Link href="/" className="hover:text-green-600 transition-colors">Snacks & Munchies</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 