'use client';

import { useState } from 'react';
import Image from 'next/image';

const ProteinSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Protein Power-up",
      description: "Supplements to make your workouts better.",
      discount: "UP TO 50% OFF",
      image: "/protein-slide-1.webp" // Dummy image path
    },
    {
      id: 2,
      title: "Premium Supplements",
      description: "Enhance your fitness journey",
      discount: "UP TO 40% OFF",
      image: "/protein-slide-2.jpg" // Dummy image path
    },
    {
      id: 3,
      title: "Workout Essentials",
      description: "Best quality supplements",
      discount: "UP TO 30% OFF",
      image: "/protein-slide-3.jpg" // Dummy image path
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden ">
      {/* Main slider container */}
      <div className="relative h-[180px] md:h-[200px] bg-purple-50 rounded-lg">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={slides[currentSlide].image}
            alt="Background"
            fill
            priority
            className="object-cover rounded-lg"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50/90 via-purple-50/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-between px-4 md:px-12">
          {/* Text content */}
          <div className="w-[60%] md:w-[45%] z-10">
            <h2 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 text-gray-800">{slides[currentSlide].title}</h2>
            <p className="text-sm md:text-base mb-1 md:mb-2 text-gray-600 hidden md:block">{slides[currentSlide].description}</p>
            <div className="text-lg md:text-2xl font-bold text-red-600 mb-2 md:mb-3">
              {slides[currentSlide].discount}
            </div>
            <button className="bg-red-600 text-white px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base rounded-full font-semibold hover:bg-red-700 transition-colors">
              SHOP NOW
            </button>
          </div>
          
          {/* Product Images */}
          <div className="relative w-[40%] md:w-[50%] h-full flex items-center justify-end">
            {/* <div className="relative w-full h-[140px] md:h-[180px]">
              <Image
                src={slides[currentSlide].image}
                alt="Protein supplements"
                fill
                priority
                className="object-contain"
              />
            </div> */}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 md:p-2 rounded-full shadow-lg hover:bg-white z-20"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 md:p-2 rounded-full shadow-lg hover:bg-white z-20"
        >
          →
        </button>

        {/* Dots navigation */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                currentSlide === index ? 'bg-red-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProteinSlider; 