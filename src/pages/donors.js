import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Donors from '../components/Donors';

export default function DonorsPage() {
  return (
    <div>
      <Head>
        <title>Our Donors - Suvidha Foundation</title>
        <meta name="description" content="Meet the generous donors who support Suvidha Foundation's mission" />
      </Head>

      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-primary py-32 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Donors</h1>
            <p className="text-xl">Generous individuals and organizations who support our mission</p>
          </div>
        </div>

        {/* Donors List Component */}
        <Donors />
      </main>
      <Footer />
    </div>
  );
} 