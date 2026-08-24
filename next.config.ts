import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'recharts',
      'gsap',   
      '@gsap/react',
      'swiper',
      'lenis',
      '@base-ui/react',
    ],
  },

  images: { 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.r2.dev', // Allows any R2 dev domain
      },
    ],
   },
};

export default nextConfig;