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
  title: "We make the imagined real.",
  description:
    "Bunshin is two operators who earned their place owning the hardest problems in technology's highest-stakes environments, then pointed all that discipline at something more fun: building products people love. We build and launch our own software, and we love teaming up with other builders to bring theirs to life.",
};

export const companyFacts: CompanyFact[] = [
  { label: "Founded", value: "2025" },
  { label: "Based", value: "St. Augustine, FL" },
  { label: "Reach", value: "Remote-native; we build for clients anywhere" },
  { label: "Veteran-owned", value: "UEI + CAGE registered" },
];

export const principals: Principal[] = [
  {
    name: "Rafael Bejaran",
    title: "Operations & Strategy",
    credentials: ["PMP®", "CSM®", "B.S. Business Administration"],
    bio: [
      "Rafael is personally accountable for your build, and he's the same person who scoped it. He learned that ownership in the Navy: safety-of-flight radar on aircraft carriers and fleet-wide operational readiness across the 2nd, 5th, and 7th Fleets, where failure was never just a ticket.",
      "Off the clock, his side projects have a habit of becoming his life. One Ethereum mining rig became many, until he'd filled a friend's entire house with GPU clusters, and that's what pulled him into Web3, where he ran token sales, smart contracts, and RWA tokenization and learned the thing that powers everything we build: how a real community forms around a product. Years later, an AI app he was tinkering with turned into Bunshin.",
      "PMP- and CSM-certified, he keeps every build on track and knows in his bones what makes a product worth gathering around.",
    ],
    highlights: [
      { label: "Navy", value: "2nd · 5th · 7th Fleet radar" },
      { label: "Then", value: "Web3: token sales, smart contracts, RWA" },
      { label: "Certified", value: "PMP® · CSM®" },
      { label: "Now", value: "Operations & Strategy at Bunshin" },
    ],
  },
  {
    name: "Jose Diaz",
    title: "Technology & Architecture",
    credentials: ["B.S. Mathematical Sciences, Penn State", ".NET 8", "Azure", "AWS"],
    bio: [
      "Jose can't propose a solution without building it first. Hand him a set of requirements and he's already making it real, so the rest of us have learned to keep him at bay until we're sure we want the thing, because once the idea lands there's no stopping him.",
      "That compulsion runs on nearly fifteen years in software's least forgiving corners: AT&T, Assurant, Talen Energy's Susquehanna nuclear plant, and a 100% HIPAA-compliant health-records migration at Jefferson Health, places where a missed detail isn't a bug ticket, it's a real-world failure. Compliance-grade engineering is his baseline, not an upgrade.",
      "He's the spark, the one whose ideas become our products, and at Bunshin every line of production code passes through his review. The free spirit and the nuclear-grade engineer are the same person, and that's exactly why the things he ships hold up.",
    ],
    highlights: [
      { label: "Built at", value: "AT&T · Assurant · Susquehanna Nuclear · Jefferson Health" },
      { label: "Track record", value: "100% HIPAA-compliant cloud migration" },
      { label: "Experience", value: "~15 years, regulated environments" },
      { label: "Stack", value: ".NET 8 · Azure · AWS · Docker" },
    ],
  },
];
