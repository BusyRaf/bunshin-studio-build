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
            <p className="font-mono text-xs text-primary tracking-wider mb-2">THE VEHICLE — OPERATIONS &amp; STRATEGY</p>
            <h3 className="font-display text-2xl font-extrabold mb-5">Rafael Bejaran</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Rafael is personally accountable for your build, and he&apos;s the same person who scoped it.
                He learned that ownership in the Navy: safety-of-flight radar on aircraft carriers and
                fleet-wide operational readiness across the 2nd, 5th, and 7th Fleets, where failure was never
                just a ticket.
              </p>
              <p>
                Off the clock, his side projects have a habit of becoming his life. One Ethereum mining rig
                became many, until he&apos;d filled a friend&apos;s entire house with GPU clusters, and that&apos;s
                what pulled him into Web3, where he ran token sales, smart contracts, and RWA tokenization and
                learned the thing that powers everything we build: how a real community forms around a product.
                Years later, an AI app he was tinkering with turned into Bunshin.
              </p>
              <p>
                PMP- and CSM-certified, he keeps every build on track and knows in his bones what makes a
                product worth gathering around.
              </p>
            </div>
          </div>
          <div className="p-9 md:p-11 border-t md:border-t-0 border-border">
            <p className="font-mono text-xs text-primary tracking-wider mb-2">THE SPARK — TECHNOLOGY &amp; ARCHITECTURE</p>
            <h3 className="font-display text-2xl font-extrabold mb-5">Jose Diaz</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Jose can&apos;t propose a solution without building it first. Hand him a set of requirements and
                he&apos;s already making it real, so the rest of us have learned to keep him at bay until we&apos;re
                sure we want the thing, because once the idea lands there&apos;s no stopping him.
              </p>
              <p>
                That compulsion runs on nearly fifteen years in software&apos;s least forgiving corners: AT&amp;T,
                Assurant, Talen Energy&apos;s Susquehanna nuclear plant, and a 100% HIPAA-compliant health-records
                migration at Jefferson Health, places where a missed detail isn&apos;t a bug ticket, it&apos;s a
                real-world failure. Compliance-grade engineering is his baseline, not an upgrade.
              </p>
              <p>
                He&apos;s the spark, the one whose ideas become our products, and at Bunshin every line of
                production code passes through his review. The free spirit and the nuclear-grade engineer are
                the same person, and that&apos;s exactly why the things he ships hold up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
