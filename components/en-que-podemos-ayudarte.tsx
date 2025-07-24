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
            description: "Recopilación, planificación, gestión, medición.",
            services: [
                "Recopilamos información de la empresa e identificamos mensajes y públicos clave",
                "Diseñamos planes estratégicos de comunicación identificando acciones, herramientas y canales clave",
                "Desarrollamos contenidos de interés para periodistas y medios",
                "Medimos resultados con informes mensuales",
            ],
        },
        {
            id: "coaching",
            title: "COACHING",
            image: "/que-hacemos/2.webp",
            description: "Brindamos coaching 1 a 1 o para equipos para ayudar a los líderes y equipos a desarrollar estrategias efectivas para alcanzar sus metas, mejorando el rendimiento y la toma de decisiones.",
            services: [],
        },
    ]

    return (
        <>
            <section id="que-hacemos" className="hidden lg:flex items-center min-h-screen bg-white px-4">
                <div className="container mx-auto max-w-6xl">

                    <h1 style={{ fontFamily: 'dream-avenue' }} className="text-verde-opalo-100 text-4xl md:text-5xl lg:text-6xl text-center mb-16 tracking-wider mt-20">
                        EN QUÉ PODEMOS AYUDARTE
                    </h1>

                    <div className="grid grid-cols-2 w-full px-34 pb-20 ">
                        <div className="bg-red-500">
                            <Image
                                src="/chicas-sonriendo-2.jpg"
                                alt="foto ilustrativa"
                                className="w-full"
                                width={900}
                                height={400}
                            />
                        </div>

                        <div className="flex flex-col ml-10 gap-10">
                            <p className="text-xl text-verde-opalo-100">
                                En PUEBLO hacemos comunicación con consciencia. Transformando marcas desde adentro, conectando con su esencia y dándole voz con propósito.
                            </p>

                            <a
                                href="#contacto"
                                className="w-fit bg-tigerlily text-white p-3 rounded-full hover:bg-[#d04e39] transition-colors tracking-wider cursor-pointer"
                            >
                                ¿NOS TOMAMOS UN CAFÉ VIRTUAL?
                            </a>
                        </div>
                    </div>



                    {/* Contenedor de secciones expandibles */}
                    {/* Contenedor de secciones expandibles */}
                    {/* Contenedor de secciones expandibles */}
                    <div className="grid grid-cols-4 gap-2">
                        {sections.map((section) => (
                            <div key={section.id}>

                                {/* Título siempre visible */}
                                <div
                                    style={{ fontFamily: 'dream-avenue' }}
                                    className="bg-verde-opalo-100 text-3xl font-bold text-white h-48 w-full rounded-t-full tracking-wider
                                                flex flex-col justify-center items-center pt-12 text-center"
                                >
                                    {section.title}
                                </div>
                                <div

                                    className={`relative overflow-hidden  transition-all duration-800 ease-in-out flex flex-col
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
                                    <div className="absolute inset-0 z-0 bg-pewter-blue-20">
                                        <Image
                                            src={section.image || "/placeholder.svg"}
                                            alt={section.title}
                                            fill
                                            // width={400}
                                            // height={400}
                                            className={`object-cover grayscale w-full transition-opacity duration-900  ${hoveredSection === section.id ? "opacity-20" : "opacity-80"}`}
                                        />
                                        <div className="absolute inset-0 bg-black/0"></div>
                                    </div>


                                    {/* Contenido */}
                                    <div className="relative z-10 flex flex-col h-64 p-4 text-verde-opalo-100 text-xs font-semibold">

                                        {/* Contenido expandido - visible solo en hover */}
                                        <div
                                            className={`flex flex-col transition-opacity duration-900 
                                                    ${hoveredSection === section.id ? "opacity-100" : "opacity-0 "}
                                                `}
                                        >
                                            <p className="mb-2">{section.description}</p>

                                            <ul className="space-y-2 mt-auto">
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
                            </div>
                        ))}
                    </div >
                </div>
            </section>




            {/* MOBILE */}
            {/* MOBILE */}
            {/* MOBILE */}
            <section id="que-hacemos" className="lg:hidden flex items-center min-h-screen h-[200%] bg-white py-4 px-4">

                <div className="container mx-auto max-w-6xl">

                    <h1 style={{ fontFamily: 'dream-avenue' }} className="text-verde-opalo-100 text-4xl text-center mb-6 tracking-wider mt-20">
                        EN QUÉ PODEMOS AYUDARTE
                    </h1>

                    <div className="grid grid-rows-2 w-full pb-10 ">
                        <div className="">
                            <Image
                                src="/chicas-sonriendo-2.jpg"
                                alt="foto ilustrativa"
                                className="w-full"
                                width={400}
                                height={400}
                            // fill
                            />
                        </div>

                        <div className="flex flex-col gap-10">
                            <p className="text-xl text-verde-opalo-100">
                                En PUEBLO hacemos comunicación con consciencia. Transformando marcas desde adentro, conectando con su esencia y dándole voz con propósito.
                            </p>

                            <a
                                href="#contacto"
                                className="w-fit bg-tigerlily text-sm text-white p-3 rounded-full hover:bg-[#d04e39] transition-colors font-semibold tracking-wider cursor-pointer mx-auto"
                            >
                                ¿NOS TOMAMOS UN CAFÉ VIRTUAL?
                            </a>
                        </div>
                    </div>

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
                                <div className="relative z-10 flex flex-col h-full p-4 text-gris">
                                    {/* Título siempre visible */}
                                    <div style={{ fontFamily: 'dream-avenue' }} className="bg-tigerlily text-md font-bold text-white py-2 px-6 rounded-r-full inline-block mb-1 tracking-wider relative -top-2 -left-10 pl-10">
                                        {section.title}
                                    </div>
                                    {/* <h2 style={{ fontFamily: 'dream-avenue' }} className="text-xl mb-4 tracking-wider font-bold">{section.title}</h2> */}

                                    {/* Contenido expandido - visible solo en hover */}
                                    <div
                                        className={`flex flex-col transition-opacity duration-900 text-[0.8rem]
                                                    ${hoveredSection === section.id ? "opacity-100" : "opacity-0 "}
                                                `}
                                    >
                                        <p className="mb-2 font-bold">{section.description}</p>

                                        <ul className="space-y-2 mt-auto font-bold">
                                            {section.services.map((service, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="mr-2 text-gris">•</span>
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