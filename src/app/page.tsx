import AboutEvent from '@/components/AboutEvent'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'

import InfluencersSection from '@/components/InfluencersSection'
import RegistrationForm from '@/components/RegistrationForm'

export default function Home() {
  return (
    <div className="min-h-screen min-sm:w-full">
      <Header />
      <main className="bg-primary-foreground">
        <HeroSection />
        <AboutEvent />
        <InfluencersSection />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  )
}
