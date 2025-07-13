import AnimatedSection from '@/components/common/animated-section'
import {
  Calendar,
  Clock,
  Heart,
  MapPin,
  Sunrise,
  Target,
  Users,
} from 'lucide-react'
import { Button } from './ui/button'

export default function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const distances = [
    {
      distance: 'até 5km',
      title: 'Caminhada ou Corrida Leve',
      description:
        'Perfeito para iniciantes ou quem quer um desafio leve. Caminhe ou corra no seu ritmo',
      icon: Target,
      color: 'text-blue-800',
      bgColor: 'bg-blue-50/60',
      borderColor: 'border-blue-200/80',
    },
  ]

  return (
    <section id="details" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection
          animation="fadeUp"
          className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Sobre o Evento
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Um evento criado com amor pelas influencers Thalita Santos e Lorena
            Goulart para unir a comunidade através do esporte.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatedSection
            animation="fadeUp"
            delay={100}
            className="text-center p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-subtle">
              <span className="text-xl md:text-2xl">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Cuide da sua saúde
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Cuide da sua saúde física e mental em um ambiente acolhedor
            </p>
          </AnimatedSection>

          <AnimatedSection
            animation="fadeUp"
            delay={200}
            className="text-center p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-subtle">
              <span className="text-xl md:text-2xl">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Conecte-se
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Conecte-se com pessoas incríveis e faça novas amizades
            </p>
          </AnimatedSection>

          <AnimatedSection
            animation="fadeUp"
            delay={600}
            className="text-center p-4 md:p-6 bg-white rounded-lg shadow-md sm:col-span-2 lg:col-span-1 hover:shadow-lg">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
              <span className="text-xl md:text-2xl">
                <Sunrise className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Energia positiva
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Comece o domingo com energia positiva e motivação
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection
          animation="fadeUp"
          delay={1000}
          className="text-center mt-8 md:mt-12">
          {/* Distance Options */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                Distância
              </h3>

              <div className="flex justify-center gap-8 mx-auto">
                {distances.map((option, index) => {
                  const IconComponent = option.icon
                  return (
                    <AnimatedSection
                      animation="fadeUp"
                      delay={1200}
                      key={index}
                      className={`${option.bgColor} ${option.borderColor} border-2 rounded-3xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl`}>
                      <div className="flex items-start mb-6">
                        <div
                          className={`inline-flex items-center justify-center w-12 h-12 ${option.color} mr-4`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-3xl font-bold text-gray-700">
                            {option.distance}
                          </h4>
                          <p
                            className={`text-lg font-semibold ${option.color}`}>
                            {option.title}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {option.description}
                      </p>
                    </AnimatedSection>
                  )
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Event Details */}

        <AnimatedSection
          animation="fadeUp"
          delay={1000}
          className="text-center mt-8 md:mt-12">
          {/* Distance Options */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                Detalhes do Evento
              </h3>

              <AnimatedSection
                animation="fadeUp"
                delay={1300}
                className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="space-y-4 text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-lg">
                          <strong>Data:</strong> Domingo 27 de Julho de 2025
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-orange-600 mr-3" />
                        <span className="text-lg">
                          <strong>Horário:</strong> Período da Manhã
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-amber-500 mr-3" />
                        <span className="text-lg">
                          <strong>Local:</strong> Matosinhos - Portugal
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center lg:text-right">
                    <Button
                      onClick={() => scrollToSection('registration')}
                      className="bg-[#B8014A] hover:bg-[#B8014A] text-white"
                      size="sm">
                      Inscreva-se
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
