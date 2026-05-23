import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Mercado Figueira | Seu Mercado de Bairro',
  description: 'Mercado Figueira - Laticínios, frutas, padaria e mercearia. Tradição e qualidade para sua família.',
  keywords: ['mercado', 'padaria', 'frutas', 'laticínios', 'mercearia', 'mercado de bairro'],
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
    <html lang="pt-BR" className="bg-background">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
