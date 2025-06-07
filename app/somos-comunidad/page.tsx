'use client'

import Navbar from '@/components/navbar'
import SomosComunidad from '@/components/somos-comunidad'
import React, { useState } from 'react'

function NosotrasPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <SomosComunidad />
        </>
    )
}

export default NosotrasPage