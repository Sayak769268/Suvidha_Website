import React, { useState } from 'react';

export default function DonationForm() {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });

  const predefinedAmounts = ['500', '1000', '2500', '5000', '10000'];

  const handleAmountChange = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = donationAmount === 'custom' ? customAmount : donationAmount;
    
    console.log('Donation form submitted:', {
      ...formData,
      amount: finalAmount
    });
    
    // Here you would normally send the form data to your payment gateway
    alert('Thank you for your donation! You will be redirected to the payment page.');
    
    // Reset form
    setDonationAmount('');
    setCustomAmount('');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      country: '',
      message: ''
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6 text-primary">Make a Donation</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <label className="block text-gray-700 font-medium mb-3">Select Amount (INR) *</label>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            {predefinedAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                className={`px-4 py-3 border rounded-lg font-medium ${
                  donationAmount === amount 
                    ? 'bg-primary text-white border-primary' 
                    : 'border-gray-300 text-gray-700 hover:border-primary'
                }`}
                onClick={() => handleAmountChange(amount)}
              >
                ₹{amount}
              </button>
            ))}
            
            <div className={`px-4 py-2 border rounded-lg ${
              donationAmount === 'custom' 
                ? 'border-primary ring-2 ring-primary/20' 
                : 'border-gray-300'
            }`}>
              <label className="text-xs text-gray-500 block">Custom Amount</label>
              <div className="flex items-center">
                <span className="text-gray-700 mr-1">₹</span>
                <input
                  type="number"
                  min="1"
                  className="w-full border-none p-0 focus:outline-none focus:ring-0"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  onClick={() => setDonationAmount('custom')}
                  placeholder="Enter amount"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          
          <div>
            <label htmlFor="country" className="block text-gray-700 font-medium mb-2">Country *</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message (Optional)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>
        
        <div>
          <button 
            type="submit" 
            className="btn btn-primary w-full md:w-auto"
            disabled={!donationAmount || (donationAmount === 'custom' && !customAmount)}
          >
            Donate Now
          </button>
        </div>
      </form>
    </div>
  );
} 