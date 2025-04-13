import React from 'react';
import Image from 'next/image';

export default function Partners() {
  const partners = [
    {
      id: 1,
      logo: '/images/partners/Goodera.png'
    },
    {
      id: 2,
      logo: '/images/partners/collab-1.jpg'
    },
    {
      id: 3,
      logo: '/images/partners/collab-2.jpg'
    },
    {
      id: 4,
      logo: '/images/partners/collab-3.jpg'
    },
    {
      id: 5,
      logo: '/images/partners/collab-4.png'
    },
    {
      id: 6,
      logo: '/images/partners/collab-5.png'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-primary">Partners</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <div key={partner.id} className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow p-4">
              <div className="relative h-24 w-full">
                <Image
                  src={partner.logo}
                  alt="Partner logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 