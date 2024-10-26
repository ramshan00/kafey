"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-amber-950 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-4xl font-bold italic"><span className= "text-5xl font-semibold italic">K</span>afey</div>
        <div className="hidden md:flex space-x-6">
          <Link href="#home" className="hover:text-gray-200 transition-colors duration-300">Home</Link>
          <Link href="#about" className="hover:text-gray-200 transition-colors duration-300">About</Link>
          <Link href="#services" className="hover:text-gray-200 transition-colors duration-300">Services</Link>
          <Link href="#contact" className="hover:text-gray-200 transition-colors duration-300">Contact</Link>
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
        <Link href="#home" className="block py-2 px-4 hover:text-gray-200">Home</Link>
        <Link href="#about" className="block py-2 px-4 hover:text-gray-200">About</Link>
        <Link href="#services" className="block py-2 px-4 hover:text-gray-200">Services</Link>
        <Link href="#contact" className="block py-2 px-4 hover:text-gray-200">Contact</Link>
      </div>
    </nav>
  );
}
