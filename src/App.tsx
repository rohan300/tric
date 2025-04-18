"use client";

import React from "react";
import Header from "./components/Header";
import Home from "./pages/HomePage";
import Testimonials from "./sections/HeroSectionTestimonial";
import Features from "./sections/HeroSectionFeatures";
import Pricing from "./sections/HeroSectionPricing";
import Footer from "./sections/HeroSectionFooter";
import testimonialsData from "./data/testimonialData.json";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <main className="flex-1">
        <div id="home">
          <Home />
        </div>
        <div id="feedback" className="anchor-offset">
          <Testimonials customData={testimonialsData} />
        </div>
        <div id="features" className="anchor-offset">
          <Features />
        </div>
        <div id="pricing" className="anchor-offset">
          <Pricing />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
