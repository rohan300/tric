"use client";
import React, { useState } from "react";
import TabButton from "../components/TabButton";

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
        imageUrl: "https://via.placeholder.com/500", // placeholder image
      },
      "Smart Scheduling": {
        heading: "🗓 Plan Smart, Achieve More",
        subHeading: "Optimize your time with intelligent scheduling.",
        description:
          "Experience real-time updates and a smart approach to managing your day.",
        imageUrl: "https://via.placeholder.com/500",
      },
      "Dynamic Rescheduling": {
        heading: "⏰ Adapt on the Fly",
        subHeading: "Instantly adjust your plans as changes occur.",
        description:
          "Automatic, dynamic rescheduling means your calendar stays up-to-date without any manual input.",
        imageUrl: "https://via.placeholder.com/500",
      },
      "What's Next": {
        heading: "🚀 Explore New Horizons",
        subHeading: "Innovations designed to elevate your success.",
        description:
          "Discover upcoming features and cutting-edge tools to help you stay ahead of the curve.",
        imageUrl: "https://via.placeholder.com/500",
      },
    };
  
    // Manage the currently selected tab.
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const content = tabContent[selectedTab];
  
    return (
      <section className="w-full py-8 px-4 sm:px-6 md:px-8">
        {/* Navigation Buttons */}
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
  
        {/* Content area with left (text) and right (image) sides */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
          {/* Left side: Text content */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {content.heading}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-stone-700">
              {content.subHeading}
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-neutral-500">
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
      </section>
    );
  };
  
  export default HeroSection;