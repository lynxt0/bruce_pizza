import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // Unsplash CDN — used for hero and about section placeholder images.
        // Replace with real photos when available.
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        // Facebook CDN — for any images pulled directly from the Facebook page
        protocol: "https",
        hostname: "scontent.fpfo2-1.fna.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;
