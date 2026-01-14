"use client";

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-40 bg-white dark:bg-black text-black dark:text-white p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/" className="bg-gradient-to-r from-orange-300 via-orange-500 to-red-500 text-transparent bg-clip-text font-extrabold text-3xl animate-gradient font-poppins transition-all duration-300 hover:scale-105">104 CONVERTOR</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="py-1 px-2 rounded-md hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:text-transparent hover:bg-clip-text">Home</Link>
            </li>
            <li>
              <Link href="/about" className="py-1 px-2 rounded-md hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:text-transparent hover:bg-clip-text">About</Link>
            </li>
            <li>
              <Link href="/services" className="py-1 px-2 rounded-md hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:text-transparent hover:bg-clip-text">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="py-1 px-2 rounded-md hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:text-transparent hover:bg-clip-text">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu container (dropdown from top) */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen py-4 border-t border-gray-200 dark:border-gray-700' : 'max-h-0'} overflow-hidden`}>
        <nav>
          <ul className="flex flex-col space-y-4 text-black dark:text-white px-4 items-center divide-y divide-gray-300 dark:divide-gray-600">
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="block py-2 px-4 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:text-transparent hover:bg-clip-text">Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block py-2 px-4 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:text-transparent hover:bg-clip-text">About</Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setIsMenuOpen(false)} className="block py-2 px-4 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:text-transparent hover:bg-clip-text">Services</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block py-2 px-4 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:text-transparent hover:bg-clip-text">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
