import Link from "next/link";

const trustItems = [
  "Veteran-owned",
  "Remote-native",
  "Web & mobile apps",
  "StreamHalla is live",
] as const;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl pt-24 md:pt-32">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <img src="/ghost.svg" alt="Bunshin ghost" className="h-5 w-5" />
            </span>
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-gradient-cyan">
              Engineering magic
            </p>
          </div>
          <div className="mx-auto mt-[calc((0.9rem-2px)/2)] mb-[calc((0.9rem-2px)/2)] h-[2px] w-8 rounded-full bg-primary" aria-hidden />
        </div>
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Make the imagined{" "}
          <span className="text-gradient-cyan">real.</span>
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up font-sans"
          style={{ animationDelay: "0.2s" }}
        >
          Bunshin is a veteran-owned product studio. We build and launch our own software, and we love teaming up with other builders to bring their web and mobile apps to life. You own the vision; we&apos;re the build.
        </p>
        <div
          className="flex flex-col items-center animate-fade-in-up gap-8"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            href="/portfolio"
            className="font-mono text-base bg-primary text-primary-foreground px-8 py-4 rounded-md cyan-glow hover:animate-pulse-glow transition-all duration-300 font-semibold w-full sm:w-auto"
          >
            See what we&apos;ve built
          </Link>
          <div className="w-full max-w-3xl border-t border-border pt-8">
            <p className="font-mono text-xs md:text-sm text-muted-foreground tracking-wide leading-relaxed">
              {trustItems.map((item, i) => (
                <span key={item}>
                  {i > 0 && <span className="mx-2 text-primary/60">·</span>}
                  <span className="text-foreground/90">{item}</span>
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
