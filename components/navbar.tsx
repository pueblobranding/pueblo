"use client"
import { Menu, X } from "lucide-react"
import Image from "next/image";
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
      <div className="fixed top-0 w-full h-16 md:h-20 bg-verde-opalo-100 z-40">
        <Image
          src={"/logo-navbar.png"}
          alt="Logo de la navbar"
          height={200}
          width={200}
          className="fixed -top-2 md:-top-6 left-6 z-50 w-1/4 md:w-1/7"
        />

      </div>

      {/* Hamburger Menu Button - Always visible */}
      <button
        onClick={toggleMenu}
        className="fixed top-2 md:top-3 right-4 md:right-8 z-50 p-2 md:p-3 rounded-full bg-verde-opalo-100 hover:bg-verde-opalo-80 transition-colors cursor-pointer"
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isMenuOpen ? <X className="h-8 w-8 text-white" /> : <Menu className="h-8 w-8 text-white" />}
      </button>

      {/* Full-screen Navigation Menu */}
      <div
        className={`fixed inset-0 bg-[#2a4a37ef] z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <nav className="flex flex-col items-center space-y-8 text-2xl text-white">
          <Link href="#inicio" onClick={() => handleNavLinkClick("/")} className="hover:text-gray-300 transition-colors tracking-wider">
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