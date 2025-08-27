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
  },
  // experimental: {
  //   ppr: 'incremental'
  // },
  // devIndicators: {
  //   appIsrStatus: true,
  //   buildActivity: true,
  //   buildActivityPosition: "bottom-right",
  // },
};

export default nextConfig;
