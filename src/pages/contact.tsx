import { useState, type FormEvent } from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("submitting");

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

  const fieldDisabled = status === "submitting" || status === "success";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24 md:pt-32">
        <section className="container mx-auto px-6 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Ready to Talk?</h1>
          <p className="text-muted-foreground text-center font-sans mb-10 max-w-xl mx-auto leading-relaxed">
            Whether you just saw a demo or you&apos;re coming in with a bigger challenge — reach out
            however works best for you. A real person will get back to you, fast.
          </p>

          <div className="glass rounded-xl p-6 md:p-8 border border-border mb-10">
            <p className="font-mono text-lg font-semibold text-primary mb-1">Rafael Bejaran</p>
            <p className="text-sm text-muted-foreground font-sans mb-6">
              Business Operations Lead · PMP · CSM · BBA
            </p>
            <ul className="space-y-3 text-sm font-sans text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="text-primary shrink-0 mt-0.5" size={18} />
                <a
                  href="tel:+19047705430"
                  className="text-foreground font-mono hover:text-accent-purple transition-colors"
                >
                  904-770-5430
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="text-primary shrink-0 mt-0.5" size={18} />
                <a
                  href="mailto:Raf@Bunshin.io"
                  className="text-foreground font-mono hover:text-accent-purple transition-colors break-all"
                >
                  Raf@Bunshin.io
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare className="text-primary shrink-0 mt-0.5" size={18} />
                <span>Text us directly — we&apos;re responsive</span>
              </li>
            </ul>
          </div>

          <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase text-center mb-4">
            Contact Form
          </p>

          <form
            onSubmit={handleSubmit}
            className="glass rounded-xl p-6 md:p-8 space-y-6 w-full border border-border shadow-[0_0_40px_rgba(0,0,0,0.45)]"
          >
            <div>
              <label className="block text-sm font-mono mb-2 text-secondary-foreground" htmlFor="contact-name">
                Name
              </label>
              <Input
                id="contact-name"
                name="name"
                required
                placeholder="Your name"
                disabled={fieldDisabled}
                autoComplete="name"
              />
            </div>

            <div>
              <label className="block text-sm font-mono mb-2 text-secondary-foreground" htmlFor="contact-email">
                Email <span className="text-destructive">*</span>
              </label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                disabled={fieldDisabled}
                autoComplete="email"
                aria-required="true"
              />
            </div>

            <div>
              <label
                className="block text-sm font-mono mb-2 text-secondary-foreground"
                htmlFor="contact-business"
              >
                Business
              </label>
              <Input
                id="contact-business"
                name="business"
                required
                placeholder="Company or organization"
                disabled={fieldDisabled}
                autoComplete="organization"
              />
            </div>

            <div>
              <label
                className="block text-sm font-mono mb-2 text-secondary-foreground"
                htmlFor="contact-general-description"
              >
                General description
              </label>
              <Textarea
                id="contact-general-description"
                name="message"
                required
                rows={5}
                placeholder="High-level overview of what you need — goals, context, or constraints."
                disabled={fieldDisabled}
                className="resize-y min-h-[120px]"
              />
            </div>

            <div className="flex flex-col items-center gap-3 pt-1 min-h-[3rem] justify-center">
              {status === "success" ? (
                <p className="font-mono text-sm text-primary text-center animate-in fade-in-0 duration-300">
                  Got it. We&apos;ll be in touch soon.
                </p>
              ) : (
                <Button
                  type="submit"
                  size="lg"
                  className="font-mono w-full sm:w-auto cyan-glow"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </Button>
              )}
              {status === "error" && (
                <p className="text-xs text-red-400 font-sans text-center">
                  Something went wrong. Please try again or use the contact details above.
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
