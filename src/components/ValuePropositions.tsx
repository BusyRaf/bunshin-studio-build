import { Compass, PenLine, Hammer, Rocket } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "1. Tell us what you're building",
    description:
      "It starts with a conversation, not paperwork. You tell us what you're making, why it has to exist, and what launched looks like. We tell you honestly whether we're the right team to build it. No pressure, no sales call.",
  },
  {
    icon: PenLine,
    title: "2. We scope it together",
    description:
      "We map out what the product needs to be: the features, the shape, what done means. You approve the plan before anything gets built. You own the vision the whole way; we make sure the plan matches it.",
  },
  {
    icon: Hammer,
    title: "3. We build it",
    description:
      "Two senior builders, no hand-offs, working software at every step. We use AI to move fast, but what you own is deterministic, hard-coded software with no AI dependency in your stack. You watch it come together, not a status call once a month.",
  },
  {
    icon: Rocket,
    title: "4. We launch it",
    description:
      "We take it all the way to live, on the web or in the app store, in front of real people. You own the product and the code. Where it goes next is your call.",
  },
];

const ValuePropositions = () => {
  return (
    <section id="how-we-work" className="py-24 md:py-32 border-t border-accent-purple/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How a build works</h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.title}
              className="glass rounded-lg p-8 group hover:border-glow transition-all duration-500 flex flex-col"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:cyan-glow-sm transition-all duration-500">
                <step.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-mono text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-sans">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;
