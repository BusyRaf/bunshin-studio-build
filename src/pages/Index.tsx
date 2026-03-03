import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ValueCards";
import BunshinBuild from "@/components/BunshinBuild";
import ValuePropositions from "@/components/ValuePropositions";
import TechnicalFAQ from "@/components/TechnicalFAQ";
import LeadMagnet from "@/components/LeadMagnet";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 0);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProblemSection />
      <BunshinBuild />
      <ValuePropositions />
      <LeadMagnet />
      <TechnicalFAQ />
      <Footer />
    </div>
  );
};

export default Index;
