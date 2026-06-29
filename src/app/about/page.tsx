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
      <main className="pt-28 md:pt-32">
        <section className="container mx-auto px-6 max-w-4xl pb-12 border-b border-border">
          <p className="font-mono text-xs text-primary mb-5">// about</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-[-0.03em] mb-5 text-balance">
            {aboutIntro.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">{aboutIntro.description}</p>
        </section>

        <section className="container mx-auto px-6 max-w-4xl py-10 border-b border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyFacts.map((fact) => (
              <div key={fact.label}>
                <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider mb-1.5">{fact.label}</p>
                <p className="text-sm text-foreground font-medium leading-snug">{fact.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 max-w-4xl py-14 space-y-16">
          {principals.map((person) => (
            <article key={person.name}>
              <div className="mb-6">
                <h2 className="font-display text-3xl font-extrabold mb-1.5">{person.name}</h2>
                <p className="font-mono text-sm text-primary mb-4">{person.title}</p>
                <div className="flex flex-wrap gap-2">
                  {person.credentials.map((cred) => (
                    <span key={cred} className="font-mono text-[11px] text-muted-foreground border border-border rounded-md px-2.5 py-1">{cred}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-4 mb-8 max-w-2xl">
                {person.bio.map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-xl overflow-hidden">
                {person.highlights.map((h) => (
                  <div key={h.label} className="bg-background p-4">
                    <p className="font-mono text-[11px] text-muted-foreground mb-1">{h.label}</p>
                    <p className="text-xs font-medium text-foreground leading-snug">{h.value}</p>
                  </div>
                ))}
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
