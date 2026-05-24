"use client";

import { useState, type FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactContent } from "@/data/contact";

const expectSteps = [
  {
    step: "01",
    heading: "We read it the same day.",
    body: "Every submission goes directly to a principal — not a CRM queue, not a support inbox.",
  },
  {
    step: "02",
    heading: "We schedule a 30-minute intro call.",
    body: "No sales deck. We listen to the problem and tell you honestly whether we're the right fit.",
  },
  {
    step: "03",
    heading: "We come back with a proposal.",
    body: "Either a Paid Discovery ($500, credited to the project) or a Technical Audit ($1,500) — whatever matches your situation.",
  },
];

export default function ContactPageClient() {
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
        headers: { Accept: "application/json" },
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">{contactContent.title}</h1>
          <p className="text-muted-foreground text-center font-sans mb-6 max-w-xl mx-auto leading-relaxed">{contactContent.description}</p>

          {/* Trust signal row */}
          <p className="font-mono text-xs text-muted-foreground text-center mb-10 tracking-wide">
            <span>Veteran-Led</span>
            <span className="mx-2 text-primary/60">·</span>
            <span>Response Within One Business Day</span>
          </p>

          {/* What to expect */}
          <div className="mb-10">
            <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase text-center mb-6">What to Expect</p>
            <div className="space-y-4">
              {expectSteps.map((item) => (
                <div key={item.step} className="flex gap-4 items-start glass rounded-lg p-4 border border-border/60">
                  <span className="font-mono text-sm text-primary font-bold shrink-0 pt-0.5">{item.step}</span>
                  <div>
                    <p className="font-mono text-sm font-semibold text-foreground mb-1">{item.heading}</p>
                    <p className="text-muted-foreground text-sm font-sans leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase text-center mb-4">{contactContent.formTitle}</p>
          <form onSubmit={handleSubmit} className="glass rounded-xl p-6 md:p-8 space-y-6 w-full border border-border shadow-[0_0_40px_rgba(0,0,0,0.45)]">
            <label className="block text-sm font-mono mb-2 text-secondary-foreground" htmlFor="contact-name">Name</label>
            <Input id="contact-name" name="name" required placeholder="Your name" disabled={fieldDisabled} autoComplete="name" />
            <label className="block text-sm font-mono mb-2 text-secondary-foreground" htmlFor="contact-email">Email <span className="text-destructive">*</span></label>
            <Input id="contact-email" name="email" type="email" required placeholder="you@company.com" disabled={fieldDisabled} autoComplete="email" aria-required="true" />
            <label className="block text-sm font-mono mb-2 text-secondary-foreground" htmlFor="contact-business">Business</label>
            <Input id="contact-business" name="business" required placeholder="Company or organization" disabled={fieldDisabled} autoComplete="organization" />
            <label className="block text-sm font-mono mb-2 text-secondary-foreground" htmlFor="contact-general-description">General description</label>
            <Textarea id="contact-general-description" name="message" required rows={5} placeholder="High-level overview of what you need - goals, context, or constraints." disabled={fieldDisabled} className="resize-y min-h-[120px]" />
            <div className="flex flex-col items-center gap-3 pt-1 min-h-[3rem] justify-center">
              {status === "success" ? <p className="font-mono text-sm text-primary text-center animate-in fade-in-0 duration-300">{contactContent.successMessage}</p> : <Button type="submit" size="lg" className="font-mono w-full sm:w-auto cyan-glow" disabled={status === "submitting"}>{status === "submitting" ? contactContent.submittingLabel : contactContent.submitLabel}</Button>}
              {status === "error" && <p className="text-xs text-red-400 font-sans text-center">{contactContent.errorMessage}</p>}
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
