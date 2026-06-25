import Link from "next/link";
import { portfolioProjects } from "@/data/portfolio";

const featuredIds = ["streamhalla", "animal-control-platform", "fishing-with-friends"];

const shortDescriptions: Record<string, string> = {
  streamhalla:
    "AI-powered VOD analytics for Twitch, YouTube, and Kick streamers — a sentiment timeline, a six-axis coaching scorecard, and a five-point next-stream action plan from one VOD link.",
  "animal-control-platform":
    "90-second digital field intake, one-handed, with simultaneous lookup across four microchip registries and automatic owner notification before the officer leaves the scene.",
  "fishing-with-friends":
    "Offline-first iOS and Android app for GPS-tagged catch logging, friend-scoped activity, and live competitive tournaments — built for low-signal maritime environments.",
};

const statusStyles: Record<string, string> = {
  Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Available: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Private Beta": "bg-primary/10 text-primary border-primary/20",
  "In Development": "bg-primary/10 text-primary border-primary/20",
};

const featured = featuredIds
  .map((id) => portfolioProjects.find((p) => p.id === id))
  .filter(Boolean) as typeof portfolioProjects;

const PortfolioHighlights = () => {
  return (
    <section className="py-24 md:py-32 border-t border-accent-purple/20">
      <div className="container mx-auto px-6">
        <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase text-center mb-4">
          Selected Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What We Built. What It Replaced.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {featured.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              className="glass rounded-xl p-6 border border-border hover:border-glow transition-all duration-500 flex flex-col group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {project.category === "Internal" ? "Internal Build" : project.category}
                </span>
                {project.status && (
                  <span
                    className={`font-mono text-xs px-2 py-0.5 rounded border ${statusStyles[project.status] ?? "bg-muted/10 text-muted-foreground border-border"}`}
                  >
                    {project.status}
                  </span>
                )}
              </div>

              <h3 className="font-mono text-base font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-muted-foreground font-sans text-sm leading-relaxed flex-1">
                {shortDescriptions[project.id]}
              </p>

              <p className="font-mono text-xs text-primary mt-5 tracking-wide">
                View project →
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/portfolio"
            className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
          >
            View all work →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHighlights;
