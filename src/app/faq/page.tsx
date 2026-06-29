import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";
import { routeMetadata } from "@/data/seo";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = routeMetadata["/faq"];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="pt-28 pb-24 md:pt-32">
        <section className="container mx-auto px-6 max-w-3xl mb-12 pb-10 border-b border-border">
          <p className="font-mono text-xs text-primary mb-5">// questions</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-[-0.03em] mb-5 text-balance">Building an app with Bunshin</h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            The questions builders actually ask us. If yours isn&apos;t here, just ask.
          </p>
        </section>

        <section className="container mx-auto px-6 max-w-3xl">
          {faqItems.map((item) => (
            <div key={item.id} className="border-b border-border py-7">
              <h2 className="font-display text-xl font-bold mb-2.5">{item.question}</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">{item.answer}</p>
            </div>
          ))}
        </section>
      </main>
      <BottomCTA />
      <Footer />
    </div>
  );
}
