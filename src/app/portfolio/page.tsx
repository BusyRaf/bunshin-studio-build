import type { Metadata } from "next";
import PortfolioPageClient from "@/components/PortfolioPageClient";
import { routeMetadata } from "@/data/seo";

export const metadata: Metadata = routeMetadata["/portfolio"];

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
