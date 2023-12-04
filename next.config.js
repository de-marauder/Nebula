/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: [
    //   "api.unsplash.com",
    //   "unsplash.com",
    // ]
     remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
    ],

  }
}

module.exports = nextConfig
