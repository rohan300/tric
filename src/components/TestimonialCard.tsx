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
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  id,
  name,
  testimonialText,
  highlightedPhrases,
  university,
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
      <header className="mb-4 text-sm uppercase text-stone-600 font-medium z-10 relative">
        {name}
      </header>
      <section className="mb-auto text-lg text-stone-950 leading-relaxed z-10 relative">
        {renderTestimonial()}
      </section>
      <footer className="text-sm uppercase text-stone-600 mt-4 z-10 relative">
        {university}
      </footer>
    </article>
  );
};

export default TestimonialCard;