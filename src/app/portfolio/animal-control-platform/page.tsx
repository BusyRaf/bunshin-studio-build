import type { Metadata } from "next"
import { siteConfig } from "@/data/seo"
import CaseStudyLayout from "@/components/CaseStudyLayout"
import AnimalControlCaseStudy from "@/content/case-studies/animal-control-platform.mdx"

const canonicalUrl = `${siteConfig.url}/portfolio/animal-control-platform/`

export const metadata: Metadata = {
  title: "Animal Control & Shelter Management Platform | Case Study",
  description:
    "How Bunshin built a municipal animal services platform — parallel microchip registry lookup, tamper-evident audit chain, and multi-surface hold state enforcement across nine roles.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Animal Control & Shelter Management Platform | Case Study",
    description:
      "How Bunshin built a municipal animal services platform — parallel microchip registry lookup, tamper-evident audit chain, and multi-surface hold state enforcement across nine roles.",
    type: "article",
    url: canonicalUrl,
    images: [
      {
        url: `${siteConfig.url}/portfolio/animal-control-platform/screenshots/03-dispatch-console.png`,
        width: 1200,
        height: 630,
        alt: "Animal Control Platform — dispatch console with live officer map",
      },
    ],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${canonicalUrl}#article`,
      headline:
        "Building a Municipal Animal Services Platform with Parallel Registry Lookup and Tamper-Evident Audit Records",
      description:
        "How Bunshin Development Studios built an Animal Control & Shelter Management Platform — four surfaces, nine roles, one database, with parallel microchip registry lookup, a hash-linked audit chain enforced at the database layer, and hold state managed by a server-side guard across every surface.",
      author: {
        "@type": "Organization",
        name: "Bunshin Development Studios",
        url: siteConfig.url,
      },
      publisher: {
        "@type": "Organization",
        name: "Bunshin Development Studios",
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/ghost.svg`,
        },
      },
      datePublished: "2026-05-26",
      dateModified: "2026-05-26",
      mainEntityOfPage: canonicalUrl,
      image: `${siteConfig.url}/portfolio/animal-control-platform/screenshots/03-dispatch-console.png`,
      about: { "@id": `${canonicalUrl}#platform` },
      keywords:
        "animal control software, shelter management, municipal software, self-hosted, offline-first, PWA, microchip lookup, audit trail, PostgreSQL, Next.js, government software",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${canonicalUrl}#platform`,
      name: "Animal Control & Shelter Management Platform",
      operatingSystem: "Web, PWA",
      applicationCategory: "GovernmentApplication",
      description:
        "A self-hosted municipal animal services platform covering field operations, facility management, veterinary care, and public-facing citizen services. Four surfaces. Nine roles. One database.",
      creator: {
        "@type": "Organization",
        name: "Bunshin Development Studios",
        url: siteConfig.url,
      },
      datePublished: "2026-05",
      programmingLanguage: ["TypeScript", "SQL"],
    },
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}#org`,
      name: "Bunshin Development Studios",
      url: siteConfig.url,
      logo: `${siteConfig.url}/ghost.svg`,
    },
  ],
}

export default function AnimalControlPlatformPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyLayout
        title="Animal Control & Shelter Management Platform"
        category="Municipal Software"
        tags={[
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "Self-hosted",
          "PWA",
          "Offline-first",
          "Redis",
          "CASL",
        ]}
        publishDate="May 2026"
      >
        <AnimalControlCaseStudy />
      </CaseStudyLayout>
    </>
  )
}
