import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioProjects } from "@/data/portfolio";
import { siteConfig } from "@/data/seo";

export function generateStaticParams() {
  // Exclude projects that have a dedicated static route (e.g. fishing-with-friends/page.tsx)
  const staticRouteIds = new Set(["fishing-with-friends", "animal-control-platform", "streamhalla"])
  return portfolioProjects
    .filter((project) => !staticRouteIds.has(project.id))
    .map((project) => ({ projectId: project.id }))
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24 md:pt-32">
        {/* Header */}
        <section className="container mx-auto px-6 max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {project.category && (
              <span className="font-mono text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">{project.category}</span>
            )}
            {project.status && (
              <span className={`font-mono text-xs px-2 py-0.5 rounded border ${
                project.status === "Live" || project.status === "Available"
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                  : "bg-muted/50 text-muted-foreground border-border/60"
              }`}>{project.status}</span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded border border-border/60">{tag}</span>
              ))}
            </div>
          )}
        </section>

        {/* Image(s) */}
        {project.images && project.images.length > 1 ? (
          <section className="container mx-auto px-6 max-w-4xl mb-12">
            <div className={`grid gap-4 ${project.images.length === 4 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-3"}`}>
              {project.images.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full rounded-xl border border-border"
                />
              ))}
            </div>
          </section>
        ) : project.imageSrc ? (
          <section className="container mx-auto px-6 max-w-4xl mb-12">
            <img
              src={project.imageSrc}
              alt={`${project.title} screenshot`}
              className="w-full rounded-xl border border-border"
            />
          </section>
        ) : null}

        {/* Overview */}
        <section className="container mx-auto px-6 max-w-4xl mb-12">
          <div className="glass rounded-xl p-8 md:p-10 border border-border">
            <p className="font-mono text-xs text-primary tracking-[0.25em] uppercase mb-4">Overview</p>
            <p className="text-muted-foreground font-sans leading-relaxed">{project.summary}</p>
          </div>
        </section>

        {/* What We Built */}
        <section className="container mx-auto px-6 max-w-4xl mb-12">
          <p className="font-mono text-xs text-primary tracking-[0.25em] uppercase mb-6">What We Built</p>
          <div className="space-y-4">
            {project.highlights.map((item) => (
              <div key={item.heading} className="glass rounded-lg p-6 border border-border">
                <p className="font-mono text-sm font-semibold text-foreground mb-2">{item.heading}</p>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        {project.testimonial && (
          <section className="container mx-auto px-6 max-w-4xl mb-12">
            <div className="glass rounded-xl p-8 md:p-10 border border-border">
              <p className="font-mono text-xs text-primary tracking-[0.25em] uppercase mb-6">Client Review</p>
              <blockquote className="text-foreground font-sans text-lg leading-relaxed mb-6">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between">
                <p className="font-mono text-sm text-muted-foreground">{project.testimonial.author}</p>
                {project.testimonial.href && (
                  <a
                    href={project.testimonial.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-primary hover:text-accent-purple transition-colors duration-300"
                  >
                    ★★★★★ Google Review →
                  </a>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Footer row */}
        <section className="container mx-auto px-6 max-w-4xl flex items-center justify-between">
          <a href="/portfolio" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
            ← All Projects
          </a>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-primary hover:text-accent-purple transition-colors duration-300"
            >
              Visit Live Site →
            </a>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
