/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  experimental: {
    serverActions: {
      enabled: true
    },
    optimizeServerReact: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    return config
  }
};

export default nextConfig;
