import Link from 'next/link'
import AnimatedSection from './common/animated-section'
import Image from 'next/image'
import { ExternalLink, Instagram } from 'lucide-react'

export default function SponsorsSections() {
  return (
    <section id="sponsors" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection
          animation="fadeUp"
          delay={200}
          duration={600}
          className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Apoiadores
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            Agradecemos aos nossos parceiros que tornaram este evento possível
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Sponsor */}
          <AnimatedSection
            animation="scaleUp"
            delay={200}
            duration={600}
            className="text-center ">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800">
              Patrocinador Principal
            </h3>
            <div className="bg-[#cfe0bc] rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 lg:p-12 shadow-lg border border-gray-100 max-w-2xl mx-auto hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col items-center justify-center">
                <Link
                  href={'https://instagram.com/uaifitportugal'}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Image
                    src={'https://i.ibb.co/nMrHR6Th/logo-uaifit-pq.png'}
                    alt="Uai Fit logo"
                    width={300}
                    height={300}
                    sizes="100vw, (max-width: 768px) 50vw, 100vw"
                  />
                </Link>
              </div>

              <p className="text-sm max-sm:px-8 text-gray-600 leading-relaxed mb-4 xs:mb-6">
                A <span className="text-[#405929] font-bold">UAIFIT</span> não é
                apenas uma marca de moda, também é dedicada a promover o
                bem-estar e a saúde através de produtos e eventos que incentivam
                a atividade física e o autocuidado. Com uma abordagem inovadora
                e inclusiva, a{' '}
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
          </AnimatedSection>

          {/* Personal Trainer */}
          <AnimatedSection
            animation="scaleUp"
            delay={400}
            className="text-center ">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800">
              Personal Trainer Apoiadora
            </h3>
            <div className="bg-blue-100 rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 lg:p-12 shadow-lg border border-gray-100 max-w-md xs:max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col items-center justify-center mb-4 xs:mb-6">
                <Link
                  href={'https://instagram.com/iamviviandamatta'}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Image
                    src={'https://i.ibb.co/s9znsrDh/Vivian-Logo-principal.png'}
                    alt="Vivian da Matta logo"
                    width={350}
                    height={350}
                  />
                </Link>

                <div className="text-center">
                  <h4 className="text-base xs:text-lg sm:text-xl font-bold text-[#0072B2]">
                    VIVIAN DA MATTA
                  </h4>
                </div>
              </div>
              <p className="text-sm  text-gray-600 leading-relaxed mb-3 xs:mb-4 sm:mb-6">
                Uma profissional com muita experiência para orientar os
                participantes neste dia incrível.
              </p>
              <p className="text-sm  text-gray-600 leading-relaxed mb-4 xs:mb-6">
                Sigam a Viviam para dicas de treino, nutrição e motivação
                diária. Ela está aqui para ajudar você a alcançar seus objetivos
                e a se sentir melhor consigo mesmo.
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
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
