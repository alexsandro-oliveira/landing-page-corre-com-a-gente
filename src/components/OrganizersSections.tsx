import { Dumbbell, ExternalLink, Heart, Instagram, Zap } from 'lucide-react'
import AnimatedSection from './common/animated-section'
import Image from 'next/image'

export default function OrganizersSections() {
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
    <section id="organizers" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection
          animation="fadeUp"
          className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Organizadoras
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            Conheça as influencers que tornaram este evento possível
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-4 max-w-6xl mx-auto">
          {influencers.map((influencer, index) => (
            <AnimatedSection
              animation="slideLeft"
              delay={600}
              duration={600}
              key={index}
              className={`bg-gradient-to-br ${influencer.bgGradient} ${influencer.borderColor} border-2 rounded-2xl xs:rounded-3xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl`}>
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
