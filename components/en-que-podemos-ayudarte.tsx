"use client"
import QueHacemosCarousel from "./QueHacemosCarousel";
import QueHacemosSlide from "./QueHacemosSlide";


import { useState } from "react"
import Image from "next/image"

export default function QueHacemosSection() {

    const [hoveredSection, setHoveredSection] = useState<string | null>(null)

    const sections = [
        {
            id: "branding",
            title: "BRANDING CON ALMA",
            image: "/que-hacemos/1.webp",
            description:
                "Branding con alma, forma y propósito.",
            services: [
                "Creamos marcas auténticas: nombre, tono y personalidad.",
                "Diseñamos su universo visual: logo, colores, packaging.",
                "Te entregamos un manual claro para comunicar siempre con coherencia.",
            ],
        },
        {
            id: "prensa",
            title: "PRENSA",
            image: "/que-hacemos/3.webp",
            description: "Prensa que conecta y posiciona.",
            services: [
                "Relación real con medios, basada en propósito.",
                "Narrativas que inspiran confianza y comunidad.",
                "Posicionamiento genuino desde tu historia.",
                "Presencia estratégica donde tu audiencia sí está.",
            ],
        },
        {
            id: "coaching",
            title: "Coaching para líderes",
            image: "/que-hacemos/3.webp",
            description: "Un espacio para liderar con sentido. Acompañamos a personas que crean con propósito. Si tu marca, tu voz o tu proyecto buscan claridad, este espacio es para vos.",
            services: [
                "Comunicar desde tu verdad, sin máscaras.",
                "Liderar con autenticidad y presencia.",
                "Encontrar tu estilo propio para influir y crecer.",
            ],
        },
        {
            id: "comunicacion",
            title: "Comunicación estratégica",
            image: "/que-hacemos/2.webp",
            description: "Estrategia creativa para crecer con foco. Co-creamos estrategias alineadas con tus objetivos personales y comerciales.",
            services: [
                "Diseño, contenido y producción.",
                "Marketing digital, redes, campañas de Google Ads y más.",
                "Todo lo que tu marca necesita para crecer con coherencia y visión.",
            ],
        },
    ]

    return (
        <>
            <section id="que-hacemos" className="flex items-center bg-white px-4 md:mb-20">
                <div className="container mx-auto max-w-6xl">

                    <h1 style={{ fontFamily: 'dream-avenue' }} className="text-verde-opalo-100 text-4xl md:text-5xl lg:text-6xl text-center tracking-wider my-6 md:my-20 uppercase">
                        Cómo podemos acompañarte?
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:px-34 pb-20 ">
                        <div className="">
                            <Image
                                src="/chicas-sonriendo-2.jpg"
                                alt="foto ilustrativa"
                                className="w-full mb-6"
                                width={900}
                                height={400}
                            />
                        </div>

                        <div className="flex flex-col items-center md:ml-10 gap-10">
                            <p className="text-xl text-verde-opalo-100 text-center md:text-left">
                                En Pueblo hacemos comunicación con conciencia.
                                Transformamos marcas desde su esencia, creando mensajes con propósito y presencia real.
                            </p>

                            <a
                                href="#contacto"
                                className="w-fit bg-tigerlily text-white p-3 rounded-full hover:bg-[#d04e39] transition-colors tracking-wider cursor-pointer"
                            >
                                ¡CONTANOS TU PROYECTO!
                            </a>
                        </div>
                    </div>



                    {/* Contenedor de secciones expandibles */}
                    <QueHacemosCarousel
                        components={sections.map((section) => (
                            <QueHacemosSlide
                                key={section.id}
                                title={section.title}
                                description={section.description}
                                imageUrl={section.image}
                                services={section.services}
                            />
                        ))}
                    />
                </div>
            </section>




            {/* MOBILE */}
            {/* MOBILE */}
            {/* MOBILE */}
            <section id="que-hacemos" className="hidden bg-white py-4 px-4">

                <div className="container mx-auto max-w-6xl ">

                    <h1 style={{ fontFamily: 'dream-avenue' }} className="text-verde-opalo-100 text-3xl text-center mb- tracking-wider my-8">
                        EN QUÉ PODEMOS AYUDARTE
                    </h1>

                    <div className="grid grid-rows-2 w-full pb- ">
                        <div className="flex flex-col items-center">
                            <Image
                                src="/chicas-sonriendo-2.jpg"
                                alt="foto ilustrativa"
                                className="w-xl rounded-md"
                                width={400}
                                height={400}
                            />
                        </div>

                        <div className="flex flex-col gap-6 mb-0">
                            <p className="text-xl text-verde-opalo-100 text-center mt-4">
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
                    <div className="flex flex-col md:grid grid-cols-2 h-[600px] gap-2 max-w-sm md:max-w-full mx-auto">
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
                                        width={400}
                                        height={400}
                                        className={`object-cover grayscale h-full transition-opacity duration-900  ${hoveredSection === section.id ? "opacity-20" : "opacity-80"}`}
                                    />
                                    <div className="absolute inset-0 bg-black/0"></div>
                                </div>

                                {/* Contenido */}
                                <div className="relative z-10 flex flex-col h-full p-5 text-gris">
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