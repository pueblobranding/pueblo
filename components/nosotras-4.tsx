"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function NosotrasSection4() {

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
            image: "/machi-pueblo-2.jpg",
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
            image: "/nat-pueblo-2.jpg",
        },
    ]

    return (
        <section id="nosotras" className="flex justify-center min-h-fit bg-pewter-blue-100 px-4">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row gap-8 md:items-start">
                    {teamMembers.map((section) => (
                        <div
                            key={section.id}
                            className="flex-1"
                            onMouseEnter={() => setHoveredSection(section.id)}
                            onMouseLeave={() => setHoveredSection(null)}
                        >
                            <div className="relative w-full h-96 overflow-hidden shadow-lg">
                                <Image
                                    src={section.image}
                                    alt={section.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="saturate-"
                                />
                                <div
                                    style={{ fontFamily: 'dream-avenue' }}
                                    className="absolute top-4 left-0 text-white bg-tigerlily text-2xl font-bold py-2 pl-4 pr-14 rounded-r-full inline-block tracking-wider"
                                >
                                    ¡HOLA! <br/>
                                    SOY <br/>
                                    {section.title}
                                </div>
                            </div>
                            <div
                                className={`grid transition-[grid-template-rows] duration-500 ease-in-out bg-pewter-blue-20 rounded-b-lg shadow-lg`}
                                style={{ gridTemplateRows: hoveredSection === section.id ? '1fr' : '0fr' }}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-6">
                                        <div className="text-[#424144] space-y-4">
                                            {section.bio.map((paragraph, index) => (
                                                <p key={index} className="font-semibold leading-relaxed text-sm xl:text-[1rem]">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link
                                href={section.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-tigerlily text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md z-10"
                            >
                                in
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
