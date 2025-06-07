import Image from "next/image"
import Link from "next/link"

interface TeamMemberProps {
  name: string
  bio: string[]
  linkedinUrl: string
  imageUrl: string
}

function TeamMember({ name, bio, linkedinUrl, imageUrl }: TeamMemberProps) {
  return (
    <div className="flex flex-col md:flex-row-reverse w-full mb-8 overflow-hidden px-4">
      <div className="p-4 md:p-8 md:w-3/4 relative">
        <div style={{ fontFamily: 'dream-avenue' }} className="bg-tigerlily text-xl md:text-3xl font-bold text-white py-2 px-6 rounded-r-full inline-block mb-4 tracking-wider  relative -left-10 pl-10">
          HOLA! SOY {name}
        </div>
        <div className="text-[#424144] space-y-4">
          {bio.map((paragraph, index) => (
            <p key={index} className="font-bold leading-relaxed text-sm xl:text-[1.1em]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="relative h-[400px] w-[310px] p-4 mx-auto md:mt-8">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`Foto de ${name}`}
          fill
          className="object-cover object-center grayscale"
        />
        <div className="absolute bottom-2 right-2 bg-white/80 px-2 py-1 text-xs">
          <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#e85c44] hover:underline">
            {linkedinUrl.replace("https://", "")}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function NosotrosSection() {

  const teamMembers = [
    {
      name: "MACHI",
      bio: [
        "Nací en Mar del Plata, donde el mar me enseñó a respirar profundamente y a conectarme con la naturaleza. Pero mi alma inquieta me llevó a buscar nuevos horizontes en Buenos Aires.",
        "Me sumergí en el mundo de la Comunicación Integral, y también me enamoré del Yoga, el Reiki y el Coaching. Me encanta ayudar a otros a encontrar su propio camino de crecimiento y bienestar.",
        "En Pueblo me empapo con cada nuevo proyecto para juntos encontrar las mejores estrategias para comunicar el alma y lo esencial de cada uno.",
      ],
      linkedinUrl: "https://www.linkedin.com/in/magdalenabenzo/",
      imageUrl: "/mechi.png",
    },
    {
      name: "NAT",
      bio: [
        "Trabajo en Comunicación Estratégica hace 20 años, deseando cada vez más generar conexiones auténticas que respondan a los deseos personales y no al revés. ",
        "En el camino, descubrí que mi vocación también estaba en la sanación y mi faceta holística fue integrando herramientas como la Astrología,  el Reiki y la Biodecodificación para acompañar a otros en su proceso de crecimiento.",
        "Hoy, en PUEBLO, fusiono estos dos mundos. Cada proyecto es una oportunidad para conectar profundamente con la esencia de las marcas, ayudando a crear estrategias que no solo comuniquen, sino que cuenten historias reales que transformen y contagien lo más genuino de su esencia.",
       
      ],
      linkedinUrl: "https://www.linkedin.com/in/natpierro/",
      imageUrl: "/nat.png",
    },
  ]

  return (
    <>
      <section id="nosotros" className="w-full bg-white py-16">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4 md:mx-40">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.name}
                name={member.name}
                bio={member.bio}
                linkedinUrl={member.linkedinUrl}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
