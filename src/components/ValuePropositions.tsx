import { Compass, PenLine, Hammer, Rocket } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "1. Discovery",
    description: "We learn about your problem and brainstorm solutions together.",
  },
  {
    icon: PenLine,
    title: "2. Feasibility & Design",
    description:
      "We assess what's possible, identify the right approach, and present your options clearly.",
  },
  {
    icon: Hammer,
    title: "3. Build",
    description:
      "We develop your solution using Agile methodologies with your input at every stage — no black boxes, no surprises at the finish line.",
  },
  {
    icon: Rocket,
    title: "4. Launch & Beyond",
    description:
      "Deployment is the beginning of the relationship, not the end. We stay available as a real team you can reach.",
  },
];

const ValuePropositions = () => {
  return (
    <section id="how-we-work" className="py-24 md:py-32 border-t border-accent-purple/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How We Work</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 font-sans">
          Straightforward Process. No Surprises.
        </p>

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
