"use client";
import React from "react";
import FadeInSection from "../components/FadeInSection";
import Background from "../assets/backgroundWaitlist.svg";

const WaitlistSection: React.FC = () => {
  return (
    <FadeInSection>
      <section
        className="flex flex-col items-center justify-center px-5 py-9 w-full mx-auto bg-orange-400 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <h1 className="text-4xl font-inter font-bold tracking-wide text-center text-white">
          The time is right now
        </h1>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/forms/d/e/1FAIpQLSf1yiqVtS02hOy3sRtXTdhsWcKsKzS5clDJTA9Hfw1rdOw3cw/viewform"
        >
          <button className="mt-6 px-6 py-3.5 text-lg font-bold leading-6 text-[#ED7937] bg-white rounded-full hover:bg-gray-100 transition-colors">
            Join Waitlist for Free
          </button>
        </a>
      </section>
    </FadeInSection>
  );
};

export default WaitlistSection;
