import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: 
      [
        {
          protocol: 'https',
          hostname: 'images.ctfassets.net',
          port: '',
          pathname: '/c8pl9nkqmru6/**',
          search: '',
        },
      ],
  },
};

export default nextConfig;
