import Link from "next/link";
import { faqItems } from "@/data/faq";

const HOMEPAGE_FAQ = ["idea-no-cofounder", "cost", "ownership", "who-builds"];

const TechnicalFAQ = () => {
  const items = faqItems.filter((i) => HOMEPAGE_FAQ.includes(i.id));
  return (
    <section id="faq" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-[0.8fr_1.6fr] gap-10 md:gap-14 items-start">
        <div className="md:sticky md:top-28">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Questions builders ask</h2>
          <Link href="/faq" className="font-semibold text-primary hover:underline underline-offset-4">
            See every question →
          </Link>
        </div>
        <div className="border-t border-border">
          {items.map((item) => (
            <div key={item.id} className="border-b border-border py-7">
              <h3 className="font-display text-xl font-bold mb-2.5">{item.question}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalFAQ;
