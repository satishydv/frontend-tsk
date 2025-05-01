'use client';

import { useState, useEffect, useCallback } from 'react';
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
  { name: 'Grocery', icon: '🛒' },
  { name: 'Wine & Spirits', icon: '🍷' },
  { name: 'Seasonal', icon: '🎄' },
];

const navLinks = [
  { name: 'New Arrivals', href: '/new-arrivals' },
  { name: 'Tattoos', href: '/tattoos' },
  { name: 'Custom Tattoos', href: '/custom-tattoos' },
  { name: 'Tattoo Markers', href: '/tattoo-markers' },
  { name: 'Sale', href: '/sale' },
  { name: 'Categories', href: '/categories' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Help Center', href: '/help-center' },
];

const menuItems = navLinks;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLink, setActiveLink] = useState('New Arrivals');
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > lastScrollY && currentScroll > 50) {
      // Scrolling down
      setShowNav(false);
    } else {
      // Scrolling up
      setShowNav(true);
    }
    setLastScrollY(currentScroll);
  }, [lastScrollY]);

  // Handle scroll behavior
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
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
              <Link href="/" className="flex items-center ml-1">
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
                <AiOutlineSearch className="h-5 w-5 text-gray-500" />
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

          {/* Main Navigation Links */}
          <div className={`border-t border-gray-200 ${showNav ? 'block' : 'hidden'}`}>
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center space-x-8 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-black ${
                    activeLink === link.name ? 'text-black' : 'text-gray-500'
                  }`}
                  onClick={() => setActiveLink(link.name)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex space-x-6 px-4 py-2 whitespace-nowrap">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-sm font-medium transition-colors hover:text-black flex-shrink-0 ${
                        activeLink === link.name ? 'text-black' : 'text-gray-500'
                      }`}
                      onClick={() => setActiveLink(link.name)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
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
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-black"
            >
              <AiOutlineClose className="h-6 w-6" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="px-4 pb-4">
            <div className="relative">
              <AiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Menu Items */}
          <div className="overflow-y-auto">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 font-bold"
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveLink(item.name);
                }}
              >
                <span className="text-base">{item.name}</span>
                <MdKeyboardArrowRight className="h-6 w-6 text-gray-400" />
              </Link>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t">
            <div className="p-4">
              <p className="text-sm mb-4">Sign up now to receive 10% off your next purchase</p>
              <div className="flex gap-4 mb-4">
                <Link
                  href="/signup"
                  className="flex-1 bg-[#ffeb00] text-black py-2 rounded text-center font-medium"
                >
                  Sign Up
                </Link>
                <Link
                  href="/login"
                  className="flex-1 border border-black text-black py-2 rounded text-center font-medium"
                >
                  Login
                </Link>
              </div>
              <div className="space-y-3">
                <Link href="/student-discount" className="flex items-center text-sm">
                  <span className="mr-2">🎓</span>
                  Student Discount
                </Link>
                <Link href="/shipping" className="flex items-center text-sm">
                  <span className="mr-2">📦</span>
                  Free Shipping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default Navbar;