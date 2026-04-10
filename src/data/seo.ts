import type { Metadata } from "next";

export const siteConfig = {
  name: "Bunshin Development Studios",
  description:
    "Enterprise software engineering for modern businesses: full-stack development, cloud migration, and reliable systems.",
  url: "https://bunshin.io",
};

export const routeMetadata: Record<string, Metadata> = {
  "/": {
    title: "Bunshin Development Studios | Enterprise Software Engineering",
    description:
      "Enterprise software engineering for modern businesses, from digital presence to legacy modernization.",
    openGraph: {
      title: "Bunshin Development Studios",
      description:
        "Enterprise software engineering for modern businesses, from digital presence to legacy modernization.",
      type: "website",
      url: `${siteConfig.url}/`,
    },
  },
  "/services": {
    title: "Services | Bunshin Development Studios",
    description: "Custom software engineering, cloud strategy, modernization, and compliance-led delivery.",
    openGraph: {
      title: "Services | Bunshin Development Studios",
      description: "Custom software engineering, cloud strategy, modernization, and compliance-led delivery.",
      type: "website",
      url: `${siteConfig.url}/services`,
    },
  },
  "/portfolio": {
    title: "Portfolio | Bunshin Development Studios",
    description: "A selection of engineering work delivered by Bunshin Development Studios.",
    openGraph: {
      title: "Portfolio | Bunshin Development Studios",
      description: "A selection of engineering work delivered by Bunshin Development Studios.",
      type: "website",
      url: `${siteConfig.url}/portfolio`,
    },
  },
  "/contact": {
    title: "Contact | Bunshin Development Studios",
    description: "Talk with Bunshin Development Studios about your software and platform goals.",
    openGraph: {
      title: "Contact | Bunshin Development Studios",
      description: "Talk with Bunshin Development Studios about your software and platform goals.",
      type: "website",
      url: `${siteConfig.url}/contact`,
    },
  },
};

export const staticRoutes = ["/", "/services", "/portfolio", "/contact"];
