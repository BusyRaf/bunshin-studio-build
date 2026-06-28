import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
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
    subheading: "You have an idea",
    body: "An idea, a conviction, a thing that has to exist. You don't need a technical co-founder or a finished spec, just the will to build it. We take it from the sketch in your head to a launched web or mobile app. You own the vision; we're the build.",
  },
  {
    subheading: "You have a business that deserves an app",
    body: "A real, working business that wants the app it deserves: a booking app, an online store, a customer portal, a mobile app for your team. Not fixing something broken, giving something real its digital counterpart. You built it; we make it bigger.",
  },
];

function WhoWeWorkWith() {
  return (
    <section id="two-doors" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase text-center mb-4">Two ways in</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">You own the vision.<br className="hidden md:block" /> We&apos;re the build.</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
      <PortfolioHighlights />
      <WhoWeWorkWith />
      <Team />
      <LeadMagnet />
      <ValuePropositions />
      <TechnicalFAQ />
      <BottomCTA />
      <Footer />
    </div>
  );
}
