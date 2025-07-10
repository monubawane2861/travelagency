// src/pages/AvailableCar/AvailableCar.jsx
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
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
const AvailableCar = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const vehicleTypes = [
    { id: "all", name: "All Vehicles", icon: <FaCar className="mr-2" /> },
    { id: "suv", name: "SUV", icon: <FaCar className="mr-2" /> },
    { id: "sedan", name: "Sedan", icon: <FaCar className="mr-2" /> },
    { id: "luxury", name: "Luxury", icon: <FaCar className="mr-2" /> },
    {
      id: "electric",
      name: "Electric",
      icon: <MdElectricCar className="mr-2" />,
    },
  ];

  const vehicles = [
    {
      id: 1,
      name: "Toyota Innova Crysta",
      type: "suv",
      seats: 7,
      ac: true,
      transmission: "Automatic",
      fuel: "Diesel",
      rating: 4.5,
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Free Cancellation", "24/7 Support", "GPS Navigation"],
    },
    {
      id: 2,
      name: "Hyundai Creta",
      type: "suv",
      seats: 5,
      ac: true,
      transmission: "Manual",
      fuel: "Petrol",
      rating: 4.2,
      price: 2000,
      image:
        "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Free Cancellation", "Child Seat Available"],
    },
    {
      id: 3,
      name: "Mercedes-Benz E-Class",
      type: "luxury",
      seats: 4,
      ac: true,
      transmission: "Automatic",
      fuel: "Petrol",
      rating: 4.8,
      price: 5000,
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Chauffeur Service", "Premium Sound System", "WiFi"],
    },
    {
      id: 4,
      name: "Tata Nexon EV",
      type: "electric",
      seats: 5,
      ac: true,
      transmission: "Automatic",
      fuel: "Electric",
      rating: 4.3,
      price: 2200,
      image:
        "https://images.unsplash.com/photo-1620395450365-2049c3b72d8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Eco Friendly", "Fast Charging"],
    },
    {
      id: 5,
      name: "Honda City",
      type: "sedan",
      seats: 5,
      ac: true,
      transmission: "Manual",
      fuel: "Petrol",
      rating: 4.1,
      price: 1800,
      image:
        "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Economical", "Spacious Boot"],
    },
    {
      id: 6,
      name: "BMW 5 Series",
      type: "luxury",
      seats: 4,
      ac: true,
      transmission: "Automatic",
      fuel: "Diesel",
      rating: 4.7,
      price: 5500,
      image:
        "https://images.unsplash.com/photo-1549317661-bd32af8d21f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Premium Interior", "Panoramic Sunroof"],
    },
  ];

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
                {type.icon}
                {type.name}
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
                        <p className="text-2xl font-bold text-blue-900">
                          ₹{vehicle.price}
                          <span className="text-sm font-normal text-gray-500">
                            /day
                          </span>
                        </p>
                      </div>
                      <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full transition duration-300">
                        Book Now
                      </button>
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
