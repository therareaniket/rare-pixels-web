import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // output: 'export',
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