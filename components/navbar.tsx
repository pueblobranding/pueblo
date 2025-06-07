"use client"
import { Menu, X } from "lucide-react"
import Image from "next/image";
import Link from "next/link" // Asegúrate de que Link está importado
import { useRouter, usePathname } from "next/navigation";
import { MouseEvent } from "react";

interface NavbarProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export default function Navbar({ isMenuOpen, toggleMenu }: NavbarProps) {

  const router = useRouter();
  const pathname = usePathname();

  // Función para manejar los clicks en los enlaces de navegación dentro del menú
  const handleMenuLinkClick = (href: string) => {
    // Cierra el menú siempre al hacer click
    toggleMenu();

    // Verifica si el enlace es un ancla a la página principal (ej: /#contacto)
    if (href.startsWith('/#')) {
      const id = href.substring(2); // Obtiene el ID (ej: "contacto")

      // Si ya estamos en la página principal ('/')
      if (pathname === '/') {
        // Intenta encontrar el elemento por su ID y hacer scroll suave
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Si el elemento no se encuentra, navega normalmente como fallback
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
  // Esta función ahora se usará en el onClick del <Link href="/">
  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Previene el comportamiento por defecto del <Link> (que sería navegar a href="/").
    // Esto es crucial para que solo se ejecute nuestro scroll.
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

      <Link
        href="/" // Usamos href="/" para cumplir con la convención de Next.js
        onClick={handleLogoClick} // Mantenemos el onClick para manejar el scroll suave en la página actual
        className="fixed pt-6 md:pt-12 left-6 z-50 w-28 md:w-32 cursor-pointer"
        aria-label="Volver al inicio de la página"
      >
        <div className="flex flex-col items-center justify-center bg-verde-opalo-100 rounded-b-full"
        >
          <Image
            src={"/pueblologo-blanco.svg"}
            alt="Logo de la navbar"
            height={10}
            width={10}
            className="w-full h-6 md:h-10"
          />
          <h5 className="text-xs md:text-sm text-white tracking-[0.453em] -mr-[0.453em] mt-2 mb-12"
          >PUEBLO</h5>
        </div>
      </Link>


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
        `}
      >
        <nav className="flex flex-col items-center space-y-8 text-sm md:text-2xl text-white font-semibold tracking-normal md:tracking-widest">
          {/* Usamos handleMenuLinkClick para todos los enlaces del menú */}
          {/* href sigue siendo necesario para Link y para funcionalidades como 'abrir en nueva pestaña' */}
          <Link href="/" onClick={() => handleMenuLinkClick("/")} className="hover:text-verde-opalo-60 transition-colors">
            INICIO
          </Link>

          <Link href="/#que-hacemos" onClick={() => handleMenuLinkClick("/#que-hacemos")} className="hover:text-verde-opalo-60 transition-colors">
            QUE HACEMOS
          </Link>

          <Link href="/somos-comunidad" onClick={() => handleMenuLinkClick("/somos-comunidad")} className="hover:text-verde-opalo-60 transition-colors">
            SOMOS COMUNIDAD
          </Link>

          <Link href="/#nosotras" onClick={() => handleMenuLinkClick("/#nosotras")} className="hover:text-verde-opalo-60 transition-colors">
            NOSOTRAS
          </Link>

          <Link href="/#contacto" onClick={() => handleMenuLinkClick("/#contacto")} className="hover:text-verde-opalo-60 transition-colors">
            CONTACTO
          </Link>
        </nav>
      </div>
    </>
  );
}