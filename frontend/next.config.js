/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    suppressHydrationWarning: true,  // Suppresses hydration warnings
  },
};

module.exports = nextConfig;
