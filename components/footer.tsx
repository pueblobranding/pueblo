import Link from "next/link"
import { Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-verde-opalo-100 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-3">
              
              LOGO!
              
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-wider">PUEBLO</h3>
                <p className="text-sm opacity-90">BRANDING Y COMUNICACIÓN ESTRATÉGICA</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed max-w-md">
              Creemos en el poder colaborativo. Conformamos una comunidad con los mejores profesionales y especialistas
              del mercado para abordar todas las áreas específicas que tu empresa necesita.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="#branding" className="hover:text-[#e85a4f] transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="#comunicacion" className="hover:text-[#e85a4f] transition-colors">
                  Comunicación Estratégica
                </Link>
              </li>
              <li>
                <Link href="#difusion" className="hover:text-[#e85a4f] transition-colors">
                  Difusión y Prensa
                </Link>
              </li>
              <li>
                <Link href="#eventos" className="hover:text-[#e85a4f] transition-colors">
                  Organización de Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href="mailto:hello@pueblobranding.com" className="hover:text-[#e85a4f] transition-colors">
                  hello@pueblobranding.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>+549 11 3322 6434 (ARG)</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>+598 094 500 560 (URU)</span>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e85a4f] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e85a4f] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; {new Date().getFullYear()} PUEBLO. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacidad" className="hover:text-[#e85a4f] transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-[#e85a4f] transition-colors">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
