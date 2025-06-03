'use client'

import Navbar from '@/components/navbar'
import NosotrosSection from '@/components/nosotros-section'
import React, { useState } from 'react'

function NosotrasPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <NosotrosSection />
        </>
    )
}

export default NosotrasPage