"use client";

import React from "react";
import Logo from "../assets/Tric Logo.svg";

export const NavigationHeader: React.FC = () => {
  return (
    <header className="w-full flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 text-[#2A9D8F] bg-white shadow-sm">
      <div className="flex items-center">
        {/* Clicking the logo scrolls to the Home section */}
        <a href="#home">
          <img
            src={Logo}
            className="h-8 sm:h-10 object-contain"
            alt="Tric logo"
          />
        </a>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#feedback"
              className="hover:underline transition-colors duration-200"
            >
              Feedback
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="hover:underline transition-colors duration-200"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="hover:underline transition-colors duration-200"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:underline transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationHeader;
