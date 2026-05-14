import { TrendingDown, Clock, AlertTriangle, Cpu } from "lucide-react";

const cards = [
  {
    icon: TrendingDown,
    title: "Manual Processes Eating Margin",
    description:
      "You already know which tasks your team is doing by hand that a system should be handling. The cost is not just time — it is errors, delays, and the ceiling it puts on how much your operation can actually grow. That ceiling is removable.",
  },
  {
    icon: Clock,
    title: "Systems You've Outgrown",
    description:
      "The software that got you here was the right call when you made it. But your volume changed, your staff changed, your requirements changed — and now the system is working against you instead of for you. Starting over does not have to mean starting blind.",
  },
  {
    icon: AlertTriangle,
    title: "Technical Debt You Can See",
    description:
      "When your own team says \"we've been meaning to fix that,\" you're already paying for it — in slower releases, fragile integrations, and the quiet dread every time something touches that part of the codebase. The debt is visible. So is the path out.",
  },
  {
    icon: Cpu,
    title: "Software That Can't Keep Up",
    description:
      "The platform made sense at launch. Now it buckles under load, misfires in edge cases, or simply cannot do the things your business has started needing it to do. Performance problems do not resolve themselves — they compound.",
  },
];

const ValueCards = () => {
  return (
    <section id="problem" className="py-24 md:py-32 border-t border-accent-purple/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 max-w-3xl mx-auto">
          Your Software Is Either Your Edge or a Liability.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
