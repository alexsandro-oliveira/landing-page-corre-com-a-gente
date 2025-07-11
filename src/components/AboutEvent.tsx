'use client'

import {
  Heart,
  Trophy,
  Users,
  Sunrise,
  Target,
  Calendar,
  Clock,
  MapPin,
} from 'lucide-react'

export default function AboutEvent() {
  const features = [
    {
      icon: Heart,
      title: 'Cuide da sua saúde',
      description:
        'Cuide da sua saúde física e mental em um ambiente acolhedor',
      color: 'text-yellow-600',
      bgColor: 'bg-[#f7f2eb]',
      borderColor: 'border-yellow-200',
    },
    {
      icon: Users,
      title: 'Conecte-se',
      description: 'Conecte-se com pessoas incríveis e faça novas amizades',
      color: 'text-yellow-600',
      bgColor: 'bg-[#f7f2eb]',
      borderColor: 'border-yellow-200',
    },
    {
      icon: Trophy,
      title: 'Supere seus limites',
      description: 'Supere seus limites e celebre cada passo da jornada',
      color: 'text-yellow-600',
      bgColor: 'bg-[#f7f2eb]',
      borderColor: 'border-yellow-200',
    },
    {
      icon: Sunrise,
      title: 'Energia positiva',
      description: 'Comece o domingo com energia positiva e motivação',
      color: 'text-yellow-600',
      bgColor: 'bg-[#f7f2eb]',
      borderColor: 'border-yellow-200',
    },
  ]

  const distances = [
    {
      distance: 'até 5km',
      title: 'Caminhada ou Corrida Leve',
      description:
        'Perfeito para iniciantes ou quem quer um desafio leve. Caminhe ou corra no seu ritmo',
      icon: Target,
      color: 'text-[#7d834f]',
      bgColor: 'bg-green-50/60',
      borderColor: 'border-green-200/80',
    },
    // {
    //   distance: '5km',
    //   title: 'Corrida Desafiadora',
    //   description: 'Ideal para quem busca um desafio maior e quer correr',
    //   icon: Zap,
    //   color: 'text-blue-600',
    //   bgColor: 'bg-blue-50',
    //   borderColor: 'border-blue-200',
    // },
  ]

  return (
    <section
      id="sobre"
      className="py-8 xs:py-12 sm:py-16 lg:py-20 px-3 bg-white">
      <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 xs:mb-10 sm:mb-12">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-700 mb-3 xs:mb-4">
            Mais do que uma corrida ou caminhada
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Organizado pelas incríveis influenciadoras{' '}
            <span className="font-bold text-primary">Thalita Santos</span> e{' '}
            <span className="font-bold text-primary">Lorena Goulart</span>, este
            evento é perfeito para quem desejam se movimentar, se conectar e
            celebrar a saúde e a comunidade. Correndo ou caminhando, aproveite
            um domingo de julho pela manhã com energia positiva! Mais do que uma
            corrida ou caminhada, é uma experiência de bem-estar e conexão.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className={`${feature.bgColor} ${feature.borderColor} border rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg`}>
                <div
                  className={`w-12 h-12 xs:w-14 xs:h-14 bg-chart-1 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4 ${feature.color}`}>
                  <IconComponent className="w-6 h-6 xs:w-7 xs:h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Distance Options */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
              Distância
            </h3>
            <p className="text-lg text-gray-600">
              O evento oferece opções de caminhada ou corrida leve, com
              distâncias de até 5km, perfeito para iniciantes ou quem busca um
              desafio leve.
            </p>
          </div>

          <div className="flex gap-8 mx-auto">
            {distances.map((option, index) => {
              const IconComponent = option.icon
              return (
                <div
                  key={index}
                  className={`${option.bgColor} ${option.borderColor} border-2 rounded-3xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl`}>
                  <div className="flex items-center mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 ${option.color} mr-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-gray-700">
                        {option.distance}
                      </h4>
                      <p className={`text-lg font-semibold ${option.color}`}>
                        {option.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {option.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Event Details */}
        <div className="mt-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                Detalhes do Evento
              </h3>
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
              <button
                onClick={() => {
                  const element = document.getElementById('inscricao')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-gradient-to-r from-[#a0b989] to-[#70845F] text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-[#90a77b] hover:to-[#687a58] transition-all duration-300 transform hover:scale-105 shadow-lg">
                Quero Participar!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
