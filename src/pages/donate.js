import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function DonatePage() {
  // Define the donation campaigns as shown on the original website
  const campaigns = [
    { 
      id: 1, 
      name: 'Clothes Distribution', 
      details: 'Supports providing clothes to those in need.', 
      amount: '₹ 2,000',
      link: 'https://rzp.io/rzp/qxtLFuCa'
    },
    { 
      id: 2, 
      name: 'Food Distribution', 
      details: 'Provides meals for underprivileged communities.', 
      amount: '₹ 5,000',
      link: 'https://rzp.io/rzp/mxg1yve'
    },
    { 
      id: 3, 
      name: 'Education', 
      details: 'Funds educational materials and resources.', 
      amount: '₹ 10,000',
      link: 'https://rzp.io/rzp/RY2h1clY'
    },
    { 
      id: 4, 
      name: 'Empower Her Future', 
      details: 'Supports women\'s empowerment initiatives.', 
      amount: '₹ 15,000',
      link: 'https://rzp.io/rzp/ysF2Ghkd'
    },
    { 
      id: 5, 
      name: 'Health Care', 
      details: 'Provides medical aid and health check-ups.', 
      amount: '₹ 20,000',
      link: 'https://rzp.io/rzp/y2y1fBB'
    },
    { 
      id: 6, 
      name: 'Support a Smile', 
      details: 'Well-being programs (mental health support, recreation).', 
      amount: 'Any Amount',
      link: 'https://rzp.io/rzp/vuRojDky'
    }
  ];

  return (
    <div>
      <Head>
        <title>Help Us - Suvidha Foundation</title>
        <meta name="description" content="Support Suvidha Foundation's initiatives for education, health, and empowerment" />
      </Head>

      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-primary py-32 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Us</h1>
            <p className="text-xl">Support our initiatives to create positive change and empower communities</p>
          </div>
        </div>

        {/* Donation Options */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Support Suvidha Foundation</h2>
            
            <div className="overflow-x-auto mb-16">
              <table className="min-w-full bg-white border">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-semibold text-gray-800 tracking-wider">
                      Campaign
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-semibold text-gray-800 tracking-wider">
                      Details
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-semibold text-gray-800 tracking-wider">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((campaign, index) => (
                    <tr key={campaign.id} className={index % 2 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-700">
                        {campaign.name}
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-700">
                        {campaign.details}
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-blue-600">
                        <a href={campaign.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {campaign.amount}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Account Details and QR Code */}
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Account Details</h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm max-w-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">For Indian Donors</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-medium">Bank:</span> Bank Of Baroda</p>
                    <p className="text-gray-700"><span className="font-medium">City:</span> Nagpur</p>
                    <p className="text-gray-700"><span className="font-medium">Contact No:</span> +91 8010996763</p>
                    <p className="text-gray-700"><span className="font-medium">Account Name:</span> Suvidha Mahila Mandal</p>
                    <p className="text-gray-700"><span className="font-medium">Account No:</span> 97840100027609</p>
                    <p className="text-gray-700"><span className="font-medium">IFSC Code:</span> BARB0DBKPAR</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-primary">QR Code</h3>
                  <div className="w-72 h-72 relative rounded-lg overflow-hidden border border-gray-300 shadow-sm">
                    <Image
                      src="/images/QR-Codes.jpg"
                      alt="Suvidha Foundation Donation QR Code"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-600">Scan to donate directly</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 