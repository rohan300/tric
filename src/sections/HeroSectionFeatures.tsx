"use client";
import React, { useState } from "react";
import TabButton from "../components/TabButton";
import Image from "../assets/Dashboard-Home.png";
import PlayIcon from "../assets/play_icon.svg";
import FadeInSection from "../components/FadeInSection";

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
    imageUrl: string;
  };

  // Content mapping for each tab.
  const tabContent: Record<string, TabContentType> = {
    "Canvas Integration": {
      heading: "📚 Stay Synced, Stay Ahead",
      subHeading: "Syncs directly with Canvas, auto-tracking assignments and deadlines.",
      description:
        "Tric instantly updates your schedule if professors make last-minute changes—zero manual effort.",
      imageUrl: Image
    },
    "Smart Scheduling": {
      heading: "🗓 Plan Smart, Achieve More",
      subHeading: "Optimize your time with intelligent scheduling.",
      description:
        "Experience real-time updates and a smart approach to managing your day.",
      imageUrl: Image
    },
    "Dynamic Rescheduling": {
      heading: "⏰ Adapt on the Fly",
      subHeading: "Instantly adjust your plans as changes occur.",
      description:
        "Automatic, dynamic rescheduling means your calendar stays up-to-date without any manual input.",
      imageUrl: Image
    },
    "What's Next": {
      heading: "🚀 Explore New Horizons",
      subHeading: "Innovations designed to elevate your success.",
      description:
        "Discover upcoming features and cutting-edge tools to help you stay ahead of the curve.",
      imageUrl: Image
    },
  };

  // Manage the currently selected tab.
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const content = tabContent[selectedTab];

  return (
    <section
      className="h-[90vh] w-full px-[5vh] sm:px-6 md:px-8"
      // Set padding: top 5vh and bottom 10vh
      style={{ paddingTop: "5vh", paddingBottom: "5vh" }}
    >
      <div className="h-full flex flex-col">
        {/* Navigation Buttons */}
        <FadeInSection>
          <nav className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <TabButton
                key={tab}
                label={tab}
                active={tab === selectedTab}
                onClick={() => setSelectedTab(tab)}
              />
            ))}
          </nav>
        </FadeInSection>
        <FadeInSection>
          {/* Content area fills remaining space */}
          <div className="flex-1 flex flex-col md:flex-row md:justify-between gap-8 px-[15vw] py-[10vh]">
            {/* Left side: Text content */}
            <div className="flex-1 text-center md:text-left font-inter">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-[5vh]" style={{ color: "#401700" }}>
                {content.heading}
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-[5vh]">
                {content.subHeading}
              </h3>
              <p className="text-base sm:text-lg md:text-xl" style={{ color: "#707070" }}>
                {content.description}
              </p>
            </div>
            {/* Right side: Image content */}
            <div className="flex-1 flex justify-center">
              <img
                src={content.imageUrl}
                alt={selectedTab}
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </FadeInSection>
        
        {/* New video walkthrough link */}
        <FadeInSection>
          <div className="flex justify-center items-center mt-auto mb-8">
            <button className="flex items-center gap-2 text-lg font-inter font-light text-black">
              <span>See Walkthrough Video</span>
              <img src={PlayIcon} alt="Play video" className="w-6 h-6" />
            </button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HeroSection;