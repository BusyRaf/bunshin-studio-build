import { useNavigate } from "react-router-dom";

const LeadMagnet = () => {
  const navigate = useNavigate();

  return (
    <section id="checklist" className="py-24 md:py-32 border-t border-accent-purple/20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="glass rounded-2xl p-8 md:p-10 border border-primary/20 relative overflow-hidden">
          <div className="absolute -right-32 -top-32 w-80 h-80 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10">
            <p className="font-mono text-sm text-primary tracking-[0.3em] uppercase mb-4">
              72-hour delivery
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for the Professional Stage
            </h2>
            <p className="text-muted-foreground mb-6 font-sans">
              From deposit to live site in 72 hours. Everything your business needs, nothing it
              doesn't.
            </p>

            <div className="bg-background/60 border border-border rounded-lg p-5 mb-8">
              <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-3">
                What&apos;s included
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground font-sans list-disc list-inside">
                <li>Custom design & SEO built in</li>
                <li>AI-discovery ready — found in ChatGPT, Gemini, and beyond</li>
                <li>Mobile-first and secure by default</li>
                <li>100% yours — no hidden fees, no lock-in</li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => {
                  navigate("/contact");
                }}
                className="font-mono text-sm px-6 py-3 rounded-md border-2 border-primary text-primary bg-transparent hover:bg-primary/10 transition-all duration-300 font-semibold w-full sm:w-auto text-center max-w-xs"
              >
                Claim Your Spot
              </button>
              <p className="text-[13px] text-muted-foreground text-center font-sans max-w-[420px] mt-2 mx-auto">
                We work in limited cohorts to guarantee our 72-hour standard. Check if your spot is
                still available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;

