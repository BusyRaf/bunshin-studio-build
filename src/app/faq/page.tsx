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
        <section className="container mx-auto px-6 max-w-3xl mb-12 text-center">
          <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-4">Questions</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Building an app with Bunshin</h1>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
            The questions builders actually ask us. If yours isn&apos;t here, just ask.
          </p>
        </section>

        <section className="container mx-auto px-6 max-w-3xl space-y-6">
          {faqItems.map((item) => (
            <div key={item.id} className="glass rounded-xl p-6 md:p-8 border border-border">
              <h2 className="font-semibold text-lg mb-3">{item.question}</h2>
              <p className="text-muted-foreground font-sans leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </section>
      </main>
      <BottomCTA />
      <Footer />
    </div>
  );
}
