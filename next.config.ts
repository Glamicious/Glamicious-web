import type { NextConfig } from "next";

const comingSoon = process.env.COMING_SOON === "true";

const nextConfig: NextConfig = {
  async rewrites() {
    if (!comingSoon) return [];
    return {
      beforeFiles: [
        { source: "/", destination: "/coming-soon" },
        { source: "/my", destination: "/coming-soon" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
