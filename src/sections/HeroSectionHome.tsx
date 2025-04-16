"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Lottie from "lottie-react";
import animationData from "../assets/HomeAnimation.json";

const HeroSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2 items-center text-center lg:items-start lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-bold leading-tight text-zinc-800">
              Plan Your Day In Seconds
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-inter font-light leading-relaxed text-neutral-600 max-w-lg">
              Automate your schedule based on your priorities and preferences.
              Integrates with Canvas and Google Calendar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full sm:w-auto">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSf1yiqVtS02hOy3sRtXTdhsWcKsKzS5clDJTA9Hfw1rdOw3cw/viewform"
              >
                <button className="px-6 py-3 text-lg sm:text-xl leading-normal text-[#FEFEFE] font-inter bg-[#ED7937] rounded-full hover:bg-orange-500 transition-colors w-full sm:w-auto">
                  Join Waitlist
                </button>
              </a>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="flex justify-center items-center px-4 py-2 text-lg sm:text-xl leading-normal text-[#ED7937] font-inter transition-colors w-full sm:w-auto"
              >
                <span>Watch video</span>
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
          {/* Right side - Lottie Animation */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
            <div className="w-full max-w-lg">
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay for the YouTube Video */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative bg-white p-4 rounded shadow-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Responsive YouTube Embed */}
            <div
              className="relative"
              style={{ paddingBottom: "56.25%", height: 0 }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/43iUNhguJ8g?si=s9a8S3TTi-Y120Wd"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
