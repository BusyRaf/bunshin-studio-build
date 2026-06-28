export type ServiceLine = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  body: string[];
  examples?: string[];
  proof: string;
  cta: string;
};

export const servicesIntro = {
  eyebrow: "What we build",
  title: "Two ways we build with you.",
  description:
    "Whether you're starting from an idea or you already run a business, you own the vision and we build it. No pricing tables, no catalog, just the work and a warm front door.",
};

export const serviceLines: ServiceLine[] = [
  {
    id: "greenfield",
    eyebrow: "From an idea",
    title: "Turn your idea into a real app.",
    intro:
      "Greenfield web and mobile builds for people with a conviction and no technical co-founder. From the sketch in your head to a product people actually use, with you as the owner the whole way.",
    body: [
      "You don't need a technical co-founder or a finished spec to start. You need the thing to exist. We've built from nothing but conviction before, our own products began exactly that way, and we know how to carry an idea all the way to launch.",
      "What we build: net-new web apps, iOS and Android apps, the backend and cloud infrastructure underneath, and the launch itself. It ships as deterministic, dependable software, so what you own is the real thing, not a prototype held together with hope.",
      "It's your vision and your call, from the first sketch to launch day. We bring it to life; you decide where it goes.",
    ],
    proof:
      "StreamHalla started as an idea about streamer communities. It's live today. The closet behind us is full of products that began the same way.",
    cta: "Tell us what you're building. We'll figure out the rest together.",
  },
  {
    id: "for-your-business",
    eyebrow: "For your business",
    title: "Your business deserves a custom app.",
    intro:
      "You built something real. We build the custom web or mobile app to match: a booking app, an online store, a customer portal, whatever your business actually needs. You stay the owner of the vision; we make it real.",
    body: [
      "You don't need to bend your business to fit an off-the-shelf platform that almost works. We build around how your business actually runs, and because we come from healthcare, finance, and nuclear-grade environments, your customers' data is handled like it matters.",
    ],
    examples: [
      "a barber or salon that wants a custom booking app",
      "a storefront that wants a real ecommerce store, not a rented template",
      "a restaurant that wants its own online ordering and a loyalty app",
      "a gym or studio that wants class scheduling and memberships in one place",
      "a contractor or home-services crew that wants quoting and job scheduling on their phones",
      "a dental or medical practice that wants a HIPAA-compliant patient portal",
      "a property manager that wants a tenant portal that actually works",
      "a field or logistics team that wants an offline-first app for where the signal drops",
    ],
    proof:
      "Core Property Ventures came to us as an established business and left with its digital counterpart. We can do the same for yours.",
    cta: "Tell us about your business and what you want to build. We'll figure out the rest together.",
  },
];
