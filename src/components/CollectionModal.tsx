'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface CollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  collection: {
    id: number;
    title: string;
    image: string;
    href: string;
  };
}

const CollectionModal = ({ isOpen, onClose, collection }: CollectionModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Collection Image */}
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={collection.image}
            alt={collection.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Collection Info */}
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{collection.title}</h2>
          <p className="text-gray-600 mb-6">
            Explore our collection of {collection.title.toLowerCase()}. Find the perfect design for your next tattoo.
          </p>
          <button
            onClick={() => window.location.href = collection.href}
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            View Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionModal; 