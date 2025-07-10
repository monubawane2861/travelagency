// src/pages/About/About.jsx
import React from "react";
import {
  FaBus,
  FaUsers,
  FaMapMarkedAlt,
  FaAward,
  FaPhoneAlt,
} from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { MdFamilyRestroom, MdSafetyCheck } from "react-icons/md";
import CallNow from "../callnowchatboot/CallNow";
const About = () => {
  const stats = [
    {
      value: "12+",
      label: "Years Experience",
      icon: <FaAward className="text-3xl text-yellow-500" />,
    },
    {
      value: "50+",
      label: "Vehicles",
      icon: <FaBus className="text-3xl text-blue-500" />,
    },
    {
      value: "10K+",
      label: "Happy Customers",
      icon: <FaUsers className="text-3xl text-green-500" />,
    },
    {
      value: "500K+",
      label: "Kilometers Covered",
      icon: <GiPathDistance className="text-3xl text-red-500" />,
    },
  ];

  const team = [
    {
      name: "Rajesh Nandan",
      role: "Founder & CEO",
      bio: "With over 15 years in the travel industry, Rajesh ensures our services meet the highest standards.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Sharma",
      role: "Operations Manager",
      bio: "Coordinates all tours and ensures seamless travel experiences for our clients.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Amit Patel",
      role: "Head Driver",
      bio: "Our most experienced driver with 10+ years of accident-free driving.",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  return (
    <>
      <CallNow />
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-32">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About SafarSaga Travel
              </h1>
              <p className="text-xl mb-8">
                Your trusted travel partner since 2010
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Our Journey"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Journey
                </h2>
                <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
                <p className="text-gray-600 mb-4">
                  Founded in 2010 by Rajesh Nandan,SafarSaga Travel began with
                  just 2 vehicles and a vision to provide exceptional travel
                  experiences. Today, we're one of the most trusted travel
                  agencies in the region.
                </p>
                <p className="text-gray-600 mb-6">
                  What started as a small family business has grown into a fleet
                  of 50+ vehicles serving thousands of satisfied customers
                  annually. Our commitment to safety, comfort, and reliability
                  has remained unchanged since day one.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <FaPhoneAlt className="text-yellow-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-500">Have questions?</p>
                    <p className="font-bold text-lg">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                By The Numbers
              </h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300"
                >
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-2">
                    {item.value}
                  </h3>
                  <p className="text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <MdSafetyCheck className="text-3xl text-blue-500 mr-4" />
                  <h3 className="text-xl font-semibold">Safety First</h3>
                </div>
                <p className="text-gray-600">
                  All our vehicles undergo regular maintenance and our drivers
                  are trained in defensive driving techniques.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <FaUsers className="text-3xl text-green-500 mr-4" />
                  <h3 className="text-xl font-semibold">Customer Focus</h3>
                </div>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We go the extra mile to
                  ensure comfortable and memorable journeys.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-yellow-500">
                <div className="flex items-center mb-4">
                  <MdFamilyRestroom className="text-3xl text-yellow-500 mr-4" />
                  <h3 className="text-xl font-semibold">Family Values</h3>
                </div>
                <p className="text-gray-600">
                  As a family-run business, we treat every customer like part of
                  our extended family.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Meet Our Team
              </h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                The dedicated professionals who make your journeys safe and
                memorable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-yellow-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Travel With Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the SafarSaga Travel difference for your next journey
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                Book Your Trip
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
