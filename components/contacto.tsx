"use client"

import type React from "react"

import { useState } from "react"
import { Send, MailIcon, PhoneIcon, Instagram, Linkedin } from "lucide-react"
import Navbar from "@/components/navbar"

export default function ContactoSection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        mensaje: "",
    })

    const [formStatus, setFormStatus] = useState<{
        submitted: boolean
        success: boolean
        message: string
    }>({
        submitted: false,
        success: false,
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulación de envío exitoso
        setFormStatus({
            submitted: true,
            success: true,
            message: "¡Gracias por contactarnos! Te responderemos a la brevedad.",
        })
        // En un caso real, aquí iría la lógica para enviar el formulario a un servidor
    }

    return (
        <section id="contacto" className="min-h-screen bg-[#3a5a47] py-16 px-4 ">
            <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <div className="container mx-auto max-w-6xl">
                {/* Título principal */}
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light text-center mb-16 tracking-wider">
                    CONTACTO
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Información de contacto */}
                    <div className="text-white order-2 md:order-1">
                        <h2 className="text-[#e85c44] text-3xl font-light mb-8 tracking-wider">CONVERSEMOS</h2>

                        <div className="space-y-6">

                            <div className="flex flex-row gap-4">
                                {/* <h3 className="text-xl font-light mb-2">Email</h3> */}
                                <MailIcon />
                                <a href="mailto:hola@pueblo.com.ar" className="font-light hover:text-[#e85c44] transition-colors">
                                    hello@pueblobranding.com
                                </a>
                            </div>

                            <div className="flex flex-row gap-4">
                                {/* <h3 className="text-LG font-light mb-2">ARGENTINA</h3> */}
                                <PhoneIcon />
                                <a href="tel:+5491133226434" className="font-light hover:text-[#e85c44] transition-colors">
                                    +549 11 3322 6434 (ARG)
                                </a>
                            </div>

                            <div className="flex flex-row gap-4">
                                {/* <h3 className="text-LG font-light mb-2">URUGUAY</h3> */}
                                <PhoneIcon />
                                <a href="tel:+598094500560" className="font-light hover:text-[#e85c44] transition-colors">
                                    +598 094 500 560 (URU)
                                </a>
                            </div>

                            <div>
                                <h3 className="text-xl font-light mb-2">Redes Sociales</h3>
                                <div className="flex space-x-4">
                                    <a href="https://www.instagram.com/pueblobranding" className="hover:text-[#e85c44] transition-colors">
                                        <Instagram />
                                    </a>
                                    <a href="#" className="hover:text-[#e85c44] transition-colors">
                                        <Linkedin />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulario de contacto */}
                    <div className="bg-white p-8 rounded-lg shadow-lg order-1 md:order-2">
                        <h2 className="text-[#3a5a47] text-2xl font-light mb-6">Escribinos</h2>

                        {formStatus.submitted && formStatus.success ? (
                            <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
                                {formStatus.message}
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                                        Nombre *
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#e85c44]"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#e85c44]"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefono"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#e85c44]"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
                                        Empresa
                                    </label>
                                    <input
                                        type="text"
                                        id="empresa"
                                        name="empresa"
                                        value={formData.empresa}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#e85c44]"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                                        Mensaje *
                                    </label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#e85c44]"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="flex items-center justify-center w-full bg-[#e85c44] text-white py-3 px-6 rounded-md hover:bg-[#d04e39] transition-colors"
                                >
                                    <span className="mr-2">Enviar mensaje</span>
                                    <Send size={18} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
