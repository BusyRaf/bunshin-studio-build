import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioProjects } from "@/data/portfolio";
import { siteConfig } from "@/data/seo";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ projectId: project.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ projectId: string }> }): Promise<Metadata> {
  const { projectId } = await params;
  const project = portfolioProjects.find((item) => item.id === projectId);
  if (!project) return {};
  return {
    title: `${project.title} | Portfolio`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Portfolio`,
      description: project.summary,
      url: `${siteConfig.url}/portfolio/${project.id}`,
      images: [project.imageSrc],
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
      <main className="pt-28 pb-24 md:pt-32 container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>
        <img src={project.imageSrc} alt={`${project.title} homepage screenshot`} className="w-full rounded-xl border border-border mb-8" />
        <p className="text-muted-foreground leading-relaxed mb-8">{project.summary}</p>
        <ul className="space-y-3">
          {project.highlights.map((item) => (
            <li key={item.heading} className="text-muted-foreground">
              <span className="font-mono text-primary">{item.heading}:</span> {item.body}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
