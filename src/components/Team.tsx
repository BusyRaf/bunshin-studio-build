import { Code2, BarChart3 } from "lucide-react";

const members = [
  {
    name: "Rafael Bejaran",
    role: "Operations & Strategy",
    icon: BarChart3,
    description:
      "The vehicle. Personally accountable for every build, and the same person who scopes it. A Navy operator's discipline (safety-of-flight radar across three fleets) plus a Web3 founder's instinct for how a product finds its people.",
  },
  {
    name: "Jose Diaz",
    role: "Technology & Architecture",
    icon: Code2,
    description:
      "The spark. He can't propose a solution without building it first. Nearly fifteen years in software's least forgiving rooms (AT&T, Susquehanna nuclear, HIPAA healthcare) is exactly why what he ships holds up.",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <p className="font-mono text-sm text-primary tracking-[0.3em] uppercase text-center mb-4">
          The Team
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Meet the builders
        </h2>
        <p className="text-muted-foreground font-sans leading-relaxed text-center max-w-2xl mx-auto mb-16">
          Two of us, Rafael and Jose. Childhood friends who took different paths and found
          their way back to the same workbench. Jose is the spark, the inventor whose ideas
          become our products. Rafael is the vehicle, the one who makes them real and finds
          the people who&apos;ll love them. Each is the other&apos;s way to the thing he wants
          most: Jose&apos;s freedom, Rafael&apos;s dream.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {members.map((member) => (
            <div
              key={member.name}
              className="glass rounded-lg p-8 group hover:border-glow transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:cyan-glow-sm transition-all duration-500">
                  <member.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-mono text-xl font-bold">{member.name}</h3>
                  <p className="font-mono text-sm text-primary">{member.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed font-sans">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
