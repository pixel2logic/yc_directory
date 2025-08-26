import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirecting user via input and output queries
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      }
    ]
  }
};

export default nextConfig;
