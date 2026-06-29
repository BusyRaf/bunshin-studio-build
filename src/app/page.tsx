import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioHighlights from "@/components/PortfolioHighlights";
import Team from "@/components/Team";
import LeadMagnet from "@/components/LeadMagnet";
import ValuePropositions from "@/components/ValuePropositions";
import TechnicalFAQ from "@/components/TechnicalFAQ";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";
import { routeMetadata } from "@/data/seo";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = routeMetadata["/"];

function TwoDoors() {
  return (
    <section id="two-doors" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          You own the vision. We&apos;re the build.
        </h2>
        <div className="grid md:grid-cols-2 border-y border-border max-w-5xl mx-auto">
          <div className="p-10 md:p-14 md:border-r border-border">
            <p className="font-mono text-xs text-primary mb-4">// you have an idea</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 max-w-[14ch]">
              From the top of your head into reality.
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              No technical co-founder, no finished spec. Just the will to build it. We take it from a sketch to a launched web or mobile app.
            </p>
            <Link href="/services/greenfield" className="font-semibold text-primary hover:underline underline-offset-4">
              Greenfield builds →
            </Link>
          </div>
          <div className="p-10 md:p-14 border-t md:border-t-0 border-border">
            <p className="font-mono text-xs text-primary mb-4">// you have a business</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 max-w-[14ch]">
              The custom app your business deserves.
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              A booking app, an online store, a customer portal. We build around how your business actually runs.
            </p>
            <Link href="/services/for-your-business" className="font-semibold text-primary hover:underline underline-offset-4">
              A digital counterpart →
            </Link>
          </div>
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
      <TwoDoors />
      <Team />
      <LeadMagnet />
      <ValuePropositions />
      <TechnicalFAQ />
      <BottomCTA />
      <Footer />
    </div>
  );
}
