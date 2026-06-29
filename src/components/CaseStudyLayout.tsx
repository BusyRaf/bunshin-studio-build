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
  publishDate = "2026",
  children,
}: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-24 md:pt-32">
        <section className="container mx-auto px-6 max-w-4xl mb-12 pb-10 border-b border-border">
          <p className="font-mono text-xs text-primary mb-5">// case study</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-[-0.03em] mb-6 text-balance">{title}</h1>
          {(category || tags.length > 0) && (
            <div className="flex flex-wrap gap-2 mb-6">
              {category && (
                <span className="font-mono text-[11px] text-primary border border-primary/30 rounded-md px-2.5 py-1">{category}</span>
              )}
              {tags.map((tag) => (
                <span key={tag} className="font-mono text-[11px] text-muted-foreground border border-border rounded-md px-2.5 py-1">{tag}</span>
              ))}
            </div>
          )}
          <p className="font-mono text-xs text-muted-foreground">
            By{" "}
            <Link href="/about" className="text-primary hover:underline underline-offset-4">the Bunshin team</Link>
            {" · "}
            {publishDate}
          </p>
        </section>

        <div className="container mx-auto px-6 max-w-4xl">{children}</div>

        <section className="container mx-auto px-6 max-w-4xl mt-16">
          <div className="rounded-2xl border border-border p-10 md:p-14 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Want something like this built?</h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
              Tell us what you&apos;re building. We&apos;ll figure out the rest together, no sales call, no pressure.
            </p>
            <Link
              href="/contact"
              className="font-sans font-semibold text-base bg-[#6a37e0] text-white px-8 py-4 rounded-xl hover:bg-[#7b4bff] transition-colors inline-block"
            >
              Start a build
            </Link>
          </div>
        </section>

        <section className="container mx-auto px-6 max-w-4xl mt-10">
          <Link href="/portfolio" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
            ← All work
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
