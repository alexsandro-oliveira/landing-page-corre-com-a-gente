'use client'

import { Calendar, MapPin, Users, Clock } from 'lucide-react'
import SlideArrowButton from './animata/button/slide-arrow-button'

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-14 xs:pt-16">
      {/* Background Gradient */}

      <div className="relative z-10 container mx-auto px-2 xs:px-4 sm:px-6 sm:pt-14 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary mb-3 xs:mb-4 sm:mb-6 leading-tight">
            Corre com a Gente!
            <span className="text-sm xs:text-base sm:text-2xl md:text-3xl lg:text-4xl block text-gray-600 bg-clip-text mt-1 xs:mt-2">
              Uma manhã de bem-estar e comunidade
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 mb-2 xs:mb-3 sm:mb-4 max-w-2xl mx-auto">
            Com{' '}
            <span className="font-semibold text-primary">Thalita Santos</span> e{' '}
            <span className="font-semibold text-primary">Lorena Goulart</span>
          </p>

          {/* Description */}
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 mb-6 xs:mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Junte-se a nós em uma manhã especial de exercício, bem-estar e
            comunidade. Venha correr ou caminhar com a gente neste evento cheio
            de energia, diversão e um ambiente acolhedor e motivador.
          </p>

          {/* Event Info Cards */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-12 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 border border-green-100 hover:border-green-200 transition-all duration-300 hover:scale-105">
              <Calendar className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2 xs:mb-3" />
              <h3 className="font-semibold text-gray-700 mb-1 text-xs xs:text-sm sm:text-base">
                Domingo
              </h3>
              <p className="text-xs xs:text-sm text-gray-600">
                27 de Julho 2025
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:scale-105">
              <MapPin className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-amber-500 mx-auto mb-2 xs:mb-3" />
              <h3 className="font-semibold text-gray-700 mb-1 text-xs xs:text-sm sm:text-base">
                Portugal
              </h3>
              <p className="text-xs xs:text-sm text-gray-600">Matosinhos</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 border border-pink-100 hover:border-pink-200 transition-all duration-300 hover:scale-105">
              <Clock className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-orange-600 mx-auto mb-2 xs:mb-3" />
              <h3 className="font-semibold text-gray-700 mb-1 text-xs xs:text-sm sm:text-base">
                Período da Manhã
              </h3>
              <p className="text-xs xs:text-sm text-gray-600">
                Horário a definir
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 border border-yellow-100 hover:border-yellow-200 transition-all duration-300 hover:scale-105">
              <Users className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-yellow-600 mx-auto mb-2 xs:mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1 text-xs xs:text-sm sm:text-base">
                Comunidade
              </h3>
              <p className="text-xs xs:text-sm text-gray-600">
                Todas as idades
              </p>
            </div>
          </div>
        </div>
        <SlideArrowButton onClick={() => scrollToSection('inscricao')} />
      </div>
    </section>
  )
}
