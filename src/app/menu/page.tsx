"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  '/Cof1.jpg',  
  '/Cof2.avif',
  '/Cof3.jpg',
  '/Cof4.png',
];

const popularItems = [
  { id: 1, name: 'Cold Coffee', image: '/lc.webp', price: 5.99 },
  { id: 2, name: 'Espresso', image: '/expo.jpeg', price: 4.99 },
  { id: 3, name: 'Cappuccino', image: '/cappa.jpeg', price: 6.99 },
  { id: 4, name: 'Latte', image: '/lattec.jpg', price: 5.99 },
  { id: 5, name: 'Cookies', image: '/cookies.webp', price: 8.99 },
  { id: 6, name: 'Dark Chocolate Milkshake', image: '/milki.jpg', price: 9.99 },
  { id: 7, name: 'Red Velvet', image: '/red.jpg', price: 2.99 },
  { id: 8, name: 'Rainbow Cake', image: '/rainbow.jpeg', price: 44.99 },
  { id: 9, name: 'Strawberry Shake', image: '/milki.webp', price: 9.99 },
  { id: 10, name: 'Coconutty', image: '/coconut.webp', price: 55.99 },
  { id: 11, name: 'Coco Delight', image: '/choco.webp', price: 47.99 },
  { id: 12, name: 'Blueberry Muffin', image: '/blue berry mufin.webp', price: 6.99 },
];

const deals = [
  { id: 1, name: 'Buy 1 Get 1 Free Latte', image: '/buy.jpg', price: 5.99 },
  { id: 2, name: '20% Off Espresso', image: '/save 20.jpeg', price: 4.99 },
  { id: 3, name: 'Free Pastry with Cappuccino', image: '/free.avif', price: 6.99 },
];

function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 2000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Image Slider */}
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-700 ease-in-out opacity-65"
            priority={currentImageIndex === 0}
            sizes="100vw" // Helps in responsive designs
          />
        </div>
        {/* Text Overlay Section */}
        <section className="relative z-10 p-10 bg-opacity-70 text-center max-w-lg">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 italic">
            Welcome to Our Cozy Coffee Haven...
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            Where every cup of coffee is crafted with passion and every pastry is baked to perfection!
          </p>
          <button className="px-6 py-3 bg-amber-950 text-white font-bold rounded hover:bg-amber-700 transition-all duration-300">
            Order Now!!
          </button>
        </section>
        {/* Slide Navigation Buttons */}
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
      </div>

      {/* Deals Section */}
      <section className="py-16 bg-white">
        <h2 className="text-amber-900 text-4xl font-semibold text-center mb-10 italic">Special Deals</h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-orange-50 p-4 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105">
              <Image 
                src={deal.image} 
                alt={deal.name} 
                width={150} 
                height={200} 
                className="rounded-lg mb-4 object-cover h-45 w-full"
              />
              <h3 className="text-2xl font-semibold text-amber-950">{deal.name}</h3>
              <p className="text-lg mb-4 text-amber-950">${deal.price.toFixed(2)} <span className="text-red-500">(Deal)</span></p>
              <Link 
                href={`/Deals/${deal.id}`}
                className="px-6 py-2 bg-amber-950 text-white font-semibold rounded hover:bg-amber-700 transition-all duration-300" 
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-orange-50 ">
        <h2 className="text-amber-950 italic text-4xl font-semibold text-center mb-10">Categories</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Sample Category Buttons */}
          <button className="px-6 py-3 bg-amber-950 text-white font-semibold rounded hover:bg-amber-700 transition-all duration-300">
            Coffee
          </button>
          <button className="px-6 py-3 bg-amber-950 text-white font-semibold rounded hover:bg-amber-700 transition-all duration-300">
            Pastries
          </button>
          <button className="px-6 py-3 bg-amber-950 text-white font-semibold rounded hover:bg-amber-700 transition-all duration-300">
            Desserts
          </button>
          <button className="px-6 py-3 bg-amber-950 text-white font-semibold rounded hover:bg-amber-700 transition-all duration-300">
            Cakes
          </button>
          <button className="px-6 py-3 bg-amber-950 text-white font-semibold rounded hover:bg-amber-700 transition-all duration-300">
            Drinks
          </button>
          <button className="px-6 py-3 bg-amber-950 text-white font-semibold rounded hover:bg-amber-700 transition-all duration-300">
            Milkshake
          </button>
        </div>
      </section>

      {/* Most Selling Items Section */}
      <section className="py-16 bg-white">
        <h2 className="text-amber-950 text-4xl font-bold text-center mb-10 italic">Most Selling Items</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {popularItems.map((item) => (
            <div key={item.id} className="bg-orange-50 p-4 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105">
              <Image 
                src={item.image} 
                alt={item.name} 
                width={200} 
                height={200} 
                className="rounded-lg mb-4 object-cover h-60 w-full"
              />
              <h3 className="text-2xl font-semibold text-amber-950">{item.name}</h3>
              <h3 className="text-2xl font-semibold text-amber-950">{item.name}</h3>
              <p className="text-lg mb-4 text-amber-950">${item.price.toFixed(2)}</p> 
              <Link 
                href={`/Products/${item.id}`}
                className="px-6 py-2 bg-amber-950 text-white font-semibold rounded hover:bg-amber-700 transition-all duration-300" 
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Page;

