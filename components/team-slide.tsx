"use client"

import Image from "next/image"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

interface TeamMember {
    id: number
    name: string
    role: string
    image: string
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Marinha",
        role: "Prensa",
        image: "/foto-marinha.png?height=120&width=120",
    },
    {
        id: 3,
        name: "Adri",
        role: "Diseño",
        image: "/placeholder.svg?height=120&width=120",
    },
    {
        id: 2,
        name: "Pablo X Lospennato",
        role: "Web y programación",
        image: "/pol-ia.png?height=120&width=120",
    },
    {
        id: 4,
        name: "Alan Montalvo Amador",
        role: "Aguatero",
        image: "/placeholder.svg?height=120&width=120",
    }
]

export default function TeamSlide() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 300
            const currentScroll = scrollRef.current.scrollLeft
            const targetScroll = direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount

            scrollRef.current.scrollTo({
                left: targetScroll,
                behavior: "smooth",
            })
        }
    }

    return (
        <div className="w-full max-w-4xl mx-8 md:mx-auto p-6">
            <div className="relative">
                {/* Navigation Buttons */}
                <button
                    className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-black/10 text-white p-2 rounded-full hover:bg-black/30 color-transition cursor-pointer"
                    aria-label="Anterior"
                    onClick={() => scroll("left")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                    {/* <ChevronLeft className="h-4 w-4" /> */}
                </button>

                <button
                    onClick={() => scroll("right")}
                    className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-black/10 text-white p-2 rounded-full hover:bg-black/30 color-transition cursor-pointer"
                    aria-label="Siguiente"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>

                {/* Scrollable Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto scrollbar-hide px-2 py-4"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="flex-shrink-0 flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 min-w-[250px]"
                        >
                            <div className="relative w-24 h-24 mb-4">
                                <Image
                                    src={member.image || "/placeholder.svg"}
                                    alt={`${member.name} profile picture`}
                                    fill
                                    className="rounded-full object-cover"
                                    sizes="96px"
                                />
                            </div>
                            <h3 className="font-semibold text-gray-900 text-lg mb-1">{member.name}</h3>
                            <p className="text-gray-600 text-sm">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
