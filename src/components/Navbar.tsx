'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { MdKeyboardArrowRight, MdLocationOn } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';

const menuCategories = [
  { name: 'Deals & Sale', icon: '🏷️' },
  { name: 'Prepared & Deli', icon: '🍱' },
  { name: 'Produce', icon: '🥬' },
  { name: 'Meat & Seafood', icon: '🥩' },
  // { name: 'Dairy', icon: '🥛' },
  // { name: 'Bakery', icon: '🥖' },
  // { name: 'Frozen', icon: '❄️' },
  { name: 'Grocery', icon: '🛒' },
  { name: 'Wine & Spirits', icon: '🍷' },
  { name: 'Seasonal', icon: '🎄' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Lock scroll by adding a class to the body
      document.body.classList.add('overflow-hidden');
    } else {
      // Unlock scroll by removing the class
      document.body.classList.remove('overflow-hidden');
    }
    
    // Cleanup function to ensure scroll is unlocked when component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-black"
            >
              <FiMenu className="h-6 w-6" />
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.avif"
                  alt="BigBasket"
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuCategories.slice(0, 4).map((category) => (
                <Link
                  key={category.name}
                  href={`/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-700 hover:text-black md:hidden">
                <AiOutlineHeart className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-700 hover:text-black hidden md:block">
                <AiOutlineSearch className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-700 hover:text-black">
                <AiOutlineShoppingCart className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Search Box Section */}
          <div className="pb-3 md:hidden rounded-lg">
            <div className="relative flex items-center bg-gray-100 rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <AiOutlineSearch className="h-5 w-5 text-gray-500 " />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full py-2 pl-10 pr-4 text-sm bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-0 placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      </nav>

     

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed inset-0 bg-black/30 z-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed inset-y-0 left-0 w-full max-w-sm bg-white transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu Header here */}
          <div className="flex items-center gap-18 p-4 border-b bg-white">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 -mr-2 text-gray-600 hover:text-gray-900"
            >
              <AiOutlineClose className="h-6 w-6" />
            </button>
                 {/* Logo */}
                 <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.avif"
                  alt="BigBasket"
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                  priority
                />
              </Link>
            </div>
          </div>

          {/* Delivery Location */}
          {/* <div className="p-4 border-b bg-white">
            <div className="flex items-center text-gray-700">
              <MdLocationOn className="h-6 w-6 mr-2 text-green-600" />
              <span className="text-sm">Delivery</span>
            </div>
            <button className="mt-1 text-sm font-medium text-gray-900 hover:text-green-600">
              Enter your address
            </button>
          </div> */}

          {/* Categories */}
          <div className="overflow-y-auto h-[calc(100vh-80px)] bg-white">
            {menuCategories.map((category, index) => (
              <Link
                key={category.name}
                href={`/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center justify-between px-4 py-3 text-gray-900 hover:bg-gray-50 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <span className="mr-3 text-xl">{category.icon}</span>
                  <span className="text-sm font-medium">{category.name}</span>
                </div>
                <MdKeyboardArrowRight className="h-5 w-5 text-gray-400" />
              </Link>
            ))}
          </div>

          {/* Sign In Button */}
          <div className="absolute bottom-0 left-0 right-0 border-t p-4 bg-white">
            <Link
              href="/signin"
              className="flex items-center text-sm font-medium text-gray-900 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <BiUser className="h-5 w-5 mr-2" />
              Sign in or create account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar; 