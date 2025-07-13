import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Corre com a Gente - Evento Esportivo em Matosinhos',
  description:
    'Evento esportivo de 5km criado pelas influencers Thalita Santos e Lorena Goulart. Domingo, 27 de Julho de 2025, em Matosinhos, Portugal.',
  keywords: [
    'corrida',
    'caminhada',
    '5km',
    'Matosinhos',
    'Portugal',
    'evento esportivo',
  ],
  authors: [{ name: '@alesx.sant' }],
  openGraph: {
    title: 'Evento Corre com a gente!',
    description:
      'Evento esportivo especial com influencers Imigrantes em Portugal',
    type: 'website',
    locale: 'pt_PT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corre com a gente!',
    description:
      'Evento esportivo especial com influencers Imigrantes em Portugal',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children} <Analytics />{' '}
      </body>
    </html>
  )
}
