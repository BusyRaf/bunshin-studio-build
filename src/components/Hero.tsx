import ghost from "../../Assets/ghost.svg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(180 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(180 100% 50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl pt-24 md:pt-32">
        <div
          className="flex items-center justify-center gap-3 mb-6 animate-fade-in-up"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
            <img
              src={ghost}
              alt="Bunshin ghost"
              className="h-5 w-5"
            />
          </span>
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-gradient-cyan">
            Bunshin Development Studios
          </p>
        </div>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Stop Prompt Looping. <br className="hidden md:block" />
          <span className="text-gradient-cyan">Start Scaling.</span>
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up font-sans"
          style={{ animationDelay: "0.2s" }}
        >
          We turn fragile &quot;vibe-coded&quot; prototypes into investor-ready, high-performance
          products. Gain 100% ownership of your stack and the freedom to focus on growth—not
          debugging.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            onClick={() => scrollToSection("#checklist")}
            className="font-mono text-base bg-primary text-primary-foreground px-8 py-4 rounded-md cyan-glow hover:animate-pulse-glow transition-all duration-300 font-semibold w-full sm:w-auto"
          >
            Review Your Prototype
          </button>
          <button
            onClick={() => scrollToSection("#bunshin-build")}
            className="font-mono text-base px-8 py-4 rounded-md border border-primary/60 text-primary bg-background/40 hover:bg-primary/10 transition-all duration-300 font-semibold w-full sm:w-auto"
          >
            Explore Bunshin Build
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
