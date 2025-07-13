'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-lg md:text-xl font-bold text-[#B8014A]">
              Corre com a Gente
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('details')}
              className="text-gray-700 hover:text-[#B8014A] transition-colors">
              Sobre o Evento
            </button>
            <button
              onClick={() => scrollToSection('organizers')}
              className="text-gray-700 hover:text-[#B8014A] transition-colors">
              Organizadoras
            </button>
            <button
              onClick={() => scrollToSection('sponsors')}
              className="text-gray-700 hover:text-[#B8014A] transition-colors">
              Apoiadores
            </button>
            <Button
              onClick={() => scrollToSection('registration')}
              className="bg-[#B8014A] hover:bg-[#B8014A] text-white"
              size="sm">
              Inscreva-se
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('details')}
                className="text-left text-gray-700 hover:text-[#B8014A] transition-colors py-2">
                Sobre o Evento
              </button>
              <button
                onClick={() => scrollToSection('organizers')}
                className="text-left text-gray-700 hover:text-[#B8014A] transition-colors py-2">
                Organizadoras
              </button>
              <button
                onClick={() => scrollToSection('sponsors')}
                className="text-left text-gray-700 hover:text-[#B8014A] transition-colors py-2">
                Apoiadores
              </button>
              <Button
                onClick={() => scrollToSection('registration')}
                className="bg-[#B8014A] hover:bg-[#B8014A] text-white w-full">
                Inscreva-se
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
