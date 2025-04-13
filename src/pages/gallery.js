import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      image: '/images/gallery/workshops.jpg',
      title: 'Free Workshops',
      category: 'Suvidha Foundation Workshops',
      driveLink: 'https://drive.google.com/drive/u/0/folders/11DrNvVoYiIlmKUDW2AvsiklJTuIDL3Gk'
    },
    {
      id: 2,
      image: '/images/gallery/books.jpg',
      title: 'Books Distribution',
      category: 'Suvidha Foundation Books Distribution',
      driveLink: 'https://drive.google.com/drive/u/0/folders/1FKG4shImI-9JRavKIP-0b-Tp9Hd205VI'
    },
    {
      id: 3,
      image: '/images/gallery/online-events.jpg',
      title: 'Online Events',
      category: 'Suvidha Foundation Online Events',
      driveLink: 'https://drive.google.com/drive/u/0/folders/1LF6c_FtHzv1ldXKXZ6oRueaD6OtIWsms'
    },
    {
      id: 4,
      image: '/images/gallery/clothes.jpg',
      title: 'Clothes Distribution',
      category: 'Suvidha Foundation Clothes Distribution',
      driveLink: 'https://drive.google.com/drive/u/0/folders/1nOFKvOjhWsbfVVPGumOfpLrFe2364_zK'
    },
    {
      id: 5,
      image: '/images/gallery/tree-plantation.jpg',
      title: 'Tree Plantation',
      category: 'Suvidha Foundation Tree Plantation',
      driveLink: 'https://drive.google.com/drive/u/0/folders/1V5Owzjc00GT_U2Mw_bdOMbiCYSxmScSw'
    },
    {
      id: 6,
      image: '/images/gallery/education.jpg',
      title: 'Free Education',
      category: 'Suvidha Foundation Free Education',
      driveLink: 'https://drive.google.com/drive/u/0/folders/1ucG-Ltm_6fAwZ-1ta4-nHhRdKpu-3EAN'
    },
    {
      id: 7,
      image: '/images/gallery/womens-day.jpg',
      title: 'Women\'s Day',
      category: 'Suvidha Foundation Women\'s Day Celebration',
      driveLink: 'https://drive.google.com/drive/u/0/folders/1_V-acFibBsweHcM-R-P__4EQWpauB6dK'
    },
    {
      id: 8,
      image: '/images/gallery/food.jpg',
      title: 'Food Distribution',
      category: 'Suvidha Foundation Food Drive',
      driveLink: 'https://drive.google.com/drive/u/0/folders/1AfCK5kJqf9_N_JGd8wqUhNesS8k1tVmw'
    },
    {
      id: 9,
      image: '/images/gallery/events.jpg',
      title: 'Suvidha Events',
      category: 'Suvidha Foundation Events',
      driveLink: 'https://drive.google.com/drive/u/0/folders/1LF6c_FtHzv1ldXKXZ6oRueaD6OtIWsms'
    },
    {
      id: 10,
      image: '/images/gallery/women-empowerment.jpg',
      title: 'Empowering Women',
      category: 'Suvidha Foundation Women Empowerment Campaigns',
      driveLink: 'https://drive.google.com/drive/u/0/folders/1tMkME479AhVFQ5pUZag3-YPgNWhIn7Rl'
    },
    {
      id: 11,
      image: '/images/gallery/animal-feeding.jpg',
      title: 'Animal Feeding',
      category: 'Suvidha Foundation Animal Welfare',
      driveLink: 'https://drive.google.com/drive/u/0/folders/1xr7jhBYaap-tZ2puU5HiF6ccitJtBfaB'
    }
  ];

  return (
    <div>
      <Head>
        <title>Gallery - Suvidha Foundation</title>
        <meta name="description" content="View our gallery showcasing the impactful work of Suvidha Foundation" />
      </Head>

      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-primary py-32 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl">Explore our visual journey of making a difference in the community</p>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
              <h3 className="text-xl text-gray-600 max-w-3xl mx-auto">
                Moments of Impact: Capturing the Journey of Our NGO
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item) => (
                <div key={item.id} className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  {item.driveLink ? (
                    <a 
                      href={item.driveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block cursor-pointer"
                    >
                      <div className="relative h-64 w-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary text-center">{item.title}</h3>
                      </div>
                    </a>
                  ) : (
                    <>
                      <div className="relative h-64 w-full">
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="text-lg font-semibold text-gray-800 text-center">{item.title}</h3>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 