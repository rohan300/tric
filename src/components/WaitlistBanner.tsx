"use client";

import React from "react";
import Banner from "../assets/Banner.svg";
import { FaArrowRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

interface AnnouncementBannerProps {
  onClose?: () => void;
}

export const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({
  onClose,
}) => {
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
                <button className="focus:outline-none">Register now</button>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-black" />
              </div>
              <FaArrowRight />
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 focus:outline-none"
            aria-label="Close announcement"
          >
            <IoClose />
          </button>
        </div>
      </div>
    </div>
  );
};