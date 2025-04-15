"use client";

import React, { useState } from "react";
import { AnnouncementBanner } from "./WaitlistBanner";
import { NavigationHeader } from "./NavHeader";

const Header: React.FC = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const handleCloseAnnouncement = () => {
    setShowAnnouncement(false);
  };

  return (
    <div>
      {showAnnouncement && (
        <AnnouncementBanner onClose={handleCloseAnnouncement} />
      )}
      <NavigationHeader />
    </div>
  );
};

export default Header;
