"use server"

import { cache } from "react"

// Interfaz para los posts de Instagram
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

interface InstagramApiResponse {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  media_type: string;
  thumbnail_url?: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

// Caché para almacenar las respuestas y evitar llamadas repetidas
const CACHE_TIME = 3600000 // 1 hora en milisegundos
const cachedPosts: { [key: string]: { data: InstagramPost[]; timestamp: number } } = {}

export const fetchInstagramPosts = cache(async (username: string, limit: number = 6): Promise<InstagramPost[]> => {
  // Verificar caché
  const cacheKey = `${username}_${limit}`
  const now = Date.now()
  
  if (cachedPosts[cacheKey] && now - cachedPosts[cacheKey].timestamp < CACHE_TIME) {
    return cachedPosts[cacheKey].data
  }

  try {
    // Obtener las publicaciones del usuario autenticado
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count&limit=${limit}&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
    )
    const data = await response.json()

    if (!data.data) {
      throw new Error('No se pudieron obtener las publicaciones de Instagram')
    }

    const posts: InstagramPost[] = data.data.map((post: InstagramApiResponse) => ({
      id: post.id,
      media_url: post.media_url,
      permalink: post.permalink,
      caption: post.caption,
      media_type: post.media_type,
      thumbnail_url: post.thumbnail_url,
      timestamp: post.timestamp,
      likes_count: post.like_count,
      comments_count: post.comments_count,
    }))

    // Guardar en caché
    cachedPosts[cacheKey] = {
      data: posts,
      timestamp: now,
    }

    return posts
  } catch (error) {
    console.error('Error al obtener publicaciones de Instagram:', error)
    throw new Error('No se pudieron cargar las publicaciones de Instagram')
  }
})
