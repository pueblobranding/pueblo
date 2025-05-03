import ContactoSection from "@/components/contacto"
import NosotrosSection from "@/components/nosotros-section"
import PuebloBranding from "@/components/pueblo-branding"
import QueHacemosSection from "@/components/que-hacemos"

export default function Page() {
  return (
    <>
      <PuebloBranding />
      <QueHacemosSection/>
      <NosotrosSection />
      <ContactoSection/>
    </>
  )
}
