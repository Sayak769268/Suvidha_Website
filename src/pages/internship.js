import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import InternshipForm from '../components/InternshipForm';

export default function InternshipPage() {
  return (
    <Layout title="Internship | Suvidha Foundation" description="Apply for internship and mentorship programs at Suvidha Foundation">
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Internship Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Gain valuable experience and contribute to meaningful social impact
          </p>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Internship Opportunities</h2>
              <p className="text-lg text-gray-700">
                The Suvidha Foundation Internship Program is a unique opportunity for students and recent graduates 
                to gain experience and contribute to the work of Suvidha Foundation. Along with undertaking tasks 
                related to their specific skills, we encourage interns to develop a reputable professional portfolio.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Program Management</h3>
                <p className="text-gray-700 mb-4">
                  Work with our program teams to design, implement, and evaluate our various social initiatives.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Learn program management skills</li>
                  <li>Coordinate with stakeholders</li>
                  <li>Develop impact assessment methods</li>
                  <li>Duration: 1-3 months</li>
                </ul>
                <Link href="#apply-now" className="text-primary font-medium hover:underline">Learn More</Link>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Content Creation</h3>
                <p className="text-gray-700 mb-4">
                  Help us create compelling content for our website, social media, and other communication channels.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Develop engaging written content</li>
                  <li>Create graphic designs and visuals</li>
                  <li>Manage social media campaigns</li>
                  <li>Duration: 1-3 months</li>
                </ul>
                <Link href="#apply-now" className="text-primary font-medium hover:underline">Learn More</Link>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Research & Documentation</h3>
                <p className="text-gray-700 mb-4">
                  Conduct research on various social issues and help document our impact and case studies.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Research on social development topics</li>
                  <li>Create impact reports and case studies</li>
                  <li>Develop knowledge resources</li>
                  <li>Duration: 1-3 months</li>
                </ul>
                <Link href="#apply-now" className="text-primary font-medium hover:underline">Learn More</Link>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Event Management</h3>
                <p className="text-gray-700 mb-4">
                  Help organize and manage our various events, workshops, and awareness campaigns.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Event planning and coordination</li>
                  <li>Volunteer management</li>
                  <li>Logistics and implementation</li>
                  <li>Duration: 1-3 months</li>
                </ul>
                <Link href="#apply-now" className="text-primary font-medium hover:underline">Learn More</Link>
              </div>
            </div>
            
            <div id="apply-now" className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-center">Apply for an Internship</h3>
              <InternshipForm />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Testimonials from Former Interns</h2>
              <p className="text-lg text-gray-700">
                Hear what previous interns have to say about their experience with Suvidha Foundation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-700 italic mb-6">
                  "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work, which they make our work more easy. So, overall it's amazing organization to learn."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Divina Malfoy</h4>
                    <p className="text-gray-600">Content Creation Intern</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-700 italic mb-6">
                  "I'm glad to have worked with the Suvidha Foundation because I am passionate about their message and what they do. It was a valuable learning experience for my career."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Aheri Ghosh</h4>
                    <p className="text-gray-600">Program Management Intern</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 