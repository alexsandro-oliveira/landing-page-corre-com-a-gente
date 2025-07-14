import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin - Corre com a Gente!',
  description: 'Painel administrativo para gestão de inscrições',
  robots: 'noindex, nofollow', // Evita indexação pelos motores de busca
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-gray-50">{children}</div>
}
