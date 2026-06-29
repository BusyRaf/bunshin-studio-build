import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/seo";

export const metadata: Metadata = {
  title: "Privacy Policy | Bunshin Development Studios",
  description: "How Bunshin Development Studios collects, uses, and protects your information.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
  robots: { index: true, follow: true },
};

const sections = [
  {
    heading: "Information We Collect",
    body: "When you submit our contact form, we collect your name, email address, business or organization name, and the message you provide. We do not collect any information through cookies, tracking pixels, or analytics scripts.",
  },
  {
    heading: "How We Use Your Information",
    body: "We use the information you submit solely to respond to your inquiry and communicate with you about your project or business needs. We do not sell, rent, or share your information with third parties for marketing purposes.",
  },
  {
    heading: "Third-Party Form Processing",
    body: "Contact form submissions are processed by Formspree (formspree.io), a third-party service. Your submission data is transmitted to and stored on Formspree's servers in accordance with their privacy policy. We encourage you to review Formspree's privacy policy at formspree.io/legal/privacy-policy.",
  },
  {
    heading: "Data Retention",
    body: "We retain inquiry data only as long as necessary to fulfill the purpose for which it was submitted — typically the duration of our communication with you. You may request deletion of your data at any time by contacting us.",
  },
  {
    heading: "Your Rights",
    body: "Depending on your location, you may have rights under GDPR, CCPA, or other applicable privacy laws — including the right to access, correct, or delete personal information we hold about you. To exercise any of these rights, contact us at the address below and we will respond within 30 days.",
  },
  {
    heading: "Security",
    body: "All data transmitted through our contact form is encrypted in transit via HTTPS. We implement reasonable technical and organizational measures to protect your information from unauthorized access or disclosure.",
  },
  {
    heading: "Children's Privacy",
    body: "Our services are directed at businesses and professionals. We do not knowingly collect personal information from anyone under the age of 18.",
  },
  {
    heading: "Changes to This Policy",
    body: "We may update this policy from time to time. When we do, we will revise the effective date below. Continued use of our site after any changes constitutes acceptance of the updated policy.",
  },
  {
    heading: "Contact",
    body: "Questions about this policy or requests regarding your data can be directed to: Raf@Bunshin.io or 904-770-5430.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24 md:pt-32">
        <section className="container mx-auto px-6 max-w-3xl">
          <p className="font-mono text-xs text-primary mb-4">// legal</p>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.03em] mb-3">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground font-mono mb-12">Effective date: May 13, 2026</p>
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-mono text-base font-semibold text-foreground mb-2">{section.heading}</h2>
                <p className="text-muted-foreground font-sans leading-relaxed text-sm md:text-base">{section.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
