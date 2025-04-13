import React from 'react';
import Layout from '../components/Layout';
import Team from '../components/Team';

export default function AboutPage() {
  return (
    <Layout title="About Us | Suvidha Foundation" description="Learn more about our mission, vision, and the team behind Suvidha Foundation">
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our mission, vision, and the team behind Suvidha Foundation
          </p>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Suvidha Mahila Mandal, established on September 8, 1995, is a non-profit organization 
                working to impart education among the financially challenged sections to help them 
                realize parity in education and strength of little minds in building a promising future.
              </p>
              <p className="text-gray-700 mb-6">
                The organization has provisions of student internships, student mentorship, and the scope 
                to volunteer. Through these programs, the organization aims to achieve the vision of imparting 
                innovative education that stays with the students forever and equips them for the unforeseen future.
              </p>
            </div>
            
            <div className="bg-gray-200 aspect-video w-full rounded-lg overflow-hidden">
              <img src="/images/about/about.jpg" alt="Suvidha Foundation Story" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">
                    <span className="font-semibold">Imparting Education:</span> Suvidha Foundation strives to bridge the educational gap by providing access to quality education, particularly for underprivileged children and those facing financial challenges.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">
                    <span className="font-semibold">Empowering Communities:</span> We aim to empower individuals and communities through social awareness campaigns, healthcare initiatives, and vocational training programs.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">
                    <span className="font-semibold">Building a Sustainable Future:</span> The foundation actively promotes environmental sustainability through tree plantation drives and fostering greener practices.
                  </p>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-6">
                Suvidha Foundation envisions equal opportunities, quality education, and a sustainable future.
              </p>
              <p className="text-gray-700 mb-4">
                Key Activities:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">
                    <span className="font-semibold">Education:</span> Scholarships, internships, and mentorship programs.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">
                    <span className="font-semibold">Social Awareness:</span> Campaigns on hygiene, healthcare, and sustainability.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">
                    <span className="font-semibold">Healthcare:</span> Affordable, quality healthcare access.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">
                    <span className="font-semibold">Environment:</span> Tree plantation drives for sustainability.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">
                    <span className="font-semibold">Women Empowerment:</span> Skill development and support initiatives.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Team />
    </Layout>
  );
} 