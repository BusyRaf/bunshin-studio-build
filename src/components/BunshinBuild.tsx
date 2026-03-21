import { ClipboardList, Network, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "Your site, before you commit:",
    description:
      "Walk in, see your business already online. No guessing. No vague promises.",
  },
  {
    icon: Network,
    title: "Done for you, start to finish:",
    description:
      "Copywriting, SEO, security setup — handled. You stay focused on your customers.",
  },
  {
    icon: ShieldCheck,
    title: "Local. Veteran-owned. Accountable:",
    description:
      "You'll have a real local team who answers when you call — not a ticket system.",
  },
];

const BunshinBuild = () => {
  return (
    <section id="bunshin-build" className="py-24 md:py-32 relative overflow-hidden border-t border-accent-purple/20">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          The Bunshin Solution
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 font-sans">
          We don't pitch you a mockup and ask you to imagine it. You see a working version of your
          new site before you pay a single dollar.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
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

