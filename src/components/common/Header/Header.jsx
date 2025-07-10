// src/components/common/Header/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "9226409449"; // Replace with your actual phone number

  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-600 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-white text-2xl font-bold font-serif">
              SafarSaga Travels
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:text-yellow-300 font-medium transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-yellow-300 font-medium transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/cars"
              className="text-white hover:text-yellow-300 font-medium transition duration-300"
            >
              Our Vehicles
            </Link>
            <Link
              to="/reviews"
              className="text-white hover:text-yellow-300 font-medium transition duration-300"
            >
              Reviews
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-yellow-300 font-medium transition duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Call Now Button (Desktop) */}
          <a href={`tel:${phoneNumber}`} className="hidden md:block">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Call Now
            </button>
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              to="/"
              className="block text-white hover:text-yellow-300 px-2 py-1"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white hover:text-yellow-300 px-2 py-1"
            >
              About Us
            </Link>
            <Link
              to="/cars"
              className="block text-white hover:text-yellow-300 px-2 py-1"
            >
              Our Vehicles
            </Link>
            <Link
              to="/reviews"
              className="block text-white hover:text-yellow-300 px-2 py-1"
            >
              Reviews
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:text-yellow-300 px-2 py-1"
            >
              Contact
            </Link>
            <a href={`tel:${phoneNumber}`} className="block mt-4">
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300">
                Call Now
              </button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
