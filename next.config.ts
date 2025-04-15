import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'img.clerk.com',
        protocol: 'https',
      },
      {
        hostname: 'loyal-guineapig-792.convex.cloud',
        protocol: 'https'
      }
  ]
  },
  env: {
    NEXT_PUBLIC_ALGOLIA_APPID: process.env.NEXT_PUBLIC_ALGOLIA_APPID,
    ALGOLIA_SECRET_KEY: process.env.ALGOLIA_SECRET_KEY,
    NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL
  }
};

export default nextConfig;
