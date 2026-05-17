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
        <section className="container mx-auto px-6 max-w-4xl mb-16 md:mb-20">
          <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase text-center mb-4">{servicesIntro.eyebrow}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">{servicesIntro.title}</h1>
          <p className="text-muted-foreground text-center font-sans max-w-2xl mx-auto leading-relaxed">{servicesIntro.description}</p>
        </section>

        <section className="container mx-auto px-6 max-w-4xl space-y-10 md:space-y-14 pb-8">
          {serviceLines.map((line) => {
            const entryPoint = line.pricing[0];
            const tiers = line.pricing.slice(1);
            return (
              <article key={line.id} className="glass rounded-xl border border-border hover:border-glow transition-all duration-500 overflow-hidden">
                <div className="p-8 md:p-10">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 leading-snug">{line.title}</h2>
                  <p className="text-muted-foreground font-sans leading-relaxed mb-6">{line.intro}</p>
                  <ul className="space-y-2 mb-8">
                    {line.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-sm text-muted-foreground font-sans">
                        <span className="text-primary font-mono mt-0.5 shrink-0">→</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-border pt-6 space-y-6">
                    {/* Featured entry point */}
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 md:p-5">
                      <p className="font-mono text-xs text-primary tracking-[0.25em] uppercase mb-2">Start here</p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <p className="font-mono font-semibold text-foreground text-sm">{entryPoint.engagement}</p>
                          <p className="text-muted-foreground text-xs font-sans mt-0.5">{entryPoint.scope}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <p className="font-mono text-sm text-primary font-semibold whitespace-nowrap">{entryPoint.range}</p>
                          <Link href="/contact" className="font-mono text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded hover:bg-accent-purple transition-colors duration-300 whitespace-nowrap shrink-0">
                            Get started →
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Remaining tiers */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <p className="font-mono text-xs text-muted-foreground tracking-[0.25em] uppercase">Engagement Options</p>
                        <Link href={`/services/${line.id}`} className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-300">
                          Full details →
                        </Link>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm font-sans border-collapse">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left font-mono text-xs text-muted-foreground pb-2 pr-4 w-1/3">Engagement</th>
                              <th className="text-left font-mono text-xs text-muted-foreground pb-2 pr-4 w-1/3">Scope</th>
                              <th className="text-left font-mono text-xs text-muted-foreground pb-2">Pricing</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tiers.map((tier) => (
                              <tr key={tier.engagement} className="border-b border-border/40 last:border-0">
                                <td className="py-3 pr-4 font-mono font-semibold text-foreground text-xs">{tier.engagement}</td>
                                <td className="py-3 pr-4 text-muted-foreground text-xs leading-relaxed">{tier.scope}</td>
                                <td className="py-3 text-foreground font-mono text-xs whitespace-nowrap">{tier.range}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </main>
      <BottomCTA />
      <Footer />
    </div>
  );
}
