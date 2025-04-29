'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: {
        mobile: '/slider/slide3.jpg',  // This will be your mobile image path
        desktop: '/slider/slide1-desktop.png' // This will be your desktop image path
      },
      title: 'NON-PERMANENT',
      subtitle: 'Original Since 2017'
    },
    {
      id: 2,
      image: '/slider/slide2.jpg',
      title: 'EXPRESS YOURSELF',
      subtitle: 'Temporary & Semi-Permanent Options'
    },
    {
      id: 3,
      image: '/slider/slide3.jpg',
      title: 'CUSTOM DESIGNS',
      subtitle: 'Make Your Statement'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const getBackgroundStyle = (slide: typeof slides[0]) => {
    if (typeof slide.image === 'string') {
      return { backgroundImage: `url(${slide.image})` };
    }
    // For mobile devices, the mobile image will be used by default
    return { backgroundImage: `url(${slide.image.mobile})` };
  };

  return (
    <div className="relative w-full h-[65vh] md:h-screen overflow-hidden px-4 md:px-20">
      {/* Slider Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Image Container */}
          <div 
            className={`absolute inset-0 bg-cover bg-center ${
              typeof slide.image !== 'string' ? 'md:hidden' : ''
            }`}
            style={getBackgroundStyle(slide)}
          >
            {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
          </div>
          
          {/* Desktop Image (only rendered for first slide) */}
          {typeof slide.image !== 'string' && (
            <div 
              className="absolute inset-0 bg-cover bg-center hidden md:block"
              style={{ backgroundImage: `url(${slide.image.desktop})` }}
            >
              {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
            </div>
          )}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-7xl font-light mb-2 md:mb-4 tracking-widest">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-2xl mb-4 md:mb-8 tracking-wider">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4">
            <Link 
              href="/temporary"
              className="border-2 border-white px-1 py-2 md:px-4 md:py-3 text-white hover:bg-white hover:text-black transition-colors duration-300 text-sm md:text-base rounded-md w-auto"
            >
              TEMPORARY
            </Link>
            <Link 
              href="/semi-permanent"
              className="border-2 border-white px-1 py-2 md:px-4 md:py-3 text-white hover:bg-white hover:text-black transition-colors duration-300 text-sm md:text-base rounded-md w-auto"
            >
              SEMI-PERMANENT
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0">
        <div className="flex justify-center gap-2 md:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-6 md:w-8' 
                  : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero; 