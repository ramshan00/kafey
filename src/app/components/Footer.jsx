"use client"; // if you're using hooks like useState in this component

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-200">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit enim nemo, ducimus placeat autem commodi eveniet.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><Link href="#home" className="hover:text-white">Home</Link></li>
            <li><Link href="#about" className="hover:text-white">About</Link></li>
            <li><Link href="#services" className="hover:text-white">Services</Link></li>
            <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm text-gray-200 space-y-2">
            <li>Phone: +1 (123) 456-7890</li>
            <li>Email: <a href="mailto:info@yourcompany.com" className="hover:text-white">info@kafycompany.com</a></li>
            <li>Address: 123 Main St, Anytown, USA</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-white">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white mt-8 pt-6 text-center text-white text-sm">
        <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
}
