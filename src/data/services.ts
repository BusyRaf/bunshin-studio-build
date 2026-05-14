export type PricingTier = {
  engagement: string;
  scope: string;
  range: string;
};

export type ServiceLine = {
  id: string;
  title: string;
  intro: string;
  capabilities: string[];
  pricing: PricingTier[];
};

export const servicesIntro = {
  eyebrow: "Services",
  title: "Senior-Led Engineering. No Hand-Offs.",
  description:
    "Every engagement is led by the principals who scoped it — no junior developers, no account managers in between. The people you meet on day one are the people who build it. Serving Jacksonville, St. Johns County, and Northeast Florida.",
};

export const serviceLines: ServiceLine[] = [
  {
    id: "custom-web-applications",
    title: "Custom B2B Web Application Development",
    intro:
      "We build web applications around your specific business logic — not around what an off-the-shelf platform almost does. Portals, dashboards, SaaS products, and regulated workflows, engineered for the environment they will actually live in.",
    capabilities: [
      "Customer and client self-service portals",
      "Operational dashboards with real-time data feeds",
      "API-first integrations (CRM, ERP, billing platforms)",
      "HIPAA and GDPR compliant architecture, built in — not retrofitted",
      "SaaS multi-tenant applications",
      "Secure document workflows and digital approval flows",
    ],
    pricing: [
      {
        engagement: "Paid Discovery",
        scope: "Written scope, technical proposal, and fixed price — yours to keep regardless of next steps",
        range: "$500 (credited to project)",
      },
      {
        engagement: "Fixed-Price Build",
        scope: "Approved scope before first commit. No change orders for scope we missed. Delivered in iterations.",
        range: "$5,000–$25,000",
      },
      {
        engagement: "Monthly Retainer",
        scope: "Ongoing development and support with direct principal access — no ticket queue",
        range: "$1,500–$3,000/mo (3-month minimum)",
      },
    ],
  },
  {
    id: "mobile-development",
    title: "Native & Cross-Platform Mobile Development",
    intro:
      "We build iOS and Android applications that hold up in the field — offline-first where the network is unreliable, backed by cloud infrastructure we also own and operate. From App Store submission to backend API, one team handles the full stack.",
    capabilities: [
      "iOS and Android applications (React Native / Flutter)",
      "Offline-first architecture for field, logistics, and maritime environments",
      "App Store and Google Play deployment",
      "Backend API and cloud infrastructure included",
      "Real-time data sync and push notifications",
      "GPS, camera, and device sensor integrations",
    ],
    pricing: [
      {
        engagement: "Paid Discovery",
        scope: "Written scope, technical proposal, and fixed price — yours to keep regardless of next steps",
        range: "$500 (credited to project)",
      },
      {
        engagement: "Fixed-Price Build",
        scope: "Approved scope before first commit. No change orders for scope we missed. Delivered in iterations.",
        range: "$8,000–$35,000",
      },
      {
        engagement: "Monthly Retainer",
        scope: "Ongoing development and support with direct principal access — no ticket queue",
        range: "$1,500–$2,500/mo",
      },
    ],
  },
  {
    id: "legacy-modernization",
    title: "Legacy Modernization & Cloud Operations",
    intro:
      "We migrate aging systems to modern infrastructure without stopping your business. .NET Framework to .NET 8, monolith to microservices, on-premise to Azure or AWS — with HIPAA and CMMC compliance built into every phase. The entry point is a Technical Audit: a 2-week assessment with a written modernization roadmap you own regardless of what happens next.",
    capabilities: [
      ".NET Framework to .NET 8 migration",
      "Monolith decomposition into microservices",
      "On-premise to Azure and AWS cloud migration",
      "Security hardening and compliance remediation (HIPAA, CMMC)",
      "CI/CD pipeline and DevOps automation",
      "Technical Audit: 2-week assessment with written roadmap — the recommended entry point",
    ],
    pricing: [
      {
        engagement: "Technical Audit",
        scope: "2-week assessment + written modernization roadmap — yours to keep regardless of next steps",
        range: "$1,500 (standalone deliverable)",
      },
      {
        engagement: "Migration Project",
        scope: "Approved scope before first commit. No change orders for scope we missed. Phased delivery.",
        range: "$10,000–$50,000",
      },
      {
        engagement: "Managed Cloud Ops",
        scope: "Ongoing infrastructure management with direct principal access — SLA-backed",
        range: "$2,000–$5,000/mo",
      },
    ],
  },
];

