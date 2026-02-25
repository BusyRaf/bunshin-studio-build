import { Code2, BarChart3 } from "lucide-react";

const members = [
  {
    name: "Jose",
    role: "Senior Full-Stack Engineer",
    icon: Code2,
    description:
      "Architect of scalable systems with deep enterprise experience. Jose brings expertise in cloud-native architectures, modern frontend frameworks, and robust backend services — turning complex requirements into elegant, maintainable solutions.",
  },
  {
    name: "Rafael",
    role: "Operations & Project Management",
    icon: BarChart3,
    description:
      "With a background in electronics engineering and years leading global technical teams, Rafael ensures every project runs on-time, on-budget, and on-spec. He bridges the gap between stakeholders and engineers with precision.",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <p className="font-mono text-sm text-primary tracking-[0.3em] uppercase text-center mb-4">
          The Team
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Meet the Shadows
        </h2>

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
