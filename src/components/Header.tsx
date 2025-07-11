'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-chart-4 backdrop-blur-md border-b border-primary">
      <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 xs:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-base xs:text-lg sm:text-xl font-bold text-chart-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-[#bbc092] hover:text-[#e4e9c3] transition-colors duration-200 cursor-pointer">
                Corre com a gente!
              </button>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-[#bbc092] hover:text-[#e4e9c3] transition-colors duration-200 cursor-pointer">
              Sobre o Evento
            </button>
            <button
              onClick={() => scrollToSection('influencers')}
              className="text-[#bbc092] hover:text-[#e4e9c3] transition-colors duration-200">
              Influencers
            </button>
            <button
              onClick={() => scrollToSection('inscricao')}
              className="text-[#bbc092] hover:text-[#e4e9c3] transition-colors duration-200">
              Inscrição
            </button>
          </nav>

          {/* CTA Button */}
          {/* <button
            onClick={() => scrollToSection('inscricao')}
            className="hidden md:block bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105">
            Inscreva-se Já!
          </button> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1 xs:p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            {isMenuOpen ? (
              <X className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
            ) : (
              <Menu className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden transition-all duration-300 ease-in-out overflow-hidden',
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          )}>
          <nav className="py-2 xs:py-4 space-y-2 xs:space-y-4">
            <button
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left text-sm xs:text-base text-[#bbc092] hover:text-[#e4e9c3] transition-colors duration-200 px-2 py-1">
              Sobre o Evento
            </button>
            <button
              onClick={() => scrollToSection('influencers')}
              className="block w-full text-left text-sm xs:text-base text-[#bbc092] hover:text-[#e4e9c3] transition-colors duration-200 px-2 py-1">
              Influencers
            </button>
            <button
              onClick={() => scrollToSection('inscricao')}
              className="block w-full text-left text-sm xs:text-base text-[#bbc092] hover:text-[#e4e9c3] transition-colors duration-200 px-2 py-1">
              Inscrição
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
