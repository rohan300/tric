"use client";

import React from "react";
import Banner from "../assets/Banner.svg";
import { FaArrowRight } from "react-icons/fa6";

export const AnnouncementBanner: React.FC = ({}) => {
  return (
    <div className="w-full text-black">
      <div className="relative w-full bg-amber-400 py-4 px-4 sm:px-6">
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full max-w-6xl">
            <div className="flex items-center gap-2 text-sm">
              <img
                src={Banner}
                className="w-4 h-4 object-contain"
                alt="Notification icon"
              />
              <p>Join the waitlist to see our innovation.</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <div className="relative">
                <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSf1yiqVtS02hOy3sRtXTdhsWcKsKzS5clDJTA9Hfw1rdOw3cw/viewform" className="text-black hover:underline">
                  <button className="focus:outline-none">Register now</button>
                </a>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-black" />
              </div>
                  <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};