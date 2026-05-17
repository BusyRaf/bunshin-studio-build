import Link from "next/link";

const BottomCTA = () => {
  return (
    <section className="py-24 md:py-32 border-t border-primary/20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="glass rounded-2xl p-8 md:p-10 border border-primary/20 relative overflow-hidden text-center">
          <div className="absolute -left-32 -bottom-32 w-80 h-80 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10">
            <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-4">Start the Conversation</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Tell Us the Problem.{" "}
              <span className="text-gradient-cyan">We&apos;ll Come Back With a Fixed Price.</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8 max-w-xl mx-auto">
              A $500 Paid Discovery produces a scoping document, a technical proposal, and a fixed price — credited to your project if you move forward.
            </p>
            <Link
              href="/contact"
              className="font-mono text-base bg-primary text-primary-foreground px-8 py-4 rounded-md cyan-glow hover:animate-pulse-glow transition-all duration-300 font-semibold inline-block"
            >
              Schedule a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
