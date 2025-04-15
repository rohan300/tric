"use client";
import React from "react";
import Image from "../assets/Dashboard-Home.png"

interface HeroSectionProps {
  illustrationSrc?: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Left side - Text content */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2 items-center text-center lg:items-start lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-zinc-800">
            Plan Your Day In Seconds
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-neutral-600 max-w-lg">
            Automate your schedule based on your priorities and preferences.
            Integrates with Canvas and Google Calendar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full sm:w-auto">
            <button className="px-6 py-3 text-lg sm:text-xl leading-normal text-white bg-orange-400 rounded-full hover:bg-orange-500 transition-colors w-full sm:w-auto">
              Join Waitlist
            </button>
            <button className="flex justify-center items-center px-4 py-2 text-lg sm:text-xl leading-normal text-orange-400 hover:text-orange-500 transition-colors w-full sm:w-auto">
              <span>Watch video</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-5 h-5 ml-2" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Right side - Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative w-full aspect-square max-w-lg">
              <img
                src={Image}
                alt="Schedule automation illustration"
                // fill
                className="object-contain"
                // priority
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;