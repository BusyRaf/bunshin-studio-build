import type { Metadata } from "next";

export const siteConfig = {
  name: "Bunshin Development Studios",
  description:
    "Veteran-owned custom software developer in Jacksonville, FL. Web apps, mobile development, and legacy modernization for Northeast Florida businesses.",
  url: "https://bunshin.io",
};

export const routeMetadata: Record<string, Metadata> = {
  "/": {
    title: "Custom Software Developer Jacksonville FL | Bunshin Development Studios",
    description:
      "Custom software developer in Jacksonville, FL. Veteran-owned. Web apps, mobile tools, and legacy modernization for Northeast Florida businesses.",
    alternates: { canonical: siteConfig.url },
    openGraph: {
      title: "Custom Software Developer Jacksonville FL | Bunshin Development Studios",
      description:
        "Custom software developer in Jacksonville, FL. Veteran-owned. Web apps, mobile tools, and legacy modernization for Northeast Florida businesses.",
      type: "website",
      url: siteConfig.url,
    },
  },
  "/services": {
    title: "Software Development Services Jacksonville FL | Bunshin Development Studios",
    description:
      "Legacy modernization, HIPAA-compliant portals, cloud migration, and mobile dev — engineered in Jacksonville, FL by a veteran-owned senior team.",
    alternates: { canonical: `${siteConfig.url}/services` },
    openGraph: {
      title: "Software Development Services Jacksonville FL | Bunshin Development Studios",
      description:
        "Legacy modernization, HIPAA-compliant portals, cloud migration, and mobile dev — engineered in Jacksonville, FL by a veteran-owned senior team.",
      type: "website",
      url: `${siteConfig.url}/services`,
    },
  },
  "/portfolio": {
    title: "Portfolio | Bunshin Development Studios",
    description:
      "Web application and mobile development work from Bunshin — a custom software developer serving Jacksonville and Northeast Florida.",
    alternates: { canonical: `${siteConfig.url}/portfolio` },
    openGraph: {
      title: "Portfolio | Bunshin Development Studios",
      description:
        "Web application and mobile development work from Bunshin — a custom software developer serving Jacksonville and Northeast Florida.",
      type: "website",
      url: `${siteConfig.url}/portfolio`,
    },
  },
  "/contact": {
    title: "Contact | Bunshin Development Studios",
    description:
      "Ready to hire a custom software developer in Jacksonville, FL? Talk to Bunshin. No sales funnel — you reach the engineers directly.",
    alternates: { canonical: `${siteConfig.url}/contact` },
    openGraph: {
      title: "Contact | Bunshin Development Studios",
      description:
        "Ready to hire a custom software developer in Jacksonville, FL? Talk to Bunshin. No sales funnel — you reach the engineers directly.",
      type: "website",
      url: `${siteConfig.url}/contact`,
    },
  },
  "/about": {
    title: "About | Veteran-Owned Software Studio — Bunshin Development Studios",
    description:
      "Veteran-owned software studio in St. Augustine, FL. Principals with careers in nuclear, defense, healthcare, and national telecom. Senior-led engineering serving Jacksonville and Northeast Florida.",
    alternates: { canonical: `${siteConfig.url}/about` },
    openGraph: {
      title: "About | Veteran-Owned Software Studio — Bunshin Development Studios",
      description:
        "Veteran-owned software studio in St. Augustine, FL. Principals with careers in nuclear, defense, healthcare, and national telecom. Senior-led engineering serving Jacksonville and Northeast Florida.",
      type: "website",
      url: `${siteConfig.url}/about`,
    },
  },
};

export const staticRoutes = ["/", "/services", "/portfolio", "/contact", "/about"];
