'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: 'Animation',
    image: '/design/animation.webp',
    href: '/category/animation'
  },
  {
    title: 'Mobile',
    image: '/design/mobile.webp',
    href: '/category/mobile'
  },
  {
    title: 'Branding',
    image: '/design/branding.webp',
    href: '/category/branding'
  },
  {
    title: 'Product Design',
    image: '/design/product.webp',
    href: '/category/product-design'
  },
  {
    title: 'Web Design',
    image: '/design/web.webp',
    href: '/category/web-design'
  },
  {
    title: 'Typography',
    image: '/design/typography.webp',
    href: '/category/typography'
  },
  {
    title: 'Print',
    image: '/design/print.webp',
    href: '/category/print'
  }
  
];

const DesignCategories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let startTime: number;
    const duration = 30000; // 30 seconds for one complete scroll
    const totalWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) % duration;
      const percentage = progress / duration;
      
      if (scrollContainer) {
        scrollContainer.scrollLeft = totalWidth * percentage;
        
        // Reset when reaching the end
        if (percentage >= 0.99) {
          startTime = currentTime;
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Pause animation on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      startTime = performance.now();
      animationFrameId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white py-12 md:py-16">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Explore Design Categories
        </h2>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden gap-4 md:gap-6 pb-4 cursor-grab"
        >
          {/* Double the items for seamless infinite scroll */}
          {[...categories, ...categories].map((category, index) => (
            <Link
              key={`${category.title}-${index}`}
              href={category.href}
              className="flex-none w-[280px] md:w-[320px] group"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>
              <h3 className="mt-3 text-lg font-medium text-gray-900">
                {category.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignCategories; 