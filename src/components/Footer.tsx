'use client'

import { Instagram, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg xs:text-xl font-bold">Corre com a gente!</h3>
            <p className="text-sm xs:text-base text-gray-300">
              Junte-se a nós numa experiência única de corrida e caminhada.
              Promovemos saúde, bem-estar e comunidade através do esporte.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg xs:text-xl font-bold">Links Rápidos</h3>
            <ul className="space-y-2 xs:space-y-3">
              <li>
                <Link
                  href="#hero"
                  className="text-sm xs:text-base text-gray-300 hover:text-chart-1 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm xs:text-base text-gray-300 hover:text-chart-1 transition-colors">
                  Sobre o Evento
                </Link>
              </li>
              <li>
                <Link
                  href="#influencers"
                  className="text-sm xs:text-base text-gray-300 hover:text-chart-1 transition-colors">
                  Influencers
                </Link>
              </li>
              <li>
                <Link
                  href="#registration"
                  className="text-sm xs:text-base text-gray-300 hover:text-chart-1 transition-colors">
                  Inscrições
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg xs:text-xl font-bold">Contatos</h3>
            <div className="space-y-2 xs:space-y-3">
              <div className="flex flex-col">
                <div className="flex flex-col flexitems-center">
                  <span className="text-sm text-chart-1 justify-center">
                    Site desenvolvido por:
                  </span>
                  <Link
                    href="mailto:ale.osantos@hotmail.com"
                    className="flex items-center gap-2 xs:gap-3 text-gray-300 hover:text-chart-1 transition-colors duration-200">
                    <Mail className="w-4 h-4 xs:w-5 xs:h-5 text-chart-1" />
                    ale.osantos@hotmail.com
                  </Link>
                </div>

                <Link
                  href="https://www.instagram.com/alesx.sant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 xs:gap-3 text-gray-300 hover:text-chart-1 transition-colors duration-200">
                  <Instagram className="w-4 h-4 xs:w-5 xs:h-5 text-chart-1" />
                  @alexs.sant
                </Link>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-chart-1 justify-center">
                  Influencers:
                </span>
                <Link
                  href="https://instagram.com/thanaeuropa_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 xs:gap-3 text-gray-300 hover:text-chart-1 transition-colors duration-200">
                  <Instagram className="w-4 h-4 xs:w-5 xs:h-5 text-chart-1" />
                  @thanaeuropa_
                </Link>
                <Link
                  href="https://instagram.com/lolygoulart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 xs:gap-3 text-gray-300 hover:text-chart-1 transition-colors duration-200">
                  <Instagram className="w-4 h-4 xs:w-5 xs:h-5 text-chart-1" />
                  @lolygoulart
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}

        <div className="border-t border-gray-800 py-4 xs:py-6 grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
            <div className="text-sm xs:text-base text-gray-300">
              <p>© 2025 Corre com a gente! Todos os direitos reservados.</p>
            </div>
          </div>
          <div>
            <p className="text-gray-400 text-sm">
              Site desenvolvido por{' '}
              <span className="text-green-400 font-semibold">
                <Link href={'https://www.instagram.com/alesx.sant'}>
                  @alexs.sant
                </Link>
              </span>{' '}
              ❤️ para promover bem-estar e vida ativa em Portugal.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
