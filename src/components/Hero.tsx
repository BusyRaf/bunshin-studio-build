const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(180 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(180 100% 50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        <p className="font-mono text-sm text-primary tracking-[0.3em] uppercase mb-6 animate-fade-in-up">
          Development Studios
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Bridging the gap between{" "}
          <span className="text-gradient-cyan">'Vibe-Coded'</span> and Functional.
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up font-sans"
          style={{ animationDelay: "0.2s" }}
        >
          AI is blurring the line between vision and reality. Bunshin provides the senior
          engineering and project management required to turn fragile prototypes into hardened
          commercial solutions.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <button
            onClick={scrollToContact}
            className="font-mono text-base bg-primary text-primary-foreground px-8 py-4 rounded-md cyan-glow hover:animate-pulse-glow transition-all duration-300 font-semibold"
          >
            Start a Build
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
