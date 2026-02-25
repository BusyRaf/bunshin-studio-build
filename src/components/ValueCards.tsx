import { Layers, Cpu, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: Layers,
    title: "Full Lifecycle Management",
    description:
      "We don't just stop at a demo. Our team supports the seamless Ideate-Build-Deploy-Support cycle.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Efficiency",
    description:
      "We leverage modern, AI-accelerated engineering workflows to reduce development time without compromising quality.",
  },
  {
    icon: ShieldCheck,
    title: "Production-Grade Uptime",
    description:
      "AI breaks things. We fix them. Expert human oversight to ensure 99.9% reliability.",
  },
];

const ValueCards = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <p className="font-mono text-sm text-primary tracking-[0.3em] uppercase text-center mb-4">
          What We Deliver
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Built for the Real World
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="glass rounded-lg p-8 group hover:border-glow transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:cyan-glow-sm transition-all duration-500">
                <card.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-mono text-lg font-semibold mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-sans">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueCards;
