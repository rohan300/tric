"use client";
import React, { useState } from "react";
import TabButton from "../components/TabButton";
import FadeInSection from "../components/FadeInSection";
import Lottie from "lottie-react";

// assets
import canvasIntegration from "../assets/CanvasInteg.json";
import whatNext from "../assets/whatNext.json";
import scheduleAnimation from "../assets/Sched.json";
import rescheduleAnimation from "../assets/Resched.json";
import PlayIcon from "../assets/play_icon.svg";
import walkthroughGif from "../assets/TricDemo.gif";

const HeroSection: React.FC = () => {
  // Define the four tabs and their corresponding content.
  const tabs = [
    "Canvas Integration",
    "Smart Scheduling",
    "Dynamic Rescheduling",
    "What's Next",
  ];

  type TabContentType = {
    heading: string;
    subHeading: string;
    description: string;
    imageUrl?: string;
    animationData?: object;
  };

  // Content mapping for each tab.
  const tabContent: Record<string, TabContentType> = {
    "Canvas Integration": {
      heading: "📚 Stay Synced, Stay Ahead",
      subHeading:
        "Syncs directly with Canvas, auto-tracking assignments and deadlines.",
      description:
        "Tric instantly updates your schedule if professors make last-minute changes—zero manual effort.",
      animationData: canvasIntegration,
    },
    "Smart Scheduling": {
      heading: "🗓 Plan Smart, Achieve More",
      subHeading: "Optimize your time with intelligent scheduling.",
      description:
        "Experience real-time updates and a smart approach to managing your day.",
      animationData: scheduleAnimation,
    },
    "Dynamic Rescheduling": {
      heading: "⏰ Adapt on the Fly",
      subHeading: "Instantly adjust your plans as changes occur.",
      description:
        "Automatic, dynamic rescheduling means your calendar stays up-to-date without any manual input.",
      animationData: rescheduleAnimation,
    },
    "What's Next": {
      heading: "🚀 Explore New Horizons",
      subHeading: "Innovations designed to elevate your success.",
      description:
        "Discover upcoming features and cutting-edge tools to help you stay ahead of the curve.",
      animationData: whatNext,
    },
  };

  // Manage the currently selected tab.
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const content = tabContent[selectedTab];

  // State to control the GIF overlay.
  const [isGifOpen, setIsGifOpen] = useState(false);

  return (
    <section
      className="h-[90vh] w-full px-[5vh] sm:px-6 md:px-8"
      style={{ paddingTop: "5vh", paddingBottom: "5vh" }}
    >
      <div className="h-full flex flex-col">
        {/* Navigation Buttons */}
        <FadeInSection>
          {/* Changed to grid for mobile with 2x2 layout */}
          <nav className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <TabButton
                key={tab}
                label={tab}
                active={tab === selectedTab}
                onClick={() => setSelectedTab(tab)}
                className="w-full sm:w-auto"  // Full width on mobile, auto on larger screens
              />
            ))}
          </nav>
        </FadeInSection>

        <FadeInSection>
          {/* Content area modified for mobile responsiveness */}
          <div className="flex-1 flex flex-col md:flex-row md:justify-between gap-8 px-4 sm:px-[15vw] py-6 sm:py-[10vh]">
            {/* Left side: Text content */}
            <div className="flex-1 text-center md:text-left font-inter">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-[5vh]"
                style={{ color: "#401700" }}
              >
                {content.heading}
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4 sm:mb-[5vh]">
                {content.subHeading}
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl"
                style={{ color: "#707070" }}
              >
                {content.description}
              </p>
            </div>
            
            {/* Right side: Image or Lottie animation in fixed container for mobile */}
            <div className="flex-1 flex justify-center items-center h-64 sm:h-auto mt-6 md:mt-0">
              {content.animationData ? (
                <div className="w-full h-full flex justify-center items-center">
                  <Lottie
                    animationData={content.animationData}
                    loop
                    autoplay
                    style={{ width: "80%", height: "100%" }}
                  />
                </div>
              ) : (
                <img
                  src={content.imageUrl}
                  alt={selectedTab}
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              )}
            </div>
          </div>
        </FadeInSection>

        {/* Video Walkthrough Link */}
        <FadeInSection>
          <div className="flex justify-center items-center mt-auto mb-8">
            <button
              onClick={() => setIsGifOpen(true)}
              className="flex items-center gap-2 text-lg font-inter font-light text-black"
            >
              <span>See Walkthrough Video</span>
              <img src={PlayIcon} alt="Play video" className="w-6 h-6" />
            </button>
          </div>
        </FadeInSection>
      </div>

      {/* Modal Overlay for the GIF */}
      {isGifOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
          onClick={() => setIsGifOpen(false)}
        >
          <div
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={walkthroughGif}
              alt="Walkthrough Video GIF"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;