import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <Layout title="Contact Us | Suvidha Foundation" description="Get in touch with Suvidha Foundation for any inquiries or support">
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us for any inquiries or to learn more about our work
          </p>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <ContactForm />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Office Headquarters</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Nagpur Headquarter</h3>
                  <p className="text-gray-700 mb-4">
                    Suvidha Foundation, Motghare Bhavan, Ward No. 4, Santnagar, Annamod, Near Water Tank, 
                    Khaperkheda, Saoner, Nagpur, Maharashtra, India Pincode - 441102
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Hyderabad Headquarter</h3>
                  <p className="text-gray-700 mb-4">
                    Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-3">Contact Information</h3>
                  
                  <p className="flex items-center text-gray-700">
                    <svg className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+917620086320" className="hover:text-primary">+91 7620086320</a>
                  </p>
                  
                  <p className="flex items-center text-gray-700">
                    <svg className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@suvidhafoundationedutech.org" className="hover:text-primary">info@suvidhafoundationedutech.org</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 