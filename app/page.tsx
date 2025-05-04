import ContactoSection from "@/components/contacto"
import Instagram from "@/components/instagram"
import NosotrosSection from "@/components/nosotros-section"
import PuebloBranding from "@/components/pueblo-branding"
import QueHacemosSection from "@/components/que-hacemos"
import SomosUnaAgencia from "@/components/somos-una-agencia"


export default function Page() {
  return (
    <>
      <PuebloBranding />
      <SomosUnaAgencia/>
      <QueHacemosSection/>
      <NosotrosSection />
      <ContactoSection/>
      <Instagram />
    </>
  )
}
