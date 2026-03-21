import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "How does this work if I've never met you?",
    answer:
      "Leave your info on our contact page and we'll reach out within one business day. If your business is in our area and there's a spot available in our current cohort, we'll schedule a time to come show you what we've put together — no commitment required.",
  },
  {
    id: "item-2",
    question: "I already have a website. Why would I need this?",
    answer:
      "Most small business websites were built to exist, not to perform. If your site isn't showing up on Google, doesn't look right on a phone, or you can't remember the last time it was updated — it's costing you customers. We'll show you exactly what a modern site looks like for your business, side by side with what you have today.",
  },
  {
    id: "item-3",
    question: "What happens if I don't like what you built?",
    answer:
      "You tell us on the spot. We annotate every change you want before we leave, and the final site reflects your feedback. You don't pay the remaining balance until you've reviewed and approved the finished product.",
  },
  {
    id: "item-4",
    question: "Do I own my website when it's done?",
    answer:
      "100%. The code, the domain, the content — all yours. If you ever cancel your monthly support plan, we hand everything over immediately. No hostage websites.",
  },
  {
    id: "item-5",
    question: "What does the $50/month actually get me?",
    answer:
      "It gets you the R2D2 system — Request, Develop, Review, Deploy. Text or email us a change, we build it same day, you approve it from your phone, it goes live. No developer hunting, no invoices for every small update, no waiting. Minor changes, handled fast, for a flat monthly rate.",
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">
              Frequently Asked Questions
            </h2>
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

