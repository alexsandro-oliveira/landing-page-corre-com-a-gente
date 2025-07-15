import Image from 'next/image'
import AnimatedSection from './common/animated-section'
import RegistrationForm from './features/registration-form'

export default function RegistrationSection() {
  return (
    <section id="registration" className="py-12 md:py-16 lg:py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection
            animation="fadeUp"
            className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Inscrição
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Faça sua inscrição e participe deste evento incrível!
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scaleUp" delay={300}>
            <RegistrationForm />
            <div className="absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 opacity-40">
              <Image
                src="/encerrado1.png"
                alt="Inscrições encerradas"
                width={500}
                height={500}
                style={{ transform: 'rotate(-30deg)' }}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
