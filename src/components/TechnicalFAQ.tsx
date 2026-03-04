import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question:
      "I prompted for security during development—isn't my app already protected?",
    answer:
      "Prompting an AI for security is a start, but it isn't a substitute for rigorous engineering. History is full of vibe-coded applications that scaled quickly only to fall to basic exploits, leaving founders to navigate complex, regulated breach responses. We move beyond prompts to ensure your architecture is structurally sound and compliant.",
  },
  {
    id: "item-2",
    question: "Will I be locked into this version, or can I continue to build later?",
    answer:
      "We don't just hand over a black box. We deliver clean, refactored code designed for longevity. By providing comprehensive documentation, dependency mapping, and architectural walkthroughs, we ensure that future developers—or AI agents—can step in and understand exactly how the system functions.",
  },
  {
    id: "item-3",
    question: "Who owns the intellectual property and the final codebase?",
    answer:
      "You do—100%. Our mission is to empower founders, not gatekeep their assets. At turnover, we provide a full map of all internal and external dependencies. When we finish, you are in the driver's seat with full legal and technical ownership of your IP.",
  },
  {
    id: "item-4",
    question: "How do we move from finished code to a live product?",
    answer:
      "We handle the Last Mile of development. Shipping is often where founders get stuck in review cycles or configuration errors. We use established processes and deep experience with major app stores and cloud providers to navigate the bureaucracy for you.",
  },
];

const TechnicalFAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-8">
          Frequently Asked Questions
        </h2>

        <div
          className="relative rounded-xl p-[1px] shadow-[0_0_32px_rgba(59,130,246,0.12)]"
          style={{ background: "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)" }}
        >
          <div className="rounded-xl bg-background/70 backdrop-blur-xl px-4 py-2 md:px-6">
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

