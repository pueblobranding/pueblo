"use client"
import { Menu, X } from "lucide-react"
import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { MouseEvent } from "react"; // Importa MouseEvent

interface NavbarProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export default function Navbar({ isMenuOpen, toggleMenu }: NavbarProps) {

  const router = useRouter();
  
  // Función para manejar los clicks en los enlaces de navegación dentro del menú
  const handleNavLinkClick = (href: string) => {
    // Cierra el menú antes de navegar/scroll
    toggleMenu();
    // Navega a la nueva página o sección
    // Nota: Usar router.push para hashes puede tener efectos no deseados.
    // Para scroll dentro de la misma página a un #id, a menudo es mejor
    // usar <Link href="#id"> y solo llamar a toggleMenu en el onClick del Link.
     router.push(href); // Mantengo tu lógica actual por ahora
  };

  // Función para manejar el click del logo (scroll suave al tope)
  // Usamos MouseEvent<HTMLAnchorElement> si el logo está dentro de un <a>
  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Previene el comportamiento por defecto del <a> (navegación)
    e.preventDefault();

    // Realiza el scroll suave a la parte superior de la ventana
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
      {/* Usamos <a> para semántica de enlace, con href="#" y onClick manejado por JS */}
      <a
        href="#"
        onClick={handleLogoClick}
        className="fixed -top-2 md:-top-6 left-6 z-50 w-1/4 md:w-1/7 cursor-pointer"
        aria-label="Volver al inicio de la página"
      >
        <Image
          src={"/logo-navbar.png"}
          alt="Logo de la navbar"
          height={200}
          width={200}
          // Eliminar clases de posicionamiento/tamaño de la imagen, ya están en el <a> contenedor
          // className="fixed -top-2 md:-top-6 left-6 z-50 w-1/4 md:w-1/7" <-- ELIMINAR ESTO
          // Añade una clase para que la imagen se ajuste al contenedor <a>
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

      {/* Full-screen Navigation Menu (Ahora será de media pantalla y centrado) */}
      <div
        className={`
          fixed top-0 bottom-0 right-0 w-1/2 
          bg-[#2a4a37] z-40
          flex flex-col items-center justify-center 
          transition-transform duration-500 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"} /* <-- MANTIENE LA ANIMACIÓN: desliza entre su posición normal (right-0) y 100% de su ancho a la derecha */
          overflow-y-auto /* <-- Opcional: Permite scroll si el contenido excede la altura */
        `}
      >
        {/* El <nav> es el contenido que se centrará dentro del div anterior */}
        <nav className="flex flex-col items-center space-y-8 text-md md:text-2xl text-white">
          {/* Los Links se centran HORIZONTALMENTE dentro del <nav> gracias a items-center */}
          <Link href="/" onClick={() => handleNavLinkClick("/")} className="hover:text-verde-opalo-60 transition-colors tracking-wider">
            INICIO
          </Link>
          <Link href="#que-hacemos" onClick={() => handleNavLinkClick("#que-hacemos")} className="hover:text-verde-opalo-60 transition-colors tracking-wider">
            QUE HACEMOS
          </Link>
          <Link href="/nosotras" onClick={() => handleNavLinkClick("/nosotras")} className="hover:text-verde-opalo-60 transition-colors tracking-wider">
            NOSOTRAS
          </Link>
          <Link href="#contacto" onClick={() => handleNavLinkClick("#contacto")} className="hover:text-verde-opalo-60 transition-colors tracking-wider">
            CONTACTO
          </Link>
        </nav>
      </div>
    </>
  );
}