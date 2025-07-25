import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <div className="bg-blue-900 text-white py-12 md:py-16 text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-base md:text-lg">
            Connect with our travel experts
          </p>
        </div>

        {/* Main Section */}
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Get In Touch
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
              ></textarea>

              {/* WhatsApp & Email Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={`https://wa.me/911234567890?text=Hello, I want to know more about your travel services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 px-4 py-3 rounded-lg w-full"
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
                <a
                  href="mailto:info@safarsagatravel.com?subject=Inquiry&body=Hello, I have a question..."
                  className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 px-4 py-3 rounded-lg w-full"
                >
                  <MdEmail /> Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-5 md:p-6 rounded-xl shadow-md border-l-4 border-blue-500">
              <div className="flex items-center mb-2">
                <FaPhone className="text-blue-500 mr-3" />
                <h3 className="font-semibold text-lg">Phone</h3>
              </div>
              <p>+91 1234567890</p>
              <p>+91 0987654321</p>
              <p className="text-blue-600 mt-1">24/7 Support</p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-xl shadow-md border-l-4 border-green-500">
              <div className="flex items-center mb-2">
                <FaEnvelope className="text-green-600 mr-3" />
                <h3 className="font-semibold text-lg">Email</h3>
              </div>
              <p>info@safarsagatravel.com</p>
              <p>bookings@safarsagatravel.com</p>
              <p className="text-green-600 mt-1">Response within 24 hours</p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-yellow-600 mr-3" />
                <h3 className="font-semibold text-lg">Location</h3>
              </div>
              <p>Pune, maharastra</p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-xl shadow-md border-l-4 border-red-500">
              <div className="flex items-center mb-2">
                <FaClock className="text-red-600 mr-3" />
                <h3 className="font-semibold text-lg">Working Hours</h3>
              </div>
              <p>Mon - Sat: 8AM - 8PM</p>
              <p>Sunday: 10AM - 4PM</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
