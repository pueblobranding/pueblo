"use client"

import { useState } from "react"
import Image from "next/image"
import Navbar from "./navbar"

export default function QueHacemosSection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const [hoveredSection, setHoveredSection] = useState<string | null>(null)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const sections = [
        {
            id: "branding",
            title: "BRANDING",
            image: "/branding.png",
            description:
                "Realizamos consultoría uno a uno para determinar una identidad de marca única y diferencial que permita plasmar tus ideas en acciones concretas para tu público objetivo.",
            services: ["Desarrollo de identidad", "Naming", "Packaging", "Manual de marca"],
        },
        {
            id: "comunicacion",
            title: "COMUNICACIÓN ESTRATÉGICA",
            image: "/comunicacion.png",
            description: "Elaboramos una estrategia alineada a los objetivos comerciales.",
            services: [
                "Diseño y producción",
                "Marketing digital",
                "Redes sociales",
                "Estrategia y contenidos audiovisuales para redes",
                "Campañas de Google Ads",
            ],
        },
        {
            id: "difusion",
            title: "DIFUSIÓN Y PRENSA",
            image: "/difusion.png",
            description: "ESTRATEGIA INTEGRAL Pre, durante y post lanzamiento.",
            services: [
                "Comunicación con medios, canal comercial y consumidor final integrados",
                "Organización de eventos y activaciones en punto de venta",
                "Diseño de invitaciones",
                "Gestión de invitados",
                "Envío de invitaciones follow up",
                "Contacto para invitados y periodistas",
            ],
        },
    ]

    return (
        <section className="min-h-screen bg-[#3a5a47] py-16 px-4">
            <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <div className="container mx-auto max-w-6xl">
                {/* Título principal - siempre visible */}
                <h1 className="text-[#e85c44] text-3xl md:text-4xl lg:text-5xl font-light text-center mb-16 tracking-wider">
                    ENCONTRAMOS QUE HACE LATIR
                    <br />A TU MARCA
                </h1>

                {/* Contenedor de secciones expandibles */}
                <div className="flex flex-col md:flex-row h-[600px] md:h-[500px] gap-2 md:gap-4">
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className={`relative overflow-hidden rounded-lg transition-all duration-800 ease-in-out flex flex-col 
                ${hoveredSection === section.id
                                    ? "md:flex-[1.2] flex-[1]"
                                    : hoveredSection === null
                                        ? "md:flex-[1] flex-[1]"
                                        : "md:flex-[0.5] flex-[1]"
                                }
                ${hoveredSection !== null && hoveredSection !== section.id ? "md:opacity-70" : "opacity-100"}
              `}
                            onMouseEnter={() => setHoveredSection(section.id)}
                            onMouseLeave={() => setHoveredSection(null)}
                        >
                            {/* Fondo de imagen */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={section.image || "/placeholder.svg"}
                                    alt={section.title}
                                    //   fill
                                    width={400}
                                    height={400}
                                    className="object-cover grayscale h-full"
                                />
                                <div className="absolute inset-0 bg-black/40"></div>
                            </div>

                            {/* Contenido */}
                            <div className="relative z-10 flex flex-col h-full p-6 text-white">
                                {/* Título siempre visible */}
                                <h2 className="text-2xl md:text-3xl font-light mb-4 tracking-wider">{section.title}</h2>

                                {/* Contenido expandido - visible solo en hover */}
                                <div
                                    className={`flex flex-col transition-opacity duration-900 
                    ${hoveredSection === section.id ? "opacity-100" : "opacity-0 md:hidden"}
                  `}
                                >
                                    <p className="mb-4 font-light">{section.description}</p>

                                    <ul className="space-y-2 mt-auto">
                                        {section.services.map((service, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="mr-2 text-[#e85c44]">•</span>
                                                <span>{service}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
