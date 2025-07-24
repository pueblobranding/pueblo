"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { Mail, Phone, Instagram, Linkedin } from "lucide-react"

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

    const [errors, setErrors] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });

    // Site Key desde variables de entorno
    const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""

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

        // Limpiar el error para el campo que se está editando
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    }

    const validateForm = () => {
        const { nombre, email, mensaje } = formData;
        const newErrors = { nombre: "", email: "", mensaje: "" };
        let isValid = true;

        if (!nombre.trim()) {
            newErrors.nombre = "El nombre es obligatorio.";
            isValid = false;
        }

        if (!email.trim()) {
            newErrors.email = "El email es obligatorio.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "El formato del email no es válido.";
            isValid = false;
        }

        if (!mensaje.trim()) {
            newErrors.mensaje = "El mensaje es obligatorio.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            return;
        }
        setErrors({ nombre: "", email: "", mensaje: "" });

        if (window.grecaptcha && RECAPTCHA_SITE_KEY) {
            try {
                const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact_form' })
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
            console.error("reCAPTCHA no está cargado o no hay Site Key.")
            setFormStatus({
                submitted: true,
                success: false,
                message: "Error de configuración. Contacta al administrador.",
            })
        }
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

            if (response.ok) {
                setFormStatus({
                    submitted: true,
                    success: true,
                    message: "¡Gracias por contactarnos! Te responderemos a la brevedad.",
                })
                setFormData({
                    nombre: "",
                    email: "",
                    telefono: "",
                    empresa: "",
                    mensaje: "",
                })
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error en el servidor');
            }
        } catch (apiError) {
            console.error('Error de API:', apiError)
            setFormStatus({
                submitted: true,
                success: false,
                message: "Ocurrió un error al enviar el formulario. Por favor, intenta más tarde.",
            })
        }
    }

    return (
        <section
            id="contacto"
            className="relative min-h-screen flex items-center justify-center px-4 pb-20 text-white"
            style={{
                backgroundImage: `
            linear-gradient(#486955aa, #486955cc), 
            url('/contacto-background.webp')
          `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="container mx-auto max-w-5xl">
                <h1 style={{ fontFamily: 'dream-avenue' }} className="text-4xl md:text-5xl lg:text-6xl text-center mb-16 tracking-wider mt-20">
                    A UN CLICK DE DISTANCIA
                </h1>

                <div className="grid-reverse md:grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="text-white order-2 md:order-1 ml-8 pb-10" >
                        <h2 className="text-3xl mb-8 tracking-wider">¿NOS TOMAMOS <br /> UN CAFÉ VIRTUAL?</h2>
                        <div className="space-y-6 text-lg">
                            <div className="flex flex-row gap-4">
                                <Mail />
                                <a href="mailto:hola@pueblo.com.ar" className="hover:text-tigerlily transition-colors">
                                    hello@pueblobranding.com
                                </a>
                            </div>
                            <div className="flex flex-row gap-4">
                                <Phone />
                                <a href="https://api.whatsapp.com/send?phone=+5491133226434&text=%20" target="_blank" rel="noopener noreferrer" className="hover:text-tigerlily transition-colors">
                                    {/* <a href="tel:+5491133226434" className="font-light hover:text-tigerlily transition-colors tracking-wider"> */}
                                    +549 11 3322 6434 (ARG)
                                </a>
                            </div>
                            <div className="flex flex-row gap-4">
                                <Phone />
                                <a href="https://api.whatsapp.com/send?phone=+598094500560&text=%20" target="_blank" rel="noopener noreferrer" className="hover:text-tigerlily transition-colors">
                                    {/* <a href="tel:+598094500560" className="font-light hover:text-tigerlily transition-colors tracking-wider"> */}
                                    +598 094 500 560 (URU)
                                </a>
                            </div>
                            <div>
                                <div className="flex space-x-4 pt-4">
                                    <a href="https://www.instagram.com/pueblobranding" className="transition-colors">
                                        <div className="rounded-full bg-verde-opalo-80 p-3 inline-flex hover:bg-tigerlily transition-colors">
                                            <Instagram />
                                        </div>
                                    </a>
                                    <a href="https://www.linkedin.com/company/pueblo-branding" className="text-white transition-colors">
                                        <div className="rounded-full bg-verde-opalo-80 p-3 inline-flex hover:bg-tigerlily transition-colors">
                                            <Linkedin />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-pewter-blue-20 p-8 rounded-lg shadow-lg order-1 md:order-2">
                        {formStatus.submitted && formStatus.success ? (
                            <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
                                {formStatus.message}
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate>
                                <h2 className="text-verde-opalo-100 text-2xl font-light mb-6">Queremos conocerte, dejanos tus datos:</h2>
                                <div className="space-y-4 text-verde-opalo-100 font-semibold">
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
                                        {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
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
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
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
                                        {errors.mensaje && <p className="text-red-500 text-xs mt-1">{errors.mensaje}</p>}
                                    </div>

                                    {formStatus.submitted && !formStatus.success && (
                                        <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-md text-sm">
                                            {formStatus.message}
                                        </div>
                                    )}

                                    <div className="pt-4 text-center">
                                        <button
                                            type="submit"
                                            className="flex items-center justify-center m-auto bg-tigerlily text-white py-3 px-6 rounded-full hover:bg-[#d04e39] transition-colors font-semibold tracking-wider cursor-pointer"
                                        >
                                            <span className="mr-2">¿QUERÉS QUE CONVERSEMOS?</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}