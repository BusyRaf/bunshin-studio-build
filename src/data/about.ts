export type Principal = {
  name: string;
  title: string;
  credentials: string[];
  bio: string[];
  highlights: { label: string; value: string }[];
};

export type CompanyFact = {
  label: string;
  value: string;
};

export const aboutIntro = {
  eyebrow: "About",
  title: "Senior-Led Engineering. No Exceptions.",
  description:
    "Bunshin was built by people who had spent years watching the same failure mode repeat — senior talent on the proposal, junior execution on delivery. The answer was not a better process. It was a different structure: the people who scope the work are the people who do it, and the standard that holds in a nuclear control room holds in a sprint review. That is not a value statement. It is how we operate.",
};

export const companyFacts: CompanyFact[] = [
  { label: "Founded", value: "2025" },
  { label: "Headquarters", value: "St. Augustine, FL" },
  { label: "Certification", value: "SDVOSB — Service-Disabled Veteran-Owned Small Business" },
  { label: "Model", value: "Senior-led — no junior developer hand-off" },
  { label: "Service Area", value: "Jacksonville and Northeast Florida" },
];

export const principals: Principal[] = [
  {
    name: "Rafael Bejaran",
    title: "Director of Operations & Strategy",
    credentials: ["B.S. Business Administration", "PMP®", "CSM®"],
    bio: [
      "Rafael spent his Navy career being the person accountable when complex systems failed and the stakes were real — from safety-of-flight radar suites on aircraft carriers to fleet-wide operational readiness across the 2nd, 5th, and 7th Fleets. That standard carried directly into delivery leadership on high-concurrency, high-availability consumer platforms. PMP® and CSM® certified. At Bunshin, he owns client relationships, project governance, delivery timelines, and business development — the same person who scoped your engagement is the one accountable for delivering it, with no handoffs and no account manager in between.",
    ],
    highlights: [
      { label: "Theatres", value: "2nd · 5th · 7th Fleet" },
      { label: "Discipline", value: "Electronic Combat Systems" },
      { label: "Certified", value: "PMP® · CSM®" },
      { label: "Degree", value: "B.S. Business Administration" },
    ],
  },
  {
    name: "Jose Diaz",
    title: "Director of Technology & Architecture",
    credentials: ["B.S. Mathematical Sciences, Penn State", ".NET 8", "Azure", "AWS"],
    bio: [
      "Jose has delivered production systems at AT&T, Assurant, Talen Energy / Susquehanna Nuclear Power Plant, and Jefferson Health — nearly 15 years of engineering across national telecommunications, enterprise insurance, nuclear energy, and healthcare. The work ranged from systems integration at AT&T scale to a 100% HIPAA-compliant health records migration to cloud at Jefferson Health, with nuclear facility software in between.",
      "Compliance-grade engineering is the baseline, not an upgrade — a standard developed working directly inside environments where there is no margin for error. His technical depth spans .NET 8, C#, ASP.NET, Angular, Azure, AWS, and Docker.",
      "At Bunshin, Jose leads all technical architecture, code quality standards, cloud infrastructure, and security posture. Every line of production code passes through his review.",
    ],
    highlights: [
      {
        label: "Prior Employers",
        value: "AT&T · Assurant · Talen Energy / Susquehanna Nuclear · Jefferson Health",
      },
      { label: "Compliance Track Record", value: "HIPAA-compliant cloud migrations in production" },
      { label: "15 Years", value: "Enterprise software engineering" },
      { label: "Stack", value: ".NET 8 · Azure · AWS · Docker" },
    ],
  },
];
