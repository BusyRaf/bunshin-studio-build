import { Ghost } from "lucide-react";

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Ghost className="text-primary" size={28} />
            <p className="font-mono text-sm text-primary tracking-[0.3em] uppercase">
              The Philosophy
            </p>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Your Technical <span className="text-gradient-cyan">Shadow.</span>
          </h2>

          <div className="glass rounded-lg p-8 md:p-12 space-y-6">
            <p className="text-lg text-secondary-foreground leading-relaxed font-sans">
              <span className="text-primary font-mono font-semibold">Bunshin (分身)</span> means
              "Other Self" — a shadow clone that extends your capabilities. We act as a seamless
              extension of your team, absorbing your vision, culture, and goals.
            </p>
            <p className="text-muted-foreground leading-relaxed font-sans">
              Whether you're a founder with a prototype, a startup scaling fast, or an enterprise
              modernizing legacy systems — Bunshin becomes the engineering arm you need, without
              the overhead of building one from scratch. We move in your shadow, amplifying your
              output while you stay focused on the big picture.
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <div className="w-1 h-12 bg-primary rounded-full" />
              <p className="font-mono text-sm text-muted-foreground italic">
                "The best technology partner is invisible — you only see the results."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
