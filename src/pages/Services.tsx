import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ServiceItem = {
  heading: string;
  body: string;
};

type ServiceSection = {
  title: string;
  intro: string;
  items: ServiceItem[];
};

const serviceSections: ServiceSection[] = [
  {
    title: "Custom Enterprise Software Engineering",
    intro:
      "We build scalable, high-performance solutions tailored to your specific business logic. Leveraging the power of .NET 8 and Microservices, we transform complex requirements into seamless digital experiences.",
    items: [
      {
        heading: "Greenfield Development",
        body: "Architecting robust, future-proof platforms from the ground up.",
      },
      {
        heading: "SaaS Product Engineering",
        body: "Developing multi-tenant architectures designed for rapid scaling and commercial viability.",
      },
      {
        heading: "API-First Integration",
        body: "Unifying your tech stack by connecting disparate systems (CRM, ERP, Finance) into a cohesive ecosystem.",
      },
    ],
  },
  {
    title: "High-Performance Web & Frontend Applications",
    intro:
      'We bridge the gap between complex backend logic and intuitive user experiences. Our web applications are designed to be "command centers"—centralizing data into fast, responsive, and beautiful interfaces.',
    items: [
      {
        heading: "Dynamic Dashboards",
        body: "Crafting real-time interfaces using React and Angular that synchronize live data without page refreshes.",
      },
      {
        heading: "Customer Experience Portals",
        body:
          "Building secure, self-service hubs where your clients can manage lifecycles, approve quotes, and access documentation.",
      },
      {
        heading: "Inventory & Logistics Tooling",
        body:
          "Developing custom frontends for complex supply chain needs, including live stock tracking and supplier API visualizations.",
      },
    ],
  },
  {
    title: "Legacy System Modernization",
    intro:
      "Don't let aging technology bottleneck your growth. We revitalize your existing assets to improve performance, security, and maintainability.",
    items: [
      {
        heading: "Platform Evolution",
        body: "Seamlessly transitioning legacy .NET Framework applications to modern, high-speed .NET 8.",
      },
      {
        heading: "Architectural Refactoring",
        body: "Decomposing monolithic applications into agile microservices for enhanced reliability.",
      },
      {
        heading: "UI/UX Refresh",
        body:
          'Replacing dated "internal tools" with modern, high-fidelity web environments that improve employee productivity.',
      },
    ],
  },
  {
    title: "Cloud Strategy & Infrastructure Optimization",
    intro:
      "As certified Azure and AWS practitioners, we ensure your cloud environment is lean, secure, and cost-effective.",
    items: [
      {
        heading: "Cloud Migration",
        body: "Low-risk transitions from on-premise hardware to secure cloud environments.",
      },
      {
        heading: "Cost Management & Auditing",
        body: "Identifying and eliminating cloud waste to reduce administrative and operational overhead.",
      },
      {
        heading: "Serverless & DevOps",
        body: "Implementing AWS Lambda and Azure Functions to automate scaling and minimize maintenance.",
      },
    ],
  },
  {
    title: "Security, Compliance & Data Governance",
    intro:
      'We specialize in high-stakes industries where data integrity is non-negotiable. Our "security-by-design" philosophy ensures you remain protected and compliant.',
    items: [
      {
        heading: "Regulatory Alignment",
        body: "Expert implementation of HIPAA and GDPR standards to safeguard sensitive data.",
      },
      {
        heading: "Security Auditing",
        body: "Proactive vulnerability assessments and code-level security hardening.",
      },
      {
        heading: "Identity Management",
        body: "Implementing enterprise-grade authentication using OAuth and OpenID Connect.",
      },
    ],
  },
  {
    title: "Strategic Consulting & Fractional CTO Services",
    intro:
      "Bridging the gap between business goals and technical execution through PMP and CSM certified leadership.",
    items: [
      {
        heading: "Project Rescue & Recovery",
        body: "Turning around stalled initiatives by addressing technical debt and architectural flaws.",
      },
      {
        heading: "Agile Transformation",
        body: "Helping internal teams adopt high-velocity Scrum workflows.",
      },
      {
        heading: "Technical Roadmap Analysis",
        body: "Strategic risk assessment and feasibility studies for long-term digital investments.",
      },
    ],
  },
  {
    title: "Intelligent Communication & Automation",
    intro:
      'We specialize in automating the "human" side of your business through integrated communication workflows.',
    items: [
      {
        heading: "Automated Outreach",
        body: "Implementing Twilio-powered SMS and voice workflows triggered by real-time database events.",
      },
      {
        heading: "Predictive Workflows",
        body:
          "Developing automation engines that calculate and trigger service needs based on historical data and usage records.",
      },
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24 md:pt-32">
        <section className="container mx-auto px-6 max-w-4xl mb-16 md:mb-20">
          <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase text-center mb-4">Services</p>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Engineering With End-to-End Accountability</h1>
          <p className="text-muted-foreground text-center font-sans max-w-2xl mx-auto leading-relaxed">
            The same senior-led execution you see on our homepage — documented outcomes, explicit ownership, and systems
            built to stay reliable after launch.
          </p>
        </section>

        <section className="container mx-auto px-6 max-w-4xl space-y-10 md:space-y-14 pb-8">
          {serviceSections.map((section) => (
            <article
              key={section.title}
              className="glass rounded-xl p-8 md:p-10 border border-border hover:border-glow transition-all duration-500"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4 leading-snug">{section.title}</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">{section.intro}</p>
              <ul className="list-none space-y-4 p-0 m-0">
                {section.items.map((item) => (
                  <li key={item.heading} className="text-sm md:text-[15px] font-sans leading-relaxed text-muted-foreground">
                    <span className="font-mono font-semibold text-foreground">{item.heading}:</span> {item.body}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
