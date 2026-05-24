import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

interface CaseStudyLayoutProps {
  title: string
  category?: string
  tags?: string[]
  publishDate?: string
  children: React.ReactNode
}

export default function CaseStudyLayout({
  title,
  category,
  tags = [],
  publishDate = "May 2026",
  children,
}: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-24 md:pt-32">
        {/* Hero */}
        <section className="container mx-auto px-6 max-w-4xl mb-12">
          {category && (
            <span className="font-mono text-xs bg-primary/10 text-primary px-2 py-0.5 rounded mb-4 inline-block">
              {category}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded border border-border/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {/* Author byline — E-E-A-T signal */}
          <p className="font-sans text-sm text-muted-foreground">
            By{" "}
            <Link
              href="/about"
              className="text-primary hover:text-primary/80 transition-colors duration-200"
            >
              the Bunshin Development Studios Team
            </Link>
            {" · "}
            {publishDate}
          </p>
        </section>

        {/* MDX content — sections rendered as glass cards via <Section> in mdx-components.tsx */}
        <div className="container mx-auto px-6 max-w-4xl">
          {children}
        </div>

        {/* CTA */}
        <section className="container mx-auto px-6 max-w-4xl mt-4">
          <div className="glass rounded-xl border border-primary/20 bg-primary/5 p-10 md:p-14 text-center">
            <p className="font-mono text-xs text-primary tracking-[0.25em] uppercase mb-4">
              Work with us
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Have a project with similar constraints?
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed max-w-xl mx-auto mb-3">
              Reach out and let&apos;s talk. For serious prospects, we also share the full technical
              case study — architecture decisions, implementation patterns, and the edge cases we
              hit along the way.
            </p>
            <p className="text-muted-foreground/60 font-mono text-xs mb-8">
              Not posted publicly. Shared after a discovery call.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-sm font-semibold px-7 py-3.5 rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Start the conversation →
            </Link>
          </div>
        </section>

        {/* Back nav */}
        <section className="container mx-auto px-6 max-w-4xl mt-8 flex items-center justify-between">
          <Link
            href="/portfolio"
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            ← All Projects
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
