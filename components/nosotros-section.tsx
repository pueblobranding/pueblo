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
    <div className="flex flex-col md:flex-row w-full mb-8 overflow-hidden">
      <div className="bg-[#3a5a47] p-6 md:p-8 md:w-1/2 relative">
        <div className="bg-[#e85c44] text-white py-2 px-6 rounded-full inline-block mb-4 font-light tracking-wider">
          HOLA! SOY {name}
        </div>
        <div className="text-white space-y-4">
          {bio.map((paragraph, index) => (
            <p key={index} className="font-light leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 relative min-h-[300px] md:min-h-[400px]">
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
      linkedinUrl: "www.linkedin.com/magdabenenzo",
      imageUrl: "/placeholder.svg?height=500&width=400",
    },
    {
      name: "NAT",
      bio: [
        "Trabajé durante casi 20 años en Comunicación Estratégica, combinando mi pasión por el marketing con el deseo de generar conexiones auténticas.",
        "Sumergida en el universo corporativo, entendí la importancia de construir mensajes desde historias reales. En el camino, descubrí que mi vocación también estaba en la sanación y mi faceta holística comenzó a florecer, integrando herramientas como la Astrología, el Reiki y la Biodecodificación para acompañar a otros en su proceso de crecimiento.",
        "Hoy, en PUEBLO, fusiono estos dos mundos. Cada proyecto se convierte en una oportunidad para conectar profundamente con la esencia de las marcas, ayudando a crear estrategias que no solo comuniquen, sino que también transformen y contagien lo más genuino de su esencia.",
      ],
      linkedinUrl: "www.linkedin.com/natpierro",
      imageUrl: "/placeholder.svg?height=500&width=400",
    },
  ]

  return (
    <section className="w-full bg-[#3a5a47] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-white font-light tracking-wider mb-12 text-center">NOSOTROS</h2>
        <div className="flex flex-col gap-8">
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
  )
}
