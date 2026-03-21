import { useState, type FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const Contact = () => {
  const [visitedByRep, setVisitedByRep] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleToggle = (checked: boolean) => {
    setVisitedByRep(checked);
    if (status === "success") setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mreanbpy", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputsDisabled = status === "submitting" || status === "success";
  const switchDisabled = status === "submitting";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24 md:pt-32">
        <section className="container mx-auto px-6 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center w-full max-w-[480px]">
            Let&apos;s Talk.
          </h1>

          <form
            onSubmit={handleSubmit}
            className="glass rounded-xl p-6 md:p-8 space-y-6 w-full max-w-[480px] border border-border shadow-[0_0_40px_rgba(0,0,0,0.45)]"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <Label
                htmlFor="bunshin-rep-visited"
                className="text-sm font-mono text-secondary-foreground cursor-pointer leading-snug sm:max-w-[min(100%,16rem)]"
              >
                Already visited by a Bunshin rep?
              </Label>
              <Switch
                id="bunshin-rep-visited"
                checked={visitedByRep}
                onCheckedChange={handleToggle}
                disabled={switchDisabled}
                className="shrink-0 self-start sm:self-center transition-transform duration-200"
              />
            </div>

            <div className="relative min-h-[4.75rem]">
              <p
                key={visitedByRep ? "returning" : "new"}
                className="text-muted-foreground text-sm font-sans leading-relaxed animate-in fade-in-0 slide-in-from-bottom-1 duration-300 fill-mode-both"
              >
                {visitedByRep
                  ? "Good to have you back. Drop your info below and reference your rep — we'll pick up right where you left off."
                  : "Leave your info below and we'll be in touch within one business day."}
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-mono mb-2 text-secondary-foreground" htmlFor="contact-name">
                  Name
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  required
                  placeholder="Your name"
                  disabled={inputsDisabled}
                  autoComplete="name"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-mono mb-2 text-secondary-foreground"
                  htmlFor="contact-business"
                >
                  Business Name
                </label>
                <Input
                  id="contact-business"
                  name="business"
                  required
                  placeholder="Your business"
                  disabled={inputsDisabled}
                  autoComplete="organization"
                />
              </div>

              <div>
                <label className="block text-sm font-mono mb-2 text-secondary-foreground" htmlFor="contact-phone">
                  Phone Number
                </label>
                <Input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(555) 555-5555"
                  disabled={inputsDisabled}
                  autoComplete="tel"
                />
              </div>

              <div>
                <label
                  key={visitedByRep ? "returning-label" : "new-label"}
                  htmlFor="contact-details"
                  className="block text-sm font-mono mb-2 text-secondary-foreground animate-in fade-in-0 slide-in-from-bottom-1 duration-300 fill-mode-both"
                >
                  {visitedByRep
                    ? "Anything you'd like us to know?"
                    : "What kind of business do you run?"}
                </label>
                <Input
                  id="contact-details"
                  name="message"
                  required
                  placeholder={visitedByRep ? "Optional context for your rep…" : "e.g. retail, services, restaurant…"}
                  disabled={inputsDisabled}
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 pt-1 min-h-[3rem] justify-center">
              {status === "success" ? (
                <p
                  key="success-msg"
                  className="font-mono text-sm text-primary text-center animate-in fade-in-0 duration-300"
                >
                  Got it. We&apos;ll be in touch soon.
                </p>
              ) : (
                <Button
                  key={visitedByRep ? "btn-returning" : "btn-new"}
                  type="submit"
                  size="lg"
                  className="font-mono w-full sm:w-auto cyan-glow animate-in fade-in-0 slide-in-from-bottom-1 duration-300"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending…" : visitedByRep ? "Send It Over" : "Reach Out"}
                </Button>
              )}
              {status === "error" && (
                <p className="text-xs text-red-400 font-sans text-center">
                  Something went wrong. Please try again or email{" "}
                  <span className="font-mono text-primary">hello@bunshin.io</span> directly.
                </p>
              )}
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
