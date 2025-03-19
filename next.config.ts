import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.ctfassets.net"], // ✅ Allow Contentful's CDN
  },
};

export default nextConfig;
