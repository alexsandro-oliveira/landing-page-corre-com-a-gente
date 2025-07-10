'use client'

import { Instagram, ExternalLink, Heart, Dumbbell, Zap } from 'lucide-react'
import FlipCard from './animata/card/flip-card'
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
      className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conheça as Influencers
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça as incríveis influencers que estarão com você nesta jornada
            de bem-estar e motivação.
          </p>
        </div>

        {/* Influencers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {influencers.map((influencer, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${influencer.bgGradient} ${influencer.borderColor} border-2 rounded-3xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl`}>
              {/* Avatar and Basic Info */}
              <div className="flex items-center justify-center mb-6">
                {/* <div
                  className={`w-20 h-20 bg-gradient-to-br ${
                    influencer.buttonGradient.split(' ')[0]
                  } ${
                    influencer.buttonGradient.split(' ')[1]
                  } rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6`}>
                  {influencer.avatar}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {influencer.name}
                  </h3>
                  <p
                    className={`text-lg font-semibold ${influencer.textColor} mb-2`}>
                    {influencer.handle}
                  </p>
                </div> */}

                <FlipCard
                  description={influencer.description}
                  image={influencer.avatar}
                  rotate="y"
                  subtitle={influencer.handle}
                  title={influencer.name}
                  className="mb-6 h-72 lg:h-80"
                />
              </div>

              {/* Description */}
              {/* <p className="text-gray-600 text-lg leading-relaxed mb-6 mt-6">
                {influencer.description}
              </p> */}

              {/* Specialties */}
              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {influencer.specialties.map((specialty, specialtyIndex) => {
                  const IconComponent = getSpecialtyIcon(specialty)
                  return (
                    <div
                      key={specialtyIndex}
                      className={`inline-flex items-center px-4 py-2 bg-white/80 ${influencer.borderColor} border rounded-full`}>
                      <IconComponent
                        className={`w-4 h-4 ${influencer.textColor} mr-2`}
                      />
                      <span
                        className={`text-sm font-medium ${influencer.textColor}`}>
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
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${influencer.buttonGradient} text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}>
                  <Instagram className="w-5 h-5 mr-2" />
                  Seguir no Instagram
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Section */}
        <div className="mt-20 text-center">
          <div className="bg-blue-100 rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 w-[500px] mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
              Suporte da Personal Trainer
            </h3>
            <div className="flex flex-col items-center justify-center mb-6">
              <Link
                href={'https://instagram.com/iamviviandamatta'}
                target="_blank"
                rel="noopener noreferrer">
                <Image
                  src="/vivian_logo_principal.png"
                  alt="Uai Fit logo"
                  width={350}
                  height={350}
                />
              </Link>

              <div className="text-left">
                <h4 className="text-xl font-bold text-[#0072B2]">
                  Vivian da Matta
                </h4>
              </div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Uma profissional com muita experiência para orientar os
              participantes neste dia incrível.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Sigam a Viviam para dicas de treino, nutrição e motivação diária.
              Ela está aqui para ajudar você a alcançar seus objetivos e a se
              sentir melhor consigo mesmo.
            </p>
            <a
              href="https://instagram.com/iamviviandamatta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#08B0C5] to-[#0072B2] text-white rounded-full font-semibold hover:from-[#08B0C5] hover:to-[#0072B2] transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Instagram className="w-5 h-5 mr-2" />
              @iamviviandamatta
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Sponsor Section */}
        <div className="mt-20 text-center">
          <div className="bg-[#cfe0bc] rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
              Apoio de
            </h3>
            <div className="flex flex-col items-center justify-center mb-6">
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

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Não é apenas uma marca de moda, também é dedicada a promover o
              bem-estar e a saúde através de produtos e eventos que incentivam a
              atividade física e o autocuidado. Com uma abordagem inovadora e
              inclusiva, a{' '}
              <span className="text-[#405929] font-bold">UAIFIT</span> busca
              inspirar pessoas a adotarem um estilo de vida mais ativo e
              saudável, oferecendo produtos de alta qualidade e eventos que
              conectam a comunidade em Portugal.
            </p>
            <Link
              href="https://instagram.com/uaifitportugal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Instagram className="w-5 h-5 mr-2" />
              @uaifitportugal
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
