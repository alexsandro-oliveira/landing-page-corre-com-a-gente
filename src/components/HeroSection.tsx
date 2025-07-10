'use client'

import { Calendar, MapPin, Users, Clock } from 'lucide-react'
import SlideArrowButton from './animata/button/slide-arrow-button'
import TiltCard from './animata/card/tilted-card'

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <TiltCard
            title="EVENTO ESPECIAL"
            className="inline-flex mb-8 text-chart-1 border-chart-1 font-semibold"
          />

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
            Corre com a Gente!
            <span className="text-2xl sm:text-3xl lg:text-4xl block text-gray-600 bg-clip-text">
              Uma manhã de bem-estar e comunidade
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            Com{' '}
            <span className="font-semibold text-primary">Thalita Santos</span> e{' '}
            <span className="font-semibold text-primary">Lorena Goulart</span>
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Junte-se a nós em uma manhã especial de exercício, bem-estar e
            comunidade. Venha correr ou caminhar com a gente neste evento cheio
            de energia, diversão e um ambiente acolhedor e motivador.
          </p>

          {/* Event Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 hover:border-green-200 transition-all duration-300 hover:scale-105">
              <Calendar className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-700 mb-1">Domingo</h3>
              <p className="text-sm text-gray-600">27 de Julho 2025</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:scale-105">
              <MapPin className="w-8 h-8 text-amber-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-700 mb-1">Portugal</h3>
              <p className="text-sm text-gray-600">Matosinhos</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-pink-100 hover:border-pink-200 transition-all duration-300 hover:scale-105">
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-700 mb-1">
                Período da Manhã
              </h3>
              <p className="text-sm text-gray-600">Horário a definir</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-100 hover:border-yellow-200 transition-all duration-300 hover:scale-105">
              <Users className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Comunidade</h3>
              <p className="text-sm text-gray-600">Todas as idades</p>
            </div>
          </div>

          {/* CTA Button */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <SlideArrowButton onClick={() => scrollToSection('inscricao')} />
        {/* <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse" />
        </div> */}
      </div>
    </section>
  )
}
