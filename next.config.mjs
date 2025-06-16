/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "portfolio-image-store.s3.ap-south-1.amazonaws.com",
      },
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
  serverExternalPackages: [],
  env: {
    CUSTOM_KEY: 'production',
  },
};

export default nextConfig;
