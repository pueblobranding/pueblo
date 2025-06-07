"use client"

import Image from "next/image"

export default function PuebloBranding() {

  return (
    <div id="inicio" className="h-full flex flex-col items-center justify-center bg-verde-opalo-100 text-white p-4 relative ">

      <div className="mb-8">
        <Image
          src={"/pueblologo-blanco.svg"}
          width={150}
          height={150}
          alt="logo pueblo"
        />
      </div>

      <h1 className="text-5xl md:text-7xl font-light tracking-[0.453em] -mr-[0.453em] mb-4">PUEBLO</h1>

      <p className="text-[0.666em] md:text-[1em] tracking-[0.185em] -mr-[0.185em]">BRANDING Y COMUNICACIÓN ESTRATÉGICA</p>
    </div>
  )
}
