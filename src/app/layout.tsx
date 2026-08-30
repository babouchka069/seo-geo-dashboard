import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SEO/GEO Dashboard — Ludi & Thomas',
  description: 'Tableau de bord SEO et visibilité IA',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
