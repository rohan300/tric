"use client";
import React from "react";

const WaitlistSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center px-5 py-9 w-full mx-auto bg-orange-400">
      <h1 className="text-4xl font-bold tracking-wide text-center text-white leading-[57.6px]">
        The time is right now
      </h1>
      <button className="mt-6 px-6 py-3.5 text-lg font-bold leading-6 text-orange-400 bg-white rounded-full hover:bg-gray-100 transition-colors">
        Join Waitlist for Free
      </button>
    </section>
  );
};

export default WaitlistSection;
