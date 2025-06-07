'use client'

import Carousel from "@/components/carousel"
import ContactoSection from "@/components/contacto"
import Instagram from "@/components/instagram"
import Main from "@/components/main"
import Navbar from "@/components/navbar"
import NosotrosSection from "@/components/nosotros-section"
// import PuebloBranding from "@/components/pueblo-branding"
import QueHacemosSection from "@/components/que-hacemos"
import { useState } from "react"

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {/* <PuebloBranding /> */}
      <Carousel/>
      <QueHacemosSection />
      <Main />
      <NosotrosSection />
      <ContactoSection />
      <Instagram />
    </>
  )
}
