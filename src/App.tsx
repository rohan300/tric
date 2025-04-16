"use client";

import React from "react";
import Header from "./components/Header";
import Home from "./pages/HomePage";
import Testimonials from "./sections/HeroSectionTestimonial";
import Features from "./sections/HeroSectionFeatures";
import Pricing from "./sections/HeroSectionPricing";
import Waitlist from "./sections/HeroSectionWaitlist";
import Footer from "./sections/HeroSectionFooter";
import testimonialsData from "./data/testimonialData.json";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed header container */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <main className="flex-1">
        <Home />
        <Testimonials customData={testimonialsData} />
        <Features />
        <Pricing />
        <Waitlist />
        <Footer />
      </main>
    </div>
  );
};

export default App;
