import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function EventsPage() {
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
    },
    {
      id: 3,
      title: "Cloths Distribution",
      description: "Providing warmth and dignity through clothing. Our distribution drives ensure that everyone has access to clean, proper clothing regardless of their circumstances.",
      image: "/images/events/Cloths-Distribution.jpg",
    },
    {
      id: 4,
      title: "Women's Day",
      description: "Celebrating the strength and resilience of women. Our Women's Day events honor achievements and inspire future generations of female leaders.",
      image: "/images/events/Women's-Day.jpg",
    },
    {
      id: 5,
      title: "Food Donation Initiatives by Our NGO",
      description: "Fighting hunger one meal at a time. Our food donation programs provide nutritious meals to those facing food insecurity across communities.",
      image: "/images/events/Food-Donation.jpg",
    },
    {
      id: 6,
      title: "Ensuring Happy and Healthy Animals through Feeding Programs",
      description: "Extending compassion to our animal friends. Our feeding programs ensure street animals receive proper nutrition and care for a healthier existence.",
      image: "/images/events/Animal-Feeding.jpg",
    },
    {
      id: 7,
      title: "Sanitary Pads Distribution",
      description: "Promoting menstrual hygiene and dignity. Our distribution initiatives ensure women have access to essential sanitary products regardless of economic status.",
      image: "/images/events/Sanitary-Pads.jpg",
    },
    {
      id: 8,
      title: "Free Workshops",
      description: "Empowering through knowledge and skills. Our workshops provide valuable training and education to help individuals thrive in various aspects of life.",
      image: "/images/events/Free-Workshop.jpg",
    }
  ];

  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent text-lg mb-3">Suvidha Events</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Charity Events: Celebrating<br />Our Impact Together</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <h2 className="text-2xl font-bold mb-3 text-gray-700">{event.title}</h2>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 