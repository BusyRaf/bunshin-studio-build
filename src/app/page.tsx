import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BunshinBuild from "@/components/BunshinBuild";
import ValueCards from "@/components/ValueCards";
import ValuePropositions from "@/components/ValuePropositions";
import LeadMagnet from "@/components/LeadMagnet";
import TechnicalFAQ from "@/components/TechnicalFAQ";
import Footer from "@/components/Footer";
import { routeMetadata } from "@/data/seo";

export const metadata: Metadata = routeMetadata["/"];

export default function HomePage() {
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
}
