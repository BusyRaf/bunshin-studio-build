import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TechnicalFAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="font-mono text-sm text-primary tracking-[0.3em] uppercase mb-4 text-center">
          Technical FAQ
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          The questions founders actually ask.
        </h2>
        <p className="text-muted-foreground text-center mb-10 font-sans">
          Straight answers, no hand-waving. If you&apos;re betting your business on this stack, you
          deserve clarity.
        </p>

        <Accordion type="single" collapsible className="w-full glass rounded-lg px-4 md:px-6">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-mono text-sm text-secondary-foreground">
              &quot;Will this slow down my ability to ship?&quot;
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-sans">
              No. We give you back your &quot;superpower&quot; of fast shipping, but with a safety
              net.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="font-mono text-sm text-secondary-foreground">
              &quot;Do I own my code?&quot;
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-sans">
              Yes. You receive 100% ownership of your stack and undisputed ownership of your entire
              flow.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="font-mono text-sm text-secondary-foreground">
              &quot;Is my app secure?&quot;
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-sans">
              We ensure all libraries, front-end security, and profile information are protected
              against common and uncommon exploitations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="font-mono text-sm text-secondary-foreground">
              &quot;What if I scale later?&quot;
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-sans">
              We provide a repo and documentation that you can actually hand to a senior dev as your
              business grows.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default TechnicalFAQ;

