"use client";

import React from "react";
import Header from "../components/Header";
import HeroSection from "../sections/HeroSectionHome";

const HomePage: React.FC = () => {
  return (
    <div className="h-[90vh] flex flex-col">
      <Header />
      {/* The hero section container fills the remaining vertical space */}
      <div className="flex-grow flex items-center">
        <HeroSection />
      </div>
    </div>
  );
};

export default HomePage;
