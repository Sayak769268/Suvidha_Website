import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CodingBootcamp() {
  return (
    <div>
      <Head>
        <title>Free Kids Coding Bootcamp - Suvidha Foundation</title>
        <meta name="description" content="Join our free coding bootcamp for kids" />
      </Head>

      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Free Kids Coding Bootcamp</h1>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About the Program</h2>
              <p className="text-gray-600 mb-6">
                Our free coding bootcamp is designed to introduce children to the world of programming
                in a fun and engaging way. Through interactive lessons and hands-on projects, kids will
                learn fundamental coding concepts and develop problem-solving skills.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What Kids Will Learn</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Basic programming concepts</li>
                    <li>Problem-solving skills</li>
                    <li>Logical thinking</li>
                    <li>Creative coding projects</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Program Details</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Age group: 8-14 years</li>
                    <li>Duration: 8 weeks</li>
                    <li>Schedule: Weekend sessions</li>
                    <li>Mode: Online/Offline</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 