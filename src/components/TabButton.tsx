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
        className={`shrink-0 flex items-center justify-center px-8 py-3.5 h-14 text-xl transition-colors duration-200 font-medium focus:outline-none rounded-full ${
          active
            ? "text-orange-400 bg-orange-100 border border-orange-400 border-solid"
            : "text-stone-500 bg-stone-50"
        }`}
      >
        {label}
      </button>
    );
  };

export default TabButton;