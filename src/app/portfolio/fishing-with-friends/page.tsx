import type { Metadata } from "next"
import { siteConfig } from "@/data/seo"
import CaseStudyLayout from "@/components/CaseStudyLayout"
import FishingWithFriendsCaseStudy from "@/content/case-studies/fishing-with-friends.mdx"

const canonicalUrl = `${siteConfig.url}/portfolio/fishing-with-friends/`

export const metadata: Metadata = {
  title: "Fishing with Friends | Case Study",
  description:
    "How we built an offline-first fishing app with Flutter and Supabase — covering RLS privacy, SQLite sync, and live tournament leaderboards.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Fishing with Friends | Case Study",
    description:
      "How we built an offline-first fishing app with Flutter and Supabase — covering RLS privacy, SQLite sync, and live tournament leaderboards.",
    type: "article",
    url: canonicalUrl,
    images: [
      {
        url: `${siteConfig.url}/og/fishing-with-friends.jpg`,
        width: 1200,
        height: 630,
        alt: "Fishing with Friends — catch detail screen",
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
      headline: "Building an Offline-First Fishing App with Flutter and Supabase",
      description:
        "A technical case study on how Bunshin Development Studios built Fishing with Friends — covering offline-first architecture, friends-only privacy enforced via Postgres Row Level Security, live tournament leaderboards with Supabase Realtime, and a milestone-based delivery approach.",
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
      datePublished: "2026-05-22",
      dateModified: "2026-05-23",
      mainEntityOfPage: canonicalUrl,
      image: `${siteConfig.url}/og/fishing-with-friends.jpg`,
      about: { "@id": `${canonicalUrl}#app` },
      keywords:
        "Flutter, Supabase, offline-first, mobile app development, PostgreSQL RLS, Drift, SQLite, row level security, real-time leaderboard, fishing app, iOS, Android",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${canonicalUrl}#app`,
      name: "Fishing with Friends",
      operatingSystem: "iOS, Android",
      applicationCategory: "SportsApplication",
      description:
        "An offline-first fishing app for recreational anglers. Features include catch logging, trip tracking, live tournaments with real-time leaderboards, and friends-only privacy enforced at the database layer.",
      creator: {
        "@type": "Organization",
        name: "Bunshin Development Studios",
        url: siteConfig.url,
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      datePublished: "2026-05",
      programmingLanguage: ["Dart", "SQL", "TypeScript"],
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

export default function FishingWithFriendsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyLayout
        title="Fishing with Friends"
        category="Mobile Application"
        tags={["Flutter", "Supabase", "PostgreSQL", "Dart", "iOS", "Android", "Offline-first"]}
        publishDate="May 2026"
      >
        <FishingWithFriendsCaseStudy />
      </CaseStudyLayout>
    </>
  )
}
