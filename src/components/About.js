import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-primary">Us</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about/about.jpg"
              alt="Suvidha Foundation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Who We Are</h3>
              <p className="text-gray-600 leading-relaxed">
                Suvidha Mahila Mandal, established on September 8, 1995, is a non-profit organization working to impart education among the financially challenged sections. We provide student internships, mentorship, and volunteer opportunities to build a promising future.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive to bridge the educational gap for underprivileged children, empower communities through awareness campaigns, and promote environmental sustainability through various initiatives.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Suvidha Foundation envisions equal opportunities, quality education, and a sustainable future for all members of society through our educational, social, healthcare, and empowerment programs.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 