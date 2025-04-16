"use client";
import React, { useState, useEffect } from "react";
import Logo from "../assets/Tric Logo.svg";

const NavigationHeader: React.FC = () => {
  // IDs for the sections we want to track.
  const sectionIds = ["feedback", "features", "pricing", "contact"];
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    // Adding an offset for early detection.
    const offset = 20;
    const scrollPosition = window.scrollY + offset;
    let currentSection = "";
  
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const { offsetTop, offsetHeight } = section;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          currentSection = id;
        }
      }
    });
  
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Fire the scroll handler once on mount to set the initial active section.
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full flex items-center py-4 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
      <div className="flex items-center">
        {/* Logo */}
        <a href="#home">
          <img
            src={Logo}
            className="h-8 sm:h-10 object-contain"
            alt="Tric logo"
          />
        </a>
        {/* Navigation links aligned to the left, after the logo */}
        <nav className="ml-8">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#feedback"
                className={`transition-colors duration-200 hover:underline ${
                  activeSection === "feedback" ? "text-black" : "text-[#777767]"
                }`}
              >
                Feedback
              </a>
            </li>
            <li>
              <a
                href="#features"
                className={`transition-colors duration-200 hover:underline ${
                  activeSection === "features" ? "text-black" : "text-[#777767]"
                }`}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className={`transition-colors duration-200 hover:underline ${
                  activeSection === "pricing" ? "text-black" : "text-[#777767]"
                }`}
              >
                Pricing
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavigationHeader;
