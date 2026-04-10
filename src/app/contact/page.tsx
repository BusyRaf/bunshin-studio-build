import type { Metadata } from "next";
import ContactPageClient from "@/components/ContactPageClient";
import { routeMetadata } from "@/data/seo";

export const metadata: Metadata = routeMetadata["/contact"];

export default function ContactPage() {
  return <ContactPageClient />;
}
