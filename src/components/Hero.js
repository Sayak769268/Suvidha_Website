import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden -mt-1 md:mt-0">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-purple-800">
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.5" fill="rgba(255, 255, 255, 0.5)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-yellow-300">
              Transforming Lives Through Compassion
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-10 text-gray-100">
              Suvidha Foundation is a non-profit organization dedicated to empowering communities through education, healthcare, and sustainable development.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link 
                href="/donate"
                className="inline-block bg-yellow-500 text-gray-900 px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-yellow-400 transition-colors font-medium text-sm md:text-base"
              >
                Donate Now
              </Link>
              <Link 
                href="/about"
                className="inline-block bg-blue-700 border-2 border-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-blue-600 transition-colors font-medium text-sm md:text-base"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 