export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "item-1",
    question: "What does 'Bunshin' mean?",
    answer:
      "Bunshin (分身) is a Japanese word meaning shadow clone — the ability to multiply yourself, to operate as more than one. The firm is built around that idea. When you bring us in, you are not hiring contractors to execute a spec you manage. You are adding senior engineering capacity to your operation — capacity that thinks, scopes, builds, and owns the outcome alongside you, without the overhead of full-time hires, a management layer, or an account manager in between. The principal who walks in on day one is the one who ships the work.",
  },
  {
    id: "item-2",
    question: "Do you use AI in your development process?",
    answer:
      "Yes — throughout. AI accelerates how we research, draft, reason through architecture, and generate code. But the deliverable is always hard-coded, deterministic software. Not an AI layer embedded in your production stack. No token burn on your infrastructure. No new cost center. No hallucinations inside a compliance-critical system. The output is code that does exactly what it is supposed to do, every time, because it is code — not a model inference call. For our clients in healthcare, defense, and regulated environments, that distinction matters.",
  },
  {
    id: "item-3",
    question: "How do you manage scope, timeline, and budget on complex projects?",
    answer:
      "Every engagement runs on a defined scope document, a Jira-tracked task list with owners and deadlines, and PMI Earned Value reporting so budget burn is visible at all times. We use CSM-certified sprint methodology for delivery cadence and Confluence for requirements traceability. Nothing falls through the cracks because everything has an owner.",
  },
  {
    id: "item-4",
    question: "How does Bunshin actually run an engagement?",
    answer:
      "Every engagement starts with a written scope document and a fixed price — you approve both before development begins. The principals who scope your work are the ones who build it. You have direct access to the engineers throughout. If you are a prime contractor or government buyer, we carry SDVOSB certification, which satisfies set-aside requirements without additional qualification steps. The people running this firm spent nearly 30 years delivering in nuclear energy, national telecommunications, healthcare, and military environments — and that standard applies to every project we take on.",
  },
  {
    id: "item-5",
    question: "How do you handle compliance and data security requirements?",
    answer:
      "Built in from the start, not added afterward. We have hands-on experience with HIPAA, GDPR, and security requirements across some of the most sensitive environments in the world. Compliance isn't a checklist for us — it's a baseline.",
  },
  {
    id: "item-6",
    question: "How do you work alongside existing internal teams?",
    answer:
      "We start by meeting with your team to understand internal boundaries, define roles, gather documentation, and elicit requirements. We integrate without disrupting — your team stays focused on what they do best while we handle what you need us to.",
  },
  {
    id: "item-7",
    question: "What industries have you worked in?",
    answer:
      "Healthcare, nuclear energy, maritime security, cryptocurrency, and military applications. We're comfortable operating in high-stakes, highly regulated environments — and we bring that same discipline to every engagement regardless of industry.",
  },
];
