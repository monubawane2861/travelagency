// src/pages/Contact/Contact.jsx
import React, { useState } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import CallNow from "../callnowchatboot/CallNow";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll contact you shortly.`);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

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
      <CallNow />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with our travel experts for bookings and inquiries
          </p>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Enter your phone"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Subject of your message"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      rows="5"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    Send Message <FaPaperPlane className="ml-2" />
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                      <FaPhone />
                    </div>
                    <h3 className="font-bold text-lg">Phone</h3>
                  </div>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 98765 43211</p>
                  <p className="text-blue-600 font-medium mt-2">24/7 Support</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full mr-4 text-green-600">
                      <FaEnvelope />
                    </div>
                    <h3 className="font-bold text-lg">Email</h3>
                  </div>
                  <p className="text-gray-600">info@safarsagatravel.com</p>
                  <p className="text-gray-600">bookings@safarsagatravel.com</p>
                  <p className="text-green-600 font-medium mt-2">
                    Response within 24 hours
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-100 p-3 rounded-full mr-4 text-yellow-600">
                      <FaMapMarkerAlt />
                    </div>
                    <h3 className="font-bold text-lg">Office</h3>
                  </div>
                  <p className="text-gray-600">123 Travel Street</p>
                  <p className="text-gray-600">Tourist City, India - 123456</p>
                  <p className="text-yellow-600 font-medium mt-2">
                    Get Directions
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 text-red-600">
                      <FaClock />
                    </div>
                    <h3 className="font-bold text-lg">Hours</h3>
                  </div>
                  <p className="text-gray-600">Monday - Saturday: 8AM - 8PM</p>
                  <p className="text-gray-600">Sunday: 10AM - 4PM</p>
                  <p className="text-red-600 font-medium mt-2">
                    Emergency: 24/7
                  </p>
                </div>
              </div>

              {/* Map Embed */}
              <div className="bg-white p-4 rounded-xl shadow-xl">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <FaMapMarkerAlt className="text-red-500 mr-2" /> Our Location
                </h3>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    title="safarsaga travel Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.566284143591!2d77.22702231508237!3d28.61361198242598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9db4d07%3A0x9b3f8c1b6e1a881a!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-6 rounded-xl shadow-xl">
                <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition duration-300"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition duration-300"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition duration-300"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
