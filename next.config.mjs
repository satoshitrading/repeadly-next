/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
    { protocol: 'https', hostname: 'nmgprod.s3.amazonaws.com' }
    ],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  experimental: {
    serverActions: {
      enabled: true
    },
    optimizePackageImports: []
  },
  webpack: (config) => {
    return config
  }
};

export default nextConfig;
