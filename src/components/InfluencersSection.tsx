'use client'

import { Instagram, ExternalLink, Heart, Dumbbell, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function InfluencersSection() {
  const influencers = [
    {
      name: 'Thana Europa',
      handle: '@thanaeuropa_',
      description:
        'Apaixonada por corrida de rua, estilo de vida ativo e contato com a natureza. Inspira suas seguidoras a se superarem a cada dia e a adotarem hábitos mais ativos e equilibrados.',
      specialties: [
        'Corrida',
        'Fitness',
        'Motivação',
        'Natureza',
        'Resilência',
      ],
      color: '[#FFEDD0]',
      bgGradient: 'bg-[#fff6d0]/60',
      borderColor: 'border-[#ecdbc0]',
      textColor: 'text-[#d49e47]',
      buttonGradient:
        'from-[#9b763c] to-[#7a5c2a] hover:from-[#815e26] hover:to-[#5a421b]',
      avatar: 'https://i.ibb.co/h1ghHR9q/thalita-correndo-edit.png',
      url: 'https://instagram.com/thanaeuropa_',
    },
    {
      name: 'Loly Goulart',
      handle: '@lolygoulart',
      description:
        'Apaixonada por vida saudável, bem-estar e moda. A fundadora da marca UAI Fit compartilha dicas práticas para manter a forma física e mental de uma forma contagiante.',
      specialties: ['Exercícios', 'Bem-estar', 'Lifestyle', 'Saúde', 'Moda'],
      color: 'green',
      bgGradient: 'bg-green-50/60',
      borderColor: 'border-green-200',
      textColor: 'text-green-600',
      buttonGradient:
        'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      avatar: 'https://i.ibb.co/k2fdMjL8/lorena-edit.png',
      url: 'https://instagram.com/lolygoulart',
    },
  ]

  const getSpecialtyIcon = (specialty: string) => {
    switch (specialty.toLowerCase()) {
      case 'fitness':
      case 'exercícios':
        return Dumbbell
      case 'bem-estar':
      case 'saúde':
        return Heart
      case 'motivação':
      case 'lifestyle':
        return Zap
      default:
        return Heart
    }
  }

  return (
    <section
      id="influencers"
      className="py-10 xs:py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-3">
            Conheça as Influencers
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça as incríveis influencers que estarão com você nesta jornada
            de bem-estar e motivação.
          </p>
        </div>

        {/* Influencers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {influencers.map((influencer, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${influencer.bgGradient} ${influencer.borderColor} border-2 rounded-2xl xs:rounded-3xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl`}>
              {/* Avatar and Basic Info */}
              <div className="flex items-center gap-1 xs:gap-1 mb-4 xs:mb-6 max-sm:flex-col sm:items-center">
                <Image
                  src={influencer.avatar}
                  alt={`${influencer.name} avatar`}
                  width={300}
                  height={300}
                  className="rounded-xl border-4 border-white shadow-lg"
                />
                <div className="flex flex-col justify-center items-center ml-4">
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-800">
                    {influencer.name}
                  </h3>
                  <p className="text-sm xs:text-base text-gray-600">
                    {influencer.handle}
                  </p>
                  {/* Description */}
                  <p className="text-gray-600 mt-2 ml-4">
                    {influencer.description}
                  </p>
                </div>
              </div>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2 xs:gap-3 mb-4 xs:mb-6 sm:mb-8 justify-center">
                {influencer.specialties.map((specialty, specialtyIndex) => {
                  const IconComponent = getSpecialtyIcon(specialty)
                  return (
                    <div
                      key={specialtyIndex}
                      className={`inline-flex items-center px-2 xs:px-3 sm:px-4 py-1 xs:py-2 bg-white/80 ${influencer.borderColor} border rounded-full`}>
                      <IconComponent
                        className={`w-3 h-3 xs:w-4 xs:h-4 ${influencer.textColor} mr-1 xs:mr-2`}
                      />
                      <span
                        className={`text-xs xs:text-sm font-medium ${influencer.textColor}`}>
                        {specialty}
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* Social Link */}
              <div className="flex justify-center">
                <a
                  href={influencer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-4 xs:px-5 sm:px-6 py-2 xs:py-3 bg-gradient-to-r ${influencer.buttonGradient} text-white rounded-full text-sm xs:text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}>
                  <Instagram className="w-5 h-5 mr-2" />
                  Seguir no Instagram
                  <ExternalLink className="w-3 h-3 xs:w-4 xs:h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Section */}
        <div className="mt-10 xs:mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="bg-blue-100 rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 lg:p-12 shadow-lg border border-gray-100 max-w-md xs:max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto">
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 mb-2 xs:mb-3 sm:mb-4">
              Suporte da Personal Trainer
            </h3>
            <div className="flex flex-col items-center justify-center mb-4 xs:mb-6">
              <Link
                href={'https://instagram.com/iamviviandamatta'}
                target="_blank"
                rel="noopener noreferrer">
                <Image
                  src="/vivian_logo_principal.png"
                  alt="Vivian da Matta logo"
                  width={350}
                  height={350}
                />
              </Link>

              <div className="text-center">
                <h4 className="text-base xs:text-lg sm:text-xl font-bold text-[#0072B2]">
                  Vivian da Matta
                </h4>
              </div>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-3 xs:mb-4 sm:mb-6">
              Uma profissional com muita experiência para orientar os
              participantes neste dia incrível.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 xs:mb-6">
              Sigam a Viviam para dicas de treino, nutrição e motivação diária.
              Ela está aqui para ajudar você a alcançar seus objetivos e a se
              sentir melhor consigo mesmo.
            </p>
            <a
              href="https://instagram.com/iamviviandamatta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 xs:px-5 sm:px-6 py-2 xs:py-3 bg-gradient-to-r from-[#08B0C5] to-[#0072B2] text-white rounded-full text-sm xs:text-base font-semibold hover:from-[#08B0C5] hover:to-[#0072B2] transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Instagram className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
              @iamviviandamatta
              <ExternalLink className="w-3 h-3 xs:w-4 xs:h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Sponsor Section */}
        <div className="mt-10 xs:mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="bg-[#cfe0bc] rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 lg:p-12 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 mb-2 xs:mb-3 sm:mb-4">
              Patrocinador Especial
            </h3>
            <div className="flex flex-col items-center justify-center mb-4 xs:mb-6">
              <Link
                href={'https://instagram.com/uaifitportugal'}
                target="_blank"
                rel="noopener noreferrer">
                <Image
                  src="/logo_uaifit_pq.png"
                  alt="Uai Fit logo"
                  width={500}
                  height={500}
                />
              </Link>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 xs:mb-6">
              A <span className="text-[#405929] font-bold">UAIFIT</span> não é
              apenas uma marca de moda, também é dedicada a promover o bem-estar
              e a saúde através de produtos e eventos que incentivam a atividade
              física e o autocuidado. Com uma abordagem inovadora e inclusiva, a{' '}
              <span className="text-[#405929] font-bold">UAIFIT</span> busca
              inspirar pessoas a adotarem um estilo de vida mais ativo e
              saudável, oferecendo produtos de alta qualidade e eventos que
              conectam a comunidade em Portugal.
            </p>
            <Link
              href="https://instagram.com/uaifitportugal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 xs:px-5 sm:px-6 py-2 xs:py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-sm xs:text-base font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Instagram className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
              @uaifitportugal
              <ExternalLink className="w-3 h-3 xs:w-4 xs:h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
