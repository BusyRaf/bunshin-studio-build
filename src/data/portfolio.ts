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
  imagePosition?: string;
  images?: string[];
  tags?: string[];
  category?: string;
  status?: string;
};

export const portfolioIntro = {
  eyebrow: "Portfolio",
  title: "What We Built. What It Replaced. What Changed.",
  description:
    "A selection of systems we have built — what we replaced, what we delivered, and what changed after launch. Client work ships with the same rigor as our internal builds.",
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "hazleton-mechanic",
    title: "Revup Motors LLC",
    summary:
      "Revup Motors ran on phone calls, whiteboards, and a scheduling process that created double-bookings, parts mismatches, and customer friction. We replaced it with a booking and management suite that synchronizes mechanic availability with live parts inventory — making every appointment fully actionable before the customer hangs up the phone. Manual process in. Coordinated operation out.",
    highlights: [
      {
        heading: "Real-Time Logistics",
        body: "Mechanic availability syncs with live parts stock so every appointment is actionable before it's confirmed.",
      },
      {
        heading: "VIN-Based Service History",
        body: "Every vehicle carries a permanent service record tied to its VIN — history stays intact across owners, mechanics, and time.",
      },
      {
        heading: "Customer Portal",
        body: "Clients manage their vehicle lifecycle, download invoices, and digitally approve quotes without calling the shop.",
      },
      {
        heading: "Live Supplier Integrations",
        body: "Direct API connections to NAPA and AutoZone for real-time parts pricing and stock validation at the point of booking.",
      },
      {
        heading: "Automated Service Reminders",
        body: "Twilio-powered SMS and email triggers calculate service needs from database mileage records and reach out automatically.",
      },
    ],
    url: "https://hazletonmechanic.com/",
    imageSrc: "/portfolio/revup-motors-hazleton.png",
    tags: ["Next.js", "Node.js", "NAPA API", "AutoZone API", "Twilio", "PostgreSQL"],
    category: "Client Work",
    status: "Live",
  },
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
    imageSrc: "/portfolio/fishing-with-friends.png",
    imagePosition: "center 14%",
    images: [
      "/portfolio/fishing-with-friends.png",
      "/portfolio/fishing-with-friends-profile.png",
      "/portfolio/fishing-with-friends-catch.png",
    ],
    tags: ["Flutter", "Riverpod", "Supabase", "PostgreSQL", "PostGIS", "go_router"],
    category: "Internal",
    status: "In Development",
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
    imageSrc: "/portfolio/animal-control-platform.png",
    tags: ["React", "PWA", "Node.js", "PostgreSQL", "Twilio", "Offline Sync"],
    category: "Internal",
    status: "In Development",
  },
  {
    id: "shelfmate",
    title: "ShelfMate",
    summary:
      "Goodreads works as a public broadcast network — follower counts, public shelves, review feeds. ShelfMate is built around the opposite model: a tight friend graph where reading activity, recommendations, and annotations stay within your circle. Private by design, not by settings. Dual-source book lookup via Open Library API with Google Books fallback, AI-assisted suggestions, and shareable reading cards for iOS and Android.",
    highlights: [
      {
        heading: "Friend-Graph Social Model",
        body: "Recommendations and reading activity visible only within your friend network — no public feed, no follower counts.",
      },
      {
        heading: "AI Reading Suggestions",
        body: "On-device suggestion engine uses reading history and ratings to surface books the user is likely to finish.",
      },
      {
        heading: "Dual-Source Book Lookup",
        body: "Open Library API with Google Books fallback — broad catalog coverage with graceful degradation.",
      },
      {
        heading: "Private Annotations",
        body: "Notes and highlights stay within the user's circle — never surfaced to a public feed.",
      },
    ],
    url: "",
    imageSrc: "/portfolio/shelfmate.png",
    tags: ["Flutter", "Supabase", "Open Library API", "Google Books API", "iOS", "Android"],
    category: "Labs",
    status: "Pre-Development",
  },
  {
    id: "daily-tao",
    title: "Daily Tao",
    summary:
      "A daily Tao Te Ching verse app with scheduled push notifications — one verse per day, one daily reminder, no feed, no social layer. One feature, done correctly.",
    highlights: [
      {
        heading: "One Feature, Done Right",
        body: "Single daily verse with a scheduled push notification — no feed, no social layer, no unnecessary complexity.",
      },
      {
        heading: "iOS & Android",
        body: "Native push notifications via APNs and FCM; scheduled delivery respects the user's local timezone.",
      },
      {
        heading: "Purposeful Simplicity",
        body: "Not every product needs to be complex. This one does exactly what it says and nothing else.",
      },
    ],
    url: "",
    imageSrc: "/portfolio/daily-tao.png",
    tags: ["Flutter", "APNs", "FCM", "iOS", "Android"],
    category: "Labs",
    status: "In Development",
  },
];
