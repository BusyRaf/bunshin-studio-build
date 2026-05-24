const LeadMagnet = () => {
  return (
    <section id="our-standard" className="py-24 md:py-32 border-t border-accent-purple/20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="glass rounded-2xl p-8 md:p-10 border border-primary/20 relative overflow-hidden">
          <div className="absolute -right-32 -top-32 w-80 h-80 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10">
            <p className="font-mono text-sm text-primary tracking-[0.3em] uppercase mb-4">Our Standard</p>
            <blockquote className="text-lg md:text-xl text-foreground font-sans leading-relaxed mb-6 border-l-4 border-primary pl-6 italic">
              &ldquo;Failure never shows up on the spot. It shows up later — in operation, at inconvenient moments, at high cost.&rdquo;
            </blockquote>
            <p className="text-muted-foreground mb-6 font-sans leading-relaxed">
              We learned that working in environments where the stakes made it true — nuclear power operations, naval
              fleet readiness, health systems, financial infrastructure. A practice owner who cannot afford a compliance
              failure, a prime contractor where a missed requirement does not get a do-over, a business whose growth has
              lapped its infrastructure — none of them can afford to find out what was skipped six months after go-live.
              Every step we take is non-negotiable because the ones that get skipped are the ones that come back.
            </p>
            <p className="font-mono text-sm text-primary tracking-wide">Veteran-owned and operated · St. Augustine, FL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
