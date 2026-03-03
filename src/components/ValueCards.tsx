import { RefreshCw, AlertTriangle, ShieldAlert } from "lucide-react";

const cards = [
  {
    icon: RefreshCw,
    title: "The Prompt Loop",
    description:
      "End 8-hour sessions of fixing code by restoring context so the AI actually understands your app again.",
  },
  {
    icon: AlertTriangle,
    title: "Deployment Dread",
    description:
      "Stop worrying that your app will break in unexpected ways once it’s in users' hands.",
  },
  {
    icon: ShieldAlert,
    title: "Security Gaps",
    description:
      "Close flaws beyond your comprehension to protect yourself from legal liability and data leaks.",
  },
];

const ValueCards = () => {
  return (
    <section id="problem" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Is your AI-generated code holding you back?
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
