export type ServiceItem = {
  heading: string;
  body: string;
};

export type ServiceSection = {
  title: string;
  intro: string;
  items: ServiceItem[];
};

export const servicesIntro = {
  eyebrow: "Services",
  title: "Engineering With End-to-End Accountability",
  description:
    "The same senior-led execution you see on our homepage - documented outcomes, explicit ownership, and systems built to stay reliable after launch.",
};

export const serviceSections: ServiceSection[] = [
  {
    title: "Custom Enterprise Software Engineering",
    intro:
      "We build scalable, high-performance solutions tailored to your specific business logic. Leveraging the power of .NET 8 and Microservices, we transform complex requirements into seamless digital experiences.",
    items: [
      { heading: "Greenfield Development", body: "Architecting robust, future-proof platforms from the ground up." },
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
      'We bridge the gap between complex backend logic and intuitive user experiences. Our web applications are designed to be "command centers" - centralizing data into fast, responsive, and beautiful interfaces.',
    items: [
      {
        heading: "Dynamic Dashboards",
        body: "Crafting real-time interfaces using React and Angular that synchronize live data without page refreshes.",
      },
      {
        heading: "Customer Experience Portals",
        body: "Building secure, self-service hubs where your clients can manage lifecycles, approve quotes, and access documentation.",
      },
      {
        heading: "Inventory & Logistics Tooling",
        body: "Developing custom frontends for complex supply chain needs, including live stock tracking and supplier API visualizations.",
      },
    ],
  },
  {
    title: "Legacy System Modernization",
    intro:
      "Don't let aging technology bottleneck your growth. We revitalize your existing assets to improve performance, security, and maintainability.",
    items: [
      { heading: "Platform Evolution", body: "Seamlessly transitioning legacy .NET Framework applications to modern, high-speed .NET 8." },
      {
        heading: "Architectural Refactoring",
        body: "Decomposing monolithic applications into agile microservices for enhanced reliability.",
      },
      {
        heading: "UI/UX Refresh",
        body: 'Replacing dated "internal tools" with modern, high-fidelity web environments that improve employee productivity.',
      },
    ],
  },
  {
    title: "Cloud Strategy & Infrastructure Optimization",
    intro:
      "As certified Azure and AWS practitioners, we ensure your cloud environment is lean, secure, and cost-effective.",
    items: [
      { heading: "Cloud Migration", body: "Low-risk transitions from on-premise hardware to secure cloud environments." },
      {
        heading: "Cost Management & Auditing",
        body: "Identifying and eliminating cloud waste to reduce administrative and operational overhead.",
      },
      { heading: "Serverless & DevOps", body: "Implementing AWS Lambda and Azure Functions to automate scaling and minimize maintenance." },
    ],
  },
  {
    title: "Security, Compliance & Data Governance",
    intro:
      'We specialize in high-stakes industries where data integrity is non-negotiable. Our "security-by-design" philosophy ensures you remain protected and compliant.',
    items: [
      { heading: "Regulatory Alignment", body: "Expert implementation of HIPAA and GDPR standards to safeguard sensitive data." },
      { heading: "Security Auditing", body: "Proactive vulnerability assessments and code-level security hardening." },
      { heading: "Identity Management", body: "Implementing enterprise-grade authentication using OAuth and OpenID Connect." },
    ],
  },
  {
    title: "Strategic Consulting & Fractional CTO Services",
    intro: "Bridging the gap between business goals and technical execution through PMP and CSM certified leadership.",
    items: [
      { heading: "Project Rescue & Recovery", body: "Turning around stalled initiatives by addressing technical debt and architectural flaws." },
      { heading: "Agile Transformation", body: "Helping internal teams adopt high-velocity Scrum workflows." },
      {
        heading: "Technical Roadmap Analysis",
        body: "Strategic risk assessment and feasibility studies for long-term digital investments.",
      },
    ],
  },
  {
    title: "Intelligent Communication & Automation",
    intro: 'We specialize in automating the "human" side of your business through integrated communication workflows.',
    items: [
      {
        heading: "Automated Outreach",
        body: "Implementing Twilio-powered SMS and voice workflows triggered by real-time database events.",
      },
      {
        heading: "Predictive Workflows",
        body: "Developing automation engines that calculate and trigger service needs based on historical data and usage records.",
      },
    ],
  },
];
