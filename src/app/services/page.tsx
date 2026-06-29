import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";
import { routeMetadata } from "@/data/seo";
import { serviceLines, servicesIntro } from "@/data/services";

export const metadata: Metadata = routeMetadata["/services"];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24 md:pt-32">
        <section className="container mx-auto px-6 max-w-3xl mb-16 md:mb-20 text-center">
          <p className="font-mono text-xs text-primary mb-4">// {servicesIntro.eyebrow.toLowerCase()}</p>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.03em] mb-6">{servicesIntro.title}</h1>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">{servicesIntro.description}</p>
        </section>

        <section className="container mx-auto px-6 max-w-4xl grid md:grid-cols-2 gap-6">
          {serviceLines.map((line) => (
            <Link
              key={line.id}
              href={`/services/${line.id}`}
              className="rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 flex flex-col group"
            >
              <p className="font-mono text-xs text-primary mb-3">// {line.eyebrow.toLowerCase()}</p>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                {line.title}
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed text-sm flex-1">{line.intro}</p>
              <p className="font-mono text-xs text-primary mt-6 tracking-wide">See how it works →</p>
            </Link>
          ))}
        </section>
      </main>
      <BottomCTA />
      <Footer />
    </div>
  );
}
