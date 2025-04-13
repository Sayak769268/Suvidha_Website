import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/volunteer.jpg"
          alt="Volunteer working with Suvidha Foundation"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Internship Program
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Gain valuable experience while making a positive impact on society. Our internship program offers opportunities in various fields including web development, content writing, social media management, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </a>
            <Link href="/contact" className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 