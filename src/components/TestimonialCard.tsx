"use client";
import React from "react";
import HighlightedText from "./HighlightedText";
import BackgroundSVG from "../assets/backgroundCard.svg";

export interface TestimonialCardProps {
  id: string;
  name: string;
  testimonialText: string;
  highlightedPhrases: string[];
  university: string;
  year: string; // New property for the year
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  id,
  name,
  testimonialText,
  highlightedPhrases,
  university,
  year,
}) => {
  // Function to render testimonial text with highlighted phrases
  const renderTestimonial = () => {
    if (highlightedPhrases.length === 0) {
      return testimonialText;
    }

    let result = testimonialText;
    
    // Replace each highlighted phrase with a marker
    highlightedPhrases.forEach((phrase, index) => {
      result = result.replace(`[${phrase}]`, `__HIGHLIGHT_${index}__`);
    });

    // Split by markers
    const parts = result.split(/__(HIGHLIGHT_\d+)__/);

    // Render parts
    return parts.map((part, index) => {
      if (part.startsWith('HIGHLIGHT_')) {
        const highlightIndex = parseInt(part.replace('HIGHLIGHT_', ''), 10);
        return (
          <HighlightedText key={index}>
            {highlightedPhrases[highlightIndex]}
          </HighlightedText>
        );
      }
      return part;
    });
  };

  return (
    <article 
      className="flex flex-col justify-between p-5 rounded-3xl h-80 w-80 sm:w-72 md:w-80 lg:w-80 shrink-0 relative overflow-hidden"
    >
      {/* SVG Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src={BackgroundSVG} 
          alt="" 
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      
      {/* Card content */}
      <header className="mb-4 text-sm uppercase font-medium z-10 relative font-ag-inner-title" style={{ color: "#6D5E56" }}>
        {name}
      </header>
      <section className="mb-auto text-lg leading-relaxed z-10 relative font-inter-medium" style={{ color: "#200C00" }}>
        {renderTestimonial()}
      </section>
      <footer className="flex flex-col items-start mt-4 z-10 relative font-ag-inner-title text-sm uppercase" style={{ color: "#6D5E56" }}>
        <span>{year}</span>
        <span>{university}</span>
      </footer>
    </article>
  );
};

export default TestimonialCard;