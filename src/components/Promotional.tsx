'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "Summer Essentials",
    subtitle: "Up to 50% OFF",
    buttonText: "Shop now",
    image: "/banners/banner4.webp",
  }
];

const SLIDE_DURATION = 5000; // 5 seconds per slide
const PROGRESS_UPDATE_INTERVAL = 16; // 60fps for smooth animation

const Promotional = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);



  return (
    <section className="w-full pt-6 pb-2">
      <div className="max-w-7xl mx-auto px-2">
        <div className="relative w-full h-[120px] md:h-[400px] rounded-2xl overflow-hidden">
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
                  {/* <button className="bg-black text-white px-8 py-3 rounded-full w-fit hover:bg-gray-800 transition-colors">
                    {slide.buttonText}
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotional;