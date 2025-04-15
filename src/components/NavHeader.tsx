"use client";

import React from "react";

export const NavigationHeader: React.FC = () => {
  return (
    <header className="flex overflow-hidden flex-col justify-center items-start px-16 py-4 max-w-full text-3xl leading-none text-teal-600 whitespace-nowrap bg-white bg-blend-normal shadow-[0px_8px_10px_rgba(0,0,0,0.03)] w-[1440px] max-md:px-5">
      <div className="flex gap-0.5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d13111606df3bf924441aba99b00dcddd73c8024?placeholderIfAbsent=true&apiKey=2b75df27c5484db98535b11b9db3c47c"
          className="object-contain shrink-0 w-10 aspect-[1.11]"
          alt="Tric logo"
        />
        <h1 className="my-auto">Tric</h1>
      </div>
    </header>
  );
};
