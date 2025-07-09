// src/pages/callnowchatboot/CallNow.jsx
import React, { useState } from "react";
import { FaPhone, FaTimes, FaWhatsapp } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";

const CallNow = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("call");

  const toggleWidget = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Floating Button */}
      {!isExpanded && (
        <button
          onClick={toggleWidget}
          className="bg-blue-600 text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center hover:bg-blue-700 transition-all duration-300 animate-pulse"
        >
          <FaPhone className="text-2xl" />
        </button>
      )}

      {/* Expanded Widget */}
      {isExpanded && (
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-80">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <IoMdChatbubbles className="text-xl mr-2" />
              <h3 className="font-bold">Quick Connect</h3>
            </div>
            <button
              onClick={toggleWidget}
              className="text-white hover:text-gray-200"
            >
              <FaTimes />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b">
            <button
              className={`flex-1 py-3 font-medium ${
                activeTab === "call"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("call")}
            >
              Call Now
            </button>
            <button
              className={`flex-1 py-3 font-medium ${
                activeTab === "whatsapp"
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("whatsapp")}
            >
              WhatsApp
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            {activeTab === "call" ? (
              <div className="text-center">
                <div className="bg-blue-100 text-blue-800 p-4 rounded-lg mb-4">
                  <FaPhone className="text-3xl mx-auto mb-2" />
                  <h4 className="font-bold text-lg">24/7 Call Support</h4>
                  <p className="text-sm">
                    Speak directly with our travel expert
                  </p>
                </div>
                <a
                  href="tel:+919876543210"
                  className="block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mb-3 transition duration-300"
                >
                  Call +91 98765 43210
                </a>
                <p className="text-xs text-gray-500">
                  Standard calling rates apply
                </p>
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
                  <FaWhatsapp className="text-3xl mx-auto mb-2" />
                  <h4 className="font-bold text-lg">WhatsApp Chat</h4>
                  <p className="text-sm">Get quick responses via WhatsApp</p>
                </div>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mb-3 transition duration-300"
                >
                  Chat on WhatsApp
                </a>
                <p className="text-xs text-gray-500">
                  Typically replies within 15 minutes
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-100 p-3 text-center text-sm text-gray-600">
            Swami Nandan Tours Support
          </div>
        </div>
      )}
    </div>
  );
};

export default CallNow;
