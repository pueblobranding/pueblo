import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',  // Dejar en blanco si es el puerto por defecto (80 para HTTP, 443 para HTTPS)
        pathname: '/**', // Permite cualquier ruta dentro de picsum.photos
      },
    ],
  },

};

export default nextConfig;
