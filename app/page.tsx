'use client'

import { useState } from "react"
import Carousel from "@/components/carousel"
import ContactoSection from "@/components/contacto"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import QueHacemosSection from "@/components/en-que-podemos-ayudarte"
import SomosComunidad from "@/components/somos-comunidad"

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Carousel />
      <QueHacemosSection />
      <SomosComunidad/>
      <ContactoSection />
      {/* <Instagram /> */}
      <Footer/>
    </>
  )
}
