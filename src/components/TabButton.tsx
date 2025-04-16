"use client";
import React from "react";

// A reusable button component for the navigation tabs.
interface TabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, active, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`shrink-0 flex items-center justify-center px-8 py-3.5 h-14 text-xl transition-colors duration-200 font-inter focus:outline-none rounded-full ${
          active
            ? "text-[#ED7937] bg-[#FFE2D2] border border-[#ED7937] border-solid"
            : "text-[#777767] bg-[#F8F8F8]"
        }`}
      >
        {label}
      </button>
    );
  };

export default TabButton;