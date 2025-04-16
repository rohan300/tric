"use client";
import React, { useEffect, useRef } from "react";
import TestimonialCard, { TestimonialCardProps } from "../components/TestimonialCard";
import testimonialsData from "../data/testimonialData.json";
import FadeInSection from "../components/FadeInSection";

interface TestimonialSectionProps {
  // Optional prop to override the default data source
  customData?: {
    testimonials: TestimonialCardProps[];
  };
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ customData }) => {
  // Use custom data if provided, otherwise use the imported JSON data
  const { testimonials } = customData || testimonialsData;
  // Duplicate testimonials for continuous scrolling effect
  const allTestimonials = [...testimonials, ...testimonials];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    let lastTimestamp: number | null = null;
    // Speed in pixels per millisecond (adjust as needed)
    const scrollSpeed = 0.1;

    const scroll = (timestamp: number) => {
      if (lastTimestamp !== null) {
        // Calculate the elapsed time between frames
        const delta = timestamp - lastTimestamp;
        scrollPosition += scrollSpeed * delta;
      }
      lastTimestamp = timestamp;

      // Reset scroll when the first set of cards has been fully scrolled
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="h-[90vh] w-full py-12 md:py-16 lg:py-20 overflow-hidden">
      <FadeInSection>
      {/* Heading container */}
      <div className="container mx-auto px-4 pt-[5vh]">
        {/* Combined heading text on one line */}
        <h2 className="mb-10 md:mb-16 text-center text-xl md:text-4xl font-light whitespace-nowrap font-inter text-[#6D5E56]">
          Join Our{" "}
          <span 
            className="inline-block text-3xl md:text-6xl lg:text-6xl font-bold mb-2 font-baloo"
          >
            Tric
          </span>{" "}
          Community with students from Universities across the United States
        </h2>
      </div>
      </FadeInSection>
      <FadeInSection>
      {/* Full-width container for testimonials with 10vh top padding */}
      <div className="w-full pt-[5vh]">
        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden gap-5 py-4"
        >
          {allTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-${index}`}
              id={testimonial.id}
              name={testimonial.name}
              testimonialText={testimonial.testimonialText}
              highlightedPhrases={testimonial.highlightedPhrases}
              year={testimonial.year}
              university={testimonial.university}
            />
          ))}
        </div>
      </div>
      </FadeInSection>
    </section>
  );
};

export default TestimonialSection;