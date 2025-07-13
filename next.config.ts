import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'unsplash.com',
      },
      {
        hostname: 'i.ibb.co',
      },
    ],
  },
}

export default nextConfig
