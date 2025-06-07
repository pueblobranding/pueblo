"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function NosotrasSection3() {

    const [hoveredSection, setHoveredSection] = useState<string | null>(null)

    const teamMembers = [
        {
            id: "MACHI",
            title: "MACHI",
            bio: [
                "Nací en Mar del Plata, donde el mar me enseñó a respirar profundamente y a conectarme con la naturaleza. Pero mi alma inquieta me llevó a buscar nuevos horizontes en Buenos Aires.",
                "Me sumergí en el mundo de la Comunicación Integral, y también me enamoré del Yoga, el Reiki y el Coaching. Me encanta ayudar a otros a encontrar su propio camino de crecimiento y bienestar.",
                "En Pueblo me empapo con cada nuevo proyecto para juntos encontrar las mejores estrategias para comunicar el alma y lo esencial de cada uno.",
            ],
            linkedinUrl: "https://www.linkedin.com/in/magdalenabenzo/",
            image: "/mechi.png",
        },
        {
            id: "NAT",
            title: "NAT",
            bio: [
                "Trabajo en Comunicación Estratégica hace 20 años, deseando cada vez más generar conexiones auténticas que respondan a los deseos personales y no al revés. ",
                "En el camino, descubrí que mi vocación también estaba en la sanación y mi faceta holística fue integrando herramientas como la Astrología,  el Reiki y la Biodecodificación para acompañar a otros en su proceso de crecimiento.",
                "Hoy, en PUEBLO, fusiono estos dos mundos. Cada proyecto es una oportunidad para conectar profundamente con la esencia de las marcas, ayudando a crear estrategias que no solo comuniquen, sino que cuenten historias reales que transformen y contagien lo más genuino de su esencia.",

            ],
            linkedinUrl: "https://www.linkedin.com/in/natpierro/",
            image: "/nat.png",
        },
    ]

    return (
        <>
            <section id="que-hacemos" className="hidden md:flex items-center min-h-screen bg-white py-16 px-4">
                <div className="container mx-auto max-w-5xl">

                    {/* Contenedor de secciones expandibles */}
                    <div className="flex flex-col md:flex-row h-[600px] md:h-[35rem] gap-2 md:gap-4">
                        {teamMembers.map((section) => (
                            <div
                                key={section.id}
                                className={`relative overflow-hidden rounded-lg transition-all duration-800 ease-in-out flex flex-col 
                                        ${hoveredSection === section.id
                                        ? "md:flex-[1] flex-[1]"
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
                                        HOLA! SOY {section.title}
                                    </div>

                                    {/* Contenido expandido - visible solo en hover */}
                                    <div
                                        className={`flex flex-col transition-opacity duration-900 w-[24rem] ml-8
                                                    ${hoveredSection === section.id ? "opacity-100" : "opacity-0 "}
                                                `}
                                    >
                                        <div className="text-[#424144] space-y-4">
                                            {section.bio.map((paragraph, index) => (
                                                <p key={index} className="font-bold leading-relaxed w-128 text-sm xl:text-[1.1rem]">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>

                                    <div className="absolute bottom-4 right-0 bg-white/80 px-4 py-1 text-xs rounded-l-full">
                                        <Link href={section.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#e85c44] hover:underline">
                                            {section.linkedinUrl.replace("https://", "")}
                                        </Link>
                                    </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* M O B I L E */}
            <section id="que-hacemos" className="md:hidden flex items-center h-[200%] bg-white py-4 px-4">
                <div className="container mx-auto max-w-6xl">

                    {/* Contenedor de secciones expandibles */}
                    <div className="flex flex-col h-[40rem] gap-2 ">
                        {teamMembers.map((section) => (
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
                                        HOLA! SOY {section.title}
                                    </div>

                                    {/* Contenido expandido - visible solo en hover */}
                                    <div
                                        className={`flex flex-col transition-opacity duration-900 
                                                    ${hoveredSection === section.id ? "opacity-100" : "opacity-0 "}
                                                `}
                                    >

                                        <div className="text-[#424144] space-y-4">
                                            {section.bio.map((paragraph, index) => (
                                                <p key={index} className="font-bold leading-relaxed text-[0.8em]">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>


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
