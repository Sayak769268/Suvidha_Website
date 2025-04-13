import React from 'react';

export default function Donors() {
  // Define the donor list exactly as shown on the original website
  const donors = [
    { id: 1, name: 'PATHIK RAMESH JUTHANI', amount: '10,000' },
    { id: 2, name: 'RAHUL V JAIN', amount: '5,000' },
    { id: 3, name: 'SANDEEP GUPTA', amount: '5,000' },
    { id: 4, name: 'HITESH KANUBHAI PAGHADAL', amount: '21,000' },
    { id: 5, name: 'YOGESH SURESH AROTE', amount: '5,000' },
    { id: 6, name: 'CHETAN SAILESH MEHTA', amount: '2,000' },
    { id: 7, name: 'RAJESH CONTRO TRADING COMPANY PVT. LTD', amount: '11000' },
    { id: 8, name: 'KADAVAKUTI SWARNA', amount: '10000' },
    { id: 9, name: 'RAMESHBHAI NARSINHBHAI CHAUDHARY', amount: '2500' },
    { id: 10, name: 'ATISH CHAKRABORTY', amount: '1000' },
    { id: 11, name: 'Mr. RUDRANATH BHATTACHARYA', amount: '1000' },
    { id: 12, name: 'JATIN SAHGAL', amount: '1500' },
    { id: 13, name: 'SHIBAJI DEY', amount: '500' },
    { id: 14, name: 'SHUBHAM RAISONI', amount: '2100' },
    { id: 15, name: 'JAY DELIWALA', amount: '8250' },
    { id: 16, name: 'DEVANG VORA', amount: '5000' },
    { id: 17, name: 'DIVYANSH SONI', amount: '2000' },
    { id: 18, name: 'KSHITISH KUMAR JANA', amount: '2000' },
    { id: 19, name: 'INDU SINGH', amount: '2000' },
    { id: 20, name: 'PUSHYAMITHRA SANTHANAM', amount: '5500' },
    { id: 21, name: 'SHRINIVAS DAKAPPAGARI', amount: '2000' },
    { id: 22, name: 'OMBIR SINGH(OM TEMPO SERVICE)', amount: '3000' },
    { id: 23, name: 'TANMAY PRABHUTENDOLKAR', amount: '2000' },
    { id: 24, name: 'D. V. RAJESHWARI DEVI', amount: '2000' },
    { id: 25, name: 'SUNNAM PADMA', amount: '2000' },
    { id: 26, name: 'Mr. SANJAY KUMAR SAXENA', amount: '2000' },
    { id: 27, name: 'PUSHPA', amount: '3000' },
    { id: 28, name: 'SHUBHASHEESH BAGCHI', amount: '4000' },
    { id: 29, name: 'REVTISUDHAKAR FUNDE', amount: '2100' },
    { id: 30, name: 'RAGHAV METALS TRADE PVT. LTD.', amount: '5000' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Thank You For Your Contribution</h2>
          <p className="text-lg text-gray-600 italic max-w-3xl mx-auto">
            "Every contribution brings us closer to our goals"
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-semibold text-gray-800 tracking-wider">
                  Name of donor
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-semibold text-gray-800 tracking-wider">
                  Amount of Donation (Indian rupees)
                </th>
              </tr>
            </thead>
            <tbody>
              {donors.map((donor, index) => (
                <tr key={donor.id} className={index % 2 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-700">
                    {donor.name}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-700">
                    {donor.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-gray-700">And many more...</p>
        </div>
      </div>
    </section>
  );
} 