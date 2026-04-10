import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { routeMetadata } from "@/data/seo";
import { serviceSections, servicesIntro } from "@/data/services";

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
          {serviceSections.map((section) => (
            <article key={section.title} className="glass rounded-xl p-8 md:p-10 border border-border hover:border-glow transition-all duration-500">
              <h2 className="text-xl md:text-2xl font-bold mb-4 leading-snug">{section.title}</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">{section.intro}</p>
              <ul className="list-none space-y-4 p-0 m-0">
                {section.items.map((item) => (
                  <li key={item.heading} className="text-sm md:text-[15px] font-sans leading-relaxed text-muted-foreground">
                    <span className="font-mono font-semibold text-foreground">{item.heading}:</span> {item.body}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
