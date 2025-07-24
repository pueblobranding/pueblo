import Link from "next/link"
import { Instagram, Linkedin, Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-verde-opalo-100 text-white">
            <div className="container mx-auto px-4 py-6 md:py-12 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo y descripción */}
                    <div className="lg:col-span-2">
                        <div className="hidden md:flex flex-col justify-center md:justify-start md:flex-row items-center mb-4 ">
                            <div className="w-12 h-12 bg-verde-opalo-100 rounded-full flex items-center justify-center mr-3">
                                <Image
                                    src={"/pueblologo-blanco.svg"}
                                    width={100}
                                    height={100}
                                    alt="logo pueblo"
                                />
                            </div>

                            <div>
                                <h3 className="hidden md:block text-2xl font-500 tracking-[0.453em] -mr-[0.453em]">PUEBLO</h3>
                                <p className="hidden lg:block text-sm opacity-90">BRANDING Y COMUNICACIÓN ESTRATÉGICA</p>
                            </div>
                        </div>
                        {/* <p className="text-sm opacity-90 leading-relaxed max-w-md">
                            Creemos en el poder colaborativo. Conformamos una comunidad con los mejores profesionales y especialistas
                            del mercado para abordar todas las áreas específicas que tu empresa necesita.
                        </p> */}
                    </div>

                    {/* Servicios */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Servicios</h4>
                        <ul className="space-y-2 text-sm opacity-90">
                            <li>
                                <Link href="#" className="hover:text-tigerlily transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="#que-hacemos" className="hover:text-tigerlily transition-colors">
                                    Qué hacemos
                                </Link>
                            </li>
                            <li>
                                <Link href="/somos-comunidad" className="hover:text-tigerlily transition-colors">
                                    Somos comunidad
                                </Link>
                            </li>
                            <li>
                                <Link href="#nosotras" className="hover:text-tigerlily transition-colors">
                                    Nosotras
                                </Link>
                            </li>
                            <li>
                                <Link href="#contacto" className="hover:text-tigerlily transition-colors">
                                    Contacto
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
                                <a href="mailto:hello@pueblobranding.com" className="hover:text-tigerlily transition-colors">
                                    hello@pueblobranding.com
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                                <a href="https://api.whatsapp.com/send?phone=+5491133226434&text=%20" target="_blank" rel="noopener noreferrer" className="hover:text-tigerlily transition-colors">
                                    <span>+549 11 3322 6434 (ARG)</span>
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                                <a href="https://api.whatsapp.com/send?phone=+598094500560&text=%20" target="_blank" rel="noopener noreferrer" className="hover:text-tigerlily transition-colors">
                                    <span>+598 094 500 560 (URU)</span>
                                </a>
                            </div>
                        </div>

                        {/* Redes sociales */}
                        <div className="flex space-x-4 mt-6">
                            <a
                                href="https://www.instagram.com/pueblobranding"
                                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-tigerlily transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/pueblo-branding"
                                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-tigerlily transition-colors"
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
                        <br />
                        <p className="max-w-80 mr-4">
                            Este sitio está protegido por reCAPTCHA de Google,

                            y se aplican la
                            <a className="hover:text-tigerlily transition-colors" href="https://policies.google.com/privacy" target="_blank"> Política de Privacidad</a> y los

                            <a className="hover:text-tigerlily transition-colors" href="https://policies.google.com/terms" target="_blank"> Términos de Servicio</a> de Google.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
