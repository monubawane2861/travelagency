import React from "react";
import { Link } from "react-router-dom";
import { FaBus, FaRupeeSign, FaStar } from "react-icons/fa";
import { GiJourney } from "react-icons/gi";
import { MdSecurity, MdFamilyRestroom } from "react-icons/md";
import CallNow from "../callnowchatboot/CallNow";
import homeData from "../../pages/Home/homeData.json";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
// Icon mapping
const iconMap = {
  FaBus: <FaBus className="text-4xl text-blue-600" />,
  MdSecurity: <MdSecurity className="text-4xl text-green-600" />,
  FaRupeeSign: <FaRupeeSign className="text-4xl text-yellow-600" />,
  GiJourney: <GiJourney className="text-4xl text-blue-600" />,
  MdFamilyRestroom: <MdFamilyRestroom className="text-4xl text-green-600" />,
};

const Home = () => {
  const {
    phoneNumber,
    heroSection,
    features,
    featuredTours,
    testimonials,
    ctaSection,
  } = homeData;

  return (
    <>
      <Header />
      <CallNow />
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white h-[100%]">
          <div className="container mx-auto px-4 py-40 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {heroSection.heading}{" "}
              <span className="text-yellow-400">{heroSection.highlight}</span>
            </h1>
            <p className="text-xl mb-8">{heroSection.subtext}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {heroSection.buttons.map((btn, idx) =>
                btn.type === "primary" ? (
                  <Link to={btn.link} key={idx}>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                      {btn.label}
                    </button>
                  </Link>
                ) : (
                  <Link to={btn.link} key={idx}>
                    <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                      {btn.label}
                    </button>
                  </Link>
                )
              )}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gray-100">
          <SectionHeader title="Why Choose Us" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-4">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={iconMap[feature.icon]}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        {/* Featured Tours */}
        <section className="py-16 bg-white">
          <SectionHeader title="Our Special Tours" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-4">
            {featuredTours.map((tour) => (
              <TourCard
                key={tour.id}
                icon={iconMap[tour.icon]}
                title={tour.title}
                description={tour.description}
              />
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-blue-50">
          <SectionHeader title="What Our Customers Say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-4">
            {testimonials.map((item) => (
              <TestimonialCard
                key={item.id}
                rating={item.rating}
                comment={item.comment}
                name={item.name}
              />
            ))}
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-16 bg-blue-900 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">{ctaSection.heading}</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">{ctaSection.subtext}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {ctaSection.buttons.map((btn, idx) =>
              btn.type === "primary" ? (
                <a href={btn.link} key={idx}>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                    {btn.label}
                  </button>
                </a>
              ) : (
                <Link to={btn.link} key={idx}>
                  <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                    {btn.label}
                  </button>
                </Link>
              )
            )}
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

const SectionHeader = ({ title }) => (
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
    <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
  </div>
);

export default Home;
