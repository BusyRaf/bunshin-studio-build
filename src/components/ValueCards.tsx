import { RefreshCw, AlertTriangle, ShieldAlert } from "lucide-react";

const cards = [
  {
    icon: RefreshCw,
    title: "Invisible:",
    description:
      "Not showing up on Google, and completely absent from AI search tools like ChatGPT and Gemini.",
  },
  {
    icon: AlertTriangle,
    title: "Broken on Mobile:",
    description:
      "If it doesn't look right on a phone, you're losing customers before they ever call.",
  },
  {
    icon: ShieldAlert,
    title: "Impossible to Update:",
    description: "You shouldn't need to hire someone just to change your hours.",
  },
];

const ValueCards = () => {
  return (
    <section id="problem" className="py-24 md:py-32 border-t border-accent-purple/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          The Small Business Tech Trap
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 font-sans">
          You know you need a better online presence — but the process is usually a nightmare. Most
          small business sites are:
        </p>

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
