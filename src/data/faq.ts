export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "item-1",
    question: "You're a newer firm — how do I know you can deliver at this scale?",
    answer:
      "The studio is new. The credentials are not. Bunshin's principals carry nearly 30 years of prior-career delivery across nuclear energy, national telecommunications, healthcare systems, and military operations — environments where failure is not an acceptable outcome. The portfolio projects on this site were built to the same engineering standard we apply to client work, not as demos. If the scope of your project requires you to verify fit before committing budget, the right starting point is a Paid Discovery or Technical Audit — a fixed-price engagement that produces a scoping document and technical proposal you own, regardless of what you decide next.",
  },
  {
    id: "item-2",
    question: "What makes Bunshin different from a larger agency or consultancy?",
    answer:
      "A few things that are structural, not aspirational. The principals who scope your work are the ones who build it — there is no junior bench, no handoff after the proposal. Every engagement starts with a written scope document and a fixed price, not an open-ended T&M estimate. You have direct access to Rafael and Jose, not an account manager who relays questions. If you are a prime contractor or government buyer, we carry SDVOSB certification, which satisfies set-aside requirements without additional qualification steps. And before this firm existed, the people running it spent nearly 30 years delivering in nuclear energy, national telecommunications, healthcare, and military environments — places where 'we'll figure it out' is not an option.",
  },
  {
    id: "item-3",
    question: "How do you handle compliance and data security requirements?",
    answer:
      "Built in from the start, not added afterward. We have hands-on experience with HIPAA, GDPR, and security requirements across some of the most sensitive environments in the world. Compliance isn't a checklist for us — it's a baseline.",
  },
  {
    id: "item-4",
    question: "What industries have you worked in?",
    answer:
      "Healthcare, nuclear energy, maritime security, cryptocurrency, and military applications. We're comfortable operating in high-stakes, highly regulated environments — and we bring that same discipline to every engagement regardless of industry.",
  },
  {
    id: "item-5",
    question: "How do you manage scope, timeline, and budget on complex projects?",
    answer:
      "Every engagement runs on a defined scope document, a Jira-tracked task list with owners and deadlines, and PMI Earned Value reporting so budget burn is visible at all times. We use CSM-certified sprint methodology for delivery cadence and Confluence for requirements traceability. Nothing falls through the cracks because everything has an owner.",
  },
  {
    id: "item-6",
    question: "How do you work alongside existing internal teams?",
    answer:
      "We start by meeting with your team to understand internal boundaries, define roles, gather documentation, and elicit requirements. We integrate without disrupting — your team stays focused on what they do best while we handle what you need us to.",
  },
];
