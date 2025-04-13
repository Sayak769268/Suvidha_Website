import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Video from '../components/Video';
import Team from '../components/Team';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import Certificates from '../components/Certificates';
import Events from '../components/Events';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Suvidha Foundation - Empowering Through Education</title>
        <meta name="description" content="Suvidha Foundation is a non-profit organization working to impart education among the financially challenged sections." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Stats />
        <Events />
        <CTA />
        <Video />
        <Team />
        <Partners />
        <Testimonials />
        <Certificates />
      </main>
      <Footer />
    </div>
  );
} 