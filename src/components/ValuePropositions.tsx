import { Compass, PenLine, Hammer, Rocket } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "1. Discovery",
    description:
      "Every engagement begins with a structured Paid Discovery ($500, credited to your project). You arrive with a problem. You leave with a written scope document, a technical proposal, and a fixed price — yours to keep regardless of what you decide next. No commitment required to find out exactly what the work involves.",
  },
  {
    icon: PenLine,
    title: "2. Scope & Design",
    description:
      "The scope document defines requirements, architecture decisions, and acceptance criteria. You review and approve it before development begins. That approval is the gate — nothing goes into the codebase until both sides have signed off on what done means and what it costs.",
  },
  {
    icon: Hammer,
    title: "3. Build",
    description:
      "Development runs in CSM-certified sprints. You have access to the staged environment and the Jira board throughout — not a status call once a month. Working software ships at every sprint boundary. Budget burn is tracked against the fixed price in real time. We use AI throughout the build process; the deliverable is always deterministic, hard-coded software with no runtime AI dependency in your stack.",
  },
  {
    icon: Rocket,
    title: "4. Launch & Ongoing",
    description:
      "We stay engaged after go-live. For clients who need continued development or support, monthly retainers run $1,500–$3,000 with a three-month minimum and direct principal access throughout — no ticket queue, no account manager, the same people who built it.",
  },
];

const ValuePropositions = () => {
  return (
    <section id="how-we-work" className="py-24 md:py-32 border-t border-accent-purple/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">A Project With Bunshin</h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.title}
              className="glass rounded-lg p-8 group hover:border-glow transition-all duration-500 flex flex-col"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:cyan-glow-sm transition-all duration-500">
                <step.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-mono text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-sans">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;
