// src/components/common/Footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdDirectionsBus } from "react-icons/md";
import saikrupaaLogo from "../../../assets/image/logo.png"; // Make sure the image is in src/assets/

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Company */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={saikrupaaLogo}
                alt="Sai Krupa Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-300">
              Providing premium travel experiences since 2010. Your journey is
              our priority with comfort, safety and reliability.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition duration-300"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition duration-300"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition duration-300"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition duration-300"
              >
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-yellow-400 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/cars"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300"
                >
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-yellow-400 pb-2 inline-block">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaPhone className="text-yellow-400 mt-1" />
                <div>
                  <p className="text-gray-300">+91 9022979253</p>
                  <p className="text-gray-300">+91 8530335944</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaPhone className="text-yellow-400 mt-1" />
                <div>
                  <p className="text-gray-300">+91 7264078250</p>
                  <p className="text-gray-300">+91 9579297434</p>
                </div>
              </div>
              {/* 
              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-yellow-400 mt-1" />
                <p className="text-gray-300">info@safarsagtravel.com</p>
              </div> */}
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                <p className="text-gray-300">
                  Ojhan taluka Nifad, district Nashik
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-yellow-400 pb-2 inline-block">
              Newsletter
            </h3>
            <p className="text-gray-300">
              Subscribe to get updates on special offers and discounts.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} sagasafar travel. All Rights
            Reserved.
          </p>
          <p className="mt-1 text-sm">Designed with ❤️ for travelers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
