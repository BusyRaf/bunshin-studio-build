export type PortfolioHighlight = {
  heading: string;
  body: string;
};

export type PortfolioTestimonial = {
  quote: string;
  author: string;
  href?: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  summary: string;
  highlights: PortfolioHighlight[];
  url: string;
  imageSrc: string;
  imagePosition?: string;
  images?: string[];
  tags?: string[];
  category?: string;
  status?: string;
  ctaLabel?: string;
  testimonial?: PortfolioTestimonial;
};

export const portfolioIntro = {
  eyebrow: "Portfolio",
  title: "What We Built. What It Replaced. What Changed.",
  description:
    "A selection of systems we have built — what we replaced, what we delivered, and what changed after launch. Client work ships with the same rigor as our internal builds.",
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "fishing-with-friends",
    title: "Fishing with Friends",
    summary:
      "No unified tool existed for recreational anglers to log GPS-tagged catches, compete in live tournaments, and stay connected in low-signal maritime environments on a single app. Fishing with Friends is that app — built in Flutter with Supabase, PostGIS, and Riverpod for iOS and Android. The offline-first architecture means catches log when you're on the water and sync automatically when connectivity returns. No data lost on the boat.",
    highlights: [
      {
        heading: "Offline-First Architecture",
        body: "SQLite outbox pattern for low-signal maritime environments — catches log on the water and sync automatically when connectivity returns.",
      },
      {
        heading: "Real-Time Tournaments",
        body: "Competitive leaderboards powered by Supabase Realtime; scores update live without page refresh.",
      },
      {
        heading: "Catch Logging",
        body: "GPS-tagged catch entries with photo capture and species metadata, surfaced in a friend-scoped activity feed.",
      },
      {
        heading: "Geospatial Data",
        body: "Catch locations stored in PostGIS for location-based queries and regional catch heatmaps.",
      },
      {
        heading: "Cross-Platform",
        body: "Single Flutter codebase targeting iOS and Android — App Store and Google Play deployment.",
      },
    ],
    url: "",
    imageSrc: "/portfolio/fishing-with-friends-card.png",
    imagePosition: "center center",
    images: [
      "/portfolio/fishing-with-friends.png",
      "/portfolio/fishing-with-friends-profile.png",
      "/portfolio/fishing-with-friends-catch.png",
    ],
    tags: ["Flutter", "Riverpod", "Supabase", "PostgreSQL", "PostGIS", "go_router"],
    category: "Internal",
    status: "Private Beta",
    ctaLabel: "Read Case Study",
  },
  {
    id: "animal-control-platform",
    title: "Animal Control & Shelter Management Platform",
    summary:
      "Field officers currently rely on paper intake forms and manual microchip lookups across multiple separate registries — a process that is slow, error-prone, and disconnected from the shelter. This platform replaces it: 90-second digital intake, one-handed, with simultaneous lookup across four registries and an automatic SMS to the owner before the officer leaves the scene.",
    highlights: [
      {
        heading: "Four Surfaces, One Codebase",
        body: "Field officer, facility staff, admin console, and public portal all served from a single responsive PWA — no duplicate maintenance burden.",
      },
      {
        heading: "90-Second Field Intake",
        body: "Officers complete animal intake in under 90 seconds, one-handed, with offline sync that commits when connectivity returns.",
      },
      {
        heading: "Multi-Registry Microchip Lookup",
        body: "Simultaneous query across 24PetWatch, HomeAgain, AKC Reunite, and Save This Life — owner SMS notification sent before the officer leaves the scene.",
      },
      {
        heading: "Florida Statutory Compliance",
        body: "DOH bite reports, Statute 767 documentation, and Sunshine Law records packets built in as first-class features — not consulting add-ons.",
      },
      {
        heading: "Offline Field Operations",
        body: "Full intake and lookup capability without connectivity — data commits to the shelter system automatically when the officer returns to signal.",
      },
    ],
    url: "",
    imageSrc: "/portfolio/animal-control-platform/screenshots/03-dispatch-console.png",
    imagePosition: "center top",
    images: [
      "/portfolio/animal-control-platform/screenshots/03-dispatch-console.png",
      "/portfolio/animal-control-platform/screenshots/04-animal-record.png",
      "/portfolio/animal-control-platform/screenshots/05-kennel-board.png",
      "/portfolio/animal-control-platform/screenshots/06-field-intake.png",
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "PWA", "Self-hosted", "Offline-first"],
    category: "Internal",
    status: "Available",
    ctaLabel: "Read Case Study",
  },
  {
    id: "core-property-ventures",
    title: "Core Property Ventures",
    summary:
      "Core Property Ventures is a Jacksonville-based residential real estate investment company that buys houses as-is, in cash, on the seller's timeline. The client needed a professional web presence to replace an existing Squarespace site — something built for the QR code on her marketing materials and designed to convert a homeowner who scans it into a conversation. We designed and built a mobile-first landing page, migrated hosting to Vercel, set up a custom email domain, wrote the privacy policy, and generated the QR code pointed at the deployed URL.",
    highlights: [
      {
        heading: "Landing Page Design & Build",
        body: "Single-page mobile-first site with a hero, owner portrait, three-step process section, and inline contact form — built around the Core Property Ventures brand system.",
      },
      {
        heading: "Squarespace → Vercel Migration",
        body: "Migrated hosting from Squarespace to Vercel. Faster load times, cleaner deployment pipeline, no platform subscription tied to the site.",
      },
      {
        heading: "Contact Form",
        body: "Inline lead capture form with name, contact, property address, and timeline — the primary conversion action on the page.",
      },
      {
        heading: "Custom Email & Mail Server",
        body: "Set up a custom email address under the corepropertyventures.com domain with a professionally configured mail server so outbound and inbound correspondence routes under her brand.",
      },
      {
        heading: "Privacy Policy",
        body: "Drafted and published a privacy policy appropriate for the site's data collection scope.",
      },
      {
        heading: "QR Code for Print Materials",
        body: "Generated a QR code pointed at the deployed URL for inclusion on postcards and physical marketing materials.",
      },
    ],
    url: "https://corepropertyventures.com/",
    imageSrc: "/portfolio/core-property-ventures/logo.png",
    imagePosition: "center center",
    tags: ["Landing Page", "Vercel", "Custom Domain", "Email Setup", "Squarespace Migration"],
    category: "Client",
    status: "Delivered",
    testimonial: {
      quote:
        "Rafael and his team at Bunshin Development Studios did an excellent job creating a new website for my business in a very short amount of time. The entire process was smooth and easy, with clear communication every step of the way and real, professional results. I highly recommend reaching out to them for any of your business website and development needs!",
      author: "Holly McNally — Core Property Ventures",
      href: "https://share.google/2JKiabv9neB4VqipN",
    },
  },
];
