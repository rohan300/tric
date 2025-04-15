"use client";

import React from "react";
import Logo from "../assets/Tric Logo.svg";

export const NavigationHeader: React.FC = () => {
  return (
    <header className="w-full flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 text-teal-600 bg-white shadow-sm">
      <div className="flex items-center">
        <img
          src={Logo}
          className="h-8 sm:h-10 object-contain"
          alt="Tric logo"
        />
      </div>
    </header>
  );
};