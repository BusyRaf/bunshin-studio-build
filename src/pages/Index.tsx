import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BunshinBuild from "@/components/BunshinBuild";
import ValueCards from "@/components/ValueCards";
import ValuePropositions from "@/components/ValuePropositions";
import LeadMagnet from "@/components/LeadMagnet";
import TechnicalFAQ from "@/components/TechnicalFAQ";
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
      <BunshinBuild />
      <ValueCards />
      <ValuePropositions />
      <LeadMagnet />
      <TechnicalFAQ />
      <Footer />
    </div>
  );
};

export default Index;
