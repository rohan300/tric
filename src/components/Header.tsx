"use client";

import React, { useState } from "react";
import { AnnouncementBanner } from "./WaitlistBanner";
import { NavigationHeader } from "./NavHeader";

const Header: React.FC = () => {
  return (
    <div>
      <AnnouncementBanner />
      <NavigationHeader />
    </div>
  );
};

export default Header;
