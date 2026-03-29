import { TrendingDown, Clock, AlertTriangle, Cpu, Phone } from "lucide-react";

const cards = [
  {
    icon: TrendingDown,
    title: "Administrative overhead",
    description: "Your administrative overhead is a drag on your P&L.",
  },
  {
    icon: Clock,
    title: "Delayed upgrades",
    description: "Your systems are outdated and upgrades are perpetually delayed.",
  },
  {
    icon: AlertTriangle,
    title: "Technical debt",
    description: "Platform technical debt is growing apparent.",
  },
  {
    icon: Cpu,
    title: "Underperforming stack",
    description: "Your current software stack is not performing to your needs.",
  },
  {
    icon: Phone,
    title: "You need a partner",
    description: "You need a partner you can call.",
  },
];

const ValueCards = () => {
  return (
    <section id="problem" className="py-24 md:py-32 border-t border-accent-purple/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 max-w-3xl mx-auto">
          Your Software Is Either Your Edge or a Liability.
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 font-sans">
          If any of this sounds familiar, we should talk:
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
