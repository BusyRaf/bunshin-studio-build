import { useState } from "react";
import { Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-6 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Tell us about your prototype.
          </h1>
          <p className="text-muted-foreground text-center mb-4 font-sans">
            Share where your build is today and where you&apos;re trying to go. We&apos;ll reach out
            to schedule a call.
          </p>
          <div className="flex items-center justify-center gap-6 mb-10">
            <a
              href="https://x.com/Bunshin_Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-lg border border-border bg-background/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-300"
              aria-label="Follow us on X"
            >
              <XIcon size={20} />
            </a>
            <a
              href="https://www.instagram.com/bunshindevelopmentstudios/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-lg border border-border bg-background/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-300"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass rounded-xl p-6 md:p-8 space-y-6"
            noValidate
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-mono mb-2 text-secondary-foreground">
                  Name
                </label>
                <Input name="name" required placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-mono mb-2 text-secondary-foreground">
                  Email
                </label>
                <Input name="email" type="email" required placeholder="you@example.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-mono mb-2 text-secondary-foreground">
                Company / Project
              </label>
              <Input name="company" placeholder="Product name or company" />
            </div>

            <div>
              <label className="block text-sm font-mono mb-2 text-secondary-foreground">
                What have you built so far?
              </label>
              <Textarea
                name="message"
                required
                rows={5}
                placeholder="Share links, tech stack, and where you feel blocked."
              />
            </div>

            <div className="flex flex-col items-center gap-3">
              <Button
                type="submit"
                size="lg"
                className="font-mono cyan-glow"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </Button>
              {status === "success" && (
                <p className="text-xs text-emerald-400 font-sans text-center">
                  Message sent. We&apos;ll review it and follow up from{" "}
                  <span className="font-mono text-primary">hello@bunshin.io</span>.
                </p>
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

