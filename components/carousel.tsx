import SimpleCarousel from "@/components/carousel/simple-carousel"
import FusionamosLoProfesional from "./carousel/fusionamos-lo-profesional"
import PuebloBranding from "./pueblo-branding"
import EnPuebloHacemos from "./carousel/en-pueblo-hacemos"
import EncontramosQueHace from "./carousel/encontramos-que-hace"

// Componentes de ejemplo para el carrusel
function ComponenteUno() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-blue-500">
      <h2 className="text-4xl font-bold text-white">Componente Uno</h2>
    </div>
  )
}

function ComponenteDos() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-green-500">
      <h2 className="text-4xl font-bold text-white">Componente Dos</h2>
    </div>
  )
}

function ComponenteTres() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-purple-500">
      <h2 className="text-4xl font-bold text-white">Componente Tres</h2>
    </div>
  )
}

export default function Carousel() {
  // Componentes para mostrar en el carrusel
  const componentes = [<PuebloBranding key="one" />, <EnPuebloHacemos key="two" />, <FusionamosLoProfesional key="three" />, <EncontramosQueHace key="four"/>]

  return (
    <main>
      <SimpleCarousel components={componentes} autoRotateInterval={3000} />
    </main>
  )
}
