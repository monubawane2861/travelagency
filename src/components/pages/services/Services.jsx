// import React, { useState } from "react";
// import {
//   FaBus,
//   FaHotel,
//   FaUmbrellaBeach,
//   FaPlaceOfWorship,
//   FaPhone,
//   FaUser,
// } from "react-icons/fa";
// import {
//   GiIndiaGate,
//   GiFamilyHouse,
//   GiCommercialAirplane,
// } from "react-icons/gi";
// import { MdDirectionsCarFilled, MdTour } from "react-icons/md";
// import { IoMdTime } from "react-icons/io";

// import CallNow from "../callnowchatboot/CallNow";
// import data from "../../pages/services/servicesData.json";

// // Icon mapper
// const iconMap = {
//   FaBus: <FaBus className="mr-2" />,
//   FaHotel: <FaHotel className="mr-2" />,
//   FaUmbrellaBeach: <FaUmbrellaBeach className="mr-2" />,
//   FaPlaceOfWorship: <FaPlaceOfWorship className="text-4xl text-green-600" />,
//   FaUser: <FaUser className="text-3xl text-yellow-600" />,
//   FaPhone: <FaPhone className="mr-2" />,
//   GiIndiaGate: <GiIndiaGate className="mr-2" />,
//   GiFamilyHouse: <GiFamilyHouse className="text-4xl text-pink-600" />,
//   GiCommercialAirplane: (
//     <GiCommercialAirplane className="text-4xl text-red-600" />
//   ),
//   MdTour: <MdTour className="mr-2" />,
//   MdDirectionsCarFilled: (
//     <MdDirectionsCarFilled className="text-4xl text-blue-600" />
//   ),
//   IoMdTime: <IoMdTime className="text-3xl text-blue-600" />,
// };

// const Services = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredServices =
//     activeCategory === "all"
//       ? data.services
//       : data.services.filter((service) => service.category === activeCategory);

//   return (
//     <>
//       <CallNow />
//       <div className="min-h-screen bg-gray-50">
//         {/* Hero */}
//         <div className="relative bg-blue-900 text-white py-32">
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506929562872-bb421503ef21')] bg-cover bg-center"></div>
//           <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               Our Premium Services
//             </h1>
//             <p className="text-xl md:text-2xl mb-8">
//               Experience India with our comprehensive travel solutions tailored
//               to your needs
//             </p>
//           </div>
//         </div>

//         {/* Services */}
//         <div className="container mx-auto px-4 py-16">
//           {/* Filters */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {data.categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`flex items-center px-6 py-3 rounded-full transition-all ${
//                   activeCategory === category.id
//                     ? "bg-blue-600 text-white"
//                     : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
//                 }`}
//               >
//                 {iconMap[category.icon]}
//                 {category.name}
//               </button>
//             ))}
//           </div>

//           {/* Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredServices.map((service) => (
//               <div
//                 key={service.id}
//                 className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
//                   <div className="absolute bottom-0 left-0 p-6">
//                     <div className="bg-white p-3 rounded-full shadow-md">
//                       {iconMap[service.icon]}
//                     </div>
//                     <h3 className="text-xl font-bold text-white mt-3">
//                       {service.title}
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <p className="text-gray-600 mb-4">{service.description}</p>
//                   <div className="mb-6">
//                     <h4 className="font-bold text-gray-800 mb-2">
//                       Key Features:
//                     </h4>
//                     <ul className="space-y-2">
//                       {service.features.map((feature, index) => (
//                         <li key={index} className="flex items-start">
//                           <span className="text-green-500 mr-2">✓</span>
//                           <span>{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
//                     Explore Package
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Why Us */}
//           <div className="mt-24">
//             <h2 className="text-3xl font-bold text-center mb-12">
//               <span className="border-b-4 border-yellow-400 pb-2">
//                 Why Choose Our Services?
//               </span>
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition">
//                 <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
//                   {iconMap["IoMdTime"]}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
//                 <p className="text-gray-600">
//                   Our team is available round the clock to assist you during
//                   your journey
//                 </p>
//               </div>

//               <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition">
//                 <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
//                   {iconMap["MdDirectionsCarFilled"]}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">
//                   Well-Maintained Fleet
//                 </h3>
//                 <p className="text-gray-600">
//                   Modern, comfortable vehicles with regular maintenance and
//                   safety checks
//                 </p>
//               </div>

//               <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition">
//                 <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
//                   {iconMap["FaUser"]}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">Expert Guides</h3>
//                 <p className="text-gray-600">
//                   Knowledgeable local guides to enhance your travel experience
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Call to Action */}
//           <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
//             <h2 className="text-3xl font-bold mb-4">
//               Ready to Plan Your Trip?
//             </h2>
//             <p className="text-xl mb-6 max-w-2xl mx-auto">
//               Our travel experts are standing by to help you create the perfect
//               itinerary
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center justify-center mx-auto">
//                 {iconMap["FaPhone"]}
//                 Call +91 98765 43210
//               </button>
//               <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-full transition duration-300">
//                 Get Custom Quote
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;
