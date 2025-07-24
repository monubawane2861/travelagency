// src/pages/Review/Review.jsx
import React, { useState } from "react";
import { FaStar, FaQuoteLeft, FaUserCircle } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CallNow from "../callnowchatboot/CallNow";
import reviewData from "../../pages/Review/reviewData.json";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
const Review = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });
  const [hoverRating, setHoverRating] = useState(0);

  const reviews = reviewData.reviews;

  const filteredReviews =
    activeTab === "all"
      ? reviews
      : reviews.filter((review) => review.type === activeTab);

  const visibleReviews = filteredReviews.slice(currentSlide, currentSlide + 3);

  const nextSlide = () => {
    if (currentSlide + 3 < filteredReviews.length) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment && newReview.rating > 0) {
      alert(`Thank you for your review, ${newReview.name}!`);
      setNewReview({ name: "", rating: 0, comment: "" });
    }
  };

  return (
    <>
      <Header />
      <CallNow />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Customer Reviews
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear what our valued customers say about their travel experiences
              with us
            </p>
          </div>

          {/* Review Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "family", "pilgrimage", "luxury", "eco"].map((type) => (
              <button
                key={type}
                onClick={() => {
                  setActiveTab(type);
                  setCurrentSlide(0);
                }}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === type
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {type === "all"
                  ? "All Reviews"
                  : type.charAt(0).toUpperCase() + type.slice(1) + " Trips"}
              </button>
            ))}
          </div>

          {/* Reviews Carousel */}
          <div className="relative mb-16">
            {filteredReviews.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  {visibleReviews.map((review) => (
                    <div
                      key={review.id}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="mr-4">
                          <FaUserCircle className="text-4xl text-gray-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{review.name}</h3>
                          <p className="text-gray-500 text-sm">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`text-xl ${
                              i < review.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="relative">
                        <FaQuoteLeft className="text-blue-200 text-4xl absolute -top-2 -left-2" />
                        <p className="text-gray-600 pl-8">{review.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Carousel Controls */}
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className={`p-2 rounded-full ${
                      currentSlide === 0
                        ? "bg-gray-200 text-gray-400"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    } transition duration-300`}
                  >
                    <IoIosArrowBack />
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={currentSlide + 3 >= filteredReviews.length}
                    className={`p-2 rounded-full ${
                      currentSlide + 3 >= filteredReviews.length
                        ? "bg-gray-200 text-gray-400"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    } transition duration-300`}
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow-md">
                <p className="text-gray-600">
                  No reviews found for this category.
                </p>
              </div>
            )}
          </div>

          {/* Add Review Section */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Share Your Experience
              </h2>

              <form onSubmit={handleSubmitReview}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="Enter your name"
                      value={newReview.name}
                      onChange={(e) =>
                        setNewReview({ ...newReview, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      Your Rating
                    </label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          className={`text-3xl cursor-pointer ${
                            (hoverRating || newReview.rating) >= star
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() =>
                            setNewReview({ ...newReview, rating: star })
                          }
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      Your Review
                    </label>
                    <textarea
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      rows="4"
                      placeholder="Share your experience with Swami Nandan Tours..."
                      value={newReview.comment}
                      onChange={(e) =>
                        setNewReview({ ...newReview, comment: e.target.value })
                      }
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Review;
