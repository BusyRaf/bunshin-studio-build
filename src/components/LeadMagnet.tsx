const LeadMagnet = () => {
  return (
    <section id="checklist" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="glass rounded-2xl p-8 md:p-10 border border-primary/20 relative overflow-hidden">
          <div className="absolute -right-32 -top-32 w-80 h-80 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10">
            <p className="font-mono text-sm text-primary tracking-[0.3em] uppercase mb-4">
              Assess your Prototype
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Is your product ready for the professional stage?
            </h2>
            <p className="text-muted-foreground mb-6 font-sans">
              Transition from a successful prototype to an investor-ready asset.
            </p>

            <div className="bg-background/60 border border-border rounded-lg p-5 mb-8">
              <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-3">
                Checklist Preview
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground font-sans list-disc list-inside">
                <li>Security Implementations: Is your application susceptible to common exploitations?</li>
                <li>Architectural Resilience: Eliminating fragile dependencies to ensure long-term stability.</li>
                <li>Due Diligence Readiness: Preparing your codebase for App Store reviews and partner audits.</li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => {
                  window.location.href = "/assessment";
                }}
                className="font-mono text-sm bg-primary text-primary-foreground px-6 py-3 rounded-md cyan-glow hover:animate-pulse-glow transition-all duration-300 font-semibold w-full sm:w-auto text-center max-w-xs"
              >
                Take Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;

