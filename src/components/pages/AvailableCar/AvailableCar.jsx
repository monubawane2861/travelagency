// AvailableCar.jsx
import React, { useState } from "react";
import {
  FaCar,
  FaSnowflake,
  FaGasPump,
  FaStar,
  FaFilter,
} from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { MdAirlineSeatReclineNormal, MdElectricCar } from "react-icons/md";
import CallNow from "../callnowchatboot/CallNow";
import data from "../../pages/AvailableCar/availableCarData.json"; // Adjust path if needed
import { Link } from "react-router-dom";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
const iconMap = {
  FaCar: <FaCar className="mr-2" />,
  MdElectricCar: <MdElectricCar className="mr-2" />,
};

const AvailableCar = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const vehicleTypes = data.vehicleTypes;
  const vehicles = data.vehicles;

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesFilter =
      activeFilter === "all" || vehicle.type === activeFilter;
    const matchesSearch = vehicle.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <Header />
      <CallNow />
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="bg-blue-900 text-white rounded-xl p-8 mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">Our Vehicle Fleet</h1>
              <p className="text-xl mb-6">
                Choose from our premium collection of well-maintained vehicles
                for your perfect journey
              </p>
              <div className="flex items-center bg-white rounded-full px-4 py-2 max-w-md">
                <input
                  type="text"
                  placeholder="Search vehicles..."
                  className="flex-grow outline-none text-gray-800 bg-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaFilter className="text-blue-900" />
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {vehicleTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveFilter(type.id)}
                className={`flex items-center px-6 py-3 rounded-full transition-all ${
                  activeFilter === type.id
                    ? "bg-yellow-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {iconMap[type.icon]} {type.name}
              </button>
            ))}
          </div>

          {/* Vehicles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.length > 0 ? (
              filteredVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover transition duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                      <FaStar className="mr-1" />
                      {vehicle.rating}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{vehicle.name}</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <MdAirlineSeatReclineNormal className="mr-2" />
                        {vehicle.seats} Seats
                      </div>
                      <div className="flex items-center text-gray-600">
                        <GiGearStickPattern className="mr-2" />
                        {vehicle.transmission}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaGasPump className="mr-2" />
                        {vehicle.fuel}
                      </div>
                      {vehicle.ac && (
                        <div className="flex items-center text-gray-600">
                          <FaSnowflake className="mr-2" />
                          AC
                        </div>
                      )}
                    </div>
                    <div className="mb-4">
                      {vehicle.features.map((feature, index) => (
                        <span
                          key={index}
                          className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2 mb-2"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-gray-500 text-sm">
                          Starting from
                        </span>
                      </div>
                      <Link to="/contact">
                        <button className="bg-blue-900 cursor-pointer hover:bg-blue-800 text-white px-6 py-2 rounded-full transition duration-300">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <h3 className="text-xl font-medium text-gray-600">
                  No vehicles match your search criteria
                </h3>
                <button
                  onClick={() => {
                    setActiveFilter("all");
                    setSearchTerm("");
                  }}
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AvailableCar;
