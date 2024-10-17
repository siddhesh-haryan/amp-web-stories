/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.pixabay.com'], // if you're using external images
      },
    experimental: {
      amp: {
        enabled: true
      }
    }
  };

export default nextConfig;
