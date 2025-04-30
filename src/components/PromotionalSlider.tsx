'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "Summer Essentials",
    subtitle: "Up to 50% OFF",
    buttonText: "Shop now",
    image: "/banners/banner1.avif",
  },
  {
    id: 2,
    title: "New Collection",
    subtitle: "Latest Arrivals",
    buttonText: "Explore",
    image: "/banners/banner2.webp",
  },
  {
    id: 3,
    title: "Special Offer",
    subtitle: "Limited Time Deal",
    buttonText: "Get Now",
    image: "/banners/banner3.webp",
  }
];

const SLIDE_DURATION = 5000; // 5 seconds per slide
const PROGRESS_UPDATE_INTERVAL = 16; // 60fps for smooth animation

const PromotionalSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, SLIDE_DURATION);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + (100 * PROGRESS_UPDATE_INTERVAL / SLIDE_DURATION);
        }
        return prev;
      });
    }, PROGRESS_UPDATE_INTERVAL);

    return () => {
      clearInterval(slideInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <section className="w-full py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
          {/* Slides */}
          <div 
            className="absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="absolute top-0 left-0 w-full h-full"
                style={{ transform: `translateX(${index * 100}%)` }}
              >
                {/* Background Image */}
                <div className="relative w-full h-full bg-gradient-to-r from-teal-400 to-cyan-300">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
                  {/* <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-white mb-8">
                    {slide.subtitle}
                  </p> */}
                  <button className="bg-black text-white px-8 py-3 rounded-full w-fit hover:bg-gray-800 transition-colors">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
            {slides.map((_, index) => (
              <div key={index} className="relative">
                {currentSlide === index ? (
                  // Progress indicator for current slide
                  <div className="w-8 h-2 bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white rounded-full"
                      style={{ 
                        width: `${progress}%`,
                        transition: 'width 16ms linear'
                      }}
                    />
                  </div>
                ) : (
                  // Dot indicator for other slides
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalSlider; 