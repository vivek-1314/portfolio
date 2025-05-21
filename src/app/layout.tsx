import './globals.css'
import { ReactNode } from 'react';
import SEO from '../components/head';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <SEO />
      <head><meta name="google-site-verification" content="H4dxpfXKyBbPYuVq_KUqJ5ev8zF-Dd-oTjqhTu3BaAg" /></head>
      <body>
        {children}
      </body>
    </html>
  )
}
