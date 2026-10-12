import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server build for the VPS move; Vercel ignores it.
  output: "standalone",
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
