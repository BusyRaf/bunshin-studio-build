import type { MDXComponents } from 'mdx/types'

// Custom Section component — glass card wrapper for each narrative section
function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="glass rounded-xl p-8 md:p-10 border border-border mb-12">
      {children}
    </section>
  )
}

// Diagram component — dark-background SVG container
function Diagram({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-border my-8">
      <img src={src} alt={alt} className="w-full block" />
    </div>
  )
}

// ScreenshotGallery — responsive 3-up grid with captions
function ScreenshotGallery({
  screenshots,
}: {
  screenshots: { src: string; alt: string; caption: string }[]
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
      {screenshots.map((shot) => (
        <figure key={shot.src} className="flex flex-col gap-2">
          <img
            src={shot.src}
            alt={shot.alt}
            className="w-full rounded-xl border border-border"
          />
          <figcaption className="font-mono text-xs text-muted-foreground text-center leading-snug">
            {shot.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom layout and asset components
    Section,
    Diagram,
    ScreenshotGallery,

    // Element overrides — match the site's design system
    h2: ({ children }) => (
      <h2 className="font-mono text-xs text-primary tracking-[0.25em] uppercase mb-6 mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-mono text-sm font-semibold text-foreground mb-3 mt-6">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-muted-foreground font-sans leading-relaxed mb-4 last:mb-0">
        {children}
      </p>
    ),
    strong: ({ children }) => (
      <strong className="text-foreground font-semibold">{children}</strong>
    ),
    code: ({ children }) => (
      <code className="font-mono text-primary/90 text-sm bg-primary/10 px-1.5 py-0.5 rounded">
        {children}
      </code>
    ),
    ul: ({ children }) => (
      <ul className="space-y-2 mb-4 pl-6 list-disc text-muted-foreground font-sans">
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    hr: () => <hr className="border-border my-8" />,
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary hover:text-primary/80 underline transition-colors duration-200"
      >
        {children}
      </a>
    ),

    // Spread caller-provided overrides last so pages can still customise if needed
    ...components,
  }
}
