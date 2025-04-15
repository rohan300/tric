"use client";
import React from "react";
import orangeCheck from "../assets/orangeCheck.svg";
import whiteCheck from "../assets/whiteCheck.svg";

export interface PricingCardProps {
  iconSrc?: string;
  iconAlt?: string;
  headerSubtitle: string;
  headerTitle: string;
  description?: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  iconSrc,
  iconAlt = "Plan Icon",
  headerSubtitle,
  headerTitle,
  description,
  price,
  period,
  features,
  buttonText,
  highlighted = false,
}) => {
  // For non-highlighted (white card) we want a white check on an orange circle,
  // while for highlighted (orange card) we want an orange check on a white circle.
  const checkIconSrc = highlighted ? orangeCheck : whiteCheck;

  // Overall card styling.
  const cardBg = highlighted ? "bg-orange-400" : "bg-white";
  const cardText = highlighted ? "text-white" : "text-gray-900";
  // Button uses inverse styling.
  const buttonBg = highlighted ? "bg-white" : "bg-orange-400";
  const buttonTextColor = highlighted ? "text-orange-400" : "text-white";

  return (
    <article
      className={`flex flex-col h-full p-6 rounded-3xl border border-gray-200 shadow-sm ${cardBg} ${cardText} w-full`}
    >
      {/* Header: Icon and header text */}
      <header className="flex items-center gap-4">
        {iconSrc ? (
          <img
            src={iconSrc}
            alt={iconAlt}
            className="w-16 h-16 object-contain rounded-full"
          />
        ) : (
          <div className="w-16 h-16 bg-gray-300 rounded-full" />
        )}
        <div className="flex flex-col">
          <p className="text-sm font-medium">{headerSubtitle}</p>
          <h2 className="text-2xl font-bold">{headerTitle}</h2>
        </div>
      </header>

      {/* Optional description */}
      {description && (
        <p className="mt-4 text-base">
          {description}
        </p>
      )}

      {/* Content container that stretches to fill available space */}
      <div className="flex flex-col flex-1 justify-between mt-6">
        <div>
          {/* Price Section */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-5xl font-bold">{price}</span>
            <span className="text-xl font-medium">{period}</span>
          </div>

          {/* Features List */}
          <h3 className="mt-6 text-lg font-semibold">What's included</h3>
          <ul className="mt-4 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6">
                  <img
                    src={checkIconSrc}
                    alt="Check icon"
                    className="w-4 h-4"
                  />
                </div>
                <span className="text-base whitespace-pre-line">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* Call-to-action Button */}
        <button
          className={`mt-6 py-2 px-4 w-full rounded-full font-bold transition-colors duration-200 ${buttonBg} ${buttonTextColor}`}
        >
          {buttonText}
        </button>
      </div>
    </article>
  );
};

export default PricingCard;
