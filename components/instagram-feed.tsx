"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, MessageCircle, ExternalLink, Loader2, PlayCircle } from "lucide-react" // Agregado PlayCircle
import { fetchInstagramPosts } from "@/app/actions/instagram-actions"

interface InstagramPost {
  id: string
  media_url: string
  permalink: string
  caption?: string
  media_type: string
  thumbnail_url?: string
  timestamp: string
  likes_count?: number
  comments_count?: number
}

interface InstagramFeedProps {
  username: string
  limit?: number
  columns?: 1 | 2 | 3 | 4
  showCaption?: boolean
  showUsername?: boolean
  containerClassName?: string
}

export default function InstagramFeed({
  username,
  limit = 6,
  columns = 3,
  showCaption = false,
  showUsername = true,
  containerClassName = "",
}: InstagramFeedProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true)
        const data = await fetchInstagramPosts(username, limit)
        setPosts(data)
      } catch (err) {
        console.error("Error fetching Instagram posts:", err)
        setError("No se pudieron cargar las publicaciones de Instagram")
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [username, limit])

  // Determinar el número de columnas para la cuadrícula
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  }[columns]

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
        <span className="ml-2 text-gray-500">Cargando publicaciones de Instagram...</span>
      </div>
    )
  }

  if (error) {
    return <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>
  }

  if (posts.length === 0) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded">
        No se encontraron publicaciones para el usuario @{username}
      </div>
    )
  }

  return (
    <div className={`instagram-feed ${containerClassName}`}>
      {showUsername && (
        <div className="flex items-center justify-center mb-6">
          <Link
            href={`https://www.instagram.com/${username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-tr from-yellow-400 to-pink-600 rounded-full flex items-center justify-center mr-2">
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-tr from-yellow-500 to-pink-600 rounded-full"></div>
              </div>
            </div>
            <span className="font-medium">@{username}</span>
          </Link>
        </div>
      )}

      <div className={`grid ${gridCols} gap-4`}>
        {posts.map((post) => (
          <div
            key={post.id}
            className="instagram-post bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* <Link href={post.permalink} target="_blank" rel="noopener noreferrer" className="block relative"> */}
              <div className="aspect-square relative overflow-hidden">
                {post.media_type === "VIDEO" ? (
                  // Renderizar el video
                  <video
                    src={post.media_url}
                    poster={post.thumbnail_url} // Muestra la miniatura antes de que el video se reproduzca
                    loop // El video se repite
                    muted // Inicia silenciado
                    playsInline // Importante para la reproducción en dispositivos iOS
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    onMouseEnter={(e) => e.currentTarget.play()} // Reproducir al pasar el ratón
                    onMouseLeave={(e) => {
                      e.currentTarget.pause(); // Pausar al quitar el ratón
                      e.currentTarget.currentTime = 0; // Reiniciar el video al principio
                    }}
                  />
                ) : (
                  // Renderizar la imagen (comportamiento actual para IMAGE y CAROUSEL_ALBUM)
                  <Image
                    src={post.media_url}
                    alt={post.caption?.substring(0, 100) || "Instagram post"}
                    fill
                    unoptimized={true}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* Overlay para el enlace externo (siempre presente en la esquina superior derecha del post) */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div> */}

                {/* Icono de reproducción para videos, visible para indicar que es un video */}
                {post.media_type === "VIDEO" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
                  </div>
                )}
              </div>
            {/* </Link> */}

            <div className="p-3">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <div className="flex items-center">
                  <Heart className="w-4 h-4 mr-1" />
                  <span>{post.likes_count || "—"}</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  <span>{post.comments_count || "—"}</span>
                </div>
                <div className="text-xs">
                  {new Date(post.timestamp).toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "short",
                  })}
                </div>
              </div>

              {showCaption && post.caption && <p className="text-sm text-gray-700 line-clamp-2">{post.caption}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}