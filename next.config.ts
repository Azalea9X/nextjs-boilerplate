import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Custom Next.js configuration options
   */
  reactStrictMode: true,
  images: {
    /**
     * Allow loading images from remote sources
     */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "**", // Allow all paths under cdn.sanity.io
      },
    ],
  },
};

export default nextConfig;