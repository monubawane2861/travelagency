// src/pages/Home/Home.jsx
import React from "react";
import {
  FaBus,
  FaMapMarkedAlt,
  FaHeadset,
  FaStar,
  FaRupeeSign,
} from "react-icons/fa";
import { GiJourney } from "react-icons/gi";
import { MdFamilyRestroom, MdSecurity } from "react-icons/md";
import CallNow from "../callnowchatboot/CallNow";
import { Link } from "react-router-dom";
const Home = () => {
  const phoneNumber = "9226409449";
  const featuredTours = [
    {
      id: 1,
      title: "Pilgrimage Special",
      description: "Visit sacred destinations with our spiritual tour packages",
      icon: <GiJourney className="text-4xl text-blue-600" />,
    },
    {
      id: 2,
      title: "Family Packages",
      description: "Comfortable travel for your entire family",
      icon: <MdFamilyRestroom className="text-4xl text-green-600" />,
    },
    {
      id: 3,
      title: "Luxury Tours",
      description: "Premium vehicles with all amenities",
      icon: <FaBus className="text-4xl text-yellow-600" />,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      comment:
        "Excellent service! The drivers were very professional and vehicles were super clean.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      comment:
        "Our family trip was made comfortable thanks to safarsagatravel Tours.",
      rating: 4,
    },
    {
      id: 3,
      name: "Amit Patel",
      comment: "Reliable and punctual service. Will definitely book again!",
      rating: 5,
    },
  ];

  return (
    <>
      <CallNow />
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className=" bg-blue-900 text-white">
          <div className="container mx-auto px-4 py-32 md:py-40">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Experience The Journey With{" "}
                <span className="text-yellow-400">SafarSaga Travels</span>
              </h1>
              <p className="text-xl mb-8">
                Premium travel services with comfort, safety and reliability
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/book">
                  {" "}
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                    Book Now
                  </button>
                </Link>
                <Link to="/services">
                  <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                    Our Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 to-transparent"></div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-100 mt-4">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Why Choose Us
              </h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
                <div className="flex justify-center mb-4">
                  <FaBus className="text-4xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Modern Fleet</h3>
                <p className="text-gray-600">
                  Well-maintained, comfortable vehicles with all amenities
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
                <div className="flex justify-center mb-4">
                  <MdSecurity className="text-4xl text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Safe Travel</h3>
                <p className="text-gray-600">
                  Experienced drivers and 24/7 journey tracking
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
                <div className="flex justify-center mb-4">
                  <FaRupeeSign className="text-4xl text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Best Prices</h3>
                <p className="text-gray-600">
                  Competitive rates with no hidden charges
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tours */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Special Tours
              </h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredTours.map((tour) => (
                <div
                  key={tour.id}
                  className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-l-4 border-yellow-500"
                >
                  <div className="mb-4">{tour.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition duration-300">
                    Explore Packages →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Our Customers Say
              </h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "{testimonial.comment}"
                  </p>
                  <p className="font-semibold text-gray-800">
                    - {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for Your Next Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to book your comfortable and safe travel
              experience
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={`tel:${phoneNumber}`} className="hidden md:block">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                  Call Now
                </button>
              </a>
              <Link to="/about">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                  Get a Quote
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
