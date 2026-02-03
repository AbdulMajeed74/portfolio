import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
    },
    experimental: {
        optimizeCss: true, // Requires 'critters' package, but safe to enable in config
    },
};

export default nextConfig;
