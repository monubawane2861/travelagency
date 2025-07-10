// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import components
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";

// Import pages
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import AvailableCar from "./components/pages/AvailableCar/AvailableCar";
import Contact from "./components/pages/Contact/Contact";
import Review from "./components/pages/Review/Review";
import CallNow from "./components/pages/callnowchatboot/CallNow";
import Book from "./components/pages/book/Book";
import Services from "./components/pages/services/Services";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<AvailableCar />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Review />} />
            <Route path="/call" element={<CallNow />} />
            <Route path="/book" element={<Book />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
