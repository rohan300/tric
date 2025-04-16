"use client";
import React from "react";

interface HighlightedTextProps {
  children: React.ReactNode;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ children }) => {
  return (
    <span className="text-[#ED7937] px-1 font-medium">
      {children}
    </span>
  );
};

export default HighlightedText;