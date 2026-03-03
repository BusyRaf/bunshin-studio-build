import { useState } from "react";
import { Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const XIcon = ({ className, size = 20 }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

type Answer = "yes" | "no" | "unsure" | null;

const questions = [
  {
    id: "scale",
    label:
      "If your app experienced a 10x spike in traffic tonight, are you confident the infrastructure is optimized to prevent a system crash?",
  },
  {
    id: "security",
    label:
      "Have you implemented industry-standard protocols for Auth, API rate limiting, and data encryption to protect user data?",
  },
  {
    id: "ownership",
    label:
      "Do you have 100% ownership of your stack, or is your logic locked into a proprietary platform that could change its terms or pricing?",
  },
  {
    id: "resilience",
    label:
      "Do you have a professional staging environment and CI/CD pipeline to test features without risking your live production app?",
  },
  {
    id: "compliance",
    label:
      "If a partner or acquirer performed a technical audit today, would your codebase reflect a professional asset ready for due diligence?",
  },
];

const Assessment = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, Answer>>({
    scale: null,
    security: null,
    ownership: null,
    resilience: null,
    compliance: null,
  });

  const allAnswered = questions.every((q) => answers[q.id]);
  const allYes = questions.every((q) => answers[q.id] === "yes");
  const showResult = allAnswered;

  const handleChange = (id: string, value: Answer) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-6 max-w-3xl">
          <header className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Is your product ready for the professional stage?
            </h1>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
              You&apos;ve built the vision. Now, ensure the foundation is prepared for investors,
              scale, and long-term ownership.
            </p>
          </header>

          <div className="glass rounded-2xl p-6 md:p-8 space-y-6">
            <p className="font-mono text-xs text-primary tracking-[0.25em] uppercase">
              5-Question Technical Diagnostic
            </p>

            <div className="space-y-6 mt-4">
              {questions.map((q) => (
                <div key={q.id} className="border border-border/60 rounded-xl p-4 md:p-5 bg-background/40">
                  <p className="text-sm md:text-base text-secondary-foreground font-sans mb-4">
                    {q.label}
                  </p>
                  <ToggleGroup
                    type="single"
                    value={answers[q.id] ?? undefined}
                    onValueChange={(value) => handleChange(q.id, (value || null) as Answer)}
                    className="justify-start gap-2"
                  >
                    <ToggleGroupItem value="yes" className="px-4">
                      Yes
                    </ToggleGroupItem>
                    <ToggleGroupItem value="no" className="px-4">
                      No
                    </ToggleGroupItem>
                    <ToggleGroupItem value="unsure" className="px-4">
                      Unsure
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              ))}
            </div>

            {showResult && (
              <div className="mt-6 border-t border-border pt-6 space-y-4">
                {allYes ? (
                  <>
                    <h2 className="text-xl md:text-2xl font-semibold">You&apos;re in the Clear!</h2>
                    <p className="text-muted-foreground font-sans">
                      Based on your answers, your infrastructure is currently meeting professional
                      standards for scale, security, and ownership. You have a solid foundation to
                      keep building.
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground font-sans">
                      Best of luck with your launch! If you ever need a deep-dive audit, complex
                      logic implementation (like Stripe subscriptions or multi-tenant permissions),
                      or help navigating external API changes in the future, we&apos;re here to
                      help.
                    </p>
                    <div className="pt-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <Button
                        size="lg"
                        className="font-mono cyan-glow w-full md:w-auto"
                        onClick={() => navigate("/")}
                      >
                        Back to Home
                      </Button>
                      <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
                        <span className="text-xs md:text-sm text-muted-foreground font-sans">
                          Follow us for more updates!
                        </span>
                        <a
                          href="https://x.com/Bunshin_Dev"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-background/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-300"
                          aria-label="Follow us on X"
                        >
                          <XIcon size={18} />
                        </a>
                        <a
                          href="https://www.instagram.com/bunshindevelopmentstudios/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-background/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-300"
                          aria-label="Follow us on Instagram"
                        >
                          <Instagram size={18} />
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-xl md:text-2xl font-semibold">
                      Your prototype has served you well—now it&apos;s time to harden it for the
                      market.
                    </h2>
                    <p className="text-muted-foreground font-sans">
                      It appears your application has reached the stage where professional
                      infrastructure is required to prevent compounding technical debt and maintain
                      your speed of iteration.
                    </p>
                    <div className="pt-2">
                      <Button
                        size="lg"
                        className="font-mono cyan-glow w-full md:w-auto"
                        onClick={() => navigate("/contact")}
                      >
                        Contact us
                      </Button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Assessment;

