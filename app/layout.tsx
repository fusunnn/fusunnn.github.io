import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: "AI Product & Data Enthusiast | Personal Portfolio",
  description:
    "Personal portfolio of an undergraduate student at Shanghai International Studies University with experience in AI systems, recommendation systems, data journalism, and digital media production.",
  keywords: [
    "AI",
    "product design",
    "data analysis",
    "recommendation systems",
    "knowledge graph",
    "data journalism",
    "digital media",
    "Python",
    "machine learning",
    "UX research",
  ],
  authors: [{ name: "Portfolio" }],
  creator: "Portfolio",
  publisher: "Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_US",
    url: "https://portfolio.example.com",
    siteName: "Personal Portfolio",
    title: "AI Product & Data Enthusiast | Personal Portfolio",
    description:
      "Personal portfolio showcasing AI systems, recommendation systems, data journalism, and digital media production projects.",
    images: [
      {
        url: "/images/portfolioimage.png",
        width: 1200,
        height: 630,
        alt: "AI Product & Data Enthusiast Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Product & Data Enthusiast | Personal Portfolio",
    description:
      "Personal portfolio showcasing AI systems, recommendation systems, data journalism, and digital media production projects.",
    images: ["/images/portfolioimage.png"],
  },
  alternates: {
    canonical: "https://portfolio.example.com",
    languages: {
      "zh-CN": "https://portfolio.example.com/zh",
      "en-US": "https://portfolio.example.com/en",
    },
  },
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh" className={`${spaceGrotesk.variable} antialiased`}>
      <head>
        <link rel="preload" href="/images/portfolioimage.png" as="image" type="image/png" />
        <link rel="preload" href="/images/profile.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/background.jpg" as="image" type="image/jpeg" />
        <link rel="dns-prefetch" href="https://medium.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://portfolio.example.com/#person",
                  description:
                    "AI Product & Data Enthusiast - Undergraduate student with experience in AI systems, recommendation systems, data journalism, and digital media production.",
                  jobTitle: ["AI Product Enthusiast", "Data Analyst", "Product Designer"],
                  knowsAbout: [
                    "AI Systems",
                    "Recommendation Systems",
                    "Data Journalism",
                    "Digital Media Production",
                    "Python",
                    "SQL",
                    "Product Design",
                    "Data Analysis",
                  ],
                  alumniOf: "Shanghai International Studies University",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://portfolio.example.com/#website",
                  url: "https://portfolio.example.com",
                  name: "Personal Portfolio",
                  description: "Personal portfolio showcasing AI, data analysis, and product design projects",
                  inLanguage: ["zh-CN", "en-US"],
                },
                {
                  "@type": "ItemList",
                  "@id": "https://portfolio.example.com/#portfolio",
                  name: "Project Portfolio",
                  description: "AI and data analysis projects",
                  numberOfItems: 4,
                  itemListElement: [
                    {
                      "@type": "CreativeWork",
                      name: "Knowledge Graph-Based AI Content Verification System",
                      description: "AI-powered content verification using knowledge graphs and NLP",
                      about: ["AI", "Knowledge Graph", "NLP"],
                    },
                    {
                      "@type": "CreativeWork",
                      name: "Elevator Advertisement Recommendation System",
                      description: "Machine learning-based recommendation system for advertisements",
                      about: ["Machine Learning", "Recommendation Systems", "Data Analysis"],
                    },
                    {
                      "@type": "CreativeWork",
                      name: "Public Restroom Signage Usability Study",
                      description: "UX research on public restroom signage accessibility",
                      about: ["UX Research", "Accessibility", "Product Design"],
                    },
                    {
                      "@type": "CreativeWork",
                      name: "Awake at Midnight Media Project",
                      description: "Digital media project exploring late-night content consumption",
                      about: ["Digital Media", "Content Production", "Data Journalism"],
                    },
                  ],
                },
              ],
            }),
          }}
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </head>
      <body className={spaceGrotesk.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
