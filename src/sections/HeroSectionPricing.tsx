"use client";
import React from "react";
import PricingCard, { PricingCardProps } from "../components/PricingCard";
import R from "../assets/react.svg";
import FadeInSection from "../components/FadeInSection";

const HeroSectionPricing: React.FC = () => {
  const cards: PricingCardProps[] = [
    {
      iconSrc: R,
      headerSubtitle: "For students who just want the essentials",
      headerTitle: "CORE",
      description: "Perfect for staying organized with minimal setup.",
      price: "$3.99",
      period: "/monthly",
      features: [
        "Canvas Sync",
        "Auto Scheduling (Plan up to 2 weeks ahead)",
        "Basic Personalization (working hrs + difficulty)",
      ],
      buttonText: "Get started",
      highlighted: false,
    },
    {
      iconSrc: R,
      headerSubtitle: "For students who want a smarter, more flexible schedule",
      headerTitle: "PLUS",
      description: "Great for busy weeks when things don't always go as planned.",
      price: "$6.99",
      period: "/monthly",
      features: [
        "Canvas Sync",
        "Auto Scheduling (Plan up to 3 weeks ahead)",
        "Limited Auto Rescheduling (minor changes, major help)",
      ],
      buttonText: "Get started",
      highlighted: true,
    },
    {
      iconSrc: R,
      headerSubtitle: "For students who want full control and zero stress",
      headerTitle: "PRO",
      description:
        "Ideal for students juggling packed schedules and ambitious goals.",
      price: "$9.99",
      period: "/monthly",
      features: [
        "Canvas Sync",
        "Auto Scheduling (Plan up to 4 weeks ahead)",
        "Full Personalization (energy levels, study methods, breaks, deadlines, etc)",
        "Instant, Unlimited Rescheduling",
        "Premium Support (faster responses + priority help)",
      ],
      buttonText: "Get started",
      highlighted: false,
    },
  ];

  return (
    <section
      className="h-[90vh] w-full px-[5vh] sm:px-6 md:px-8 flex flex-col"
      style={{ paddingTop: "5vh", paddingBottom: "5vh" }}
    >
      <FadeInSection>
        <h2 className="mb-8 text-center text-3xl font-bold">
          Our Pricing Plans
        </h2>
      </FadeInSection>
      {/* Disable transform animation to avoid extra spacing */}
      <FadeInSection>
        <div className="flex-1 flex flex-col gap-6 md:flex-row md:justify-center md:items-stretch px-[20vh] pt-[5vh]">
          {cards.map((card, index) => (
            <div key={index} className="flex-1">
              <PricingCard {...card} />
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default HeroSectionPricing;
