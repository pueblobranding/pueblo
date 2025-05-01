"use client"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export default function Navbar({ isMenuOpen, toggleMenu }: NavbarProps) {
  return (
    <>
      {/* Hamburger Menu Button - Always visible */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 p-2 rounded-full hover:bg-white/10 transition-colors"
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isMenuOpen ? <X className="h-8 w-8 text-white" /> : <Menu className="h-8 w-8 text-white" />}
      </button>

      {/* Full-screen Navigation Menu */}
      <div
        className={`fixed inset-0 bg-[#2a4a37] z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center space-y-8 text-2xl text-white">
          <a href="/" className="hover:text-gray-300 transition-colors tracking-wider">
            INICIO
          </a>
          <a href="/nosotros" className="hover:text-gray-300 transition-colors tracking-wider">
            NOSOTROS
          </a>
          <a href="/que-hacemos" className="hover:text-gray-300 transition-colors tracking-wider">
            QUE HACEMOS
          </a>
          <a href="/proyectos" className="hover:text-gray-300 transition-colors tracking-wider">
            PROYECTOS
          </a>
          <a href="/contacto" className="hover:text-gray-300 transition-colors tracking-wider">
            CONTACTO
          </a>
        </nav>
      </div>
    </>
  )
}