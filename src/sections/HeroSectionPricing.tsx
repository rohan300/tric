"use client";
import React from "react";
import PricingCard, { PricingCardProps } from "../components/PricingCard";
import Core from "../assets/core.svg";
import Plus from "../assets/plus.svg";
import Pro from "../assets/pro.svg";
import FadeInSection from "../components/FadeInSection";
import bgImage from "../assets/pricingBG.png";

const HeroSectionPricing: React.FC = () => {
  const cards: PricingCardProps[] = [
    {
      iconSrc: Core,
      headerSubtitle: "For students who just want the essentials to get started",
      headerTitle: "CORE",
      description: "Perfect for staying organized with minimal setup. It is everything you need.",
      price: "$3.99",
      period: "/month",
      features: [
        "Canvas Sync",
        "Auto Scheduling (Plan up to 2 weeks ahead)",
        "Basic Personalization (working hrs + difficulty)",
      ],
      buttonText: "Join Waitlist",
      highlighted: false,
    },
    {
      iconSrc: Plus,
      headerSubtitle: "For students who want a smarter, more flexible schedule",
      headerTitle: "PLUS",
      description: "Great for busy weeks when things don't always go as planned.",
      price: "$6.99",
      period: "/month",
      features: [
        "Canvas Sync",
        "Auto Scheduling (Plan up to 3 weeks ahead)",
        "Limited Auto Rescheduling (minor changes, major help)",
      ],
      buttonText: "Join Waitlist",
      highlighted: true,
    },
    {
      iconSrc: Pro,
      headerSubtitle: "For students who want full control and zero stress",
      headerTitle: "PRO",
      description:
        "Ideal for students juggling packed schedules and ambitious goals.",
      price: "$9.99",
      period: "/month",
      features: [
        "Canvas Sync",
        "Auto Scheduling (Plan up to 4 weeks ahead)",
        "Full Personalization (energy levels, study methods, breaks, deadlines, etc)",
        "Instant, Unlimited Rescheduling",
        "Premium Support (faster responses + priority help)",
      ],
      buttonText: "Join Waitlist",
      highlighted: false,
    },
  ];

  return (
    <section
      className="min-h-screen w-full px-4 sm:px-6 md:px-8 flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ paddingTop: "5vh", paddingBottom: "5vh", backgroundImage: `url(${bgImage})` }}
    >
      <FadeInSection>
        <h2 className="mb-8 text-center text-3xl md:text-4xl font-inter font-bold">
          Our Pricing Plans
        </h2>
      </FadeInSection>
      <FadeInSection>
        <div className="flex-1 flex flex-col gap-6 md:flex-row md:justify-center md:items-stretch px-4 md:px-8 lg:px-20 xl:px-[20vh] pt-4 md:pt-[5vh]">
          {cards.map((card, index) => (
            <div key={index} className="flex-1 mb-6 md:mb-0">
              <PricingCard {...card} />
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default HeroSectionPricing;