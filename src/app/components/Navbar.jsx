"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthCard, setShowAuthCard] = useState(false);
  const [isSignup, setIsSignup] = useState(false); 

  return (
    <nav className="bg-amber-950 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-4xl font-bold italic">
          <span className="text-5xl font-semibold italic">K</span>afey
        </div>
        <div className="hidden md:flex space-x-6">
        <Link href="menu" className="hover:text-gray-200 transition-colors duration-300">Menu</Link>
          <Link href="about" className="hover:text-gray-200 transition-colors duration-300">About Us</Link>
          <Link href="location" className="hover:text-gray-200 transition-colors duration-300">Location</Link>
          <Link href="contact" className="hover:text-gray-200 transition-colors duration-300">Contact Us</Link>
        </div>

        {/* Icons for Cart, Login/Signup, and Search */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="hover:text-gray-200 transition-colors duration-300">
            <FiSearch size={24} />
          </button>
          <button 
            className="hover:text-gray-200 transition-colors duration-300"
            onClick={() => setShowAuthCard(!showAuthCard)} // Toggle auth card visibility
          >
            <FiUser size={24} />
          </button>
          <button className="hover:text-gray-200 transition-colors duration-300">
            <FiShoppingCart size={24} />
          </button>
        </div>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-amber-950`}>
      <Link href="menu" className="block py-2 px-4 hover:text-gray-200">Menu</Link>
        <Link href="about" className="block py-2 px-4 hover:text-gray-200">About Us</Link>
        <Link href="location" className="block py-2 px-4 hover:text-gray-200">Location</Link>
        <Link href="contact" className="block py-2 px-4 hover:text-gray-200">Contact Us</Link>

        {/* Icons in Mobile Menu */}
        <div className="flex items-center justify-center space-x-4 py-4">
          <button className="hover:text-gray-200 transition-colors duration-300">
            <FiSearch size={24} />
          </button>
          <button 
            className="hover:text-gray-200 transition-colors duration-300"
            onClick={() => setShowAuthCard(!showAuthCard)} // Toggle auth card visibility
          >
            <FiUser size={24} />
          </button>
          <button className="hover:text-gray-200 transition-colors duration-300">
            <FiShoppingCart size={24} />
          </button>
        </div>
      </div>

      {/* Login/Signup Card */}
      {showAuthCard && (
        <div className="fixed inset-0 bg-amber-950 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-amber-950 rounded-lg p-6 w-80 relative">
            {/* Close Button */}
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowAuthCard(false)} // Close the card
            >
              <FiX size={24} />
            </button>
            <h2 className="text-xl font-bold mb-4">{isSignup ? "Sign Up" : "Login"}</h2>
            <form>
              {isSignup && (
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input type="text" id="name" className="border p-2 w-full" placeholder="Enter your name" required />
                </div>
              )}
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" className="border p-2 w-full" placeholder="Enter your email" required />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-2">Password</label>
                <input type="password" id="password" className="border p-2 w-full" placeholder="Enter your password" required />
              </div>
              {isSignup && (
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
                  <input type="password" id="confirmPassword" className="border p-2 w-full" placeholder="Confirm your password" required />
                </div>
              )}
              <button type="submit" className="bg-amber-950 text-white py-2 px-4 rounded w-full">
                {isSignup ? "Sign Up" : "Login"}
              </button>
              <button type="button" className="mt-2 bg-orange-50 py-2 px-4 rounded w-full" onClick={() => setShowAuthCard(false)}>Cancel</button>
            </form>
            <p className="mt-4 text-center">
              {isSignup ? "Already have an account?" : "Don't have an account?"} 
              <button 
                className="text-amber-950 underline"
                onClick={() => setIsSignup(!isSignup)} // Toggle between login and signup
              >
                {isSignup ? " Login" : " Sign Up"}
              </button>
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
