// HomePage.tsx
"use client";
import React from "react";
import Header from "../components/Header";
import HeroSection from "../sections/HeroSectionHome";
import FadeInSection from "../components/FadeInSection";
import Background from "../assets/backgroundHome.svg";

const HomePage: React.FC = () => {
  return (
    <FadeInSection>
      {/* Wrapper div with a background image */}
      <div
        className="min-h-[100vh] flex flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Header />
        <div className="flex-grow flex items-center">
          <HeroSection />
        </div>
      </div>
    </FadeInSection>
  );
};

export default HomePage;
