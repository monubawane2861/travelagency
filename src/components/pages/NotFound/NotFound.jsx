// src/pages/NotFound/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPhoneAlt, FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-4 rounded-full">
            <FaExclamationTriangle className="text-red-500 text-5xl" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg flex items-center justify-center transition duration-300"
          >
            <FaHome className="mr-2" />
            Go to Home
          </Link>
          <a
            href="tel:1234567890"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-lg flex items-center justify-center transition duration-300"
          >
            <FaPhoneAlt className="mr-2" />
            Call for Help
          </a>
        </div>

        {/* Additional Help */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Still need help?{" "}
            <Link to="/contact" className="text-blue-600 hover:underline">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>

      {/* SafarSaga Branding */}
      <div className="mt-8 text-center">
        <Link to="/" className="inline-flex items-center">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
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
          <span className="text-xl font-bold text-blue-600">
            Safarsaga Travels
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
