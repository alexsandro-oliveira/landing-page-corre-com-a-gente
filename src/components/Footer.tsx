'use client'

import { Instagram, Mail, MapPin, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-2xl font-bold">Corre com a Gente!</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Evento para promover bem-estar, vida ativa e uma comunidade
              engajada em Portugal.
            </p>
            <div className="flex items-center text-gray-400 mb-2">
              <MapPin className="w-5 h-5 mr-3" />
              <span>Portugal</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Links Úteis</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Sobre o Evento
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('influencers')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Influencers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('inscricao')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Inscrição
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contatos</h3>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-sm text-green-700 justify-center">
                  Site desenvolvido por:
                </span>
                <Link
                  href="mailto:ale.osantos@hotmail.com"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200">
                  <Mail className="w-5 h-5 mr-3" />
                  ale.osantos@hotmail.com
                </Link>
                <Link
                  href="https://www.instagram.com/alesx.sant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200">
                  <Instagram className="w-5 h-5 mr-3" />
                  @alexs.sant
                </Link>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-green-500 justify-center">
                  Influencers:
                </span>
                <Link
                  href="https://instagram.com/thanaeuropa_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-pink-400 transition-colors duration-200">
                  <Instagram className="w-5 h-5 mr-3" />
                  @thanaeuropa_
                </Link>
                <Link
                  href="https://instagram.com/lolygoulart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  <Instagram className="w-5 h-5 mr-3" />
                  @lolygoulart
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Event Info Banner */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <Calendar className="w-6 h-6 text-green-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Data</p>
                  <p className="font-semibold">Domingo 27 de Julho</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-6 h-6 text-orange-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Horário</p>
                  <p className="font-semibold">Período da Manhã</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="w-6 h-6 text-amber-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Local</p>
                  <p className="font-semibold">Matosinhos - Portugal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
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
    </footer>
  )
}
