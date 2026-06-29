const LeadMagnet = () => {
  return (
    <section id="our-standard" className="py-28 md:py-36 border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="font-mono text-xs text-primary mb-8">Our standard</p>
        <blockquote className="font-display text-2xl md:text-[2.6rem] font-semibold leading-[1.16] tracking-[-0.02em] text-balance mb-9">
          &ldquo;Failure never shows up on the spot. It shows up later, in operation, at inconvenient
          moments, at <span className="text-primary">high cost.</span>&rdquo;
        </blockquote>
        <p className="text-muted-foreground font-sans leading-relaxed mb-5 max-w-2xl">
          We learned it in environments where the stakes made it true: nuclear power operations, naval
          fleet readiness, health systems, financial infrastructure. A practice owner who cannot afford a
          compliance failure, a prime contractor where a missed requirement does not get a do-over, a
          business whose growth has lapped its infrastructure. None of them can afford to find out what was
          skipped six months after go-live. Every step we take is non-negotiable, because the ones that get
          skipped are the ones that come back.
        </p>
        <p className="font-mono text-sm text-muted-foreground">Veteran-owned and operated · St. Augustine, FL</p>
      </div>
    </section>
  );
};

export default LeadMagnet;
