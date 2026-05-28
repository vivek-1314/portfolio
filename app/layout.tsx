import './globals.css'
import { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'

// ─── Constants ────────────────────────────────────────────────────────────────
const BASE_URL = 'https://portfoliovivek-eight.vercel.app'
const FULL_NAME = 'Vivek Gaindhar'
const JOB_TITLE = 'Fullstack Developer & AI Engineer'
const DESCRIPTION =
  'Portfolio of Vivek Gaindhar — a Fullstack Developer & AI Engineer specializing in MERN Stack, Next.js, LangChain, and LangGraph. Building AI-powered, real-world software solutions.'
const KEYWORDS = [
  'Vivek Gaindhar',
  'Vivek Gaindhar portfolio',
  'Fullstack Developer',
  'AI Engineer',
  'MERN Stack Developer',
  'Next.js Developer',
  'React Developer',
  'Node.js Developer',
  'LangChain Developer',
  'LangGraph Developer',
  'TypeScript Developer',
  'Web Developer India',
  'LNCT Bhopal Developer',
  'Bhopal Developer',
  'vivek1314',
  'Software Engineer India',
  'AI Developer India',
  'RAG pipeline developer',
  'Vector database developer',
  'Open to work developer',
]

// ─── Viewport (replaces legacy <meta name="viewport">) ────────────────────────
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

// ─── Metadata (Next.js 13+ Metadata API) ─────────────────────────────────────
export const metadata: Metadata = {
  // ── Title ────────────────────────────────────────────────────────────────
  title: {
    default: `${FULL_NAME} | ${JOB_TITLE}`,
    template: `%s | ${FULL_NAME}`,
  },

  // ── Core ─────────────────────────────────────────────────────────────────
  description: DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: FULL_NAME, url: BASE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  category: 'technology',
  applicationName: `${FULL_NAME} Portfolio`,

  // ── Robots ───────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Canonical / Alternates ────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Open Graph ───────────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: `${FULL_NAME} Portfolio`,
    title: `${FULL_NAME} | ${JOB_TITLE}`,
    description: DESCRIPTION,
    images: [
      {
        url: `${BASE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} — ${JOB_TITLE}`,
        type: 'image/png',
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: `${FULL_NAME} | ${JOB_TITLE}`,
    description: DESCRIPTION,
    images: [`${BASE_URL}/images/og-image.png`],
    creator: '@vivekgaindhar', // update if you have a Twitter handle
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon.ico',
  },

  // ── Manifest ──────────────────────────────────────────────────────────────
  manifest: '/site.webmanifest',

  // ── Verification ─────────────────────────────────────────────────────────
  verification: {
    google: 'H4dxpfXKyBbPYuVq_KUqJ5ev8zF-Dd-oTjqhTu3BaAg',
  },

  // ── Other ─────────────────────────────────────────────────────────────────
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: FULL_NAME,
  url: BASE_URL,
  image: `${BASE_URL}/images/og-image.png`,
  email: 'vivek1314gurjar@gmail.com',
  telephone: '+918817358864',
  jobTitle: JOB_TITLE,
  description: DESCRIPTION,
  nationality: 'Indian',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Lakshmi Narain College of Technology, Bhopal',
    url: 'https://www.lnct.ac.in',
  },
  knowsAbout: [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
    'LangChain',
    'LangGraph',
    'Artificial Intelligence',
    'Large Language Models',
    'RAG pipelines',
    'Fullstack Development',
    'Data Structures and Algorithms',
  ],
  sameAs: [
    'https://github.com/vivek-1314',
    'https://www.linkedin.com/in/vivekgaindhar/',
    'https://leetcode.com/u/vivek_-vivek/',
    'https://codolio.com/profile/vivek_gurjar',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'SyncAndExplore (Internship — Oct 2025)',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${FULL_NAME} Portfolio`,
  url: BASE_URL,
  description: DESCRIPTION,
  author: {
    '@type': 'Person',
    name: FULL_NAME,
  },
  inLanguage: 'en-US',
}

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to speed up external resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for social profile crawlability */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />

        {/* JSON-LD: Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/* JSON-LD: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="relative antialiased">
        {children}
      </body>
    </html>
  )
}
