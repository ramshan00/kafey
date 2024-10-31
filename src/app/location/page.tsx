// src/app/location/page.tsx
"use client";

const Location = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center p-6 flex items-center justify-center" style={{ backgroundImage: `url('/aboutus.webp')` }}>
      <div className="bg-white/80 p-10 rounded-lg shadow-lg backdrop-blur-md max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-center mb-6 text-amber-950 italic">Our Location</h1>
        
        <p className="text-gray-700 text-center mb-8">
          Visit us at Kafey ! We’re located at the heart of the city, ready to serve you freshly baked goods every day.
        </p>

        {/* Google Map */}
        <div className="w-full h-96 overflow-hidden rounded-lg shadow-md">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Kafy+Baking+Location`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
