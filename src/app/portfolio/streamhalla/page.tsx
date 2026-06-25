import type { Metadata } from "next"
import { siteConfig } from "@/data/seo"
import CaseStudyLayout from "@/components/CaseStudyLayout"
import StreamHallaCaseStudy from "@/content/case-studies/streamhalla.mdx"

const canonicalUrl = `${siteConfig.url}/portfolio/streamhalla/`

export const metadata: Metadata = {
  title: "StreamHalla — AI VOD Analytics for Twitch, YouTube & Kick | Case Study",
  description:
    "How Bunshin built StreamHalla — AI-powered VOD analytics that turns a Twitch, YouTube, or Kick stream into a sentiment timeline, a six-axis coaching scorecard, and a 5-point next-stream action plan.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "StreamHalla — AI VOD Analytics for Twitch, YouTube & Kick | Case Study",
    description:
      "How Bunshin built StreamHalla — AI-powered VOD analytics that turns a Twitch, YouTube, or Kick stream into a sentiment timeline, a six-axis coaching scorecard, and a 5-point next-stream action plan.",
    type: "article",
    url: canonicalUrl,
    images: [
      {
        url: `${siteConfig.url}/og/streamhalla.jpg`,
        width: 1200,
        height: 630,
        alt: "StreamHalla — post-stream coaching reports for Twitch, YouTube, and Kick",
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
        "StreamHalla — Turning Stream Audience Signals into Honest Post-Stream Coaching",
      description:
        "How Bunshin Development Studios built StreamHalla, AI-powered VOD analytics for small streamers across Twitch, YouTube, and Kick — a sentiment timeline, a six-axis coaching scorecard, and Streamer Trends that surfaces the growth lever moving every other score.",
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
      datePublished: "2026-06-25",
      dateModified: "2026-06-25",
      mainEntityOfPage: canonicalUrl,
      image: `${siteConfig.url}/og/streamhalla.jpg`,
      about: { "@id": `${canonicalUrl}#platform` },
      keywords:
        "AI VOD analytics, VOD analytics, streaming coach, sentiment timeline, six-axis coaching scorecard, streamer trends, Twitch, YouTube, Kick, content creator analytics, stream growth",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${canonicalUrl}#platform`,
      name: "StreamHalla",
      url: "https://streamhalla.com",
      sameAs: "https://streamhalla.com",
      operatingSystem: "Web",
      applicationCategory: "MultimediaApplication",
      description:
        "AI-powered VOD analytics for small streamers. Paste a Twitch, YouTube, or Kick VOD link and get a sentiment timeline, a six-axis coaching scorecard, and a five-point next-stream action plan — with Streamer Trends across your full report history.",
      creator: {
        "@type": "Organization",
        name: "Bunshin Development Studios",
        url: siteConfig.url,
      },
      datePublished: "2026-06",
      programmingLanguage: ["JavaScript", "TypeScript", "SQL"],
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

export default function StreamHallaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyLayout
        title="StreamHalla"
        category="Streaming Analytics"
        tags={[
          "React",
          "Node.js",
          "PostgreSQL",
          "Fly.io",
          "Docker",
          "LLM Pipeline",
        ]}
        publishDate="June 2026"
      >
        <StreamHallaCaseStudy />
      </CaseStudyLayout>
    </>
  )
}
