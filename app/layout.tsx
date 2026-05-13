import type { Metadata } from 'next'
import { Space_Grotesk, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Valentina Paz | Front-End Developer',
  description: 'Desarrolladora Front-End Developer especializada en Vue.js, JavaScript y SCSS. Portafolio profesional 2026.',
  keywords: ['Front-End Developer', 'Vue.js', 'JavaScript', 'React', 'Web Developer', 'Santiago Chile'],
  authors: [{ name: 'Valentina Paz Llantén Robles' }],
  openGraph: {
    title: 'Valentina Paz | Front-End Developer',
    description: 'Desarrolladora Front-End Developer especializada en Vue.js, JavaScript y SCSS.',
    type: 'website',
    locale: 'es_CL',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
