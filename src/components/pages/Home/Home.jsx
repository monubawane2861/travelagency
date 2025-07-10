import React from "react";
import { FaBus, FaStar, FaRupeeSign } from "react-icons/fa";
import { GiJourney } from "react-icons/gi";
import { MdFamilyRestroom, MdSecurity } from "react-icons/md";
import { Link } from "react-router-dom";
import CallNow from "../callnowchatboot/CallNow";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";

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
      <Header />
      <CallNow />
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white h-[100%]">
          <div className="container mx-auto px-4 py-40">
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
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Why Choose Us
              </h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                icon={<FaBus className="text-4xl text-blue-600" />}
                title="Modern Fleet"
                description="Well-maintained, comfortable vehicles with all amenities"
              />
              <FeatureCard
                icon={<MdSecurity className="text-4xl text-green-600" />}
                title="Safe Travel"
                description="Experienced drivers and 24/7 journey tracking"
              />
              <FeatureCard
                icon={<FaRupeeSign className="text-4xl text-yellow-600" />}
                title="Best Prices"
                description="Competitive rates with no hidden charges"
              />
            </div>
          </div>
        </section>

        {/* Featured Tours */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Our Special Tours"
              dividerClass="bg-yellow-500"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredTours.map((tour) => (
                <TourCard
                  key={tour.id}
                  icon={tour.icon}
                  title={tour.title}
                  description={tour.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="What Our Customers Say"
              dividerClass="bg-yellow-500"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  rating={testimonial.rating}
                  comment={testimonial.comment}
                  name={testimonial.name}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready for Your Next Journey?
            </h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Contact us today to book your comfortable and safe travel
              experience
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={`tel:${phoneNumber}`}>
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
      <Footer />
    </>
  );
};

// Reusable Components
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TourCard = ({ icon, title, description }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-l-4 border-yellow-500">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="text-blue-600 font-medium hover:text-blue-800 transition duration-300">
      Explore Packages →
    </button>
  </div>
);

const TestimonialCard = ({ rating, comment, name }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex mb-4">
      {[...Array(rating)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400" />
      ))}
    </div>
    <p className="text-gray-600 italic mb-4">"{comment}"</p>
    <p className="font-semibold text-gray-800">- {name}</p>
  </div>
);

const SectionHeader = ({ title, dividerClass }) => (
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
    <div className={`w-20 h-1 ${dividerClass} mx-auto`}></div>
  </div>
);

export default Home;
