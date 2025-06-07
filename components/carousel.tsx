
import EnPuebloHacemos from "./carousel/en-pueblo-hacemos"
import EncontramosQueHace from "./carousel/encontramos-que-hace"
import FusionamosLoProfesional from "./carousel/fusionamos-lo-profesional"
import SimpleCarousel from "./carousel/simple-carousel"

export default function Carousel() {
  // Componentes para mostrar en el carrusel
  const componentes = [
    // <PuebloBranding key="one" />,
    <EnPuebloHacemos key="two" />,
    <FusionamosLoProfesional key="three" />,
    <EncontramosQueHace key="four" />
  ]

  return (
    <div className="px-10 py-20">
      <SimpleCarousel components={componentes} autoRotateInterval={4000} />
    </div>
  )
}
