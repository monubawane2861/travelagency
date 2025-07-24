// // src/pages/Book/Book.jsx
// import React, { useState } from "react";
// import {
//   FaUser,
//   FaCalendarAlt,
//   FaMapMarkerAlt,
//   FaCreditCard,
//   FaCheck,
// } from "react-icons/fa";
// import { GiSteeringWheel } from "react-icons/gi";
// import { MdFamilyRestroom, MdPayment } from "react-icons/md";

// const Book = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     tour: {
//       id: "GT-2023",
//       title: "Golden Triangle Tour",
//       duration: "6 Days / 5 Nights",
//       dates: ["15 Oct 2023", "22 Oct 2023", "5 Nov 2023"],
//       price: 24500,
//       image: "https://images.unsplash.com/photo-1582972236019-ea9eab4b8965",
//     },
//     personal: {
//       name: "",
//       email: "",
//       phone: "",
//       address: "",
//     },
//     travelers: {
//       adults: 1,
//       children: 0,
//       rooms: 1,
//     },
//     payment: {
//       cardNumber: "",
//       expiry: "",
//       cvv: "",
//       nameOnCard: "",
//     },
//   });

//   const handleInputChange = (section, field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [section]: {
//         ...prev[section],
//         [field]: value,
//       },
//     }));
//   };

//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);

//   return (
//     <>
//       <div className="min-h-screen bg-gray-50 py-12">
//         <div className="container mx-auto px-4">
//           {/* Booking Header */}
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold text-gray-800 mb-4">
//               Book Your Tour
//             </h1>
//             <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
//           </div>

//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Booking Steps */}
//             <div className="lg:w-2/3">
//               {/* Progress Bar */}
//               <div className="bg-white rounded-lg shadow-md p-4 mb-8">
//                 <div className="flex justify-between items-center">
//                   {[1, 2, 3, 4].map((stepNumber) => (
//                     <div
//                       key={stepNumber}
//                       className="flex flex-col items-center"
//                     >
//                       <div
//                         className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                           step >= stepNumber
//                             ? "bg-blue-600 text-white"
//                             : "bg-gray-200 text-gray-600"
//                         }`}
//                       >
//                         {step > stepNumber ? <FaCheck /> : stepNumber}
//                       </div>
//                       <span className="text-xs mt-2 text-gray-600">
//                         {stepNumber === 1 && "Tour Details"}
//                         {stepNumber === 2 && "Personal Info"}
//                         {stepNumber === 3 && "Travelers"}
//                         {stepNumber === 4 && "Payment"}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Step 1: Tour Selection */}
//               {step === 1 && (
//                 <div className="bg-white rounded-lg shadow-md p-6">
//                   <h2 className="text-2xl font-bold mb-6 flex items-center">
//                     <FaMapMarkerAlt className="text-yellow-500 mr-2" />
//                     Select Your Tour Date
//                   </h2>

//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//                     {formData.tour.dates.map((date, index) => (
//                       <div
//                         key={index}
//                         className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition"
//                       >
//                         <div className="flex items-center mb-2">
//                           <FaCalendarAlt className="text-blue-500 mr-2" />
//                           <span className="font-medium">{date}</span>
//                         </div>
//                         <p className="text-sm text-gray-600">
//                           Available seats: 12
//                         </p>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="flex justify-end">
//                     <button
//                       onClick={nextStep}
//                       className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
//                     >
//                       Continue
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Step 2: Personal Information */}
//               {step === 2 && (
//                 <div className="bg-white rounded-lg shadow-md p-6">
//                   <h2 className="text-2xl font-bold mb-6 flex items-center">
//                     <FaUser className="text-yellow-500 mr-2" />
//                     Personal Information
//                   </h2>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                     <div>
//                       <label className="block text-gray-700 mb-2">
//                         Full Name
//                       </label>
//                       <input
//                         type="text"
//                         value={formData.personal.name}
//                         onChange={(e) =>
//                           handleInputChange("personal", "name", e.target.value)
//                         }
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 mb-2">
//                         Email Address
//                       </label>
//                       <input
//                         type="email"
//                         value={formData.personal.email}
//                         onChange={(e) =>
//                           handleInputChange("personal", "email", e.target.value)
//                         }
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 mb-2">
//                         Phone Number
//                       </label>
//                       <input
//                         type="tel"
//                         value={formData.personal.phone}
//                         onChange={(e) =>
//                           handleInputChange("personal", "phone", e.target.value)
//                         }
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 mb-2">
//                         Address
//                       </label>
//                       <input
//                         type="text"
//                         value={formData.personal.address}
//                         onChange={(e) =>
//                           handleInputChange(
//                             "personal",
//                             "address",
//                             e.target.value
//                           )
//                         }
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="flex justify-between">
//                     <button
//                       onClick={prevStep}
//                       className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg transition"
//                     >
//                       Back
//                     </button>
//                     <button
//                       onClick={nextStep}
//                       className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
//                     >
//                       Continue
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Step 3: Travelers Information */}
//               {step === 3 && (
//                 <div className="bg-white rounded-lg shadow-md p-6">
//                   <h2 className="text-2xl font-bold mb-6 flex items-center">
//                     <MdFamilyRestroom className="text-yellow-500 mr-2" />
//                     Travelers Information
//                   </h2>

//                   <div className="space-y-6 mb-8">
//                     <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
//                       <div>
//                         <h3 className="font-bold">Adults</h3>
//                         <p className="text-sm text-gray-600">Age 12+</p>
//                       </div>
//                       <div className="flex items-center space-x-4">
//                         <button
//                           onClick={() =>
//                             handleInputChange(
//                               "travelers",
//                               "adults",
//                               Math.max(1, formData.travelers.adults - 1)
//                             )
//                           }
//                           className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
//                         >
//                           -
//                         </button>
//                         <span>{formData.travelers.adults}</span>
//                         <button
//                           onClick={() =>
//                             handleInputChange(
//                               "travelers",
//                               "adults",
//                               formData.travelers.adults + 1
//                             )
//                           }
//                           className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>

//                     <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
//                       <div>
//                         <h3 className="font-bold">Children</h3>
//                         <p className="text-sm text-gray-600">Age 2-11</p>
//                       </div>
//                       <div className="flex items-center space-x-4">
//                         <button
//                           onClick={() =>
//                             handleInputChange(
//                               "travelers",
//                               "children",
//                               Math.max(0, formData.travelers.children - 1)
//                             )
//                           }
//                           className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
//                         >
//                           -
//                         </button>
//                         <span>{formData.travelers.children}</span>
//                         <button
//                           onClick={() =>
//                             handleInputChange(
//                               "travelers",
//                               "children",
//                               formData.travelers.children + 1
//                             )
//                           }
//                           className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>

//                     <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
//                       <div>
//                         <h3 className="font-bold">Rooms</h3>
//                         <p className="text-sm text-gray-600">
//                           Double occupancy
//                         </p>
//                       </div>
//                       <div className="flex items-center space-x-4">
//                         <button
//                           onClick={() =>
//                             handleInputChange(
//                               "travelers",
//                               "rooms",
//                               Math.max(1, formData.travelers.rooms - 1)
//                             )
//                           }
//                           className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
//                         >
//                           -
//                         </button>
//                         <span>{formData.travelers.rooms}</span>
//                         <button
//                           onClick={() =>
//                             handleInputChange(
//                               "travelers",
//                               "rooms",
//                               formData.travelers.rooms + 1
//                             )
//                           }
//                           className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex justify-between">
//                     <button
//                       onClick={prevStep}
//                       className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg transition"
//                     >
//                       Back
//                     </button>
//                     <button
//                       onClick={nextStep}
//                       className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
//                     >
//                       Continue
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Step 4: Payment Information */}
//               {step === 4 && (
//                 <div className="bg-white rounded-lg shadow-md p-6">
//                   <h2 className="text-2xl font-bold mb-6 flex items-center">
//                     <MdPayment className="text-yellow-500 mr-2" />
//                     Payment Information
//                   </h2>

//                   <div className="mb-8">
//                     <div className="bg-blue-50 p-4 rounded-lg mb-4">
//                       <div className="flex items-center">
//                         <FaCreditCard className="text-blue-600 mr-2" />
//                         <span className="font-medium">Credit/Debit Card</span>
//                       </div>
//                     </div>

//                     <div className="space-y-4">
//                       <div>
//                         <label className="block text-gray-700 mb-2">
//                           Card Number
//                         </label>
//                         <input
//                           type="text"
//                           value={formData.payment.cardNumber}
//                           onChange={(e) =>
//                             handleInputChange(
//                               "payment",
//                               "cardNumber",
//                               e.target.value
//                             )
//                           }
//                           placeholder="1234 5678 9012 3456"
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                           required
//                         />
//                       </div>

//                       <div className="grid grid-cols-2 gap-4">
//                         <div>
//                           <label className="block text-gray-700 mb-2">
//                             Expiry Date
//                           </label>
//                           <input
//                             type="text"
//                             value={formData.payment.expiry}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "payment",
//                                 "expiry",
//                                 e.target.value
//                               )
//                             }
//                             placeholder="MM/YY"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                             required
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-gray-700 mb-2">
//                             CVV
//                           </label>
//                           <input
//                             type="text"
//                             value={formData.payment.cvv}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "payment",
//                                 "cvv",
//                                 e.target.value
//                               )
//                             }
//                             placeholder="123"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                             required
//                           />
//                         </div>
//                       </div>

//                       <div>
//                         <label className="block text-gray-700 mb-2">
//                           Name on Card
//                         </label>
//                         <input
//                           type="text"
//                           value={formData.payment.nameOnCard}
//                           onChange={(e) =>
//                             handleInputChange(
//                               "payment",
//                               "nameOnCard",
//                               e.target.value
//                             )
//                           }
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                           required
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex justify-between">
//                     <button
//                       onClick={prevStep}
//                       className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg transition"
//                     >
//                       Back
//                     </button>
//                     <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition">
//                       Complete Booking
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Tour Summary Sidebar */}
//             <div className="lg:w-1/3">
//               <div className="bg-white rounded-lg shadow-md sticky top-4">
//                 <div className="p-6 border-b">
//                   <h2 className="text-xl font-bold mb-4">Tour Summary</h2>
//                   <div className="flex items-start mb-6">
//                     <img
//                       src={formData.tour.image}
//                       alt={formData.tour.title}
//                       className="w-20 h-20 object-cover rounded-lg mr-4"
//                     />
//                     <div>
//                       <h3 className="font-bold">{formData.tour.title}</h3>
//                       <p className="text-gray-600 text-sm">
//                         {formData.tour.duration}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="space-y-3">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Date:</span>
//                       <span className="font-medium">15 Oct 2023</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Adults:</span>
//                       <span className="font-medium">
//                         {formData.travelers.adults} × ₹
//                         {formData.tour.price.toLocaleString()}
//                       </span>
//                     </div>
//                     {formData.travelers.children > 0 && (
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Children:</span>
//                         <span className="font-medium">
//                           {formData.travelers.children} × ₹
//                           {(formData.tour.price * 0.7).toLocaleString()}
//                         </span>
//                       </div>
//                     )}
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Rooms:</span>
//                       <span className="font-medium">
//                         {formData.travelers.rooms} × ₹2000
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <div className="flex justify-between mb-2">
//                     <span className="text-gray-600">Subtotal:</span>
//                     <span className="font-medium">
//                       ₹
//                       {(
//                         formData.travelers.adults * formData.tour.price +
//                         formData.travelers.children *
//                           formData.tour.price *
//                           0.7 +
//                         formData.travelers.rooms * 2000
//                       ).toLocaleString()}
//                     </span>
//                   </div>
//                   <div className="flex justify-between mb-2">
//                     <span className="text-gray-600">Taxes:</span>
//                     <span className="font-medium">₹1,200</span>
//                   </div>
//                   <div className="flex justify-between text-lg font-bold mt-4 pt-4 border-t">
//                     <span>Total:</span>
//                     <span className="text-blue-600">
//                       ₹
//                       {(
//                         formData.travelers.adults * formData.tour.price +
//                         formData.travelers.children *
//                           formData.tour.price *
//                           0.7 +
//                         formData.travelers.rooms * 2000 +
//                         1200
//                       ).toLocaleString()}
//                     </span>
//                   </div>

//                   <div className="mt-6 flex items-center text-sm text-gray-500">
//                     <GiSteeringWheel className="mr-2" />
//                     <span>Free cancellation up to 7 days before tour</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Book;
