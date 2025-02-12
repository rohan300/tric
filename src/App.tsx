import Hero from "./Hero-Section";
import FeaturesCarousel from "./Features";
import WaitlistSection from "./Waitlist";

export default function LandingPage() {
  return (
    <div className="bg-[#FAF7FA]">
      <Hero />
      <FeaturesCarousel />
      <WaitlistSection />
    </div>
  );
}
