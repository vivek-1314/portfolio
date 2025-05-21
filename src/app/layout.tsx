import './globals.css'
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vivek Gaindhar",
    "url": "https://portfolio-dun-nine-30.vercel.app/",
    "sameAs": [
      "https://github.com/vivek-gaindhar",
      "https://linkedin.com/in/vivek-gaindhar"
    ],
    "jobTitle": "Fullstack Developer & AI Technologist",
    "description": "Portfolio of Vivek Gaindhar, an out-of-the-box thinker building real-world impact through software and AI innovation."
  };

  return (
    <html lang="en">
        <head>
        <title>Vivek Gaindhar | Fullstack Developer & AI Technologist</title>
        <meta
          name="description"
          content="Portfolio of Vivek Gaindhar — a fullstack developer and creative technologist building real-world impact through code, AI, and bold ideas."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Vivek Gaindhar" />

        <meta property="og:title" content="Vivek Gaindhar | Fullstack Developer & AI Technologist" />
        <meta
          property="og:description"
          content="Explore Vivek Gaindhar’s portfolio — merging AI, design, and engineering to create meaningful digital experiences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-dun-nine-30.vercel.app/" />
        <meta property="og:image" content="https://portfolio-dun-nine-30.vercel.app/og-image.png" />
        <meta name="google-site-verification" content="H4dxpfXKyBbPYuVq_KUqJ5ev8zF-Dd-oTjqhTu3BaAg" />

        <link rel="canonical" href="https://portfolio-dun-nine-30.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
