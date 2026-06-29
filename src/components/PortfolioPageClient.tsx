import Link from "next/link";
import Navbar from "@/components/Navbar";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";
import { portfolioProjects } from "@/data/portfolio";

const shortName: Record<string, string> = {
  streamhalla: "StreamHalla",
  "animal-control-platform": "Animal Control",
  "fishing-with-friends": "Fishing with Friends",
  "core-property-ventures": "Core Property Ventures",
};
const tagLine: Record<string, string> = {
  "animal-control-platform": "B2G · AVAILABLE",
  "fishing-with-friends": "B2C · PRIVATE BETA",
};
const shortDesc: Record<string, string> = {
  "animal-control-platform":
    "90-second field intake with lookup across four microchip registries and owner notification before the officer leaves the scene.",
  "fishing-with-friends":
    "Offline-first iOS and Android app for catch logging and live tournaments, built for low-signal water.",
};

export default function PortfolioPageClient() {
  const byId = (id: string) => portfolioProjects.find((p) => p.id === id)!;
  const flagship = byId("streamhalla");
  const grid = ["animal-control-platform", "fishing-with-friends"].map(byId);
  const client = byId("core-property-ventures");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 md:pt-32">
        <section className="container mx-auto px-6 max-w-5xl pb-12 border-b border-border">
          <p className="font-mono text-xs text-primary mb-5">// portfolio</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-[-0.03em] mb-5 text-balance">
            Products we&apos;ve built.
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Our own software, and a few things we built for people who brought us their vision. Every one shipped. Every one real.
          </p>
        </section>

        {/* Flagship */}
        <section className="container mx-auto px-6 max-w-5xl py-14 md:py-16 border-b border-border">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <Link href={`/portfolio/${flagship.id}`} className="block rounded-2xl border border-border overflow-hidden bg-card aspect-[16/11] group">
              <img src={flagship.imageSrc} alt={flagship.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
            </Link>
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground mb-4">
                <span>FLAGSHIP</span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-300 inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />live
                </span>
                <span>B2C</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">StreamHalla</h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                AI-powered VOD analytics for Twitch, YouTube, and Kick streamers. Drop in one VOD link and get a
                sentiment timeline, a six-axis coaching scorecard, and a five-point next-stream action plan. Built
                around the streamer community it serves.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {(flagship.tags ?? []).slice(0, 5).map((t) => (
                  <span key={t} className="font-mono text-[11px] text-muted-foreground border border-border rounded-md px-2.5 py-1">{t}</span>
                ))}
              </div>
              <Link href={`/portfolio/${flagship.id}`} className="font-semibold text-primary hover:underline underline-offset-4">
                Read the case study →
              </Link>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="container mx-auto px-6 max-w-5xl py-14 md:py-16">
          <p className="font-mono text-xs text-muted-foreground tracking-wider mb-8">MORE FROM THE SHELF</p>
          <div className="grid md:grid-cols-2 gap-6">
            {grid.map((p) => (
              <Link key={p.id} href={`/portfolio/${p.id}`} className="group rounded-2xl border border-border overflow-hidden hover:border-primary transition-all duration-300">
                <div className="aspect-[16/8] bg-card overflow-hidden border-b border-border">
                  <img src={p.imageSrc} alt={p.title} className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <p className="font-mono text-[11px] text-muted-foreground tracking-wider mb-2.5">{tagLine[p.id]}</p>
                  <h3 className="font-display text-2xl font-extrabold mb-2.5 group-hover:text-primary transition-colors">{shortName[p.id]}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{shortDesc[p.id]}</p>
                </div>
              </Link>
            ))}
          </div>

          <Link href={`/portfolio/${client.id}`} className="group mt-6 grid md:grid-cols-[1fr_1.3fr] rounded-2xl border border-border overflow-hidden hover:border-primary transition-all duration-300">
            <div className="bg-card border-b md:border-b-0 md:border-r border-border flex items-center justify-center p-10 min-h-[180px]">
              <img src={client.imageSrc} alt={client.title} className="max-h-28 w-auto object-contain" />
            </div>
            <div className="p-9 md:p-11 flex flex-col justify-center">
              <p className="font-mono text-[11px] text-primary tracking-wider mb-3">BUILT FOR SOMEONE WHO BROUGHT US THEIR VISION</p>
              <h3 className="font-display text-2xl font-extrabold mb-3 group-hover:text-primary transition-colors">Core Property Ventures</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                An established business that wanted the digital counterpart it deserved. They brought the vision and
                the means; we built and launched it, with the same rigor as our own products.
              </p>
              <span className="font-semibold text-primary group-hover:underline underline-offset-4">Read the case study →</span>
            </div>
          </Link>
        </section>
      </main>
      <BottomCTA />
      <Footer />
    </div>
  );
}
