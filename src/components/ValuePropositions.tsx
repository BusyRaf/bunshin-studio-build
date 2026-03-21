import { Briefcase, Rocket, Zap, Target } from "lucide-react";

const gains = [
  {
    icon: Briefcase,
    title: "Request:",
    description: "Text or email us the change you need.",
  },
  {
    icon: Rocket,
    title: "Develop:",
    description: "We build it — usually the same day.",
  },
  {
    icon: Zap,
    title: "Review:",
    description: "You get a link on your phone. Reply Y to approve.",
  },
  {
    icon: Target,
    title: "Deploy:",
    description: "It goes live. Done.",
  },
];

const ValuePropositions = () => {
  return (
    <section id="value" className="py-24 md:py-32 border-t border-accent-purple/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Maintenance Made Simple: The R2D2 System
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 font-sans">
          Stop waiting weeks to hear back from a developer. Our Request → Develop → Review → Deploy
          system is built for speed:
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {gains.map((gain) => (
            <div
              key={gain.title}
              className="glass rounded-lg p-8 group hover:border-glow transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:cyan-glow-sm transition-all duration-500">
                <gain.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-mono text-lg font-semibold mb-3">{gain.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-sans">{gain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;

