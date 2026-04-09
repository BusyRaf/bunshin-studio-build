import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StackedDeck from "@/components/StackedDeck";
import { portfolioProjects } from "@/data/portfolioProjects";

const Portfolio = () => {
  const [stackOrder, setStackOrder] = useState(() => portfolioProjects.map((p) => p.id));

  const cycle = useCallback(() => {
    setStackOrder(([first, ...rest]) => [...rest, first]);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24 md:pt-32">
        <section className="container mx-auto px-6 max-w-4xl mb-14 md:mb-20">
          <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase text-center mb-4">Portfolio</p>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Engineering Excellence into Every Interface
          </h1>
          <p className="text-muted-foreground text-center font-sans max-w-3xl mx-auto leading-relaxed">
            Every Bunshin product is a result of passion, our commitment to excellence, and our desire to solve problems
            while improving functionality. Below is a selection of our work with brief descriptions of the infrastructure
            we delivered. We hope it inspires you to consider what is possible for you!
          </p>
        </section>

        <section className="container mx-auto px-6 pb-8">
          <StackedDeck projects={portfolioProjects} stackOrder={stackOrder} onCycle={cycle} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
