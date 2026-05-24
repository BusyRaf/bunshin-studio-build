"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";

const TechnicalFAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32 border-t border-accent-purple/20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div
          className="relative rounded-xl p-[1px] shadow-[0_0_32px_rgba(59,130,246,0.12)]"
          style={{ background: "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)" }}
        >
          <div className="rounded-xl bg-background/70 backdrop-blur-xl px-4 py-4 md:px-6 md:py-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="rounded-lg px-3 py-1 transition-colors duration-200 [&:has([data-state=open])]:bg-primary/5"
                >
                  <AccordionTrigger className="flex items-start font-mono text-sm text-secondary-foreground hover:no-underline py-5 text-left [&[data-state=open]>svg]:rotate-180">
                    <span className="flex-1">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-sans pl-[52px] md:pl-14">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalFAQ;
