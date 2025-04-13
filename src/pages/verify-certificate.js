import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function VerifyCertificate() {
  return (
    <div>
      <Head>
        <title>Verify Your Certificate - Suvidha Foundation</title>
        <meta name="description" content="Verify your Suvidha Foundation certificate" />
      </Head>

      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Verify Your Certificate</h1>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Enter your certificate number below to verify its authenticity.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="certificateNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Certificate Number
                </label>
                <input
                  type="text"
                  id="certificateNumber"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Enter your certificate number"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
              >
                Verify Certificate
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 