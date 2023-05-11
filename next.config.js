/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: { webpack5: true },
  images: {
    domains: ["assets.iceable.com"],
  },
};

module.exports = nextConfig;
