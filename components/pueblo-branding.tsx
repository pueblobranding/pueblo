"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"

export default function PuebloBranding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#3a5a47] text-white p-4 relative">
      {/* Navbar Component */}
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Main Content */}
      <div
        className={`flex flex-col items-center justify-center transition-opacity duration-500 ${
          isMenuOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Custom logo */}
        <div className="mb-8">
          <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 15C42 15 35 22 35 30C35 38 42 45 50 45C58 45 65 38 65 30C65 22 58 15 50 15ZM50 40C44.5 40 40 35.5 40 30C40 24.5 44.5 20 50 20C55.5 20 60 24.5 60 30C60 35.5 55.5 40 50 40Z"
              fill="white"
            />
            <path
              d="M50 10C52.5 10 55 7.5 55 5C55 2.5 52.5 0 50 0C47.5 0 45 2.5 45 5C45 7.5 47.5 10 50 10Z"
              fill="white"
            />
            <path
              d="M50 70C52.5 70 55 67.5 55 65C55 62.5 52.5 60 50 60C47.5 60 45 62.5 45 65C45 67.5 47.5 70 50 70Z"
              fill="white"
            />
            <path d="M30 30C30 30 40 50 70 50" stroke="white" strokeWidth="5" strokeLinecap="round" />
            <path d="M70 30C70 30 60 50 30 50" stroke="white" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>

        {/* PUEBLO text */}
        <h1 className="text-7xl font-light tracking-[1rem] mb-4">PUEBLO</h1>

        {/* Tagline */}
        <p className="text-sm tracking-wider">BRANDING Y COMUNICACIÓN ESTRATÉGICA</p>
      </div>
    </div>
  )
}
