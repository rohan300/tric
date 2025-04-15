import React from "react";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection1";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
      </main>
    </div>
  );
};

export default App;