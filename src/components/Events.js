import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Tree Plantation",
      description: "Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet.",
      image: "/images/events/Tree-Plantation.jpg",
    },
    {
      id: 2,
      title: "Fundraising Events",
      description: "Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community.",
      image: "/images/events/Fundraising.jpg",
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent text-lg mb-3">Suvidha Events</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Charity Events: Celebrating<br />Our Impact Together</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-lg overflow-hidden"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 border-l-4 border-primary">
                <h3 className="text-2xl font-bold mb-3 text-gray-700">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/events"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-colors text-lg font-medium"
          >
            Show More Events
          </Link>
        </div>
      </div>
    </section>
  );
} 