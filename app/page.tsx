'use client'

import Carousel from "@/components/carousel"
import ContactoSection from "@/components/contacto"
import Main from "@/components/main"
import Navbar from "@/components/navbar"
import NosotrasSection3 from "@/components/nosotras-3"
import QueHacemosSection from "@/components/que-hacemos"
import SomosComunidad from "@/components/somos-comunidad"
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
      <Main />
      <Carousel />
      <QueHacemosSection />
      <SomosComunidad/>
      <NosotrasSection3 />
      {/* <NosotrosSection /> */}
      <ContactoSection />
      {/* <Instagram /> */}
    </>
  )
}
