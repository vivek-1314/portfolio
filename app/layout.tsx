  import type { Metadata } from "next";
  import { Geist, Geist_Mono } from "next/font/google";
  import "./globals.css";

  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  export const metadata: Metadata = {
    title: {
      default: "Vivek | AI Product Engineer & Full Stack Developer",
      template: "%s | Vivek",
    },
    description:
      "Vivek is an AI Product Engineer specializing in agentic multi-agent systems, full-stack development, and intelligent workflows.",

    keywords: [
      "AI Product Engineer",
      "Full Stack Developer",
      "Next.js Developer",
      "LangGraph",
      "Multi-Agent Systems",
      "LLM Engineer",
      "AI Portfolio",
      "Orion AI",
    ],

    authors: [{ name: "Vivek" }],
    creator: "Vivek",

    openGraph: {
      title: "Vivek | AI Product Engineer",
      description:
        "Building agentic AI systems and intelligent workflows. Creator of Orion.",
      url: "https://yourdomain.com",
      siteName: "Vivek Portfolio",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Vivek Portfolio Preview",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Vivek | AI Product Engineer",
      description:
        "Building multi-agent AI systems and full-stack applications.",
      images: ["/og-image.png"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    );
  }
