import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // Unsplash CDN — hero, atmospheric and lifestyle placeholder images.
        // Replace lifestyle shots with real store photography when available.
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        // Stone & Wood Brewing Co — official product imagery
        protocol: "https",
        hostname: "stoneandwood.com.au",
      },
      {
        // Mountain Culture Beer Co — official product imagery
        protocol: "https",
        hostname: "mountainculture.com.au",
      },
      {
        // KG Liquor CDN (parent group)
        protocol: "https",
        hostname: "kgliquor.com.au",
      },
    ],
  },
};

export default nextConfig;
