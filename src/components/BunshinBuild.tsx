import { ClipboardList, Network, ShieldCheck, Globe2 } from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "Technical Audit",
    description:
      "A rigorous review of AI-generated code to identify security holes, redundancies, and logic problems.",
  },
  {
    icon: Network,
    title: "Architecture Strategy",
    description: "We create a professional roadmap to get your app where you want it to go.",
  },
  {
    icon: ShieldCheck,
    title: "Infrastructure & Security",
    description:
      "Implementation of industry-standard protocols, including Auth, API rate limiting, and data encryption.",
  },
  {
    icon: Globe2,
    title: "Full Stack Ownership",
    description:
      "We handle domain and email setup (NameCheap), App Store developer accounts, and provide full documentation.",
  },
];

const BunshinBuild = () => {
  return (
    <section id="bunshin-build" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Bunshin Build
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 font-sans">
          We meet you where you are today and design the technical path to where your investors,
          customers, and future team need you to be.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass rounded-lg p-8 group hover:border-glow transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:cyan-glow-sm transition-all duration-500">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-mono text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-sans">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BunshinBuild;

