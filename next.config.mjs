/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export
  images: {
    unoptimized: true, // Fix images for static export
  },
  trailingSlash: true, // Ensure trailing slash for proper routing
};

export default nextConfig;
