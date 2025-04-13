import React from 'react';

export default function ContactForm() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6 text-primary">Send Us a Message</h3>
      
      <p className="text-gray-700 mb-6">
        Click the button below to fill out our contact form. We'll get back to you as soon as possible.
      </p>
      
      <div>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfAaaHU-k256CY6_83JPBOYeVFtKuKBvqMJb7oBIsDLKRmwNg/viewform" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary w-full md:w-auto inline-block px-8 py-3 rounded-lg font-semibold"
        >
          Send Message
        </a>
      </div>
    </div>
  );
} 