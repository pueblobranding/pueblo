"use client"
import { Menu, X } from "lucide-react"
import Image from "next/image";
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"; // Importa useRouter y usePathname
import { MouseEvent } from "react";

interface NavbarProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export default function Navbar({ isMenuOpen, toggleMenu }: NavbarProps) {

  const router = useRouter();
  const pathname = usePathname(); // Obtiene la ruta actual

  // Función para manejar los clicks en los enlaces de navegación dentro del menú
  const handleMenuLinkClick = (href: string) => {
    // Cierra el menú siempre al hacer click
    toggleMenu();

    // Verifica si el enlace es un ancla a la página principal (ej: /#contacto)
    if (href.startsWith('/#')) {
      const id = href.substring(2); // Obtiene el ID (ej: "contacto")

      // Si ya estamos en la página principal ('/')
      if (pathname === '/') {
        // Encuentra el elemento por su ID
        const element = document.getElementById(id);
        if (element) {
          // Si el elemento existe, haz scroll suave a él
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Si el elemento no se encuentra (error en ID, etc.), fallback: usa router.push
          // Aunque con "use client", document está disponible, es buena práctica.
           router.push(href);
        }
      } else {
        // Si NO estamos en la página principal, navega a la página principal con el ancla.
        // Next.js Link o router.push + browser manejarán el scroll (puede no ser siempre suave).
        router.push(href);
      }
    } else {
      // Si el enlace es una ruta normal (ej: /, /nosotras), usa router.push
      router.push(href);
    }
  };

  // Función para manejar el click del logo (scroll suave al tope de la PÁGINA ACTUAL)
  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Previene el comportamiento por defecto del <a> (navegación)
    e.preventDefault();

    // Realiza el scroll suave a la parte superior de la ventana actual
    window.scroll({
      top: 0, // Desplazarse a la posición Y 0 (el tope)
      behavior: 'smooth' // Hace que el scroll sea suave (animado)
    });
    // Opcional: Si quieres que el logo cierre el menú al clicar, descomenta la siguiente línea:
    // if (isMenuOpen) {
    //   toggleMenu();
    // }
  };


  return (
    <>
      {/* Banda verde fija de fondo de la navbar */}
      <div className="fixed top-0 w-full h-16 md:h-20 bg-verde-opalo-100 z-30"></div>

      {/* Logo Clickable - Posicionado sobre la banda verde */}
      <a
        href="/" // Mantén href="/" para que 'abrir en nueva pestaña' funcione y vaya a la home
        onClick={handleLogoClick} // Este click manejado por JS prevalece para el click normal y hace scroll suave
        className="fixed -top-2 md:-top-6 left-6 z-50 w-1/4 md:w-1/7 cursor-pointer"
        aria-label="Volver al inicio de la página"
      >
        <Image
          src={"/logo-navbar.png"}
          alt="Logo de la navbar"
          height={200}
          width={200}
          className="w-full h-auto"
        />
      </a>

      {/* Hamburger Menu Button - Always visible - Posicionado sobre la banda verde */}
      <button
        onClick={toggleMenu}
        className="fixed top-2 md:top-3 right-4 md:right-8 z-50 p-2 md:p-3 rounded-full bg-verde-opalo-100 hover:bg-verde-opalo-80 transition-colors cursor-pointer"
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isMenuOpen ? <X className="h-8 w-8 text-white" /> : <Menu className="h-8 w-8 text-white" />}
      </button>

      {/* Full-screen Navigation Menu */}
      <div
        className={`
          fixed top-0 bottom-0 right-0 w-1/2
          bg-[#2a4a37] z-40
          flex flex-col items-center justify-center
          transition-transform duration-500 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          overflow-y-auto
        `}
      >
        <nav className="flex flex-col items-center space-y-8 text-md md:text-2xl text-white">
          {/* Usamos handleMenuLinkClick para todos los enlaces del menú */}
          {/* href sigue siendo necesario para Link y para funcionalidades como 'abrir en nueva pestaña' */}
          <Link href="/" onClick={() => handleMenuLinkClick("/")} className="hover:text-verde-opalo-60 transition-colors tracking-wider">
            INICIO
          </Link>

          <Link href="/#que-hacemos" onClick={() => handleMenuLinkClick("/#que-hacemos")} className="hover:text-verde-opalo-60 transition-colors tracking-wider">
            QUE HACEMOS
          </Link>

          <Link href="/nosotras" onClick={() => handleMenuLinkClick("/nosotras")} className="hover:text-verde-opalo-60 transition-colors tracking-wider">
            NOSOTRAS
          </Link>

          <Link href="/#contacto" onClick={() => handleMenuLinkClick("/#contacto")} className="hover:text-verde-opalo-60 transition-colors tracking-wider">
            CONTACTO
          </Link>
        </nav>
      </div>
    </>
  );
}