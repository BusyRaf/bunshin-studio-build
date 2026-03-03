import { Briefcase, Rocket, Zap, Target } from "lucide-react";

const gains = [
  {
    icon: Briefcase,
    title: "Investor-Ready Codebase",
    description:
      "We transform prototypes into professional assets that pass technical due diligence for buyers or partners.",
  },
  {
    icon: Rocket,
    title: "Instant Scaling",
    description:
      "Infrastructure designed to handle the jump from 100 to 1,000,000 users without crashing or slowing down.",
  },
  {
    icon: Zap,
    title: "Hyper-Speed Iteration",
    description: "Get your finished product in two one-week sprints.",
  },
  {
    icon: Target,
    title: "Founder Freedom",
    description:
      "We handle the technology so you can focus on SEO and customer acquisition.",
  },
];

const ValuePropositions = () => {
  return (
    <section id="value" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Bunshin Benefits
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 font-sans">
          At Bunshin we spearhead a deliberate transformation of your stack into an ownable asset
          that compounds over time.
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

