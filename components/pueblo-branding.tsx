"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Image from "next/image"

export default function PuebloBranding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#486955] text-white p-4 relative ">
      {/* Navbar Component */}
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Main Content */}
      <div
        className={`flex flex-col items-center justify-center transition-opacity duration-500 ${isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
      >
        {/* Custom logo */}
        <div className="mb-8">
          <Image
            src={"/pueblo-logo-transparente.svg"}
            width={250}
            height={250}
            alt="logo pueblo"
          />

        </div>

        {/* PUEBLO text */}
        <h1 className="text-5xl md:text-7xl font-light tracking-[0.453em] -mr-[0.453em] mb-4">PUEBLO</h1>

        {/* Tagline */}
        <p className="text-[0.666em] md:text-[1em] tracking-[0.185em] -mr-[0.185em]">BRANDING Y COMUNICACIÓN ESTRATÉGICA</p>
      </div>
    </div>
  )
}
