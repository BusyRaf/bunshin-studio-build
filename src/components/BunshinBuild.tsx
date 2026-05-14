"use client";

import { Briefcase, Code2, FileCheck, ShieldCheck } from "lucide-react";

const differentiators = [
  {
    icon: Briefcase,
    name: "Rafael Bejaran",
    role: "Director of Operations & Strategy",
    description:
      "The person accountable when complex systems failed and the stakes were real — from safety-of-flight radar suites on aircraft carriers to fleet-wide operational readiness across the 2nd, 5th, and 7th Fleets. That standard carried directly into delivery leadership on high-concurrency, high-availability consumer platforms. PMP® and CSM® certified. At Bunshin, he owns the delivery commitment and the client relationship from first call to final handoff — no spin, no managed optics, no surprises you weren't warned about first.",
  },
  {
    icon: Code2,
    name: "Jose Diaz",
    role: "Director of Technology & Architecture",
    description:
      "Over 12 years of full-stack engineering across Fortune 500 companies and critical infrastructure — national telecommunications systems at AT&T, enterprise claims processing at Assurant, secure plant operations software under federal regulatory requirements at Susquehanna Nuclear, and a 100% HIPAA-compliant health records migration to cloud at Jefferson Health. He has led zero-downtime migrations of mission-critical systems and knows what it costs when software in a high-stakes environment gets it wrong. He leads with requirements, not code. He owns every architectural decision, every infrastructure choice, every line of production code reviewed.",
  },
  {
    icon: FileCheck,
    name: "Fixed Scope Before First Commit",
    role: "No moving targets",
    description:
      "Every engagement starts with a written scope document — what gets built, what it costs, what done means. You approve it before development begins. No ambiguity at the start means no arguments at the end.",
  },
  {
    icon: ShieldCheck,
    name: "SDVOSB Certified",
    role: "Service-Disabled Veteran-Owned",
    description:
      "If you are a prime contractor with set-aside requirements, or a buyer who prioritizes veteran-owned sourcing, we satisfy that requirement the moment you engage us. No additional qualification steps.",
  },
];

const BunshinBuild = () => {
  return (
    <section id="what-we-do" className="py-24 md:py-32 relative overflow-hidden border-t border-accent-purple/20">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase text-center mb-4">The Firm</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 max-w-3xl mx-auto">
          You Work With the People Who Build It.
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 font-sans leading-relaxed">
          Most firms sell you on senior experience and deliver junior execution. What arrives on day one is rarely what
          showed up on the proposal. At Bunshin, the people who scope your work are the people who do it — no handoff,
          no dilution. The partnership that runs this firm was built over decades, not just as a business but as a
          friendship. That means no posturing, no internal negotiation, no competing priorities — one team entirely
          pointed at your problem.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentiators.map((item) => (
            <div
              key={item.name}
              className="glass rounded-lg p-8 group hover:border-glow transition-all duration-500 flex flex-col"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:cyan-glow-sm transition-all duration-500">
                <item.icon className="text-primary" size={24} />
              </div>
              <p className="font-mono text-xs text-primary tracking-wide uppercase mb-1">{item.role}</p>
              <h3 className="font-mono text-lg font-semibold mb-3">{item.name}</h3>
              <p className="text-muted-foreground leading-relaxed font-sans text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BunshinBuild;
