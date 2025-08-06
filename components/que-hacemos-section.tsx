import SimpleCarousel from "./carousel/simple-carousel";
import QueHacemosSlide from "./QueHacemosSlide";

import Image from "next/image"

export default function QueHacemosSection() {

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

                    <h1 style={{ fontFamily: 'dream-avenue' }} className="text-verde-opalo-100 text-4xl md:text-4xl lg:text-5xl text-center tracking-wider my-6 md:my-20 uppercase">
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
                                className="w-fit bg-tigerlily text-white p-3 rounded-full hover:bg-[#d04e39] transition-colors tracking-wider cursor-pointer text-center"
                            >
                                ¡CONTANOS TU PROYECTO!
                            </a>
                        </div>
                    </div>



                    {/* Contenedor de secciones expandibles */}
                    <SimpleCarousel
                        heightClassName="h-[600px]"
                        indicatorContainerClassName="absolute top-60 left-0 right-0 flex justify-center gap-2 z-20"
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
        </>
    )
}