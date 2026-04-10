"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "What industries have you worked in?",
    answer:
      "Healthcare, nuclear energy, maritime security, cryptocurrency, and military applications. We're comfortable operating in high-stakes, highly regulated environments — and we bring that same discipline to every engagement regardless of industry.",
  },
  {
    id: "item-2",
    question: "How do you work alongside existing internal teams?",
    answer:
      "We start by meeting with your team to understand internal boundaries, define roles, gather documentation, and elicit requirements. We integrate without disrupting — your team stays focused on what they do best while we handle what you need us to.",
  },
  {
    id: "item-3",
    question: "How do you manage scope, timeline, and budget on complex projects?",
    answer:
      "With rigor. We use tools like Jira and Confluence alongside PMI methodologies and Earned Value Management to ensure every task has an owner, a timeline, a budget, and clearly defined requirements and outcomes. Nothing falls through the cracks.",
  },
  {
    id: "item-4",
    question: "What makes Bunshin different from a larger agency or consultancy?",
    answer:
      "We operate with a sense of urgency and ownership that larger firms can't replicate. At Bunshin, time is not the differentiator — leadership, initiative, and hard work are. That's what separates excellent outcomes from mediocre ones, and it's the standard we hold ourselves to on every project.",
  },
  {
    id: "item-5",
    question: "How do you handle compliance and data security requirements?",
    answer:
      "Built in from the start, not added afterward. We have hands-on experience with HIPAA, GDPR, and security requirements across some of the most sensitive environments in the world. Compliance isn't a checklist for us — it's a baseline.",
  },
];

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
