'use client'

import Header from '@/components/common/header'
import ScrollToTop from '@/components/common/scroll-to-top'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import OrganizersSections from '@/components/OrganizersSections'
import SponsorsSections from '@/components/SponsorsSections'
import RegistrationSection from '@/components/RegistrationSection'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <ScrollToTop />
      <main className="bg-white">
        <HeroSection />
        <AboutSection />
        <OrganizersSections />
        <SponsorsSections />
        <RegistrationSection />
      </main>

      <FooterSection />
    </div>
  )
}
