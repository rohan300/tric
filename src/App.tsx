import React from "react";
import Header from "./components/Header";
import Home from "./sections/HeroSectionHome";
import Testimonials from "./sections/HeroSectionTestimonial";
import Features from "./sections/HeroSectionFeatures";
import Pricing from "./sections/HeroSectionPricing";
import testimonialsData from "./data/testimonialData.json";


const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <Home />
        <Testimonials customData={testimonialsData} />
        <Features />
        <Pricing />
      </main>
    </div>
  );
};

export default App;