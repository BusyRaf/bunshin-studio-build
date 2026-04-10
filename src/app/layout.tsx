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
  openGraph: {
    title: "Bunshin Development Studios",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Bunshin Development Studios",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
