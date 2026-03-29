import {
  Building2,
  Code2,
  Cloud,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const capabilityRows = [
  {
    area: "Backend & Architecture",
    workWith: ".NET 8, C#, Microservices, RESTful APIs, Serverless",
  },
  { area: "Frontend", workWith: "React, Angular, TypeScript, HTML5/CSS3" },
  {
    area: "Cloud & DevOps",
    workWith: "Microsoft Azure, AWS, Docker, CI/CD, Jenkins",
  },
  {
    area: "Data & Integrations",
    workWith: "SQL Server, Entity Framework Core, OAuth/OpenID, Twilio",
  },
  { area: "Compliance", workWith: "HIPAA, GDPR, Security Auditing" },
  {
    area: "Project Governance",
    workWith: "PMP Certified, Scrum Master Certified, Risk Analysis, Earned Value Management",
  },
];

const offerings = [
  {
    icon: Building2,
    title: "Custom Digital Builds",
    description:
      "From the ground up, built to last. Architecture, design, development, SEO, security, and launch — all handled by the same senior team, start to finish. No templates, no handoffs, no junior contractors.",
  },
  {
    icon: RefreshCw,
    title: "Legacy Modernization & Cloud Migration",
    description:
      "We specialize in moving complex systems to Azure and AWS without downtime, disruption, or surprises. If your platform is slowing your business down, we know exactly how to fix it.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Robust backend services in .NET 8 paired with modern frontends in React and Angular. Software that performs under pressure and is intuitive enough for your whole team to use.",
  },
  {
    icon: ShieldCheck,
    title: "Data Security & Compliance",
    description:
      "HIPAA, GDPR, enterprise-grade security — built into the architecture from day one, not bolted on afterward.",
  },
  {
    icon: Cloud,
    title: "Strategic Platform Relaunches",
    description:
      "When your entire digital presence needs a rethink, not just a refresh, we manage the process end-to-end — aligning technical delivery with your business goals.",
  },
];

const BunshinBuild = () => {
  return (
    <section id="what-we-do" className="py-24 md:py-32 relative overflow-hidden border-t border-accent-purple/20">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Core Capabilities</h2>

        <div className="glass rounded-lg overflow-hidden border border-border max-w-4xl mx-auto mb-16">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-border">
                <TableHead className="font-mono text-primary w-[180px] md:w-[220px]">Area</TableHead>
                <TableHead className="font-mono text-primary">What We Work With</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {capabilityRows.map((row) => (
                <TableRow key={row.area} className="border-border">
                  <TableCell className="font-mono text-sm text-foreground align-top">{row.area}</TableCell>
                  <TableCell className="text-muted-foreground font-sans">{row.workWith}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-center mb-4 max-w-3xl mx-auto">
          Full-Stack Engineering. End-to-End Ownership.
        </h3>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 font-sans leading-relaxed">
          We&apos;ve spent over a decade building software that can&apos;t afford to fail — telecom networks, hospital
          systems, critical infrastructure. That experience shapes everything we build, for every client, at every
          scale.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="glass rounded-lg p-8 group hover:border-glow transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:cyan-glow-sm transition-all duration-500">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-mono text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-sans">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BunshinBuild;
