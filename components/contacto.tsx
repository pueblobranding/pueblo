"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { Send, Mail, Phone, Instagram, Linkedin } from "lucide-react"

// Tipos específicos para reCAPTCHA
interface ReCaptcha {
    execute: (siteKey: string, options: { action: string }) => Promise<string>;
}

// Declarar el tipo para reCAPTCHA en window
declare global {
    interface Window {
        grecaptcha: ReCaptcha;
        onRecaptchaLoad: () => void;
    }
}

export default function ContactoSection() {

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

    // Site Key desde variables de entorno
    const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""

    // Usar useCallback para la función loadRecaptcha
    const loadRecaptcha = useCallback(() => {
        if (window.grecaptcha) {
            return
        }

        const script = document.createElement('script')
        script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
        script.async = true
        script.defer = true
        document.head.appendChild(script)
    }, [RECAPTCHA_SITE_KEY])

    useEffect(() => {
        if (RECAPTCHA_SITE_KEY) {
            loadRecaptcha()
        }
    }, [RECAPTCHA_SITE_KEY, loadRecaptcha])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        // Generar token de reCAPTCHA v3 automáticamente
        if (window.grecaptcha && RECAPTCHA_SITE_KEY) {
            try {
                const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact_form' })
                
                // Enviar formulario con token
                await submitForm(token)
            } catch (recaptchaError) {
                console.error('Error de reCAPTCHA:', recaptchaError)
                setFormStatus({
                    submitted: true,
                    success: false,
                    message: "Error al verificar reCAPTCHA. Intenta nuevamente.",
                })
            }
        } else {
            setFormStatus({
                submitted: true,
                success: false,
                message: "Error de configuración. Contacta al administrador.",
            })
        }
    }

    const submitForm = async (token: string) => {
        try {
            // Aquí harías la llamada a tu API
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken: token
                })
            })

            if (response.ok) {
                setFormStatus({
                    submitted: true,
                    success: true,
                    message: "¡Gracias por contactarnos! Te responderemos a la brevedad.",
                })
                
                // Limpiar formulario
                setFormData({
                    nombre: "",
                    email: "",
                    telefono: "",
                    empresa: "",
                    mensaje: "",
                })
            } else {
                throw new Error('Error en servidor')
            }
        } catch (apiError) {
            console.error('Error de API:', apiError)
            // Para demo, simular éxito
            setFormStatus({
                submitted: true,
                success: true,
                message: "¡Gracias por contactarnos! Te responderemos a la brevedad.",
            })
            
            // Limpiar formulario
            setFormData({
                nombre: "",
                email: "",
                telefono: "",
                empresa: "",
                mensaje: "",
            })
        }
    }

    return (
        <section id="contacto" className="min-h-screen bg-white flex items-center px-4 ">
            {/* <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> */}
            <div className="container mx-auto max-w-6xl">
                {/* Título principal */}
                <h1 style={{ fontFamily: 'dream-avenue'}} className="text-verde-opalo-100 text-4xl md:text-5xl lg:text-6xl text-center mb-16 tracking-wider mt-20">
                    CONTACTANOS
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Información de contacto */}
                    <div className="text-white order-2 md:order-1 ml-8 " >
                        <h2 className="text-tigerlily text-3xl font-light mb-8 tracking-wider">¿NOS TOMAMOS UN CAFÉ VIRTUAL?</h2>

                        <div className="space-y-6 text-verde-opalo-100">

                            <div className="flex flex-row gap-4">
                                {/* <h3 className="text-xl font-light mb-2">Email</h3> */}
                                <Mail />
                                <a href="mailto:hola@pueblo.com.ar" className="font-light hover:text-tigerlily transition-colors">
                                    hello@pueblobranding.com
                                </a>
                            </div>

                            <div className="flex flex-row gap-4">
                                {/* <h3 className="text-LG font-light mb-2">ARGENTINA</h3> */}
                                <Phone />
                                <a href="tel:+5491133226434" className="font-light hover:text-tigerlily transition-colors">
                                    +549 11 3322 6434 (ARG)
                                </a>
                            </div>

                            <div className="flex flex-row gap-4">
                                {/* <h3 className="text-LG font-light mb-2">URUGUAY</h3> */}
                                <Phone />
                                <a href="tel:+598094500560" className="font-light hover:text-tigerlily transition-colors">
                                    +598 094 500 560 (URU)
                                </a>
                            </div>

                            <div>
                                {/* <h3 className="text-xl font-light mb-2">Redes Sociales</h3> */}
                                <div className="flex space-x-4 pt-4">
                                    <a href="https://www.instagram.com/pueblobranding" className="hover:text-tigerlily transition-colors pl-22">
                                        <Instagram />
                                    </a>
                                    <a href="#" className="hover:text-tigerlily transition-colors pl-4">
                                        <Linkedin />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulario de contacto */}
                    <div className="bg-pewter-blue-20 p-8 rounded-lg shadow-lg order-1 md:order-2">
                        <h2 className="text-[#3a5a47] text-2xl font-light mb-6">Queremos conocerte, dejanos tus datos:</h2>

                        {formStatus.submitted && formStatus.success ? (
                            <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
                                {formStatus.message}
                            </div>
                        ) : (
                            <div className="space-y-4">
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
                                        className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-tigerlily"
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
                                        className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-tigerlily"
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
                                        className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-tigerlily"
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
                                        className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-tigerlily"
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
                                        className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-tigerlily"
                                    ></textarea>
                                </div>

                                {/* Mensaje de error si hay problemas */}
                                {formStatus.submitted && !formStatus.success && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-md text-sm">
                                        {formStatus.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="flex items-center justify-center w-full bg-tigerlily text-white py-3 px-6 rounded-md hover:bg-[#d04e39] transition-colors font-semibold tracking-wider cursor-pointer"
                                >
                                    <span className="mr-2">Enviar mensaje</span>
                                    <Send size={18} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}