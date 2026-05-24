import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { serviceLines } from "@/data/services";
import { siteConfig } from "@/data/seo";

const slugMeta: Record<string, { title: string; description: string; h1: string }> = {
  "custom-web-applications": {
    title: "Custom Web Application Development Jacksonville FL | Bunshin Development Studios",
    description: "Custom web application developer in Jacksonville, FL. HIPAA-compliant portals, dashboards, SaaS builds, and B2B integrations — senior-led, fixed-price.",
    h1: "Custom Web Application Development — Jacksonville, FL",
  },
  "mobile-development": {
    title: "Mobile App Developer Jacksonville FL | Bunshin Development Studios",
    description: "iOS and Android mobile app development in Jacksonville, FL. Flutter and React Native. Offline-first for field and maritime environments. Senior-led team.",
    h1: "Mobile App Developer — Jacksonville, FL",
  },
  "legacy-modernization": {
    title: "Legacy System Modernization Jacksonville FL | Bunshin Development Studios",
    description: "Legacy system modernization and cloud migration in Jacksonville, FL. .NET upgrades, Azure and AWS migration, HIPAA and CMMC compliance. Start with a $1,500 Technical Audit.",
    h1: "Legacy System Modernization — Jacksonville, FL",
  },
};

export function generateStaticParams() {
  return serviceLines.map((line) => ({ slug: line.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = slugMeta[slug];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `${siteConfig.url}/services/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      url: `${siteConfig.url}/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const line = serviceLines.find((l) => l.id === slug);
  if (!line) notFound();
  const meta = slugMeta[slug];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24 md:pt-32">
        <section className="container mx-auto px-6 max-w-4xl mb-12">
          <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-4">Services</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{meta?.h1 ?? line.title}</h1>
          <p className="text-muted-foreground font-sans leading-relaxed max-w-2xl">{line.intro}</p>
        </section>

        <section className="container mx-auto px-6 max-w-4xl mb-12">
          <div className="glass rounded-xl p-8 md:p-10 border border-border">
            <p className="font-mono text-xs text-primary tracking-[0.25em] uppercase mb-6">What's Included</p>
            <ul className="space-y-3">
              {line.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-2 text-sm text-muted-foreground font-sans">
                  <span className="text-primary font-mono mt-0.5 shrink-0">→</span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container mx-auto px-6 max-w-4xl mb-12">
          <div className="glass rounded-xl p-8 md:p-10 border border-border">
            <p className="font-mono text-xs text-primary tracking-[0.25em] uppercase mb-6">Pricing</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-sans border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left font-mono text-xs text-muted-foreground pb-2 pr-4 w-1/3">Engagement</th>
                    <th className="text-left font-mono text-xs text-muted-foreground pb-2 pr-4 w-1/3">Scope</th>
                    <th className="text-left font-mono text-xs text-muted-foreground pb-2">Range</th>
                  </tr>
                </thead>
                <tbody>
                  {line.pricing.map((tier) => (
                    <tr key={tier.engagement} className="border-b border-border/40 last:border-0">
                      <td className="py-3 pr-4 font-mono font-semibold text-foreground text-xs">{tier.engagement}</td>
                      <td className="py-3 pr-4 text-muted-foreground text-xs leading-relaxed">{tier.scope}</td>
                      <td className="py-3 text-foreground font-mono text-xs whitespace-nowrap">{tier.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 max-w-4xl">
          <Link href="/services" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
            ← All Services
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
