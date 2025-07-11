import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Corre com a gente! - Evento Esportivo',
  description:
    'Junte-se a nós em uma manhã especial de exercício, bem-estar e comunidade com @thanaeuropa_ e @lolygoulart. Venha correr ou caminhar com a gente neste evento cheio de energia, diversão e um ambiente acolhedor e motivador.',
  keywords:
    'corrida, caminhada, portugal, fitness, evento esportivo, uaifit, thanaeuropa, lolygoulart',
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
    <html lang="pt-PT" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen w-full">
          <div className="flex-1 w-full overflow-x-hidden">{children}</div>
        </div>
      </body>
    </html>
  )
}
