// src/app/contact/page.tsx
"use client";

import { useState } from "react";


const ContactUs = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // Popup disappears after 2 seconds
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/aboutus.webp')` }}>
      {/* Contact Form */}
      <div className="bg-white/80 p-8 rounded-lg shadow-lg backdrop-blur-md w-full max-w-md mt-32">
        <h2 className="text-2xl font-bold text-center mb-6 italic text-amber-950">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-amber-950">Name</label>
            <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-2 bg-white/70 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-amber-950">Email</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-2 bg-white/70 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-amber-950">Message</label>
            <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-4 py-2 bg-white/70 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"></textarea>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-amber-950 text-white rounded-md hover:bg-gold transition-all">Submit</button>
        </form>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <p className="text-amber-950 font-medium">Thank you for contacting us!</p>
          </div>
        </div>
      )}

      {/* Reviews Section */}
      <div className="w-full mt-12 p-6">
        <h2 className="text-2xl font-semibold text-center mb-6 text-amber-950">Customer Reviews</h2>
        <div className="space-y-4">
          <div className="bg-white/80 p-4 rounded-lg shadow-md">
            <p className="font-semibold text-lg text-gray-800">Komal Kainat</p>
            <p className="text-gray-600">Fantastic experience! The support team was very responsive.</p>
          </div>
          <div className="bg-white/80 p-4 rounded-lg shadow-md">
            <p className="font-semibold text-lg text-gray-800">Maheen Ali</p>
            <p className="text-gray-600">Amazing service! Highly recommend to others.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
