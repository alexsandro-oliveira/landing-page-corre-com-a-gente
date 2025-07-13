import { Instagram, Mail } from 'lucide-react'
import Link from 'next/link'

export default function FooterSection() {
  return (
    <footer className="bg-gray-800 text-white py-6 md:py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg xs:text-xl font-bold">Corre com a gente!</h3>
            <p className="text-sm xs:text-base text-gray-300">
              Junte-se a nós numa experiência única de corrida e caminhada.
              Promovemos saúde, bem-estar e comunidade através do esporte.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4 items-center">
            <h3 className="text-lg xs:text-xl font-bold">Contatos</h3>
            <div className="space-y-2 xs:space-y-3">
              <div className="flex flex-col">
                <div className="flex flex-col flexitems-center">
                  <span className="text-sm justify-center">
                    Site desenvolvido por:
                  </span>
                  <Link
                    href="mailto:ale.osantos@hotmail.com"
                    className="flex items-center gap-2 xs:gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    <Mail className="w-4 h-4 xs:w-5 xs:h-5 text-blue-400" />
                    ale.osantos@hotmail.com
                  </Link>
                </div>

                <Link
                  href="https://www.instagram.com/alesx.sant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 xs:gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  <Instagram className="w-4 h-4 xs:w-5 xs:h-5 text-blue-400" />
                  @alexs.sant
                </Link>
              </div>
              <div className="flex flex-col">
                <span className="text-sm justify-center">Influencers:</span>
                <Link
                  href="https://instagram.com/thanaeuropa_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 xs:gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  <Instagram className="w-4 h-4 xs:w-5 xs:h-5 text-blue-400" />
                  @thanaeuropa_
                </Link>
                <Link
                  href="https://instagram.com/lolygoulart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 xs:gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  <Instagram className="w-4 h-4 xs:w-5 xs:h-5 text-blue-400" />
                  @lolygoulart
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center items-center space-y-2 mt-5 pt-2 border-t border-gray-600">
          <div className="text-sm xs:text-base text-gray-300">
            <p>© 2025 Corre com a gente! Todos os direitos reservados.</p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">
              Site desenvolvido por{' '}
              <span className="text-blue-300 font-semibold">
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
