"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/Cof1.jpg',  // Replace with actual image paths
  '/Cof2.avif',
  '/Cof3.jpg',
  '/Cof4.png',
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
 const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  //timer
  useEffect(() => {
    const interval = setInterval(nextImage, 2000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side - Text Section */}
      <section className="flex-1 p-10 bg-white text-amber-950 flex flex-col justify-center items-start">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-4 italic">Welcome to Our Cozy Coffee Haven.. </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6"> where every cup of coffee is crafted with passion and every pastry is baked to perfection!.</p>
        <button className="px-6 py-3 bg-amber-950 text-white font-bold rounded hover:bg-amber-700 transition-all duration-300">
          Order Now!!
        </button>
      </section>
      <section className="flex-1 relative overflow-hidden mt-5 mb-5 mr-2">
        <Image
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-700 ease-in-out transform scale-105 hover:scale-110"
          priority={currentImageIndex === 0} // Prioritize loading of the first image
        />

        {/* Slide Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-amber-950 text-white rounded-full p-2 hover:bg-gray-700 transition-all duration-300"
          aria-label="Previous Image"
        >
          ❮
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-amber-950 text-white rounded-full p-2 hover:bg-gray-700 transition-all duration-300"
          aria-label="Next Image"
        >
          ❯
        </button>
        

      </section>
    </div>
  );
}
