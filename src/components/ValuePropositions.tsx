import { Compass, PenLine, Hammer, Rocket } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "1. Discovery",
    description: "Before any scope document, any estimate, any line of code — we listen. We want to know who you are, when this idea first came to you, what it has already cost you to not have it solved, and what you would consider a real win.",
  },
  {
    icon: PenLine,
    title: "2. Scope & Design",
    description: "You receive a written scope document and a fixed price before development begins. What gets built, what it costs, what done looks like — defined and approved by you before we touch the codebase.",
  },
  {
    icon: Hammer,
    title: "3. Build",
    description: "We ship in iterations with your input at each stage. You see working software early. Nothing gets built in a black box for six months and handed over.",
  },
  {
    icon: Rocket,
    title: "4. Launch & Ongoing",
    description: "We stay engaged after launch. If something breaks, you call us — not a support ticket queue.",
  },
];

const ValuePropositions = () => {
  return (
    <section id="how-we-work" className="py-24 md:py-32 border-t border-accent-purple/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">The Engagement</h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto items-start">
          {steps.map((step) => (
            <div
              key={step.title}
              className="glass rounded-lg p-8 group hover:border-glow transition-all duration-500"
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
