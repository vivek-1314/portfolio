import './globals.css'
import { ReactNode } from 'react';
import SEO from '../components/head';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SEO />
        {children}
      </body>
    </html>
  )
}