"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { Send, Mail, Phone, Instagram, Linkedin } from "lucide-react"

// Declarar el tipo para reCAPTCHA en window
declare global {
  interface Window {
    grecaptcha: any;
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

    const [isLoading, setIsLoading] = useState(false)
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)

    // Site Key desde variables de entorno
    const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test key para desarrollo

    // Función para cargar reCAPTCHA
    const loadRecaptcha = useCallback(() => {
        if (window.grecaptcha || !RECAPTCHA_SITE_KEY) {
            setRecaptchaLoaded(true)
            return
        }

        const script = document.createElement('script')
        script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
        script.async = true
        script.defer = true
        
        script.onload = () => {
            // Esperar a que grecaptcha esté listo
            const checkReady = () => {
                if (window.grecaptcha && window.grecaptcha.ready) {
                    window.grecaptcha.ready(() => {
                        setRecaptchaLoaded(true)
                    })
                } else {
                    setTimeout(checkReady, 100)
                }
            }
            checkReady()
        }

        script.onerror = () => {
            console.error('Error al cargar reCAPTCHA')
            setRecaptchaLoaded(false)
        }

        document.head.appendChild(script)
    }, [RECAPTCHA_SITE_KEY])

    useEffect(() => {
        loadRecaptcha()
    }, [loadRecaptcha])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
        
        // Limpiar mensajes de error cuando el usuario empiece a escribir
        if (formStatus.submitted && !formStatus.success) {
            setFormStatus(prev => ({ ...prev, submitted: false, message: "" }))
        }
    }

    const getRecaptchaToken = async (): Promise<string | null> => {
        if (!window.grecaptcha || !recaptchaLoaded) {
            throw new Error('reCAPTCHA no está disponible')
        }

        return new Promise((resolve, reject) => {
            window.grecaptcha.ready(async () => {
                try {
                    const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { 
                        action: 'contact_form' 
                    })
                    resolve(token)
                } catch (error) {
                    reject(error)
                }
            })
        })
    }

    const submitForm = async (token: string) => {
        try {
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

            const data = await response.json()

            if (response.ok) {
                setFormStatus({
                    submitted: true,
                    success: true,
                    message: data.message || "¡Gracias por contactarnos! Te responderemos a la brevedad.",
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
                throw new Error(data.message || 'Error en el servidor')
            }
        } catch (error) {
            // En desarrollo, simular éxito
            if (process.env.NODE_ENV === 'development') {
                setFormStatus({
                    submitted: true,
                    success: true,
                    message: "¡Mensaje enviado exitosamente! (Modo desarrollo)",
                })
                
                setFormData({
                    nombre: "",
                    email: "",
                    telefono: "",
                    empresa: "",
                    mensaje: "",
                })
            } else {
                throw error
            }
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        // Validaciones básicas
        if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
            setFormStatus({
                submitted: true,
                success: false,
                message: "Por favor completa todos los campos obligatorios.",
            })
            return
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            setFormStatus({
                submitted: true,
                success: false,
                message: "Por favor ingresa un email válido.",
            })
            return
        }

        setIsLoading(true)
        setFormStatus({ submitted: false, success: false, message: "" })
        
        try {
            if (!recaptchaLoaded) {
                throw new Error('reCAPTCHA no está cargado. Intenta recargar la página.')
            }

            const token = await getRecaptchaToken()
            if (!token) {
                throw new Error('No se pudo generar el token de verificación')
            }
            
            await submitForm(token)
        } catch (error) {
            console.error('Error:', error)
            setFormStatus({
                submitted: true,
                success: false,
                message: error instanceof Error ? error.message : "Error inesperado. Intenta nuevamente.",
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section id="contacto" className="min-h-screen bg-white flex items-center px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Título principal */}
                <h1 style={{ fontFamily: 'dream-avenue'}} className="text-verde-opalo-100 text-4xl md:text-5xl lg:text-6xl text-center mb-16 tracking-wider mt-20">
                    CONTACTANOS
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Información de contacto */}
                    <div className="text-white order-2 md:order-1 ml-8">
                        <h2 className="text-tigerlily text-3xl font-light mb-8 tracking-wider">¿NOS TOMAMOS UN CAFÉ VIRTUAL?</h2>

                        <div className="space-y-6 text-verde-opalo-100">
                            <div className="flex flex-row gap-4">
                                <Mail />
                                <a href="mailto:hello@pueblobranding.com" className="font-light hover:text-tigerlily transition-colors">
                                    hello@pueblobranding.com
                                </a>
                            </div>

                            <div className="flex flex-row gap-4">
                                <Phone />
                                <a href="tel:+5491133226434" className="font-light hover:text-tigerlily transition-colors">
                                    +549 11 3322 6434 (ARG)
                                </a>
                            </div>

                            <div className="flex flex-row gap-4">
                                <Phone />
                                <a href="tel:+598094500560" className="font-light hover:text-tigerlily transition-colors">
                                    +598 094 500 560 (URU)
                                </a>
                            </div>

                            <div>
                                <h3 className="text-xl font-light mb-2">Redes Sociales</h3>
                                <div className="flex space-x-4">
                                    <a href="https://www.instagram.com/pueblobranding" target="_blank" rel="noopener noreferrer" className="hover:text-tigerlily transition-colors">
                                        <Instagram />
                                    </a>
                                    <a href="#" className="hover:text-tigerlily transition-colors">
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
                                <p className="font-medium">{formStatus.message}</p>
                                <button 
                                    onClick={() => setFormStatus({ submitted: false, success: false, message: "" })}
                                    className="mt-3 text-sm text-green-600 hover:text-green-800 underline"
                                >
                                    Enviar otro mensaje
                                </button>
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
                                        disabled={isLoading}
                                        className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-tigerlily disabled:opacity-50"
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
                                        disabled={isLoading}
                                        className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-tigerlily disabled:opacity-50"
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
                                        disabled={isLoading}
                                        className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-tigerlily disabled:opacity-50"
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
                                        disabled={isLoading}
                                        className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-tigerlily disabled:opacity-50"
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
                                        disabled={isLoading}
                                        className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-tigerlily disabled:opacity-50"
                                    ></textarea>
                                </div>

                                {/* Mensaje de error */}
                                {formStatus.submitted && !formStatus.success && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-md text-sm">
                                        {formStatus.message}
                                    </div>
                                )}

                                {/* Estado de reCAPTCHA */}
                                {!recaptchaLoaded && (
                                    <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-3 rounded-md text-sm">
                                        Cargando verificación de seguridad...
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isLoading || !recaptchaLoaded}
                                    className="flex items-center justify-center w-full bg-tigerlily text-white py-3 px-6 rounded-md hover:bg-[#d04e39] transition-colors font-semibold tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                            <span>Enviando...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="mr-2">Enviar mensaje</span>
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}