/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint build checks
  },
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript build checks
  },
  reactStrictMode: true, // Enable React strict mode
};

export default nextConfig;
