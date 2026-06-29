import Link from "next/link";

const trustItems = [
  "Veteran-owned",
  "Remote-native",
  "Web & mobile apps",
  "StreamHalla is live",
] as const;

const studioLog = [
  { name: "StreamHalla", status: "live", live: true },
  { name: "Animal Control Platform", status: "available", live: true },
  { name: "Fishing with Friends", status: "private beta", live: false },
] as const;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            <p className="inline-flex items-center gap-2.5 font-mono text-sm text-primary mb-6">
              <span className="inline-block h-[7px] w-[7px] rounded-full bg-primary" />
              Engineering magic
            </p>
            <h1 className="font-display text-[3.25rem] leading-[0.97] md:text-7xl lg:text-[5.25rem] font-extrabold tracking-[-0.035em] text-balance">
              Make the imagined <span className="text-primary">real.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              A veteran-owned product studio. We build and launch our own software, and team up with other
              builders to bring their web and mobile apps to life. You own the vision; we&apos;re the build.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className="font-sans font-semibold bg-[#6a37e0] text-white px-7 py-3.5 rounded-xl hover:bg-[#7b4bff] transition-colors duration-300"
              >
                See what we&apos;ve built
              </Link>
              <Link
                href="/contact"
                className="font-sans font-semibold px-7 py-3.5 rounded-xl border border-border hover:border-primary hover:text-primary transition-colors duration-300"
              >
                Start a build
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[13px] text-foreground/75">
              {trustItems.map((item, i) => (
                <span key={item} className="flex items-center gap-4">
                  {i > 0 && <span className="text-border" aria-hidden>/</span>}
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl border border-border overflow-hidden bg-gradient-to-b from-card to-background animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-border font-mono text-[11.5px] tracking-[0.08em] text-muted-foreground">
              <span>STUDIO LOG</span>
              <span className="flex items-center gap-2 text-primary">
                <span className="h-[7px] w-[7px] rounded-full bg-primary" />
                BUILDING NOW
              </span>
            </div>
            {studioLog.map((p) => (
              <Link
                key={p.name}
                href="/portfolio"
                className="flex items-center justify-between px-5 py-4 border-b border-border text-sm hover:bg-primary/5 transition-colors"
              >
                <span className="font-medium">{p.name}</span>
                <span
                  className={`font-mono text-[11px] px-2.5 py-1 rounded-full inline-flex items-center gap-1.5 ${
                    p.live ? "bg-emerald-400/10 text-emerald-300" : "bg-primary/15 text-primary"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${p.live ? "bg-emerald-300" : "bg-primary"}`} />
                  {p.status}
                </span>
              </Link>
            ))}
            <Link
              href="/portfolio"
              className="flex items-center justify-between px-5 py-4 text-sm text-muted-foreground hover:bg-primary/5 transition-colors"
            >
              <span>the vault</span>
              <span className="font-mono text-[11px]">countless prototypes</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
