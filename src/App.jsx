import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

import Home from "././components/pages/Home/Home";
import About from "./components/pages/About/About";
import AvailableCar from "./components/pages/AvailableCar/AvailableCar";
import Contact from "./components/pages/Contact/Contact";
import Review from "./components/pages/Review/Review";
import CallNow from "./components/pages/callnowchatboot/CallNow";
// import Book from "./components/pages/Book/Book";
// import Services from "./components/pages/services/Services";
import NotFound from "./components/pages/NotFound/NotFound";

// Optional: If you have a common header/footer

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="app">
      <ScrollToTop />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<AvailableCar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/call" element={<CallNow />} />
          {/* <Route path="/book" element={<Book />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
