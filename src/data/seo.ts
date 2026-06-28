import type { Metadata } from "next";

export const siteConfig = {
  name: "Bunshin Development Studios",
  description:
    "Veteran-owned product studio. We turn ideas into launched web and mobile apps and build custom software for businesses. Based in Jacksonville and St. Augustine, FL; building for clients anywhere.",
  url: "https://bunshin.io",
};

export const routeMetadata: Record<string, Metadata> = {
  "/": {
    title: { absolute: "Product Studio & Custom App Developer in Jacksonville, FL | Bunshin" },
    description:
      "Veteran-owned product studio. We turn ideas into launched web and mobile apps and build custom software for businesses. Based in Jacksonville and St. Augustine, FL; building for clients anywhere.",
    alternates: { canonical: siteConfig.url },
    openGraph: {
      title: "Product Studio & Custom App Developer in Jacksonville, FL | Bunshin",
      description:
        "Veteran-owned product studio. We turn ideas into launched web and mobile apps and build custom software for businesses. Remote-native; based in Jacksonville and St. Augustine, FL.",
      type: "website",
      url: siteConfig.url,
    },
  },
  "/services": {
    title: { absolute: "What We Build: Web & Mobile Apps, MVPs & Custom Software | Bunshin" },
    description:
      "From an idea to a launched product, or a custom app for your existing business. Web and mobile builds by a veteran-owned product studio. Remote-native, rooted in Jacksonville and St. Augustine, FL.",
    alternates: { canonical: `${siteConfig.url}/services` },
    openGraph: {
      title: "What We Build: Web & Mobile Apps, MVPs & Custom Software | Bunshin",
      description:
        "From an idea to a launched product, or a custom app for your existing business. Web and mobile builds by a veteran-owned product studio. Remote-native, rooted in Jacksonville and St. Augustine, FL.",
      type: "website",
      url: `${siteConfig.url}/services`,
    },
  },
  "/services/greenfield": {
    title: { absolute: "Turn Your Idea Into an App: Product Studio for Founders | Bunshin" },
    description:
      "Have an app idea but no technical co-founder? We build your web or mobile product from scratch and launch it. You own the vision; we make it real. Building for founders anywhere.",
    alternates: { canonical: `${siteConfig.url}/services/greenfield` },
    openGraph: {
      title: "Turn Your Idea Into an App: Product Studio for Founders | Bunshin",
      description:
        "Have an app idea but no technical co-founder? We build your web or mobile product from scratch and launch it. You own the vision; we make it real.",
      type: "website",
      url: `${siteConfig.url}/services/greenfield`,
    },
  },
  "/services/for-your-business": {
    title: { absolute: "Custom App for Your Business: Booking, Ecommerce & Portals | Bunshin" },
    description:
      "You built a real business. We build the custom web or mobile app it deserves: booking, ecommerce, customer portals, and more. Serving Jacksonville and St. Augustine, FL, and clients nationwide.",
    alternates: { canonical: `${siteConfig.url}/services/for-your-business` },
    openGraph: {
      title: "Custom App for Your Business: Booking, Ecommerce & Portals | Bunshin",
      description:
        "You built a real business. We build the custom web or mobile app it deserves: booking, ecommerce, customer portals, and more. Local to Jacksonville and St. Augustine, FL; building nationwide.",
      type: "website",
      url: `${siteConfig.url}/services/for-your-business`,
    },
  },
  "/portfolio": {
    title: { absolute: "Products We've Built | Bunshin Product Studio" },
    description:
      "Web and mobile products from Bunshin, a veteran-owned product studio: StreamHalla (live AI VOD analytics) and more, taken from idea to launch.",
    alternates: { canonical: `${siteConfig.url}/portfolio` },
    openGraph: {
      title: "Products We've Built | Bunshin Product Studio",
      description:
        "Web and mobile products from Bunshin, a veteran-owned product studio: StreamHalla (live AI VOD analytics) and more, taken from idea to launch.",
      type: "website",
      url: `${siteConfig.url}/portfolio`,
    },
  },
  "/faq": {
    title: { absolute: "App Build FAQ: Cost, Timeline & Owning Your Code | Bunshin" },
    description:
      "How much does a custom app cost? Can you build from just an idea? Do I own the code? Straight answers from Bunshin, a veteran-owned product studio building web and mobile apps.",
    alternates: { canonical: `${siteConfig.url}/faq` },
    openGraph: {
      title: "App Build FAQ: Cost, Timeline & Owning Your Code | Bunshin",
      description:
        "How much does a custom app cost? Can you build from just an idea? Do I own the code? Straight answers from Bunshin, a veteran-owned product studio.",
      type: "website",
      url: `${siteConfig.url}/faq`,
    },
  },
  "/contact": {
    title: { absolute: "Start a Build | Bunshin Product Studio" },
    description:
      "Tell us what you're building. A veteran-owned product studio that turns ideas into launched web and mobile apps. No sales funnel; you reach the builders directly.",
    alternates: { canonical: `${siteConfig.url}/contact` },
    openGraph: {
      title: "Start a Build | Bunshin Product Studio",
      description:
        "Tell us what you're building. A veteran-owned product studio that turns ideas into launched web and mobile apps. No sales funnel; you reach the builders directly.",
      type: "website",
      url: `${siteConfig.url}/contact`,
    },
  },
  "/about": {
    title: { absolute: "About: Veteran-Owned Product Studio | Bunshin" },
    description:
      "Two builders from nuclear, naval, healthcare, and Web3, now building products people love. Veteran-owned and remote-native, rooted in St. Augustine, FL.",
    alternates: { canonical: `${siteConfig.url}/about` },
    openGraph: {
      title: "About: Veteran-Owned Product Studio | Bunshin",
      description:
        "Two builders from nuclear, naval, healthcare, and Web3, now building products people love. Veteran-owned and remote-native, rooted in St. Augustine, FL.",
      type: "website",
      url: `${siteConfig.url}/about`,
    },
  },
};

export const staticRoutes = ["/", "/services", "/portfolio", "/faq", "/contact", "/about"];
