const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-display text-3xl md:text-[2.6rem] font-bold leading-[1.06] mb-12 max-w-[22ch] text-balance">
          You work with the people who actually build it.{" "}
          <span className="text-primary">Jose is the spark. Rafael is the vehicle.</span>
        </h2>
        <div className="grid md:grid-cols-2 border border-border rounded-2xl overflow-hidden">
          <div className="p-9 md:p-11 md:border-r border-border">
            <p className="font-mono text-xs text-primary tracking-wider mb-3">THE VEHICLE — OPERATIONS &amp; STRATEGY</p>
            <h3 className="font-display text-2xl font-extrabold mb-4">Rafael Bejaran</h3>
            <p className="text-muted-foreground leading-relaxed">
              Personally accountable for your build. Navy safety-of-flight radar across three fleets, then a
              friend&apos;s house full of GPU mining rigs that pulled him into Web3, where he learned how a
              community forms around a product. PMP and CSM certified.
            </p>
          </div>
          <div className="p-9 md:p-11 border-t md:border-t-0 border-border">
            <p className="font-mono text-xs text-primary tracking-wider mb-3">THE SPARK — TECHNOLOGY &amp; ARCHITECTURE</p>
            <h3 className="font-display text-2xl font-extrabold mb-4">Jose Diaz</h3>
            <p className="text-muted-foreground leading-relaxed">
              Can&apos;t propose a solution without building it first. Fifteen years in software&apos;s least
              forgiving corners: AT&amp;T, Susquehanna nuclear, a 100% HIPAA-compliant migration at Jefferson
              Health. Every line of production code passes through his review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
