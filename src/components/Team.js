import React from 'react';
import Image from 'next/image';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Shobha Motghare',
      role: 'Secretary',
      image: '/images/team/Shobha_Motghare.jpeg',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-200',
      linkedIn: 'https://www.linkedin.com/in/shobha-motghare-0a6a57238/'
    },
    {
      id: 2,
      name: 'Payal Badhe',
      role: 'President',
      image: '/images/team/Payal_Badhe.jpg',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      borderColor: 'border-purple-200',
      linkedIn: 'https://www.linkedin.com/in/payal-badhe-531756aa/'
    },
    {
      id: 3,
      name: 'Bharti Shendre',
      role: 'Treasurer',
      image: '/images/team/Bharti_Shendre.jpg',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      borderColor: 'border-green-200'
    },
    {
      id: 4,
      name: 'Nilima Kalambe',
      role: 'Advisor',
      image: '/images/team/Nilima_Kalambe.jpg',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700',
      borderColor: 'border-amber-200'
    }
  ];

  return (
    <section className="py-16 bg-white" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-primary">Team</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated individuals who work tirelessly to make a difference in the lives of others.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className={`rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all h-full flex flex-col`}
            >
              <div className="relative h-64 w-full bg-gray-200">
                <Image 
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={`p-6 ${member.bgColor} border-l-4 ${member.borderColor} flex-grow flex flex-col`}>
                <div className="text-center mb-auto">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className={`text-sm ${member.textColor}`}>{member.role}</p>
                </div>
                
                {member.linkedIn && (
                  <div className="flex justify-center mt-4">
                    <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className={`${member.textColor} hover:opacity-80`}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 