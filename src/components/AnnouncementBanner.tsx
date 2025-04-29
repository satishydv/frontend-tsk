'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const announcements = [
  {
    text: "Spring Flowers Have Arrived!",
    link: "/shop-now",
    linkText: "Shop Now"
  },
  {
    text: "Free Delivery on Orders Above ₹999!",
    link: "/delivery",
    linkText: "Shop Now"
  },
  {
    text: "20% Off on First Order",
    link: "/offers",
    linkText: "Shop Now"
  }
];

const AnnouncementBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? announcements.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[#ffeb00] text-black">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center justify-center h-[50px] px-4">
          {/* Previous Button */}
          <button 
            onClick={goToPrevious}
            className="absolute left-2 text-black hover:opacity-75 transition-opacity"
            aria-label="Previous announcement"
          >
            <IoIosArrowBack className="h-5 w-5" />
          </button>

          {/* Announcement Content */}
          <div className="text-center flex items-center justify-center space-x-1 text-sm sm:text-base transition-all duration-500 ease-in-out">
            <span className="font-medium">
              {announcements[currentIndex].text}
            </span>
            <Link 
              href={announcements[currentIndex].link}
              className="font-medium underline hover:opacity-75 transition-opacity"
            >
              {announcements[currentIndex].linkText}
            </Link>
          </div>

          {/* Next Button */}
          <button 
            onClick={goToNext}
            className="absolute right-2 text-black hover:opacity-75 transition-opacity"
            aria-label="Next announcement"
          >
            <IoIosArrowForward className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner; 