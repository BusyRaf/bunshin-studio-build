import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Bunshin Development Studios",
    template: "%s | Bunshin Development Studios",
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Bunshin Development Studios",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Bunshin Development Studios",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Bunshin Development Studios" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bunshin Development Studios",
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
};

const orgSchema = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/ghost.svg`,
    image: `${siteConfig.url}/og-image.png`,
    description: siteConfig.description,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "St. Augustine",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", "name": "Jacksonville" },
      { "@type": "City", "name": "St. Augustine" },
      { "@type": "AdministrativeArea", "name": "Duval County" },
      { "@type": "AdministrativeArea", "name": "St. Johns County" },
      { "@type": "AdministrativeArea", "name": "Clay County" },
      { "@type": "AdministrativeArea", "name": "Flagler County" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        {children}
      </body>
    </html>
  );
}
