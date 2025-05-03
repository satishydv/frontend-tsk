import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const sliderImages = [
  '/slider/slider1.png', // Use the provided image path or replace with actual path
  '/slider/slider2.png', // Placeholder for additional images
  '/slider/slider3.png', // Placeholder for additional images
];

const MobileMenuSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoSliding) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isAutoSliding]);

  const goToPrev = () => {
    setCurrent((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
    setIsAutoSliding(false);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % sliderImages.length);
    setIsAutoSliding(false);
  };

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrev(),
    trackMouse: true
  });

  return (
    <div 
      {...handlers}
      className="relative w-full h-28 rounded-xl overflow-hidden bg-[#175c2b] flex items-center justify-center cursor-grab active:cursor-grabbing"
    >
      <img
        src={sliderImages[current]}
        alt="slider"
        className="object-cover w-full h-full transition-all duration-500"
        style={{ borderRadius: '16px' }}
      />
      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {sliderImages.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${current === idx ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileMenuSlider; 