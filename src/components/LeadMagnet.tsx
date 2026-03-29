const LeadMagnet = () => {
  return (
    <section id="our-standard" className="py-24 md:py-32 border-t border-accent-purple/20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="glass rounded-2xl p-8 md:p-10 border border-primary/20 relative overflow-hidden">
          <div className="absolute -right-32 -top-32 w-80 h-80 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10">
            <p className="font-mono text-sm text-primary tracking-[0.3em] uppercase mb-4">Our Standard</p>
            <blockquote className="text-lg md:text-xl text-foreground font-sans leading-relaxed mb-6 border-l-4 border-primary pl-6 italic">
              &ldquo;We treat every project with the rigor required for critical infrastructure.&rdquo;
            </blockquote>
            <p className="text-muted-foreground mb-6 font-sans leading-relaxed">
              Whether we&apos;re building a first website for a local business or re-architecting an enterprise
              platform, our standard doesn&apos;t change. Reliable systems. Clear communication. Total
              accountability. That expectation came from environments where failure wasn&apos;t an option.
              We&apos;ve never had a reason to lower it.
            </p>
            <p className="font-mono text-sm text-primary tracking-wide">Veteran-owned and operated.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
