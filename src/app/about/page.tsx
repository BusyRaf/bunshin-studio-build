import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";
import { routeMetadata } from "@/data/seo";
import { aboutIntro, companyFacts, principals } from "@/data/about";

export const metadata: Metadata = routeMetadata["/about"];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24 md:pt-32">
        {/* Hero */}
        <section className="container mx-auto px-6 max-w-4xl mb-16 md:mb-20">
          <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase text-center mb-4">{aboutIntro.eyebrow}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">{aboutIntro.title}</h1>
          <p className="text-muted-foreground text-center font-sans max-w-2xl mx-auto leading-relaxed">{aboutIntro.description}</p>
        </section>

        {/* Company facts */}
        <section className="container mx-auto px-6 max-w-4xl mb-16">
          <div className="glass rounded-xl p-6 md:p-8 border border-border">
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {companyFacts.map((fact) => (
                <div key={fact.label}>
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{fact.label}</p>
                  <p className="font-mono text-sm text-foreground font-semibold">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principals */}
        <section className="container mx-auto px-6 max-w-4xl space-y-10">
          {principals.map((person) => (
            <article key={person.name} className="glass rounded-xl p-8 md:p-10 border border-border hover:border-glow transition-all duration-500">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-1">{person.name}</h2>
                <p className="font-mono text-sm text-primary mb-3">{person.title}</p>
                <div className="flex flex-wrap gap-2">
                  {person.credentials.map((cred) => (
                    <span key={cred} className="font-mono text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">{cred}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {person.bio.map((para, i) => (
                  <p key={i} className="text-muted-foreground font-sans leading-relaxed text-sm md:text-base">{para}</p>
                ))}
              </div>

              <div className="border-t border-border pt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {person.highlights.map((h) => (
                    <div key={h.label} className="glass rounded-lg p-3 border border-border/60">
                      <p className="font-mono text-xs text-muted-foreground mb-1">{h.label}</p>
                      <p className="font-mono text-xs font-semibold text-foreground leading-snug">{h.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <BottomCTA />
      <Footer />
    </div>
  );
}
