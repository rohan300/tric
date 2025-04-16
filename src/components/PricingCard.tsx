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

  // Text styling
  const headerSubtitleText = highlighted ? "text-[#EFF0F6]" : "text-[#6F6C90]";
  const headerTitleText = highlighted ? "text-white" : "text-[#170F49]";
  const descriptionText = highlighted ? "text-[#EFF0F6]" : "text-[#6F6C90]";
  const priceText = highlighted ? "text-white" : "text-[#170F49]";
  const periodText = highlighted ? "text-[#D9DBE9]" : "text-[#6F6C90]";
  const featuresText = highlighted ? "text-white" : "text-[#170F49]";

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
          <p className={`${headerSubtitleText} font-inter font-medium`}>{headerSubtitle}</p>
          <h2 className={`text-2xl ${headerTitleText} font-inter font-bold`}>{headerTitle}</h2>
        </div>
      </header>

      {/* Optional description */}
      {description && (
        <p className={`mt-4 text-dm-sans ${descriptionText}`}>
          {description}
        </p>
      )}

      {/* Content container that stretches to fill available space */}
      <div className="flex flex-col flex-1 justify-between mt-6">
        <div>
          {/* Price Section */}
          <div className="flex items-center justify-center gap-2">
            <span className={`text-5xl font-dm-sans font-bold ${priceText}`}>{price}</span>
            <span className={`text-xl font-dm-sans font-medium ${periodText}`}>{period}</span>
          </div>

          {/* Features List */}
          <h3 className={`mt-6 text-lg font-dm-sans ${featuresText}`}>What's included</h3>
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
                <span className={`text-base whitespace-pre-line font-dm-sans font-bold ${featuresText}`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* Call-to-action Button */}
        <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSf1yiqVtS02hOy3sRtXTdhsWcKsKzS5clDJTA9Hfw1rdOw3cw/viewform">
        <button
          className={`mt-6 py-2 px-4 w-full rounded-full font-dm-sans font-bold ${buttonBg} ${buttonTextColor}`}
        >
          {buttonText}
        </button>
        </a>
      </div>
    </article>
  );
};

export default PricingCard;
