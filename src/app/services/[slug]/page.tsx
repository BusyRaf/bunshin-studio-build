import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { serviceLines } from "@/data/services";
import { routeMetadata } from "@/data/seo";

export function generateStaticParams() {
  return serviceLines.map((line) => ({ slug: line.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return routeMetadata[`/services/${slug}`] ?? {};
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const line = serviceLines.find((l) => l.id === slug);
  if (!line) notFound();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24 md:pt-32">
        <section className="container mx-auto px-6 max-w-3xl mb-12">
          <p className="font-mono text-xs text-primary mb-4">// {line.eyebrow.toLowerCase()}</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-6 leading-[1.0] tracking-[-0.03em]">{line.title}</h1>
          <p className="text-lg text-muted-foreground font-sans leading-relaxed">{line.intro}</p>
        </section>

        <section className="container mx-auto px-6 max-w-3xl space-y-6 mb-12">
          {line.body.map((para, i) => (
            <p key={i} className="text-muted-foreground font-sans leading-relaxed">
              {para}
            </p>
          ))}

          {line.examples && (
            <div className="space-y-4">
              <p className="text-muted-foreground font-sans leading-relaxed">You might be:</p>
              <ul className="space-y-2">
                {line.examples.map((ex) => (
                  <li key={ex} className="flex items-start gap-2 text-muted-foreground font-sans">
                    <span className="text-primary font-mono mt-1 shrink-0">·</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground font-sans leading-relaxed">
                If you didn&apos;t see your exact situation, that&apos;s fine. If it runs on software, we can build it.
              </p>
            </div>
          )}

          <p className="text-foreground font-sans leading-relaxed">{line.proof}</p>
        </section>

        <section className="container mx-auto px-6 max-w-3xl">
          <div className="rounded-2xl p-8 md:p-10 border border-border text-center">
            <p className="text-lg text-foreground font-sans leading-relaxed mb-6 max-w-xl mx-auto">{line.cta}</p>
            <Link
              href="/contact"
              className="font-sans font-semibold text-base bg-[#6a37e0] text-white px-8 py-4 rounded-xl hover:bg-[#7b4bff] transition-colors inline-block"
            >
              Start a build
            </Link>
          </div>
        </section>

        <section className="container mx-auto px-6 max-w-3xl mt-12">
          <Link href="/services" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
            ← What we build
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
