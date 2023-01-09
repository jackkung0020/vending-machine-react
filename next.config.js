/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    FE_API: process.env.FE_API,
  },
}

module.exports = nextConfig
