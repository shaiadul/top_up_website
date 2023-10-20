/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "uidapi.xdomainhost.com",
      "seeklogo.com",
      "download.logo.wine",
    ],
  },
};

module.exports = nextConfig;
