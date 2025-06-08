"use client"

import Image from "next/image"

export default function Main() {


  return (
    <>
      <div id="inicio" className="flex flex-col items-center justify-center h-96 bg-verde-opalo-100 text-white p-4 relative pt-16">

        <div className="mb-8 max-w-20">
          <Image
            src={"/pueblologo-blanco.svg"}
            width={200}
            height={200}
            alt="logo pueblo"
          />
        </div>

        {/* PUEBLO text */}
        <h1 className="text-5xl md:text-7xl font-500 tracking-[0.453em] -mr-[0.453em] mb-4">PUEBLO</h1>

        {/* Tagline */}
        <p className="text-[0.666em] font-medium md:text-[1em] tracking-[0.185em] -mr-[0.185em]">BRANDING Y COMUNICACIÓN ESTRATÉGICA</p>
      
      </div>
    </>
  )
}
