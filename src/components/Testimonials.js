import React, { useState } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      image: '/images/testimonials/test1.jpg',
      alt: 'Suvidha Foundation Testimonial'
    },
    {
      id: 2,
      image: '/images/testimonials/test2.jpg',
      alt: 'Suvidha Foundation Testimonial'
    },
    {
      id: 3,
      image: '/images/testimonials/test3.jpg',
      alt: 'Suvidha Foundation Testimonial'
    },
    {
      id: 4,
      image: '/images/testimonials/test4.jpg',
      alt: 'Suvidha Foundation Testimonial'
    },
    {
      id: 5,
      image: '/images/testimonials/test5.jpg',
      alt: 'Suvidha Foundation Testimonial'
    },
    {
      id: 6,
      image: '/images/testimonials/test6.jpg',
      alt: 'Suvidha Foundation Testimonial'
    },
    {
      id: 7,
      image: '/images/testimonials/test7.jpg',
      alt: 'Suvidha Foundation Testimonial'
    },
    {
      id: 8,
      image: '/images/testimonials/test8.jpg',
      alt: 'Suvidha Foundation Testimonial'
    },
    {
      id: 9,
      image: '/images/testimonials/tset9.jpg',
      alt: 'Suvidha Foundation Testimonial'
    },
    {
      id: 10,
      image: '/images/testimonials/test10.jpg',
      alt: 'Suvidha Foundation Testimonial'
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const testimonialPerPage = 3;
  const pageCount = Math.ceil(testimonials.length / testimonialPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? pageCount - 1 : prev - 1));
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialPerPage,
    (currentPage + 1) * testimonialPerPage
  );

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonial</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            What people are talking about our charity activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-[500px] w-full">
                <Image 
                  src={testimonial.image}
                  alt={testimonial.alt}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                  priority
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          <button
            onClick={prevPage}
            className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white transition-colors"
            aria-label="Previous testimonials"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full ${
                currentPage === index ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
          <button
            onClick={nextPage}
            className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white transition-colors"
            aria-label="Next testimonials"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="https://drive.google.com/drive/u/0/folders/1lCc5YL2t6eFN3nlk9mgseCXCg7kOdty8" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block btn btn-primary px-6 py-3 rounded-lg font-semibold"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
} 