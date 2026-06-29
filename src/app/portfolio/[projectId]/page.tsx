import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioProjects } from "@/data/portfolio";
import { siteConfig } from "@/data/seo";

export function generateStaticParams() {
  const staticRouteIds = new Set(["fishing-with-friends", "animal-control-platform", "streamhalla"]);
  return portfolioProjects
    .filter((project) => !staticRouteIds.has(project.id))
    .map((project) => ({ projectId: project.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ projectId: string }> }): Promise<Metadata> {
  const { projectId } = await params;
  const project = portfolioProjects.find((item) => item.id === projectId);
  if (!project) return {};
  return {
    title: `${project.title} | Portfolio`,
    description: project.summary,
    alternates: { canonical: `${siteConfig.url}/portfolio/${project.id}` },
    openGraph: {
      title: `${project.title} | Portfolio`,
      description: project.summary,
      url: `${siteConfig.url}/portfolio/${project.id}`,
      images: project.imageSrc ? [{ url: `${siteConfig.url}${project.imageSrc}` }] : [],
    },
  };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;
  const project = portfolioProjects.find((item) => item.id === projectId);
  if (!project) notFound();

  const isLive =
    project.status === "Live" || project.status === "Available" || project.status === "Delivered";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24 md:pt-32">
        <section className="container mx-auto px-6 max-w-4xl mb-10 pb-10 border-b border-border">
          <p className="font-mono text-xs text-primary mb-5">// case study</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-[-0.03em] mb-6 text-balance">{project.title}</h1>
          <div className="flex flex-wrap items-center gap-2">
            {project.category && (
              <span className="font-mono text-[11px] text-primary border border-primary/30 rounded-md px-2.5 py-1">{project.category}</span>
            )}
            {project.status && (
              <span className={`font-mono text-[11px] rounded-md px-2.5 py-1 border ${isLive ? "border-emerald-500/30 text-emerald-300" : "border-border text-muted-foreground"}`}>
                {project.status}
              </span>
            )}
            {(project.tags ?? []).map((tag) => (
              <span key={tag} className="font-mono text-[11px] text-muted-foreground border border-border rounded-md px-2.5 py-1">{tag}</span>
            ))}
          </div>
        </section>

        {project.imageSrc && (
          <section className="container mx-auto px-6 max-w-4xl mb-12">
            <div className="rounded-2xl border border-border overflow-hidden bg-card flex items-center justify-center">
              <img src={project.imageSrc} alt={project.title} className="w-full max-h-[460px] object-contain" />
            </div>
          </section>
        )}

        <section className="container mx-auto px-6 max-w-4xl mb-14">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">{project.summary}</p>
        </section>

        <section className="container mx-auto px-6 max-w-4xl mb-14">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">What we built</h2>
          <div className="border-t border-border">
            {project.highlights.map((item) => (
              <div key={item.heading} className="border-b border-border py-6 grid md:grid-cols-[1fr_1.6fr] gap-2 md:gap-8">
                <h3 className="font-display text-lg font-bold">{item.heading}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {project.images && project.images.length > 1 && (
          <section className="container mx-auto px-6 max-w-4xl mb-14">
            <div className={`grid gap-4 ${project.images.length === 4 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
              {project.images.map((src, i) => (
                <img key={src} src={src} alt={`${project.title} screenshot ${i + 1}`} className="w-full rounded-xl border border-border" />
              ))}
            </div>
          </section>
        )}

        {project.testimonial && (
          <section className="container mx-auto px-6 max-w-4xl mb-14">
            <blockquote className="font-display text-2xl md:text-3xl font-semibold leading-[1.2] tracking-[-0.01em] max-w-3xl mb-6 text-balance">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 flex-wrap">
              <p className="font-mono text-sm text-muted-foreground">{project.testimonial.author}</p>
              {project.testimonial.href && (
                <a href={project.testimonial.href} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-primary hover:underline underline-offset-4">
                  ★★★★★ Google review →
                </a>
              )}
            </div>
          </section>
        )}

        <section className="container mx-auto px-6 max-w-4xl mt-4">
          <div className="rounded-2xl border border-border p-10 md:p-14 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Want something like this built?</h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
              Tell us what you&apos;re building. We&apos;ll figure out the rest together, no sales call, no pressure.
            </p>
            <Link href="/contact" className="font-sans font-semibold text-base bg-[#6a37e0] text-white px-8 py-4 rounded-xl hover:bg-[#7b4bff] transition-colors inline-block">
              Start a build
            </Link>
          </div>
        </section>

        <section className="container mx-auto px-6 max-w-4xl mt-10 flex items-center justify-between">
          <Link href="/portfolio" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
            ← All work
          </Link>
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-primary hover:underline underline-offset-4">
              Visit live site →
            </a>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
