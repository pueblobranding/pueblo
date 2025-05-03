"use client"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation";

interface NavbarProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export default function Navbar({ isMenuOpen, toggleMenu }: NavbarProps) {

  const router = useRouter();

  const handleNavLinkClick = (href: string) => {
    // Cierra el menú *antes* de navegar (para evitar el parpadeo si la carga de la página es rápida)
    toggleMenu();
    // Navega a la nueva página
    router.push(href);
  };


  return (
    <>
      {/* Hamburger Menu Button - Always visible */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
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
          <Link href="/" onClick={() => handleNavLinkClick("/")} className="hover:text-gray-300 transition-colors tracking-wider">
            INICIO
          </Link>
          <Link href="#que-hacemos" onClick={() => handleNavLinkClick("#que-hacemos")} className="hover:text-gray-300 transition-colors tracking-wider">
            QUE HACEMOS
          </Link>
          <Link href="#nosotros" onClick={() => handleNavLinkClick("/nosotros")} className="hover:text-gray-300 transition-colors tracking-wider">
            NOSOTROS
          </Link>
          <Link href="#contacto" onClick={() => handleNavLinkClick("/contacto")} className="hover:text-gray-300 transition-colors tracking-wider">
            CONTACTO
          </Link>
        </nav>
      </div>
    </>
  )
}