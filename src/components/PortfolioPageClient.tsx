"use client";

import { useCallback, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StackedDeck from "@/components/StackedDeck";
import { portfolioIntro, portfolioProjects } from "@/data/portfolio";

export default function PortfolioPageClient() {
  const [stackOrder, setStackOrder] = useState(() => portfolioProjects.map((p) => p.id));

  const cycle = useCallback(() => {
    setStackOrder(([first, ...rest]) => [...rest, first]);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24 md:pt-32">
        <section className="container mx-auto px-6 max-w-4xl mb-14 md:mb-20">
          <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase text-center mb-4">{portfolioIntro.eyebrow}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">{portfolioIntro.title}</h1>
          <p className="text-muted-foreground text-center font-sans max-w-3xl mx-auto leading-relaxed">{portfolioIntro.description}</p>
        </section>
        <section className="container mx-auto px-6 pb-8">
          <StackedDeck projects={portfolioProjects} stackOrder={stackOrder} onCycle={cycle} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
