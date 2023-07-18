/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    exclude: ["/public/assets/P4.jpg"],
  },
}

// const withImages = require('next-images')
// module.exports = withImages()
module.exports = nextConfig
