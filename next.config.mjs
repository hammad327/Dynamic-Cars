/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Fix images for static export
  },
  trailingSlash: true, // Helps generate correct paths
};

  

  
export default nextConfig;
