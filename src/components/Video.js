import React from 'react';

export default function Video() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">International Conference on AI Innovations in Engineering</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            (ICAIIE - 2025) | 22 - 23 March 2025, Nagpur
          </p>
          <p className="text-lg text-gray-500 mt-2">
            Organized by Research Wing, Suvidha Foundation
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-xl">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/SoW3lH5JqO0" 
              title="Suvidha Foundation Impact Video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
} 