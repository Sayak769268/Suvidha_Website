import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy - Suvidha Foundation</title>
        <meta name="description" content="Privacy Policy of Suvidha Foundation" />
      </Head>

      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-6">
              At Suvidha Foundation, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Name and contact information</li>
              <li>Educational background</li>
              <li>Volunteer or internship applications</li>
              <li>Donation information</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Process your applications and donations</li>
              <li>Send you updates about our programs</li>
              <li>Improve our services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: info@suvidhafoundationedutech.org
              <br />
              Phone: +91 7620086320
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 