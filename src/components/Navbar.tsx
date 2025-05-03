'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { MdKeyboardArrowRight, MdLocationOn } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import MobileMenuSlider from './MobileMenuSlider';

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

// 1. Add dropdown menu data for mobile
const mobileMenu = [
  {
    title: 'Temporary',
    links: [],
  },
  {
    title: 'Semi-Permanent',
    links: [
      { name: 'Custom Semi-Permanent', href: '/custom-semi-permanent' },
      { name: 'Custom Temporary Tattoos', href: '/custom-temporary-tattoos' },
    ],
  },
  {
    title: 'Custom Tattoos',
    links: [
      { name: 'Custom Semi-Permanent', href: '/custom-semi-permanent' },
      { name: 'Custom Temporary Tattoos', href: '/custom-temporary-tattoos' },
    ],
  },
  {
    title: 'Categories',
    links: [
      { name: 'Custom Semi-Permanent', href: '/custom-semi-permanent' },
      { name: 'Custom Temporary Tattoos', href: '/custom-temporary-tattoos' },
    ],
  },
  {
    title: 'Custom',
    links: [
      { name: 'Custom Semi-Permanent', href: '/custom-semi-permanent' },
      { name: 'Custom Temporary Tattoos', href: '/custom-temporary-tattoos' },
    ],
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLink, setActiveLink] = useState('New Arrivals');
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Handle scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      // Cleanup styles when component unmounts
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

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
      if (!ticking && !isMenuOpen) {  // Only handle scroll when menu is closed
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll, isMenuOpen]);

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
              <button className="p-2 text-gray-700 hover:text-black" onClick={() => setIsCartOpen(true)}>
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
          <div className="border-t border-transparent transition-all duration-300 transform translate-y-0 opacity-100">
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
                <div className="flex space-x-6 px-4 py-0.5 whitespace-nowrap">
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
          className={`fixed inset-y-0 left-0 w-full max-w-sm bg-white transform transition-transform duration-300 ease-in-out flex flex-col h-[100dvh] ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Logo Centered and Close Button Top Right */}
          <div className="relative pt-4 pb-2 px-4 flex items-center justify-center">
            <Link href="/" className="flex items-center mx-auto">
              <Image
                src="/logo.avif"
                alt="BigBasket"
                width={80}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-black"
              aria-label="Close Menu"
            >
              <AiOutlineClose className="h-7 w-7" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="shrink-0 px-4 pb-4">
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

          {/* Mobile Menu Image Slider Section */}
          <div className="px-4 pb-4">
            <MobileMenuSlider />
          </div>

          {/* Menu Items */}
          <div className="flex-1 min-h-0 overflow-y-auto">
            <div className="h-full">
              {mobileMenu.map((item, idx) => (
                <div key={item.title}>
                  <button
                    className={`flex items-center justify-between px-4 py-3 w-full text-left font-semibold ${openDropdown === idx ? 'bg-blue-100' : ''}`}
                    onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                  >
                    <span className="text-base font-medium">{item.title}</span>
                    <span className={`transition-transform duration-200 ${openDropdown === idx ? 'rotate-180' : ''}`}>
                      <MdKeyboardArrowRight className="h-6 w-6 text-gray-400" />
                    </span>
                  </button>
                  {/* Dropdown links with animation */}
                  {item.links.length > 0 && (
                    <div
                      className={
                        `overflow-hidden bg-white
                        transition-[max-height,opacity,transform] duration-400 ease-in-out
                        will-change-[max-height,opacity,transform]
                        ${openDropdown === idx
                          ? 'max-h-[999px] opacity-100 translate-y-0 transition-delay-0'
                          : 'max-h-0 opacity-0 -translate-y-2 transition-delay-300'
                        }`
                      }
                    >
                      {item.links.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-8 py-2 text-base text-black hover:bg-gray-50 transition-opacity duration-300"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="shrink-0 border-t bg-white">
            <div className="p-4">
              <p className="text-sm mb-4">Sign up now to receive 10% off your next purchase</p>
              <div className="flex gap-4">
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
            </div>
          </div>
        </div>
      </div>

      {/* Sliding Cart Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsCartOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 h-full w-[350px] max-w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} sm:w-[350px] w-full`}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-black text-white px-4 py-3 border-b border-gray-200">
            <span className="font-bold text-lg tracking-wide">CART</span>
            <button onClick={() => setIsCartOpen(false)} aria-label="Close Cart">
              <AiOutlineClose className="h-6 w-6 text-white" />
            </button>
          </div>
          {/* Body */}
          <div className="flex-1 bg-gray-50 px-4 py-4">
            <p className="text-sm text-black mt-2">Your cart is currently empty.</p>
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