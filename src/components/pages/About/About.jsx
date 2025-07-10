import React from "react";
import { FaBus, FaUsers, FaAward, FaPhoneAlt } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { MdFamilyRestroom, MdSafetyCheck } from "react-icons/md";
import { Link } from "react-router-dom";
import CallNow from "../callnowchatboot/CallNow";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";

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

  const values = [
    {
      title: "Safety First",
      description:
        "All our vehicles undergo regular maintenance and our drivers are trained in defensive driving techniques.",
      icon: <MdSafetyCheck className="text-3xl text-blue-500" />,
      borderColor: "border-blue-500",
    },
    {
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority. We go the extra mile to ensure comfortable and memorable journeys.",
      icon: <FaUsers className="text-3xl text-green-500" />,
      borderColor: "border-green-500",
    },
    {
      title: "Family Values",
      description:
        "As a family-run business, we treat every customer like part of our extended family.",
      icon: <MdFamilyRestroom className="text-3xl text-yellow-500" />,
      borderColor: "border-yellow-500",
    },
  ];

  return (
    <>
      <Header />
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
                  Founded in 2010 by Rajesh Nandan, SafarSaga Travel began with
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
            <SectionHeader
              title="By The Numbers"
              dividerClass="bg-yellow-500"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((item, index) => (
                <StatCard
                  key={index}
                  icon={item.icon}
                  value={item.value}
                  label={item.label}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Our Core Values"
              dividerClass="bg-yellow-500"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <ValueCard
                  key={index}
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                  borderColor={value.borderColor}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Meet Our Team"
              dividerClass="bg-yellow-500"
              description="The dedicated professionals who make your journeys safe and memorable"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <TeamCard
                  key={index}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  image={member.image}
                />
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
              <Link to="/book">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                  Book Your Trip
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                  Contact Us
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
const SectionHeader = ({ title, dividerClass, description }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
    <div className={`w-20 h-1 ${dividerClass} mx-auto mb-4`}></div>
    {description && (
      <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
    )}
  </div>
);

const StatCard = ({ icon, value, label }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-4xl font-bold text-gray-800 mb-2">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

const ValueCard = ({ title, description, icon, borderColor }) => (
  <div className={`bg-gray-50 p-6 rounded-lg border-l-4 ${borderColor}`}>
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-4">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TeamCard = ({ name, role, bio, image }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
    <img src={image} alt={name} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-yellow-600 font-medium mb-3">{role}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  </div>
);

export default About;
