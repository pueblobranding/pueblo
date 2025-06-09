"use client"

import { useState } from "react"
import Image from "next/image"

export default function QueHacemosSection() {

    const [hoveredSection, setHoveredSection] = useState<string | null>(null)

    const sections = [
        {
            id: "branding",
            title: "BRANDING",
            image: "/que-hacemos/1.webp",
            description:
                "Realizamos consultoría uno a uno para determinar una identidad de marca única y diferencial que permita plasmar tus ideas en acciones concretas para tu público objetivo.",
            services: ["Desarrollo de identidad", "Naming", "Packaging", "Manual de marca"],
        },
        {
            id: "comunicacion",
            title: "COMUNICACIÓN ESTRATÉGICA",
            image: "/que-hacemos/2.webp",
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
            image: "/que-hacemos/3.webp",
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
        <>
            <section id="que-hacemos" className="hidden md:flex items-center min-h-screen bg-white py- px-4">
                {/* <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> */}
                <div className="container mx-auto max-w-6xl">
                    {/* Título principal - siempre visible */}
                    {/* <h1 style={{ fontFamily: 'dream-avenue' }} className="text-tigerlily text-3xl md:text-4xl lg:text-6xl text-center mb-16 tracking-wider">
                        ENCONTRAMOS
                        <br />QUE HACE LATIR
                        <br />A TU MARCA
                    </h1> */}
                    <h1 style={{ fontFamily: 'dream-avenue' }} className="text-verde-opalo-100 text-4xl md:text-5xl lg:text-6xl text-center mb-16 tracking-wider mt-20">
                        QUE HACEMOS
                    </h1>

                    {/* Contenedor de secciones expandibles */}
                    <div className="flex flex-col md:flex-row h-[600px] md:h-[400px] gap-2 md:gap-4">
                        {sections.map((section) => (
                            <div
                                key={section.id}
                                className={`relative overflow-hidden rounded-lg transition-all duration-800 ease-in-out flex flex-col 
                                        ${hoveredSection === section.id
                                        ? "md:flex-[1] flex-[1]"
                                        : hoveredSection === null
                                            ? "md:flex-[1] flex-[1]"
                                            : "md:flex-[0.5] flex-[1]"
                                    }
                                            ${hoveredSection !== null && hoveredSection !== section.id ? "md:opacity-60" : "opacity-100"}
                                        `}
                                onMouseEnter={() => setHoveredSection(section.id)}
                                onMouseLeave={() => setHoveredSection(null)}
                            >
                                {/* Fondo de imagen */}
                                <div className="absolute inset-0 z-0 bg-pewter-blue-20 ">
                                    <Image
                                        src={section.image || "/placeholder.svg"}
                                        alt={section.title}
                                        width={800}
                                        height={600}
                                        className={`object-cover grayscale h-full transition-opacity duration-900  ${hoveredSection === section.id ? "opacity-20" : "opacity-80"}`}
                                    />
                                    {/* <div className="absolute inset-0 bg-black/0"></div> */}
                                </div>

                                {/* Contenido */}
                                <div className="relative z-10 flex flex-col h-full pt-6 pl-2 text-tigerlily ">
                                    {/* Título siempre visible */}
                                    <div className="bg-tigerlily  font-bold text-white rounded-r-full inline-block mb-4 relative -left-8 pl-10 pt-3 pb-2">
                                        {section.title}
                                    </div>

                                    {/* Contenido expandido - visible solo en hover */}
                                    <div
                                        className={`flex flex-col transition-opacity duration-900 w-[24rem] ml-8 text-[#424144]
                                                    ${hoveredSection === section.id ? "opacity-100" : "opacity-0 "}
                                                `}
                                    >
                                        <p className="mb-4 font-bold text-[1rem]">{section.description}</p>

                                        <ul className="space-y-2 mt-auto font-bold text-[1rem]]">
                                            {section.services.map((service, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="mr-2 text-tigerlily">•</span>
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

            {/* MOBILE */}
            <section id="que-hacemos" className="md:hidden flex items-center min-h-screen h-[200%] bg-white py-4 px-4">
                {/* <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> */}
                <div className="container mx-auto max-w-6xl">
                

                    {/* Contenedor de secciones expandibles */}
                    <div className="flex flex-col h-[600px] gap-2 ">
                        {sections.map((section) => (
                            <div
                                key={section.id}
                                className={`relative overflow-hidden rounded-lg transition-all duration-800 ease-in-out flex flex-col 
                ${hoveredSection === section.id
                                        ? "flex-[4]"
                                        : hoveredSection === null
                                            ? "flex-[1]"
                                            : "flex-[1]"
                                    }
                ${hoveredSection !== null && hoveredSection !== section.id ? "md:opacity-70" : "opacity-100"}
              `}
                                onMouseEnter={() => setHoveredSection(section.id)}
                                onMouseLeave={() => setHoveredSection(null)}
                            >
                                {/* Fondo de imagen */}
                                <div className="absolute inset-0 z-0 bg-pewter-blue-20 ">
                                    <Image
                                        src={section.image || "/placeholder.svg"}
                                        alt={section.title}
                                        //   fill
                                        width={400}
                                        height={400}
                                        className={`object-cover grayscale h-full transition-opacity duration-900  ${hoveredSection === section.id ? "opacity-20" : "opacity-80"}`}
                                    />
                                    <div className="absolute inset-0 bg-black/0"></div>
                                </div>

                                {/* Contenido */}
                                <div className="relative z-10 flex flex-col h-full p-4 text-tigerlily">
                                    {/* Título siempre visible */}
                                    <div style={{ fontFamily: 'dream-avenue' }} className="bg-tigerlily text-xl font-bold text-white py-2 px-6 rounded-r-full inline-block mb-4 tracking-wider relative -top-2 -left-10 pl-10">
                                        {section.title}
                                    </div>
                                    {/* <h2 style={{ fontFamily: 'dream-avenue' }} className="text-xl mb-4 tracking-wider font-bold">{section.title}</h2> */}

                                    {/* Contenido expandido - visible solo en hover */}
                                    <div
                                        className={`flex flex-col transition-opacity duration-900 
                                                    ${hoveredSection === section.id ? "opacity-100" : "opacity-0 "}
                                                `}
                                    >
                                        <p className="mb-4 font-bold text-sm">{section.description}</p>

                                        <ul className="space-y-2 mt-auto font-bold text-sm">
                                            {section.services.map((service, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="mr-2 text-tigerlily">•</span>
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
        </>
    )
}
