"use client";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
import Logo from "../assets/Tric Logo.svg";
import FadeInSection from "../components/FadeInSection";

const Footer: React.FC = () => {
  return (
    <FadeInSection>
    <footer className="flex flex-col items-center justify-center px-5 py-12 w-full bg-[#200C00]">
      {/* Logo and Brand */}
      <div className="flex gap-2.5 items-center">
        <img src={Logo} alt="Tric logo" className="h-10 w-auto" />
      </div>
      {/* Copyright */}
      <div className="flex items-center text-lg font-inter font-medium leading-10 text-[#CCCCCC]">
        <FaRegCopyright className="mr-1" />
        2025 Tric Technologies, Inc. All rights reserved.
      </div>
      {/* Social Media Icons */}
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/company/tricedtech" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="text-[#FFE2D2] text-xl hover:text-teal-600 transition-colors" />
        </a>
        <a href="https://www.instagram.com/tric.education/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-[#FFE2D2] text-xl hover:text-teal-600 transition-colors" />
        </a>
      </div>
    </footer>
    </FadeInSection>
  );
};

export default Footer;
