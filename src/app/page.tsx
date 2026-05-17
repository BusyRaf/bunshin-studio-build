import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BunshinBuild from "@/components/BunshinBuild";
import ValueCards from "@/components/ValueCards";
import ValuePropositions from "@/components/ValuePropositions";
import PortfolioHighlights from "@/components/PortfolioHighlights";
import LeadMagnet from "@/components/LeadMagnet";
import TechnicalFAQ from "@/components/TechnicalFAQ";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";
import { routeMetadata } from "@/data/seo";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = routeMetadata["/"];

const personas = [
  {
    subheading: "Healthcare & Medical Practices",
    body: "Your operation runs on compliance, precision, and trust — and your software should hold that same standard. Whether it is a patient intake workflow that has become a liability, a billing process hemorrhaging staff hours, or an EHR integration that never quite worked the way it was sold to you, these are not IT problems. They are practice problems. Once Bunshin is on the job, it is our problem — and we have worked alongside the systems and the stakes that healthcare environments actually run on.",
  },
  {
    subheading: "Defense & Maritime Contractors",
    body: "You are working in regulated, audited environments where documentation is not optional and a missed requirement does not get a do-over. You need an engineering partner who already understands what it means to operate at that standard — not one you have to train. Rafael's background in multinational naval operations and Jose's work in critical infrastructure means we do not need the stakes explained to us.",
  },
  {
    subheading: "Growing Regional Businesses",
    body: "You built something real, and now the systems you built it on are slowing you down. Hiring in-house feels premature. Bring us the vision that has been sitting in your head. We will tell you exactly what it takes — and then we will build it.",
  },
];

function WhoWeWorkWith() {
  return (
    <section id="who-we-work-with" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase text-center mb-4">Who We Work With</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">The Problem Usually Comes<br className="hidden md:block" /> Before the Phone Call.</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {personas.map((persona) => (
            <div key={persona.subheading} className="glass rounded-xl p-6 border border-border hover:border-glow transition-all duration-500">
              <p className="font-mono text-sm text-primary mb-2">{persona.subheading}</p>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">{persona.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <Hero />
      <ValueCards />
      <WhoWeWorkWith />
      <PortfolioHighlights />
      <BunshinBuild />
      <ValuePropositions />
      <LeadMagnet />
      <TechnicalFAQ />
      <BottomCTA />
      <Footer />
    </div>
  );
}
