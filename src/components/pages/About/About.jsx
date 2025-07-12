import React from "react";
import { FaBus, FaUsers, FaAward, FaPhoneAlt } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { MdFamilyRestroom, MdSafetyCheck } from "react-icons/md";
import { Link } from "react-router-dom";
import CallNow from "../callnowchatboot/CallNow";
import aboutData from "../../pages/About/aboutData.json";

// Icon mapping
const iconMap = {
  FaBus: <FaBus className="text-3xl" />,
  FaUsers: <FaUsers className="text-3xl" />,
  FaAward: <FaAward className="text-3xl" />,
  GiPathDistance: <GiPathDistance className="text-3xl" />,
  MdSafetyCheck: <MdSafetyCheck className="text-3xl" />,
  MdFamilyRestroom: <MdFamilyRestroom className="text-3xl" />,
};

const About = () => {
  const { hero, story, stats, values, team } = aboutData;

  return (
    <>
      <CallNow />
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-32">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {hero.title}
            </h1>
            <p className="text-xl">{hero.subtitle}</p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src={story.image}
                alt="Our Journey"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {story.heading}
              </h2>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              {story.paragraphs.map((text, i) => (
                <p className="text-gray-600 mb-4" key={i}>
                  {text}
                </p>
              ))}
              <div className="flex items-center space-x-4 mt-6">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <FaPhoneAlt className="text-yellow-600 text-xl" />
                </div>
                <div>
                  <p className="text-gray-500">Have questions?</p>
                  <p className="font-bold text-lg">{story.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <SectionHeader title="By The Numbers" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-lg transition"
                >
                  <div className={`flex justify-center mb-4 ${item.color}`}>
                    {iconMap[item.icon]}
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800">
                    {item.value}
                  </h3>
                  <p className="text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader title="Our Core Values" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div
                  key={i}
                  className={`bg-gray-50 p-6 rounded-lg border-l-4 ${v.borderColor}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl">{iconMap[v.icon]}</div>
                    <h3 className="text-xl font-semibold ml-4">{v.title}</h3>
                  </div>
                  <p className="text-gray-600">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Meet Our Team"
              description="The dedicated professionals who make your journeys safe and memorable"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
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
                    <p className="text-yellow-600 font-medium mb-2">
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
        <section className="py-16 bg-blue-900 text-white text-center">
          <div className="container mx-auto px-4">
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
    </>
  );
};

const SectionHeader = ({ title, description }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
    <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
    {description && (
      <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
    )}
  </div>
);

export default About;
