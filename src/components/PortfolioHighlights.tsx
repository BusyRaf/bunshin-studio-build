import Link from "next/link";

const shelf = [
  { id: "streamhalla", name: "StreamHalla", meta: "B2C · LIVE", line: "AI-powered VOD analytics for Twitch, YouTube, and Kick streamers: a sentiment timeline and a coaching scorecard from one link." },
  { id: "animal-control-platform", name: "Animal Control", meta: "B2G · AVAILABLE", line: "90-second field intake with lookup across four microchip registries and owner notification before the officer leaves the scene." },
  { id: "fishing-with-friends", name: "Fishing with Friends", meta: "B2C · PRIVATE BETA", line: "Offline-first iOS and Android app for catch logging and live tournaments, built for low-signal water." },
  { id: "core-property-ventures", name: "Core Property Ventures", meta: "CLIENT BUILD", line: "An established business we gave its digital counterpart. Built for someone who brought us their vision." },
];

const PortfolioHighlights = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Products we&apos;ve built</h2>
          <span className="font-mono text-sm text-muted-foreground">(0{shelf.length})</span>
        </div>
        <p className="text-muted-foreground mb-10 max-w-xl">
          Our own work is the proof. The hero of the studio is the build, not the pitch.
        </p>
        <div className="border-t border-border">
          {shelf.map((p, i) => (
            <Link
              key={p.id}
              href={`/portfolio/${p.id}`}
              className="group grid grid-cols-[44px_1fr_auto] md:grid-cols-[56px_1.1fr_1.6fr_auto] gap-x-7 gap-y-1.5 items-center py-7 border-b border-border hover:pl-3 transition-all duration-300"
            >
              <span className="font-mono text-muted-foreground">0{i + 1}</span>
              <div>
                <h3 className="font-display text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">{p.name}</h3>
                <span className="block font-mono text-[11px] text-muted-foreground tracking-wider mt-1.5">{p.meta}</span>
              </div>
              <p className="hidden md:block text-muted-foreground text-sm max-w-md">{p.line}</p>
              <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all text-xl">→</span>
            </Link>
          ))}
        </div>
        <Link href="/portfolio" className="inline-block mt-8 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors">
          View all work →
        </Link>
      </div>
    </section>
  );
};

export default PortfolioHighlights;
