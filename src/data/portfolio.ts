export type PortfolioHighlight = {
  heading: string;
  body: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  summary: string;
  highlights: PortfolioHighlight[];
  url: string;
  imageSrc: string;
};

export const portfolioIntro = {
  eyebrow: "Portfolio",
  title: "Engineering Excellence into Every Interface",
  description:
    "Every Bunshin product is a result of passion, our commitment to excellence, and our desire to solve problems while improving functionality. Below is a selection of our work with brief descriptions of the infrastructure we delivered. We hope it inspires you to consider what is possible for you!",
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "hazleton-mechanic",
    title: "Revup Motors LLC",
    summary:
      "We engineered a high-performance booking and management suite designed to synchronize every moving part of a modern auto shop. By integrating live inventory data with physical bay availability, we eliminated the guesswork from automotive scheduling.",
    highlights: [
      {
        heading: "Real-Time Logistics",
        body: "Our engine syncs mechanic availability with live parts stock to ensure every appointment is actionable.",
      },
      {
        heading: "The Bunshin Lightbulb",
        body: 'We utilize VIN-based tracking to maintain a permanent service "DNA" for every vehicle, ensuring history remains intact across multiple owners.',
      },
      {
        heading: "Secure Customer Portal",
        body: "We built a dedicated hub for clients to manage their vehicle lifecycle, download invoices, and digitally approve quotes in seconds.",
      },
      {
        heading: "Live Supplier Integrations",
        body: "Our team integrated direct APIs with NAPA and AutoZone for real-time pricing and stock validation.",
      },
      {
        heading: "Smart Automation",
        body: "We deployed Twilio-powered SMS and automated email triggers that calculate service needs based on database mileage records.",
      },
    ],
    url: "https://hazletonmechanic.com/",
    imageSrc: "/portfolio/revup-motors-hazleton.png",
  },
];
