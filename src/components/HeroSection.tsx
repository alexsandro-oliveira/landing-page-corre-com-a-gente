import Image from 'next/image'
import AnimatedSection from '@/components/common/animated-section'
import { TypedText } from '@/components/common/typed-text'
import EventInfoCards from './EventInfoCards'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative text-white min-h-screen md:min-h-[80vh] pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Pessoas correndo ao ar livre"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 "></div>
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative container mx-auto px-4 py-8 md:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] lg:min-h-[60vh]">
          <AnimatedSection
            animation="slideRight"
            duration={800}
            className="space-y-4 md:space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <TypedText text="Corre com a Gente!" speed={150} />
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light">
              Uma manhã de bem-estar e comunidade.
            </p>

            {/* Event Info Cards */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
              <EventInfoCards
                title="Domingo"
                description="27 de Julho"
                icon={
                  <Calendar className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2 xs:mb-3" />
                }
              />
              <EventInfoCards
                title="Matosinhos"
                description="Portugal"
                icon={
                  <MapPin className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-amber-500 mx-auto mb-2 xs:mb-3" />
                }
              />
              <EventInfoCards
                title="Manhã"
                description="Horário a definir"
                icon={
                  <Clock className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-orange-600 mx-auto mb-2 xs:mb-3" />
                }
              />
              <EventInfoCards
                title="Comunidade"
                description="Todas as idades"
                icon={
                  <Users className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-yellow-600 mx-auto mb-2 xs:mb-3" />
                }
              />
            </div>
          </AnimatedSection>
          <AnimatedSection
            animation="slideLeft"
            delay={400}
            duration={800}
            className="relative h-[22rem] sm:h-[22rem] sm:w-[30rem] sm:mx-auto md:h-96 lg:h-96 rounded-lg overflow-hidden shadow-2xl ">
            <Image
              src="https://i.ibb.co/TDC7vZv3/tha-loly.jpg"
              alt="Thalita Santos e Lorena Goulart - Organizadoras do evento"
              width={100}
              height={100}
              className="object-cover transition-transform duration-700 hover:scale-110"
              priority
              sizes="100vw, (max-width: 1024px) 50vw, 50vw"
              style={{ width: '100%', height: '100%' }}
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
