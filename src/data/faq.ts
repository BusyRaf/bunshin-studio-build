export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "what-is-bunshin",
    question: "What does “Bunshin” mean?",
    answer:
      "It's Japanese for shadow clone: the trick of multiplying yourself to be in more than one place at once. We're two builders who multiply what two people can do, so a small team ships like a much bigger one, and you always get the actual builders, never an account manager in between.",
  },
  {
    id: "idea-no-cofounder",
    question: "Can you build an app from just an idea? I don't have a technical co-founder.",
    answer:
      "Absolutely, that's our favorite way to start. You don't need a co-founder, a spec, or a single line of code, just the idea and the conviction to build it. Our own products began exactly that way, and we'll take yours from a sketch in your head to a launched web or mobile app.",
  },
  {
    id: "existing-business",
    question: "Can you build a custom app for my existing business?",
    answer:
      "Yes, and you won't have to bend your business to fit a template that almost works. A booking app, an online store, a customer portal, a mobile app for your team, we build around how your business actually runs. You built something real; we give it the app it deserves.",
  },
  {
    id: "cost",
    question: "How much does it cost to build a custom app?",
    answer:
      "It depends on what you're building, so we don't post a one-size number that would be wrong for you. The honest version: after a short conversation about your vision, we come back with a clear, fixed price for the actual thing you want, and it costs nothing to find out. No hourly meters, no surprise change orders.",
  },
  {
    id: "timeline",
    question: "How long does it take to build an app?",
    answer:
      "Usually weeks, not years, because two senior builders are on it with no hand-offs slowing things down. An MVP is faster than a full platform, so we'll give you a real timeline along with your fixed price, before anything starts.",
  },
  {
    id: "ownership",
    question: "Do I own the app and the code you build?",
    answer:
      "Completely. Your product, your vision, your code, your call, start to finish. You're the owner the whole way; we're the build. Nothing locks you to us.",
  },
  {
    id: "two-person",
    question: "Can a two-person studio really build my product?",
    answer:
      "Yes, and it's an advantage. You get Rafael and Jose directly, the same two who scope your build and ship it, with no juniors training on your dime and no one to translate through. We move fast because we spent years building where slow or sloppy wasn't an option, and we lean on AI to multiply our hands.",
  },
  {
    id: "ai",
    question: "Do you build with AI, and will my product depend on it?",
    answer:
      "We use AI constantly to build faster, but your product doesn't run on it. What you own is ordinary, deterministic software: no AI baked into your stack, no per-token costs, nothing to hallucinate in production. AI is how we work; dependable code is what you keep.",
  },
  {
    id: "location",
    question: "Where are you located, and do you work remotely?",
    answer:
      "We're in the Jacksonville and St. Augustine area of Florida, and we're remote-native, so we build for people anywhere. Local or across the country, you get the same thing: direct access to the two builders making your product.",
  },
];
