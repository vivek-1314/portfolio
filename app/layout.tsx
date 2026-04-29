'use client'

import './globals.css'
import { ReactNode, useMemo } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  const schemaData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Vivek Gaindhar",
      "url": "https://portfoliovivek-eight.vercel.app/",
      "sameAs": [
        "https://github.com/vivek-1314",
        "https://www.linkedin.com/in/vivekgaindhar/"
      ],
      "jobTitle": "Fullstack Developer & AI Engineer",
      "description":
        "Portfolio of Vivek Gaindhar, building real-world impact through software and AI innovation."
    }),
    []
  )

  return (
    <html lang="en">
      <head>
        {/* Core SEO */}
        <title>Vivek Gaindhar | Fullstack Developer & AI Technologist</title>

        <meta
          name="description"
          content="Portfolio of Vivek Gaindhar — fullstack developer building AI-powered real-world solutions."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Vivek Gaindhar" />

        {/* Open Graph */}
        <meta property="og:title" content="Vivek Gaindhar | Portfolio" />
        <meta
          property="og:description"
          content="AI + Engineering + Design. Explore projects built with real-world impact."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portfoliovivek-eight.vercel.app/"
        />

        {/* FIXED OG IMAGE (must be absolute) */}
        <meta
          property="og:image"
          content="https://portfoliovivek-eight.vercel.app/images/og-2"
        />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://portfoliovivek-eight.vercel.app/"
        />

        {/* Google verification */}
        <meta
          name="google-site-verification"
          content="H4dxpfXKyBbPYuVq_KUqJ5ev8zF-Dd-oTjqhTu3BaAg"
        />

        {/* FAVICON (FIXED - ROOT ONLY PATH) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.ico" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      </head>

      <body className="relative antialiased">
        {children}
      </body>
    </html>
  )
}