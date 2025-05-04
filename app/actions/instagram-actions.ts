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

// Caché para almacenar las respuestas y evitar llamadas repetidas
const CACHE_TIME = 3600000 // 1 hora en milisegundos
const cachedPosts: { [key: string]: { data: InstagramPost[]; timestamp: number } } = {}

// Función para obtener los posts de Instagram
export const fetchInstagramPosts = cache(async (username: string, limit = 6): Promise<InstagramPost[]> => {
  // Verificar si tenemos datos en caché y si son recientes
  const cacheKey = `${username}_${limit}`
  const now = Date.now()

  if (cachedPosts[cacheKey] && now - cachedPosts[cacheKey].timestamp < CACHE_TIME) {
    return cachedPosts[cacheKey].data
  }

  // En un entorno real, aquí usaríamos la API de Instagram Graph
  // Para este ejemplo, generaremos datos de muestra
  const mockPosts: InstagramPost[] = Array.from({ length: limit }, (_, i) => ({
    id: `post_${i + 1}`,
    media_url: `https://picsum.photos/seed/${username}${i}/500/500`,
    permalink: `https://www.instagram.com/p/mock${i + 1}/`,
    caption: i % 2 === 0 ? `¡Una publicación increíble de ${username}! #instagram #feed #automatico` : undefined,
    media_type: "IMAGE",
    timestamp: new Date(Date.now() - i * 86400000).toISOString(), // Cada post es un día más antiguo
    likes_count: Math.floor(Math.random() * 1000),
    comments_count: Math.floor(Math.random() * 100),
  }))

  // Guardar en caché
  cachedPosts[cacheKey] = {
    data: mockPosts,
    timestamp: now,
  }

  return mockPosts
})

// NOTA: En un entorno de producción, necesitarías implementar la autenticación con la API de Instagram Graph
// Aquí hay un ejemplo de cómo sería la implementación real:

/*
export const fetchInstagramPosts = cache(async (username: string, limit: number = 6): Promise<InstagramPost[]> => {
  // Verificar caché
  const cacheKey = `${username}_${limit}`
  const now = Date.now()
  
  if (cachedPosts[cacheKey] && now - cachedPosts[cacheKey].timestamp < CACHE_TIME) {
    return cachedPosts[cacheKey].data
  }

  try {
    // Obtener el ID de usuario de Instagram
    const userResponse = await fetch(
      `https://graph.instagram.com/me?fields=id,username&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
    )
    const userData = await userResponse.json()
    
    if (!userData.id) {
      throw new Error('No se pudo obtener el ID de usuario de Instagram')
    }

    // Obtener las publicaciones
    const response = await fetch(
      `https://graph.instagram.com/${userData.id}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count&limit=${limit}&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
    )
    const data = await response.json()

    if (!data.data) {
      throw new Error('No se pudieron obtener las publicaciones de Instagram')
    }

    const posts: InstagramPost[] = data.data.map((post: any) => ({
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
*/
